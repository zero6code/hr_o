const SHOW_Department = (text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col">หน่วยงาน</th>
            <th scope="col">หัวหน้าหน่วยงาน</th>
            <th scope="col">สังกัดกลุ่มภารกิจ</th>
            <th scope="col">เบอร์โทร</th>
            <th scope="col">.</th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_adddepartment('เพิ่มหน่วยงาน')">add</button>
    `);

    DATA_ROW_department();
}

let DATA_ROW_department = async() => {
    await fetch('./PHP_OF_OPTIONS/department/show_head_department.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{



            let head_fullname = (person) => {
                for(let l in person){
                    return person[l].person_pname+person[l].person_fname+" "+person[l].person_lname 
                }
            }
            let getgroupwork = (groupwork) => {
                for(let l in groupwork){
                    return groupwork[l].groupwork_name;
                }
            }
            let getgroupworkcode = (groupwork) => {
                for(let l in groupwork){
                    return groupwork[l].groupcode;
                }
            }

            let n = 0;
            let tr='';
            for(let i in data){

                var person = JSON.parse(data[i].person_data);
                var groupwork = JSON.parse(data[i].groupwork_name);

                let fullname = (head_fullname(person) === undefined)? "ไม่มี":head_fullname(person);
                let groupwork_name = (getgroupwork(groupwork) === undefined)? "ไม่มี":getgroupwork(groupwork);
                let groupcode = (getgroupworkcode(groupwork) === undefined)? "ไม่มี":getgroupworkcode(groupwork);
                let tel = (data[i].tel_no === "")? "ไม่มี":data[i].tel_no;
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td>${data[i].dep_name}</td>
                        <td>${fullname}</td>
                        <td>${groupwork_name}</td>
                        <td>${tel}</td>
                        <td>
                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" 
                        onclick="SHOW_EDIT_Department('${data[i].id}', '${data[i].dep_name}', '${fullname}','${groupwork_name}','${tel}', '${groupcode}', '${data[i].head_dep}')">update</button>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="delete_department(${data[i].id})">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}


const SHOW_EDIT_Department = (id, depname, headDepname, groupname, tel, groupcode, head_dep) => {
    document.getElementById("option_edit_head").innerText = `แก้ไข${depname}`;
    document.getElementById("option_edit_close").onclick = SHOW_Department('หน่วยงาน');

    document.getElementById("option_edit_body").innerHTML = (`
        <div class="mb-3">
            <input id="dep_id" class="form-control" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="dep_name" class="form-label fs-6">หน่วยงาน</label>
            <input id="dep_name" class="form-control" value="${depname}">
        </div>
        <div class="mb-3">
            <label for="head_depname" class="form-label fs-6">หัวหน้าหน่วยงาน</label>
            <input class="form-control" list="datalistOptions" id="head_depname"  onkeyup="search_head_department()" value="${head_dep}${headDepname}">
            <datalist id="datalistOptions"></datalist>
        </div>
        <div class="mb-3">
            <label for="depgroupwork" class="form-label fs-6">กลุ่มภารกิจ</label>
            <select class="form-select" aria-label="Default select example" name="depgroupwork" id="depgroupwork"></select>
        </div>
        <div class="mb-3">
            <label for="dep_tel" class="form-label fs-6">เบอร์โทร</label>
            <input id="dep_tel" class="form-control" value="${tel}">
        </div>
    `);

    document.getElementById("btn_option_edit").innerHTML = (`
        <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
        <button type="button" class="btn btn-primary" onclick="EDIT_UPDATE_department()">update/edit</button>
    `);



    selectGroupwork(groupcode, groupname);

}

const EDIT_UPDATE_department = async() => {
    let payload = {
        'dep_id'      : (document.getElementById("dep_id").value !==  "null")? document.getElementById('dep_id').value : null,
        'dep_name'      : (document.getElementById("dep_name").value !==  "null")? document.getElementById('dep_name').value : null,
        'head_depname'  : (document.getElementById("head_depname").value !==  "null")? document.getElementById('head_depname').value : null,
        'depgroupwork'  : (document.getElementById("depgroupwork").value !==  "null")? document.getElementById('depgroupwork').value : null,
        'dep_tel'       : (document.getElementById("dep_tel").value !==  "null")? document.getElementById('dep_tel').value : null,
    };
    console.log(payload);
    await fetch("./PHP_OF_OPTIONS/department/update_edit_department.php",{
        method: "POST",
        headers:{Accept: 'application.json','Content-Type':'application/json' },
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.update == 'success'){
            DATA_ROW_department();
            alert("แก้ไขสำเร็จ");
        }else{
            alert(result.update);
        }
    }).catch((err)=>{});
}

const MODAL_adddepartment = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newdep_name" class="form-label fs-6">*ชื่อหน่วยงาน</label>
        <input id="newdep_name" class="form-control" value="">
    </div>
    <div class="mb-3">
        <label for="newhead_depname" class="form-label fs-6">*หัวหน้าหน่วยงาน(ใส่เลขประจำตัวประชาชน หรือใส่ชื่อเพื่อค้นหาเลขประจำตัวประชาชน)</label>
        <input class="form-control" list="datalistOptions" id="newhead_depname" placeholder=""  onkeyup="search_head_department2()" value="">
        <datalist id="datalistOptions"></datalist>
    </div>
    <div class="mb-3">
        <label for="newdepgroupwork" class="form-label fs-6">*กลุ่มภารกิจ</label>
        <select class="form-select" aria-label="Default select example" name="depgroupwork" id="depgroupwork"></select>
    </div>
    <div class="mb-3">
        <label for="newdep_tel" class="form-label fs-6">เบอร์โทร(5ตัวอักษร)</label>
        <input id="newdep_tel" class="form-control" value="" maxlength="5">
    </div>
`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="add_department()">เพิ่ม</button>
`);

selectGroupwork(null, null);
}

const add_department = async() => {
    let payload = {
        'dep_name'      : (document.getElementById("newdep_name").value !==  "null")? document.getElementById('newdep_name').value : null,
        'head_depname'  : (document.getElementById("newhead_depname").value !==  "null")? document.getElementById('newhead_depname').value : null,
        'depgroupwork'  : (document.getElementById("depgroupwork").value !==  "null")? document.getElementById('depgroupwork').value : null,
        'dep_tel'       : (document.getElementById("newdep_tel").value !==  "null")? document.getElementById('newdep_tel').value : null,
    };

    console.log(payload.dep_name);
    if((payload.dep_name != "")&&(payload.head_depname != "")&&(payload.depgroupwork != "")){
        await fetch("./PHP_OF_OPTIONS/department/add_department.php",{
            method: 'POST',
            headers: {Accept: 'application.json','Content-Type':'application/json'},
            body: JSON.stringify(payload)
        })
        .then((response)=>response.json())
        .then((result)=>{
            if (result.insert == 'success'){
                DATA_ROW_department();
                alert("บันทึกเรียบร้อย");
                document.getElementById('newdep_name').value = "";
                document.getElementById('newhead_depname').value = "";
                document.getElementById('depgroupwork').value = "";
                document.getElementById('newdep_tel').value = "";
            }else{
                alert("ERROR");
            }
        }).catch((err)=>{});
    }else{
        alert("กรุณากรอกข้อมูลที่มีเครื่องหมาย * ให้ครบถ้วน");
    }

}

const delete_department = async(id) => {
  if ( confirm("Are you sure want to Delete this record ?")) {
     await fetch("./PHP_OF_OPTIONS/department/delete_department.php?id="+id, {
          method : 'delete'
      })
      .then((response) => response.json())
      .then((result) => {
              if (result.delete == 'success'){
                DATA_ROW_department();
              }else{
                DATA_ROW_department();
                alert("ERROR");
              }
        })
      .catch((error) => {
        console.log(error);
      });
  }
}
const search_head_department2 = async() => {
    var datasearch = document.getElementById("newhead_depname").value;
    let show = document.getElementById('datalistOptions');
    let option = "";
    if(datasearch == ""){
      
    }else{
        await fetch("./PHP_OF_OPTIONS/department/search_head_department.php?search=" + datasearch)
        .then((response)=>response.json())
        .then((data)=>{
            if(data['empty']){}else{
                data.forEach(data2 => {
                    option = (`
                        <option value="${data2.cid}">${data2.pname}${data2.fname} ${data2.lname}</option>
                    `);
                });
             show.innerHTML = option;
            }
        }).catch((err)=>{});
    }
}
const search_head_department = async() => {
    var datasearch = document.getElementById("head_depname").value;
    let show = document.getElementById('datalistOptions');
    let option = "";
    if(datasearch == ""){
      
    }else{
        await fetch("./PHP_OF_OPTIONS/department/search_head_department.php?search=" + datasearch)
        .then((response)=>response.json())
        .then((data)=>{
            if(data['empty']){}else{
                data.forEach(data2 => {
                    option = (`
                        <option value="${data2.cid}${data2.pname}${data2.fname} ${data2.lname}">${data2.pname}${data2.fname} ${data2.lname}</option>
                    `);
                });
             show.innerHTML = option;
            }
        }).catch((err)=>{});
    }
}
const selectGroupwork = async(groupcode, groupname) => {
    let select = document.getElementById("depgroupwork");
    let option = '';
    await fetch("./PHP_OF_OPTIONS/department/show_groupworkForDepartment.php")
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(data2 =>{
            option += `<option value="${data2.groupwork_code}">${data2.groupwork_name}</option>`;
        });
        select.innerHTML = `<option selected value="${groupcode}">${groupname}</option>`+option;
    }).catch((err)=>{});
}


// ******************************************************************************************************************************************************************************************************

const SHOW_Groupwork = async(text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col">กลุ่มภารกิจ</th>
            <th scope="col">หัวหน้ากลุ่มภารกิจ</th>
            <th scope="col"></th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_addgroupwork('เพิ่มกลุ่มภารกิจ')">add</button>
    `);

    DATA_ROW_groupwork();

}
let DATA_ROW_groupwork = async() => {
    await fetch('./PHP_OF_OPTIONS/groupwork/show_groupwork.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{



            let head_fullname = (person) => {
                for(let l in person){
                    return person[l].person_pname+person[l].person_fname+" "+person[l].person_lname 
                }
            }
  

            let n = 0;
            let tr='';
            for(let i in data){

                var person = JSON.parse(data[i].head_groupwork_data);
                // var groupwork = JSON.parse(data[i].groupwork_name);

                let fullname = (head_fullname(person) === undefined)? "ไม่มีชื่อในระบบ":head_fullname(person);
                // let groupwork_name = (getgroupwork(groupwork) === undefined)? "ไม่มี":getgroupwork(groupwork);
                // let groupcode = (getgroupworkcode(groupwork) === undefined)? "ไม่มี":getgroupworkcode(groupwork);
                // let tel = (data[i].tel_no === "")? "ไม่มี":data[i].tel_no;
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td>${data[i].groupwork_name}</td>
                        <td>${fullname}</td>
                        <td>
                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" 
                        onclick="SHOW_EDIT_Groupwork('${data[i].id}', '${data[i].groupwork_name}', '${data[i].head_groupwork}', '${fullname}')">update</button>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="Delete_groupwork('${data[i].id}')">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}

const Delete_groupwork = async(id) => {
    if ( confirm("Are you sure want to Delete this record ?")) {
        await fetch("./PHP_OF_OPTIONS/groupwork/delete_groupwork.php?id="+id, {
             method : 'delete'
         })
         .then((response) => response.json())
         .then((result) => {
                 if (result.delete == 'success'){
                    DATA_ROW_groupwork();
                 }else{
                    DATA_ROW_groupwork();
                   alert("ERROR");
                 }
           })
         .catch((error) => {
           console.log(error);
         });
     }
}

const SHOW_EDIT_Groupwork = (id, groupname, headGroupCid, headGroupName) => {
    document.getElementById("option_edit_head").innerText = `แก้ไข${groupname}`;
    document.getElementById("option_edit_close").onclick = SHOW_Groupwork('กลุ่มภารกิจ');

    document.getElementById("option_edit_body").innerHTML = (`
        <div class="mb-3">
            <input id="groupwork_id" class="form-control" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="groupwork_name" class="form-label fs-6">หน่วยงาน</label>
            <input id="groupwork_name" class="form-control" value="${groupname}">
        </div>
        <div class="mb-3">
            <label for="groupwork_head" class="form-label fs-6">หัวหน้าหน่วยงาน</label>
            <input class="form-control" list="datalistOptions" id="groupwork_head"  onkeyup="search_head_groupwork()" value="${headGroupCid}${headGroupName}">
            <datalist id="datalistOptions"></datalist>
        </div>
    `);

    document.getElementById("btn_option_edit").innerHTML = (`
        <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
        <button type="button" class="btn btn-primary" onclick="UPDATE_groupwork()">update</button>
    `);

}
const search_head_groupwork = async() => {
    var datasearch = document.getElementById("groupwork_head").value;
    let show = document.getElementById('datalistOptions');
    let option = "";
    if(datasearch == ""){
      
    }else{
        await fetch("./PHP_OF_OPTIONS/department/search_head_department.php?search=" + datasearch)
        .then((response)=>response.json())
        .then((data)=>{
            if(data['empty']){}else{
                data.forEach(data2 => {
                    option = (`
                        <option value="${data2.cid}${data2.pname}${data2.fname} ${data2.lname}">${data2.pname}${data2.fname} ${data2.lname}</option>
                    `);
                });
             show.innerHTML = option;
            }
        }).catch((err)=>{});
    }
}
const UPDATE_groupwork = async() => {
    let payload = {
        'groupwork_id'      : (document.getElementById("groupwork_id").value !==  "null")? document.getElementById('groupwork_id').value : null,
        'groupwork_name'      : (document.getElementById("groupwork_name").value !==  "null")? document.getElementById('groupwork_name').value : null,
        'groupwork_head'  : (document.getElementById("groupwork_head").value !==  "null")? document.getElementById('groupwork_head').value : null
    };
    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/groupwork/update_groupwork.php",{
        method: "POST",
        headers:{Accept: 'application.json','Content-Type':'application/json' },
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.update == 'success'){
            DATA_ROW_groupwork();
            alert("แก้ไขสำเร็จ");
        }else{
            alert(result.update);
        }
    }).catch((err)=>{});
}

