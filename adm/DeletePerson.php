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

$id = json_decode(filter_input(INPUT_POST,'id'));
$objmysqli->query("update person set record_use='N' where id='".$id."';");
/*
$objmysqli->query("delete from person where id='".$id."';");
$rs = $objmysqli->query("select max(id) as maxid from person;");
while ($cols = $rs->fetch_assoc()){
    $maxid = $cols['maxid'];
}
$maxid = $maxid+1;
$objmysqli->query("ALTER TABLE person AUTO_INCREMENT=".$maxid.";");    

echo json_encode($maxid);
*/
echo json_encode('ok');
$objmysqli->close();
