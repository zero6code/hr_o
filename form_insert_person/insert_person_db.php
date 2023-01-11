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
        // $pid = !empty($decode['pid'])? $decode['pid'] : "";

    $insert_db = $conn->query(sprintf("INSERT INTO person(cid, pass, login_type, pname, fname, lname, 
                                                            position_code, class_position_shortname, dep_code, groupwork, 
                                                            status_use, government_emp_type, birth_date, record_use)
                                        values('%s', '%s', 'typeuser', '%s', '%s', '%s', '%s', '%s', '%s', '%s', 'Y', '%s', '%s', 'Y')  
                                    ", $cid, $cid,  $pname, $fname, $lname, $posi, $classposi, $dep, $group, $getype, $bd));

    if($insert_db === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
?>