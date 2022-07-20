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

$objParam = json_decode(filter_input(INPUT_POST,'param'));
$person_id = $objParam->person_id;

$sql = "SELECT concat(pname,fname,' ',lname) as ppname,gw.groupwork_name,d.dep_name,"
."n.immunization_name,v.immunization_get_month_year "
."FROM vaccine_person_get_immunization v "
."LEFT OUTER JOIN person p ON p.cid=v.cid "
."LEFT OUTER JOIN vaccine_immunization_name n on n.id=v.immunization_ids "
."LEFT OUTER JOIN groupwork gw ON gw.groupwork_code=p.groupwork "
."LEFT OUTER JOIN department d ON d.dep_code = p.dep_code "
."WHERE v.immunization_ids_status = 'Y' AND p.id='".$person_id."' AND v.status_use='Y' ";

$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('data not found!!');
}

$objmysqli->close();