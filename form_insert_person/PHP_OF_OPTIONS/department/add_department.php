<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $dep_name = !empty($decode['dep_name'])? $decode['dep_name'] : "";
    $head_depname = !empty($decode['head_depname'])? $decode['head_depname'] : "";
    $depgroupwork = !empty($decode['depgroupwork'])? $decode['depgroupwork'] : "";
    $dep_tel = !empty($decode['dep_tel'])? $decode['dep_tel'] : "";

    $query_data = $conn->query(sprintf("SELECT id, dep_code from department order by id desc"));

    $data = $query_data->fetch_object(); 

    $numberDep_code = substr($data->dep_code,3,3);
    $getIdDeppartment = $data->id;
    $newDep_id = (int)$getIdDeppartment+1;
 
    $newDep_code = "dep".((int)$numberDep_code+1)."_".$depgroupwork;


    $insert_data = $conn->query(sprintf("INSERT INTO department(
                                                    id, dep_code, dep_name, parent_department_code, groupwork_code, head_dep, document_code, tel_no, 
                                                    status_use, token_l1, token_l2)
                                        VALUES('%s','%s', '%s', '%s', '%s','%s','','%d','Y','','')
                                ",  $newDep_id,$newDep_code, $dep_name, $depgroupwork, $depgroupwork, $head_depname, $dep_tel));

    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }

?>