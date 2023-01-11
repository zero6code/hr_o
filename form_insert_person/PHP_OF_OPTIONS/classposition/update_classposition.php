<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $editclassposition_id = !empty($decode['editclassposition_id'])? $decode['editclassposition_id'] : "";
    $editclassposition_name = !empty($decode['editclassposition_name'])? $decode['editclassposition_name'] : "";


    $update_data = $conn->query(sprintf("UPDATE class_position SET class_position_type_name2 = '$editclassposition_name' WHERE id = '$editclassposition_id'"));


    if($update_data === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=> "error"));
    }

    // echo json_encode(array('update'=> $cid_headDep));
?>