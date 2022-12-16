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
        (select count(*) from gogov_back where  DATE(datecreate) = CURDATE()) as sumgogov_back,
        (select JSON_ARRAYAGG(json_object('depname', department.dep_name, 'depcode', department.dep_code,'pname',pname, 'fname',fname, 'lname',lname, 'id', person.id, 'cid', cid,'bday', birth_date,
            'position', position.position_name,'position_code', position.position_code,
            'positionclass', class_position.class_position_type_name2, 'positionclass_code', class_position.class_position_shortname, 
            'groupwork', groupwork.groupwork_name, 'groupwork_code', groupwork.groupwork_code, 
            'g_emp_type', government_emp_type.government_emp_type_name, 'g_emp_type_code', government_emp_type.government_emp_type_code)) 
            from person 
            left join department on person.dep_code = department.dep_code 
            left join position on person.position_code = position.position_code  
            LEFT JOIN class_position ON class_position.class_position_shortname = person.class_position_shortname
            LEFT JOIN groupwork ON groupwork.groupwork_code = person.groupwork  
            LEFT JOIN government_emp_type ON government_emp_type.government_emp_type_code = person.government_emp_type where person.record_use = 'Y') as jsondata,
        (select JSON_ARRAYAGG(json_object('pname',admin.pname, 'fname',admin.fname, 'lname',admin.lname, 'id', admin.id)) 
        from admin 
        left join person on admin.cid = person.cid where admin.status_use = 'Y') as jsondata2 order by person.id DESC;
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