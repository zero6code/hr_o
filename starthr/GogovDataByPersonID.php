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
$person_id = json_decode(filter_input(INPUT_POST,'person_id'));//id บุคลากร ขากลับจากไปราชการ (gogov_back@admin_hr)

$rs1 = $objmysqli->query("select * from gogov_new where person_id='$person_id' and status_use='Y';");
$d1ID = array();
$d1 = array();//ข้อมูลไปราชการ
$d2 = array();//ข้อมูลขากลับจากไปราชการ
if($rs1->num_rows >0){
    while ($cols1 = $rs1->fetch_assoc()){
        $d1[] = $cols1;
        $d1ID[] = $cols1['id'];
    }
    if(count($d1) > 0){//มีข้อมูลขาไปราชการ ให้ค้น ขากลับตาราง gogov_back
        $rs2 = $objmysqli->query("select * from gogov_back where gogov_new_id in (".implode( ',', $d1ID ).");");
        if($rs2->num_rows >0){
            while ($cols2 = $rs2->fetch_assoc()){
                $d2[] = $cols2;
            }
        }else{
            array_push($err_arr,'ไม่พบข้อมูลกลับจากไปราชการสำหรับ person_id='.$person_id);
        }
    }else{
        array_push($err_arr,'ไม่พบข้อมูลไปราชการสำหรับ person_id='.$person_id);
    }
}else{
    array_push($err_arr,'ไม่พบข้อมูลไปราชการสำหรับ person_id='.$person_id);    
}
//ajax return
$d = new stdClass();
$d->gogov_new = $d1;
$d->gogov_back = $d2;
if(sizeof($err_arr)==0){
    echo json_encode($d);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();
