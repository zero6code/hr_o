<?php
     require_once("../../../connectDB.php");

     $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

     $query_data = $conn->query(sprintf("
        select id, government_emp_type_code, government_emp_type_name, status_use from government_emp_type where status_use = 'Y' order by id desc;
     "));

     $output = [];
     if(mysqli_num_rows($query_data) > 0){
         while($data = $query_data->fetch_object()){
             $output[] = $data;
         }
     }else{
         $output['empty'] = ['empty'];
     }
     $conn->close();
     echo json_encode($output);
?>