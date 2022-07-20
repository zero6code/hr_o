<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/myPerson.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$err_arr = array();

$Data_json_for_edit = json_decode(filter_input(INPUT_POST,'json_for_edit'));
$Data_json_for_print = json_decode(filter_input(INPUT_POST,'json_for_print'));

//declare vairable for Database Field

//ส่วนรับค่าจากหน้าจอ
$officialdoc_num = "";
$gogov_one_or_group = "";
$gogov_group_num = "";
$gogov_group_id13 = "";
$topic = "";
$project_date_begin = "";
$project_date_end = "";
$gogov_place = "";
$gogov_date_depart = "";
$gogov_date_arrive = "";
$budget_type2_name = "";
$budget_type = "";
$budget_type3_name = "";
$gogov_by = "";
$gogov_by4 = "";
$gogov_by5 = "";
$code_province_depart_go = "";
$code_province_arrive_go = "";
$code_province_depart_return = "";
$code_province_arrive_return = "";
$money_type = "a";
$money_type1 = "";
$money_type2 = "";
$money_type3 = "";
$money_type4 = "";
$money_type5 = "";
$person_addid13 = "";
$project_int_ext = "";
$project_int_select = "";
$project_ext_txt = "";
//ส่วนที่เพิ่มเติมเพื่อเวลาสั่ง print

//ส่วนที่รับค่าจากหน้าจอ(สำหรับเอาไป edit)
if(!empty($Data_json_for_edit->person_addid13)) {$person_addid13 = $Data_json_for_edit->person_addid13;}//คนที่เขียนบันทึกไปราชการ(id13)
if(!empty($Data_json_for_edit->child1_txt)) { $officialdoc_num = $Data_json_for_edit->child1_txt;}//เลขหนังสือ
if(!empty($Data_json_for_edit->child2_rdo)) { $gogov_one_or_group = $Data_json_for_edit->child2_rdo;}//1=คนเดียว 2=หมู่คณะ
if(!empty($Data_json_for_edit->child22_rdo)) { $gogov_for = $Data_json_for_edit->child22_rdo;}//1=ประชุม 2=อบรม 3=สัมมนา


/*
if(!empty($Data_json_for_edit->child2_txt) ) { $gogov_group_num = intval($Data_json_for_edit->child2_txt);}//ไปกี่คน กรณีเดินทางเป็นหมู่คณะ
if(!empty($Data_json_for_edit->child3_select) ) {
    $gogov_group_id13 = $Data_json_for_edit->child3_select;
    if (is_array($gogov_group_id13)) {
        $gogov_group_id13 = implode(",",$gogov_group_id13);//เลขบัตรประชาชน ผู้ร่วมเดินทางเป็นหมู่คณะ
    }
}//เลข ID13 ผู้ร่วมเดินทาง(comma)
*/


