<?php 
 session_start();
require_once("../connectDB.php");
 if(session_id() == '') {
     session_start();
 }
 if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
         header("Location:../index.html");  
 }  
$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);


isset( $_GET['datadocq'] ) ? $data = $_GET['datadocq'] : $data = "";


$query_data = $conn->query(sprintf("

        SELECT * FROM person 
        LEFT JOIN gogov_new ON gogov_new.person_id = person.id 
        LEFT JOIN position ON position.position_code = person.position_code 
        LEFT JOIN class_position ON class_position.class_position_shortname = person.class_position_shortname 
        LEFT JOIN department ON department.dep_code = person.dep_code 
        LEFT JOIN groupwork ON groupwork.groupwork_code = person.groupwork 
        LEFT JOIN department_other ON department_other.id = gogov_new.dep_project_owner 
        WHERE person.id = '{$_SESSION['person_id']}' and gogov_new.id = '{$data}'

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