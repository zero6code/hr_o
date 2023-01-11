<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $dep_id = !empty($decode['dep_id'])? $decode['dep_id'] : "";
    $dep_name = !empty($decode['dep_name'])? $decode['dep_name'] : "";
    $head_depname = !empty($decode['head_depname'])? $decode['head_depname'] : "";
    $depgroupwork = !empty($decode['depgroupwork'])? $decode['depgroupwork'] : "";
    $dep_tel = !empty($decode['dep_tel'])? $decode['dep_tel'] : "";

    $cid_headDep = substr($head_depname,0,13);

    $update_data = $conn->query(sprintf("UPDATE department SET dep_name = '{$dep_name}', parent_department_code = '{$depgroupwork}', groupwork_code = '{$depgroupwork}' , head_dep = '{$cid_headDep}',tel_no = '{$dep_tel}' WHERE id = '{$dep_id}'"));


    if($update_data === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=> "error"));
    }

    // echo json_encode(array('update'=> $cid_headDep));
?>