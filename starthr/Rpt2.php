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
//$objmysqli=new mysqli('localhost','root','oomNs]jv!@#','hr_2562');
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$d1 = json_decode(filter_input(INPUT_POST,'d1'));
$d2 = json_decode(filter_input(INPUT_POST,'d2'));


//start module
$sql = "SELECT "
        . "(SELECT count(*) from person where status_note in('1','2') and status_use ='Y' and record_use='Y' and government_emp_type='A')  as officialtype,"
        . "(SELECT count(*) from person where status_note in('1','2') and status_use ='Y' and record_use='Y' and government_emp_type='D')  as mentalhealthtype,"
        . "(SELECT count(*) from person where status_note in('1','2') and status_use ='Y' and record_use='Y' and government_emp_type='C')  as governmenttype,"
        . "(SELECT count(*) from person where status_note in('1','2') and status_use ='Y' and record_use='Y' and government_emp_type='B')  as permanenttype,"
        . "(SELECT count(*) from person where status_note in('1','2') and status_use ='Y' and record_use='Y' and government_emp_type='E')  as parttimetype";


$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data['officialtype'] = $cols['officialtype'];
        $data['mentalhealthtype'] = $cols['mentalhealthtype'];
        $data['governmenttype'] = $cols['governmenttype'];
        $data['permanenttype'] = $cols['permanenttype'];
        $data['parttimetype'] = $cols['parttimetype'];
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}
$objmysqli->close();
