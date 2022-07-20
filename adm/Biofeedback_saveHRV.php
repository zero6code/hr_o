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
$personData = json_decode(filter_input(INPUT_POST,'personData'));
$objSendA = json_decode(filter_input(INPUT_POST,'objSendA'));
$objSendB = json_decode(filter_input(INPUT_POST,'objSendB'));
//JSON string
$personDataStr = filter_input(INPUT_POST,'personData');
$objSendAStr = filter_input(INPUT_POST,'objSendA');
$objSendBStr = filter_input(INPUT_POST,'objSendB');
//หาปีงบประมาณปัจจุบันจากวันที่ปัจจุบัน
$rsdateNow = $objmysqli->query("SELECT CURDATE() as cdate;");
while ($colsdateNow = $rsdateNow->fetch_assoc()){
    $yeargov = fiscalYear($colsdateNow['cdate']);
}

//หา person_id ว่ามีใน biofeedback_hrv หรือไม่ ถ้ามี ให้ update ถ้าไม่มีให้ insert
$rsFindPid = $objmysqli->query("select * from biofeedback_hrv where person_id='".$personData->person_id."' and yeargov='".$yeargov."' and status_use='Y';");
if($rsFindPid->num_rows >0){
    $objmysqli->query("UPDATE biofeedback_hrv SET "
          ."chkupdate='".$personData->chkupdate."',"  
          ."chkuptime='".$personData->chkuptime."',"  
          ."historychk='".$personData->historychk."',"  
          ."person_data='".$personDataStr."',"
          //แจงข้อ
          . "q_a1='".$objSendA->a1."',"
          . "q_a2='".$objSendA->a2."',"
          . "q_a3='".$objSendA->a3."',"
          . "q_a4='".$objSendA->a4."',"
          . "q_a5='".$objSendA->a5."',"
          . "q_a6='".$objSendA->a6."',"  
          . "q_b1='".$objSendB->b1."',"
          . "q_b2='".$objSendB->b2."',"
          . "q_b3='".$objSendB->b3."',"
          . "q_b4='".$objSendB->b4."',"
          . "q_b5='".$objSendB->b5."',"
          . "q_b6='".$objSendB->b6."',"  
          //json string
          ."question_a='".$objSendAStr."',"
          ."question_b='".$objSendBStr."',"
          ."datetime=NOW(),"
          ."status_use='Y' "
          ."WHERE person_id='".$personData->person_id."' AND yeargov='".$yeargov."' AND status_use='Y';");

}else{
    $objmysqli->query("INSERT INTO "
         . "biofeedback_hrv(person_id,yeargov,chkupdate,chkuptime,historychk,person_data,"
        //แจงข้อ
         . "q_a1,"
         . "q_a2,"
         . "q_a3,"
         . "q_a4,"
         . "q_a5,"
         . "q_a6,"
         . "q_b1,"
         . "q_b2,"
         . "q_b3,"
         . "q_b4,"
         . "q_b5,"
         . "q_b6,"
         //json string
         . "question_a,question_b,datetime,status_use) "
         . "VALUES("
         . "'".$personData->person_id."',"
         . "'".$yeargov."',"
         . "'".$personData->chkupdate."',"
         . "'".$personData->chkuptime."',"
         . "'".$personData->historychk."',"
         . "'".$personDataStr."',"
        //แจงข้อ
         . "'".$objSendA->a1."',"
         . "'".$objSendA->a2."',"
         . "'".$objSendA->a3."',"
         . "'".$objSendA->a4."',"
         . "'".$objSendA->a5."',"
         . "'".$objSendA->a6."',"
         . "'".$objSendB->b1."',"
         . "'".$objSendB->b2."',"
         . "'".$objSendB->b3."',"
         . "'".$objSendB->b4."',"
         . "'".$objSendB->b5."',"
         . "'".$objSendB->b6."',"
         //json string
         . "'".$objSendAStr."',"
         . "'".$objSendBStr."',"
         . "NOW(),"
         . "'Y'"
         . ");");
        //กรณี insert เข้าตาราง HRV ให้ insert เข้าตาราง APG และ Stress ด้วย  
        $objmysqli->query("INSERT INTO "
         . "biofeedback_apg(person_id,yeargov,status_use) "
         . "VALUES("
         . "'".$personData->person_id."',"
         . "'".$yeargov."',"
         . "'Y'"
         . ");");
         $objmysqli->query("INSERT INTO "
         . "biofeedback_stress(person_id,yeargov,status_use) "
         . "VALUES("
         . "'".$personData->person_id."',"
         . "'".$yeargov."',"
         . "'Y'"
         . ");");
         
}
echo json_encode('ok');

$objmysqli->close();