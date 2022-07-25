<?php
    require_once("data_for_insert.php");
    if(session_id() == '') {
        session_start();
        
    }
    if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
            header("Location:../index.html");	
    }  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
<div class="container-fluid">
    <div class="row mt-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <button type="button" class="btn btn-outline-primary" style="width:100%; height:3rem;" onclick="window.location.href='../starthr/index.php'">กลับ</button>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
                <div class="card-header"><h3>เพิ่มบุคลากร</h3></div>
                <div class="card-body">
                    <form action="./insert_person_db.php" method="post">
                        <div class="mb-3">
                            <label for="c_id" class="form-label">เลขประจำตัวประชาชน</label>
                            <input type="text" class="form-control" id="c_id" name="c_id" maxlength="13" >
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="p_name">
                              <option selected>เลือกคำนำหน้าชื่อ</option>
                              <?php $select_pname(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="f_name" class="form-label">ชื่อจริง</label>
                            <input type="text" class="form-control" id="f_name" name="f_name">
                        </div>
                        <div class="mb-3">
                            <label for="l_name" class="form-label">นามสกุล</label>
                            <input type="text" class="form-control" id="l_name" name="l_name">
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="governmentEmpType">
                                <option selected>เลือกประเภทบุคลากร</option>
                                <?php $select_governmentEmpType();?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="position">
                                <option selected>เลือกตำแหน่งสายงาน</option>
                                <?php $select_Position(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="classPosition">
                                <option selected>เลือกระดับตำแหน่ง</option>
                                <?php $select_classPosition(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="department">
                                <option selected>เลือกหน่วยงาน</option>
                                <?php $select_department(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="groupwork">
                                <option selected>เลือกกลุ่มภารกิจ</option>
                                <?php $select_groupwork(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="b_date" class="form-label">วัน/เดือน/ปีเกิด</label>
                            <input type="date" class="form-control" id="b_date" name="b_date">
                        </div>
                      <button type="submit" class="btn btn-primary " style="width: 100%;">บันทึก</button>

                    </form>
                </div>
            </div>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card" >
                <div class="card-header"><h3>ราขชื่อบุคลาการ</h3></div>
                <div class="card-body"  style="height: 46.15rem;  overflow-x: hidden;   overflow-y: scroll;">
                <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">รหัสประจำตัวประชาชน</th>
                        <th scope="col">ชื่อ</th>
                        <th scope="col">นามสกุล</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <?php $select_listPerson(); ?>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
</div>
<script type="text/javascript" src="../css/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>