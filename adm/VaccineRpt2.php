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
/*$sql1 = "SELECT v.*,n.vaccine_name from vaccine_person_get_vaccine v "
        . "INNER JOIN("
                        . "SELECT cid,max(id) as mm "
                        . "FROM vaccine_person_get_vaccine "
                        . "GROUP BY vaccine_ids"
                    . ") c on c.cid = v.cid "
                        . "AND v.cid='".$param->cid."' "
                        . "AND v.vaccine_ids is NOT NULL "
                        . "AND v.vaccine_ids <>'' "
                        . "AND v.status_use = 'Y' "
                        . "AND v.id = c.mm "
                        . "AND SUBSTRING_INDEX(v.vaccine_get_month_year, '-',1) = '".$param->year."' "
                        . "LEFT OUTER JOIN vaccine_name n on n.id = v.vaccine_ids;";*/
$sql1 = "SELECT v.*,n.vaccine_name "
        . "FROM vaccine_person_get_vaccine v "
        . "LEFT OUTER JOIN vaccine_name n on n.id = v.vaccine_ids "
        . "WHERE v.cid='".$param->cid."' "
        . "AND SUBSTRING_INDEX(vaccine_get_month_year, '-',1) = '".$param->year."' "
        . "AND v.vaccine_ids is NOT NULL and v.vaccine_ids <>'' "
        . "AND v.status_use = 'Y' "
        . "ORDER BY v.vaccine_ids;";
$rs1 = $objmysqli->query($sql1);
if($rs1->num_rows >0){
    while ($cols1 = $rs1->fetch_assoc()){
        $data['vcc'][] = $cols1;
    }
}else{
    $data['vcc_err']='vccine data not found';
}

/*$sql2 = "SELECT v.*,n.immunization_name  from vaccine_person_get_immunization v "
        . "INNER JOIN("
                        . "SELECT cid,max(id) as mm "
                        . "FROM vaccine_person_get_immunization "
                        . "GROUP BY immunization_ids"
                    . ") c on c.cid = v.cid "
                        . "AND v.cid='".$param->cid."' "
                        . "AND v.immunization_ids is NOT NULL "
                        . "AND v.immunization_ids <>'' "
                        . "AND v.status_use = 'Y' "
                        . "AND v.id = c.mm "
                        . "AND SUBSTRING_INDEX(v.immunization_get_month_year, '-',1) = '".$param->year."' "
                        . "LEFT OUTER JOIN vaccine_immunization_name n on n.id = v.immunization_ids";*/
$sql2 = "SELECT v.*,n.immunization_name "
        . "FROM vaccine_person_get_immunization v "
        . "LEFT OUTER JOIN vaccine_immunization_name n on n.id = v.immunization_ids "
        . "WHERE v.cid='".$param->cid."' "
        . "AND SUBSTRING_INDEX(immunization_get_month_year, '-',1) = '".$param->year."' "
        . "AND v.immunization_ids is NOT NULL "
        . "AND v.immunization_ids <>'' "
        . "AND v.status_use = 'Y' "
        . "ORDER BY v.immunization_ids;";
$rs2 = $objmysqli->query($sql2);
if($rs2->num_rows >0){
    while ($cols2 = $rs2->fetch_assoc()){
        $data['imm'][] = $cols2;
    }
}else{
    $data['imm_err']='immunization data not found';
}
echo json_encode($data);
 
 
$objmysqli->close();
