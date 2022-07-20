<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/func_datetime.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

function holiday($cnn,$date){
    $rec = $cnn->query("select * from holiday where holiday_date='$date' and status_use='Y';");
    $result = FALSE;//เป็นวันทำการ
    if($rec->num_rows >0){
        $result = TRUE;//เป็นวันหยุด
    }
    $rec->close();
    return $result;
}
function leave_absence_vacation_summary($cnn,$dt){
    $err = [];
    $sql1 = "select admission_date as d1,CURDATE() as d2 from person where id='$dt->person_id';";
    $rs1 = $cnn->query($sql1);
    if($rs1->num_rows >0){
        //คำนวนอายุราชการ
        while ($cols1 = $rs1->fetch_assoc()){
            $d1 = $cols1['d1'];
            $d2 = $cols1['d2'];
        }
        $yearWork = (int)(datediff($d1,$d2)[0]);//จำนวนปีที่ทำงาน
        //หาประเภทบุคลากร
        $rs2 = $cnn->query("select * from person where id = '$dt->person_id';");
        if($rs2->num_rows >0){
            while ($cols2 = $rs2->fetch_assoc()){
                $government_emp_type = $cols2['government_emp_type'];//ประเภทบุคลากร ขรก พรก พกส ลจป ลจช
            }
        }else{
            array_push($err,"ไม่พบข้อมูล ".$dt->person_id." ในตาราง person");
        }
        //concat string เพื่อเทียบหาข้อมูลในตาราง leave_absence_vacation
        $txtPlus="";
        $txtCompare ="";
        if($government_emp_type == 'A' || $government_emp_type == 'B'){
            if($yearWork<10){
                $txtPlus = "10";
            }else if($yearWork>=10){
                $txtPlus = "10plus";
            }
        }
        if($government_emp_type == 'C' || $government_emp_type == 'D' ||  $government_emp_type == 'E'){
            if($yearWork<1){
                $txtPlus = "1";
            }else if($yearWork>=1){
                $txtPlus = "1plus";
            }
        }
        //เรียกตารางสิทธิ์การลาพักผ่อนมาประมวลผล 
        $rs3 = $cnn->query("select * from leave_absence_vacation where status_use='Y';");
        if($rs3){
            while ($cols3 = $rs3->fetch_assoc()){
                if( substr($cols3['type_emp_name1'],0,1) === $government_emp_type ){
                    $txtCompare =$government_emp_type.'_'.$txtPlus;
                    if($txtCompare == $cols3['type_emp_name1']){
                        $num1 = (float)$cols3['leave_vacation_keep_num'];//สิทธิในการสะสมวันลาว่ากี่วัน max_keep_numday
                        $num2 = (float)$cols3['leave_vacation_inyear_num'];//สิทธิในการลาพักผ่อนประจำปี now_year_numday
                    }
                }
            }
        }else{
            array_push($err,"ไม่พบข้อมูลในตาราง leave_absence_vacation");
        }
        
        //เรียกตาราง leave_absence_vacation_summary เพื่อหาวันลาพักผ่อนสะสมปีที่แล้ว 
        $NowYearGov = (int)fiscalYear(end($dt->days));//ปีงบประมาณปัจจุบัน
        $LastYearGov = $NowYearGov -1;//ปีงบประมาณที่แล้ว
        
        //$num3 วันลาพักผ่อนสะสมคงเหลือ ยอดยกมา (หา net_numday ปีที่แล้ว เงื่อนไข query คือ $LastYearGov)
        $num3 = 0;
        $rs4 = $cnn->query("select net_numday from leave_absence_vacation_summary where person_id='$dt->person_id' and year_gov_now='$LastYearGov' and status_use='Y';");
        if($rs4->num_rows >0){
            while ($cols4 = $rs4->fetch_assoc()){
                $num3 = (float)$cols4['net_numday'];//วันลาพักผ่อนคงเหลือสะสม(ยกมาจาก net_numday ปีที่แล้ว)
            }
        }
        
        //$num4 ผลรวม วันลาพักผ่อนคงเหลือสะสม + สิทธิในการลาพักผ่อนประจำปี
        $num4 = (float)($num2+$num3);
        if($num4>$num1){//ถ้า $num4 มีมากกว่า สิทธิในการสะสมวันลา  ก็ให้คิดแค่ตามสิทธินั้น 
            $num4 = $num1;
        }
        //$num5 คำนวณหาผลรวมวันลาในครั้งนี้
        $num5 = 0;
        if($dt->LeaveAbsenceName=='1'){
            foreach ($dt->days as $k => $v) {
                $num5 += (float)(($dt->fullhalf=='1')?1:0.5);
            }
        }
        //$num6 คำนวณหาว่า ณ วันนี้ลาพักผ่อนมาแล้วกี่วัน
        $num6 = 0;
        $rs5 = $cnn->query("select leave_num_day "
                . "from leave_absence "
                . "where person_id='$dt->person_id' and leave_absence_id='1' "
                . "and leave_year_gov='$NowYearGov'  and status_use='Y' and record_use='Y';");/*and holiday_on_off='Y'*/
        if($rs5->num_rows >0){
            while ($cols5 = $rs5->fetch_assoc()){
                $num6 += (float)$cols5['leave_num_day'];
            }
        }
        
        $num7 = (float)($num4 - $num6);//$num7 วันลาคงเหลือสุทธิ (ยกไปปีหน้า)  
        
        //แยกว่าจะ insert หรือ update
        $rs6 = $cnn->query("select * from leave_absence_vacation_summary where person_id='$dt->person_id' and year_gov_now='$NowYearGov' and status_use='Y';");
        if($rs6->num_rows >0){//มีอยู่แล้ว ให้ update
            $cnn->query("update leave_absence_vacation_summary set "
            . "summary_keep_numday='$num3',"//$num3 วันลาพักผ่อนสะสมคงเหลือ ยอดยกมาจากปีที่แล้ว
            . "max_keep_numday='$num1',"//$num1 สิทธิในการสะสมวันลา
            . "now_year_numday='$num2',"//$num2 สิทธิในการลาพักผ่อนประจำปี
            . "sum_keep_and_now_numday='$num4',"//$num4 ผลรวม $num2 + $num3 แต่ถ้าเกิน $num1 ให้คิดแค่ $num1
            . "now_day_leave_numday='$num5',"//$num5 ลาครั้งนี้กี่วัน
            . "total_day_leave_numday='$num6',"//$num6 ณ วันนี้ลาพักผ่อนมาแล้วกี่วัน
            . "net_numday='$num7',"//$num7 วันลาคงเหลือสุทธิ (ยกไปปีหน้า)
            . "status_use='Y',"
            . "datetime_stamp=NOW() "
            . "where person_id='$dt->person_id' and year_gov_now='$NowYearGov' and status_use='Y'; ");            
        }else{//ยังไม่มีข้อมูลปีงบ ปัจจุบัน ให้ insert ข้อมูล
            $cnn->query("insert into leave_absence_vacation_summary("
            . "person_id,"
            . "year_gov_now,"
            . "summary_keep_numday,"//$num3 วันลาพักผ่อนสะสมคงเหลือ ยอดยกมาจากปีที่แล้ว
            . "max_keep_numday,"//$num1 สิทธิในการสะสมวันลา
            . "now_year_numday,"//$num2 สิทธิในการลาพักผ่อนประจำปี
            . "sum_keep_and_now_numday,"//$num4 ผลรวม $num2 + $num3 แต่ถ้าเกิน $num1 ให้คิดแค่ $num1
            . "now_day_leave_numday,"//$num5 ลาครั้งนี้กี่วัน
            . "total_day_leave_numday,"//$num6 ณ วันนี้ลาพักผ่อนมาแล้วกี่วัน
            . "net_numday,"//$num7 วันลาคงเหลือสุทธิ (ยกไปปีหน้า)
            . "status_use,"
            . "datetime_stamp) "
            . "values("
            . "'$dt->person_id',"
            . "'$NowYearGov',"
            . "'$num3',"
            . "'$num1',"
            . "'$num2',"
            . "'$num4',"
            . "'$num5',"
            . "'$num6',"
            . "'$num7',"
            . "'Y',"
            . "NOW()"
            . ");");
        } 
        
    }else{
        array_push($err,"ไม่พบข้อมูลวันบรรจุของ $dt->person_id");
    }
    
    $rs1->close();
    $rs2->close();
    $rs3->close();
    $rs4->close();
    $rs5->close();
    $rs6->close();
    //$cnn->close(); ทำไม่ได้ 
    return $err;
}

