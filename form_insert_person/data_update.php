<?php 
    require_once("../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

    // $bday = ($_POST['b_date'] != "")? $_POST['b_date']:"-";
    $input = file_get_contents("php://input");
    $decode = json_decode($input, true);

                $cid = !empty($decode['cid'])? $decode['cid'] : "";
                $pname = !empty($decode['pname'])? $decode['pname'] : "";
                $fname = !empty($decode['fname'])? $decode['fname'] : "";
                $lname = !empty($decode['lname'])? $decode['lname'] : "";
                $posi = !empty($decode['position'])? $decode['position'] : "";
                $classposi = !empty($decode['classPosition']) ? $decode['classPosition'] : "";
                $dep = !empty($decode['department']) ? $decode['department'] : "";
                $group = !empty($decode['groupwork']) ? $decode['groupwork'] : "";
                $getype = !empty($decode['getype']) ? $decode['getype'] : "";
                $bd = !empty($decode['b_date']) ? $decode['b_date'] : "0000-00-00";
                $pid = !empty($decode['pid'])? $decode['pid'] : "";

    $update_db = $conn->query(sprintf(" UPDATE person SET cid = '{$cid}', pname = '{$pname}', fname = '{$fname}', lname = '{$lname}', position_code = '{$posi}', class_position_shortname = '{$classposi}', dep_code = '{$dep}', groupwork = '{$group}', government_emp_type = '{$getype}', birth_date = '{$bd}' WHERE id = '{$pid}'"));

    if($update_db === TRUE){
        echo json_encode(array('update'=> "success"));
    }else{
        echo json_encode(array('update'=>"error"));
    }
        // echo  $cid;
 ?>

 