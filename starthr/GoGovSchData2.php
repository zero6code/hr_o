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

$typeSch = json_decode(filter_input(INPUT_POST,'typeSch'));
$txtSch = json_decode(filter_input(INPUT_POST,'txtSch'));
$err_arr = array();

$txtCond = "like '%".$txtSch."%' ";
if($typeSch=='person_id'){//เปลี่ยนจากข้อความชื่อ-สกุล เป็น id บุคลากรจากตาราง person
    $person_idArr= array();
    $rsP1 = $objmysqli->query("select id from person where fname like '%".$txtSch."%';");
    if($rsP1->num_rows >0){
        while ($colsP1 = $rsP1->fetch_assoc()){
            array_push($person_idArr,$colsP1['id']);
        }
    }else{//หาจากนามสกุลต่อ
       $rsP2 = $objmysqli->query("select id from person where lname like '%".$txtSch."%';");
       if($rsP2->num_rows >0){
            while ($colsP2 = $rsP2->fetch_assoc()){
                array_push($person_idArr,$colsP2['id']);
            }
       }
    }
    if(sizeof($person_idArr)>0){
        $lastKey = (int)key(array_slice($person_idArr, -1, 1, true));
        $txtCond = " in (";
        foreach ($person_idArr as $key => $value) {
            if( $lastKey !== $key  ){
               $txtCond .="$value".",";
            }else{
               $txtCond .="$value";
            } 
        }
        $txtCond .=") ";
    }else{
        $txtCond = ' = 0 ';
    }
}
$rsAll = $objmysqli->query(sprintf("select * from gogov_new where person_id = '%s' and status_use='Y' ORDER BY id DESC",  $_SESSION['person_id']));
if($rsAll->num_rows > 0){
    while ($colsAll = $rsAll->fetch_assoc()){
        $data[] = $colsAll;//$json_print = $colsAll['json_print'];
    }
}else{
    array_push($err_arr,'ไม่พบข้อมูลไปราชการ!!');
}

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($data);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();

