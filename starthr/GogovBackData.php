<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/func_paginate_strbtn.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}
$err_arr = array();
$gogovID = json_decode(filter_input(INPUT_POST,'gogovID'));//id จากตาราง gogov_new (ขาไป)

$rs = $objmysqli->query("select * from gogov_back where gogov_new_id='$gogovID' and status_use='Y';");
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
}else{
    array_push($err_arr,'data not found!!'.$gogovID);    
}
//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($data);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();
