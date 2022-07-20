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
$cond_government_emp_type = '';
$n = sizeof($param->groupwork);
$nn = sizeof($param->government_emp_type);
if( isset($param->groupwork) && $n >0  ){
    $cond_groupwork = " and p.groupwork in (";
    
    foreach($param->groupwork as $keygw =>$gw){
        if( $keygw != ($n - 1) ){
            $cond_groupwork .="'".$gw."',";
        }else{
            $cond_groupwork .="'".$gw."')";
        }
    }
}
if( isset($param->government_emp_type) && $nn >0  ){
    $cond_government_emp_type = " and p.government_emp_type in (";
    
    foreach($param->government_emp_type as $keyge =>$ge){
        if( $keyge != ($nn - 1) ){
            $cond_government_emp_type .="'".$ge."',";
        }else{
            $cond_government_emp_type .="'".$ge."')";
        }
    }
}

$sql ="SELECT p.id as ppid,concat(p.pname,p.fname,' ',p.lname) AS ppname,"
."IF((p.government_emp_type='A'),concat(po.position_name,c.class_position_type_name2),po.position_name) AS pocl,"
."d.dep_name " 
."FROM person p "
."LEFT OUTER JOIN position po ON po.position_code = p.position_code "
."LEFT OUTER JOIN department d ON d.dep_code = p.dep_code "
."LEFT OUTER JOIN department ds ON ds.dep_code = p.dep_code2 "
."LEFT OUTER JOIN class_position c ON c.class_position_shortname = p.class_position_shortname "
."WHERE p.status_note in ('1','2') AND p.status_use = 'Y' AND p.record_use = 'Y' "
."$cond_groupwork $cond_government_emp_type "
."ORDER BY ppname";

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