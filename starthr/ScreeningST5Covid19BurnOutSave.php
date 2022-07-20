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

$obj = json_decode(filter_input(INPUT_POST,'param'));
//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
$rsdateNow = $objmysqli->query("SELECT CURDATE() as cdate;");
while ($colsdateNow = $rsdateNow->fetch_assoc()){
    $currdate = $colsdateNow['cdate'];
    $yeargov = fiscalYear($colsdateNow['cdate']);
}


//start module
$obj->screening_date=$currdate;
$obj->yeargov=$yeargov;
$str_scr_insD = "";
$str_scr_insF = "";
$str_scr_upd = "";
if($obj->screentype =='st5'){
    $str_scr_insF = "st5_score_result";
    $str_scr_insD = $obj->st5_score_result;
    $str_scr_upd = " st5_score_result = '".$obj->st5_score_result."' ";
}else if($obj->screentype =='covid19'){
    $str_scr_insF = "covid19_score_result";
    $str_scr_insD = $obj->covid19_score_result;
    $str_scr_upd = " covid19_score_result = '".$obj->covid19_score_result."' ";
}else if($obj->screentype =='burnout'){
    $str_scr_insF = "burnout_score_result";
    $str_scr_insD = $obj->burnout_score_result;
    $str_scr_upd = " burnout_score_result = '".$obj->burnout_score_result."' ";
}
$rs_RepeatScreenInDays = $objmysqli->query("select * from screening_st5_covid19_burnout_result where person_id='".$obj->person_id."' and screening_date='".$obj->screening_date."' and status_use='Y';");
if($rs_RepeatScreenInDays->num_rows >0){//มีแล้ว update
    $sql = "UPDATE screening_st5_covid19_burnout_result "
         . "SET ".$str_scr_upd
         . "WHERE person_id='".$obj->person_id."' and screening_date='".$obj->screening_date."' and status_use='Y';";
}else{//ยังไม่มีให้ insert
    $sql = "INSERT INTO screening_st5_covid19_burnout_result"
     . "(person_id,".$str_scr_insF.",screening_date,yeargov,status_use) "
     . "VALUES('".$obj->person_id."','".$str_scr_insD."','".$obj->screening_date."','".$obj->yeargov."','Y')";
}

$objmysqli->query($sql);

echo json_encode('saved');

$objmysqli->close();

