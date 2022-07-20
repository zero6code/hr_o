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
$d = (array)json_decode(filter_input(INPUT_POST,'data'));

//หา array person_id
$dPersonID = (  isset($d['project_party_list_person_id']) && $d['project_party_list_person_id']!='' )  ?$d['project_party_list_person_id']:'';
$person_idArr = ($dPersonID!=='')?explode("_",$dPersonID):[];
//หา array person_name
$dPersonname = (  isset($d['project_party_list_person_name']) && $d['project_party_list_person_name']!='' )  ?$d['project_party_list_person_name']:'';
$person_nameArr = ($dPersonname!=='')?explode("_",$dPersonname):[];

//insert
function genSQL($d,$person_id,$person_name){
    $sql = "INSERT INTO developement_by_project("
            . "develop_type,"
            . "project_name,"
            . "project_owner_person_id,"
            . "project_owner_name,"
            . "project_date1,"
            . "project_date1_th,"
            . "project_date2,"
            . "project_date2_th,"
            . "project_budget,"
            . "competency1,"
            . "competency2,"
            . "competency3,"
            . "skill1,"
            . "skill2,"
            . "skill3,"
            . "project_party_list_person_id,"
            . "project_party_list_person_name,"
            . "status_use"
            . ") VALUES("
            . "'".$d['develop_type']."',"
            . "'".$d['project_name']."',"
            . "'".$d['project_owner_person_id']."',"
            . "'".$d['project_owner_name']."',"
            . "'".$d['project_date1']."',"
            . "'".$d['project_date1_th']."',"
            . "'".$d['project_date2']."',"
            . "'".$d['project_date2_th']."',"
            . "'".$d['project_budget']."',"
            . "'".$d['competency1']."',"
            . "'".$d['competency2']."',"
            . "'".$d['competency3']."',"
            . "'".$d['skill1']."',"
            . "'".$d['skill2']."',"
            . "'".$d['skill3']."',"
            . "'".$person_id."',"
            . "'".$person_name."',"
            . "'".$d['status_use']."'"
            . ");";
    
    return $sql;
};
$cnt = count($person_idArr);
if($cnt>0){
    //ตรวจสอบ โครงการชื่อเดียวกัน วันเริ่มกับวันสิ้นสุดเดียวกัน (key ซ้ำ)  ก่อน insert
    $rschk = $objmysqli->query("select * "
            . "from developement_by_project "
            . "where project_name='".$d['project_name']."' "
            . "and project_date1='".$d['project_date1']."' "
            . "and project_date2='".$d['project_date2']."';");
    
    if($rschk->num_rows == 0){
        for($i=0;$i<$cnt;$i++){
            //$sqlAll.= genSQL($d,$person_idArr[$i],$person_nameArr[$i]);
            $objmysqli->query(genSQL($d,$person_idArr[$i],$person_nameArr[$i]));
        }
    }else{
        array_push($err_arr,'Duplicate Data!!');
    }
}else{
    array_push($err_arr,"False to insert data!!");
}
    
//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($d);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();
