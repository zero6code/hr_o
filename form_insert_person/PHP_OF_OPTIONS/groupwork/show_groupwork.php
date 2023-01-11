<?php
     require_once("../../../connectDB.php");

     $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

     $query_data = $conn->query(sprintf("
        select id, groupwork_code, groupwork_name, head_groupwork, (select JSON_ARRAYAGG(json_object( 'person_id', id, 'person_pname', pname, 'person_fname', fname, 'person_lname', lname , 'person_cid', cid) ) 
        from person where person.cid = groupwork.head_groupwork)as head_groupwork_data
        from groupwork order by id desc;
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