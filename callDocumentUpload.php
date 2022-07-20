<?php
include_once "connectDB.php";
include_once "PHP_func/func_paginate_strbtn.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$tabmenu = json_decode(filter_input(INPUT_POST,'tabmenu'));
if(filter_input(INPUT_POST,'page')){
        $current_page = json_decode(filter_var(filter_input(INPUT_POST,'page'),FILTER_SANITIZE_NUMBER_INT,FILTER_FLAG_STRIP_HIGH)); //filter number
        if(!is_numeric($current_page)){die('Invalid page number!');} //incase of invalid page number
}else{
        $current_page = 1; //ถ้าไม่เลือก page ให้ page เริ่มต้นคือ page 1
}
$item_per_page 	= 5;

$sql = "select * from document_upload_indexpage where tab_menu='$tabmenu' and status_use='Y' ";
$rsAll = $objmysqli->query($sql);
$get_total_rows = $rsAll->num_rows;
    //จำนวนแถวทั้งหมด เพื่อ จะไปหาจำนวน page
    $total_pages = ceil($get_total_rows/$item_per_page);//จำนวน page ทั้งหมด
    $page_position = (($current_page - 1) * $item_per_page);//ความสัมพันธ์ของ page ที่เลือก กับช่วงของการ limit ข้อมูล

    $sql.="ORDER BY id DESC LIMIT $page_position,$item_per_page;";

$rs = $objmysqli->query($sql);
$d = array();
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $d[] = $cols;
    }
    $data = new stdClass();
    $data->allFieldData = $d;
    $data->htmlPGbtn = paginate_str_btn($current_page,$total_pages);
}

echo json_encode($data);
$objmysqli->close();
