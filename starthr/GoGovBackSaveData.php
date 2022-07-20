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
$err_arr = array();
$rs = $objmysqli->query(json_decode(filter_input(INPUT_POST,'sqls')));

if(!$rs){
    array_push($err_arr,$rs);
}
//ajax return
if(sizeof($err_arr)==0){
    echo json_encode('ok');
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();
