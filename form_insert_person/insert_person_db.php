<?php
    require_once("../connectDB.php");

    $conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);


    $value = array(
                    "0"=>$_POST['c_id'],
                    "1"=>$_POST['p_name'],
                    "2"=>$_POST['f_name'],
                    "3"=>$_POST['l_name'],
                    "4"=>$_POST['position'],
                    "5"=>$_POST['classPosition'],
                    "6"=>$_POST['department'],
                    "7"=>$_POST['groupwork'],
                    "8"=>$_POST['governmentEmpType'],
                    "9"=>$_POST['b_date']
                );

    $insert_db = $conn->query(sprintf("INSERT INTO person(cid, pass, login_type, pname, fname, lname, 
                                                            position_code, class_position_shortname, dep_code, groupwork, 
                                                            status_use, government_emp_type, birth_date, record_use)
                                        values('%s', '%s', 'typeuser', '%s', '%s', '%s', '%s', '%s', '%s', '%s', 'Y', '%s', '%s', 'Y')  
                                    ", $value["0"], $value["0"],$value["1"], $value["2"], $value["3"],
                                    $value["4"], $value["5"], $value["6"], $value["7"], 
                                    $value["8"], $value["9"]));

    if($insert_db === true){
        echo "<div class='alert alert-success' role='alert'>บันทึกสำเร็จสำเร็จ</div>";
        header("refresh: 3; url=form_insert.php");
    }else{
        echo "<div class='alert alert-danger' role='alert'>บันทึกไม่สำเร็จสำเร็จ</div>";
        header("refresh: 3; url=form_insert.php");
    }
?>