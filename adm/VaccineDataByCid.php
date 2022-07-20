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

$param = json_decode(filter_input(INPUT_POST,'param'));

$sqlVcc = "SELECT v.cid,vn.vaccine_name,v.vaccine_ids_status "
        . "FROM vaccine_person_get_vaccine v "
        . "INNER JOIN vaccine_name vn ON vn.id = v.vaccine_ids "
        . "WHERE v.cid = '".$param->cid."' "
        . "AND SUBSTRING_INDEX(v.vaccine_get_month_year, '-',1) = '".$param->year."' "
        . "AND v.status_use = 'Y' "
        . "GROUP BY v.vaccine_ids;";
$sqlImm = "SELECT i.cid,n.immunization_name,i.immunization_ids_status "
        . "FROM vaccine_person_get_immunization i "
        . "INNER JOIN vaccine_immunization_name n ON n.id = i.immunization_ids "
        . "WHERE i.cid = '".$param->cid."' "
        . "AND SUBSTRING_INDEX(i.immunization_get_month_year, '-',1) = '".$param->year."' "
        . "AND i.status_use = 'Y' "
        . "GROUP BY i.immunization_ids;";

$rsVcc = $objmysqli->query($sqlVcc);
$numRowVcc = $rsVcc->num_rows;
$data = new stdClass();
if($numRowVcc>0){
    while ($colsVcc = $rsVcc->fetch_assoc()){
        $d1[] = $colsVcc;
    }
    $data->vcc = $d1;
}else{
    $data->vcc = "ไม่พบข้อมุลวัคซีน";
}

$rsImm = $objmysqli->query($sqlImm);
$numRowImm = $rsImm->num_rows;
if($numRowImm>0){
    while ($colsImm = $rsImm->fetch_assoc()){
        $d2[] = $colsImm;
    }
    $data->imm = $d2;
}else{
    $data->imm = "ไม่พบข้อมูลภูมิคุ้มกัน";
}

echo json_encode($data);
$objmysqli->close();
