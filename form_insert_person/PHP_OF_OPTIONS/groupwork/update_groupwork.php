<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $groupwork_id = !empty($decode['groupwork_id'])? $decode['groupwork_id'] : "";
    $groupwork_name = !empty($decode['groupwork_name'])? $decode['groupwork_name'] : "";
    $groupwork_head = !empty($decode['groupwork_head'])? $decode['groupwork_head'] : "";

    $cid_headGroupwork = substr($groupwork_head,0,13);

    $update_data = $conn->query(sprintf("UPDATE groupwork SET groupwork_name = '{$groupwork_name}', head_groupwork = '{$cid_headGroupwork}' WHERE id = '{$groupwork_id}'"));


    if($update_data === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=> "error"));
    }

    // echo json_encode(array('update'=> $cid_headDep));
?>