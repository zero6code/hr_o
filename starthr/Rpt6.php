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
//$objmysqli=new mysqli('localhost','root','oomNs]jv!@#','hr_2562');
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}


$sql = "("
        . "SELECT 'a',count(*)  as cnt "
        . "FROM person p "
        . "LEFT OUTER JOIN position po on po.position_code = p.position_code "
        . "WHERE po.position_by_type1 = '1'  AND p.status_note in ('1','2') AND p.status_use = 'Y' "
        . ")"
        . "UNION"
        . "("
        . "SELECT 'สายงานสนับสนุนสายงานหลัก',count(*)  as cnt "
        . "FROM person p "
        . "LEFT OUTER JOIN position po on po.position_code = p.position_code "
        . "WHERE po.position_by_type1 = '2'  AND p.status_note in ('1','2') AND p.status_use = 'Y' "
        . ")"
        . "UNION"
        . "("
        . "SELECT 'สายงานสนับสนุน',count(*)  as cnt "
        . "FROM person p "
        . "LEFT OUTER JOIN position po on po.position_code = p.position_code "
        . "WHERE po.position_by_type1 = '3'  AND p.status_note in ('1','2') AND p.status_use = 'Y' "
        . ")";

$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}

$objmysqli->close();
