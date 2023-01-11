<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $government_emp_type_id = !empty($decode['government_emp_type_id'])? $decode['government_emp_type_id'] : "";
    $government_emp_type_name = !empty($decode['government_emp_type_name'])? $decode['government_emp_type_name'] : "";

    $update_data = $conn->query(sprintf("UPDATE government_emp_type SET government_emp_type_name = '{$government_emp_type_name}' WHERE id = '{$government_emp_type_id}'"));


    if($update_data === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=> "error"));
    }

    // echo json_encode(array('update'=> $cid_headDep));
?>