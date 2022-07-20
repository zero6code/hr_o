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
$err_arr = array();
$d = json_decode(filter_input(INPUT_POST,'data'));

//insert
function insertSQL($data){
    $sql = "INSERT INTO developement_by_self("
            . "person_id,"
            . "date_begin,"
            . "date_end,"
            . "topic,"
            . "competency,"
            . "skill,"
            . "hour,"
            . "pm_department1,"
            . "pm_department2,"
            . "place,"
            . "dev_pm_person_owner1,"
            . "dev_pm_person_owner2,"
            . "status_use"
            . ") VALUES("
            . "'".$data->person_id."',"
            . "'".$data->date_begin."',"
            . "'".$data->date_end."',"
            . "'".$data->topic."',"
            . "'".$data->competency."',"
            . "'".$data->skill."',"
            . "'".$data->hour."',"
            . "'".$data->pm_department1."',"
            . "'".$data->pm_department2."',"
            . "'".$data->place."',"
            . "'".$data->dev_pm_person_owner1."',"
            . "'".$data->dev_pm_person_owner2."',"
            . "'Y'"
            . ");";
    
    return $sql;
};
$objmysqli->query(insertSQL($d));

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($d);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();
