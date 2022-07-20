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

$cond_groupwork = '';//แยกกลุ่มภารกิจ
$cond_position_by_type1 = '';//แยกว่า สายงานหลัก สนับสนุนสายงานหลัก หรือ สนับสนุน
$cond_status_note = '';//แยกว่า ปฏิบัติงานจริง มาช่วยราชการ ลาศึกษาต่อ ไปช่วยราชการ ว่าง
$cond_status_use = '';//แยกว่า เปิดใช้งาน(สถานะทั้ง5) หรือ ปิดใช้งาน(ลาออก โอน ย้าย เกษียณ)
function toStr($arr){
    $txt = '(';
    $len = sizeof($arr);
    foreach ($arr as $key => $value){
        if($key != ($len -1) ){
            $txt.="'".$value."',";
        }else{
            $txt.="'".$value."'";
        }
    }
    $txt.=')';
    return $txt;
}

if( isset($param->groupwork) && !empty($param->groupwork)){
   $cond_groupwork = " and p.groupwork in ".toStr($param->groupwork)." ";
}

if( isset($param->position_by_type1) && sizeof($param->position_by_type1) > 0  ){
    $cond_position_by_type1 = " and po.position_by_type1 in ".toStr($param->position_by_type1)." ";
}

if( isset($param->status_note) && sizeof($param->status_note) > 0  ){
    $cond_status_note = " and p.status_note in ".toStr($param->status_note)." ";
}

if( isset($param->status_use) && !empty($param->status_use)  ){
    $cond_status_use = " and p.status_use in ".toStr($param->status_use)." ";
}

$sql = "SELECT po.position_name,"
."sum(if(p.government_emp_type='A',1,0)) as a,"
."sum(if(p.government_emp_type='B',1,0)) as b,"
."sum(if(p.government_emp_type='C',1,0)) as c,"
."sum(if(p.government_emp_type='D',1,0)) as d "
."FROM person p "
."LEFT OUTER JOIN position po on po.position_code = p.position_code "
."WHERE p.record_use = 'Y' "
."$cond_position_by_type1  $cond_groupwork $cond_status_note $cond_status_use "
."GROUP BY p.position_code ;";

$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
   //echo json_encode($sql);
}else{
    echo json_encode('data not found!!');
}

//echo json_encode($sql);
$objmysqli->close();