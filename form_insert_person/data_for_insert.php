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
    $query_data = $conn->query(sprintf("SELECT dep_code, dep_name FROM department where status_use = 'Y'"));
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
    $query_data = $conn->query(sprintf("SELECT groupwork_code, groupwork_name FROM groupwork where status_use = 'Y'"));
    while($data = $query_data->fetch_object()){
        printf("<option value='%s'>%s</option>",$data->groupwork_code, $data->groupwork_name);
    }
};

// $searchPerson = function(string|int $data) use($conn){
//     $daataPerson = $conn->query(sprintf("

//         SELECT id, cid, pname, fname, lname, birth_date,
//                 (select position_name from position where position.position_code = person.position_code) as position_name,
//                 (select class_position_type_name2 from class_position where class_position.class_position_shortname = person.class_position_shortname) as class_position_name,
//                 (select dep_name from department where department.dep_code = person.dep_code) as dep_name,
//                 (select groupwork_name from groupwork where groupwork.groupwork_code = person.groupwork) as groupwork_name,
//                 (select government_emp_type_name from government_emp_type where government_emp_type.government_emp_type_code = person.government_emp_type) as gov_type_name
//                 from person where cid like '%%%s%%' or fname like '%%%s%%' lname like '%%%s%%' order by id DESC; 

//     ", mysql_real_escape_string($data), mysql_real_escape_string($data), mysql_real_escape_string($data)));

//     while($data = $query_data->fetch_object()){

//         printf('
//                 <tr>
//                     <th scope="row">%s</th>
//                     <td>%s</td>
//                     <td>%s %s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td>%s</td>
//                     <td style="display: flex">
//                         <button id="editbtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" value="%s">แก้ไข</button>
//                         <button id="deletebtn" type="button" class="btn btn-danger" style="margin-left: 2px" value="%s">ลบ</button>
//                     </td>
//                 </tr>
//                 ', $data->id, $data->cid, $data->pname, $data->fname, $data->lname, 
//                    $data->birth_date, $data->gov_type_name, $data->position_name, $data->class_position_name,
//                    $data->dep_name, $data->groupwork_name, $data->id, $data->id);

    
//     }
// }
// // show list name person.
// $select_dataPerson - function() use($conn){
//     $query_i = $conn->query(sprintf());
// }


$select_listPerson = function() use($conn){

    $btn1 = '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>';

    $query_data = $conn->query(sprintf("

    select id, cid, pname, fname, lname, birth_date,
    (select position_name from position where position.position_code = person.position_code) as position_name,
    (select class_position_type_name2 from class_position where class_position.class_position_shortname = person.class_position_shortname) as class_position_name,
    (select dep_name from department where department.dep_code = person.dep_code) as dep_name,
    (select groupwork_name from groupwork where groupwork.groupwork_code = person.groupwork) as groupwork_name,
    (select government_emp_type_name from government_emp_type where government_emp_type.government_emp_type_code = person.government_emp_type) as gov_type_name
    from person order by id DESC; 

    "));

  $output = [];
  if (mysqli_num_rows($query_data) > 0){
        while($row = mysqli_fetch_assoc($query_data)){
            $output[] = $row;
        }
    }else{
        $output['empty'] = ['empty'];
    }

    mysqli_close($conn);

  echo json_encode($output);
    // while($data = $query_data->fetch_object()){

    //     printf('
                // <tr>
                //     <th scope="row">%s</th>
                //     <td>%s</td>
                //     <td>%s %s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td>%s</td>
                //     <td style="display: flex">
                //         <button id="editbtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" value="%s">แก้ไข</button>
                //         <button id="deletebtn" type="button" class="btn btn-danger" style="margin-left: 2px" value="%s">ลบ</button>
                //     </td>
                // </tr>
    //             ', $data->id, $data->cid, $data->pname, $data->fname, $data->lname, 
    //                $data->birth_date, $data->gov_type_name, $data->position_name, $data->class_position_name,
    //                $data->dep_name, $data->groupwork_name, $data->id, $data->id);

    
    // }
}

// if ($_GET['action'] === 'select_listPerson') {
//     select_listPerson();
// }

// exit();
?>
