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

//start module
$rs = $objmysqli->query("select * from leave_absence_name where status_use='Y';");
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}
$objmysqli->close();