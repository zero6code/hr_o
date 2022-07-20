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

$objCond = json_decode(filter_input(INPUT_POST,'cond'));

$sql = "select * from person";
$len = count((array)$objCond);
if($len > 0){
    $sql.=" where ";
    $i = 0;
    foreach ($objCond as $key => $value) {
        $i++;
        if($i < $len){
            $sql.=$value." and ";
        }else{
            $sql.=$value;
        }
    }
}
$sql.=";";
$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}
$objmysqli->close();