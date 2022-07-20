<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/func_paginate_strbtn.php";

$year = json_decode(filter_input(INPUT_POST,'year'));
$po_num = json_decode(filter_input(INPUT_POST,'po_num'));


$objmysqli=new mysqli('localhost','root','oomNs]jv!@#',"hr_$year");
$objmysqli->query("set names utf8");


if ($objmysqli->connect_errno) {exit;}

$data = new stdClass();
$m= new stdClass();
//query ชื่อ-สกุล
$rs0 = $objmysqli->query("SELECT concat(p.pname,p.fname,' ',p.lname) as nname,p.cid,dep_code FROM admin_hr.person p WHERE p.po_num='$po_num';");
while ($cols0 = $rs0->fetch_assoc()){
       $data->pname = $cols0['nname'];
}
//query ข้อมูลการลาทั้งปีงบประมาณ


for($i = 1;$i<13;$i++){
    $ii = $i;
    if($i<10){$ii = "0$i";}
    $rs = $objmysqli->query("SELECT m$ii.day01, "
            . "m$ii.day02,m$ii.day03,m$ii.day04,m$ii.day05,m$ii.day06,m$ii.day07,m$ii.day08,m$ii.day09,m$ii.day10,"
            . "m$ii.day11,m$ii.day12,m$ii.day13,m$ii.day14,m$ii.day15,m$ii.day16,m$ii.day17,m$ii.day18,m$ii.day19,"
            . "m$ii.day20,m$ii.day21,m$ii.day22,m$ii.day23,m$ii.day24,m$ii.day25,m$ii.day26,m$ii.day27,m$ii.day28,"
            . "m$ii.day29,m$ii.day30,m$ii.day31 "
        . "FROM admin_hr.person p "
        . "LEFT OUTER JOIN hr_$year.daily_work_month$ii m$ii on m$ii.position_num = p.po_num "
        . "WHERE p.po_num = '$po_num';");
    if($rs->num_rows >0){
        while ($cols = $rs->fetch_assoc()){
            //array_push($m,$cols);
            if($ii == '01'){$m->m01 = $cols;}
            if($ii == '02'){$m->m02 = $cols;}
            if($ii == '03'){$m->m03 = $cols;}
            if($ii == '04'){$m->m04 = $cols;}
            if($ii == '05'){$m->m05 = $cols;}
            if($ii == '06'){$m->m06 = $cols;}
            if($ii == '07'){$m->m07 = $cols;}
            if($ii == '08'){$m->m08 = $cols;}
            if($ii == '09'){$m->m09 = $cols;}
            if($ii == '10'){$m->m10 = $cols;}
            if($ii == '11'){$m->m11 = $cols;}
            if($ii == '12'){$m->m12 = $cols;}
        }
    }
    unset($rs);
    unset($cols);
}

$data->month = $m;
echo json_encode($data);

$objmysqli->close();