const MODAL_addgroupwork = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newgroupwork_name" class="form-label fs-6">ชื่อหน่วยงาน</label>
        <input id="newgroupwork_name" class="form-control" value="">
    </div>
    <div class="mb-3">
        <label for="newhead_groupwork" class="form-label fs-6">หัวหน้ากลุ่มภารกิจ(ใส่เลขประจำตัวประชาชน หรือใส่ชื่อเพื่อค้นหาเลขประจำตัวประชาชน)</label>
        <input class="form-control" list="datalistOptions" id="newhead_groupwork" placeholder=""  onkeyup="search_head_add_groupwork()" value="">
        <datalist id="datalistOptions"></datalist>
    </div>

`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="ADD_groupwork()">เพิ่ม</button>
`);

}
const search_head_add_groupwork = async() => {
    var datasearch = document.getElementById("newhead_groupwork").value;
    let show = document.getElementById('datalistOptions');
    let option = "";
    if(datasearch == ""){
      
    }else{
        await fetch("./PHP_OF_OPTIONS/department/search_head_department.php?search=" + datasearch)
        .then((response)=>response.json())
        .then((data)=>{
            if(data['empty']){}else{
                data.forEach(data2 => {
                    option = (`
                        <option value="${data2.cid}${data2.pname}${data2.fname} ${data2.lname}">${data2.pname}${data2.fname} ${data2.lname}</option>
                    `);
                });
             show.innerHTML = option;
            }
        }).catch((err)=>{});
    }
}
const ADD_groupwork = async() => {
    let payload = {
        'newgroupwork_name'      : (document.getElementById("newgroupwork_name").value !==  "null")? document.getElementById('newgroupwork_name').value : null,
        'newhead_groupwork'  : (document.getElementById("newhead_groupwork").value !==  "null")? document.getElementById('newhead_groupwork').value : null
    };

    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/groupwork/add_groupwork.php",{
        method: 'POST',
        headers: {Accept: 'application.json','Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.insert == 'success'){
            DATA_ROW_groupwork();
            alert("บันทึกเรียบร้อย");
            document.getElementById('newgroupwork_name').value = "";
            document.getElementById('newhead_groupwork').value = "";
        }else{
            alert("ERROR");
        }
    }).catch((err)=>{});
}


