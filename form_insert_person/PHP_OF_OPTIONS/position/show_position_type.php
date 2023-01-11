<?php
     require_once("../../../connectDB.php");

     $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

     $query_data = $conn->query(sprintf("
       select id, position_by_type1_name from position_by_type1  order by id desc;
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