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

$objParam = json_decode(filter_input(INPUT_POST,'param'));
$person_id = $objParam->person_id;
$yeargov = $objParam->yeargov;
//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
if(empty($objParam->yeargov)|| !isset($objParam->yeargov)){
    $rsdateNow = $objmysqli->query("SELECT CURDATE() as cdate;");
    while ($colsdateNow = $rsdateNow->fetch_assoc()){
        $yeargov = fiscalYear($colsdateNow['cdate']);
    }
}

$sql = "select * from biofeedback_apg where person_id='".$person_id."' and yeargov='".$yeargov."' and status_use='Y';";
$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found!!');
}

$objmysqli->close();