// ******************************************************************************************************************************************************************************************************

const SHOW_Titlename = async(text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col">คำนำหน้าชื่อ(ภาษาไทย)</th>
            <th scope="col">คำนำหน้าชื่อ(ภาษาอังกฤษ)</th>
            <th scope="col"></th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_addtitlename('เพิ่มคำนำหน้าชื่อ')">add</button>
    `);

    DATA_ROW_titlename();

}

let DATA_ROW_titlename = async() => {
    await fetch('./PHP_OF_OPTIONS/titlename/show_titlename.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{

            let n = 0;
            let tr='';
            for(let i in data){
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td>${data[i].pname_th}</td>
                        <td>${data[i].pname_en}</td>
                        <td>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="Delete_titlename(${data[i].pcode})">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}
const Delete_titlename = async(id) => {
    if ( confirm("Are you sure want to Delete this record ?")) {
        await fetch("./PHP_OF_OPTIONS/titlename/delete_titlename.php?id="+id, {
             method : 'delete'
         })
         .then((response) => response.json())
         .then((result) => {
                 if (result.delete == 'success'){
                    DATA_ROW_titlename();
                 }else{
                    DATA_ROW_titlename();
                   alert("ERROR");
                 }
           })
         .catch((error) => {
           console.log(error);
         });
     }
}

const MODAL_addtitlename = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newtitlename_th" class="form-label fs-6">คำนำหน้าชื่อ(ภาษาไทย)</label>
        <input id="newtitlename_th" class="form-control" value="">
    </div>
    <div class="mb-3">
        <label for="newtitlename_en" class="form-label fs-6">คำนำหน้าชื่อ(ภาษาอังกฤษ)*ไม่จำเป็น</label>
        <input id="newtitlename_en" class="form-control" maxlength="5" value="">
    </div>

`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="ADD_titlename()">เพิ่ม</button>
`);

}
const ADD_titlename = async() => {
    let payload = {
        'newtitlename_th'      : (document.getElementById("newtitlename_th").value !==  "null")? document.getElementById('newtitlename_th').value : null,
        'newtitlename_en'  : (document.getElementById("newtitlename_en").value !==  "null")? document.getElementById('newtitlename_en').value : null
    };

    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/titlename/add_titlename.php",{
        method: 'POST',
        headers: {Accept: 'application.json','Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.insert == 'success'){
            DATA_ROW_titlename();
            alert("บันทึกเรียบร้อย");
            document.getElementById('newtitlename_th').value = "";
            document.getElementById('newtitlename_en').value = "";
        }else{
            alert("ERROR");
        }
    }).catch((err)=>{});
}
// ************************************************************************ประเภทบุคคลากร******************************************************************************************************************************

const SHOW_government_emp_type = async(text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col" style="width:80%;">ชื่อประเภทบุคลากร</th>
            <th scope="col"></th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_addgovernment_emp_type('เพิ่มประเภทบุคคลากร')">add</button>
    `);

    DATA_ROW_government_emp_type();

}


