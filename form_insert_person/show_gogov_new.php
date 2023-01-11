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

    $query_data = $conn->query(sprintf("SELECT id, json_print, datecreate  from gogov_new where status_use = 'Y' order by id desc LIMIT 20"));
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

    //  where  id = '953'
?>