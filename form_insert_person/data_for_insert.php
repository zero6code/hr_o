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
    $query_data = $conn->query(sprintf("

    select 
	person.id as id,
    person.cid as cid,
    person.pname as pname,
    person.fname as fname,
    person.lname as lname,
    person.birth_date as birth_date,
    position.position_name as position_name,
    class_position.class_position_type_name2 as class_position_name,
    department.dep_name as dep_name,
    groupwork.groupwork_name as groupwork_name,
    government_emp_type.government_emp_type_name as gov_type_name
from person
join position
on person.position_code = position.position_code
join class_position
on person.class_position_shortname = class_position.class_position_shortname
join department
on person.dep_code = department.dep_code
join groupwork
on person.groupwork = groupwork.groupwork_code
join government_emp_type
on person.government_emp_type = government_emp_type.government_emp_type_code
order by person.id DESC

    "));
    while($data = $query_data->fetch_object()){
        printf("
                <tr>
                    <th scope='row'>%s</th>
                    <td>%s</td>
                    <td>%s %s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                </tr>
                ", $data->id, $data->cid, $data->pname, $data->fname, $data->lname, 
                   $data->birth_date, $data->gov_type_name, $data->position_name, $data->class_position_name,
                   $data->dep_name, $data->groupwork_name);
    }
}
?>
