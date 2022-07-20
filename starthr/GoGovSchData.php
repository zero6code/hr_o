<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/myPerson.php";
include_once "../PHP_func/func_paginate_strbtn.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$typeSch = json_decode(filter_input(INPUT_POST,'typeSch'));
$txtSch = json_decode(filter_input(INPUT_POST,'txtSch'));
$txtSchArr = array();
$txtSchX = "";
if(strpos($txtSch,',')!==FALSE){
    $txtSchArr = explode(",",$txtSch);
    $txtSchX = $txtSchArr[0];
    $strDateFillter = " and ('$txtSchArr[1]' between gogov_date_depart and COALESCE(gogov_date_arrive, NOW())) ";
}else{
    $txtSchX = $txtSch;
    $strDateFillter = "";
}


if(filter_input(INPUT_POST,'page')){
        $current_page = json_decode(filter_var(filter_input(INPUT_POST,'page'),FILTER_SANITIZE_NUMBER_INT,FILTER_FLAG_STRIP_HIGH)); //filter number
        if(!is_numeric($current_page)){die('Invalid page number!');} //incase of invalid page number
}else{
        $current_page = 1; //ถ้าไม่เลือก page ให้ page เริ่มต้นคือ page 1
}
$item_per_page 	= 5;

$sqlAll = "select * from gogov ";
if($typeSch=='officialdoc_num'){
    $sqlAll .="where officialdoc_num like '$txtSchX%' and status_use='Y' $strDateFillter ";
}else if($typeSch=='topic'){
    $sqlAll .="where topic like '%$txtSchX%' and status_use='Y' $strDateFillter ";
}else if($typeSch=='schbyPerson'){
    $sqlAll .="where personid13_add ='$txtSchX' and status_use='Y' $strDateFillter ";
}else if($typeSch=='schbyDep'){
    $sqlAll .="where gogov_depcode = '$txtSchX' and status_use='Y' $strDateFillter ";
}else if($typeSch=='schbyGroupwork'){
    $sqlAll .="where SUBSTRING(gogov_depcode, -3,3 ) = '$txtSchX' and status_use='Y' $strDateFillter ";
}
$rsAll = $objmysqli->query($sqlAll);//query ไปก่อนรอบแรกเพื่อหาจำนวน record ทั้งหมด
$get_total_rows = $rsAll->num_rows;

//จำนวนแถวทั้งหมด เพื่อ จะไปหาจำนวน page
$total_pages = ceil($get_total_rows/$item_per_page);//จำนวน page ทั้งหมด
$page_position = (($current_page - 1) * $item_per_page);//ความสัมพันธ์ของ page ที่เลือก กับช่วงของการ limit ข้อมูล

$sqlAll.="ORDER BY id DESC LIMIT $page_position,$item_per_page;";

$rs = $objmysqli->query($sqlAll);
if($rs->num_rows > 0){
    while ($cols = $rs->fetch_assoc()){
        $cols['json_for_print'] = unserialize($cols['json_for_print']);
        $cols['json_for_edit'] = unserialize($cols['json_for_edit']);
        $d[] = $cols;
    }
    $data = new stdClass();
    $data->allFieldData = $d;
    $data->htmlPGbtn = paginate_str_btn($current_page,$total_pages);
    echo json_encode($data);
}else{
    echo json_encode('not found!!');
}

$objmysqli->close();

