<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $newgroupwork_name = !empty($decode['newgroupwork_name'])? $decode['newgroupwork_name'] : "";
    $newhead_groupwork = !empty($decode['newhead_groupwork'])? $decode['newhead_groupwork'] : "";


    $query_data = $conn->query(sprintf("SELECT id, groupwork_code from groupwork order by id desc"));

    $data = $query_data->fetch_object(); 
// *****************************************************************************START GROUPWORK_CODE************************************************************
    $getchar_groupwork_code = substr($data->groupwork_code,2,1);
    $getnewASCIIchar_groupwork_code = (int)ord($getchar_groupwork_code)+1;
    $getnewchar_groupwork_code = chr($getnewASCIIchar_groupwork_code);

    $get_groupwork_code = substr($data->groupwork_code,0,2);
    $new_groupwork_code = $get_groupwork_code.$getnewchar_groupwork_code;
// *****************************************************************************END GROUPWORK_CODE************************************************************
// *****************************************************************************START GROUPWORK ID************************************************************
    $get_groupwork_id = $data->id;
    $new_groupwork_id = (int)$get_groupwork_id+1;
// *****************************************************************************END GROUPWORK ID************************************************************
    $cid_headGroupwork = substr($newhead_groupwork,0,13);  //หัวหน้ากลุ่มภารกิจ

    $insert_data = $conn->query(sprintf("INSERT INTO groupwork(id, groupwork_code, groupwork_name, head_groupwork, status_use)
                                         VALUES('%s', '%s', '%s', '%s', 'Y')", $new_groupwork_id, $new_groupwork_code, $newgroupwork_name, $cid_headGroupwork));



    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
  
?>