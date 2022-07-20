<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$Data = json_decode(filter_input(INPUT_POST,'data'));
$pms_result = json_decode(filter_input(INPUT_POST,'pms_result'));

//คำนวณหาวันที่เกษียณอายุราชการ (exit_date ซึ่งคือวันที่ไม่ทำงานแล้ว ไม่ใช่ทำงานวันสุดท้าย)
$exit_date=$Data->exit_date;
if($Data->birth_date){
    if($Data->admission_date){
        if($Data->government_emp_type=='A'||$Data->government_emp_type=='B'){
            //ข้าราชการ-ลจป เกษียณ ณ วันที่ 1 ตุลา ดังนั้นต้องเกิด 2 ตุลาเป็นต้นไปจึงจะบวกให้ 1 ปี 
            $sql_CalcExitDate = "SELECT @y0:=(YEAR('".$Data->birth_date."')+60) AS y0,"
            ."@exit_day1:=CONCAT(@y0,'-10-01') AS exit_day1,"
            ."@exit_day2:=CONCAT(@y0,'-',SUBSTRING_INDEX('".$Data->birth_date."','-',-2)) AS exit_day2,"
            ."@exit_day3:=CONCAT(if( timestampdiff(DAY,@exit_day2,@exit_day1)<=0,@y0+1,@y0 )  ,'-10-01' ) AS exit_day3,"
            ."CONCAT(@exit_day3) AS day_export";
            $rs_CalcExitDate = $objmysqli->query($sql_CalcExitDate);
            while ($cols_CalcExitDate = $rs_CalcExitDate->fetch_assoc()){
                $AB_exp= $cols_CalcExitDate['day_export'];
            }
        }else if($Data->government_emp_type=='C'||$Data->government_emp_type=='D'){
            //พรก พกส-เกษียณ ณ วันสิ้นปีงบประมาณ (30 กย)
            $sql_CalcExitDate = "SELECT @y0:=(YEAR('".$Data->birth_date."')+60) AS y0,"
            ."@exit_day1:=CONCAT(@y0,'-09-30') AS exit_day1,"
            ."@exit_day2:=CONCAT(@y0,'-',SUBSTRING_INDEX('".$Data->birth_date."','-',-2)) AS exit_day2,"
            ."@exit_day3:=CONCAT(if( timestampdiff(DAY,@exit_day2,@exit_day1)<=0,@y0+1,@y0 )  ,'-10-01' ) AS exit_day3,"
            ."CONCAT(@exit_day3) AS day_export";
            $rs_CalcExitDate = $objmysqli->query($sql_CalcExitDate);
            while ($cols_CalcExitDate = $rs_CalcExitDate->fetch_assoc()){
                $AB_exp= $cols_CalcExitDate['day_export'];
            }
        }
        $exit_date=$AB_exp;
    }
}