let DATA_ROW_government_emp_type = async() => {
    await fetch('./PHP_OF_OPTIONS/government_emp_type/show_government_emp_type.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{

            let n = 0;
            let tr='';
            for(let i in data){
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td scope="col">${data[i].government_emp_type_name}</td>
                        <td>
                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" 
                        onclick="SHOW_EDIT_government_emp_type('${data[i].id}', '${data[i].government_emp_type_name}')">update</button>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="Delete_government_emp_type('${data[i].id}')"  style=" float: right;">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}

const Delete_government_emp_type = async(id) => {
    if ( confirm("Are you sure want to Delete this record ?")) {
        await fetch("./PHP_OF_OPTIONS/government_emp_type/delete_government_emp_type.php?id="+id, {
             method : 'delete'
         })
         .then((response) => response.json())
         .then((result) => {
                 if (result.delete == 'success'){
                    DATA_ROW_government_emp_type();
                 }else{
                    DATA_ROW_government_emp_type();
                   alert("ERROR");
                 }
           })
         .catch((error) => {
           console.log(error);
         });
     }
}

const SHOW_EDIT_government_emp_type = (id, name) => {
    document.getElementById("option_edit_head").innerText = `แก้ไข${name}`;
    document.getElementById("option_edit_close").onclick = SHOW_government_emp_type('ประเภทบุคลากร');

    document.getElementById("option_edit_body").innerHTML = (`
        <div class="mb-3">
            <input id="government_emp_type_id" class="form-control" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="government_emp_type_name" class="form-label fs-6">ชื่อประเภท</label>
            <input id="government_emp_type_name" class="form-control" value="${name}">
        </div>
    `);

    document.getElementById("btn_option_edit").innerHTML = (`
        <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
        <button type="button" class="btn btn-primary" onclick="UPDATE_government_emp_type()">update</button>
    `);

}
const UPDATE_government_emp_type = async() => {
    let payload = {
        'government_emp_type_id'      : (document.getElementById("government_emp_type_id").value !==  "null")? document.getElementById('government_emp_type_id').value : null,
        'government_emp_type_name'  : (document.getElementById("government_emp_type_name").value !==  "null")? document.getElementById('government_emp_type_name').value : null
    };
    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/government_emp_type/update_government_emp_type.php",{
        method: "POST",
        headers:{Accept: 'application.json','Content-Type':'application/json' },
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.update == 'success'){
            DATA_ROW_government_emp_type();
            alert("แก้ไขสำเร็จ");
        }else{
            alert(result.update);
        }
    }).catch((err)=>{});
}
const MODAL_addgovernment_emp_type = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newgovernment_emp_type" class="form-label fs-6">ชื่อประเภทบุคลากร</label>
        <input id="newgovernment_emp_type" class="form-control" value="">
    </div>

