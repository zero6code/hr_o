<?php 
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
<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">ข้อมูลฝึกอบรม/พัฒนา</a>
<!--     <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form> -->
  </div>
</nav>
<div class="card shadow accordion accordion-flush mt-5" id="accordionFlushExample" style="width:80%; margin: auto;">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        #1 ข้อมูลฝึกอบรม/พัฒนา (ไปราชการ)
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <table class="table table-hover">
            <thead>
               <tr>
                <th>เรื่อง</th>
                <th>ประเภท</th>
                <th>สมรรถนะ</th>
                <th>ทักษะ</th>
                <th>.</th>
              </tr>
            </thead>
            <tbody id="datashowi"></tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       #2 ข้อมูลฝึกอบรม/พัฒนา (กรณีจัดภายในโรงพยาบาล)
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>

</div>

<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
        g
        g
        <br>
        g
        g
        g
        <br>
        g
        g
        <br>
        g
        g
        <br>
        g
        gg

      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  let showdataf = () => {
    var trlocation = document.getElementById("datashowi");
    fetch('data.php')
    .then((response) => response.json())
    .then((data) => {
        if(data['empty']){
           trlocation.innerHTML = ` <tr><td>no data</td></tr>`;
         }else{
          var tr = '';
          for(var i in data){
            tr += `
                <tr>
                  <td>${data[i].topic}</td>
                  <td>${data[i].type_name}</td>
                  <td>${data[i].comp_all}</td>
                  <td>${data[i].skill_all}</td>
                  <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
                  </td>
              </tr>
            `;
          }
          trlocation.innerHTML = tr;
         }
    })
    .catch((error) =>{
       trlocation.innerHTML = ` <tr><td>error</td></tr>`;
    });
  }


  showdataf();
</script>

<script type="text/javascript" src="../css/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>