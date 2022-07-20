<?php
if(session_id() == '') {
    session_start();
}
/*connect Database*/   
include_once "../connectDB.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
$session_id = session_id();
if ($objmysqli->connect_errno) {exit;}
foreach(array_keys($_SESSION) as $k){//$_SESSION = Array();
   unset($_SESSION[$k]);
}
session_destroy();
if(empty($_SESSION)){
    $objmysqli->query("UPDATE onlineuser SET chkout_datetime=NOW() WHERE sessid='$session_id';");
    unset($session_id);
    //header("Location: http://localhost/hr/starthr/index.php"); /* Redirect browser */
    echo json_encode("emptySesstion!");
    exit();
}
$objmysqli->close();