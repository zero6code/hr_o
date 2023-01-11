<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $newtitlename_th = !empty($decode['newtitlename_th'])? $decode['newtitlename_th'] : "";
    $newtitlename_en = !empty($decode['newtitlename_en'])? $decode['newtitlename_en'] : "";
    
    $query_data = $conn->query(sprintf("SELECT pcode from pname order by pcode desc"));

    $data = $query_data->fetch_object(); 

    $get_pname_id = $data->pcode;
    $new_pname_id = (int)$get_pname_id+1;
    
    $insert_data = $conn->query(sprintf("INSERT INTO pname(pcode, pname_th, pname_en, status_use)
                                         VALUES('%s', '%s', '%s', 'Y')", $new_pname_id, $newtitlename_th, $newtitlename_en));



    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
  
?>