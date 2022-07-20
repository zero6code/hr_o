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

$cid = json_decode(filter_input(INPUT_POST,'cid'));
$getmonthyear = json_decode(filter_input(INPUT_POST,'getmonthyear'));
$jsonvaccine = json_decode(filter_input(INPUT_POST,'jsonvaccine'));
$jsonimmunization = json_decode(filter_input(INPUT_POST,'jsonimmunization'));

$jsonvaccine_en = json_encode($jsonvaccine,JSON_UNESCAPED_UNICODE);
$jsonimmunization_en = json_encode($jsonimmunization,JSON_UNESCAPED_UNICODE);

function updateStatusUse($cnn,$cid,$vaccine_id,$year,$type_vcc_imm){
    if($type_vcc_imm=='vcc'){
        $rs1 = $cnn->query("select * "
                . "from vaccine_person_get_vaccine "
                . "where cid='$cid' "
                . "and vaccine_ids='$vaccine_id'  "
                . "and SUBSTRING_INDEX(vaccine_get_month_year, '-',1) = '$year';");
        if($rs1->num_rows >0){
            $cnn->query("update vaccine_person_get_vaccine "
                    . "set status_use='N' "
                    . "where cid='$cid' "
                    . "and vaccine_ids='$vaccine_id'  "
                    . "and SUBSTRING_INDEX(vaccine_get_month_year, '-',1) = '$year';");
        }
    }else{
        $rs1 = $cnn->query("select * "
                . "from vaccine_person_get_immunization "
                . "where cid='$cid' "
                . "and immunization_ids='$vaccine_id'  "
                . "and SUBSTRING_INDEX(immunization_get_month_year, '-',1) = '$year';");
        if($rs1->num_rows >0){
            $cnn->query("update vaccine_person_get_immunization "
                    . "set status_use='N' "
                    . "where cid='$cid' "
                    . "and immunization_ids='$vaccine_id'  "
                    . "and SUBSTRING_INDEX(immunization_get_month_year, '-',1) = '$year';");
        }
    } 
    
}

foreach ($jsonvaccine as $k1 => $v1){
    $nk1 =str_replace('vcc_rdo_vcc','',$k1);//id วัคซีน
    updateStatusUse($objmysqli,$cid,$nk1,substr($getmonthyear,0,4),'vcc');
    $objmysqli->query("insert into vaccine_person_get_vaccine("
        . "cid,vaccine_ids,vaccine_ids_status,vaccine_get_month_year,datetime_stamp,status_use"
        . ") VALUES("
        . "'$cid','$nk1','$v1','$getmonthyear',NOW(),'Y'"
        . ");");    
    
}
foreach ($jsonimmunization as $k2 => $v2){
    $nk2 =str_replace('vcc_rdo_imm','',$k2);//id ภูมิคุ้มกัน
    updateStatusUse($objmysqli,$cid,$nk2,substr($getmonthyear,0,4),'imm');
    $objmysqli->query("insert into vaccine_person_get_immunization("
        . "cid,immunization_ids,immunization_ids_status,immunization_get_month_year,datetime_stamp,status_use"
        . ") VALUES("
        . "'$cid','$nk2','$v2','$getmonthyear',NOW(),'Y'"
        . ");");    
    
}
echo json_encode('ok');
$objmysqli->close();