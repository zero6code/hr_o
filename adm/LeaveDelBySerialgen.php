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

$serialgen = json_decode(filter_input(INPUT_POST,'serialgen'));

//start module
$rsCnt = $objmysqli->query("select serialgen from leave_absence where serialgen='$serialgen';");

if($rsCnt->num_rows >0){
    $objmysqli->query("UPDATE leave_absence SET record_use='N' WHERE serialgen='$serialgen';");
    echo json_encode('ok');
}else{
    echo json_encode("Can't delete because serialgen not found!!");
}
$objmysqli->close();