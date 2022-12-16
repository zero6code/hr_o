<?php
    // session_start();
    require_once("../connectDB.php");
    //  if(session_id() == '') {
    //  session_start();
    // }
    // if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
    //         header("Location:../index.html");  
    // } 

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $query_data = $conn->query(sprintf("
    select (select JSON_ARRAYAGG(json_object('pname_th', pname_th))from pname) as pname,
    (select JSON_ARRAYAGG(json_object('position_code', position_code, 'position_name', position_name))from position) as position_name,
    (select JSON_ARRAYAGG(json_object('dep_code', dep_code, 'dep_name', dep_name))from department where status_use = 'Y') as department,
    (select JSON_ARRAYAGG(json_object('shortname', class_position_shortname, 'name2', class_position_type_name2))from class_position ) as class_position,
    (select JSON_ARRAYAGG(json_object('gov_code', government_emp_type_code, 'gov_name', government_emp_type_name))from government_emp_type ) as government_emp_type,
    (select JSON_ARRAYAGG(json_object('groupwork_code', groupwork_code, 'groupwork_name', groupwork_name))from groupwork  where status_use = 'Y') as groupwork;
    "));
    $output = [];
    if (mysqli_num_rows($query_data) > 0){
          while($row = mysqli_fetch_assoc($query_data)){
              $output[] = $row;
          }
      }else{
          $output['empty'] = ['empty'];
      }
  
      mysqli_close($conn);
  
    echo json_encode($output);
?>