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

$txtSch = json_decode(filter_input(INPUT_POST,'txtSch'));

$cond1 = "where (fname like '%$txtSch%' "
        ."or lname like '%$txtSch%' "
        ."or po_num like '%$txtSch%') "
        ."and record_use = 'Y' ";

if(filter_input(INPUT_POST,'page')){
        $current_page = json_decode(filter_var(filter_input(INPUT_POST,'page'),FILTER_SANITIZE_NUMBER_INT,FILTER_FLAG_STRIP_HIGH)); //filter number
        if(!is_numeric($current_page)){die('Invalid page number!');} //incase of invalid page number
}else{
        $current_page = 1; //ถ้าไม่เลือก page ให้ page เริ่มต้นคือ page 1
}
$item_per_page 	= 5;

$sqlAll = "";
$sql1= "select * from person ".$cond1;

$rs1 = $objmysqli->query($sql1);
$cnt1 = $rs1->num_rows;



if($cnt1 > 0){
    $sqlAll = $sql1;
    
    $rsAll = $objmysqli->query($sqlAll);//query ไปก่อนรอบแรกเพื่อหาจำนวน record ทั้งหมด
    $get_total_rows = $rsAll->num_rows;

    //จำนวนแถวทั้งหมด เพื่อ จะไปหาจำนวน page
    $total_pages = ceil($get_total_rows/$item_per_page);//จำนวน page ทั้งหมด
    $page_position = (($current_page - 1) * $item_per_page);//ความสัมพันธ์ของ page ที่เลือก กับช่วงของการ limit ข้อมูล

    $sqlAll.="ORDER BY id DESC LIMIT $page_position,$item_per_page;";

    $rs = $objmysqli->query($sqlAll);
    while ($cols = $rs->fetch_assoc()){
        $d[] = $cols;
    }
    $data = new stdClass();
    $data->allFieldData = $d;
    $data->htmlPGbtn = paginate_str_btn($current_page,$total_pages);
    echo json_encode($data);
}else{//ไม่พบ
    echo json_encode('<span style="color:red;font-size:large;">ไม่พบข้อมูลตามที่สืบค้น</span>');
}

$objmysqli->close();