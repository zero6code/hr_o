<?php
    if(session_id() == '') {
        session_start();
    }
    if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
            header("Location:../index.html");	
    }  

    include_once "../connectDB.php";
    $conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);

    $objdata = (array)json_decode(filter_input(INPUT_POST,'objdata'));

    foreach ( $objdata as $field  ) {
        print_r($field);
    }
    
?>