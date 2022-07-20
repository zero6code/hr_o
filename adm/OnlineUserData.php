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
$session_id = session_id();
if ($objmysqli->connect_errno) {exit;}
//start module
$rs = $objmysqli->query("select * "
        . "from onlineuser "
        . "where sessid='$session_id' and chkout_datetime IS NULL;  ");
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $json_data = unserialize($cols['json_data']);
    }
    echo json_encode($json_data);
}else{
    echo json_encode('err');
}
$objmysqli->close();