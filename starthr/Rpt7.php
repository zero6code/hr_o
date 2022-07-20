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
//$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);


$date = json_decode(filter_input(INPUT_POST,'date'));
$groupwork = json_decode(filter_input(INPUT_POST,'groupwork'));
$dateArr = explode("-",$date);

$tbl = "daily_work_month".$dateArr[1];//ชื่อตารางที่จะ connect
$prefixTbl = "d".$dateArr[1];//คำย่อของตารางนั้นๆ เช่น d07 
$dayNow = "day".$dateArr[2];//ชื่อ field (เป็นวัน) เช่น day05
$ThisDay = $prefixTbl.".".$dayNow;//เงื่อนไขการค้น เช่น d07.day05
$year = (int)$dateArr[0]+543;

$objmysqli=new mysqli('localhost','root','oomNs]jv!@#',"hr_$year");
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

if(filter_input(INPUT_POST,'page')){
        $current_page = json_decode(filter_var(filter_input(INPUT_POST,'page'),FILTER_SANITIZE_NUMBER_INT,FILTER_FLAG_STRIP_HIGH)); //filter number
        if(!is_numeric($current_page)){die('Invalid page number!');} //incase of invalid page number
}else{
        $current_page = 1; //ถ้าไม่เลือก page ให้ page เริ่มต้นคือ page 1
}
$item_per_page 	= 5;

$sqlAll = "SELECT p.id,$prefixTbl.name as name,$prefixTbl.$dayNow as daynow,t.type_group as typegroup "
        ."FROM hr_$year.$tbl $prefixTbl "
        ."LEFT OUTER JOIN admin_hr.person p on p.po_num = $prefixTbl.position_num "
        ."LEFT OUTER JOIN  hr_$year.type_absent t on t.type_code=$prefixTbl.$dayNow "
        ."WHERE p.groupwork = '$groupwork' and $prefixTbl.$dayNow is NOT NULL ";


$rsAll = $objmysqli->query($sqlAll);//query ไปก่อนรอบแรกเพื่อหาจำนวน record ทั้งหมด
$get_total_rows = $rsAll->num_rows;

//จำนวนแถวทั้งหมด เพื่อ จะไปหาจำนวน page
$total_pages = ceil($get_total_rows/$item_per_page);//จำนวน page ทั้งหมด
$page_position = (($current_page - 1) * $item_per_page);//ความสัมพันธ์ของ page ที่เลือก กับช่วงของการ limit ข้อมูล

$sqlAll.="ORDER BY p.id DESC LIMIT $page_position,$item_per_page;";

$rs = $objmysqli->query($sqlAll);


if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $d[] = $cols;
    }
    $data = new stdClass();
    $data->allFieldData = $d;
    $data->htmlPGbtn = paginate_str_btn($current_page,$total_pages);
    echo json_encode($data);
}else{
    echo json_encode('err');
}
$objmysqli->close();
