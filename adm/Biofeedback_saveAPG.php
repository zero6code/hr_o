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

//object
$param= json_decode(filter_input(INPUT_POST,'param'));

//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
$rsdateNow = $objmysqli->query("SELECT CURDATE() as cdate;");
while ($colsdateNow = $rsdateNow->fetch_assoc()){
    $yeargov = fiscalYear($colsdateNow['cdate']);
}

//หา person_id ว่ามีใน biofeedback_hrv หรือไม่ ถ้ามี ให้ update ถ้าไม่มีให้ insert
$rsFindPid = $objmysqli->query("select * from biofeedback_apg where person_id='".$param->person_id."' and yeargov='".$yeargov."' and status_use='Y';");
$chk = "";
if($rsFindPid->num_rows >0){
    //$chk="upd".$rsFindPid->num_rows;
    $objmysqli->query("UPDATE biofeedback_apg SET "
          ."heartrate='".$param->heartrate."',"  
          ."wavetype_level='".$param->wavetype_level."',"  
          ."waveform_dpi='".$param->waveform_dpi."',"  
          ."waveform_ec='".$param->waveform_ec."',"  
          ."waveform_ae='".$param->waveform_ae."',"  
          ."waveform_rbv='".$param->waveform_rbv."'" 
          ."WHERE person_id='".$param->person_id."' AND yeargov='".$yeargov."' AND status_use='Y';");

}else{
    //$chk="ins".$rsFindPid->num_rows;
    $objmysqli->query("INSERT INTO "
         . "biofeedback_apg(person_id,yeargov,heartrate,wavetype_level,waveform_dpi,waveform_ec,waveform_ae,waveform_rbv,status_use) "
         . "VALUES("
         . "'".$param->person_id."',"
         . "'".$yeargov."',"
         . "'".$param->heartrate."',"
         . "'".$param->wavetype_level."',"
         . "'".$param->waveform_dpi."',"
         . "'".$param->waveform_ec."',"
         . "'".$param->waveform_ae."',"
         . "'".$param->waveform_rbv."',"
         . "'Y'"
         . ");");
}
echo json_encode('ok');

$objmysqli->close();