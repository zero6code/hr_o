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

$iddelete = json_decode(filter_input(INPUT_POST,'iddelete'));

$rs = $objmysqli->query("update gogov_new set status_use='N' where id='$iddelete';");

if($rs){
    echo json_encode('ok');
}else{
    echo json_encode('error');
}

$objmysqli->close();
