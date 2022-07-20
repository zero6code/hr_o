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

$d = json_decode(filter_input(INPUT_POST,'d'));
if(filter_input(INPUT_POST,'json_print_str')){
    $json_print_str = filter_input(INPUT_POST,'json_print_str');
}else{
    $json_print_str = '';
}

function holiday($cnn,$date){
    $rec = $cnn->query("select * from holiday where holiday_date='$date' and status_use='Y';");
    $result = FALSE;//เป็นวันทำการ
    if($rec->num_rows >0){
        $result = TRUE;//เป็นวันหยุด
    }
    $rec->close();
    return $result;
}
function leave_absence_vacation_summary($cnn,$year_gov_now,$person_id,$sum_leave_absence_id1){
    $err = [];
    $sql1 = "select admission_date as d1,CURDATE() as d2 from person where id='$person_id';";
    $rs1 = $cnn->query($sql1);
    if($rs1->num_rows >0){
        //คำนวนอายุราชการ
        while ($cols1 = $rs1->fetch_assoc()){
            $d1 = $cols1['d1'];
            $d2 = $cols1['d2'];
        }
        $yearWork = (int)(datediff($d1,$d2)[0]);//จำนวนปีที่ทำงาน
        //หาประเภทบุคลากร
        $rs2 = $cnn->query("select * from person where id = '$person_id';");
        if($rs2->num_rows >0){
            while ($cols2 = $rs2->fetch_assoc()){
                $government_emp_type = $cols2['government_emp_type'];//ประเภทบุคลากร ขรก พรก พกส ลจป ลจช
            }
        }else{
            array_push($err,"ไม่พบข้อมูล ".$person_id." ในตาราง person");
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
        $NowYearGov = (int)$year_gov_now;//ปีงบประมาณปัจจุบัน
        $LastYearGov = $NowYearGov -1;//ปีงบประมาณที่แล้ว
        $NextYearGov = $NowYearGov +1;//ปีงบประมาณหน้า
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
        $num5 = $sum_leave_absence_id1;
        //$num6 คำนวณหาว่า ณ วันนี้ลาพักผ่อนมาแล้วกี่วัน
        $num6 = 0;
        $rs5 = $cnn->query("select leave_num_day "
                . "from leave_absence "
                . "where person_id='$person_id' and leave_absence_id='1' "
                . "and leave_year_gov='$NowYearGov'  and status_use='Y' and record_use='Y';");/*and holiday_on_off='Y'*/
        if($rs5->num_rows >0){
            while ($cols5 = $rs5->fetch_assoc()){
                $num6 += (float)$cols5['leave_num_day'];
            }
        }
        
        $num7 = (float)($num4 - $num6);//$num7 วันลาคงเหลือสุทธิ (ยกไปปีหน้า)  
        
        //แยกว่าจะ insert หรือ update
        $rs6 = $cnn->query("select * from leave_absence_vacation_summary where person_id='$person_id' and year_gov_now='$NextYearGov' and status_use='Y';");
        if($rs6->num_rows <= 0){//ยังไม่มีข้อมูลปีงบประมาณหน้า ให้ insert ข้อมูล
            $cnn->query("insert into leave_absence_vacation_summary("
            . "person_id,"
            . "year_gov_now,"
           // . "summary_keep_numday,"//$num3 วันลาพักผ่อนสะสมคงเหลือ ยอดยกมาจากปีที่แล้ว
            . "max_keep_numday,"//$num1 สิทธิในการสะสมวันลา
            . "now_year_numday,"//$num2 สิทธิในการลาพักผ่อนประจำปี
           // . "sum_keep_and_now_numday,"//$num4 ผลรวม $num2 + $num3 แต่ถ้าเกิน $num1 ให้คิดแค่ $num1
           // . "now_day_leave_numday,"//$num5 ลาครั้งนี้กี่วัน
           // . "total_day_leave_numday,"//$num6 ณ วันนี้ลาพักผ่อนมาแล้วกี่วัน
           // . "net_numday,"//$num7 วันลาคงเหลือสุทธิ (ยกไปปีหน้า)
            . "status_use,"
            . "datetime_stamp) "
            . "values("
            . "'$person_id',"
            . "'$NowYearGov',"
           // . "'$num3',"
            . "'$num1',"
            . "'$num2',"
           // . "'$num4',"
           // . "'$num5',"
           // . "'$num6',"
           // . "'$num7',"
            . "'Y',"
            . "NOW()"
            . ");");
        } 
        
    }else{
        array_push($err,"ไม่พบข้อมูลวันบรรจุของ $person_id");
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
//กำหนดตัวแปร public
$rsNow = $objmysqli->query("SELECT SUBSTRING_INDEX(NOW(),' ',1) as datenow;");
while ($colsNow = $rsNow->fetch_assoc()){
    $year_gov_now= fiscalYear($colsNow['datenow']);//ปีงบประมาณปัจจุบัน
}
$year_gov_next = (int)$year_gov_now +1;//ปีงบประมาณหน้า
$person_id ='';//person_id
$leave_absence_id = '';//ประเภทการลา
$sum_leave_absence_id1 = 0;//ผลรวมวันลาพักผ่อนที่จะลาในครั้งนี้

//insert ข้อมูลวันลา
foreach ($d as $key1 => $v1) {
   $person_id = $v1->person_id;
   $leave_absence_id = $v1->leave_id;

    //หาจำนวนผลรวมวันลาพักผ่อนที่จะลาในครั้งนี้
    if($leave_absence_id=='1'){
        $sum_leave_absence_id1 = $sum_leave_absence_id1 + ( (float)$v1->leave_num_day );
    }

   $leave_date = $v1->leave_date;
   $leave_year_gov = fiscalYear($v1->leave_date);
   $leave_full_half_type_id = $v1->fullhalf;
   $leave_num_day = $v1->leave_num_day;
   $holiday_on_off = (holiday($objmysqli,$v1->leave_date))?'N':'Y';
   $leave_txt_note = $v1->leave_txt_note;
   $leave_txt_note2 = $v1->leave_txt_note2;
   $serialgen = $v1->serialgen;
   $serialuse = '';//user ไม่ต้อง ให้ พุทธิมา ทำ
   $contact_addr = $v1->contact_addr;
   $contact_tel = $v1->contact_tel;
   $status_use = $v1->status_use;
   $record_use = $v1->record_use;
    
       $objmysqli->query("INSERT INTO leave_absence("
       . "person_id,"
       . "leave_absence_id,"
       . "leave_date,"
       . "leave_year_gov,"
       . "leave_full_half_type_id,"
       . "leave_num_day,"
       . "holiday_on_off,"
       . "leave_txt_note,"
       . "leave_txt_note2,"
       . "serialgen,"
       . "serialuse,"
       . "contact_addr,"
       . "contact_tel,"
       . "json_print,"
       . "status_use,"
       . "record_use"
       . ")VALUES("
       . "'$person_id',"
       . "'$leave_absence_id',"
       . "'$leave_date',"
       . "'$leave_year_gov',"
       . "'$leave_full_half_type_id',"
       . "'$leave_num_day',"
       . "'$holiday_on_off',"
       . "'$leave_txt_note',"
       . "'$leave_txt_note2',"
       . "'$serialgen',"
       . "'$serialuse',"
       . "'$contact_addr',"
       . "'$contact_tel',"
       . "'".$json_print_str."',"       
       . "'$status_use',"
       . "'$record_use'"
       . ");");  
    
}

echo json_encode($d);

//ตรวจสอบ leave_absence_vacation_summary
/*
if($leave_absence_id=='1'){//ถ้าเป็นวันลาพักผ่อนให้ตรวจสอบตาราง leave_absence_vacation_summary ด้วย
    echo json_encode(
        leave_absence_vacation_summary(
            $cnn,
            $year_gov_now,
            $person_id,
            $sum_leave_absence_id1
        )
    );
}
*/
$objmysqli->close();
