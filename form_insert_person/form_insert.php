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
<div id="showmessage"></div>

<div class="container-fluid">
            <div class="modal fade " id="search" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg ">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ค้นหา</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input id="datasearch" class="form-control form-control-lg" type="text" placeholder="ใส่ เลขประจำตัวประชาชน หรือ ชื่อ นาสกุล" aria-label=".form-control-lg"  onkeyup="searchdata()">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="btnsearch" type="button" class="btn btn-primary">Search</button>
                  </div>
                  <hr>
                    <div class="modal-body">
                    <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">รหัสประจำตัวประชาชน</th>
                        <th scope="col">ชื่อ</th>
                        </tr>
                    </thead>
                    <tbody  id="show"> </tbody>
                    </table>

                    </div>
                </div>
              </div>
            </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 mt-2">
            <button type="button" class="btn btn-outline-primary" style="width:100%; height:3rem;" onclick="window.location.href='../starthr/index.php'">กลับ</button>
            <button  type="button" class="btn btn-primary" style="width:100%; height:3rem; margin-top:1vh;"  data-bs-toggle="modal" data-bs-target="#search" >ค้นหา</button>

        </div>
    <div class="row mt-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto ">
            <div class="card">
                <div class="card-header"><h3>เพิ่มบุคลากร</h3></div>
                <div class="card-body">
                    <form action="./insert_person_db.php" method="post">
                        <div class="mb-3">
                            <label for="c_id" class="form-label">เลขประจำตัวประชาชน</label>
                            <input type="text" class="form-control" id="c_id" name="c_id" maxlength="13" required>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="p_name" required>
                              <option selected>เลือกคำนำหน้าชื่อ</option>
                              <?php $select_pname(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="f_name" class="form-label">ชื่อจริง</label>
                            <input type="text" class="form-control" id="f_name" name="f_name" required>
                        </div>
                        <div class="mb-3">
                            <label for="l_name" class="form-label">นามสกุล</label>
                            <input type="text" class="form-control" id="l_name" name="l_name" required>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="governmentEmpType" required>
                                <option selected value="">เลือกประเภทบุคลากร</option>
                                <?php $select_governmentEmpType();?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="position" required>
                                <option selected value="">เลือกตำแหน่งสายงาน</option>
                                <?php $select_Position(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="classPosition" required>
                                <option selected value="">เลือกระดับตำแหน่ง</option>
                                <option  value="">null</option>
                                <?php $select_classPosition(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="department" required>
                                <option selected value="">เลือกหน่วยงาน</option>
                                <option  value="">null</option>
                                <?php $select_department(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="groupwork" required>
                                <option selected value="">เลือกกลุ่มภารกิจ</option>
                                <?php $select_groupwork(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="b_date" class="form-label">วัน/เดือน/ปีเกิด</label>
                            <input type="date" class="form-control" id="b_date" name="b_date" >
                        </div>
                      <button type="submit" class="btn btn-primary " style="width: 100%;">บันทึก</button>

                    </form>
                </div>
            </div>
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card" >
                <div class="card-header"><h3>ราขชื่อบุคลากร</h3></div>
                <div class="card-body"  style="height: 65vh;  overflow-x: auto;   overflow-y: scroll; margin-bottom: 5vh;">
                <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">รหัสประจำตัวประชาชน</th>
                        <th scope="col">ชื่อ</th>
                        <th scope="col">นามสกุล</th>
                        <th scope="col">วันเกิด</th>
                        <th scope="col">ประเภทบุคลากร</th>
                        <th scope="col">ตำแหน่งสายงาน</th>
                        <th scope="col">ระดับตำแหน่ง</th>
                        <th scope="col">หน่วยงาน</th>
                        <th scope="col">กลุ่มภารกิจ</th>
                        </tr>
                    </thead>
                    <tbody  id="showdatatable"></tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
</div>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">แก้ไขข้อมูลบุคลากร</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <form action="./data_update.php" method="post" id="formEdit"></form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" form="formEdit" >Save changes</button>
                        </div>

                    </div>
                  </div>
                </div>
<script type="text/javascript" src="../css/bootstrap/js/bootstrap.min.js"></script>

<script type="text/javascript">


 var modalEdit = document.getElementById("formEdit");

    let editData = (cid, pname, fname, lname, gov_type_name, position, class_position, dep_name, groupwork, birth_date, id, gov_type_code, position_code, class_position_code, dep_code,groupwork_code) => {
        return (modalEdit.innerHTML = (`
                                 <input type="text" class="form-control" id="pid" name="pid" maxlength="13" value="${id}" hidden>
                        <div class="mb-3">
                            <label for="c_id" class="form-label">เลขประจำตัวประชาชน</label>
                            <input type="text" class="form-control" id="c_id" name="c_id" maxlength="13" value="${cid}" >
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="p_name"  >
                              <option selected value="${pname}">${pname}</option>
                              <?php $select_pname(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="f_name" class="form-label">ชื่อจริง</label>
                            <input type="text" class="form-control" id="f_name" name="f_name" value="${fname}">
                        </div>
                        <div class="mb-3">
                            <label for="l_name" class="form-label">นามสกุล</label>
                            <input type="text" class="form-control" id="l_name" name="l_name" value="${lname}">
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="governmentEmpType" >
                                <option selected value="${gov_type_code}">${gov_type_name}</option>
                                <?php $select_governmentEmpType();?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="position" >
                                <option selected value="${position_code}">${position}</option>
                                <option value="">null</option>
                                <?php $select_Position(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="classPosition" >
                                <option selected value="${class_position_code}">${class_position}</option>
                                <option value="">null</option>
                                <?php $select_classPosition(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="department" >
                                <option selected value="${dep_code}">${dep_name}</option>
                                <option value="">null</option>
                                <?php $select_department(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example" name="groupwork" >
                                <option selected value="${groupwork_code}">${groupwork}</option>
                                <?php $select_groupwork(); ?>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="b_date" class="form-label">วัน/เดือน/ปีเกิด</label>
                            <input type="date" class="form-control" id="b_date" name="b_date" value="${birth_date}">
                        </div>

            `));
    }

    let showdata_table = () => {
           var showdata = document.getElementById('showdatatable'); 
            fetch('show_data.php')
            .then((response) => response.json())
            .then((data) => {
                if (data['empty']) {
                    showdata.innerHTML = ` <tr><td>no data</td></tr>`
                }else{
                    var tr = '';
                    for (var i in data){
                        tr += `
                              <tr>
                                    <th scope="row">${data[i].id}</th>
                                    <td>${data[i].cid}</td>
                                    <td>${data[i].pname} ${data[i].fname}</td>
                                    <td>${data[i].lname}</td>
                                    <td>${data[i].birth_date}</td>
                                    <td>${data[i].gov_type_name}</td>
                                    <td>${data[i].position_name}</td>
                                    <td>${data[i].class_position_name}</td>
                                    <td>${data[i].dep_name}</td>
                                    <td>${data[i].groupwork_name}</td>
                                    <td style="display: flex">
                                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editData(${data[i].cid},'${data[i].pname}','${data[i].fname}', '${data[i].lname}', '${data[i].gov_type_name}', '${data[i].position_name}', '${data[i].class_position_name}', '${data[i].dep_name}', '${data[i].groupwork_name}', '${data[i].birth_date}', ${data[i].id}, '${data[i].government_emp_type}', '${data[i].position_code}', '${data[i].class_position_shortname}', '${data[i].dep_code}', '${data[i].groupwork}')">แก้ไข</button>
                                        <button id="deletebtn" type="button" class="btn btn-danger" style="margin-left: 2px"onclick="deleteInSearch(${data[i].id})">ลบ</button>
                                    </td>
                                </tr>
                        `;
                    }
                    showdata.innerHTML = tr;
                }
            })
            .catch((error) =>{
                message("error");
            });
        
    }

    let searchdata = () => {

        var datasearch = document.getElementById("datasearch").value;

        if(datasearch === ' '){
            return false;
        }else{
          
            fetch('data_search_person.php?search=' + datasearch)
            .then((response) => response.json())
            .then((data) => {
                var show = document.getElementById('show'); 
                if (data['empty']) {
                    show.innerHTML = ` <tr><td>no data</td></tr>`
                }else{
                    var tr = '';
                    for (var i in data){
                        tr += `
                            <tr>
                                <th scope="row">${data[i].id}</th>
                                <td>${data[i].cid}</td>
                                <td>${data[i].fname} ${data[i].lname}</td>
                                <td style="display: flex">
                                   <button id="editbtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editData(${data[i].cid},'${data[i].pname}','${data[i].fname}', '${data[i].lname}', '${data[i].gov_type_name}', '${data[i].position_name}', '${data[i].class_position_name}', '${data[i].dep_name}', '${data[i].groupwork_name}', '${data[i].birth_date}', ${data[i].id}, '${data[i].government_emp_type}', '${data[i].position_code}', '${data[i].class_position_shortname}', '${data[i].dep_code}', '${data[i].groupwork}')">เพิ่มเติม</button>
                                       <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="deleteInSearch(${data[i].id})">ลบ</button>
                                </td>
                            </tr>
                        `;
                    }
                    show.innerHTML = tr;
                }
            })
            .catch((error) =>{
                message("error");
            });
        }
    }


    let deleteInSearch = (id) => {
  
        if (confirm("Are you sure want to Delete this record ?")) {
            fetch("delete_person.php?id="+id, {
                method : 'delete'
            })
            .then((response) => response.json())
            .then((result) => {
                    if (result.delete == 'success'){
                        searchdata();
                       showdata_table();
                       message("ทำการลบสำเร็จ");
                    }else{
                        searchdata();
                        showdata_table();
                        message("error");
                    }
              })
            .catch((error) => {
                 message("error");
            });
        }
    }



    let message = (msg) => {
        document.getElementById('showmessage').innerHTML = (`
               <div class="modal fade" id="myModalmessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                  <div class="modal-dialog">
                    <div class="modal-content"> 
                      <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body" style="color: #198754; font-size: 18px;">
                        <p>${msg}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            `);
        var myModal = new bootstrap.Modal(document.getElementById('myModalmessage'), {
        keyboard: false
            });
        myModal.show()
    }
    let messageerror = (msg) => {
        document.getElementById('showmessage').innerHTML = (`
               <div class="modal fade" id="myModalmessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                  <div class="modal-dialog">
                    <div class="modal-content"> 
                      <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body" style="color: #dc3545; font-size: 18px;">
                        <p>${msg}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

            `);
        var myModal = new bootstrap.Modal(document.getElementById('myModalmessage'), {
        keyboard: false
            });
        myModal.show()
    }

showdata_table();
</script>
</body>
</html>