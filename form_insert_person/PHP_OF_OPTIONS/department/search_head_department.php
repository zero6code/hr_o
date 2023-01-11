<?php
     require_once("../../../connectDB.php");

     $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

     isset( $_GET['search'] ) ? $data = $_GET['search'] : $data = "";

     $dataSearch = $conn->query(sprintf("
        SELECT pname, fname, lname, cid FROM person WHERE concat(pname, fname, lname, cid) LIKE '%%{$data}%%'
     "));
     
    $output = [];

    if(mysqli_num_rows($dataSearch) > 0){
        while($datarow = $dataSearch->fetch_object()){
            $output[] = $datarow;
        }
    }else{
        $output['empty'] = ['empty'];
    }

    mysqli_close($conn);

    echo json_encode($output);
?>