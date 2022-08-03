<?php
require_once("../connectDB.php");

$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

// คำนำหน้าชื่อ pname table.
$select_pname = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT pname_th FROM pname"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->pname_th, $data->pname_th);
    }
};

// ระดับตำแหน่ง class_position table เช่น ปฏิบัติการ ชำนาญการ
$select_classPosition = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT class_position_shortname, class_position_type_name2 FROM class_position"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->class_position_shortname, $data->class_position_type_name2);
    }
};

// // ตำแหน่งสายงานวิชาชีพ
$select_Position = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT position_code, position_name FROM position"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->position_code, $data->position_name);
    }
};

//หน่วยงาน department table
$select_department = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT dep_code, dep_name FROM department"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->dep_code, $data->dep_name);
    }
};

// // ประเภทบุคลากร government_emp_type table เช่น ข้าราชการ พนักงานราชการ
$select_governmentEmpType = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT government_emp_type_code, government_emp_type_name FROM government_emp_type"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->government_emp_type_code, $data->government_emp_type_name);
    }
};

// //กลุ่มภาระกิจ groupwork_name table.
$select_groupwork = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT groupwork_code, groupwork_name FROM groupwork"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->groupwork_code, $data->groupwork_name);
    }
};
// // show list name person.
$select_listPerson = function() use($conn){
    $query_data = $conn->query(sprintf("SELECT id, cid, pname, fname, lname FROM person ORDER BY id DESC"));
    while($data = $query_data->fetch_object()){
        printf("
                <tr>
                    <th scope='row'>%s</th>
                    <td>%s</td>
                    <td>%s %s</td>
                    <td>%s</td>
                </tr>
                ", $data->id, $data->cid, $data->pname, $data->fname, $data->lname);
    }
}
?>