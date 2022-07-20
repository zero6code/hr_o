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

$tblname = json_decode(filter_input(INPUT_POST,'tblname'));
$year_gov = json_decode(filter_input(INPUT_POST,'year_gov'));
$first_second_half_year_gov = json_decode(filter_input(INPUT_POST,'first_second_half_year_gov'));
$staff_person = json_decode(filter_input(INPUT_POST,'staff_person'));


$rs = $objmysqli->query(
   "SELECT * "
   . "FROM ".$tblname." "
   . "WHERE year_gov='".$year_gov."' "
   . "AND first_second_half_year_gov='".$first_second_half_year_gov."' "
   . "AND $staff_person='".$staff_person."' AND status_use='Y';"
);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found');
}

$objmysqli->close();

