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

$d = json_decode(filter_input(INPUT_POST,'d'));
/*
foreach ($d as $key1 => $v1) {
   //$leave_id = $v->leave_id;
   foreach($v->json_print as $key2 =>$v2){
       
   }
}
*/
 echo json_encode($d);


$objmysqli->close();
