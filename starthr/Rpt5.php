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


$sql = "("
        . "SELECT r.position,count(r.position)  as cnt "
        . "FROM real_person_all r "
        . "LEFT OUTER JOIN position_all p on p.position = r.position "
        . "WHERE p.type1 = '1' AND p.position not in ('นักวิชาการศึกษาพิเศษ','นักเวชศาสตร์การสื่อความหมาย','ผู้อำนวยการ') "
        . "AND r.note in ('จริง','มาช่วยราชการ') AND r.status_use = 'Y' "
        . "GROUP BY r.position"
        . ") "
        . "UNION "
        . "("
        . "SELECT 'other',count(r.position) as cnt "
        . "FROM real_person_all r "
        . "LEFT OUTER JOIN position_all p on p.position = r.position "
        . "WHERE (p.type1 <> '1' OR p.position  in ('นักวิชาการศึกษาพิเศษ','นักเวชศาสตร์การสื่อความหมาย','ผู้อำนวยการ')) AND r.note in ('จริง','มาช่วยราชการ') AND r.status_use = 'Y'"
        . ") "
        . "ORDER BY cnt";


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
