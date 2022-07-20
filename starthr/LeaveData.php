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
    $year_gov_now= fiscalYear($colsNow['datenow']);
}
$year_gov_next = (int)$year_gov_now +1;
$year_gov_last = (int)$year_gov_now -1;
/*
$rsleave = $objmysqli->query("SELECT l.*,ln.leave_absence_group "
        . "FROM leave_absence l "
        . "LEFT OUTER JOIN leave_absence_name ln ON ln.id=l.leave_absence_id "
        . "WHERE l.person_id = '$person_id' AND l.leave_year_gov = '$year_gov_now' AND l.record_use='Y' "
        . "ORDER BY l.leave_date; ");
*/
$rsleave = $objmysqli->query("SELECT l.id,"
        . "l.person_id,"
        . "l.leave_absence_id,"
        . "lnm.leave_absence_group,"
        . "lnm.leave_absence_name,"
        . "l.leave_date,"
        . "l.leave_year_gov,"
        . "l.leave_full_half_type_id,"
        . "CONCAT(l.leave_num_day,IF(l.leave_full_half_type_id=2,'(เช้า)',IF(l.leave_full_half_type_id=3,'(บ่าย)',''))  ) as fh,"
        . "l.leave_num_day,"
        . "l.holiday_on_off,"
        . "l.leave_txt_note,"
        . "l.serialgen,"
        . "l.serialuse,"
        . "l.contact_addr,"
        . "l.json_print,"
        . "l.status_use,"
        . "l.record_use "
        . "FROM leave_absence l "
        . "LEFT OUTER JOIN leave_absence_name lnm ON lnm.id = l.leave_absence_id "
        . "WHERE l.person_id = '$person_id' "
        . " AND l.leave_year_gov in ('$year_gov_last','$year_gov_now','$year_gov_next') "
        . " AND l.record_use='Y' "
        . "ORDER BY l.leave_date;");

if($rsleave->num_rows >0){
    while ($colsleave = $rsleave->fetch_assoc()){
        $data[] = $colsleave;
    }
    echo json_encode($data);
}else{
    echo json_encode('Data not Found!!');
}


$objmysqli->close();
