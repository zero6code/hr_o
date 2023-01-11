<?php
    require_once("../../../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    $query_data = $conn->query(sprintf("
        select id, dep_code, dep_name, tel_no, head_dep,
        (select JSON_ARRAYAGG(json_object( 'person_id', id, 'person_pname', pname, 'person_fname', fname, 'person_lname', lname , 'person_cid', cid) ) 
        from person where person.cid = department.head_dep ) as person_data,
        (select JSON_ARRAYAGG(json_object( 'groupcode', groupwork_code, 'groupwork_name', groupwork_name) ) 
        from groupwork where groupwork.groupwork_code = department.groupwork_code ) as groupwork_name
        from department  
        where department.status_use = 'Y'
        order by department.id desc
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