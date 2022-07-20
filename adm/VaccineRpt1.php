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

if($param->page){
        $current_page = (int)$param->page;
        if(!is_numeric($current_page)){die('Invalid page number!');} //incase of invalid page number
}else{
        $current_page = 1; //ถ้าไม่เลือก page ให้ page เริ่มต้นคือ page 1
}
$item_per_page 	= 20;

$vcc=[];$imm=[];
foreach ($param->chk as $key => $value) {
    $keyexp = explode('_',$value);
    if($keyexp[0]=='vcc'){
        array_push($vcc,str_replace('vcc_','',$value));
    }else{
        array_push($imm,str_replace('imm_','',$value));
    }
    
}

$txtWhereVcc = (sizeof($vcc)!==0) ? "v.vaccine_ids in(".implode(',',$vcc).")":"";
$txtWhereImm = (sizeof($imm)!==0) ? "i.immunization_ids in(".implode(',',$imm).")":"";

if( ($txtWhereVcc!="")&&($txtWhereImm!="") ){
$sqlAll = "SELECT v.cid,concat(p.pname,p.fname,' ',p.lname) as pnames,po.position_name "
        . "FROM vaccine_person_get_vaccine v "
        . "INNER JOIN vaccine_person_get_immunization i ON i.cid = v.cid "
        . "INNER JOIN person p on p.cid = v.cid "
        . "INNER JOIN position po on po.position_code = p.position_code "
        . "WHERE $txtWhereVcc AND $txtWhereImm "
        . "AND SUBSTRING_INDEX(i.immunization_get_month_year, '-',1) = '".$param->year."' "
        . "AND i.status_use = 'Y' "
        . "AND SUBSTRING_INDEX(v.vaccine_get_month_year, '-',1) = '".$param->year."' "
        . "AND v.status_use = 'Y' "
        . "GROUP BY v.cid ";
}else{
    if( $txtWhereVcc!="" && $txtWhereImm=="" ){
        $sqlAll = "SELECT v.cid,concat(p.pname,p.fname,' ',p.lname) as pnames,po.position_name "
        . "FROM vaccine_person_get_vaccine v "
        . "INNER JOIN person p on p.cid = v.cid "
        . "INNER JOIN position po on po.position_code = p.position_code "
        . "WHERE $txtWhereVcc "
        . "AND SUBSTRING_INDEX(v.vaccine_get_month_year, '-',1) = '".$param->year."' "
        . "AND v.status_use = 'Y' "
        . "GROUP BY v.cid ";
    }else if( $txtWhereVcc=="" && $txtWhereImm!=""){
        $sqlAll = "SELECT i.cid,concat(p.pname,p.fname,' ',p.lname) as pnames,po.position_name "
        . "FROM vaccine_person_get_immunization i "
        . "INNER JOIN person p on p.cid = i.cid "
        . "INNER JOIN position po on po.position_code = p.position_code "
        . "WHERE $txtWhereImm "
        . "AND SUBSTRING_INDEX(i.immunization_get_month_year, '-',1) = '".$param->year."' "
        . "AND i.status_use = 'Y' "
        . "GROUP BY i.cid ";
    }else{
        $sqlAll = "select * from  vaccine_person_get_vaccine where vaccine_ids='999999999' ";
    }   
}
    $rsAll = $objmysqli->query($sqlAll);//query ไปก่อนรอบแรกเพื่อหาจำนวน record ทั้งหมด
 
    $get_total_rows = $rsAll->num_rows;

    if($get_total_rows >0){
        //จำนวนแถวทั้งหมด เพื่อ จะไปหาจำนวน page
        $total_pages = ceil($get_total_rows/$item_per_page);//จำนวน page ทั้งหมด
        $page_position = (($current_page - 1) * $item_per_page);//ความสัมพันธ์ของ page ที่เลือก กับช่วงของการ limit ข้อมูล

        $sqlAll.=" LIMIT $page_position,$item_per_page;";

        $rs = $objmysqli->query($sqlAll);
        while ($cols = $rs->fetch_assoc()){
            $d[] = $cols;
        }
        $data = new stdClass();
        $data->countAll = $get_total_rows;
        $data->allFieldData = $d;
        $data->htmlPGbtn = paginate_str_btn($current_page,$total_pages);
        echo json_encode($data);
    }else{
        echo json_encode('ไม่พบข้อมูล ลองเปลี่ยนเงื่อนไขการค้นดูครับ....');
    }

//echo json_encode($sqlAll);
$objmysqli->close();
