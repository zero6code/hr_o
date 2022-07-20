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

//start module
$rs1 = $objmysqli->query("select CURDATE() as currdate;");
while ($cols1 = $rs1->fetch_assoc()){
    $nowYearGov = (int)(fiscalYear($cols1['currdate']));
}

$rs2 = $objmysqli->query("select * "
        . "from leave_absence_vacation_summary "
        . "where person_id='$person_id' and year_gov_now='$nowYearGov' and status_use='Y';");
if($rs2->num_rows >0){
    while ($cols2 = $rs2->fetch_assoc()){
        $data[] = $cols2;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found !!');
}
$objmysqli->close();