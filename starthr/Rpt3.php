<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
//$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli=new mysqli('localhost','root','oomNs]jv!@#','hr_2562');
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$date = json_decode(filter_input(INPUT_POST,'date'));
$dateArr = explode("-",$date);

$tbl = "daily_work_month".$dateArr[1];//ชื่อตารางที่จะ connect
$prefixTbl = "d".$dateArr[1];//คำย่อของตารางนั้นๆ เช่น d07 
$dayNow = "day".$dateArr[2];//ชื่อ field (เป็นวัน) เช่น day05
$ThisDay = $prefixTbl.".".$dayNow;//เช่น d07.day05

$sql = "SELECT r.groupwork,"
        . "SUM(case when $ThisDay = 'พ' then 1 else 0 end) as a,"
        . "SUM(case when $ThisDay = 'ป' then 1 else 0 end) as b,"
        . "SUM(case when $ThisDay = 'ก' then 1 else 0 end) as c,"
        . "SUM(case when $ThisDay = 'อ' then 1 else 0 end) as d,"
        . "SUM(case when $ThisDay = 'ค' then 1 else 0 end) as e,"
        . "SUM(case when $ThisDay = 'ช' then 1 else 0 end) as f,"
        . "SUM(case when $ThisDay = 'ส' then 1 else 0 end) as g,"
        . "SUM(case when $ThisDay = 'ร' then 1 else 0 end) as h "
        . "FROM $tbl $prefixTbl "
        . "LEFT OUTER JOIN real_person_all r ON r.position_num = $prefixTbl.position_num "
        . "WHERE r.groupwork <>'' AND r.groupwork IS NOT NULL AND r.groupwork<>'สำนักงานผู้อำนวยการ' "
        . "GROUP BY r.groupwork";

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
