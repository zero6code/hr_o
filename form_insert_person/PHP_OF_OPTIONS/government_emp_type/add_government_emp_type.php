<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

    $newgovernment_emp_type = !empty($decode['newgovernment_emp_type'])? $decode['newgovernment_emp_type'] : "";

    $query_data = $conn->query(sprintf("SELECT id, government_emp_type_code from government_emp_type order by id desc"));

    $data = $query_data->fetch_object(); 
// *****************************************************************************START GOVERNMENT EMP TYPE CODE************************************************************
    $getgovernment_emp_type_code = $data->government_emp_type_code;
    $getnewASCII_getgovernment_emp_type_code = (int)ord($getgovernment_emp_type_code)+1;
    $new_getgovernment_emp_type_code = chr($getnewASCII_getgovernment_emp_type_code);

// *****************************************************************************END GOVERNMENT EMP TYPE CODE************************************************************
// // *****************************************************************************START GROUPWORK ID************************************************************
    $get_government_emp_type_id = $data->id;
    $new_government_emp_type_id = (int)$get_government_emp_type_id+1;
// // *****************************************************************************END GROUPWORK ID************************************************************
 

    $insert_data = $conn->query(sprintf("INSERT INTO government_emp_type(id, government_emp_type_code, government_emp_type_name, status_use)
                                          VALUES('%s', '%s', '%s', 'Y')", $new_government_emp_type_id, $new_getgovernment_emp_type_code, $newgovernment_emp_type));



    if($insert_data === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
  
?>