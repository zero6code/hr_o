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

$stage = json_decode(filter_input(INPUT_POST,'stage'));
$id = json_decode(filter_input(INPUT_POST,'id'));

$objmysqli->query("update gogov set boss_permit_status='$stage' where id='$id';");

//echo json_encode($stage.'_'.$id);
$objmysqli->close();