if(!empty($Data_json_for_edit->child12_select) ) {
    $act_as = $Data_json_for_edit->child12_select;
}//เลข ID13 ผู้ปฏิบัติหน้าที่แทน
if(!empty($Data_json_for_edit->child4_txt) ) { $topic  = $Data_json_for_edit->child4_txt;}//ไปราชการเรื่อง
if(!empty($Data_json_for_edit->child5_txt1) ) { $project_date_begin  = $Data_json_for_edit->child5_txt1;}//วันเริ่มโครงการ 4 กรกฎาคม 2561
if(!empty($Data_json_for_edit->child5_txt2) ) { $project_date_end  = $Data_json_for_edit->child5_txt2;}//วันสิ้นสุดโครงการ 5 กรกฎาคม 2561
if(!empty($Data_json_for_edit->child6_rdo) ) { $project_int_ext  = $Data_json_for_edit->child6_rdo;}//ผู้จัดในกรม หรือ นอก กรม
if(!empty($Data_json_for_edit->child6_select) ) { $project_int_select  = $Data_json_for_edit->child6_select;}//code หน่วยงานผู้จัดที่อยู่ในสังกัดกรมสุขภาพจิต
if(!empty($Data_json_for_edit->child6_txt1) ) { $project_ext_txt  = $Data_json_for_edit->child6_txt1;}//ชื่อหน่วยงานภายนอกที่จัด
if(!empty($Data_json_for_edit->child6_txt2) ) { $gogov_place  = $Data_json_for_edit->child6_txt2;}//ไปราชการ ณ
if(!empty($Data_json_for_edit->child7_txt1) ) { $gogov_date_depart  = $Data_json_for_edit->child7_txt1;}//เริ่มเดินทางโดยไม่นับวันลา 3 กรกฎาคม 2561
if(!empty($Data_json_for_edit->child7_txt2) ) { $gogov_date_arrive  = $Data_json_for_edit->child7_txt2;}//สิ้นสุดเดินทางโดยไม่นับวันลา 7 กรกฎาคม 2561
if(!empty($Data_json_for_edit->child81_txt1) ) { $budget_type2_name  = $Data_json_for_edit->child81_txt1;}//เบิกค่าเดินทางจาก เงินงบประมาณ หมวดอะไร?
if(!empty($Data_json_for_edit->child81_rdo) ) { $budget_type  = $Data_json_for_edit->child81_rdo;}//1 = เบิกค่าเดินทางจากเงินบำรุง 2  = เบิกค่าเดินทางจากเงินงบประมาณ 3  = เบิกค่าเดินทางจากเงินโครงการ 4  = เบิกค่าเดินทางจากทุนส่วนตัว
if(!empty($Data_json_for_edit->child81_txt2) ) { $budget_type3_name  = $Data_json_for_edit->child81_txt2;}//เบิกค่าเดินทางจาก เงินโครงการ ชื่อโครงการอะไร
if(!empty($Data_json_for_edit->child82_rdo) ) { $gogov_by  = $Data_json_for_edit->child82_rdo;}//เดินทางโดยอะไร 1=รถโดยสารประจำทาง 2=รถไฟ 3=เครื่องบิน 4=รถยนต์ส่วนตัว 5=รถยนต์ส่วนกลาง
if(!empty($Data_json_for_edit->child82_txt1) ) { $gogov_by4  = $Data_json_for_edit->child82_txt1;}//ทะเบียนรถยนต์ส่วนตัว
if(!empty($Data_json_for_edit->child82_txt2) ) { $gogov_by5  = $Data_json_for_edit->child82_txt2;}//ทะเบียนรถยนต์ส่วนกลาง
if(!empty($Data_json_for_edit->child9_select0) ) { $code_province_depart_go  = $Data_json_for_edit->child9_select0;}//codeจังหวัด ขาไปจาก(จังหวัดอะไร)
if(!empty($Data_json_for_edit->child9_select1) ) { $code_province_arrive_go  = $Data_json_for_edit->child9_select1;}//codeจังหวัด ขาไปถึง(จังหวัดอะไร)
if(!empty($Data_json_for_edit->child9_select2) ) { $code_province_depart_return  = $Data_json_for_edit->child9_select2;}//codeจังหวัด ขากลับจาก(จังหวัดอะไร)
if(!empty($Data_json_for_edit->child9_select3) ) {  $code_province_arrive_return = $Data_json_for_edit->child9_select3;}//codeจังหวัด ขากลับมาถึง(จังหวัดอะไร)
if(!empty($Data_json_for_edit->child10_chkbox) &&  is_array($Data_json_for_edit->child10_chkbox)){
    $money_type =implode(",",$Data_json_for_edit->child10_chkbox);
}//1 = ค่าเบี้ยเลี้ยง,2 =ค่าที่พัก,3 =ค่าพาหนะ ,4 = ค่าลงทะเบียน,5 = ค่าใช้จ่ายอื่นๆ 6= ไม่ขอเบิกค่าใช้จ่าย
if(!empty($Data_json_for_edit->child10_txt1) ) { $money_type1  = $Data_json_for_edit->child10_txt1;}//ค่าเบี้ยเลี้ยง(บาท)
if(!empty($Data_json_for_edit->child10_txt2) ) { $money_type2  = $Data_json_for_edit->child10_txt2;}//ค่าที่พัก(บาท)
if(!empty($Data_json_for_edit->child10_txt3) ) { $money_type3  = $Data_json_for_edit->child10_txt3;}//ค่าพาหนะ(บาท)
if(!empty($Data_json_for_edit->child10_txt4) ) { $money_type4  = $Data_json_for_edit->child10_txt4;}//ค่าลงทะเบียน(บาท)
if(!empty($Data_json_for_edit->child10_txt5) ) { $money_type5  = $Data_json_for_edit->child10_txt5;}//ค่าใช้จ่ายอื่นๆ(บาท)
if(!empty($Data_json_for_edit->child10_select) ) { $money_type4_budgettype  = $Data_json_for_edit->child10_select;}//ค่าลงทะเบียน(บาท)
if(!empty($Data_json_for_edit->child9_txt1) ) { $source_doc_num  = $Data_json_for_edit->child9_txt1;}//เลขรับหนังสือ (เรื่องเดิม)
if(!empty($Data_json_for_edit->child9_txt2) ) { $source_doc_date  = $Data_json_for_edit->child9_txt2;}//ลงวันที่ เลขรับหนังสือ (เรื่องเดิม)
//$child11_chkbox//1 = มีหนังสือเชิญ 2 = มีเอกสารโครงการ

//เพิ่มเติม property ให้กับ object $Data_json_for_print (ส่วนที่ฝั่ง client ให้ข้อมูลไม่ได้)
$class_myPersonData = new myPersonData();
$class_myPersonData->setProperty_objCnn($objmysqli);
$class_myPersonData->setProperty_id13($person_addid13);

$class_myPersonData->get_personData();
$class_myPersonData->get_departmentData();