`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="ADD_government_emp_type()">เพิ่ม</button>
`);

}

const ADD_government_emp_type = async() => {
    let payload = {
        'newgovernment_emp_type'      : (document.getElementById("newgovernment_emp_type").value !==  "null")? document.getElementById('newgovernment_emp_type').value : null
    };

    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/government_emp_type/add_government_emp_type.php",{
        method: 'POST',
        headers: {Accept: 'application.json','Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.insert == 'success'){
            DATA_ROW_government_emp_type();
            alert("บันทึกเรียบร้อย");
            document.getElementById('newgovernment_emp_type').value = "";
        }else{
            alert("ERROR");
        }
    }).catch((err)=>{});
}
// ************************************************************************ตำแหน่ง******************************************************************************************************************************

const SHOW_position = async(text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col" >ชื่อตำแหน่ง</th>
            <th scope="col" >ประเภทตำแหน่ง</th>
            <th scope="col"></th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_addposition('เพิ่มตำแหน่ง')">add</button>
    `);

    DATA_ROW_position();

}


let DATA_ROW_position = async() => {
    await fetch('./PHP_OF_OPTIONS/position/show_position.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{

            let n = 0;
            let tr='';
            for(let i in data){
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td scope="col">${data[i].position_name}</td>
                        <td scope="col">${data[i].position_type}</td>
                        <td>
                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" 
                        onclick="SHOW_UPDATE_pposition('${data[i].id}', '${data[i].position_name}', '${data[i].position_by_type1}', '${data[i].position_type}')">update</button>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="Delete_position('${data[i].id}')"  style=" float: right;">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}

const Delete_position = async(id) => {
    if ( confirm("Are you sure want to Delete this record ?")) {
        await fetch("./PHP_OF_OPTIONS/position/delete_position.php?id="+id, {
             method : 'delete'
         })
         .then((response) => response.json())
         .then((result) => {
                 if (result.delete == 'success'){
                    DATA_ROW_position();
                 }else{
                    DATA_ROW_position();
                   alert("ERROR");
                 }
           })
         .catch((error) => {
           console.log(error);
         });
     }
}

const SHOW_UPDATE_pposition = (id, position_name, position_type_code, posiution_type_name) => {
    document.getElementById("option_edit_head").innerText = `แก้ไข${position_name}`;
    document.getElementById("option_edit_close").onclick = SHOW_position('ตำแหน่ง');

    document.getElementById("option_edit_body").innerHTML = (`
        <div class="mb-3">
            <input id="editposition_id" class="form-control" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="editposition_name" class="form-label fs-6">ชื่อตำแหน่ง</label>
            <input id="editposition_name" class="form-control" value="${position_name}">
        </div>
        <div class="mb-3">
            <label for="position_type" class="form-label fs-6">ประเภทตำแหน่ง</label>
            <select class="form-select" aria-label="Default select example" name="position_type" id="position_type" ></select>
        </div>
    `);

    document.getElementById("btn_option_edit").innerHTML = (`
        <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
        <button type="button" class="btn btn-primary" onclick="UPDATE_position()">update</button>
    `);

    SHOW_position_type(position_type_code, posiution_type_name);
}
const SHOW_position_type = async(id, name) => {
    let position_type_name = '';
    await fetch("./PHP_OF_OPTIONS/position/show_position_type.php")
    .then((response) => response.json())
    .then((result)=>{
        for(let i in result){
            position_type_name += `<option value="${result[i].id}">${result[i].position_by_type1_name}</option>`;
        }
        document.getElementById("position_type").innerHTML = `<option selected value="${id}">${name}</option>`+position_type_name;
    }).catch((err)=>{});
    
}
const UPDATE_position = async() => {
    let payload = {
        'editposition_id'      : (document.getElementById("editposition_id").value !==  "null")? document.getElementById('editposition_id').value : null,
        'editposition_name'      : (document.getElementById("editposition_name").value !==  "null")? document.getElementById('editposition_name').value : null,
        'position_type'  : (document.getElementById("position_type").value !==  "null")? document.getElementById('position_type').value : null
    };
    // console.log(payload);
    await fetch("./PHP_OF_OPTIONS/position/update_position.php",{
        method: "POST",
        headers:{Accept: 'application.json','Content-Type':'application/json' },
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.update == 'success'){
            DATA_ROW_position();
            alert("แก้ไขสำเร็จ");
        }else{
            alert(result.update);
        }
    }).catch((err)=>{});
}
const MODAL_addposition = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newposition" class="form-label fs-6">ชื่อตำแหน่ง</label>
        <input id="newposition" class="form-control" value="">
    </div>
    <div class="mb-3">
        <label for="newposition_type" class="form-label fs-6">ประเภทตำแหน่ง</label>
        <select class="form-select" aria-label="Default select example" name="newposition_type" id="newposition_type" ></select>
    </div>

`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="ADD_position()">เพิ่ม</button>
`);


SHOW_selectElement_positiontype();
}
const SHOW_selectElement_positiontype = async() => {
    let position_type_name = '';
    await fetch("./PHP_OF_OPTIONS/position/show_position_type.php")
    .then((response) => response.json())
    .then((result)=>{
        for(let i in result){
            position_type_name += `<option value="${result[i].id}">${result[i].position_by_type1_name}</option>`;
        }
        document.getElementById("newposition_type").innerHTML = `<option selected value="">เลือกประเภทตำแหน่ง</option>`+position_type_name;
    }).catch((err)=>{});
}

const ADD_position = async() => {
    let payload = {
        'newposition'      : (document.getElementById("newposition").value !==  "null")? document.getElementById('newposition').value : null,
        'newposition_type'      : (document.getElementById("newposition_type").value !==  "null")? document.getElementById('newposition_type').value : null
    };

    // console.log(payload);
    if (payload.newposition_type === ""){
        alert("กรุณาเลือกประเภทตำแหน่ง");
    }else{
        await fetch("./PHP_OF_OPTIONS/position/add_position.php",{
            method: 'POST',
            headers: {Accept: 'application.json','Content-Type':'application/json'},
            body: JSON.stringify(payload)
        })
        .then((response)=>response.json())
        .then((result)=>{
            if (result.insert == 'success'){
                DATA_ROW_position();
                alert("บันทึกเรียบร้อย");
                document.getElementById('newposition').value = "";
                document.getElementById('newposition_type').value = "";
            }else{
                alert("ERROR");
            }
        }).catch((err)=>{});
    }
}

// ************************************************************************ระดับตำแหน่ง******************************************************************************************************************************

const SHOW_classposition = async(text_head) => {

    document.getElementById("text-head").innerText = text_head;
    document.getElementById("head-option-home").innerHTML = (`
        <tr>
            <th scope="col">#</th>
            <th scope="col" style="width:80%;">ชื่อระดับตำแหน่ง</th>
            <th scope="col"></th>
        </tr>
    `);

    document.getElementById("tabAddbtn").innerHTML = (`
        <button  id="addbtn" type="button" class="btn btn-primary nav-link " data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" onclick="MODAL_addclassposition('เพิ่มระดับตำแหน่ง')">add</button>
    `);

    DATA_ROW_classposition();

}
let DATA_ROW_classposition = async() => {
    await fetch('./PHP_OF_OPTIONS/classposition/show_classposition.php')
    .then((Response)=>Response.json())
    .then((data)=>{
        if(data['empty']){

        }else{

            let n = 0;
            let tr='';
            for(let i in data){
                tr += (`
                    <tr>
                        <th scope="row">${++n}</th>
                        <td scope="col">${data[i].class_position_type_name2}</td>
                        <td>
                        <button id="editbtn" type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#option_edit" 
                        onclick="SHOW_UPDATE_classpposition('${data[i].id}', '${data[i].class_position_type_name2}')">update</button>
                        <button id="deletebtns" type="button" class="btn btn-danger" style="margin-left: 2px" onclick="Delete_classposition('${data[i].id}')"  style=" float: right;">delete</button>
                        </td>
                    </tr>
                `);
            
            }
            document.getElementById("data-option-home").innerHTML = tr;
        }
    }).catch((err)=>{

    });
}

const SHOW_UPDATE_classpposition = (id, classposition_name) => {
    document.getElementById("option_edit_head").innerText = `แก้ไข${classposition_name}`;
    document.getElementById("option_edit_close").onclick = SHOW_classposition('ระดับตำแหน่ง');

    document.getElementById("option_edit_body").innerHTML = (`
        <div class="mb-3">
            <input id="editclassposition_id" class="form-control" value="${id}" hidden>
        </div>
        <div class="mb-3">
            <label for="editclassposition_name" class="form-label fs-6">ชื่อระดับตำแหน่ง</label>
            <input id="editclassposition_name" class="form-control" value="${classposition_name}">
        </div>
    `);

    document.getElementById("btn_option_edit").innerHTML = (`
        <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
        <button type="button" class="btn btn-primary" onclick="UPDATE_classposition()">update</button>
    `);
}
const UPDATE_classposition = async() => {
    let payload = {
        'editclassposition_id'      : (document.getElementById("editclassposition_id").value !==  "null")? document.getElementById('editclassposition_id').value : null,
        'editclassposition_name'      : (document.getElementById("editclassposition_name").value !==  "null")? document.getElementById('editclassposition_name').value : null
    };
    //  console.log(payload);
    await fetch("./PHP_OF_OPTIONS/classposition/update_classposition.php",{
        method: "POST",
        headers:{Accept: 'application.json','Content-Type':'application/json' },
        body: JSON.stringify(payload)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if (result.update == 'success'){
            DATA_ROW_classposition();
            alert("แก้ไขสำเร็จ");
        }else{
            alert(result.update);
        }
    }).catch((err)=>{});
}

const Delete_classposition = async(id) => {
    if ( confirm("Are you sure want to Delete this record ?")) {
        await fetch("./PHP_OF_OPTIONS/classposition/delete_classposition.php?id="+id, {
             method : 'delete'
         })
         .then((response) => response.json())
         .then((result) => {
                 if (result.delete == 'success'){
                    DATA_ROW_classposition();
                 }else{
                    DATA_ROW_classposition();
                   alert("ERROR");
                 }
           })
         .catch((error) => {
           console.log(error);
         });
     }
}

const MODAL_addclassposition = (text) =>{
    document.getElementById("option_edit_head").innerText = text;
    document.getElementById("option_edit_body").innerHTML = (`
    <div class="mb-3">
        <label for="newclassposition_name" class="form-label fs-6">ชื่อระดับตำแหน่ง</label>
        <input id="newclassposition_name" class="form-control" value="">
    </div>
`);

document.getElementById("btn_option_edit").innerHTML = (`
    <button type="button" class="btn btn-secondary" id="option_edit_close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  data-bs-toggle="modal" data-bs-target="#option_data">Close</button>
    <button type="button" class="btn btn-success" onclick="ADD_classposition()">เพิ่ม</button>
`);


}

const ADD_classposition = async() => {
    let payload = {
        'newclassposition_name'      : (document.getElementById("newclassposition_name").value !==  "null")? document.getElementById('newclassposition_name').value : null
    };

    // console.log(payload);
    if (payload.newposition_type === ""){
        alert("กรุณาเลือกประเภทตำแหน่ง");
    }else{
        await fetch("./PHP_OF_OPTIONS/classposition/add_classposition.php",{
            method: 'POST',
            headers: {Accept: 'application.json','Content-Type':'application/json'},
            body: JSON.stringify(payload)
        })
        .then((response)=>response.json())
        .then((result)=>{
            if (result.insert == 'success'){
                DATA_ROW_classposition();
                alert("บันทึกเรียบร้อย");
                document.getElementById('newclassposition_name').value = "";
            }else{
                alert("ERROR");
            }
        }).catch((err)=>{});
    }
}