//เริ่ม insert/update
if($Data->id=='0'){//insert
    $sql_ins = "insert into person("
    . "cid,pass,po_num,pname,fname,lname,position_code,"
    . "class_position_shortname,dep_code,dep_code2,groupwork,"
    . "status_use,government_emp_type,status_note,admission_date,"
    . "exit_date,birth_date,checkin_date,help_in_date,help_in_comefrom_place,"
    . "help_out_date,help_out_goto_place,studyleave_date,"
    . "studyleave_place,studyleave_end_date,record_use)values("
    . "'".$Data->cid."',"
    . "'".$Data->pass."',"
    . "'".$Data->po_num."',"
    . "'".$Data->pname."',"
    . "'".$Data->fname."',"
    . "'".$Data->lname."',"
    . "'".$Data->position_code."',"
    . "'".$Data->class_position_shortname."',"
    . "'".$Data->dep_code."',"
    . "'".$Data->dep_code2."',"
    . "'".$Data->groupwork."',"
    . "'Y'," // . "'".$Data->status_use."',"   
    . "'".$Data->government_emp_type."',"
    . "'".$Data->status_note."',"
    . "'".$Data->admission_date."',"
    . "'".$exit_date."',"
    . "'".$Data->birth_date."',"
    . "'".$Data->checkin_date."',"
    . "'".$Data->help_in_date."',"
    . "'".$Data->help_in_comefrom_place."',"
    . "'".$Data->help_out_date."',"
    . "'".$Data->help_out_goto_place."',"
    . "'".$Data->studyleave_date."',"
    . "'".$Data->studyleave_place."',"
    . "'".$Data->studyleave_end_date."',"
    ."'Y'" 
    . ")";
    //lock ห้ามเขียน ไว้ก่อนเพื่อหาค่า next id
    $objmysqli->query("Lock tables person write;");
    $rsmaxid = $objmysqli->query("select max(id) as id from person;");
    while ($colsmaxid = $rsmaxid->fetch_assoc()){
        $next_id = ((int)$colsmaxid['id'])+1;
    }
    $objmysqli->query("unlock tables;");//ปลด lock table ที่ lock ไว้ทั้งหมด
    $rs_ins = $objmysqli->query($sql_ins);//ทำการ insert person
    //ได้ id ของ person ที่ insert ไปแล้วล่าสุด ไปใช้ใน module อื่นๆ
    if($rs_ins){
        //insert pms_result ได้เลยเพราะเป็น id person record ใหม่ (เพิ่มบุคลากร)
        //$rsPmsRsl = $objmysqli->query("insert into pms_result(person_id) values('$next_id'); ");
        $objmysqli->query("insert into pms_result("
        . "person_id,"
        . "pms_result1,"
        . "pms_result2,"
        . "pms_result3,"
        . "year_gov,"
        . "half_year_gov,"
        . "status_use,"
        . "pms_note"
        . ") values("
        . "'$next_id',"
        . "'".$pms_result->pms_result1."',"
        . "'".$pms_result->pms_result2."',"
        . "'".$pms_result->pms_result3."',"
        . "'".$pms_result->year_gov."',"//ถ้าไม่ระบุ จะเป็นปี พศ ปัจจุบัน
        . "'".$pms_result->half_year_gov."',"//ถ้าไม่ระบุ จะเป็น ครึ่งแรก
        . "'".$pms_result->status_use."',"
        . "'".$pms_result->pms_note."'"
        . "); ");
    }
}else{
    $sql_upd = "update person "
    . "set cid='".$Data->cid."',"
    . "pass='".$Data->pass."',"
    . "po_num='".$Data->po_num."',"
    . "pname='".$Data->pname."',"
    . "fname='".$Data->fname."',"
    . "lname='".$Data->lname."',"
    . "position_code='".$Data->position_code."',"
    . "class_position_shortname='".$Data->class_position_shortname."',"
    . "dep_code='".$Data->dep_code."',"
    . "dep_code2='".$Data->dep_code2."',"
    . "groupwork='".$Data->groupwork."',"
    . "status_use='".$Data->status_use."',"
    . "government_emp_type='".$Data->government_emp_type."',"
    . "status_note='".$Data->status_note."',"
    . "admission_date='".$Data->admission_date."',"
    . "exit_date='".$exit_date."',"
    . "birth_date='".$Data->birth_date."',"
    . "checkin_date='".$Data->checkin_date."',"
    . "help_in_date='".$Data->help_in_date."',"
    . "help_in_comefrom_place='".$Data->help_in_comefrom_place."',"
    . "help_out_date='".$Data->help_out_date."',"
    . "help_out_goto_place='".$Data->help_out_goto_place."',"
    . "studyleave_date='".$Data->studyleave_date."',"
    . "studyleave_place='".$Data->studyleave_place."',"
    . "studyleave_end_date='".$Data->studyleave_end_date."' "
    . "where id=".$Data->id.";";
    $objmysqli->query($sql_upd);
    
    //ผลการเลื่อนเงินเดือน ตาราง pms_result
    $rs_find_pmsRslt = $objmysqli->query("select * "
        . "from pms_result "
        . "where person_id='".$Data->id."' "
        . "and year_gov='".$pms_result->year_gov."' "
        . "and half_year_gov='".$pms_result->half_year_gov."' and status_use='Y';");
    if($rs_find_pmsRslt->num_rows >0){//มี person_id ปีงบ และรอบประเมิน ตามเงื่อนไข ในตาราง pms_result  ให้ update
        if($pms_result->pms_result1!=''||$pms_result->pms_result2!=''||$pms_result->pms_result3!=''){//ต้องกรอกผลมา จึงจะ update
            $objmysqli->query("update pms_result set "
            . "pms_result1='".$pms_result->pms_result1."',"
            . "pms_result2='".$pms_result->pms_result2."',"
            . "pms_result3='".$pms_result->pms_result3."' "
            . "where person_id='".$Data->id."' "
            . "and year_gov='".$pms_result->year_gov."' "
            . "and half_year_gov='".$pms_result->half_year_gov."'; ");
        }
    }else{//ให้ insert
        $objmysqli->query("insert into pms_result("
        . "person_id,"
        . "pms_result1,"
        . "pms_result2,"
        . "pms_result3,"
        . "year_gov,"
        . "half_year_gov,"
        . "status_use,"
        . "pms_note"
        . ") values("
        . "'".$Data->id."',"
        . "'".$pms_result->pms_result1."',"
        . "'".$pms_result->pms_result2."',"
        . "'".$pms_result->pms_result3."',"
        . "'".$pms_result->year_gov."',"//ถ้าไม่ระบุ จะเป็นปี พศ ปัจจุบัน
        . "'".$pms_result->half_year_gov."',"//ถ้าไม่ระบุ จะเป็น ครึ่งแรก
        . "'".$pms_result->status_use."',"
        . "'".$pms_result->pms_note."'"
        . "); ");
    }
}


//client-side
echo json_encode($Data);
$objmysqli->close();

