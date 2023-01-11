<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $editposition_id = !empty($decode['editposition_id'])? $decode['editposition_id'] : "";
    $editposition_name = !empty($decode['editposition_name'])? $decode['editposition_name'] : "";
    $position_type = !empty($decode['position_type'])? $decode['position_type'] : "";

    $update_data = $conn->query(sprintf("UPDATE position SET position_name = '{$editposition_name}', position_by_type1 = '{$position_type}' WHERE id = '{$editposition_id}'"));


    if($update_data === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=> "error"));
    }

    // echo json_encode(array('update'=> $cid_headDep));
?>