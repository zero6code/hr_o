<?php
if(session_id() == '') {
    session_start();
}
/*connect Database*/   
include_once "connectDB.php";
include_once "PHP_func/myPerson.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {array_push($err_arr,"Connection Error!!");}
$err_arr = array();
$dataPost=json_decode(filter_input(INPUT_POST,'d'));
$user = $dataPost->user;
$pass= $dataPost->pass;
$typeuser= $dataPost->typeuser;
echo $user."|".$pass."|".$typeuser;

if($typeuser==='typeuser'){
    $sql="SELECT p.*,concat(fname,' ',lname) as person "
        . "FROM person p "
        . "WHERE p.cid='$user' AND p.pass = '$pass'  AND p.status_use='Y';";
}else if($typeuser==='typeadmin'){
    $sql="SELECT a.*,concat(fname,' ',lname) as person "
        . "FROM admin a "
        . "WHERE a.cid='$user' AND a.pass = '$pass'  AND a.status_use='Y';";
}else{
    $sql="select 0 as cc;";
}

$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    session_regenerate_id();
    $sessid = session_id();
    while ($cols = $rs->fetch_assoc()){
        $id13_online = $cols['cid'];
        $person_online = $cols['person'];
        $_SESSION['ses_user'] = $id13_online;
        
        if($typeuser==='typeuser'){
            $person_id = $cols['id'];
            $po_num = $cols['po_num'];
            $admission_date = $cols['admission_date'];
            $government_emp_type = $cols['government_emp_type'];
        }
        
    }
    $Data_json = new stdClass();//ข้อมูล online user ทั้งหมด เอาไว้ ทำ reportต่างๆ
    
    //รายละเอียด user ที่กำลัง online
    $PersonOnlineData = new myPersonData();
    $PersonOnlineData->setProperty_objCnn($objmysqli);
    $PersonOnlineData->setProperty_id13($id13_online);
    $PersonOnlineData->get_personData();
    $PersonOnlineData->get_departmentData();
    $PersonOnlineData->get_groupworkData();
    $PersonOnlineData->get_positionData();
    $PersonOnlineData->get_ClassPositionData();
    $PersonOnlineData->get_government_emp_type_Data();
    
    $txt_ins_person_id1="";$txt_ins_person_id2="";
    if($typeuser==='typeuser'){
        $txt_ins_person_id1 = "person_id,";
        $txt_ins_person_id2 = $person_id.",";
        $Data_json->po_num = $po_num;//เลขที่ตำแหน่ง
        $Data_json->person_id = $person_id;//id จากตาราง person (ใช้กรณี มีการเปลี่ยนเลขบัตรประชาชน)
        $Data_json->admission_date = $admission_date;//วันบรรจุรับราชการ
        $Data_json->government_emp_type = $government_emp_type;//ประเภทบุคลากร เช่น ขรก พรก 
    }
    
    $Data_json->id13_online = $id13_online;//เลขบัตรประชาชน
    $Data_json->dep_name= $PersonOnlineData->get_departmentName();//ชื่อหน่วยงาน (กลุ่มงาน)
    $Data_json->dep_code = $PersonOnlineData->get_departmentCode();//รหัสกลุ่มงาน เช่น dep2_gwA
    $Data_json->parent_department_code = $PersonOnlineData->get_parent_department_code();//รหัส parent ของ dep_code อีกที
    

    $Data_json->head_dep = $PersonOnlineData->get_id13BossDep();//เลขบัตรประชาชนของหัวหน้ากลุ่มงาน
    $Data_json->tel_no = $PersonOnlineData->get_telNumber();//เบอร์โทรกลุ่มงาน
    $Data_json->document_code = $PersonOnlineData->get_documentCode();//เลขหนังสือกลุ่มงาน
    $Data_json->groupwork_name =$PersonOnlineData->get_groupworkName();//ชื่อกลุ่มภารกิจ
    $Data_json->groupwork_code =$PersonOnlineData->get_groupworkCode();//get_groupworkCode()
    $Data_json->groupwork_Boss_id13 = $PersonOnlineData->id13bossGroupWork;//เลขบัตรประชาชนหัวหน้ากลุ่มภารกิจ
    $Data_json->position_name =$PersonOnlineData->get_positionName();//ชื่อตำแหน่ง
    $Data_json->class_position =$PersonOnlineData->get_ClassPositionName();//ชื่อระดับของตำแหน่ง
    $Data_json->dateNow =  $PersonOnlineData->setThaiDate($PersonOnlineData->get_currdate());//วันที่ปัจจุบันไทย
    $Data_json->dateNow2 =  $PersonOnlineData->get_currdate();//วันที่ปัจจุบันไทย
    $Data_json->pname = $PersonOnlineData->get_personName();//คำนำหน้า ชื่อ-สกุล คนที่กำลัง online
    $Data_json->government_emp_type_name = $PersonOnlineData->get_GovernmentEmpTypeName();//ชื่อประเภทบุคลากร เช่น ข้าราชการ คนที่กำลัง online
    $Data_json->img_profile_path = $PersonOnlineData->get_img_profile_path();//url ภาพ profile
    
    //รายละเอียด ของหัวหน้า คนที่กำลัง online
    $BossPersonOnlineData = new myPersonData();
    $BossPersonOnlineData->setProperty_objCnn($objmysqli);
    $BossPersonOnlineData->setProperty_id13($Data_json->head_dep);
    $BossPersonOnlineData->get_personData();
    $BossPersonOnlineData->get_departmentData();
    $BossPersonOnlineData->get_groupworkData();
    $BossPersonOnlineData->get_positionData();
    $BossPersonOnlineData->get_ClassPositionData();
    
    $Data_json->Boss_pname = $BossPersonOnlineData->get_personName();//คำนำหน้า ชื่อ-สกุล หัวหน้าของคนที่กำลัง online
    $Data_json->Boss_position_name =$BossPersonOnlineData->get_positionName();//ชื่อตำแหน่ง ของหัวหน้าคนที่กำลัง online
    $Data_json->Boss_class_position =$BossPersonOnlineData->get_ClassPositionName();//ชื่อระดับของตำแหน่ง ของหัวหน้าคนที่กำลัง online
    
     //รายละเอียด ของหัวหน้ากลุ่มภารกิจ คนที่กำลัง online
    $GroupworkBossPersonOnlineData = new myPersonData();
    $GroupworkBossPersonOnlineData->setProperty_objCnn($objmysqli);
    $GroupworkBossPersonOnlineData->setProperty_id13($Data_json->groupwork_Boss_id13);
    $GroupworkBossPersonOnlineData->get_personData();
    $GroupworkBossPersonOnlineData->get_departmentData();
    $GroupworkBossPersonOnlineData->get_groupworkData();
    $GroupworkBossPersonOnlineData->get_positionData();
    $GroupworkBossPersonOnlineData->get_ClassPositionData();
    
    $Data_json->Groupwork_Boss_pname = $GroupworkBossPersonOnlineData->get_personName();//คำนำหน้า ชื่อ-สกุล หัวหน้ากลุ่มภารกิจของคนที่กำลัง online
    $Data_json->Groupwork_Boss_position_name =$GroupworkBossPersonOnlineData->get_positionName();//ชื่อตำแหน่ง ของหัวหน้ากลุ่มภารกิจคนที่กำลัง online
    $Data_json->Groupwork_Boss_class_position =$GroupworkBossPersonOnlineData->get_ClassPositionName();//ชื่อระดับของตำแหน่ง ของหัวหน้ากลุ่มภารกิจคนที่กำลัง online
    
    //ข้อมูลผู้อำนวยการโรงพยาบาล
    $rs_bosskph = $objmysqli->query("select * from boss_skph where status_use='Y' limit 1;");
    if($rs_bosskph->num_rows >0){
        while ($cols_bosskph = $rs_bosskph->fetch_assoc()){
            $Data_json->skph_Boss_pname = $cols_bosskph['pname'].$cols_bosskph['fname']." ".$cols_bosskph['lname'];
            $Data_json->skph_Boss_position_name = $cols_bosskph['position_name2'];
            $Data_json->skph_Boss_cid = $cols_bosskph['cid'];
        }
    }
    
    $sql2 = "INSERT INTO onlineuser("
            . "sessid,"
            . "$txt_ins_person_id1"
            . "id13_online,"
            . "person_online,"
            . "login_type,"
            . "chkin_datetime,"
            . "json_data"
            . ") "
            . "VALUES('$sessid',"
            . "$txt_ins_person_id2"
            . "'$id13_online',"
            . "'$person_online',"
            . "'$typeuser',"
            . "NOW(),"
            . "'".serialize($Data_json)."'"    
            . ");";
    $objmysqli->query($sql2);
}else{
    array_push($err_arr,'Error!! Username or Password Not Found');
}
//ajax return
if(sizeof($err_arr)==0){
    echo json_encode('okeypassed');
}else{
    echo json_encode($err_arr);
}
$objmysqli->close();