$data = json_decode(filter_input(INPUT_POST,'data'));
$json_print = filter_input(INPUT_POST,'json_print');

if($data->ins_upd=='ins'){
    foreach ($data->days as $key => $days) {
        $numday = ($data->fullhalf=='1')?'1':'0.5';
        $holiday = (holiday($objmysqli,$days))?'N':'Y';
        $objmysqli->query("INSERT INTO leave_absence("
            . "person_id,"
            . "leave_absence_id,"
            . "leave_date,"
            . "leave_year_gov,"  //ปีงบประมาณ
            . "leave_full_half_type_id,"
            . "leave_num_day,"
            . "holiday_on_off,"  //ตรงวันหยุดหรือวันทำการ Y,N
            . "leave_txt_note,"
            . "serialgen,"
            . "serialuse,"
            . "status_use,"
            . "record_use,"
                . "json_print"
            . ") VALUES("
            . "'".$data->person_id."',"
            . "'".$data->LeaveAbsenceName."',"
            . "'".$days."',"
            . "'".fiscalYear($days)."',"
            . "'".$data->fullhalf."',"
            . "'$numday',"
            . "'$holiday',"
            . "'".$data->leave_txt_note."',"
            . "'".$data->serialgen."',"
            . "'".$data->serialuse."',"
            . "'".$data->statusUse."',"
            . "'Y',"
            . "'".$json_print."'"    
            . ")");
    }
}else{
    foreach ($data->days as $keys => $dayss) {
        $numdays = ($data->fullhalf=='1')?'1':'0.5';
        $holidays = (holiday($objmysqli,$dayss))?'N':'Y';
        $objmysqli->query("UPDATE leave_absence "
            . "SET leave_absence_id='".$data->LeaveAbsenceName."',"
            . "leave_date='".$dayss."',"
            . "leave_year_gov='".fiscalYear($dayss)."',"
            . "leave_full_half_type_id='".$data->fullhalf."',"
            . "leave_num_day='$numdays',"
            . "holiday_on_off='$holidays',"
            . "leave_txt_note='".$data->leave_txt_note."',"
            . "serialgen='".$data->serialgen."',"
            . "serialuse='".$data->serialuse."',"
            . "status_use='".$data->statusUse."', "
            . "record_use='".$data->record_use."', "
            . "json_print='".$json_print."' "
            . "WHERE id='".$data->id_upd."';");
    }
}
if(is_string(leave_absence_vacation_summary($objmysqli,$data))){
    echo json_encode(leave_absence_vacation_summary($objmysqli,$data));
}else{
    echo json_encode('ok');
}
$objmysqli->close();

