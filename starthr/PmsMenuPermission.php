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

$menu_name = json_decode(filter_input(INPUT_POST,'menu_name'));
$person_id = json_decode(filter_input(INPUT_POST,'person_id'));
//echo json_encode($menu_name.','.$person_id);

$rs = $objmysqli->query("select * from pms_menu_permission where accept_person_id='$person_id' and menu_name='$menu_name' and status_use='Y';");
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found');
}

$objmysqli->close();

