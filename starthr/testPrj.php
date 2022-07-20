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
//$session_id = session_id();
if ($objmysqli->connect_errno) {exit;}

//start module
$rs = $objmysqli->query("select groupwork_code,document_no from groupwork;");

if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $groupwork[] = $cols;
    }
}
$rs2 = $objmysqli->query("select * from  department;");
while ($cols2 = $rs2->fetch_assoc()){
    foreach ($groupwork as $key => $val){
        $rs3 = $objmysqli->query("update department set document_no = '' where groupwork_code='$val';");
    } 
}



echo json_encode($x);

$objmysqli->close();