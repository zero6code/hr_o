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

$param = json_decode(filter_input(INPUT_POST,'param'));

$cond_groupwork = '';
$cond_position_by_type1 = '';

if( isset($param->groupwork) && !empty($param->groupwork)){
    $cond_groupwork = " and p.groupwork ='".$param->groupwork."' ";
}
if( isset($param->position_by_type1) && sizeof($param->position_by_type1) > 0  ){
    $cond_position_by_type1 = " and po.position_by_type1 in (".implode(', ',$param->position_by_type1).") ";
}

$sql = "SELECT po.position_name,"
."sum(if(p.government_emp_type='A',1,0)) as a,"
."sum(if(p.government_emp_type='B',1,0)) as b,"
."sum(if(p.government_emp_type='C',1,0)) as c,"
."sum(if(p.government_emp_type='D',1,0)) as d,"
."count(po.position_code) as ttotal "
."FROM person p "
."LEFT OUTER JOIN position po on po.position_code = p.position_code "
."WHERE p.status_note in ('1','2') and p.status_use = 'Y' and p.record_use = 'Y' "
."$cond_position_by_type1  $cond_groupwork "
."GROUP BY po.position_code "
."ORDER BY ttotal  DESC";

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