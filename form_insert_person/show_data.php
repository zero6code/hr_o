<?php 
require_once("../connectDB.php");

$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $query_data = $conn->query(sprintf("

        SELECT id, cid, pname, fname, lname, birth_date,
                (select position_name from position where position.position_code = person.position_code) as position_name,
                position_code,
                (select class_position_type_name2 from class_position where class_position.class_position_shortname = person.class_position_shortname) as class_position_name,
                class_position_shortname,
                (select dep_name from department where department.dep_code = person.dep_code) as dep_name,
                dep_code,
                (select groupwork_name from groupwork where groupwork.groupwork_code = person.groupwork) as groupwork_name,
                groupwork,
                (select government_emp_type_name from government_emp_type where government_emp_type.government_emp_type_code = person.government_emp_type) as gov_type_name,
                government_emp_type
                from person order by id DESC;

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