$Data_json_for_print->gogov_group_num = $gogov_group_num;//จำนวนผู้ร่วมเดินทาง
if($gogov_one_or_group == "2"){//ถ้าไปเป็นหมู่คณะ
    $x = new myPersonData();
    $x->setProperty_objCnn($objmysqli);
    foreach ($Data_json_for_edit->child3_select as $listID13value) {
        $x->setProperty_id13($listID13value);
        $x->get_personData();
        $x->get_positionData();
        
        $xPname[] = $x->get_personName();
        $xPositionName[] = $x->get_positionName();
    }
    $Data_json_for_print->gogov_group_id13_names = implode(",",$xPname);//รายชื่อผู้ร่วมเดินทาง
    $Data_json_for_print->gogov_group_position_names = implode(',',$xPositionName);//ตำแหน่งของรายชื่อผู้ร่วมเดินทาง
    unset($x);
}else{
    $Data_json_for_print->gogov_group_id13_names = "";
}



$Data_json_for_print->name_province_depart_go = $class_myPersonData->get_provinceName($code_province_depart_go);
$Data_json_for_print->name_province_arrive_go = $class_myPersonData->get_provinceName($code_province_arrive_go);
$Data_json_for_print->name_province_depart_return = $class_myPersonData->get_provinceName($code_province_depart_return);
$Data_json_for_print->name_province_arrive_return = $class_myPersonData->get_provinceName($code_province_arrive_return);
$Data_json_for_print->head_dep = $class_myPersonData->get_id13BossDep();

$sql = "insert into gogov("
        . "officialdoc_num,"
        . "gogov_one_or_group,"
        . "gogov_for,"
        . "gogov_group_num,"
        . "gogov_group_id13,"
        . "topic,"
        . "project_date_begin,"
        . "project_date_end,"
        . "project_int_ext,"
        . "project_int_dmh_child_code,"
        . "project_ext_name,"
        . "gogov_place,"
        . "gogov_date_depart,"
        . "gogov_date_arrive,"
        . "budget_type2_name,"
        . "budget_type,"
        . "budget_type3_name,"
        . "gogov_by,"
        . "gogov_by4,"
        . "gogov_by5,"
        . "code_province_depart_go,"
        . "code_province_arrive_go,"
        . "code_province_depart_return,"
        . "code_province_arrive_return,"
        . "money_type,"
        . "money_type1,"
        . "money_type2,"
        . "money_type3,"
        . "money_type4,"
        . "money_type4_budgettype,"
        . "money_type5,"
        . "source_doc_num,"
        . "source_doc_date,"
        . "json_for_edit,"
        . "json_for_print,"
        . "personid13_add,"
        . "person_name_add,"
        . "datetime_add,"
        . "gogov_depcode,"
        . "act_as,"
        . "director_permit_status,"
        . "status_use"
        . ") values("
        . "'".$Data_json_for_print->document_code."',"
        . "'$gogov_one_or_group',"
        . "'$gogov_for',"   
        . "'$gogov_group_num',"
        . "'$gogov_group_id13',"
        . "'$topic',"
        . "'$project_date_begin',"
        . "'$project_date_end',"
        . "'$project_int_ext',"   
        . "'$project_int_select',"
        . "'$project_ext_txt',"
        . "'$gogov_place',"
        . "'$gogov_date_depart',"
        . "'$gogov_date_arrive',"
        . "'$budget_type2_name',"
        . "'$budget_type',"
        . "'$budget_type3_name',"
        . "'$gogov_by',"
        . "'$gogov_by4',"
        . "'$gogov_by5',"
        . "'$code_province_depart_go',"
        . "'$code_province_arrive_go',"
        . "'$code_province_depart_return',"
        . "'$code_province_arrive_return',"
        . "'$money_type',"
        . "'$money_type1',"
        . "'$money_type2',"
        . "'$money_type3',"
        . "'$money_type4',"
        . "'$money_type4_budgettype',"    
        . "'$money_type5',"
        . "'$source_doc_num',"
        . "'$source_doc_date',"
        . "'".serialize($Data_json_for_edit)."',"
        . "'".serialize($Data_json_for_print)."',"//serialize/unserialize คือการ convert object to string ในแบบ php
        . "'$person_addid13',"
        . "'".$Data_json_for_print->person_addName."',"
        . "NOW(),"
        . "'".$Data_json_for_print->dep_code."',"
        . "'$act_as',"
        . "'not permitted',"    
        ."'Y'"
        . ");";
$rs = $objmysqli->query($sql);

//echo json_encode($Data_json_for_print);//โยนกลับไปให้ client print PDF
if($rs){
    $rs2 = $objmysqli->query("select * from gogov where officialdoc_num='".$Data_json_for_print->document_code."' and personid13_add='$person_addid13' and topic='$topic' limit 1; ");
    $n_sql2 = $rs2->num_rows;
        if($n_sql2!=0){
                while($cols2 = $rs2->fetch_assoc()){
                    $id_for_fileupload = $cols2['id'];//id สำหรับ file upload
                    $cols2['json_for_print'] = unserialize($cols2['json_for_print']);
                    $cols2['json_for_edit'] = unserialize($cols2['json_for_edit']);
                    $d[] = $cols2;
                }
                $data = new stdClass();
                $data->idForUpload = 'insOK_'.$id_for_fileupload;
                $data->allData = $d;
        }else{
            array_push($err_arr,'ไม่พบ id จากเงื่อนไขที่กำหนด');
        }        
}else{
    array_push($err_arr,'ไม่สามารถ insert ได้');
}

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($data);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}


$objmysqli->close();