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

$cond1 = json_decode(filter_input(INPUT_POST,'cond1'));//obj เงื่อนไขการค้น person
$cond2 = json_decode(filter_input(INPUT_POST,'cond2'));//obj เงื่อนไขการค้น วันลา

function sql_day_of_leave($cond2){
    $lday = 31;//จำนวนวันใน 1 เดือน
    $sql="";
    for ($x = 1; $x <= $lday; $x++) {//foreach ($objPersonID as $k => $person_id) {
        $xzero = ($x<10)?"0".$x:$x;
        if($x < $lday){
            $sql .= "("
                    . "SELECT GROUP_CONCAT(leave_absence_id ,"
                    . "IF(leave_full_half_type_id=2,'/ช',IF(leave_full_half_type_id=3,'/บ','')) ORDER BY leave_full_half_type_id SEPARATOR ',')  "
                    . "FROM leave_absence "
                    . "WHERE person_id=l.person_id "
                    . "AND  YEAR(leave_date) = $cond2->leave_year "
                    . "AND MONTH(leave_date) = $cond2->leave_month "
                    . "AND DAY(leave_date) = $x "
                    . "AND record_use=l.record_use AND status_use=l.status_use "
                    . ") AS day".$xzero.",";
        }else{
             $sql .= "("
                    . "SELECT GROUP_CONCAT(leave_absence_id ,"
                     . "IF(leave_full_half_type_id=2,'/ช',IF(leave_full_half_type_id=3,'/บ','')) ORDER BY leave_full_half_type_id SEPARATOR ',')  "
                    . "FROM leave_absence "
                    . "WHERE person_id=l.person_id "
                    . "AND  YEAR(leave_date) = $cond2->leave_year "
                    . "AND MONTH(leave_date) = $cond2->leave_month "
                    . "AND DAY(leave_date) = $x "
                    . "AND record_use=l.record_use AND status_use=l.status_use "
                    . ") AS day".$xzero." ";
        }
    }
    return $sql;
}

$sqlLeave = "SELECT l.person_id,concat(p.pname,p.fname,' ',p.lname) as ppname,"
        . "".sql_day_of_leave($cond2)." "
        . "FROM leave_absence l "
        . "LEFT JOIN person p on p.id=l.person_id "
        . "WHERE  YEAR(l.leave_date) ='".$cond2->leave_year."'  "
        . "AND MONTH(l.leave_date)='".$cond2->leave_month."' "
        . "AND l.status_use='Y' "
        . "AND l.record_use='Y'  "
        . "AND p.groupwork = '".$cond1->groupwork."' "
        . "AND p.status_note in ('1','2') "
        . "GROUP BY l.person_id ";
$sqlLeave .="UNION "
        . "SELECT id,concat(pname,fname,' ',lname) as ppname,null as day01,"
        . "null as day02,null as day03,null as day04,null as day05,null as day06,"
        . "null as day07,null as day08,null as day09,null as day010,null as day11,"
        . "null as day12,null as day13,null as day14,null as day15,null as day16,"
        . "null as day17,null as day18,null as day19,null as day20,null as day21,"
        . "null as day22,null as day23,null as day24,null as day25,null as day26,"
        . "null as day27,null as day28,null as day29,null as day30,null as day31 "
        . "FROM person "
        . "WHERE status_note in ('1','2') AND status_use = 'Y' "
        . "AND record_use = 'Y' AND groupwork = '".$cond1->groupwork."' "
        . "AND id NOT IN("
        . "SELECT ll.person_id "
        . "FROM leave_absence ll "
        . "LEFT OUTER JOIN person pp on pp.id = ll.person_id "
        . "WHERE YEAR(ll.leave_date) = ".$cond2->leave_year." AND MONTH(ll.leave_date) = ".$cond2->leave_month." "
        . "AND pp.groupwork = '".$cond1->groupwork."' "
        . "GROUP BY ll.person_id);";

$rs = $objmysqli->query($sqlLeave);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}

$objmysqli->close();