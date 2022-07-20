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

$data = json_decode(filter_input(INPUT_POST,'data'));
if(!empty($data->gogovback_txtarea1) ) { $a  = $data->gogovback_txtarea1;}else{$a="";}
if(!empty($data->gogovback_txtarea2) ) { $b  = $data->gogovback_txtarea2;}else{$b="";}
if(!empty($data->gogovback_txtarea3) ) { $c  = $data->gogovback_txtarea3;}else{$c="";}
if(!empty($data->gogovback_txtarea4) ) { $d  = $data->gogovback_txtarea4;}else{$d="";}
if(!empty($data->competency) ) { $competency  = $data->competency;}else{$competency="";}
if(!empty($data->skill) ) { $skill  = $data->skill;}else{$skill="";}
//สรุปค่าใช้จ่ายไปราชการ
if(!empty($data->ch3txt1) ) { $gogovback_money_type1  = $data->ch3txt1;}else{$gogovback_money_type1="";}//ค่าเบี้ยเลี้ยง
if(!empty($data->ch3txt2) ) { $gogovback_money_type2  = $data->ch3txt2;}else{$gogovback_money_type2="";}//ค่าที่พัก
if(!empty($data->ch3txt3) ) { $gogovback_money_type3  = $data->ch3txt3;}else{$gogovback_money_type3="";}//ค่าพาหนะ
if(!empty($data->ch3txt4) ) { $gogovback_money_type4  = $data->ch3txt4;}else{$gogovback_money_type4="";}//ค่าลงทะเบียน
if(!empty($data->ch3txt5) ) { $gogovback_money_type5  = $data->ch3txt5;}else{$gogovback_money_type5="";}//ค่าใช้จ่ายอื่นๆ
if(!empty($data->gogovback_child7_chkbox) ) { $money_type  = $data->gogovback_child7_chkbox;}else{$money_type="";}

$json_RoutePathTxt = json_encode($data->objroutepathtxt,JSON_UNESCAPED_UNICODE);
$json_DepartArriveTxt = json_encode($data->objbltxt,JSON_UNESCAPED_UNICODE);

$objmysqli->query("update gogov set "
        . "gogovback_txtarea1='$a', "
        . "gogovback_txtarea2='$b', "
        . "gogovback_txtarea3='$c', "
        . "gogovback_txtarea4='$d', "
        . "gogovback_competency='$competency', "
        . "money_type='$money_type',"
        . "gogovback_skill='$skill', "    
        . "gogovback_money_type1='$gogovback_money_type1',"
        . "gogovback_money_type1_budgettype='$data->ch3select1',"
        . "gogovback_money_type2='$gogovback_money_type2', "
        . "gogovback_money_type2_budgettype='$data->ch3select2',"
        . "gogovback_money_type3='$gogovback_money_type3', "
        . "gogovback_money_type3_budgettype='$data->ch3select3',"
        . "gogovback_money_type4='$gogovback_money_type4',"
        . "gogovback_money_type4_budgettype='$data->ch3select4',"
        . "gogovback_money_type5='$gogovback_money_type5',"
        . "gogovback_money_type5_budgettype='$data->ch3select5',"
        . "gogovback_gogov_type='$data->gogovback_gogov_type',"
        . "json_for_depart_arrive_txt='".$json_DepartArriveTxt."',"
        . "json_for_route_path_txt='".$json_RoutePathTxt."',"
        . "gogovback_borrowmoney_promise='$data->ch10txt1',"
        . "gogovback_borrowmoney_date='$data->ch10txt2',"
        . "gogovback_borrowmoney_money='$data->ch10txt3',"
        . "gogovback_total_time_gogov='$data->gogovback_total_time_gogov' "  
        . "where id='$data->id';");
//echo json_encode($data);
$objmysqli->close();