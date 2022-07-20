<?php
class myPersonData
{
    /*ข้อตกลง 
     * set คือ รับค่าตัวแปรมา set ค่าให้กับ property
     * get นำค่าจาก property ไปใช้
    */
    private $objCnn;
    public $currdate = null;
    public $id13;
    public $id13bossDep;//เลขบัตรหัวหน้ากลุ่มงาน
    public $id13bossGroupWork;//เลขบัตรหัวหน้ากลุ่มภารกิจ
    public $personData = null;//obj person data by id13
    public $dep = null;//obj department
    public $groupwork = null;//obj groupwork
    public $position = null;//obj position
    public $ClassPosition = null;//obj class of position
    public $governmentEmpType = null;//obj class of government_emp_type

    public function setProperty_objCnn($objCnn){
        $this->objCnn = $objCnn;
    }
    public function setProperty_id13($id13){
        $this->id13 = $id13;
    }
    public function showID13(){
        return($this->id13);
    }
    public function setThaiDate($date){
        $thaiMonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        $dt = strtotime($date);
        $newDate = date('Y-m-d',$dt);
        $dateArr = explode('-',$newDate);
        $d = $dateArr[2];
        $m = $thaiMonth[(int)$dateArr[1] - 1];
        $y = $dateArr[0]+543;
        return $d.' '.$m.' '.$y;
    }
    public function get_currdate(){
        foreach ($this->objCnn->query("select curdate() as currdate;")->fetch_assoc() as $key => $value) {
             if($key=='currdate'){
                 $this->currdate = $value;
             }
        }
        return $this->currdate;
    }
    //PersonData
    public function get_personData(){
        $this->personData = new stdClass();
        $cnn = $this->objCnn;
        $rs = $cnn->query("select * from person where cid='".$this->id13."' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->personData = $cols;
            }
        }
        return $this->personData;
    }
    public function get_personName(){
        foreach ($this->personData as $personDatakey => $personDatavalue) {
            if($personDatakey == "pname"){
                $pname = $personDatavalue;
            }
            if($personDatakey == "fname"){
                $fname = $personDatavalue;
            }
            if($personDatakey == "lname"){
                $lname = $personDatavalue;
            }
        }
        return  $pname.$fname.' '.$lname;
    }
    //departmentData
    public function get_departmentData(){
        $this->dep = new stdClass();
        $cnn = $this->objCnn;
        $dep_code = "";
        $objPerson = $this->personData;
        foreach ($objPerson as  $key => $value) {
            if($key=="dep_code"){
                $dep_code = $value;
            }
        }
        $rs = $cnn->query("select * from department where dep_code='$dep_code' and status_use='Y';");//".$personData->dep_code."
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->dep = $cols;
            }
        }
        return $this->dep;
    }    
    public function get_departmentName(){
        $departmentName = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="dep_name"){
                $departmentName = $depDatavalue;
            }
        }
        return $departmentName;
    }
    public function get_departmentCode(){//code รหัสหน่วยงาน เช่น dep2_gwA
        $departmentCode = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="dep_code"){
                $departmentCode = $depDatavalue;
            }
        }
        return $departmentCode;
    }
    public function get_parent_department_code(){//code รหัสหน่วยงาน parent ของ dep_code อีกที
        $parent_department_code = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="parent_department_code"){
                $parent_department_code = $depDatavalue;
            }
        }
        return $parent_department_code;
    }
    public function get_id13BossDep(){//เลขบัตรประชาชนของหัวหน้า
        $id13BossDep = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="head_dep"){
                $id13BossDep = $depDatavalue;
            }
        }
        $this->id13bossDep = $id13BossDep;
        return $id13BossDep;
    }
    public function get_BossName(){//ชื่อ-สกุล ของหัวหน้า
        $cnn = $this->objCnn;
        $rs = $cnn->query("select concat(pname,fname,' ',lname) as bosname from person where cid='".$this->id13bossDep."' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $bossname = $cols['bosname'];
            }
        }
        return $bossname;
    }
    public function get_telNumber(){//เบอร์โทรกลุ่มงาน
        $telNumber = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="tel_no"){
                $telNumber = $depDatavalue;
            }
        }
        return $telNumber;
    }
    public function get_documentCode(){//เลขหนังสือกลุ่มงาน
        $documentCode = "";
        foreach ($this->dep as $depDatakey => $depDatavalue) {
            if($depDatakey=="document_code"){
                $documentCode = $depDatavalue;
            }
        }
        return $documentCode;
    }
    //groupworkData
    public function get_groupworkData(){//obj ข้อมูลกลุ่มภารกิจทั้งหมด
        $this->groupwork = new stdClass();
        $cnn = $this->objCnn;
        $groupwork_code = "";
        $objDep = $this->dep;
        foreach ($objDep as  $key => $value) {
            if($key=="groupwork_code"){
                $groupwork_code = $value;
            }
        }
        $rs = $cnn->query("select * from groupwork where groupwork_code='$groupwork_code' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->groupwork = $cols;
            }
        }
        return $this->groupwork;
    }
    public function get_groupworkName(){//ชื่อกลุ่มภารกิจ
        $groupworkName = "";
        foreach ($this->groupwork as $groupworkDatakey => $groupworkDatavalue) {
            if($groupworkDatakey=="groupwork_name"){
                $groupworkName = $groupworkDatavalue;
            }else if($groupworkDatakey=="head_groupwork"){
                $this->id13bossGroupWork = $groupworkDatavalue;
            }
        }
        return $groupworkName;
    }
    public function get_groupworkCode(){//code กลุ่มภารกิจ
        $groupworkCode = "";
        foreach ($this->groupwork as $groupworkDatakey => $groupworkDatavalue) {
            if($groupworkDatakey=="groupwork_code"){
                $groupworkCode = $groupworkDatavalue;
            }
        }
        return $groupworkCode;
    }
    //positionData
    public function get_positionData(){
        $this->position = new stdClass();
        $cnn = $this->objCnn;
        $position_code = "";
        $objPerson = $this->personData;
        foreach ($objPerson as  $key => $value) {
            if($key=="position_code"){
                $position_code = $value;
            }
        }
        $rs = $cnn->query("select * from position where position_code='$position_code' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->position = $cols;
            }
        }
        return $this->position;                                 
    }
    public function get_positionName(){
        $positionName = "";
        foreach ($this->position as $positionDatakey => $positionDatavalue) {
            if($positionDatakey == "position_name"){
                $positionName = $positionDatavalue;
            }
        }
        return $positionName;
    }
    //ClassPositionData
    public function get_ClassPositionData(){//ได้ object row จากตาราง class_position ด้วยเงื่อนไข class_position_shortname จากตาราง person
        $this->ClassPosition = new stdClass();
        $cnn = $this->objCnn;
        $class_position_shortname = "";
        $objPerson = $this->personData;
        foreach ($objPerson as  $key => $value) {
            if($key=="class_position_shortname"){
                $class_position_shortname = $value;
            }
        }
        $rs = $cnn->query("select * from class_position where class_position_shortname='$class_position_shortname' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->ClassPosition = $cols;
            }
        }
        return $this->ClassPosition;                                 
    }
    public function get_ClassPositionName(){//ระดับของตำแหน่ง
        $ClassPositionName = "";
        foreach ($this->ClassPosition as $ClassPositionDatakey => $ClassPositionDatavalue) {
            if($ClassPositionDatakey=="class_position_type_name"){
                $ClassPositionDatavalue = str_replace("ระดับ",null,$ClassPositionDatavalue);
                $arrClassPo = explode("(",$ClassPositionDatavalue);
                $ClassPositionName = $arrClassPo[0];
            }
        }
        return $ClassPositionName;
    }
    public function get_provinceName($provinceCode){
        $province_name = "";
        $rs = $this->objCnn->query("select province_name from province where province_code='$provinceCode' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $province_name = $cols['province_name'];
            }
        }
        return $province_name;
    }
    //ประเภท ข้าราชการ พกส พรก ฯลฯ 
    public function get_government_emp_type_Data(){//ได้ object row จากตาราง government_emp_type ด้วยเงื่อนไข government_emp_type_code จากตาราง person
        $this->governmentEmpType = new stdClass();
        $cnn = $this->objCnn;
        $objPerson = $this->personData;
        $government_emp_type_code="";
        foreach ($objPerson as  $key => $value) {
            if($key=="government_emp_type"){
                $government_emp_type_code = $value;
            }
        }
        $rs = $cnn->query("select * from government_emp_type where government_emp_type_code='$government_emp_type_code' and status_use='Y';");
        if($rs->num_rows >0){
            while ($cols = $rs->fetch_assoc()){
                $this->governmentEmpType = $cols;
            }
        }
        return $this->governmentEmpType;                                 
    }
    public function get_GovernmentEmpTypeName(){//ประเภทบุคลากร เช่น ข้าราชการ ลจป พกส พรก
        $GovernmentEmpTypeName = "";
        foreach ($this->governmentEmpType as $governmentEmpTypekey => $governmentEmpTypevalue) {
            if($governmentEmpTypekey=="government_emp_type_name"){
                $GovernmentEmpTypeName = $governmentEmpTypevalue;
            }
        }
        return $GovernmentEmpTypeName;
    }
    //ภาพ profile (img_profile_path)
    public function get_img_profile_path(){
        $img_profile_path = "";
        $cnn = $this->objCnn;
        foreach ($this->personData as  $key => $value) {
            if($key=="id"){
                $id = $value;
            }
            if($key=="img_profile_path"){
                if(isset($value) && !empty($value)){
                    $img_profile_path = $value;
                }else{
                    $cnn->query("update person set img_profile_path='../img/imgProfile/imgProfile.png' where id='$id';");
                    $img_profile_path = "../img/imgProfile/imgProfile.png";
                }
            }
        }
        return $img_profile_path;
    }
}   