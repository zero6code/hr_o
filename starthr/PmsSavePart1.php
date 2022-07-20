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

$d = json_decode(filter_input(INPUT_POST,'d'));

//ฟังก์ชันค้นดูก่อนว่าเคยได้ insert ไปแล้วหรือยัง
function chkD($cnn,$tbl,$person_id,$year_gov,$first_second_half_year_gov,$staff_person){
    $ret = 'Y';//default มีแล้ว
    $sqlChk = "SELECT * "
    ."FROM ".$tbl." "
    ."WHERE person_id='".$person_id."' "
    ."AND year_gov='".$year_gov."' "
    ."AND first_second_half_year_gov='".$first_second_half_year_gov."' "
    ."AND staff_person='".$staff_person."' "
    ."AND status_use='Y';";
    $rsChk = $cnn->query($sqlChk);
    if($rsChk->num_rows > 0){
        $ret = 'Y';
    }else{
        $ret = 'N';
    }
    $rsChk->close();
    return $ret;
}
foreach($d as $key =>$obj){
    if(
        chkD(
            $objmysqli,
            $obj->table_sel,
            $obj->person_id,
            $obj->year_gov,
            $obj->first_second_half_year_gov,
            $obj->staff_person
        ) ==='Y'
    ){//update
        $objmysqli->query("UPDATE ".$obj->table_sel." SET "
        . "score1='".$obj->score1."',"
        . "score2='".$obj->score2."',"
        . "score3='".$obj->score3."',"
        . "score4='".$obj->score4."',"
        . "score5='".$obj->score5."',"
        . "score6='".$obj->score6."',"
        . "score7='".$obj->score7."',"
        . "score8='".$obj->score8."',"
        . "score9='".$obj->score9."',"
        . "score10='".$obj->score10."',"
        . "sum_score='".$obj->sum_score."',"
        . "staff_person = '".$obj->staff_person."',"
        . "timestamp=NOW(),"
        . "status_use='".$obj->status_use."' "
        ."WHERE person_id='".$obj->person_id."' "
        ."AND year_gov='".$obj->year_gov."' "
        ."AND first_second_half_year_gov='".$obj->first_second_half_year_gov."' "
        ."AND staff_person='".$obj->staff_person."' "
        ."AND status_use='".$obj->status_use."';");
    }else{//insert
        $objmysqli->query("INSERT INTO ".$obj->table_sel."("
        . "person_id,"
        . "year_gov,"
        . "first_second_half_year_gov,"
        . "score1,"
        . "score2,"
        . "score3,"
        . "score4,"
        . "score5,"
        . "score6,"
        . "score7,"
        . "score8,"
        . "score9,"
        . "score10,"
        . "sum_score,"
        . "staff_person,"
        . "timestamp,"
        . "status_use"
        . ") VALUES("
        . "'".$obj->person_id."',"
        . "'".$obj->year_gov."',"
        . "'".$obj->first_second_half_year_gov."',"
        . "'".$obj->score1."',"
        . "'".$obj->score2."',"
        . "'".$obj->score3."',"
        . "'".$obj->score4."',"
        . "'".$obj->score5."',"
        . "'".$obj->score6."',"
        . "'".$obj->score7."',"
        . "'".$obj->score8."',"
        . "'".$obj->score9."',"
        . "'".$obj->score10."',"
        . "'".$obj->sum_score."',"
        . "'".$obj->staff_person."',"
        . "NOW(),"
        . "'".$obj->status_use."'"
        . ");");
    }
}

echo json_encode('ok');

$objmysqli->close();
