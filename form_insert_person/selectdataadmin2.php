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
        select (select count(*) from person where record_use = 'Y')as sumperson,
        (select count(*) from admin) as sumadmin, 
        (select count(*) from gogov_new where  DATE(datecreate) = CURDATE()) as sumgogov_new, 
        (select count(*) from gogov_back where  DATE(datecreate) = CURDATE() AND gogov_type IS NOT NULL) as sumgogov_back
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

    // select count(*) from gogov_back where  DATE(datecreate) = CURDATE()
?>