<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $newposition = !empty($decode['newposition'])? $decode['newposition'] : "";
    $newposition_type = !empty($decode['newposition_type'])? $decode['newposition_type'] : "";

    $query_data = $conn->query(sprintf("SELECT id from position order by id desc"));

    $data = $query_data->fetch_object(); 
// // *****************************************************************************START POSITION ID************************************************************
    $get_position_id = $data->id;
    $new_position_id = (int)$get_position_id+1;
    $new_position_code = $new_position_id;
// // *****************************************************************************END POSITION ID************************************************************
 

    $insert_data = $conn->query(sprintf("INSERT INTO position VALUES('$new_position_id','$new_position_code','$newposition','','','','','$newposition_type','Y')"));

    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
  
?>