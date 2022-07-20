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

$id = filter_input(INPUT_POST,'id');

$err_arr = array();
$uploaddir = "../upload/";

if ( 0 < $_FILES['file']['error'] ) {
    array_push($err_arr,'Error: ' . $_FILES['file']['error']);
}else{
    $rs = $objmysqli->query("SELECT REPLACE ((SELECT REPLACE((SELECT REPLACE( NOW(), '-', '' )),':','')),' ','' ) as t;");
    while($cols = $rs->fetch_assoc()){
        $t = $cols['t'];//วันเวลาปัจจุบัน เอาไปตั้งเป็นชื่อไฟล์
    }
    
    $arrFileName = explode(".", $_FILES["file"]["name"]);
    $filename = $t."_".$id.".".end($arrFileName);
    if(move_uploaded_file($_FILES['file']['tmp_name'],$uploaddir.$filename)){
        $objmysqli->query("update gogov set source_doc_filename='$uploaddir"."$filename' where id='$id';");
    }else{
        array_push($err_arr,'upload error');
    }
}

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode("ok");
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}

$objmysqli->close();
