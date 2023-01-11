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

    $insert_db = $conn->query(sprintf("INSERT INTO admin(cid, pass, pname, fname, lname, status_use) values('%s', '%s', '%s', '%s', '%s', 'Y') ", $cid, $cid,  $pname, $fname, $lname));

    if($insert_db === TRUE){
        echo json_encode(array('insert'=> "success"));
    }else{
        echo json_encode(array('insert'=>"error"));
    }
?>