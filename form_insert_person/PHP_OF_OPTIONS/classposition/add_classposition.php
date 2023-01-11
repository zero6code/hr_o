<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $newclassposition_name = !empty($decode['newclassposition_name'])? $decode['newclassposition_name'] : "";

    $query_data = $conn->query(sprintf("SELECT id from class_position order by id desc"));

    $data = $query_data->fetch_object(); 
// // *****************************************************************************START POSITION ID************************************************************
    $get_classposition_id = $data->id;
    $new_classposition_id = (int)$get_classposition_id+1;
// // *****************************************************************************END POSITION ID************************************************************
    $newClassPosition_shortname = '';
    $number_shortname = 0;
    $newClassPosition_group = 'Z';
    $newClassPosition_shortname = $newClassPosition_group.($number_shortname+1);

    $insert_data = $conn->query(sprintf("INSERT INTO class_position VALUES('$new_classposition_id','$newclassposition_name','$newclassposition_name','$newClassPosition_shortname','$newClassPosition_group','Y')"));

    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
  
?>