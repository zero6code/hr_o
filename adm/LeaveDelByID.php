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

$leave_id = json_decode(filter_input(INPUT_POST,'leave_id'));

//start module
$rsCnt = $objmysqli->query("select id from leave_absence where id='$leave_id' AND status_use='E';");

if($rsCnt->num_rows >0){
    $objmysqli->query("UPDATE leave_absence SET record_use='N' WHERE id='$leave_id' AND status_use='E';");
    echo json_encode('ok');
}else{
    echo json_encode("Can't delete by ID=$leave_id");
}
$objmysqli->close();