<?php

if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/func_datetime.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$person_id = json_decode(filter_input(INPUT_POST,'person_id'));

//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
$rsDnow = $objmysqli->query("SELECT DATE(NOW()) as dnow;");
$nowYearGov;
if($rsDnow->num_rows >0){
    while ($colsDnow = $rsDnow->fetch_assoc()){
        $nowYearGov = (int)fiscalYear($colsDnow['dnow']);
    }
}
$nextYearGov = $nowYearGov+1;
/*
$sql = "SELECT l.*,concat(p.pname,p.fname,' ',p.lname) as ppname,ln.leave_absence_name,lt.name as ltname  "
        . "FROM leave_absence l "
        . "LEFT OUTER JOIN person p ON p.id=l.person_id "
        . "LEFT OUTER JOIN leave_absence_name ln ON ln.id = l.leave_absence_id "
        . "LEFT OUTER JOIN leave_full_half_type lt ON lt.id = l.leave_full_half_type_id "
        . "WHERE l.leave_year_gov in('$nowYearGov','$nextYearGov') AND l.status_use='E' AND l.record_use='Y' "
        . "ORDER BY l.id DESC;";
*/
$sql ="SELECT l.id,l.person_id,"
        . "p.id as person_id,p.cid,p.pname,p.fname,p.lname,"//ถ้าเอาหมดระวังชื่อ field ชนกัน
        . "l.leave_absence_id,ln.leave_absence_name,"
        . "GROUP_CONCAT(l.leave_date ,IF(l.leave_full_half_type_id=2,'/ช',IF(l.leave_full_half_type_id=3,'/บ','')) ORDER BY l.leave_full_half_type_id SEPARATOR ',') as ddate,"
        . "l.serialgen,l.json_print "
        . "FROM leave_absence l "
        . "LEFT OUTER JOIN person p ON p.id=l.person_id "
        . "LEFT OUTER JOIN leave_absence_name ln ON ln.id = l.leave_absence_id "
        . "LEFT OUTER JOIN leave_full_half_type lt ON lt.id = l.leave_full_half_type_id "
        . "WHERE l.leave_year_gov in('$nowYearGov','$nextYearGov') AND l.status_use='E' AND l.record_use='Y' "
        . "GROUP BY l.serialgen "
        . "ORDER BY l.id DESC;";
$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found');
}



$objmysqli->close();

