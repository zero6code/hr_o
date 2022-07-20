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

//object
$param= json_decode(filter_input(INPUT_POST,'param'));

//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
$rsdateNow = $objmysqli->query("SELECT CURDATE() as cdate;");
while ($colsdateNow = $rsdateNow->fetch_assoc()){
    $yeargov = fiscalYear($colsdateNow['cdate']);
}

//หา person_id ว่ามีใน biofeedback_stress หรือไม่ ถ้ามี ให้ update ถ้าไม่มีให้ insert
$rsFindPid = $objmysqli->query("select * from biofeedback_stress where person_id='".$param->person_id."' and yeargov='".$yeargov."' and status_use='Y';");
if($rsFindPid->num_rows >0){
    $objmysqli->query("UPDATE biofeedback_stress SET "
          ."ans_activity='".$param->ans_activity."',"  
          ."ans_balance='".$param->ans_balance."',"  
          ."stress_resistance='".$param->stress_resistance."',"  
          ."stress_index='".$param->stress_index."',"  
          ."stress_fatique='".$param->stress_fatique."',"  
          ."mean_heart_rate_num='".$param->mean_heart_rate_num."'," 
          ."mean_heart_rate_txt='".$param->mean_heart_rate_txt."'," 
          ."eletro_cardiac_stability='".$param->eletro_cardiac_stability."'," 
          ."ectopic_beat='".$param->ectopic_beat."'," 
          ."conclude_ectopic_beat='".$param->conclude_ectopic_beat."',"
          ."conclude_ans_balance='".$param->conclude_ans_balance."'"
          ."WHERE person_id='".$param->person_id."' AND yeargov='".$yeargov."' AND status_use='Y';");

}else{
    $objmysqli->query("INSERT INTO "
         . "biofeedback_stress(person_id,yeargov,ans_activity,"
         . "ans_balance,stress_resistance,stress_index,stress_fatique,"
         . "mean_heart_rate_num,mean_heart_rate_txt,eletro_cardiac_stability,ectopic_beat,"
         . "conclude_ectopic_beat,conclude_ans_balance,status_use) "
         . "VALUES("
         . "'".$param->person_id."',"
         . "'".$yeargov."',"
         . "'".$param->ans_activity."',"
         . "'".$param->ans_balance."',"
         . "'".$param->stress_resistance."',"
         . "'".$param->stress_index."',"
         . "'".$param->stress_fatique."',"
         . "'".$param->mean_heart_rate_num."',"
         . "'".$param->mean_heart_rate_txt."',"
         . "'".$param->eletro_cardiac_stability."',"
         . "'".$param->ectopic_beat."',"
         . "'".$param->conclude_ectopic_beat."',"
         . "'".$param->conclude_ans_balance."',"
         . "'Y'"
         . ");");
}
echo json_encode('ok');
$objmysqli->close();