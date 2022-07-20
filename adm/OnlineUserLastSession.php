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
$err = [];
if ($objmysqli->connect_errno) {exit;}

$person_id = json_decode(filter_input(INPUT_POST,'person_id'));

//หาเลขบัตรประชาชน จาก person_id
$rscid = $objmysqli->query("select cid from person where id='$person_id';");
if($rscid->num_rows >0){
    while ($colscid = $rscid->fetch_assoc()){
        $cid = $colscid['cid'];
    }
}else{
    array_push($err,"person_id='$person_id' is not found");
}

//หาข้อมูล onlineUser ของ cid นั้นๆ ครั้งล่าสุด
if(isset($cid)&&!empty($cid)){
    $rsSess = $objmysqli->query("SELECT json_data "
        . "FROM onlineuser "
        . "WHERE id13_online = '$cid' "
        . "ORDER BY id DESC "
        . "LIMIT 1");
    if($rsSess->num_rows >0){
        while ($colsSess = $rsSess->fetch_assoc()){
            $json_data = unserialize($colsSess['json_data']);
        }
    }else{
        array_push($err,"logindata by person_id='$person_id' is not found");
    }
}else{
    array_push($err,"cid=$cid not found");
}

//ajax return
if(sizeof($err)==0){
    echo json_encode($json_data);
}else{
    $str_err = implode(",",$err);
    echo json_encode($str_err);
}

$objmysqli->close();
