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

$rsNow = $objmysqli->query("SELECT SUBSTRING_INDEX(NOW(),' ',1) as datenow;");
while ($colsNow = $rsNow->fetch_assoc()){
    $year= fiscalYear($colsNow['datenow']);
}
$next_yearGov = (int)$year +1;
$last_yearGov = (int)$year -1;
$rsleave = $objmysqli->query("SELECT l.*,ln.leave_absence_group "//ln.*leave_absence_group*
        . "FROM leave_absence l "
        . "LEFT OUTER JOIN leave_absence_name ln ON ln.id=l.leave_absence_id "
        . "WHERE l.person_id = '".$person_id."' AND l.leave_year_gov in('".$last_yearGov."','".$year."','".$next_yearGov."') AND record_use IN('Y','N') "
        . "ORDER BY l.leave_date; ");
if($rsleave->num_rows >0){
    while ($colsleave = $rsleave->fetch_assoc()){
        $data[] = $colsleave;
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}


$objmysqli->close();
