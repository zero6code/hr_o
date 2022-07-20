(function($){  
    var chayanon_on_time = new Date().getTime();//เวลาที่อยู่ในระบบ
    var timeout_login = function(){//ไม่ขยับเมาส์ใน 20 นาทีให้ logout
        if(new Date().getTime() - chayanon_on_time >= 1200000){//20นาที*60*1000
            logout();
        }else{ 
            setTimeout(timeout_login, 60000);
        }
    };
    var timeout_refresh = function(){//ไม่ขยับเมาส์ใน 5 นาทีให้ logout/refresh หน้าpageใหม่
        var txtmodal = function(){
            var txt = '<div class="modal fade"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
              '<div class="modal-dialog modal-sm" role="document">'+
                  '<div class="modal-content">'+
                      '<div class="modal-header"><h3>คุณไม่ขยับเมาส์เกิน 5 นาที</h3></div>'+
                      '<div class="modal-body"><h3>ต้องการจะ logout ออกจากระบบหรือไม่ ?</h3></div>'+
                      '<div class="modal-footer">'+
                          '<button type="button"  class="btn btn-lg bg-danger" style="color:black;" data-dismiss="modal">ใช่</button>'+
                          '<button type="button"  class="btn btn-lg bg-success" style="color:black;" data-dismiss="modal">ไม่ใช่</button>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
            '</div>';
            return txt;  
        };
        var modal = $(txtmodal());
        modal.on('shown.bs.modal', function(e){
            window.setTimeout(function () {//ภายใน 2 นาที ถ้าไม่ทำอะไรจะ logout เอง
                logout();
                modal.modal("hide");
            },120000);
            var btnYes = $(this).find('.modal-footer >button').first();
            var btnNo = $(this).find('.modal-footer >button').last();
            btnYes.off('click').on('click',function(){
                logout();
            });
            btnNo.click(function(){
                window.location.reload(true);
            });
            
            e.stopPropagation();
        });
        modal.on('hidden.bs.modal', function(){
            $(this).data('bs.modal', null);
        });
        if(new Date().getTime() - chayanon_on_time >= 300000){//5นาที*60*1000 = 300000
            modal.modal('show');
        }else{ 
            setTimeout(timeout_refresh, 60000);
        }
    };
    var logout = function(){
        $.ajax({
            url:"logout.php", 
            type:"post",
            cache:false,
            dataType:'json'
        }).done(function(data){
            if(data==="emptySesstion!"){
                window.location.reload(true);
            }
        });
    };
    var html_layout = function(){
        var txt = 
        '<div class="row">'+
            '<div class="col-md-2 nav-side-menu">'+
                '<div class="brand">HR@SKPH</div>'+
                '<i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" id="btnTrigger"></i>'+
                '<div class="menu-list">'+
                    '<ul id="menu-content" class="menu-content collapse out">'+
                        '<li  data-toggle="collapse" data-target="#updDB1" class="collapsed active">'+
                            '<a href="#"><i class="fa fa-pencil-square-o fa-lg"></i> ปรับปรุงฐานข้อมูล <span class="arrow"></span></a>'+
                        '</li>'+
                            '<ul class="sub-menu collapse" id="updDB1">'+
                                '<li class="active"><a href="#tblPerson">ฐานข้อมูลบุคลากร</a></li>'+
                                '<li class="active"><a href="#tblDailyWorkMonth">ฐานข้อมูลการลา</a></li>'+
                                '<li class="active"><a href="#tblvaccine">ฐานข้อมูลวัคซีน</a></li>'+
                                 '<li class="active"><a href="#tblBioFeedBack">ฐานข้อมูล Biofeedback</a></li>'+
                            '</ul>'+
                        '<li>'+
                            '<a href="#Logout"><i class="fa fa-sign-out"></i> ออกจากระบบ</a>'+
                        '</li>'+
                    '</ul>'+//menu-content
                '</div>'+//menu-list
            '</div>'+//nav-side-menu
            '<div class="col-md-10" id="myContent"></div>'+ 
        '</div>';//row
        return txt;
    };
    //function ใช้งานทั่วไป
    var switchModule = function(hrefID){
        $.when($.fn.def_OnlineUser()).done(function(onlineUser){
            //$.each(onlineUser,function(i,v){console.log('i='+i+',v='+v);});
            $("a[href='"+hrefID+"']")
            .closest('div.nav-side-menu')
            .children('div.brand').empty()
            .append('<p>'+onlineUser.pname+'@HR</p>');
            switch(hrefID){
                //MainMenu
                case '#Logout':
                    logout();
                break;
                //SubMenu
                case '#tblPerson':
                    var acceptUser_tblPerson = ['1841400077231','3930100017742'];
                    if($.inArray(onlineUser.id13_online,acceptUser_tblPerson) !== -1){
                        tblPerson_moldule();
                    }else{
                        alert('ท่านไม่มีสิทธิ์เข้าใช้งานในส่วนนี้!!!');
                    }
                break;
                case '#tblDailyWorkMonth':
                    var acceptUser_tblDailyWorkMonth = ['1841400077231','3450400299471','3930100017742'];
                    if($.inArray(onlineUser.id13_online,acceptUser_tblDailyWorkMonth) !== -1){
                        tbl_leave_absence(onlineUser);
                    }else{
                        alert('ท่านไม่มีสิทธิ์เข้าใช้งานในส่วนนี้!!!');
                    }
                break;
                case '#tblvaccine':
                    tbl_vaccine_module();
                break;
                case '#tblBioFeedBack':
                    tbl_biofeedback_module();     
                break;
                default:
                    return;
                break;
            }
        });
    };
    
    //module ต่างๆ
    var tblPerson_moldule = function(){
        var content = $("#myContent").empty();
        var frmSchHtml = function(){
          var x='<div class="panel panel-default">'+
                    '<div class="panel-header" style="padding:0 0 0 0;margin:0 0 0 0;">'+
                        '<nav class="navbar navbar-default" style="padding:0 0 0 0;margin:0 0 0 0;">'+
                            '<div class="container-fluid" style="padding:0 0 0 0;margin:0 0 0 0;">'+
                                '<div class="navbar-header">'+
                                    '<div class="input-group" style="display: inline-block;">'+ 
                                        '<a href="#add" class="btn btn-default chayanon-btn-xlarge chayanon_addPerson_icon">&nbsp;</a>'+
                                        '<small style="display:block;width:100%;text-align:center;">เพิ่มบุคลากร</small>'+
                                    '</div>'+
                                    '<div class="input-group" style="display: inline-block;">'+ 
                                        '<a href="#personRpt1" class="btn btn-default chayanon-btn-xlarge chayanon_report_icon1">&nbsp;</a>'+
                                        '<small style="display:block;width: 100%;text-align: center;">รายงาน1</small>'+
                                    '</div>'+
                                    '<div class="col-xs-4 pull-right">'+
                                        '<div class="input-group">'+ 
                                            '<input type="text" name="schPerson" placeholder="ค้น Person..." class="form-control">'+
                                            '<span class="input-group-btn">'+
                                                '<a href="#sch" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></a>'+                                
                                            '</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</nav>'+
                    '</div>'+//panel header
                    '<div class="panel-body"></div>'+//panel body
                    '<div class="panel-footer" style="background:none;"></div>'+//panel footer
                '</div>';//panel
            return x;
        };
        content.append(frmSchHtml);
        var panel = content.children("div.panel"),
            panelHeader = panel.children('div.panel-header'),
            panelBody = panel.children('div.panel-body'),//panelFooter = panel.children('div.panel-footer'),
            nav = panelHeader.children('nav');
            
        var btnBindClick = $('<a href="#" data-dafter_sch="">b</a>');//เอาไว้ bind กับ CallbackAction
        btnBindClick.off('click').on('click',function(){
            if($(this).data('dafter_sch')){
                CallbackAction($(this).data('dafter_sch'));
            }
        });//เอา CallbackAction มาผูกกับปุ่ม ไว้ใช้หลังกด save
        
        var CallbackAction = function(data){
            var htmlPosition = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=""></option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.position_code+'">'+v.position_name+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var htmlGovernmentEmpType = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=""></option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.government_emp_type_code+'">'+v.government_emp_type_name+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var htmlDepartment = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=" ">ว่าง</option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.dep_code+'">'+v.dep_name+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var htmlClass1 = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=""></option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.class_position_shortname+'">'+v.class_position_type_name2+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var htmlStatusNote = function(data){
                var x = '<select  class="form-control" style="width:100%;">'+
                           '<option value=""></option>';
                           $.each(data,function(i,v){
                               x+='<option value="'+v.id+'">'+v.status_note_name+'</option>';
                           });
                    x+='</select>';
                return x;
            };
            var htmlDepartmentOther = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=" ">ว่าง</option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.id+'">'+v.dmh_child_name+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var htmlGroupWork = function(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control" style="width:100%;"><option value=" ">ว่าง</option>';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.groupwork_code+'">'+v.groupwork_name+'</option>';
                    });
                    x+='</select>';
                return x;
            };
            var txtSubPanel = function(po,emptype,dep,classpo,depother,gw,stnote){
                var txt = 
                '<div class="panel panel-default">'+
                    '<div class="panel-header">'+ 
                        '<div class="row">'+//สถานะรายการ
                            '<div class="col-md-6">'+
                                '<div class="input-group">'+
                                    '<span>สถานะรายการ</span>'+
                                    '<div  class="btn-group" data-toggle="buttons" >'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="Y" name="rdo_StatusUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i><span style="color:green;font-weight: bold;">&nbsp;เปิดใช้งาน(ปฏิบัติงานจริง,มาช่วย,ไปช่วย,ศึกษาต่อ,ตำแหน่งว่าง)</span>'+
                                        '</label>'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="N" name="rdo_StatusUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i><span style="color:red;font-weight: bold;">&nbsp;ปิดใช้งาน&nbsp;(ลาออก,ให้ออก,โอน/ย้าย,เกษียณ,ตาย)</span>'+
                                        '</label>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+     
                    '</div>'+//panel header
                    '<div class="panel-body">'+
                        '<div class="container col-md-11">'+
                            '<div class="accordion-option">'+
                                '<h3 class="title">ปรับปรุงฐานข้อมูลบุคลากร</h3>'+
                                '<a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a>'+
                            '</div>'+
                            '<div class="clearfix"></div>'+
                            '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
                                '<div class="panel accordian-panel-default">'+
                                    '<div class="panel-heading" role="tab" id="headingOne">'+
                                        '<h4 class="panel-title">'+
                                            '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
                                                '#1 ข้อมูลพื้นฐาน'+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">'+
                                        '<div class="panel-body">'+
                                            '<div class="row">'+
                                                '<div class="col-md-6">'+//panel-body > nth-child(1) > column1
                                                    '<div class="form-group">'+//nth(1)                            
                                                        '<label>เลขบัตรประชาชน</label>'+
                                                        '<input type="text" class="form-control"  placeholder="เลขบัตรประชาชน">'+
                                                    '</div>'+ 
                                                    '<div class="form-group">'+//nth(2)                              
                                                        '<label>เลขที่ตำแหน่ง</label>'+
                                                        '<input type="text" class="form-control"  placeholder="เลขที่ตำแหน่ง">'+
                                                    '</div>'+
                                                    '<div class="form-group"><label>ตำแหน่ง</label><div>'+htmlPosition(po)+'</div></div>'+//nth(3)ตำแหน่ง
                                                    '<div class="form-group"><label>ระดับ</label><div>'+htmlClass1(classpo)+'</div></div>'+//nth(4)ระดับของตำแหน่ง
                                                    '<div class="form-group"><label>หน่วยงาน(หลัก)</label><div>'+htmlDepartment(dep)+'</div></div>'+//nth(5)หน่วยงาน(หลัก)
                                                    '<div class="form-group"><label>หน่วยงาน(รอง)</label><div>'+htmlDepartment(dep)+'</div></div>'+//nth(6)หน่วยงาน(รอง)
                                                    '<div class="form-group"><label>กลุ่มภารกิจ</label><div>'+htmlGroupWork(gw)+'</div></div>'+//nth(7)กลุ่มภารกิจ
                                                '</div>'+ 
                                                '<div class="col-md-6">'+//panel-body > nth-child(1) > column2
                                                    '<div class="form-group">'+//nth(1)                            
                                                        '<label>รหัสผ่าน</label>'+
                                                        '<input type="text" class="form-control"  placeholder="รหัสผ่าน">'+
                                                    '</div>'+ 
                                                    '<div class="form-group">'+//nth(2)   
                                                        '<div class="col-md-2 chayanon-padding-0">'+ 
                                                            '<label>pre</label>'+
                                                            '<input type="text" class="form-control"  placeholder="pre">'+
                                                        '</div>'+ 
                                                        '<div class="col-md-5 chayanon-padding-0">'+ 
                                                            '<label>ชื่อ</label>'+
                                                            '<input type="text" class="form-control"  placeholder="ชื่อ">'+
                                                        '</div>'+
                                                        '<div class="col-md-5 chayanon-padding-0">'+ 
                                                            '<label>สกุล</label>'+
                                                            '<input type="text" class="form-control"  placeholder="สกุล">'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="form-group"><label>ประเภทบุคลากร</label><div>'+htmlGovernmentEmpType(emptype)+'</div></div>'+//nth(3)ประเภทบุคลากร style="margin-top:80px;"
                                                    '<div class="form-group"><label>สถานะการปฏิบัติงานบุคลาการ</label><div>'+htmlStatusNote(stnote)+'</div></div>'+//nth(4)สถานะการปฏิบัติงานบุคลาการ
                                                    '<div class="form-group">'+//nth(5)วันที่บรรจุรับราชการ                            
                                                        '<label>วันที่บรรจุรับราชการ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันที่บรรจุรับราชการ" autocomplete="off">'+
                                                    '</div>'+ 
                                                    '<div class="form-group">'+//nth(6)วันที่ออกจากราชการ                            
                                                        '<label>วันที่ออกจากราชการ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันที่ออกจากราชการ" autocomplete="off">'+
                                                    '</div>'+ 
                                                    '<div class="form-group">'+//nth(7)วัน/เดือน/ปี เกิด                            
                                                        '<label>วัน/เดือน/ปี เกิด</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วัน/เดือน/ปี เกิด" autocomplete="off">'+
                                                    '</div>'+ 
                                                    '<div class="form-group">'+//nth(8)วัน/เดือน/ปี ที่มารายงานตัวปฏิบัติราชการ                          
                                                        '<label>วันรายงานตัวปฏิบัติราชการ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วัน/เดือน/ปี วันรายงานตัวปฏิบัติราชการ" autocomplete="off">'+
                                                    '</div>'+ 
                                                '</div>'+ 
                                            '</div>'+     
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="panel accordian-panel-default">'+
                                    '<div class="panel-heading" role="tab" id="headingTwo">'+
                                        '<h4 class="panel-title">'+
                                            '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">'+
                                                '#2 ช่วยราชการ/ลาศึกษาต่อ'+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">'+
                                        '<div class="panel-body">'+
                                            '<div class="row">'+
                                                '<div class="col-md-6">'+ 
                                                    '<div class="form-group">'+                            
                                                        '<label>วันที่มาช่วยราชการ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันที่มาช่วยราชการ" autocomplete="off">'+
                                                    '</div>'+
                                                    '<div class="form-group"><label>หน่วยงานต้นสังกัดเดิม(มาช่วยราชการ)</label><div>'+htmlDepartmentOther(depother)+'</div></div>'+//หน่วยงานต้นสังกัดเดิม(มาช่วยราชการ)
                                                    '<div class="form-group">'+                            
                                                        '<label>วันที่ไปช่วยราชการ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันที่ไปช่วยราชการ" autocomplete="off">'+
                                                    '</div>'+
                                                    '<div class="form-group"><label>หน่วยงานที่ไปช่วยราชการ(ไปช่วยราชการ)</label><div>'+htmlDepartmentOther(depother)+'</div></div>'+//หน่วยงานที่ไปช่วยราชการ(ไปช่วยราชการ)
                                                '</div>'+ 
                                                '<div class="col-md-6">'+ 
                                                    '<div class="form-group">'+                            
                                                        '<label>วันที่ลาศึกษาต่อ</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันที่ลาศึกษาต่อ" autocomplete="off">'+
                                                    '</div>'+
                                                    '<div class="form-group">'+                            
                                                        '<label>ลาศึกษาต่อที่</label>'+
                                                        '<input type="text" class="form-control"  placeholder="ลาศึกษาต่อที่">'+
                                                    '</div>'+
                                                    '<div class="form-group">'+                            
                                                        '<label>วันกลับเข้าทำงาน(ลาศึกษาต่อ)</label>'+
                                                        '<input type="text" class="form-control" data-date_true="" placeholder="วันกลับเข้าทำงาน(ลาศึกษาต่อ)" autocomplete="off">'+
                                                    '</div>'+
                                                '</div>'+ 
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="panel accordian-panel-default">'+
                                    '<div class="panel-heading" role="tab" id="headingThree">'+
                                        '<h4 class="panel-title">'+
                                            '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">'+
                                                '#3 ประวัติการเลื่อนเงินเดือน'+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">'+
                                        '<div class="panel-body">'+
                                            '<div></div>'+//แสดงผลการเลื่อนเงินเดือนย้อนหลัง 5 ปี
                                            '<div></div>'+//สำหรับกรอกผลการเลื่อนเงินเดือน ใน ครั้งนี้
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//panel-group
                        '</div>'+//container
                    '</div>'+//panel body
                    '<div class="panel-footer">'+
                        '<button type="button"  class="btn bg-success" style="color:black;" >บันทึก</button>'+
                        '<button type="button"  class="btn bg-danger" style="color:black;">ปิด</button>'+
                    '</div>'+//panel footer
                '</div>';//panel
                return txt;  
            };//html panel body
            $.when($.fn.def_PositionData(),
                $.fn.def_GovernmentEmpType(),$.fn.def_DepData(),$.fn.def_ClassPositionData()
                ,$.fn.def_DepartmentOtherData(),$.fn.def_GroupWorkData(),$.fn.def_StatusNote()
                ,$.fn.def_CallPmsResult((data)?data.id:0)
            ).done(function(po,emptype,dep,classpo,depother,gw,stnote,pmsRslt){
                panelBody.empty().append(txtSubPanel(po,emptype,dep,classpo,depother,gw,stnote)); 
                var sp = panelBody.children('div.panel'),
                    sph = sp.children('div.panel-header'),
                    spb = sp.children('div.panel-body'),
                    spf = sp.children('div.panel-footer'),

                    collapseOneLeft = $("#collapseOne").find('div.row').children('div:nth-child(1)'),//ข้อมูลพื้นฐาน ฝั่งซ้าย
                    collapseOneRight = $("#collapseOne").find('div.row').children('div:nth-child(2)'),//ข้อมูลพื้นฐาน ฝั่งขวา
                    collapseTwoLeft = $("#collapseTwo").find('div.row').children('div:nth-child(1)'),//ข้อมูลช่วยราชการ-ลาศึกษาต่อ ฝั่งซ้าย
                    collapseTwoRight = $("#collapseTwo").find('div.row').children('div:nth-child(2)');//ข้อมูลช่วยราชการ-ลาศึกษาต่อ ฝั่งขวา
                //collapseOneLeft  
                var txt_cid = collapseOneLeft.children('div:nth-child(1)').find("input[type=text]"),//เลขบัตรประชาชน
                    txt_ponum = collapseOneLeft.children('div:nth-child(2)').find("input[type=text]"),//เลขที่ตำแหน่ง
                    sel_position = collapseOneLeft.children('div:nth-child(3)').find('select').select2(),//ชื่อตำแหน่ง 
                    sel_poclass = collapseOneLeft.children('div:nth-child(4)').find('select').select2(),//ระดับของตำแหน่ง 
                    sel_depmain = collapseOneLeft.children('div:nth-child(5)').find('select').select2(),//หน่วยงาน(หลัก)
                    sel_depsub = collapseOneLeft.children('div:nth-child(6)').find('select').select2(),//หน่วยงาน(รอง)
                    sel_groupwork = collapseOneLeft.children('div:nth-child(7)').find('select').select2();//กลุ่มภารกิจ 
                //collapseOneRight
                var txt_pass = collapseOneRight.children('div:nth-child(1)').find("input[type=text]"),//รหัสผ่าน
                    txt_pname = collapseOneRight.children('div:nth-child(2)').children('div:nth-child(1)').find("input[type=text]"),//คำนำหน้า
                    txt_fname = collapseOneRight.children('div:nth-child(2)').children('div:nth-child(2)').find("input[type=text]"),//ชื่อ
                    txt_lname = collapseOneRight.children('div:nth-child(2)').children('div:nth-child(3)').find("input[type=text]"),//สกุล
                    sel_emptype = collapseOneRight.children('div:nth-child(3)').find('select').select2(),//ประเภทบุคลากร
                    sel_stnote = collapseOneRight.children('div:nth-child(4)').find('select').select2(),//สถานะการปฏิบัติงานของบุคลากร
                    txt_admdate = collapseOneRight.children('div:nth-child(5)').find("input[type=text]").ConfigDatePicker(),//วันที่บรรจุรับราชการ
                    txt_exitdate = collapseOneRight.children('div:nth-child(6)').find("input[type=text]").ConfigDatePicker(),//วันที่ออกจากราชการ
                    txt_birthdate = collapseOneRight.children('div:nth-child(7)').find("input[type=text]").ConfigDatePicker();//วัน/เดือน/ปี เกิด
                    txt_checkindate = collapseOneRight.children('div:nth-child(8)').find("input[type=text]").ConfigDatePicker();//วัน/เดือน/ปี ที่มารายงานตัวปฏิบัติราชการ
                //collapseTwoLeft
                var txt_helpindate = collapseTwoLeft.children('div:nth-child(1)').find("input[type=text]").ConfigDatePicker(),//วันที่มาช่วยราชการ
                    sel_helpinfromplace = collapseTwoLeft.children('div:nth-child(2)').find('select').select2(),//หน่วยงานต้นสังกัดเดิม(มาช่วยราชการ)
                    txt_helpoutdate = collapseTwoLeft.children('div:nth-child(3)').find("input[type=text]").ConfigDatePicker(),//วันที่ไปช่วยราชการ
                    sel_helpouttoplace = collapseTwoLeft.children('div:nth-child(4)').find('select').select2();//หน่วยงานที่ไปช่วยราชการ(ไปช่วยราชการ)
                //collapseTwoRight 
                var txt_edudate = collapseTwoRight.children('div:nth-child(1)').find("input[type=text]").ConfigDatePicker(),//วันที่ลาศึกษาต่อ
                    txt_eduplace = collapseTwoRight.children('div:nth-child(2)').find("input[type=text]"),//ลาศึกษาต่อที่    
                    txt_edubackdate = collapseTwoRight.children('div:nth-child(3)').find("input[type=text]").ConfigDatePicker();//วันกลับเข้าทำงาน(ลาศึกษาต่อ) 

                //accodion event
                $(".toggle-accordion").on("click", function() {
                    var accordionId = $(this).attr("accordion-id"),
                    numPanelOpen = $(accordionId + ' .collapse.in').length;
                    $(this).toggleClass("active");
                    if (numPanelOpen === 0) {
                      openAllPanels(accordionId);
                    } else {
                      closeAllPanels(accordionId);
                    }
                });
                openAllPanels = function(aId) {//setAllPanelOpen
                    $(aId + ' .panel-collapse:not(".in")').collapse('show');
                };
                closeAllPanels = function(aId) {//setAllPanelclose
                    $(aId + ' .panel-collapse.in').collapse('hide');
                };

                //event ผลการเลื่อนเงินเดือนย้อนหลัง 5 ปี
                var frmShiftSalary = function(cnt){
                    var frm = function(){
                       var x = 
                        '<div class="row">'+
                            '<div class="col-md-2 no-gutter">'+ //nth-child(1)
                                $.fn.HTML_selYear(8,5)+
                            '</div>'+
                            '<div class="col-md-3 no-gutter">'+ //nth-child(2)
                                '<select class="form-control">'+
                                    '<option value=""></option>'+
                                    '<option value="ดีเด่น2">ดีเด่น2</option>'+
                                    '<option value="ดีเด่น1">ดีเด่น1</option>'+
                                    '<option value="ดีเด่น">ดีเด่น</option>'+
                                    '<option value="ดีมาก2">ดีมาก2</option>'+
                                    '<option value="ดีมาก1">ดีมาก1</option>'+
                                    '<option value="ดีมาก">ดีมาก</option>'+
                                    '<option value="ดี">ดี</option>'+
                                    '<option value="พอใช้">พอใช้</option>'+
                                    '<option value="ต้องปรับปรุง">ต้องปรับปรุง</option>'+
                                    '<option value="ไม่เลื่อน">ไม่เลื่อน</option>'+
                                    '<option value="-">-</option>'+
                                '</select>'+
                            '</div>'+
                            '<div class="col-md-1 no-gutter">'+ //nth-child(3)
                                '<input type="text" class="form-control noradius" placeholder="ร้อยละ" value=""/>'+
                            '</div>'+
                            '<div class="col-md-1 no-gutter">'+ //nth-child(4)
                                '<input type="text" class="form-control noradius" placeholder="ขั้น" value=""/>'+
                            '</div>'+
                            '<div class="col-md-2 no-gutter">'+ //nth-child(5)
                                '<select class="form-control">'+
                                    '<option value="ครึ่งแรก">ครึ่งแรก</option>'+
                                    '<option value="ครึ่งหลัง">ครึ่งหลัง</option>'+
                                '</select>'+
                            '</div>'+
                            '<div class="col-md-3 no-gutter">'+//nth-child(6) 
                                '<input type="text" class="form-control noradius" placeholder="หมายเหตุ" value=""/>'+
                            '</div>'+
                        '</div>';
                        return x;      
                    };
                    var txt = "";
                    for(var i=1;i<=cnt;i++){
                        txt+=frm();
                    }      
                    return txt;
                };
                var pbShiftSalary = $("#collapseThree").children('.panel-body'),
                    pbShiftSalaryRow1 = pbShiftSalary.children('div:nth-child(1)'),//ไว้แสดงผลการเลื่อนเงินเดือนย้อนหลัง 5 ปี
                    pbShiftSalaryRow2 = pbShiftSalary.children('div:nth-child(2)');//ไว้บันทึกผลการเลื่อนเงินเดือน
                var htmlTblShiftSalary = function(d){
                    var x ='<div class="table-responsive" style="width:60%;">'+
                    '<table class="table" id="myTable">'+
                      '<thead><tr><th>ปีงบ</th><th>ครึ่งแรก</th><th>ครึ่งหลัง</th></tr></thead><tbody>';
                        var year = [];
                        var obj = [];
                        var half1='',half2='';
                        //เก็บค่าเฉพาะปีที่ไม่ซ้ำกัน
                        $.each(d,function(inx,vl){
                            if($.inArray(vl.year_gov,year) === -1){//เก็บค่าเฉพาะปีที่ไม่ซ้ำกัน
                                year.push(vl.year_gov);
                            }
                        });
                        //แยกครึ่งแรกกับครึ่งหลัง
                        $.each(d,function(inx,vl){
                            if(vl.half_year_gov==='ครึ่งแรก'){
                                if(vl.pms_result1){
                                    half1 = vl.pms_result1;
                                }else if(vl.pms_result2){
                                    half1 = vl.pms_result2;
                                }else if(vl.pms_result3){
                                    half1 = vl.pms_result3;
                                }
                            }else{
                                half1='';
                            }
                            if(vl.half_year_gov==='ครึ่งหลัง'){
                                if(vl.pms_result1){
                                    half2 = vl.pms_result1;
                                }else if(vl.pms_result2){
                                    half2 = vl.pms_result2;
                                }else if(vl.pms_result3){
                                    half2 = vl.pms_result3;
                                }
                            }else{
                                half2='';
                            }
                            obj.push({'year':vl.year_gov,'half1':half1,'half2':half2});
                        });
                        //loop tr จาก object data ใหม่
                        $.each(year,function(i,v){
                          x+='<tr data-year='+v+'>'+
                                '<td>'+v+'</td>';
                                $.each(obj,function(j,k){
                                     if(v===k.year){
                                         if(k.half1){
                                             x+='<td>'+k.half1+'</td>';
                                         }
                                         if(k.half2){
                                             x+='<td>'+k.half2+'</td>';
                                         }
                                     }
                                });
                            '</tr>';  
                        });
                    x+='</tbody></table></div>';
                    return x;
                };//ฟังก์ชัน create html table ข้อมูลตาราง pms_result
                pbShiftSalaryRow2.empty().append(frmShiftSalary(1));//ไว้บันทึกผลการเลื่อนเงินเดือน จะมี 1 แถว
                var sh1 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(1)').find('select'),//ปีงบ 
                    sh2 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(2)').find("select"),//เลื่อนแบบ ดีมาก ดีเด่น 
                    sh3 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(3)').find("input[type=text]"),//เลื่อนแบบร้อยละ 
                    sh4 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(4)').find('input[type=text]'),//เลื่อนแบบขั้น
                    sh5 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(5)').find('select'),//ครึ่งแรก ครึ่งหลัง
                    sh6 = pbShiftSalaryRow2.children('div.row').children('div:nth-child(6)').find("input[type=text]");//หมายเหตุ
                pbShiftSalary.find('select').addClass('noradius');
                pbShiftSalary.find('select > option').each(function(){
                    if($(this).text() === "--select Year--"){
                        $(this).text("ปีงบ"); 
                    }
                });
                

                 //กรณีมี Data เข้ามา (edit) กำหนดค่าให้ element
                if(data !==null && typeof data !=='undefined' ){
                    //ข้อมูลบุคลากรที่จะ edit
                    $.each(data,function(i,v){
                        if(i==='status_use'){sph.find("input[name='rdo_StatusUse'][value='"+v+"']").prop('checked', true);}
                         //row1 column1
                        (i==='cid')?txt_cid.val(v):txt_cid.val();
                        (i==='po_num')?txt_ponum.val(v):txt_ponum.val();
                        (i==='position_code')?sel_position.val(v).trigger('change'):sel_position.val();
                        (i==='class_position_shortname')?sel_poclass.val(v).trigger('change'):sel_poclass.val();
                        (i==='dep_code')?sel_depmain.val(v).trigger('change'):sel_depmain.val();
                        (i==='dep_code2')?sel_depsub.val(v).trigger('change'):sel_depsub.val();
                        (i==='groupwork')?sel_groupwork.val(v).trigger('change'):sel_groupwork.val();
                        //row1 column2
                        (i==='pass')?txt_pass.val(v):txt_pass.val();
                        (i==='pname')?txt_pname.val(v):txt_pname.val();
                        (i==='fname')?txt_fname.val(v):txt_fname.val();
                        (i==='lname')?txt_lname.val(v):txt_lname.val();
                        (i==='government_emp_type')?sel_emptype.val(v).trigger('change'):sel_emptype.val();
                        (i==='status_note')?sel_stnote.val(v).trigger('change'):sel_stnote.val();
                        if(i==='admission_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_admdate.data('date_true',v);
                                    txt_admdate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        if(i==='exit_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_exitdate.data('date_true',v);
                                    txt_exitdate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        if(i==='birth_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_birthdate.data('date_true',v);
                                    txt_birthdate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        if(i==='checkin_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_checkindate.data('date_true',v);
                                    txt_checkindate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        //row2 column1
                        if(i==='help_in_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_helpindate.data('date_true',v);
                                    txt_helpindate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        (i==='help_in_comefrom_place')?sel_helpinfromplace.val(v).trigger('change'):sel_helpinfromplace.val();
                        if(i==='help_out_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_helpoutdate.data('date_true',v);
                                    txt_helpoutdate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        (i==='help_out_goto_place')?sel_helpouttoplace.val(v).trigger('change'):sel_helpouttoplace.val();
                        //row2 column2
                        if(i==='studyleave_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_edudate.data('date_true',v);
                                    txt_edudate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                        (i==='studyleave_place')?txt_eduplace.val(v).trigger('change'):txt_eduplace.val();
                        if(i==='studyleave_end_date'){
                            if(v){
                                if(v!=='0000-00-00'){
                                    txt_edubackdate.data('date_true',v);
                                    txt_edubackdate.val($.fn.StrThaiDate(new Date(v)));
                                }
                            }
                        }
                    });
                    //ข้อมูลผลการเลื่อนเงินเดือนย้อนหลัง  จากตาราง pms_result
                    if(typeof(pmsRslt)!=='string'){
                        var lenPmsRslt = pmsRslt.length;
                        if(lenPmsRslt>0){
                            pbShiftSalaryRow1.empty().append(htmlTblShiftSalary(pmsRslt));
                        }
                    }
                }

                //pupup บอกสถานะบันทึกสำเร็จหรือไม่
                var txtmodal = function(){
                    var x = 
                    '<div  class="modal hidden fade" role="dialog">'+
                        '<div class="modal-dialog">'+
                            '<div class="modal-content col-xs-10  well well-sm">'+
                                '<div class="modal-body"></div>'+
                                '<div class="modal-footer">'+
                                    '<button type="button" class="btn btn-default">Close</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
                    return x;
                };
                var modal = $(txtmodal());
                modal.modal({keyboard:false,backdrop:'static'}).modal('hide');
                modal.on('hidden.bs.modal', function(){
                    $(this).data('bs.modal', null);
                });

                //บันทึก
                spf.children('button:first-child').click(function(){
                    var id=0;
                    if(data !==null && typeof data !=='undefined' ){
                        id=data.id;
                    }
                    var obj = {
                        'id':id,
                        'cid':txt_cid.val(),
                        'pass':txt_pass.val(),
                        'po_num':txt_ponum.val(),
                        'pname':txt_pname.val(),
                        'fname':txt_fname.val(),
                        'lname':txt_lname.val(),
                        'position_code':sel_position.val(),
                        'class_position_shortname':sel_poclass.val(),
                        'dep_code':sel_depmain.val(),
                        'dep_code2':sel_depsub.val(),
                        'groupwork':sel_groupwork.val(),
                        'status_use':sph.find("input[name='rdo_StatusUse']:checked").val(),
                        'government_emp_type':sel_emptype.val(),
                        'status_note':sel_stnote.val(),
                        'admission_date':txt_admdate.data('date_true'),
                        'exit_date':txt_exitdate.data('date_true'),
                        'birth_date':txt_birthdate.data('date_true'),
                        'checkin_date':txt_checkindate.data('date_true'),
                        'help_in_date':txt_helpindate.data('date_true'),
                        'help_in_comefrom_place':sel_helpinfromplace.val(),
                        'help_out_date':txt_helpoutdate.data('date_true'),
                        'help_out_goto_place':sel_helpouttoplace.val(),
                        'studyleave_date':txt_edudate.data('date_true'),
                        'studyleave_place':txt_eduplace.val(),
                        'studyleave_end_date':txt_edubackdate.data('date_true'),
                        'record_use':'Y'
                    };
                    var pms_result = {
                        person_id:obj.id,
                        pms_result1:sh2.children('option:selected').val(),//แบบดีเด่น ดีมาก
                        pms_result2:sh3.val(),//แบบร้อยละ
                        pms_result3:sh4.val(),//แบบขั้น เช่น 0.5 ขั้น
                        year_gov:sh1.children('option:selected').text(),
                        half_year_gov:sh5.children('option:selected').val(),
                        status_use:"Y",
                        pms_note:sh6.val()
                    };
                    //ตรวจสอบประเภทบุคลากรก่อนบันทึก pms_result
                    var pms_empType1 = ['A','C','D','E','F','G'];//ประเภทบุคลากรที่ประเมินแบบ ดีมาก ดีเด่น...
                    //กำหนดค่าให้ผลประเมินเลื่อนเงินเดือน
                    if(sel_emptype.val()){
                        if($.inArray(sel_emptype.val(),pms_empType1)!==-1){
                            pms_result.pms_result2 = "";
                            pms_result.pms_result3 = "";
                            if(sh2.children('option:selected').val()){
                                pms_result.pms_result1 = sh2.children('option:selected').val();
                            }else{
                                pms_result.pms_result1 = "";
                            }
                        }else{//กรณีลูกจ้างประจำ
                            pms_result.pms_result1 = "";
                            pms_result.pms_result2 = "";
                            if(sh4.val()){
                                pms_result.pms_result3 = sh4.val();
                            }else{
                                pms_result.pms_result3 = "";
                            }
                        }
                    }else{
                        pms_result.pms_result1 = "";
                        pms_result.pms_result2 = "";
                        pms_result.pms_result3 = "";
                    }
                    //ปีงบ กับ รอบประเมิน อย่างน้อยต้องไม่ว่าง
                    if(sh1.children('option:selected').text() && sh1.children('option:selected').text()!=='ปีงบ'){
                        pms_result.year_gov = sh1.children('option:selected').text();
                    }else{
                        pms_result.year_gov = parseInt((new Date()).getFullYear())+543;
                    }
                    if(sh5.children('option:selected').val()){
                        pms_result.half_year_gov = sh5.children('option:selected').val();
                    }else{
                        pms_result.half_year_gov = 'ครึ่งแรก';
                    }
                    //บันทึก
                    if(obj.status_use==='Y'||obj.status_use==='N'){
                        $.ajax({
                            url:"UpdatePerson.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{
                                'data':JSON.stringify(obj),
                                'pms_result':JSON.stringify(pms_result)
                            }
                        }).done(function(data){
                            //console.log(data);
                            if(typeof data ==='object'){
                                modal.find('.modal-body').html('บันทึกข้อมูลสำเร็จ');
                                modal.removeClass('hidden').show().modal('show');
                                modal.find('button').click(function(){
                                   modal.toggleClass('hidden').hide().modal('hide'); 
                                   btnBindClick.data('dafter_sch',data);
                                   btnBindClick.trigger('click');
                                });
                            }
                        });
                    }else{
                        modal.find('.modal-body').html('จำเป็นต้องระบุว่าเปิดใช้งานบุคลากรคนนี้หรือไม่');
                        modal.removeClass('hidden').show().modal('show');
                        modal.find('button').click(function(){
                           modal.toggleClass('hidden').hide().modal('hide'); 
                        });
                    }
                });
                //close
                spf.children('button:last-child').click(function(){
                    window.location.hash = '#tblPerson';
                    window.location.reload(true);
                });
            });//when1
            
        };//action จะ insert หรือ edit ข้อมูล
        var def_Sch = function(obj,page,txtSch){
            var def = $.Deferred();
            var tbl = function(data){
                    var x = '<div class="table-responsive">'+
                            '<table class="table">'+
                                '<thead>'+
                                    '<tr>'+
                                        '<th>CID</th>'+
                                        '<th>เลขที่ตำแหน่ง</th>'+
                                        '<th>ชื่อ-สกุล</th>'+
                                        '<th>&nbsp;</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody>';
                            $.each(data,function(i,v){
                                x+='<tr data-idselect='+v.id+'>'+//id รายการที่เลือก
                                        '<td>'+v.cid+'</td>'+
                                        '<td>'+v.po_num+'</td>'+
                                        '<td>'+v.pname+v.fname+' '+v.lname+'</td>'+
                                        '<td class="tg-0lax" style="text-align:center">'+
                                            '<div  class="btn-group" data-toggle="buttons" >'+
                                                '<label class="btn">'+
                                                   '<a href="#editPerson"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>'+
                                                '</label>'+
                                                '<label class="btn">'+
                                                   '<a href="#deletePerson"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></a>'+
                                                '</label>'+
                                            '</div>'+
                                        '</td>'+
                                   '</tr>';
                            });            
                        x+=     '</tbody>'+
                            '</table>'+
                        '</div>'; 
                    return x;
                };
                $.ajax({
                    url:"PersonDataForAdmin.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{
                        'txtSch':JSON.stringify(txtSch),
                        'page':JSON.stringify(page)
                    }
                }).done(function(data){
                    if(typeof data ==='object'){
                        var x = tbl(data.allFieldData)+data.htmlPGbtn;
                        obj.empty().append(x);
                        var aTag = obj.find("[data-toggle='buttons'] >.btn >a");
                        //popup confirm กรณีจะลบ record
                        var txtmodal = function(){
                            var x = 
                            '<div  class="modal hidden fade" role="dialog">'+
                                '<div class="modal-dialog">'+
                                    '<div class="modal-content col-xs-10  well well-sm">'+
                                        '<div class="modal-body">are you sure ?</div>'+
                                        '<div class="modal-footer">'+
                                            '<button type="button" class="btn btn-danger">Sure Delete</button>'+
                                            '<button type="button" class="btn btn-default">Close</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
                            return x;
                        };
                        var modal = $(txtmodal());
                        modal.modal({keyboard:false,backdrop:'static'}).modal('hide');
                        modal.on('hidden.bs.modal', function(){
                            $(this).data('bs.modal', null);
                        });
                        //เลือกว่าจะคลิก edit หรือ delete
                        aTag.click(function(e){
                            e.stopPropagation();
                            e.preventDefault();
                            var target = $(this).attr('href');
                            var idselect = parseInt($(this).closest('tr').data('idselect'));//id รายการที่เลือก
                            $.each(data.allFieldData,function(i,v){
                                if(parseInt(v.id)===idselect){
                                    if(target==='#editPerson'){//แก้ไขข้อมูลบุคลากร
                                        modal.toggleClass('hidden').hide().modal('hide');
                                        CallbackAction(v);
                                    }else if(target==='#deletePerson'){//ลบข้อมูลบุคลากร
                                        modal.removeClass('hidden').show().modal('show');
                                        modal.find('button:first-child').click(function(){//คลิกแน่ใจ ลบได้
                                            modal.modal('hide'); 
                                            $.ajax({
                                                url:"DeletePerson.php", 
                                                type:"post",
                                                cache:false,
                                                dataType:'json',
                                                data:{'id':JSON.stringify(idselect)}//id ในตาราง person
                                            }).done(function(data){
                                                if(data==='ok'){
                                                    window.location.hash = '#tblPerson';
                                                    window.location.reload(true);
                                                }
                                            });
                                        });
                                        modal.find('button:last-child').click(function(){//คลิก close
                                             modal.toggleClass('hidden').hide().modal('hide');
                                        });
                                    }
                                }
                            });
                        });
                    }else{
                        obj.empty().append(data);
                    }
                    def.resolve(obj);
                });
            return def.promise();
        };//ในนี้หลังได้ข้อมูลแล้ว จะเรียก CallbackAction หรือ เรียก module_deletePerson
        //report อัตรากำลัง 1
        var workforce1_mol = function(){
            function tbl(d){
                var x=
                    '<div class="row">'+
                        '<div class="col-lg-12">'+
                            '<div class="table-responsive">'+
                                //สายงานหลัก+สายวิชาชีพ 
                                '<table class="table table-bordered">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th><p align="center" style="vertical-align:middle;">#</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">ตำแหน่ง</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">ข้าราชการ</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">ลูกจ้างประจำ</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">พนักงานราชการ</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">พนักงานกระทรวงฯ</p></th>'+
                                            '<th><p align="center" style="vertical-align:middle;">รวม</p></th>'+
                                        '</tr>'+  
                                    '</thead>'+  
                                    '<tbody>';
                                    var nn = 0;
                                    var xsum = 0;
                                    if(d.length>0){
                                        $.each(d,function(i,v){
                                            var ssum = 0;
                                            ssum +=(isNaN(v.a))?0:parseInt(v.a);
                                            ssum +=(isNaN(v.b))?0:parseInt(v.b);
                                            ssum +=(isNaN(v.c))?0:parseInt(v.c);
                                            ssum +=(isNaN(v.d))?0:parseInt(v.d);
                                            nn = nn+1;
                                            x+= '<tr>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                                    '<td>'+v.position_name+'</td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.a!=='0'?v.a:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.b!=='0'?v.b:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.c!=='0'?v.c:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.d!=='0'?v.d:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(ssum)+'</p></td>'+
                                                '</tr>';
                                            xsum+=ssum;
                                        });
                                    }
                                    x+='</tbody>'+
                                       '<tfooter>'+
                                           '<tr>'+
                                                '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                                '<td>&nbsp;</td>'+
                                                '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">รวมทั้งสิ้น</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">'+(xsum)+'</p></td>'+
                                           '</tr>'+
                                        '</tfooter>'+
                                '</table>';
                            x+='</div>'+//table-responsive
                        '<div>'+//col-lg-12
                    '<div>';
                return x;
            };
            function htmFilter(gw,po,potype1,stnote){
                var x =//'<h3>แสดงอัตรากำลังแยกตามสายงานและกลุ่มภารกิจ</h3>'+
                '<div class="row">'+
                    '<div class="form-group col-md-3">'+
                        '<label>สถานะบุคลากร:</label>'+
                        '<select  class="form-control noradius" multiple>'+
                            '<option value="">ไม่ระบุ</option>'+
                            '<option value="Y">Y=ยังปฏิบัติงาน</option>'+
                            '<option value="N">N=ลาออก,เกษียณ,โอน,ย้าย </option>'+
                        '</select>'+
                    '</div>'+
                    '<div class="form-group col-md-3">'+
                        '<label>การปฏิบัติราชการ:</label>';
                        $.each(stnote,function(i,v){// $.fn.html_StatusNote(stnote)+
                          x+=
                            '<div class="row">'+
                                '<label class="btn">'+
                                    '<input type="checkbox" name="nth2chkbox" value="'+v.id+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+v.status_note_name+'</span>'+
                                '</label>'+
                            '</div>';
                        });x+=
                    '</div>'+
                    '<div class="form-group col-md-3">'+
                        '<label>กลุ่มภารกิจ:</label>';
                        $.each(gw,function(i,v){// $.fn.html_GroupWork(gw)+
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth3chkbox" value="'+v.groupwork_code+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+v.groupwork_name+'</span>'+
                                  '</label>'+
                              '</div>';
                        }); x+= 
                    '</div>'+
                    '<div class="form-group col-md-3">'+
                        '<label>ประเภทบุคลากร:</label>';
                        $.each(potype1,function(i,v){//$.fn.html_PositionByType1(potype1)+
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth4chkbox" value="'+v.id+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+v.position_by_type1_name+'</span>'+
                                  '</label>'+
                              '</div>';
                        });x+= 
                    '</div>'+
                '</div>'+//row nth-child(1)

                '<div class="row">'+
                    '<div class="col-md-4 col-md-offset-4">'+
                        '<div class="input-group">'+ 
                            '<span class="input-group-btn">'+
                                '<a href="#schWf1" class="btn btn-default">SEARCH <span class="glyphicon glyphicon-search"></span></a>'+                                
                            '</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+//row nth-child(2)

                '<div class="row"></div>';//subContent row nth-child(3)
                return x;
            };
            $.when(
                    $.fn.def_GroupWorkData(),
                    $.fn.def_PositionData(),
                    $.fn.def_Position_byType1Data(),
                    $.fn.def_StatusNote()
                ).done(function(gw,po,potype1,stnote){
                    panelBody.empty().append(htmFilter(gw,po,potype1,stnote));
                    var resultSch = panelBody.children('div.row:nth-child(3)'),
                        btnSch = panelBody.find("a[href='#schWf1']"),
                        nth1sel = panelBody.children('div.row:nth-child(1)').find("select"),//สถานะบุคลากร
                        nth2chkbox =$("input[name='nth2chkbox']"),//การปฏิบัติราชการ
                        nth3chkbox =$("input[name='nth3chkbox']"),//กลุ่มภารกิจ
                        nth4chkbox =$("input[name='nth4chkbox']");//ประเภทบุคลากร
                    var f2arr = [],//การปฏิบัติราชการ
                        f3arr = [],//กลุ่มภารกิจ
                        f4arr = [];//ประเภทบุคลากร       
                    $("input[name='nth2chkbox']").change(function(e){
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f2arr.push( ($(this).val()).toString() );
                            }
                        }else{
                           f2arr.splice( $.inArray($(this).val(),f2arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    $("input[name='nth3chkbox']").change(function(e){
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f3arr.push(($(this).val()).toString());
                            }
                        }else{
                           f3arr.splice( $.inArray($(this).val(),f3arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    $("input[name='nth4chkbox']").change(function(e){
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f4arr.push(($(this).val()).toString());
                            }
                        }else{
                           f4arr.splice( $.inArray($(this).val(),f4arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    btnSch.click(function(e){
                        var objSend = {
                            status_use:nth1sel.val(),//สถานะบุคลากร
                            status_note:f2arr,//การปฏิบัติราชการ
                            groupwork:f3arr,//กลุ่มภารกิจ
                            position_by_type1:f4arr//ประเภทบุคลากร
                        };
                        $.when($.fn.def_WorkForce1(objSend)).done(function(wf){
                           // console.log(wf);
                            
                            if(typeof wf !=='string'){
                                resultSch.empty().append(tbl(wf));
                                resultSch.find('table.table').DataTable({
                                    // "pagingType": "full_numbers",
                                    "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                                    "lengthMenu": [[100,200,500, -1], [100,200,500, "All"]],
                                     buttons: ['excel','pdf','print'],
                                     "scrollX": true,
                                     "order": [[ 0, "asc" ]]
                                 });
                            }else{
                                alert(wf);
                            }
                            e.stopPropagation();
                            
                        });
                        
                    });
            });
            /*
            $.when(
                
                 $.fn.def_WorkForce1({
                     position_by_type1:[1,2],
                     groupwork:onlineUser.groupwork_code
                 }),
                 $.fn.def_WorkForce1({
                     position_by_type1:[3],
                     groupwork:onlineUser.groupwork_code
                 })
                 
            ).done(function(wf1,wf2){
                panelBody.empty().append(tbl(wf1,wf2,onlineUser));
                panelBody.find('table.table').DataTable({
                    // "pagingType": "full_numbers",
                    "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                    "lengthMenu": [[100,200,500, -1], [100,200,500, "All"]],
                     buttons: ['excel','pdf','print'],
                     "scrollX": true,
                     "order": [[ 0, "asc" ]]
                 });
                 
            });
            */
        };
        nav.find('a').click(function(e){//คลิกเลือกเมนู
            var target = $(this).attr('href');
            if(target==='#add'){
                CallbackAction();
            }else if (target==='#sch'){
                var txtSch = $("input[name='schPerson']");
                $.when(def_Sch(panelBody,1,txtSch.val())).done(function(obj){
                    obj.off("click",".mypg a").on( "click", ".mypg a", function (e){
                        e.preventDefault();
                        e.stopPropagation();
                        var page = $(e.target).attr("data-page");
                        $.when.apply(this,def_Sch(panelBody,page,txtSch.val()));
                    });
                });
            }else if (target==='#personRpt1'){
                workforce1_mol();
            }
        }); 
    };
    var tbl_leave_absence = function(onlineAdmin){
        function leave_print_module(json_print,OnlineUser){//OnlineUser ตัวนี้เกิดจาก last login 
            function cb(fieldname){
                var returnV = '';
                if(typeof json_print ==='object'){
                    if(Object.keys(json_print).length>0){
                        var key = Object.keys(json_print);
                        $.each(json_print,function(i,v){
                            if($.inArray(fieldname,key)!==-1){
                                if(i===fieldname){
                                    returnV = v;
                                }
                            }
                        });
                    }
                }
                return returnV;
            };//console.log(cb('leave_type'));
            function textWidth(str){
                var span = $('<span id="calTxtWidth">'+str+'</span>');
                $(document.body).append(span);
                var txtWidth = 0;
                span.each(function(index,value){
                   txtWidth = $(value).width();
                });
                $(document.body).find("#calTxtWidth").remove();
                return txtWidth;
            };
            function chklenStr(str,wMax){//wMax หน่วยเป็นนิ้ว
                var newStr =str,wStr;
                wStr = textWidth(newStr);//ความกว้าง str
                var wiMax = parseFloat(wMax*96);//1 inch = 96px
                while (wStr < wiMax) {
                    newStr += ' ';
                    wStr = wStr+4.5;//เพิ่มทีละ 4.5px
                }
                return newStr;
            };
            //table function
            function ParseContainer(cnt, e, p, styles) {
                var elements = [];
                var children = e.childNodes;
                if (children.length !== 0) {
                    for (var i = 0; i < children.length; i++) p = ParseElement(elements, children[i], p, styles);
                }
                if (elements.length !== 0) {            
                    for (var i = 0; i < elements.length; i++) cnt.push(elements[i]);
                }
                return p;
            };
            function ComputeStyle(o, styles) {
                for (var i = 0; i < styles.length; i++) {
                    var st = styles[i].trim().toLowerCase().split(":");
                    //console.log('st[0]='+st[0]+',st[1]='+st[1]);
                    if (st.length === 2) {
                        switch (st[0]) {
                            case "font-size":{
                                o.fontSize = parseInt(st[1]);
                                break;
                            }
                            case "text-align": {
                                switch (st[1]) {
                                    case "right": o.alignment = 'right'; break;
                                    case "center": o.alignment = 'center'; break;
                                    case "left": o.alignment = 'left'; break;
                                }
                                break;
                            }
                            case "font-weight": {
                                switch (st[1]) {
                                    case "bold": o.bold = true; break;
                                }
                                break;
                            }
                            case "text-decoration": {
                                switch (st[1]) {
                                    case "underline": o.decoration = "underline"; break;
                                }
                                break;
                            }
                            case "font-style": {
                                switch (st[1]) {
                                    case "italic": o.italics = true; break;
                                }
                                break;
                            }
                        }
                    }
                }
            };
            function ParseElement(cnt, e, p, styles) {
                if (!styles) styles = [];
                if (e.getAttribute) {
                    var nodeStyle = e.getAttribute("style");
                    if (nodeStyle) {
                        var ns = nodeStyle.split(";");
                        for (var k = 0; k < ns.length; k++) styles.push(ns[k]);
                    }
                }
                switch (e.nodeName.toLowerCase()) {
                    case "#text": {
                        var t = { text: e.textContent.replace(/\n/g, "") };
                        if (styles) ComputeStyle(t, styles);
                        p.text.push(t);
                        break;
                    }
                    case "b":case "strong": {
                        //styles.push("font-weight:bold");
                        ParseContainer(cnt, e, p, styles.concat(["font-weight:bold"]));
                        break;
                    }
                    case "u": {
                        //styles.push("text-decoration:underline");
                        ParseContainer(cnt, e, p, styles.concat(["text-decoration:underline"]));
                        break;
                    }
                    case "i": {
                        //styles.push("font-style:italic");
                        ParseContainer(cnt, e, p, styles.concat(["font-style:italic"]));
                        //styles.pop();
                        break;
                        //cnt.push({ text: e.innerText, bold: false });
                    }
                    case "span": {
                        ParseContainer(cnt, e, p, styles);
                        break;
                    }
                    case "br": {
                        p = CreateParagraph();
                        cnt.push(p);
                        break;
                    }
                    case "table":
                        {
                            var t = {
                                table: {
                                    widths: [],
                                    body: []
                                }
                            };
                            var border = e.getAttribute("border");
                            var isBorder = false;
                            if (border) if (parseInt(border) === 1) isBorder = true;
                            if (!isBorder) t.layout = 'noBorders';
                            ParseContainer(t.table.body, e, p, styles);

                            var widths = e.getAttribute("widths");
                            if (!widths) {
                                if (t.table.body.length !== 0) {
                                    if (t.table.body[0].length !== 0) for (var k = 0; k < t.table.body[0].length; k++) t.table.widths.push("*");
                                }
                            } else {
                                var w = widths.split(",");
                                for (var k = 0; k < w.length; k++) t.table.widths.push(w[k]);
                            }
                            cnt.push(t);
                            break;
                        }
                    case "tbody": {
                        ParseContainer(cnt, e, p, styles);
                        //p = CreateParagraph();
                        break;
                    }
                    case "tr": {
                        var row = [];
                        ParseContainer(row, e, p, styles);
                        cnt.push(row);
                        break;
                    }
                    case "td": {
                        p = CreateParagraph();
                        var st = {stack: []};
                        st.stack.push(p);

                        var rspan = e.getAttribute("rowspan");
                        if (rspan) st.rowSpan = parseInt(rspan);
                        var cspan = e.getAttribute("colspan");
                        if (cspan) st.colSpan = parseInt(cspan);

                        ParseContainer(st.stack, e, p, styles);
                        cnt.push(st);
                        break;
                    }
                    case "div":case "p": {
                        p = CreateParagraph();
                        var st = {stack: []};
                        st.stack.push(p);
                        ComputeStyle(st, styles);
                        ParseContainer(st.stack, e, p);

                        cnt.push(st);
                        break;
                    }
                    default: {
                        console.log("Parsing for node " + e.nodeName + " not found");
                        break;
                    }
                }
                return p;
            };
            function ParseHtml(cnt, htmlText) {
                var html = $(htmlText.replace(/\t/g, "").replace(/\n/g, ""));
                var p = CreateParagraph();
                for (var i = 0; i < html.length; i++) ParseElement(cnt, html.get(i), p);
            }//content = [];ParseHtml(content, simpleHtm);pdfMake.createPdf({content: content}).download();
            function CreateParagraph() {
                var p = {text:[]};
                return p;
            }
            
            function chkleave2type(leave_id,f){
                var symb = ['[ ]','[/]'];
                var x1 = (leave_id==='2'?symb[1]:symb[0])+" ป่วย",
                    x2 = (leave_id==='3'?symb[1]:symb[0])+" กิจส่วนตัว",
                    x3 = (leave_id==='5'?symb[1]:symb[0])+" คลอดบุตร";
                if(f===1){
                    return x1+' '+x2+' '+x3+' ';
                }else if(f===2){
                    if(leave_id==='2'){
                        return "ขออนุญาตลาป่วย";
                    }else if(leave_id==='3'){
                        return "ขออนุญาตลากิจส่วนตัว";
                    }else if(leave_id==='5'){
                        return "ขออนุญาตลาคลอดบุตร";
                    }else{
                        return "";
                    }
                }
            };//แปลงข้อความสำหรับ ลาป่วย กิจ คลอด
            function chkLeaveLastDate(LeaveLastDate){
                //$.fn.StrThaiDate4(new Date(splitDate2(data.last_leave_date)[0]))
                var returnV = ' ';
                if(LeaveLastDate){
                    if(LeaveLastDate.indexOf(',')>=0){
                        var arr = LeaveLastDate.split(',');
                        if(arr[0]||arr[1]){
                            returnV = arr;
                            var dnow = $.fn.formatDate3(new Date());
                            if( (dnow ===arr[0]) || (dnow ===arr[1]) ){
                                returnV = ' ';
                            }
                        }
                    }
                }
                return returnV;//array or string
            };
            
            var doc_leave1 = {
                pageSize: 'A4',
                pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
                content: [
                    {
                        text: [
                            {text: cb('doc_num'),alignment: 'right'},
                            '\n',
                            {text: cb('headtopic'),decoration: 'underline',alignment: 'center',fontSize:18,bold:true},
                            '\n\n',
                            {text: '(เขียนที่) ',fontSize:16,alignment: 'right'},
                            {text: 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'วันที่ ',fontSize:16,alignment: 'right'},
                            {text: '   '+$.fn.splitStrToArr(cb('date_write'),' ')[0]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' เดือน ',fontSize:16,alignment: 'right'},
                            {text: '   '+$.fn.splitStrToArr(cb('date_write'),' ')[1]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' พ.ศ. ',fontSize:16,alignment: 'right'},
                            {text: '  '+$.fn.splitStrToArr(cb('date_write'),' ')[2]+'  ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'เรื่อง ',fontSize:16,alignment: 'left'},
                            {text: cb('topic'),fontSize:16,alignment: 'left'},
                            '\n\n',
                            
                            {text: 
                                    (OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13)?
                                        'เรียน ผู้อำนวยการโรงพยาบาล':
                                    'เรียน ผู้อำนวยการโรงพยาบาล (ผ่านหัวหน้า'+cb('groupwork_name')+')'
                                ,fontSize:16,alignment: 'left'},
                            
                            '\n\n',
                            {text:'....................................................................',fontSize:5,color:'white'},//ย่อหน้า
                            {text:'ข้าพเจ้า',fontSize:16},
                            {text: chklenStr(' '+cb('pname')+' ',2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ตำแหน่ง',fontSize:16},
                            {text: chklenStr(' '+cb('position_name'),2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ระดับ',fontSize:16},
                            {text: chklenStr(' '+cb('class_position')+' ',0.8),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'สังกัด',fontSize:16},
                            {text: chklenStr(' โรงพยาบาลจิตเวชสงขลาราชนครินทร์ '+cb('groupwork_name'),4.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'มีวันลาพักผ่อนสะสม',fontSize:16},
                            {text: chklenStr('  '+cb('leave_num1')+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'วันทำการ มีสิทธิลาพักผ่อนประจำปีนี้อีก 10 วันทำการ รวมเป็น',fontSize:16},
                            {text: chklenStr('  '+cb('leave_num2')+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'วันทำการ',fontSize:16},
                            '\n',
                            {text:'ตั้งแต่วันที่',fontSize:16},
                            {text: chklenStr(' '+cb('txtDatetime')+' ',4.7),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'มีกำหนด',fontSize:16},
                            {text: ' '+cb('leave_num4')+' วัน',fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่',fontSize:16},
                            {text: chklenStr('  '+cb('contact_addr'),4.52),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'หมายเลขโทรศัพท์',fontSize:16},
                            {text: chklenStr('  '+cb('contact_tel'),5.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n',
                            {text:chklenStr('.',3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:'(ลงชื่อ)',fontSize:16},
                            {text:chklenStr('.',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:chklenStr('.',3.3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:chklenStr('('+cb('pname')+')',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n'
                        ]//text array  
                    }//object of content
                ]//content array
            };//ลาพักผ่อน
            var doc_leave2 = {
                pageSize: 'A4',
                pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
                content: [
                    {
                        text: [
                            {text: cb('doc_num'),alignment: 'right'},
                            '\n',
                            {text: cb('headtopic'),decoration: 'underline',alignment: 'center',fontSize:18,bold:true},
                            '\n\n',
                            {text: '(เขียนที่) ',fontSize:16,alignment: 'right'},
                            {text: 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'วันที่ ',fontSize:16,alignment: 'right'},
                            {text: '   '+$.fn.splitStrToArr(cb('date_write'),' ')[0]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' เดือน ',fontSize:16,alignment: 'right'},
                            {text: '   '+$.fn.splitStrToArr(cb('date_write'),' ')[1]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' พ.ศ. ',fontSize:16,alignment: 'right'},
                            {text: '  '+$.fn.splitStrToArr(cb('date_write'),' ')[2]+'  ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'เรื่อง ',fontSize:16,alignment: 'left'},
                            {text: cb('topic'),fontSize:16,alignment: 'left'},
                            '\n\n',
                            
                           {text: 
                                    (OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13)?
                                        'เรียน ผู้อำนวยการโรงพยาบาล':
                                    'เรียน ผู้อำนวยการโรงพยาบาล (ผ่านหัวหน้า'+cb('groupwork_name')+')'
                                ,fontSize:16,alignment: 'left'},
                            
                            '\n\n',
                            {text:'....................................................................',fontSize:5,color:'white'},//ย่อหน้า
                            {text:'ข้าพเจ้า',fontSize:16},
                            {text: chklenStr(' '+cb('pname')+' ',2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ตำแหน่ง',fontSize:16},
                            {text: chklenStr(' '+cb('position_name'),2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ระดับ',fontSize:16},
                            {text: chklenStr(' '+cb('class_position')+' ',0.8),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'สังกัด',fontSize:16},
                            {text: chklenStr(' โรงพยาบาลจิตเวชสงขลาราชนครินทร์ '+cb('groupwork_name'),4.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ขอลา',fontSize:16},
                            {text: chklenStr('  '+chkleave2type(cb('leave_type'),1)+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'เนื่องจาก ',fontSize:16},
                            {text:chklenStr(cb('leave_txt_note'),3.1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ตั้งแต่วันที่',fontSize:16},
                            {text: chklenStr(' '+cb('txtDatetime')+' ',4.6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'มีกำหนด',fontSize:16},
                            {text: ' '+cb('leave_num2')+' วัน',fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ข้าพเจ้าได้ลา',fontSize:16},
                            {text: chklenStr('  '+chkleave2type(cb('leave_type'),1)+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ครั้งสุดท้ายตั้งแต่ ',fontSize:16},
                            {text: chklenStr(
                                    ( $.isArray(chkLeaveLastDate(cb('last_leave_date'))) )?
                                    $.fn.StrThaiDate4(new Date(chkLeaveLastDate(cb('last_leave_date'))[0])):''
                                ,0.45),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ถึง ',fontSize:16},
                            {text: chklenStr(
                                    ( $.isArray(chkLeaveLastDate(cb('last_leave_date'))) )?
                                    $.fn.StrThaiDate4(new Date(chkLeaveLastDate(cb('last_leave_date'))[1])):''
                                ,0.45),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:' ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่',fontSize:16},
                            {text: chklenStr('  '+cb('contact_addr'),2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'หมายเลขโทรศัพท์',fontSize:16},
                            {text: chklenStr('  '+cb('contact_tel'),5.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n',
                            {text:chklenStr('.',3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:'(ลงชื่อ)',fontSize:16},
                            {text:chklenStr('.',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:chklenStr('.',3.3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:chklenStr('('+cb('pname')+')',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n'
                        ]//text array  
                    }//object of content
                ]//content array
            };//ป่วย กิจ คลอดบุตร
            var doc_leaveEmpty = {
                pageSize: 'A4',
                pageMargins: [ 60, 40, 60, 40 ],
                content: [
                    {
                        text: [
                            {text: cb('doc_num'),alignment: 'right'},
                            '\n',
                            {text: cb('headtopic'),decoration: 'underline',alignment: 'center',fontSize:18,bold:true}
                        ]
                    }
                ]
            };
            function htmlTblLeave1(data){
                //ชื่อ-ตำแหน่ง หัวหน้า
                var txtBoss_name = (data.Boss_pname)?
                    '<p>.     ('+data.Boss_pname+') </p>':
                        '<p>.     (..............................................................) </p>';
                var txtBoss_poclass = ( (data.Boss_position_name)&&(data.Boss_class_position) )?
                    '<p>(ตำแหน่ง) '+(data.Boss_position_name+data.Boss_class_position)+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
               
                //ชื่อ-ตำแหน่ง คนออกคำสั่งให้ลาได้
                var bigBossAccept_name = (data.Groupwork_Boss_pname)?
                    '<p>.     ('+data.Groupwork_Boss_pname+') </p>':
                        '<p>.     (..............................................................) </p>';
                var bigBossAccept_poclass =  ( (data.Groupwork_Boss_position_name)&&(data.Groupwork_Boss_class_position) )?
                    '<p>(ตำแหน่ง) '+(data.Groupwork_Boss_position_name+data.Groupwork_Boss_class_position)+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
                //ผู้ตรวจสอบ
                var leaveCheckerMan_name = (data.leave_checker_man)?
                        '<p>.     ('+data.leave_checker_man+') </p>':
                        '<p>.     (..............................................................) </p>';
                var leaveCheckerMan_position = (data.leave_checker_man_position)?
                        '<p>(ตำแหน่ง) '+data.leave_checker_man_position+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
                //ตรวจสอบ ถ้าคนที่กำลัง online เป็นหัวหน้ากลุ่มภารกิจ
                /*
                if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){
                    txtBoss_name = '<p>.     (..............................................................) </p>';//data.skph_Boss_pname;
                    txtBoss_poclass = '<p>(ตำแหน่ง).............................................................</p>';//data.skph_Boss_position_name;
                    if(data.skph_Boss_pname){
                        bigBossAccept_name = '<p>.     ('+data.skph_Boss_pname+') </p>';
                        bigBossAccept_poclass =  '<p>(ตำแหน่ง)'+(data.skph_Boss_position_name)+'</p>';
                    }
                }
                */
                var x =
                '<table  style="font-size:16px;">'+
                    '<tr>'+
                        '<td>'+//col-1
                            '<table  style="font-size:16px;">'+
                                '<tr>'+//ตารางสรุป
                                    '<td>'+
                                        '<table border="1" style="font-size:16px;">'+
                                            '<tr>'+
                                                '<td>ลามาแล้ว<br>(วันทำการ)</td>'+
                                                '<td>ลาครั้งนี้<br>(วันทำการ)</td>'+
                                                '<td>รวมเป็น<br>(วันทำการ)</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td>'+data.leave_num3+'</td>'+
                                                '<td>'+data.leave_num4+'</td>'+
                                                '<td>'+data.leave_num5+'</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+//ผู้ตรวจสอบ
                                    '<td>'+
                                        '<p>&nbsp;</p>'+
                                        '<p>(ลงชื่อ).................................ผู้ตรวจสอบ</p>'+
                                        leaveCheckerMan_name+
                                        //'<p>.     (                                ) </p>'+
                                        leaveCheckerMan_position+
                                        //'<p>(ตำแหน่ง)</p>'+
                                        '<p>วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</td>'+
                        '<td>'+//col-2
                            '<table  style="font-size:16px;">'+
                                '<tr>'+//ความเห็นผู้บังคับบัญชา
                                     '<td>'+
                                        '<p><u>ความเห็นผู้บังคับบัญชา</u></p>'+     
                                        '<p>......................................................................................</p>'+
                                        '<p>......................................................................................</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>(ลงชื่อ)................................................................</p>'+
                                        //txtBoss_name+
                                        '<p>.     (..............................................................) </p>'+
                                        //txtBoss_poclass+
                                        '<p>(ตำแหน่ง).............................................................</p>'+
                                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+//ผอ เซ็น
                                    '<td>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p><u>คำสั่ง</u></p>'+   
                                        '<p>&nbsp;</p>'+  
                                        '<p>&#9744;&nbsp;อนุญาต&nbsp;&nbsp;&#9744;&nbsp;ไม่อนุญาต</p>'+  
                                        '<p>......................................................................................</p>'+
                                        '<p>......................................................................................</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>(ลงชื่อ)................................................................</p>'+
                                        //bigBossAccept_name+
                                        '<p>.     (..............................................................) </p>'+
                                        //bigBossAccept_poclass+
                                        '<p>(ตำแหน่ง).............................................................</p>'+
                                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</td>'+
                    '</tr>'+
                '</table>';
                return x;
            };
            function htmlTblLeave2(data){
                //ชื่อ-ตำแหน่ง หัวหน้า
                var txtBoss_name = (data.Boss_pname)?
                    '<p>.     ('+data.Boss_pname+') </p>':
                        '<p>.     (..............................................................) </p>';
                var txtBoss_poclass = ( (data.Boss_position_name)&&(data.Boss_class_position) )?
                    '<p>(ตำแหน่ง) '+(data.Boss_position_name+data.Boss_class_position)+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
                //ชื่อ-ตำแหน่ง คนออกคำสั่งให้ลาได้
                var bigBossAccept_name = (data.Groupwork_Boss_pname)?
                    '<p>.     ('+data.Groupwork_Boss_pname+') </p>':
                        '<p>.     (..............................................................) </p>';
                var bigBossAccept_poclass =  ( (data.Groupwork_Boss_position_name)&&(data.Groupwork_Boss_class_position) )?
                    '<p>(ตำแหน่ง) '+(data.Groupwork_Boss_position_name+data.Groupwork_Boss_class_position)+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
                //ผู้ตรวจสอบ
                var leaveCheckerMan_name = (data.leave_checker_man)?
                        '<p>.     ('+data.leave_checker_man+') </p>':
                        '<p>.     (..............................................................) </p>';
                var leaveCheckerMan_position = (data.leave_checker_man_position)?
                        '<p>(ตำแหน่ง) '+data.leave_checker_man_position+' </p>':
                        '<p>(ตำแหน่ง).............................................................</p>';
                
                //ตรวจสอบ ถ้าคนที่กำลัง online เป็นหัวหน้ากลุ่มภารกิจ
                /*
                if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){
                    txtBoss_name = '<p>.     (..............................................................) </p>';//data.skph_Boss_pname;
                    txtBoss_poclass = '<p>(ตำแหน่ง).............................................................</p>';//data.skph_Boss_position_name;
                    if(data.skph_Boss_pname){
                        bigBossAccept_name = '<p>.     ('+data.skph_Boss_pname+') </p>';
                        bigBossAccept_poclass =  '<p>(ตำแหน่ง)'+(data.skph_Boss_position_name)+'</p>';
                    }
                }
                */
                var x =
                '<table  style="font-size:16px;">'+
                    '<tr>'+
                        '<td>'+//col-1
                            '<table  style="font-size:16px;">'+
                                '<tr>'+//ตารางสรุป
                                    '<td>'+
                                        '<table border="1" style="font-size:16px;">'+
                                            '<tr>'+
                                                '<td>ลามาแล้ว<br>(วันทำการ)</td>'+
                                                '<td>ลาครั้งนี้<br>(วันทำการ)</td>'+
                                                '<td>รวมเป็น<br>(วันทำการ)</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td>'+data.leave_num1+'</td>'+
                                                '<td>'+data.leave_num2+'</td>'+
                                                '<td>'+data.leave_num3+'</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+//ผู้ตรวจสอบ
                                    '<td>'+
                                        '<p>&nbsp;</p>'+
                                        '<p>(ลงชื่อ).................................ผู้ตรวจสอบ</p>'+
                                        leaveCheckerMan_name+
                                        //'<p>.     (                             ) </p>'+
                                        leaveCheckerMan_position+
                                        //'<p>(ตำแหน่ง)</p>'+
                                        '<p>วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</td>'+
                        '<td>'+//col-2
                            '<table  style="font-size:16px;">'+
                                '<tr>'+//ความเห็นผู้บังคับบัญชา
                                     '<td>'+
                                        '<p><u>ความเห็นผู้บังคับบัญชา</u></p>'+     
                                        '<p>......................................................................................</p>'+
                                        '<p>......................................................................................</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>(ลงชื่อ)................................................................</p>'+
                                        //txtBoss_name+
                                        '<p>.     (..............................................................) </p>'+
                                        //txtBoss_poclass+
                                        '<p>(ตำแหน่ง).............................................................</p>'+
                                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                                '<tr>'+//ผอ เซ็น
                                    '<td>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p><u>คำสั่ง</u></p>'+   
                                        '<p>&nbsp;</p>'+  
                                        '<p>&#9744;&nbsp;อนุญาต&nbsp;&nbsp;&#9744;&nbsp;ไม่อนุญาต</p>'+  
                                        '<p>......................................................................................</p>'+
                                        '<p>......................................................................................</p>'+
                                        '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'+
                                        '<p>(ลงชื่อ)................................................................</p>'+
                                        //bigBossAccept_name+
                                        '<p>.     (..............................................................) </p>'+
                                        //bigBossAccept_poclass+
                                        '<p>(ตำแหน่ง).............................................................</p>'+
                                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                                    '</td>'+
                                '</tr>'+
                            '</table>'+
                        '</td>'+
                    '</tr>'+
                '</table>';
                return x;
            };
            
            //เงื่อนไขการ print แยกตาม leave_type
            if(cb('leave_type')==='1')
            {
                var tbl_leave1 = [
                    {text: 'สถิติการลาในปีงบประมาณนี้',fontSize:16,decoration: 'underline'}
                ];//,pageBreak: 'after'  สิ้นสุดหน้า leave = 1 
                ParseHtml(tbl_leave1,htmlTblLeave1(json_print));
                $.each(tbl_leave1,function(i,v){
                    doc_leave1.content.push(v);
                });
                pdfMake.createPdf(doc_leave1).open();
            }
            else if(cb('leave_type')==='2' || cb('leave_type')==='3' ||cb('leave_type')==='5')
            {
                var tbl_leave2 = [
                    {text: 'สถิติการลาในปีงบประมาณนี้',fontSize:16,decoration: 'underline'}
                ];//,pageBreak: 'after'  สิ้นสุดหน้า leave = 1 
                ParseHtml(tbl_leave2,htmlTblLeave2(json_print));
                $.each(tbl_leave2,function(i,v){
                    doc_leave2.content.push(v);
                });
                pdfMake.createPdf(doc_leave2).open();
            }
            else
            {
                pdfMake.createPdf(doc_leaveEmpty).open();
            }
        };
        //html & declare variable
        var content = $("#myContent").empty();
        var frmSchHtml = function(){
          var x='<div class="panel panel-default">'+
                    '<div class="panel-header">'+
                        '<nav class="navbar navbar-default" >'+
                            '<div class="container-fluid">'+
                                '<div class="navbar-header" >'+
                                    '<div class="input-group" style="display: inline-block;">'+ 
                                    '<a href="#leaveWaitMenu" class="btn btn-warning chayanon-btn-xlarge">&nbsp;<i class="fa fa-spinner fa-lg" aria-hidden="true"></i></a>'+
                                    '<small style="display:block;width: 100%;text-align: center;">วันลารออนุมัติ</small>'+
                                '</div>'+
                                    '<div class="input-group" style="display: inline-block;">'+ 
                                        '<a href="#leaveReport" class="btn btn-default chayanon-btn-xlarge chayanon_report_icon1">&nbsp;</a>'+
                                        '<small style="display:block;width: 100%;text-align: center;">รายงาน1</small>'+
                                    '</div>'+
                                    '<div class="col-xs-4 pull-right">'+
                                        '<div class="input-group">'+ 
                                            '<input type="text" name="schPerson" placeholder="ค้น Person..." class="form-control">'+
                                            '<span class="input-group-btn">'+
                                                '<a href="#sch" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></a>'+                                
                                            '</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</nav>'+
                    '</div>'+//panel header
                    '<div class="panel-body"></div>'+
                '</div>';//panel frmSch
            return x;
        };
        content.append(frmSchHtml);
        var header = content.find('.panel-header');
        var body = content.find('.panel-body');
        var txtSch = header.find('input[type=text]');
        var btnBindClick = $('<a href="#" data-dafter_sch="">b</a>');//เอาไว้ bind กับ CallbackAction
        
        btnBindClick.off('click').on('click',function(e){//console.log($(this).data('dafter_sch'));
            e.preventDefault();
            if($(this).data('dafter_sch')){
                CallbackAction($(this).data('dafter_sch'));
                e.stopPropagation();
            }
        });//เอา CallbackAction มาผูกกับปุ่ม ไว้ใช้หลังกด save
        
        //หลังจากได้ข้อมูลบุคลากรมาแล้วเลือกว่าจะ insert หรือ edit วันลา
        var CallbackAction = function(personData){
           // console.log(personData);
            var Tbl_header = function(personData){
                var x = 
                    '<p><h3>'+
                        personData.cid+'#'+personData.pname+personData.fname+' '+personData.lname+
                    '</h3></p>'+
                    '<h3 style="text-align:center";>ทะเบียนวันลา&nbsp;</h3>'+
                    '<div class="menu">'+
                        '<label class="btn btn-sm">ADD<i class="fa fa-plus" aria-hidden="true"></i></label>'+
                        
                        '<div class="row">'+ 
                            '<div class="col-xs-2">'+ 
                                '<select class="form-control">'+
                                    '<option value="all">วันทำการและวันหยุด</option>'+
                                    '<option value="Y">วันทำการ</option>'+
                                    '<option value="N">วันหยุด</option>'+
                                '</select>'+
                            '</div>'+
                            '<div class="col-xs-2">'+ 
                                '<select class="form-control">'+
                                    '<option value="all">ใบลาทั้งหมด</option>'+
                                    '<option value="E">รอพิจารณา</option>'+
                                    '<option value="Y">อนุมัติแล้ว</option>'+
                                    '<option value="N">ยกเลิกวันลา</option>'+
                                '</select>'+
                            '</div>'+
                            '<label>'+
                                '<span><i class="fa fa-star fa-2x" aria-hidden="true" style="color:lightblue;"></i>วันหยุด</span>&nbsp;&nbsp;'+
                                '<span><i class="fa fa-spinner fa-2x" aria-hidden="true" style="color:blue;"></i>รอพิจารณา</span>&nbsp;&nbsp;'+
                                '<span><i class="fa fa-check fa-2x" aria-hidden="true" style="color:#1E7007;"></i></i>อนุมัติแล้ว</span>&nbsp;&nbsp;'+
                                '<span><i class="fa fa-ban fa-2x" aria-hidden="true" style="color:red;"></i>ยกเลิกวันลา</span>'+
                            '</label>'+
                        '</div>'+
                    '</div>'+
                    '<table class="table table-striped table-bordered">'+
                      '<thead style="background-color:#DFF2F6;padding:0;margin:0;">'+
                        '<tr>'+
                            '<th  style="vertical-align:middle;text-align:center;padding:0;margin:0;" rowspan="2">ว/ด/ป</th>'+
                            '<th  style="text-align:center;padding:0;margin:0;" colspan="12">ประเภทการลา</th>'+
                        '</tr>'+
                        '<tr>'+
                            //class cl จะยึดชื่อ group เป็นหลัก  (join กับ leave_absence_name fieldชื่อว่า leave_absence_group
                            '<th class="cl1" style="text-align:center;padding:0;margin:0;">ป่วย</th>'+
                            '<th class="cl2" style="text-align:center;padding:0;margin:0;">กิจ</th>'+
                            '<th class="cl3" style="text-align:center;padding:0;margin:0;">พักผ่อน</th>'+
                            '<th class="cl5" style="text-align:center;padding:0;margin:0;">คลอดบุตร</th>'+
                            '<th class="cl6" style="text-align:center;padding:0;margin:0;">ช่วยภริยาคลอดบุตร</th>'+
                            '<th class="cl7" style="text-align:center;padding:0;margin:0;">อุปสมบท/ฮัจย์</th>'+
                            '<th class="cl9" style="text-align:center;padding:0;margin:0;">ศึกษาต่อ/ดูงาน</th>'+
                            '<th class="cl13" style="text-align:center;padding:0;margin:0;">สาย</th>'+
                            '<th class="cl14" style="text-align:center;padding:0;margin:0;">ไปราชการ</th>'+
                            '<th  style="text-align:center;padding:0;margin:0;">ไม่สแกนเข้า</th>'+
                            '<th  style="text-align:center;padding:0;margin:0;">ไม่สแกนออก</th>'+
                            '<th  style="text-align:center;padding:0;margin:0;">สแกนออกก่อน</th>'+
                            '<th  style="text-align:center;padding:0;margin:0;">แก้ไข</th>'+
                        '</tr>'+
                      '<thead>'+
                      '<tbody></tbody>'+
                    '</table>';  
                  return x;
            };//html หัวตารางทะเบียนวันลา
            var Tbl_tbody = function(leaveAllDataTbl){
                var x="";
                var transDate = function(date){
                    var a = date.split("-");
                    var y = parseInt(a[0])+543;
                    return a[2] + '/' + a[1] + '/' + y;
                };
                var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0,s7=0,s8=0,s9=0,s10=0,s11=0,s12=0;
                function CalcNumDays(l){
                    n = 0;
                    if(l.status_use==='Y'){
                        if(isNaN(parseFloat(l.leave_num_day))===false){
                            if( parseInt($.fn.DateToYearGov(onlineAdmin.dateNow2)) === parseInt(l.leave_year_gov)){
                                n = parseFloat(l.leave_num_day);
                            }
                        }
                    }
                    return n;
                };
                $.each(leaveAllDataTbl,function(i,v){
                    var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12;
                    var thalf;
                    if(v.leave_full_half_type_id==='2'){
                        thalf="(เช้า)";
                    }else if(v.leave_full_half_type_id==='3'){
                        thalf="(บ่าย)";
                    }else{
                        thalf="";
                    }
                    var tholiday = (v.holiday_on_off==='N')?'<i class="fa fa-star" aria-hidden="true" style="color:lightblue;"></i>':'';
                    var tstatususe;
                    if(v.status_use==='Y'){
                        tstatususe = '<i class="fa fa-check" aria-hidden="true" style="color:#1E7007;"></i>';
                    }else if(v.status_use==='N'){
                        tstatususe = '<i class="fa fa-ban" aria-hidden="true" style="color:red;"></i>';
                    }else if(v.status_use==='E'){
                        tstatususe = '<i class="fa fa-spinner" aria-hidden="true" style="color:blue;"></i>';
                    }

                    t1 = (v.leave_absence_group==='1')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ลาพักผ่อน
                    t2 = (v.leave_absence_group==='2')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ป่วย
                    t3 = (v.leave_absence_group==='3')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ลากิจ
                    t4 = (v.leave_absence_group==='5')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//คลอดบุตร**
                    t5 = (v.leave_absence_group==='6')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ช่วยภริยาคลอดบุตร
                    t6 = (v.leave_absence_group==='7')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//อุปสมบท**
                    t7 = (v.leave_absence_group==='9')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ศึกษาต่อ**
                    t8 = (v.leave_absence_group==='13')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//สาย
                    t9 = (v.leave_absence_group==='14')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ไปราชการ**
                    t10 = (v.leave_absence_group==='15')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ไม่สแกนออก**
                    t11 = (v.leave_absence_group==='16')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//สแกนออกก่อน**
                    t12 = (v.leave_absence_group==='17')? v.leave_num_day+thalf+'&nbsp;'+tstatususe:'';//ไม่สแกนเข้า**
                    
                    if(v.leave_absence_group==='1'){s1+=CalcNumDays(v);}
                    if(v.leave_absence_group==='2'){s2+=CalcNumDays(v);}
                    if(v.leave_absence_group==='3'){s3+=CalcNumDays(v);}
                    if(v.leave_absence_group==='5'){s4+=CalcNumDays(v);}
                    if(v.leave_absence_group==='6'){s5+=CalcNumDays(v);}
                    if(v.leave_absence_group==='7'){s6+=CalcNumDays(v);}
                    if(v.leave_absence_group==='9'){s7+=CalcNumDays(v);}
                    if(v.leave_absence_group==='13'){s8+=CalcNumDays(v);}
                    if(v.leave_absence_group==='14'){s9+=CalcNumDays(v);}
                    if(v.leave_absence_group==='15'){s10+=CalcNumDays(v);}
                    if(v.leave_absence_group==='16'){s11+=CalcNumDays(v);}
                    if(v.leave_absence_group==='17'){s12+=CalcNumDays(v);}
                    /*
                    s1 += ((v.leave_absence_group==='1')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาพักผ่อน
                    s2 += ((v.leave_absence_group==='2')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาป่วย
                    s3 += ((v.leave_absence_group==='3')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลากิจส่วนตัว
                    s4 += ((v.leave_absence_group==='5')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาคลอดบุตร
                    s5 += ((v.leave_absence_group==='6')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาช่วยเหลือภริยาที่คลอดบุตร
                    s6 += ((v.leave_absence_group==='7')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาอุปสมบทหรือลาไปประกอบพิธีฮัจญ์
                    s7 += ((v.leave_absence_group==='9')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ลาไปศึกษาฝึกอบรม ปฏิบัติการวิจัยหรือดูงาน
                    s8 += ((v.leave_absence_group==='13')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//สาย
                    s9 += ((v.leave_absence_group==='14')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ไปราชการ
                    s10 += ((v.leave_absence_group==='15')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//ไม่สแกนออก
                    s11 += ((v.leave_absence_group==='16')&&(v.status_use==='Y')) ? (parseFloat(v.leave_num_day)):0;//สแกนออกก่อน
                    */
                    x +=   
                    '<tr data-holiday="'+v.holiday_on_off+'" data-statususe="'+v.status_use+'">'+
                        '<td style="text-align:center;">'+transDate(v.leave_date)+'&nbsp;'+tholiday+'</td>'+
                        '<td class="cl1" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='2') ? v.serialuse:'')+'">'+t2+'</td>'+//ลาป่วย
                        '<td class="cl2" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='3') ? v.serialuse:'')+'">'+t3+'</td>'+//ลากิจ
                        '<td class="cl3" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='1') ? v.serialuse:'')+'">'+t1+'</td>'+//ลาพักผ่อน
                        '<td class="cl5" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='5') ? v.serialuse:'')+'">'+t4+'</td>'+//คลอดบุตร
                        '<td class="cl6" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='6') ? v.serialuse:'')+'">'+t5+'</td>'+//ช่วยภริยาคลอดบุตร
                        '<td class="cl7" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='7') ? v.serialuse:'')+'">'+t6+'</td>'+//อุปสมบท
                        '<td class="cl9" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='9') ? v.serialuse:'')+'">'+t7+'</td>'+//ลาไปศึกษาฝึกอบรม ปฏิบัติการวิจัยหรือดูงาน
                        '<td class="cl13" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='13') ? v.serialuse:'')+'">'+t8+'</td>'+//สาย
                        '<td class="cl14" style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='14') ? v.serialuse:'')+'">'+t9+'</td>'+//ไปราชการ
                        '<td  style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='17') ? v.serialuse:'')+'">'+t12+'</td>'+//ไม่สแกนเข้า
                        '<td  style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='15') ? v.serialuse:'')+'">'+t10+'</td>'+//ไม่สแกนออก
                        '<td  style="text-align:center;padding:0;margin:0;" data-serialuse="'+((v.leave_absence_group==='16') ? v.serialuse:'')+'">'+t11+'</td>'+//สแกนออกก่อน
                        '<td style="text-align:center;padding:0;margin:0;">'+
                           // '<a href="#" data-dedit='+jsonStr+' class="btn btn-warning">'+
                            '<a href="#" data-dedit='+v.id+' class="btn btn-warning">'+
                                '<i class="fa fa-pencil" aria-hidden="true"></i>'+
                            '</a>'+
                        '</td>'+
                    '</tr>';
                });
                    x+='<tr>'+
                        '<td style="text-align:right;padding:0;margin:0;">รวม</td>'+
                        '<td style="text-align:center;padding:0;margin:0;">'+((s2===0)?"-":s2)+'</td>'+//ลาป่วย
                        '<td style="text-align:center;padding:0;margin:0;">'+((s3===0)?"-":s3)+'</td>'+//ลากิจส่วนตัว
                        '<td style="text-align:center;padding:0;margin:0;">'+
                            '<a href="#" '+    
                               'data-toggle="popover" data-placement="top" '+
                               'title="ข้อมูลวันลาพักผ่อน" data-html="true" data-trigger="hover focus" '+
                               'data-content="" '+
                            '>'+((s1===0)?"-":s1)+'</a>'+//ลาพักผ่อน
                        '</td>'+
                        '<td style="text-align:center;padding:0;margin:0;">'+((s4===0)?"-":s4)+'</td>'+//ลาคลอดบุตร
                        '<td style="text-align:center;padding:0;margin:0;">'+((s5===0)?"-":s5)+'</td>'+//ลาช่วยเหลือภริยาที่คลอดบุตร
                        '<td style="text-align:center;padding:0;margin:0;">'+((s6===0)?"-":s6)+'</td>'+//ลาอุปสมบทหรือลาไปประกอบพิธีฮัจญ์
                        '<td style="text-align:center;padding:0;margin:0;">'+((s7===0)?"-":s7)+'</td>'+//ลาไปศึกษาฝึกอบรม ปฏิบัติการวิจัยหรือดูงาน
                        '<td style="text-align:center;padding:0;margin:0;">'+((s8===0)?"-":s8)+'</td>'+//สาย
                        '<td style="text-align:center;padding:0;margin:0;">'+((s9===0)?"-":s9)+'</td>'+//ไปราชการ
                        '<td style="text-align:center;padding:0;margin:0;">'+((s12===0)?"-":s12)+'</td>'+//ไม่สแกนเข้า
                        '<td style="text-align:center;padding:0;margin:0;">'+((s10===0)?"-":s10)+'</td>'+//ไม่สแกนออก
                        '<td style="text-align:center;padding:0;margin:0;">'+((s11===0)?"-":s11)+'</td>'+//สแกนออกก่อน
                    '</tr>';
                return x;
            };//html ส่วนของ tr ข้อมูลการลา
            var htmlPopVacationDetail = function(VacationSummary){
                var x = 
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">1)สะสมวันลาได้สูงสุด</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].max_keep_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">2)วันลาพักผ่อนคงเหลือปีที่แล้ว</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].summary_keep_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">3)วันลาพักผ่อนประจำปีนี้</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].now_year_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">4)ปีนี้มีสิทธิ์ลาพักผ่อน</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].sum_keep_and_now_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">6)ณ วันนี้ท่านลาพักผ่อนไปแล้ว</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].total_day_leave_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">7)วันลาพักผ่อนคงเหลือ คือ</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" class="bg-success" value="'+VacationSummary[0].net_numday+'" size="6" maxlength="6"></div>'+
                '</div>';
               return x;
            };//html popover สรุปวันลาพักผ่อน
            
            function saveLeave(leave_select,leave_all){
                //modal config
                var txtmodal = function(){
                    var txt = '<div class="modal" data-dupd="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                      '<div class="modal-dialog modal-lg" role="document">'+
                          '<div class="modal-content">'+
                              '<div class="modal-header"></div>'+
                              '<div class="modal-body"></div>'+
                              '<div class="modal-footer">'+
                                  '<span></span>'+
                                  '<button type="button"  class="btn bg-success" style="color:black;" data-dismiss="modal">บันทึก</button>'+
                                  '<button type="button"  class="btn bg-danger" style="color:black;" data-dismiss="modal">ปิด</button>'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                    '</div>';
                    return txt;  
                };
                var modal = $(txtmodal());
                modal.modal({
                    keyboard:false,
                    backdrop:'static'
                }).modal('hide');
                modal.on('hidden.bs.modal', function(){
                    $(this)
                        .find("input,textarea,select")
                        .val('')
                        .end()
                        .find("input[type=checkbox], input[type=radio]")
                        .prop("checked", "")
                        .end();
                    $(this).find("option:selected",this).removeAttr('selected');
                    $(this).data('bs.modal', null);
                });
                var html_modalheader = function(){
                    var x = 
                        '<div class="panel panel-default">'+
                            '<div class="panel-header">'+
                                '<p>'+
                                    '<h3>'+personData.cid+'#'+personData.pname+personData.fname+' '+personData.lname+'</h3>'+
                                '</p>'+
                                '<p style="text-align:right;">'+
                                    '<div class="input-group">'+
                                        '<span>สถานะการใช้งาน</span>'+
                                        '<div  class="btn-group" data-toggle="buttons" >'+
                                            '<label class="btn">'+
                                                '<input type="radio" value="Y" name="rdo_RecordUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> เปิดใช้งาน</span>'+
                                            '</label>'+
                                            '<label class="btn">'+
                                                '<input type="radio" value="N" name="rdo_RecordUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> ลบ</span>'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+
                                '</p>'+
                            '</div>'+
                            '<div class="panel-body">'+
                                '<h3 style="text-align:center;">กรอกข้อมูลการลา</h3>'+
                                '<div class="row">'+//nth-child(1)
                                    '<div class="col-md-4">'+
                                        '<div class="input-group">'+
                                            '<span>ช่วงวันที่มีความต่อเนื่องหรือไม่&nbsp;&nbsp;</span>'+
                                            '<div class="btn-group">'+
                                                '<a class="btn btn-primary btn-sm RDO-yes-no-notActive" data-toggle="rdotog" data-title="Y">ต่อเนื่อง</a>'+
                                                '<a class="btn btn-primary btn-sm RDO-yes-no-notActive" data-toggle="rdotog" data-title="N">ไม่ต่อเนื่อง</a>'+
                                            '</div>'+
                                            '<input type="hidden" id="rdotog">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row">'+//nth-child(2)
                                    '<div class="col-md-4">'+
                                        '<div class="form-group">'+                            
                                            '<label>Serial Number(Generate)</label>'+
                                            '<input type="text" name="serialgen" class="form-control">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-4">'+
                                        '<div class="form-group">'+                            
                                            '<label>ระบุ Serial Number(ลาครั้งเดียวกัน)</label>'+
                                            '<input type="text" name="serialuse" class="form-control">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+//row

                            '</div>'+//panel-body
                        '</div>';//panel    
                    return x;
                };
                var html_modalbody = function(LeaveFullHalfType,LeaveAbsenceName){
                    var x = 
                        '<div class="container">'+
                            '<div class="row">'+//nth-child(1)
                                '<div class="col-md-4">'+
                                    '<div class="form-group">'+                            
                                        '<label>วันที่</label>'+
                                        '<input type="text" name="Leavedate1" class="form-control"  placeholder="วันที่" autocomplete="off">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4">'+
                                    '<div class="form-group">'+                            
                                        '<label>วันที่</label>'+
                                        '<input type="text" name="Leavedate2" class="form-control"  placeholder="วันที่" autocomplete="off">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//row
                            '<div class="row">'+//nth-child(2)
                                '<div class="col-md-8">'+
                                    '<label>&nbsp</label>'+
                                    '<div class="input-group">'+  
                                        '<div  class="btn-group" data-toggle="buttons" >';
                                            $.each(LeaveFullHalfType,function(i,v){
                                                x+='<label class="btn">'+
                                                        '<input type="radio" value="'+v.id+'" name="rdo_halffullday" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> '+v.name+'</span>'+
                                                    '</label>';
                                            });
                                     x+='</div>'+
                                    '</div>'+  
                                '</div>'+    
                            '</div>'+
                            '<div class="row">'+//nth-child(3)
                                '<div class="col-md-4 no-gutter noradius">'+
                                    '<label>ประเภทการลา</label>'+
                                    '<div class="form-group">'+ 
                                        '<select class="form-control noradius" id="LeaveAbsenceName">'+
                                            '<option value="0">กรุณาเลือกประเภทการลา</option>';
                                            $.each(LeaveAbsenceName,function(i,v){
                                                x+='<option  value="'+v.id+'">'+
                                                        '<i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> '+v.leave_absence_name+'</span>'+
                                                    '</option>';
                                            });
                                    x+= '</select>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-2 no-gutter">'+
                                    '<label>ประเภทไปราชการ</label>'+
                                    '<div class="form-group">'+ 
                                        '<select class="form-control noradius" id="selTypeGogov">'+
                                            '<option value="ประชุม">ประชุม</option>'+
                                            '<option value="อบรม">อบรม</option>'+
                                            '<option value="สัมมนา">สัมมนา</option>'+
                                            '<option value="ไปเป็นวิทยากร">ไปเป็นวิทยากร</option>'+
                                            '<option value="ไปตรวจราชการ">ไปตรวจราชการ</option>'+
                                            '<option value="อื่นๆ">อื่นๆ</option>'+
                                        '</select>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-4 no-gutter">'+
                                    '<label>ไปราชการเรื่อง</label>'+
                                    '<div class="form-group">'+ 
                                        '<input type="text" class="form-control noradius" id="txtGogovTopic">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="row">'+//nth-child(4)
                                '<div class="col-md-6">'+
                                    '<div class="input-group">'+
                                        '<span>การดำเนินการ</span>'+
                                        '<div  class="btn-group" data-toggle="buttons" >'+
                                            '<label class="btn">'+
                                                '<input type="radio" value="Y" name="rdo_StatusUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> นับเป็นวันลา</span>'+
                                            '</label>'+
                                            '<label class="btn">'+
                                                '<input type="radio" value="N" name="rdo_StatusUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> ยกเลิกวันลา</span>'+
                                            '</label>'+
                                             '<label class="btn">'+
                                                '<input type="radio" value="E" name="rdo_StatusUse" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> รอพิจารณา</span>'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-md-6">'+
                                    '<label>หมายเหตุ</label>'+
                                    '<div class="input-group">'+ 
                                        '<input type="text" name="txtNote" class="form-control">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
                    return x;
                };//html ฟอร์มกรอกข้อมูลการลา
                var modalheader = modal.find('.modal-header').empty(),
                    modalbody = modal.find('.modal-body').empty(),
                    modalfooter = modal.find('.modal-footer');
                function callPositionName(poCode,poData){
                    var returnV = "";
                        if(poData.length>0){
                            $.each(poData,function(i,v){
                               if(v.position_code===poCode){
                                   returnV = v.position_name;
                               } 
                            });
                        }
                    return returnV;
                };
                function callClassPositionData(Ccode,Cdata){
                    var returnV = "";
                        if(Cdata.length>0){
                            $.each(Cdata,function(i,v){
                               if(v.class_position_shortname===Ccode){
                                   returnV = v.class_position_type_name2;
                               } 
                            });
                        }
                    return returnV;
                };
                function callDepData(KeyToChk,AjaxData,FieldName){//keyที่จะใช้ตรวจสอบ , ajax defered, ชื่อ field ที่จะเอาข้อมูลนั้น
                    var returnV = "";
                    if(typeof AjaxData ==='object'){
                        if(AjaxData.length>0){
                            $.each(AjaxData,function(i,v){
                                var key = Object.keys(v);
                                if(v.dep_code===KeyToChk){//จับคู่ key ว่าตรงข้อมูลที่ต้องการหรือไม่
                                    if($.inArray(FieldName,key)!==-1){//ถ้ามี ชื่อ field นี้อยู่จริง
                                        returnV = v[FieldName];
                                    }
                                } 
                            });
                        }
                    }
                    return returnV;
                };
                function callPersonData(KeyToChk,AjaxData,FieldName){//keyที่จะใช้ตรวจสอบ , ajax defered, ชื่อ field ที่จะเอาข้อมูลนั้น
                    var returnV = "";
                    if(typeof AjaxData ==='object'){
                        if(AjaxData.length>0){
                            $.each(AjaxData,function(i,v){
                                var key = Object.keys(v);
                                if(v.cid===KeyToChk){//จับคู่ key ว่าตรงข้อมูลที่ต้องการหรือไม่
                                    if($.inArray(FieldName,key)!==-1){//ถ้ามี ชื่อ field นี้อยู่จริง
                                        returnV = v[FieldName];
                                    }
                                } 
                            });
                        }
                    }
                    return returnV;
                };
                function callGroupWorkData(KeyToChk,AjaxData,FieldName){//keyที่จะใช้ตรวจสอบ , ajax defered, ชื่อ field ที่จะเอาข้อมูลนั้น
                    var returnV = "";
                    if(typeof AjaxData ==='object'){
                        if(AjaxData.length>0){
                            $.each(AjaxData,function(i,v){
                                var key = Object.keys(v);
                                if(v.groupwork_code===KeyToChk){//จับคู่ key ว่าตรงข้อมูลที่ต้องการหรือไม่
                                    if($.inArray(FieldName,key)!==-1){//ถ้ามี ชื่อ field นี้อยู่จริง
                                        returnV = v[FieldName];
                                    }
                                } 
                            });
                        }
                    }
                    return returnV;
                };
                function callBossSkphData(AjaxData,FieldName){//keyที่จะใช้ตรวจสอบ , ajax defered, ชื่อ field ที่จะเอาข้อมูลนั้น
                    var returnV = "";
                    if(typeof AjaxData ==='object'){
                        if(AjaxData.length>0){
                            $.each(AjaxData,function(i,v){
                                var key = Object.keys(v);
                                if($.inArray(FieldName,key)!==-1){//ถ้ามี ชื่อ field นี้อยู่จริง
                                    returnV = v[FieldName];
                                }
                            });
                        }
                    }
                    return returnV;
                };
                function headPaper(leaveType){
                    var obj = {
                        doc_num:'',
                        headtopic:'',
                        topic:''
                    };
                    switch(leaveType) {
                        case '1'://ลาพักผ่อน
                            obj.doc_num = '0899-401-034';
                            obj.headtopic = 'แบบใบลาพักผ่อน';
                            obj.topic = 'ขอลาพักผ่อน';
                        break;
                        case '2'://ลาป่วย
                            obj.doc_num = '0899-401-035';
                            obj.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            obj.topic = 'ขอลาป่วย';
                        break;
                        case '3'://ลากิจส่วนตัว
                            obj.doc_num = '0899-401-035';
                            obj.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            obj.topic = 'ขอลากิจส่วนตัว';
                        break;
                        case '5'://ลาคลอดบุตร
                            obj.doc_num = '0899-401-035';
                            obj.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            obj.topic = 'ขอลาคลอดบุตร';
                        break;
                        default:
                            obj.doc_num = '0000-000-000';
                            obj.headtopic = 'แบบฟอร์มนี้ไม่สามารถใช้เป็น electronic ได้';
                            obj.topic = '';
                        break;
                    }
                    return obj;
                }
                function callVacationData(AjaxData,FieldName){
                    var returnV = "";
                    if(typeof AjaxData ==='object'){
                        if(AjaxData.length>0){
                            $.each(AjaxData,function(i,v){
                                var key = Object.keys(v);
                                if($.inArray(FieldName,key)!==-1){//ถ้ามี ชื่อ field นี้อยู่จริง
                                    returnV = v[FieldName];
                                }
                            });
                        }
                    }
                    return returnV;
                };
                function L1L2_compare(dataSendDB,vcs,L1,L2,f){
                    //dataSendDB=ข้อมูลจากหน้าจอที่ส่งไปบันทึกลงฐาน,
                    //vcs=สถิติการลาพักผ่อน,
                    //L1=leave_select=ข้อมูลการลากรณีเลือก id, ถ้า insert จะเป็น object = null 
                    //L2=leave_all=ข้อมูลการลาทั้งหมดของคนๆนี้,
                    //f=function module ที่จะใช้
                    var returnV = '';
                    var L1_leave_absence_id = ((L1)&&(L1['leave_absence_id']))?L1['leave_absence_id']:dataSendDB.LeaveAbsenceName;
                    function serialgenArr(){
                        var serialgenArr=[];
                        if(L2){
                            $.each(L2,function(i,v){//หา serialgen ที่ไม่ซ้ำกัน
                                if(
                                    (  parseInt(v.leave_absence_id)=== parseInt(L1_leave_absence_id)  ) && 
                                    (v.status_use==='Y') && (v.record_use==='Y')    
                                ){
                                    if($.inArray(v.serialgen,serialgenArr)===-1){//เอา serialgen ที่ไม่ซ้ำกัน
                                        serialgenArr.push(v.serialgen);
                                    }
                                }
                            });
                        }
                        return serialgenArr;
                    };//หา serialgen ที่ไม่ซ้ำกัน
                    function totalLeaved(){
                        var NtotalLeaved = 0;
                        if(L2){
                            if(L1_leave_absence_id){
                                $.each(L2,function(i,v){
                                    if(  
                                       (  parseInt(v.leave_absence_id)=== parseInt(L1_leave_absence_id)  ) && 
                                       (v.status_use==='Y') && (v.record_use==='Y')
                                    ){
                                        NtotalLeaved +=parseFloat(v.leave_num_day);
                                    }
                                });
                            }
                        }
                        return NtotalLeaved;
                    };//หาผลรวมของวันที่ลาประเภทนั้น เช่น ลาป่วยมาแล้วเท่าไหร่ในปีงบปัจจุบัน
                    
                    if(typeof L2 !=='string'){//console.log(L2);//ถ้าไม่พบ เป็น string data not found
                        switch(f){
                            case 'f1'://หาผลรวมของวันที่ลาประเภทนั้น เช่น ลาป่วยมาแล้วเท่าไหร่ในปีงบปัจจุบัน
                                returnV = totalLeaved();
                            break;
                            case 'f2'://หาวันที่ลาครั้งล่าสุด
                                var serialgenF2=serialgenArr(),dd=[];
                                $.each(L2,function(i,v){//หาวันที่ทั้งหมดของการลาประเภทนั้นๆ ด้วยเงื่อนไข serialuse ที่ไม่ซ้ำกัน
                                    if(
                                       (  parseInt(v.leave_absence_id)=== parseInt(L1_leave_absence_id)  ) && 
                                        (v.status_use==='Y') && (v.record_use==='Y')       
                                    ){
                                        if( $.inArray(v.serialgen,serialgenF2)!==-1  ){//เอาวันที่ทั้งหมดของการลาประเภทนั้นๆ ไว้ใน array
                                            dd.push(v.leave_date);    
                                        }    
                                    } 
                                });
                                //เอาวันที่รองสุดท้าย กับวันสุดท้ายของการลาประเภทนั้นๆ
                                if(dd.length>0){
                                    var last = dd.length -1;
                                    var llast = last -1;
                                    if( (llast<0) || (llast >= last) ){
                                        llast = 0;
                                    }
                                    returnV = dd[llast]+','+dd[last];
                                }//else  returnV = $.fn.formatDate3(new Date()) + ',' + $.fn.formatDate3(new Date());
                            break;
                            case 'f3'://หาค่า leave_num1 - 5 สำหรับ json_print
                                    var serialgenF3;
                                    var leave_num1=0,leave_num2=0,leave_num3=0,leave_num4=0,leave_num5=0;
                                    var f3TotalLeave = 0;//ลาครั้งนี้เท่าไหร่
                                    var arrDays = dataSendDB.days;//วันที่หน้าจอที่คลิก ถ้า edit จะได้ length=1
                                    var F3arrDays = [];//กรณี Edit ต้องเอาวันที่หน้าจอที่คลิก ย้อนไปหาค่า serialgen เพื่อหา array วันที่
                                    var numday = 0;//กรณี insert ลาครั้งนี้เอาจากหน้าจอได้เลย
                                    var txtDatetime=[];//เช่น 17 ก.พ. 63(ครึ่งวันบ่าย),18 ก.พ. (เต็มวัน)
                                    var txtHalf = ['เต็มวัน','ครึ่งวันเช้า','ครึ่งวันบ่าย'];
                                    if(L1){//กรณี Edit ต้องเอาวันที่หน้าจอที่คลิก ย้อนไปหาค่า serialgen เพื่อหา array วันที่
                                        serialgenF3=serialgenArr();
                                        var F3serialgenChk;
                                        //หา serialgen จากวันที่ ที่คลิกเลือก edit
                                        $.each(L2,function(i,v){
                                            if((v.leave_date).toString()===arrDays.toString()){
                                                F3serialgenChk = v.serialgen;
                                            } 
                                        });
                                        //หาวันที่ทั้งหมด ที่มี serialgen เดียวกัน
                                        if(F3serialgenChk){
                                            $.each(L2,function(i,v){
                                                if(v.serialgen === F3serialgenChk){
                                                    var parseN = parseInt(v.leave_full_half_type_id)-1;
                                                    F3arrDays.push({
                                                        day:v.leave_date,
                                                        leave_num_day:v.leave_num_day,
                                                        full_half:v.leave_full_half_type_id,
                                                        txtDatetime:$.fn.StrThaiDate3(new Date(v.leave_date))+'('+txtHalf[parseN]+')'
                                                    });
                                                }
                                            });
                                            if(F3arrDays.length>0){
                                                $.each(F3arrDays,function(i,v){
                                                    f3TotalLeave +=parseFloat(v.leave_num_day);
                                                    txtDatetime.push(v.txtDatetime);
                                                });
                                            } 
                                        } 
                                    }else{//กรณี insert ลาครั้งนี้เอาจากหน้าจอได้เลย
                                        if(arrDays.length>0){
                                            $.each(arrDays,function(i,v){
                                                numday = (dataSendDB.fullhalf==='1')?1:0.5;
                                                f3TotalLeave +=parseFloat(numday);
                                            });
                                        } 
                                    }
                                    //return string leave_num 1 -5
                                    if(L1_leave_absence_id==='1'){//ลาพักผ่อน
                                        leave_num1 = parseFloat(callVacationData(vcs,'sum_keep_and_now_numday')) - parseFloat(callVacationData(vcs,'now_year_numday'));//มีวันลาพักผ่อนสะสม
                                        leave_num2 = parseFloat(callVacationData(vcs,'sum_keep_and_now_numday'));//พักผ่อนสะสมบวกประจำปี
                                        leave_num3 = parseFloat(callVacationData(vcs,'total_day_leave_numday'));//ลามาแล้ว(วันทำการ)
                                        leave_num4 = f3TotalLeave;//ลาครั้งนี้
                                        leave_num5 = leave_num3+leave_num4;//รวมเป็น(วันทำการ)
                                    }else if(L1_leave_absence_id==='2'||L1_leave_absence_id==='3'||L1_leave_absence_id==='5'){
                                        leave_num1 = totalLeaved();//ลาป่วย กิจ คลอด มาแล้วกี่วัน
                                        leave_num2 = f3TotalLeave;//ลาครั้งนี้
                                        leave_num3 = leave_num1+leave_num2;//รวมเป็น(วันทำการ)
                                    }
                                    returnV = ([leave_num1,leave_num2,leave_num3,leave_num4,leave_num5]).toString();
                            break;
                            case 'f4'://หาค่า txtDatetime สำหรับ json_print
                                var serialgenF4;
                                var F4arrDays = [];
                                var F4txtHalf = ['เต็มวัน','ครึ่งวันเช้า','ครึ่งวันบ่าย'];
                                if(L1){//กรณี Edit ต้องเอาวันที่หน้าจอที่คลิก ย้อนไปหาค่า serialgen เพื่อหา array วันที่
                                        serialgenF4=serialgenArr();
                                        var F4serialgenChk;
                                        var F4parseNUpd = 0;
                                        //หา serialgen จากวันที่ ที่คลิกเลือก edit
                                        $.each(L2,function(i,v){
                                            if((v.leave_date).toString()===(dataSendDB.days).toString()){
                                                F4serialgenChk = v.serialgen;
                                            } 
                                        });
                                        //หาวันที่ทั้งหมด ที่มี serialgen เดียวกัน
                                        if(F4serialgenChk){
                                            $.each(L2,function(i,v){
                                                if(v.serialgen === F4serialgenChk){//console.log(v.leave_full_half_type_id);
                                                    F4parseNUpd = parseInt(v.leave_full_half_type_id) - 1;
                                                    F4arrDays.push( $.fn.StrThaiDate3(new Date(v.leave_date))+'('+F4txtHalf[F4parseNUpd]+')' );
                                                }
                                            });
                                        } 
                                    }else{//กรณี insert txtDatetime เอาจากหน้าจอได้เลย
                                        var F4parseNIns = 0;
                                        if((dataSendDB.days).length>0){
                                            $.each((dataSendDB),function(i,v){
                                                if(i==='fullhalf'){
                                                    F4parseNIns = parseInt(v) - 1;
                                                }
                                            });
                                            $.each((dataSendDB),function(i,v){
                                                if(i==='days'){
                                                    if(typeof v==='object'){
                                                        $.each(v,function(j,k){
                                                            F4arrDays.push( $.fn.StrThaiDate3(new Date(k))+'('+F4txtHalf[F4parseNIns]+')'  );
                                                        });
                                                    }
                                                }
                                            });
                                        } 
                                    }
                                returnV = F4arrDays.toString();
                            break;
                        }//switch
                    }//if !== string
                    return returnV;
                };
                //event    
                $.when(
                    $.fn.def_LeaveFullHalfType(),
                    $.fn.def_LeaveAbsenceName(),
                    $.fn.def_PositionData(),
                    $.fn.def_ClassPositionData(),
                    $.fn.def_DepData(),
                    $.fn.def_GroupWorkData(),
                    $.fn.def_PersonData(),
                    $.fn.def_Boss_skph(),
                    $.fn.def_LeaveAbsenceVacationSummary(personData.id)
                ).done(function(
                    LeaveFullHalfType,
                    LeaveAbsenceName,
                    positionData,
                    classPositionData,
                    depData,
                    groupWorkData,
                    ObjPersonData,
                    bossSkphData,
                    VacationSummary
                ){
                    modalheader.empty().append(html_modalheader);
                    modalbody.empty().append(html_modalbody(LeaveFullHalfType,LeaveAbsenceName));
                    
                    modal.modal('show');//show modal
                    
                    var ch1 = modalbody.find('.container:nth-child(1)');
                    var date1 = ch1.find("input[name='Leavedate1']"),
                        date2 = ch1.find("input[name='Leavedate2']");
                        date1.ConfigDatePicker();
                        date2.ConfigDatePicker();
                    var serialgen = $("input[name='serialgen']"),
                        serialuse = $("input[name='serialuse']");
                        serialuse.prop('disabled',true);
                    var serialuseVal = "";

                    //clear select ประเภทการลาให้เป็น 0 ก่อนทุกครั้งที่ show modal    
                    var leaveTypeVal = '0';     
                        $('select#LeaveAbsenceName option:selected',this).removeAttr('selected');
                        $("select#LeaveAbsenceName option[value='0']").prop('selected', true);
                    $("select#LeaveAbsenceName").change(function(){
                        leaveTypeVal = $(this).val();
                    });    
                    //กรณีไปราชการ ให้ระบุประเภทไปราชการ
                    var selTypeGogov = 'อบรม';
                    $('select#selTypeGogov option:selected',this).removeAttr('selected');
                        $("select#selTypeGogov option[value='อบรม']").prop('selected', true);
                    $("select#selTypeGogov").change(function(){
                        selTypeGogov = $(this).val();
                    });

                    //gen เลข serial เพื่อเอาไว้กรอกว่าเป็นลาครั้งเดียวกัน
                    var currdatetime = $.fn.CurrDateTimeCode();
                    serialgen.val($("select#LeaveAbsenceName option:selected").val()+'x'+ currdatetime);
                    $("select#LeaveAbsenceName").change(function(e){
                        serialgen.val($(this).val()+'x'+ currdatetime);
                        if(typeof $(this).val() !=='undefined' && $(this).val() !=='0'){
                            serialuse.prop('disabled',false);
                        }else{
                            serialuse.prop('disabled',true);
                        }
                        e.stopPropagation();
                    });
                    serialuse.on('blur',function(){
                        serialuseVal = $(this).val();
                    });
                    
                    //กรณีมีข้อมูลมา (กด edit) ให้ set element ตาม object objEdit
                    if(leave_select){//console.log(leave_select);
                        var objEdit = leave_select;
                        //จัดการเรื่องวันที่
                        $('#rdotog').val('N');
                        $('a[data-toggle="rdotog"][data-title="N"]').removeClass('RDO-yes-no-notActive').addClass('RDO-yes-no-Active');
                        date1.prop('disabled',true);
                        date2.data('date_true',objEdit.leave_date);
                        date2.val($.fn.StrThaiDate(new Date(objEdit.leave_date)));
                        //เต็มวัน ครึ่งวันเช้า ครึ่งวันบ่าย
                        $("input[name='rdo_halffullday'][value=" + objEdit.leave_full_half_type_id + "]").prop('checked', true);
                        //ประเภทการลา 
                        $("select#LeaveAbsenceName option[value='"+objEdit.leave_absence_id+"']").prop('selected', true);
                        leaveTypeVal = objEdit.leave_absence_id;
                        //ใบลานี้เปิดใช้งานหรือไม่
                        $("input[name='rdo_StatusUse'][value=" + objEdit.status_use + "]").prop('checked', true);
                        //หมายเหตุ
                        $("input[name='txtNote']").val(objEdit.leave_txt_note);
                        //serial
                        (objEdit.serialgen) ? serialgen.val(objEdit.serialgen) : serialgen.val(leaveTypeVal+'x'+ currdatetime);
                        (objEdit.serialuse) ? serialuse.prop('disabled',true):serialuse.prop('disabled',false);
                        serialuse.val(objEdit.serialuse);
                        //สถานะการใช้งาน record (record_use)
                        (objEdit.record_use)?$("input[name='rdo_RecordUse'][value='"+objEdit.record_use+"']").prop('checked', true):$("input[name='rdo_RecordUse'][value='Y']").prop('checked',true);
                    }
                    
                    //ฟังก์ชันตรวจสอบข้อมูลก่อนบันทึก
                    var requiredSend = function(data){
                        var x;
                        if(data.cont){
                            if(data.cont==='Y'){//วันที่ต่อเนื่องต้องกรอกวันที่ 2 อัน
                                if(data.date1 && data.date2 && data.date1mass && data.date2mass){
                                    var datediff = $.fn.DateDiff(data.date1,data.date2);
                                    if(datediff>=0){
                                        if(data.fullhalf && data.statusUse && (data.LeaveAbsenceName!=='0') && (typeof data.LeaveAbsenceName!=='undefined') ){
                                            x=data;
                                        }else{
                                            x = 'ยังกรอกข้อมูลไม่ครบ#'+data.fullhalf+','+data.statusUse+','+data.LeaveAbsenceName;
                                        }
                                    }else{
                                        x = 'กำหนดช่วงวันที่ไม่ถูกต้อง';
                                    }
                                }else{
                                    x = 'ช่วงวันที่ต่อเนื่องต้องกรอกวันที่ให้ครบ!!';
                                }
                            }else{
                                if(data.date2mass && data.date2){
                                    if( data.fullhalf && data.statusUse && (data.LeaveAbsenceName!=='0') && (typeof data.LeaveAbsenceName!=='undefined') ){
                                        x=data;
                                    }else{
                                        x = 'ยังกรอกข้อมูลไม่ครบ#'+data.fullhalf+','+data.statusUse+','+data.LeaveAbsenceName;
                                    }
                                }else{
                                    x= 'กรุณาระบุวันที่';
                                }
                            }
                        }else{
                            x= 'เลือกช่วงวันที่ว่าต่อเนื่องหรือไม่!!';
                        }
                        return x;
                    };

                    //วันที่ต่อเนื่องหรือไม่ + บันทึกลงฐาน
                    modalheader.find('a[data-toggle="rdotog"]').off('click').on('click', function(e){
                        e.stopPropagation();
                        var sel = $(this).data('title');//ค่าที่เลือก
                        var tog = $(this).data('toggle');
                        $('#'+tog).prop('value', sel);//set ค่าที่เลือก
                        //สลับสีเลือก กับ ไม่เลือก
                        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('RDO-yes-no-Active').addClass('RDO-yes-no-notActive');
                        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('RDO-yes-no-notActive').addClass('RDO-yes-no-Active');                       
                        if($('#rdotog').val()==='Y'){//วันที่ต่อเนื่อง
                            date1.prop('disabled',false);
                            date2.prop('disabled',false);
                            date1.val("");date1.data('date_true','');
                            date2.val("");date2.data('date_true','');
                        }else{
                            date1.prop('disabled',true);
                            date2.prop('disabled',false);
                            date1.val("");date1.data('date_true','');
                        }
                    });//วันที่ต่อเนื่องหรือไม่
                    modalfooter.find('button').first().click(function(e){
                        var $this = $(e.target);
                        var msg = $(this).parent().find('span').css({'color':'red'});
                        var json_print_edit = (leave_select&&leave_select.json_print)?
                                $.parseJSON(leave_select.json_print)
                                :{};
                        var boss_cid = (personData.dep_code)?callDepData(personData.dep_code,depData,'head_dep'):'';
                        var boss_position_code = (boss_cid)?callPersonData(boss_cid,ObjPersonData,'position_code'):'';
                        var boss_class_position_code = (boss_cid)?callPersonData(boss_cid,ObjPersonData,'class_position_shortname'):'';
                        var groupwork_boss_cid = (personData.groupwork)?callGroupWorkData(personData.groupwork,groupWorkData,'head_groupwork'):'';
                        var groupwork_boss_position_code = (groupwork_boss_cid)?callPersonData(groupwork_boss_cid,ObjPersonData,'position_code'):'';
                        var groupwork_boss_class_position_code = (groupwork_boss_cid)?callPersonData(groupwork_boss_cid,ObjPersonData,'class_position_shortname'):'';
                        var d = {
                            'ins_upd':(leave_select) ? 'upd':'ins',
                            'id_upd':(leave_select) ? objEdit.id:'0',
                            'person_id':personData.id,
                            'cont':$('#rdotog').val(),
                            'date1':date1.data('date_true'),
                            'date2':date2.data('date_true'),
                            'days':($('#rdotog').val()==='Y')? $.fn.DaysBetweenDate(date1.data('date_true'),date2.data('date_true')):[date2.data('date_true')],
                            'date1mass':date1.val(),
                            'date2mass':date2.val(),
                            'fullhalf':$("input[name='rdo_halffullday']:checked").val(),
                            'LeaveAbsenceName':leaveTypeVal,
                            'statusUse':$("input[name='rdo_StatusUse']:checked").val(),
                            'leave_txt_note':$("input[name='txtNote']").val(),
                            'serialgen':serialgen.val(),
                            'serialuse':serialuseVal,
                            'record_use':$("input[name='rdo_RecordUse']").is(':checked') ? $("input[name='rdo_RecordUse']:checked").val() :'Y'
                        };
                        var json_print = {
                            leave_type:d.LeaveAbsenceName,
                            date_write:    (  (json_print_edit.length>0)&&(json_print_edit.date_write)   ) ? json_print_edit.date_write : $.fn.StrThaiDate5(new Date()),
                            person_id:d.person_id,
                            pname:personData.pname+personData.fname+' '+personData.lname,
                            position_name:callPositionName(personData.position_code,positionData),
                            class_position:callClassPositionData(personData.class_position_shortname,classPositionData),
                            dep_name:callDepData(personData.dep_code,depData,'dep_name'),
                            groupwork_name:callGroupWorkData(personData.groupwork,groupWorkData,'groupwork_name'),
                            contact_addr:(  (json_print_edit.length>0)&&(json_print_edit.contact_addr)    )?json_print_edit.contact_addr:''    ,
                            contact_tel:(   (json_print_edit.length>0)&&(json_print_edit.contact_tel)    )?json_print_edit.contact_tel:'',
                            leave_txt_note:(  (json_print_edit.length>0)&&(json_print_edit.leave_txt_note)   )?json_print_edit.leave_txt_note:''    ,
                            leave_checker_man:(onlineAdmin.pname)?onlineAdmin.pname:'',
                            leave_checker_man_position:(onlineAdmin.position_name)?onlineAdmin.position_name:'',
                            Boss_cid:boss_cid,
                            Boss_pname:callPersonData(boss_cid,ObjPersonData,'pname')+callPersonData(boss_cid,ObjPersonData,'fname')+' '+callPersonData(boss_cid,ObjPersonData,'lname'),
                            Boss_position_name:callPositionName(boss_position_code,positionData),
                            Boss_class_position:callClassPositionData(boss_class_position_code,classPositionData),
                            Groupwork_Boss_cid:groupwork_boss_cid,
                            Groupwork_Boss_pname:callPersonData(groupwork_boss_cid,ObjPersonData,'pname')+callPersonData(groupwork_boss_cid,ObjPersonData,'fname')+' '+callPersonData(groupwork_boss_cid,ObjPersonData,'lname'),
                            Groupwork_Boss_position_name:callPositionName(groupwork_boss_position_code,positionData),
                            Groupwork_Boss_class_position:callClassPositionData(groupwork_boss_class_position_code,classPositionData),
                            skph_Boss_pname:callBossSkphData(bossSkphData,'pname')+callBossSkphData(bossSkphData,'fname')+' '+callBossSkphData(bossSkphData,'lname'),
                            skph_Boss_position_name:callBossSkphData(bossSkphData,'position_name2'),
                            doc_num:headPaper(d.LeaveAbsenceName).doc_num,
                            headtopic:headPaper(d.LeaveAbsenceName).headtopic,
                            topic:headPaper(d.LeaveAbsenceName).topic,
                            last_leave_date:L1L2_compare(d,VacationSummary,leave_select,leave_all,'f2'),
                            leave_num1:(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'))?
                                $.fn.splitStrToArr(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'),',')[0]
                                :'',
                            leave_num2:(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'))?
                                $.fn.splitStrToArr(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'),',')[1]
                                :'',
                            leave_num3:(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'))?
                                $.fn.splitStrToArr(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'),',')[2]
                                :'',
                            leave_num4:(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'))?
                                $.fn.splitStrToArr(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'),',')[3]
                                :'',
                            leave_num5:(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'))?
                                $.fn.splitStrToArr(L1L2_compare(d,VacationSummary,leave_select,leave_all,'f3'),',')[4]
                                :'',
                            txtDatetime:L1L2_compare(d,VacationSummary,leave_select,leave_all,'f4')
                        };
                        if(typeof requiredSend(d)!=='string'){//ไม่มี error ให้ ajax save ได้
                            msg.html('');
                            if(d.record_use==='N'){//ถ้ามีการปิด record ให้ สถานะใบลาเป็นยกเลิกวันลาไปด้วย
                                d.statusUse='N';
                            }
                            //L1L2_compare(d,VacationSummary,leave_select,leave_all,'f4');
                            //console.log(VacationSummary);
                            //console.log(onlineAdmin);
                            //console.log(json_print);
                            $.ajax({
                                url:"SaveLeaveAbsence.php", 
                                type:"post",
                                cache:false,
                                dataType:'json',
                                data:{'data':JSON.stringify(d),'json_print':JSON.stringify(json_print)}
                            }).done(function(data){
                                if(data==='ok'){
                                    $this.closest('.modal').hide();
                                    btnBindClick.trigger('click');
                                    e.stopPropagation();
                                    //window.location.hash = 'tblDailyWorkMonth';//เมนู a[href="tblDailyWorkMonth"]  
                                    //window.location.reload(true);
                                }else{
                                    console.log(data);
                                }
                            });
                        }else{
                            msg.html(requiredSend(d));
                        }
                       // e.stopPropagation();
                    });//บันทึกลงฐาน
                });//when
            };//function บันทึกข้อมูลลงฐาน (insert/edit)   
            
            //run first html
            body.empty().append(Tbl_header(personData));//create html header ซึ่งเป็นหัวตารางทะเบียนวันลา ก่อนเพื่อจะเลือกเมนู insert ได้
            
            //click insert ข้อมูลวันลา
            body.find('div.menu >label.btn').click(function(e){
                $.when($.fn.def_CallLeave(personData.id)).done(function(ObjLeaveAllData){
                    saveLeave(null,ObjLeaveAllData);
                    e.preventDefault();
                });
            });
            
            //click edit ข้อมูลวันลา โดยเอา person_id ที่เลือกไปค้นหาข้อมูลการลาที่เคยบันทึกไว้แล้ว มา edit
            $.when(
                $.fn.def_CallLeave(personData.id),//เอา ObjLeaveAllData ทั้งหมด ของ person_id นี้มาก่อน    
                $.fn.def_LeaveAbsenceVacationSummary(personData.id)
            ).done(function(ObjLeaveAllData,VacationSummary){
                //create html tbody ต่อจาก Tbl_header เพื่อเรียกข้อมูลการลาของ person_id นี้ออกมา edit
                var leaveAllData = [];
                if(typeof ObjLeaveAllData !=='string'){
                    //เอาเฉพาะ record_use = Y
                    $.each(ObjLeaveAllData,function(i,v){
                       if(v.record_use){
                           if(v.record_use==='Y'){
                               leaveAllData.push(ObjLeaveAllData[i]);
                           }
                       }
                    });
                    if(leaveAllData.length > 0){
                        var tbody = body.find('table > tbody').empty().append(Tbl_tbody(leaveAllData));//ข้อมูลการลา หลังเลือกบุคลากร
                        var aEdit = tbody.find('a.btn.btn-warning');
                        var aTog = tbody.find('tr:last-child > td:nth-child(4) >a[data-toggle="popover"]');
                            aTog.popover({'content':htmlPopVacationDetail(VacationSummary)});

                        var rowMN = body.find('div.menu >div.row');
                        var selFillter1 = rowMN.children('div:nth-child(1)').find('select'),
                            selFillter2 = rowMN.children('div:nth-child(2)').find('select');

                        //เรื่อง serial number check ว่าเป็นการลาครั้งเดียวกันหรือไม่
                        tbody.find('td.cl1').randomColorTD('serialuse');
                        tbody.find('td.cl2').randomColorTD('serialuse'); 

                        //ตัวกรองว่าจะดูข้อมูล เฉพาะวันทำการ วันหยุด
                        selFillter1.change(function(e){
                            e.stopPropagation();
                            var selVal = $(this).val();
                            $.each(tbody.find('tr'),function(i){//console.log('selVal='+selVal+',dataval='+$(this).data('holiday'));
                                if(  (selVal===$(this).data('holiday')) || selVal==='all' ){//radio ตรงกับค่าจากฐานให้ show
                                    if($(this).hasClass('hidden')){
                                        $(this).removeClass('hidden').show();
                                    }else{
                                        $(this).show();
                                    }
                                }else{//radio ไม่ตรงกับค่าจากฐานให้ hide
                                    if($(this).hasClass('hidden')){
                                       $(this).toggleClass('hidden').hide();
                                    }else{
                                       $(this).addClass('hidden').hide();
                                    }
                                }
                            });
                        });
                        //ตัวกรองว่าจะดูข้อมูล เฉพาะใบลาที่เปิดใช้งาน หรือ ใบลาที่ยกเลิก
                        selFillter2.change(function(e){
                            e.stopPropagation();
                            var selVal = $(this).val();
                            $.each(tbody.find('tr'),function(i){
                                if(  (selVal===$(this).data('statususe')) || selVal==='all' ){//radio ตรงกับค่าจากฐานให้ show
                                    if($(this).hasClass('hidden')){
                                        $(this).removeClass('hidden').show();
                                    }else{
                                        $(this).show();
                                    }
                                }else{//radio ไม่ตรงกับค่าจากฐานให้ hide
                                    if($(this).hasClass('hidden')){
                                       $(this).toggleClass('hidden').hide();
                                    }else{
                                       $(this).addClass('hidden').hide();
                                    }
                                }
                            });
                        });

                        //click ปุ่ม edit show modal update ข้อมูล
                        aEdit.click(function(e){
                            var idSelect = $(this).data('dedit');
                            $.each(leaveAllData,function(i,v){
                                if(parseInt(v.id)===parseInt(idSelect)){
                                    saveLeave(v,leaveAllData);//v คือข้อมูลการลา เฉพาะ leave id ที่เลือก
                                }
                            });
                            e.stopPropagation();
                        });
                    }//if(leaveAllData.length > 0) 
                }//if !=='string'
            });//done
        };//CallbackAction เลือกว่าจะ insert หรือ edit วันลา
        
        //function search บุคลากร
        var SchPerson = function(obj,page,txtSch){
            var def = $.Deferred();
            var tbl = function(data){
                    var x = '<div class="table-responsive">'+
                            '<table class="table">'+
                                '<thead>'+
                                    '<tr>'+
                                        '<th>CID</th>'+
                                        '<th>เลขที่ตำแหน่ง</th>'+
                                        '<th>ชื่อ-สกุล</th>'+
                                        '<th>&nbsp;</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody>';
                            $.each(data,function(i,v){
                                if((v.status_note ==='1' || v.status_note ==='2') && v.status_use==='Y')
                                {
                                    x+='<tr data-idselect='+v.id+'>'+//id รายการที่เลือก
                                            '<td>'+v.cid+'</td>'+
                                            '<td>'+v.po_num+'</td>'+
                                            '<td>'+v.pname+v.fname+' '+v.lname+'</td>'+
                                            '<td class="tg-0lax" style="text-align:center">'+
                                                '<label class="btn">'+
                                                   '<a href="#editPerson"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>'+
                                                '</label>'+
                                            '</td>'+
                                       '</tr>';
                                }
                            });            
                        x+=     '</tbody>'+
                            '</table>'+
                        '</div>'; 
                    return x;
                };
                $.ajax({
                    url:"PersonDataForAdmin.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{
                        'txtSch':JSON.stringify(txtSch),
                        'page':JSON.stringify(page)
                    }
                }).done(function(data){
                    if(typeof data ==='object'){
                        var x = tbl(data.allFieldData)+data.htmlPGbtn;
                        obj.empty().append(x);
                        var aTag = obj.find("label.btn > a");
                        aTag.click(function(e){//aTag.off('click').on('click',function(e){
                            e.stopPropagation();
                            e.preventDefault();
                            //var $this = $(this);
                            var idselect = parseInt($(this).closest('tr').data('idselect'));//id รายการที่เลือก
                            $.each(data.allFieldData,function(i,v){
                                if(parseInt(v.id)===idselect){
                                    btnBindClick.data('dafter_sch',v);//เก็บ object data ไว้ที่ปุ่ม bind
                                    CallbackAction(v);
                                }
                            });
                        });
                    }else{
                        obj.empty().append(data);
                    }
                    def.resolve(obj);
                });
            return def.promise();
        };//หลังค้น person มีบุลากร ขึ้นมาให้เลือก แล้ว run CallbackAction
        
        //function แสดงรายชื่อบุคลากรที่ยื่นใบลา (รอพิจารณา สถานะ status_use=E) และเลือก person 
        function personLeaveWait(){
            $.when($.fn.def_LeaveWaitPerson()).done(function(personWaitLeave){//person ที่รออนุมัติวันลาทั้งหมด
                if(typeof personWaitLeave!=='string'){
                    var txtmodal = function(){
                        var txt = '<div class="modal fade"   role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                          '<div class="modal-dialog modal-xs" role="document">'+
                              '<div class="modal-content">'+
                                  '<div class="modal-body"></div>'+
                                  '<div class="modal-footer"></div>'+
                              '</div>'+
                          '</div>'+
                        '</div>';
                        return txt;  
                    };
                    var modal = $(txtmodal());
                    function tbl_head(){
                        var x =
                          '<div class="table-responsive">'+      
                          '<table class="table" border=1>'+ //class='cell-border display'
                            '<thead>'+ 
                                '<tr>'+ 
                                    '<th class="text-center">ID</th>'+ 
                                    '<th class="text-center">Name</th>'+ 
                                    '<th class="text-center">Type</th>'+ 
                                    '<th class="text-center">Date</th>'+ 
                                    '<th class="text-center">Print</th>'+ 
                                    '<th class="text-center">Check</th>'+ 
                                    '<th class="text-center">Delete</th>'+ 
                                '</tr>'+ 
                            '</thead>'+ 
                            '<tbody>';
                        return x;
                    }
                    function chkDdate(ddate){
                        var nddate,strHalf,returnV;
                        if( (ddate).indexOf("/") >=0 ){//กรณีครึ่งวัน
                            nddate = $.fn.splitStrToArr(ddate,"/")[0];
                            strHalf = $.fn.splitStrToArr(ddate,"/")[1];
                            returnV=$.fn.StrThaiDate3( new Date(nddate) )+'/'+strHalf;
                        }else{//กรณีเต็มวัน
                            nddate = ddate;
                            returnV=$.fn.StrThaiDate3( new Date(nddate) );
                        }
                        return returnV;
                    };
                    var x = tbl_head();
                    
                    //loop tr
                    $.each(personWaitLeave,function(i,v){
                        x+='<tr>'+
                                '<td class="text-center">'+v.id+'</td>'+  
                                '<td class="text-left">'+(v.pname+v.fname+' '+v.lname)+'</td>'+
                                '<td class="text-left">'+v.leave_absence_name+'</td>'+  
                                '<td class="text-left">';
                                    var arrSplit = [];
                                    if((v.ddate).indexOf(",") >=0){//กรณีมีมากกว่า 1 วัน
                                        arrSplit = (v.ddate).split(",");
                                    }else{
                                        arrSplit[0] = v.ddate;
                                    }
                                    var arrSplitLen = arrSplit.length;
                                    $.each(arrSplit,function(j,k){
                                        if((arrSplitLen - j) !==1){//มี คอมม่า ,
                                            x+=chkDdate(k)+','; 
                                        }else{
                                            x+=chkDdate(k); 
                                        }
                                    });
                             x+='</td>'+
                                '<td class="text-center">'+
                                    '<a href="#print" data-idprint="'+v.id+'"><i class="fa fa-print fa-2x" aria-hidden="true"></i></a>'+
                                '</td>'+
                                '<td class="text-center">'+
                                    '<a href="#chk" data-idchk="'+v.person_id+'"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>&nbsp;ตรวจสอบ</a>'+
                                '</td>'+
                                '<td class="text-center">'+
                                    '<a href="#del" data-iddel="'+v.id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>'+
                                '</td>'+
                            '</tr>';    
                    });
                   
                    x+='</tbody></table></div>';
                    
                    body.empty().append('<h2>รายชื่อบุคลากรที่ยื่นใบลา (รอตรวจสอบ)</h2>'+x);
                    
                    var tbl = body.find('table');
                    
                    //merge row 
                    tbl.rowspanizer({
                        vertical_align: 'middle',
                        columns: [1]//columns: [0,1,2] default คือ run merge ไปเรื่อยๆ เริ่มจาก 0  
                    });
                    
                    //คลิก delete
                    tbl.find('a[href="#del"]').click(function(e){
                        e.preventDefault();
                        var $thisBtnDel = $(this);
                        modal.find('.modal-body').empty().append("<h2>Are you sure?</h2>");
                        modal.find('.modal-footer').empty().append(
                            '<button type="button"  class="btn bg-danger" style="color:black;" data-dismiss="modal">Sure&Delete</button>'+
                            '<button type="button"  class="btn bg-success" style="color:black;" data-dismiss="modal">Cancel</button>'
                        );
                        modal.modal('show');
                        modal.find(".modal-footer button").first().click(function(e){
                            e.preventDefault();
                            var id = $thisBtnDel.data('iddel');
                            $.each(personWaitLeave,function(i,v){
                                if( parseInt(v.id) === parseInt(id)){
                                    $.when($.fn.def_LeaveDelBySerialgen(v.serialgen)).done(function(resp){
                                        if(resp==='ok'){
                                            header.find("a[href='#leaveWaitMenu']").trigger('click');
                                            modal.modal('hide');
                                        }
                                    });
                                }
                            });
                            e.stopPropagation();
                        });
                    });
    
                    //คลิก print
                    tbl.find('a[href="#print"]').click(function(e){
                        e.preventDefault();
                        var id = $(this).data('idprint');
                        var objPrint;
                        $.each(personWaitLeave,function(i,v){
                            if( parseInt(v.id) === parseInt(id)){
                                if(v.json_print){
                                    if(typeof v.json_print ==='string'){
                                        objPrint = $.parseJSON(v.json_print);
                                    }else{
                                        objPrint = v.json_print;
                                    }
                                    if(v.person_id){
                                        $.when($.fn.def_OnlineUserLastSession(v.person_id)).done(function(personData){
                                            if(typeof personData !=='string'){
                                                leave_print_module(objPrint,personData); //ใช้กับ function print ซึ่งต้องทำขึ้นมาใหม่ ใช้ของฝั่ง user.js ไม่ได้
                                            }else{
                                                alert('error ลองให้ user คนนี้ login เข้าระบบเป็นครั้งแรก');
                                            }
                                        }); 
                                    }else{
                                        alert('ไม่พบ person_id='+v.person_id);
                                    }
                                }else{
                                    alert('ไม่สามารถ print ใบลาได้ กรุณาติดต่อผู้ดูแลระบบ');
                                }
                            }
                        });
                    });
                    
                    //คลิกตรวจสอบ โดยเลือก person_id แล้วใช้ CallbackAction(personData)
                    tbl.find('a[href="#chk"]').click(function(e){
                        e.preventDefault();
                        var person_id_select = $(this).data('idchk');
                        $.each(personWaitLeave,function(i,v){
                            if( parseInt(v.person_id) === parseInt(person_id_select)){
                                var objCallback = {
                                   id:v.person_id,
                                   cid:v.cid,
                                   pname:v.pname,
                                   fname:v.fname,
                                   lname:v.lname
                                };
                                btnBindClick.data('dafter_sch',objCallback);
                                CallbackAction(objCallback);
                            }
                        });
                    });
                    
                }else{
                    body.empty().append(
                        '<p style="'+
                            'color: #685206; font-family:sans-serif;'+
                            'font-size: 50px;'+
                            'line-height: 24px;'+
                            'margin: 0 0 24px;'+
                            'text-align: justify;'+
                            'text-justify: inter-word;'+
                        '">ไม่พบคำขออนุมัติการลาในขณะนี้'+ 
                        '</p>'
                    );
                }
            });
        };
        personLeaveWait();//run โมดูลแรกก่อน
        //event search บุคลากร คลิก search แล้ว run ฟังก์ชัน SchPerson
        header.find("a[href='#sch']").click(function(e){
            $.when(SchPerson(body,1,txtSch.val())).done(function(obj){
                obj.off("click",".mypg a").on( "click", ".mypg a", function (e){
                    e.preventDefault();
                    var page = $(e.target).attr("data-page");
                    $.when.apply(this,SchPerson(body,page,txtSch.val()));
                    e.stopPropagation();
                });
            });
            e.stopPropagation();
        });
        //รายชื่อบุคลากรที่รออนุมัติวันลา
        header.find("a[href='#leaveWaitMenu']").off('click').on('click',function(e){
            e.preventDefault();
            personLeaveWait();
            e.stopPropagation();
        });
        //คลิกเลือกรายงานตัวที่ 1
        header.find("a[href='#leaveReport']").click(function(){
            var frm = function(gw){
                var x = 
                '<div class="row nopaddnomargin">'+ 
                    '<label class="nopaddnomargin">ข้อมูลการลาแยกตามกลุ่มภารกิจ</lebel>'+
                '</div>'+
                '<div class="row">'+ 
                    '<div class="col-sm-3 no-gutter">'+
                        '<div class="form-group float-label-control">'+
                            '<div class="form-group"><label>กลุ่มภารกิจ</label>'+
                                '<select class="form-control"><option value="0">---เลือกกลุ่มภารกิจ---</option>';
                                    $.each(gw,function(i,v){x+='<option value="'+v.groupwork_code+'">'+v.groupwork_name+'</option>';});
                                    x+='</select>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//col-sm-4
                    '<div class="col-sm-2 no-gutter">'+
                        '<div class="form-group float-label-control">'+
                            '<div class="form-group"><label>ปีปฏิทิน</label>'+$.fn.HTML_selYear(3,3)+'</div>'+
                        '</div>'+
                    '</div>'+//col-sm-2
                    '<div class="col-sm-2 no-gutter">'+
                        '<div class="form-group float-label-control">'+
                            '<div class="form-group"><label>เดือน</label>'+$.fn.HTML_selMonth()+'</div>'+
                        '</div>'+
                    '</div>'+//col-sm-2
                    '<div class="col-sm-4 no-gutter">'+
                        '<button class="chayanon-btn3d-orange noradius" style="padding-top:5px;padding-bottom:5px;color:black;"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Search</button>'+
                    '</div>'+//col-sm-4
                '</div>'+
                '<div class="row"></div>'+//row show result datatable
                '<div class="row chayanon-progress-bg">'+
                    '<div id="pingTestBar" class="chayanon-progress-bar"></div>'+
                '</div>';
                return x;
            };
            $.when($.fn.def_GroupWorkData()).done(function(gw){
                body.empty().append(frm(gw));
                var rowMN = body.children('div:nth-child(2)'),
                    btnSch = rowMN.children('div:last-child').find('button'),
                    selGW = rowMN.children('div:nth-child(1)').find('select'),
                    selYear = rowMN.children('div:nth-child(2)').find('select'),
                    selMonth = rowMN.children('div:nth-child(3)').find('select'),
                    rowRslt = body.children('div:nth-child(3)');
                rowMN.find('select').toggleClass('noradius');
                
                var nowdate = ($.fn.CurrDate()).split("-");
                function Tbl_head(){
                    var x =
                    '<table style="width:100%;text-align:center;" border="1">'+ //class='cell-border display'
                        '<thead>'+ 
                            '<tr>'+ 
                                '<th>Name</th>'+ 
                                '<th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th>'+ 
                                '<th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th>'+ 
                                '<th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th>'+ 
                                '<th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th>'+ 
                                '<th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th>'+ 
                            '</tr>'+ 
                        '</thead>'+ 
                        '<tbody>';
                    return x;    
                };
                function Tbl_foot(){
                    var x =
                    '</tbody>'+
                        /*
                            '<tfoot>'+
                                '<tr>'+
                                    '<th>Name</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                    '<th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th><th>day01</th>'+
                                '</tr>'+
                            '</tfoot>'+
                            */
                    '</table>';
                    return x;
                };
                function Tbl_body(leave,lveName){
                    var transShortLeave = function(lveName,leave_absence){
                        //console.log('ss='+leave_absence_id);
                        var txt = "",
                            exFH = [],
                            leave_absence_id = leave_absence;
                            exFH.length = 0;
                        if(leave_absence.toString().indexOf("/") >= 0){//มี slash หรือไม่
                            exFH = leave_absence.split('/');
                            leave_absence_id = exFH[0];
                        }
                        $.each(lveName,function(i,v){
                            if(parseInt(leave_absence_id)===parseInt(v.id)){
                                txt = v.leave_absence_short_name;
                            }
                        });
                        if(leave_absence.toString().indexOf("/") >= 0){//มี slash หรือไม่
                            txt = txt+'/'+exFH[1];
                        }
                        return txt;
                    };
                    function chkd(d){
                        if(d){
                            var newd = d;
                            if (d.toString().indexOf(",") >= 0){//มี comma
                                var ex = d.split(',');
                                var exn = [];
                                $.each(ex,function(i,v){
                                   exn.push(transShortLeave(lveName,v)); 
                                });
                                newd = exn.join(',');
                            }else{//ไม่มี comma ให้แปลงได้เลย
                                newd = transShortLeave(lveName,d);
                            }
                            return newd;
                        }else{
                            return "/";
                        }
                    };
                    var x="";
                    $.each(leave,function(i,v){
                        x += '<tr>'+
                            '<td style="white-space:nowrap;text-align:left;">'+v.ppname+'</td>'+
                            '<td>'+chkd(v.day01)+'</td><td>'+chkd(v.day02)+'</td><td>'+chkd(v.day03)+'</td><td>'+chkd(v.day04)+'</td>'+
                            '<td>'+chkd(v.day05)+'</td><td>'+chkd(v.day06)+'</td><td>'+chkd(v.day07)+'</td><td>'+chkd(v.day08)+'</td>'+
                            '<td>'+chkd(v.day09)+'</td><td>'+chkd(v.day10)+'</td><td>'+chkd(v.day11)+'</td><td>'+chkd(v.day12)+'</td>'+
                            '<td>'+chkd(v.day13)+'</td><td>'+chkd(v.day14)+'</td><td>'+chkd(v.day15)+'</td><td>'+chkd(v.day16)+'</td>'+
                            '<td>'+chkd(v.day17)+'</td><td>'+chkd(v.day18)+'</td><td>'+chkd(v.day19)+'</td><td>'+chkd(v.day20)+'</td>'+
                            '<td>'+chkd(v.day21)+'</td><td>'+chkd(v.day22)+'</td><td>'+chkd(v.day23)+'</td><td>'+chkd(v.day24)+'</td>'+
                            '<td>'+chkd(v.day25)+'</td><td>'+chkd(v.day26)+'</td><td>'+chkd(v.day27)+'</td><td>'+chkd(v.day28)+'</td>'+
                            '<td>'+chkd(v.day29)+'</td><td>'+chkd(v.day30)+'</td><td>'+chkd(v.day31)+'</td>'+
                        '</tr>';
                    });
                    return x;          
                };
                function RunProgressBar(barId) {
                    var self = this;
                    self.w = 0;
                    var elem = document.getElementById(barId);
                    var id = setInterval(frame,20);//run function frame ทุกๆ 20
                    this.finish = function(){
                        clearInterval(id);
                        self.w = 100;
                        changeElem();
                    };//สั่งหยุด ด้วย ฟังก์ชันนี้ตรงจุดใดก็ได้ของการทำงาน
                    function changeElem(){
                        elem.style.width = self.w + '%';
                        elem.innerHTML = self.w * 1 + '%';
                    };
                    function frame() {
                        if (self.w >= 90 && self.w < 99) {}
                        if (self.w >= 100) {//นับไปถึง 100 ให้ clear แล้วเริ่มใหม่
                            clearInterval(id);
                            self.w = 0;
                            changeElem();
                            id = setInterval(frame,20);
                        } else {
                          self.w++;
                          changeElem();
                        }
                    };
                };
                //click ค้นหารายงาน
                btnSch.click(function(){
                    var cond1 = {
                        'groupwork': (selGW.val()!=='0')?selGW.val():'gwA'
                    };
                    var cond2 = {
                        'leave_year':(selYear.val()!=='0')?selYear.val():nowdate[0],
                        'leave_month':(selMonth.val()!=='0')?selMonth.val():nowdate[1]
                    };
                    var def_callleave = function(cond1,cond2){
                        var def = $.Deferred();
                        var bar = new RunProgressBar("pingTestBar");//สั่ง run function
                        $.ajax({
                            url:"LeaveData2.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{'cond1':JSON.stringify(cond1),'cond2':JSON.stringify(cond2)}
                        }).done(function(data){
                            
                            def.resolve(data); 
                            bar.finish();//หยุด progress bar
                        });
                        return def.promise();
                    };
                    $.when(def_callleave(cond1,cond2),$.fn.def_LeaveAbsenceName()).done(function(leave,lveName){
                        if(typeof leave !=='string'){
                            var markups = Tbl_head()+Tbl_body(leave,lveName)+Tbl_foot();
                            rowRslt.empty().append(markups);
                            rowRslt.find('table').DataTable({
                                dom: 'Bfrtip',//"dom": 'lrtip',//"dom": '<lf<t>ip>',//"dom": '<"wrapper"flipt>',
                                buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
                                "scrollX": true
                            });
                        }else{
                            rowRslt.empty().append('ไม่พบข้อมูล');
                        }
                    });
                });
            });
        });
        
    };
    var tbl_vaccine_module = function(){
        //html & declare variable
        var content = $("#myContent").empty();
        var LayoutHtml = function(){
          var x=
            '<div class="container-fluid">'+
                '<nav class="navbar navbar-default" role="navigation" style=" margin-bottom: 0px;">'+
                    '<div class="container-fluid">'+
                        '<div class="navbar-header">'+
                            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-vaccine">'+
                                '<span class="sr-only">Toggle navigation</span>'+
                                '<span class="icon-bar"></span>'+
                                '<span class="icon-bar"></span>'+
                                '<span class="icon-bar"></span>'+
                            '</button>'+
                        '</div>'+
                        '<div class="collapse navbar-collapse" id="navbar-vaccine">'+
                            '<ul class="nav navbar-nav">'+
                                '<li><a href="#WriteVaccine">[1.บันทึกข้อมูลวัคซีน] <span class="sr-only">(current)</span></a></li>'+
                                '<li class="dropdown">'+
                                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[2.ข้อมูลและสถิติ] <span class="caret"></span></a>'+
                                    '<ul class="dropdown-menu" role="menu">'+
                                        '<li><a href="#VaccineReport1">รายชื่อบุคลากรที่ได้รับวัคซีนและภูมิคุ้มกัน</a></li>'+
                                        '<li><a href="#VaccineReport2">ข้อมูลวัคซีนและภูมิคุ้มกันแยกปีงบฯ</a></li>'+
                                    '</ul>'+
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</nav>'+
                '<div class="panel panel-default" style="margin-top:0px;">'+
                    '<div class="panel-body"></div>'+//content
                '</div>'+
            '</div>';
            return x;
        };
        content.append(LayoutHtml);
        var PanelBody = content.find('.panel-body');
        //function
        var switchModule = function(hrefID){
            switch(hrefID){
                //MainMenu
                case '#WriteVaccine':
                    WriteVaccine_module();
                break;
                case '#VaccineReport1':
                    VaccineReport1_module();
                break;
                case '#VaccineReport2':
                    VaccineReport2_module();
                break;
                default:
                    return;
                break;
            }
        };
        var WriteVaccine_module = function(){
            var LayoutHtml = function(){
                var x ='<div class="panel panel-default">'+
                            '<div class="panel-header">'+
                                '<div class="row">'+
                                    '<div class="col-xs-4 pull-right">'+
                                        '<div class="input-group">'+ 
                                            '<input type="text"  placeholder="ค้น Person..." class="form-control">'+
                                            '<span class="input-group-btn">'+
                                                '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>'+                                 
                                            '</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="panel-body"></div>'+
                        '</div>';
                return x;
            };
            PanelBody.empty().append(LayoutHtml);
            var subHeader = PanelBody.find('.panel-header');
            var subBody = PanelBody.find('.panel-body').empty();
            var txtSch = subHeader.find("input[type=text]");
            //function
            var CallbackAction = function(data){
                //html
                var txtmodal = function(){
                    var txt = '<div class="modal fade"   role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                      '<div class="modal-dialog modal-xs" role="document">'+
                          '<div class="modal-content">'+
                              '<div class="modal-header"></div>'+
                              '<div class="modal-body"></div>'+
                              '<div class="modal-footer">'+
                                  '<button type="button"  class="btn bg-success" style="color:black;" data-dismiss="modal">OK</button>'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                    '</div>';
                    return txt;  
                };
                var modal = $(txtmodal());
                var htmlTable = function(data){
                    var x = 
                        '<div data-cid="'+data.cid+'" data-cidname="'+data.pname+data.fname+' '+data.lname+'">'+
                           '<p>'+ data.cid+'#'+data.pname+data.fname+' '+data.lname+'</p>'+
                        '</div>'+
                        '<div>'+
                            '<label>ทะเบียนการได้รับวัคซีนและภูมิคุ้มกัน&nbsp;ประจำปีงบประมาณ</label>'+
                        '</div>'+
                        '<div class="form-inline">'+
                            '<div class="form-group">'+
                                '<select class="form-control">'+
                                    '<option value="01">มกราคม</option>'+
                                    '<option value="02">กุมภาพันธ์</option>'+
                                    '<option value="03">มีนาคม</option>'+
                                    '<option value="04">เมษายน</option>'+
                                    '<option value="05">พฤษภาคม</option>'+
                                    '<option value="06">มิถุนายน</option>'+
                                    '<option value="07">กรกฎาคม</option>'+
                                    '<option value="08">สิงหาคม</option>'+
                                    '<option value="09">กันยายน</option>'+
                                    '<option value="10">ตุลาคม</option>'+
                                    '<option value="11">พฤศจิกายน</option>'+
                                    '<option value="12">ธันวาคม</option>'+
                                '</select>'+
                                '<select class="form-control">'+
                                    '<option value="2020">2563</option>'+
                                    '<option value="2019">2562</option>'+
                                    '<option value="2018">2561</option>'+
                                    '<option value="2017">2560</option>'+
                                    '<option value="2016">2559</option>'+
                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div>'+
                            '<form>'+
                                '<table class="table table-striped table-bordered">'+
                                  '<thead>'+
                                    '<tr>'+
                                        '<th style="text-align:center;" class="bg-success">ภูมิคุ้มกัน</th>'+
                                        '<th style="text-align:center;" class="bg-success">วัคซีน</th>'+
                                    '</tr>'+
                                  '<thead>'+
                                  '<tbody></tbody>'+
                                '</table>'+
                            '</form>'+
                        '</div>'+    
                        '<div align="center"><a class="btn btn-success">บันทึก</a></div>';
                    return x;
                };
                subBody.empty().append(htmlTable(data));//htmlTable(data)
                var tblTbody = subBody.find('table > tbody');
                var CreateRowVaccine = function(vaccinename,immunizationname){
                    var RDOvaccine = function(id,label,txtrdo1,txtrdo2,txtrdo3){
                      var immArray =['imm5','imm6','imm7'];//ยกเว้นไม่ show
                      var inputTxt1 = "",
                          inputTxt2 = '<label class="btn">'+
                                        '<input type="radio" value="E" name="vcc_rdo_'+id+'" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  '+txtrdo3+'</span>'+                                                     
                                      '</label>';
                      if (id.indexOf("vcc") >= 0){
                          inputTxt1 = '<input type="text" name="txt_'+id+'">';
                      }else{
                          inputTxt1 = "";
                      }
                      var x = 
                        '<label for="name" class="cols-sm-2 control-label">'+label+'</label>'+
                        '<div class="input-group">'+             
                            '<div  class="btn-group" data-toggle="buttons" >'+
                                '<label class="btn">'+
                                  '<input type="radio" value="Y" name="vcc_rdo_'+id+'" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  '+txtrdo1+'</span>'+
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="N" name="vcc_rdo_'+id+'" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  '+txtrdo2+'</span>'+                                                     
                                '</label>';
                                if($.inArray(id,immArray)===-1){
                                    x+=inputTxt2+inputTxt1;
                                }else{//บางภูมิคุ้มกันไม่โชว์ว่าไม่ตรวจ
                                    x+=inputTxt1;
                                }
                            x+='</div>'+ 
                        '</div>';
                      return x;
                    };
                    var x = "";
                        $.each(vaccinename,function(i,v){
                            x+='<tr data-id="'+v.id+'">';
                            $.each(immunizationname,function(j,w){
                                if(w.vaccine_id===v.id){
                                    x+='<td class="immunization">'+
                                           '<div>'+RDOvaccine(
                                                    "imm"+w.id,
                                                    w.immunization_name,
                                                    (w.id === '2') ? 'มีเชื้อ' :'มีภูมิคุ้มกัน',
                                                    (w.id === '2') ? 'ไม่มีเชื้อ' :'ไม่มีภูมิคุ้มกัน',
                                                    "ไม่ตรวจ"
                                                )+'</div>'+
                                        '</td>';
                                }
                            }); 
                            x+='<td class="vaccine">'+
                                    '<div>'+RDOvaccine("vcc"+v.id,v.vaccine_name,"ได้รับวัคซีน","ไม่ได้รับวัคซีน","ไม่แน่ชัด")+'</div>'+
                                '</td>'+
                            '</tr>';
                        });
                    return x;
                };
                $.when($.fn.def_VaccineName(),$.fn.def_ImmunizationName())
                    .done(function(vaccinename,immunizationname){
                    tblTbody.empty().append(CreateRowVaccine(vaccinename,immunizationname));
                    $("input[name*='vcc_rdo_vcc']").change(function(){
                       if($(this).val()!=='E'){//column vaccine ถ้าไม่ใช่ ไม่แน่ชัดให้ clear ค่า text ระบุเหตุผล
                           $(this).closest('.btn-group').find("input[name*='txt_']").val("");
                       } 
                    });
                    $("input[name*='txt_']").focusin(function(){//column vaccine ถ้าพิมพ์ระบุเหตุผลให้เลือก radio ค่า ไม่แน่ชัด
                        $(this).closest('.btn-group').find("input[value='E']").prop('checked',true);
                    });
                    var ch1 = subBody.children('div:nth-child(1)'),
                        ch3 = subBody.children('div:nth-child(3)'),
                        ch4 = subBody.children('div:nth-child(4)'),
                        ch5 = subBody.children('div:nth-child(5)');
                    var ch3sel1 = ch3.find('select').first(),
                        ch3sel2 = ch3.find('select').last();
                    //คลิกบันทึกลงฐาน
                    ch5.children('a').off('click').click(function(e){
                       e.stopPropagation();
                       var cid= ch1.data("cid");
                       var cidname = ch1.data("cidname");
                       var getMonthYear = ch3sel2.prop('selected',true).val()+'-'+ch3sel1.prop('selected',true).val();
                       var formObj = ch4.find('form').serializeObject();
                       var JsonVaccineId = {},
                           JsonImmunizationId = {};
                       //แยกเป็น 2 field
                       $.each(formObj,function(i,v){
                            if ((i.indexOf("vcc_rdo_vcc") >= 0) ||  (i.indexOf("txt_vcc") >= 0)){
                                if(v){
                                    JsonVaccineId[i] = v;
                                }
                            }
                            if ((i.indexOf("vcc_rdo_imm") >= 0)){
                                if(v){
                                    JsonImmunizationId[i] = v;
                                }
                            }
                       });
                       //บันทึกลงฐาน
                        $.ajax({
                            url:"VaccineSave.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{
                                'cid':JSON.stringify(cid),
                                'getmonthyear':JSON.stringify(getMonthYear),
                                'jsonvaccine':JSON.stringify(JsonVaccineId),
                                'jsonimmunization':JSON.stringify(JsonImmunizationId)
                            }
                        }).done(function(data){
                            if(data==='ok'){
                                modal.on('shown.bs.modal', function(){
                                    $(this).find('.modal-header').empty().append('<h4>'+cid+'#'+cidname+'</h4>');
                                    $(this).find('.modal-body').empty().append('<h3>บันทึกข้อมูลวัคซีนและภูมิคุ้มกันสำเร็จ...</h3>');
                                });
                                modal.on('hidden.bs.modal', function(){
                                    $(this).data('bs.modal', null);
                                    subHeader.find("button").trigger('click');
                                });
                                modal.modal('show');
                            }    
                            
                        });
                    });
                });
            };
            var def_Sch = function(obj,page,txtSch){
                var def = $.Deferred();
                var tbl = function(data){
                        var x = '<div class="table-responsive">'+
                                '<table class="table">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th>CID</th>'+
                                            '<th>เลขที่ตำแหน่ง</th>'+
                                            '<th>ชื่อ-สกุล</th>'+
                                            '<th>&nbsp;</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody>';
                                $.each(data,function(i,v){
                                    if((v.status_note ==='1' || v.status_note ==='2') && v.status_use==='Y')
                                    {
                                        x+='<tr data-idselect='+v.id+'>'+//id รายการที่เลือก
                                                '<td>'+v.cid+'</td>'+
                                                '<td>'+v.po_num+'</td>'+
                                                '<td>'+v.pname+v.fname+' '+v.lname+'</td>'+
                                                '<td class="tg-0lax" style="text-align:center">'+
                                                    '<label class="btn">'+
                                                       '<a href="#editPerson"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>'+
                                                    '</label>'+
                                                '</td>'+
                                           '</tr>';
                                    }
                                });            
                            x+=     '</tbody>'+
                                '</table>'+
                            '</div>'; 
                        return x;
                    };
                    $.ajax({
                        url:"PersonDataForAdmin.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{
                            'txtSch':JSON.stringify(txtSch),
                            'page':JSON.stringify(page)
                        }
                    }).done(function(data){
                        if(typeof data ==='object'){
                            var x = tbl(data.allFieldData)+data.htmlPGbtn;
                            obj.empty().append(x);
                            var aTag = obj.find("label.btn > a");
                            aTag.click(function(e){
                                e.stopPropagation();
                                e.preventDefault();
                                var target = $(this).attr('href');
                                var idselect = parseInt($(this).closest('tr').data('idselect'));//id รายการที่เลือก
                                $.each(data.allFieldData,function(i,v){
                                    if(parseInt(v.id)===idselect){
                                        CallbackAction(v);
                                    }
                                });

                            });
                        }else{
                            obj.empty().append(data);
                        }
                        def.resolve(obj);
                    });
                return def.promise();
            };
            //event
            subHeader.find("button").off('click').on('click',function(e){
                e.stopPropagation();
                $.when(def_Sch(subBody,1,txtSch.val())).done(function(obj){
                    obj.off("click",".mypg a").on( "click", ".mypg a", function (e){
                        e.preventDefault();
                        e.stopPropagation();
                        var page = $(e.target).attr("data-page");
                        $.when.apply(this,def_Sch(subBody,page,txtSch.val()));
                    });
                });
            });
            subHeader.find("button").trigger('click');
        };
        var VaccineReport1_module = function(){
            var LayoutHtml = function(){
                var x ='<div class="panel panel-default">'+
                            '<div class="panel-header">'+
                                '<div class="row">'+
                                    '<div class="col-md-6 pull-right">'+
                                        '<a href="#" id="btnShwHid" class="btn btn-xs btn-warning">Hide Table</a>'+
                                        '<div class="input-group">'+ 
                                            '<select class="form-control" style="background: #DEE5A2;color:#000;text-shadow:0 1px 0 rgba(0, 0, 0, 0.4);">'+
                                                '<option value="2020">2563</option>'+
                                                '<option value="2019">2562</option>'+
                                                '<option value="2018">2561</option>'+
                                                '<option value="2017">2560</option>'+
                                                '<option value="2016">2559</option>'+
                                            '</select>'+
                                            '<span class="input-group-btn">'+
                                                '<button class="btn" type="button"><span class="glyphicon glyphicon-search"></span></button>'+                                 
                                            '</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-6"></div>'+
                                    '<div class="col-md-6"></div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="panel-body"></div>'+
                        '</div>';
                return x;
            };
            PanelBody.empty().append(LayoutHtml);
            var subPanelHeader = PanelBody.find('.panel-header');
            var subPanelBody = PanelBody.find('.panel-body');
            var btnSch = subPanelHeader.find('button');
            var vccTb = subPanelHeader.children('div:nth-child(2)').children('div').first();
            var immTb = subPanelHeader.children('div:nth-child(2)').children('div').last();
            $.when($.fn.def_VaccineName(),$.fn.def_ImmunizationName()).done(function(vcc_name,imm_name){
                var tbl = function(data,type){
                  var t1 = (type==='vcc')?'วัคซีน':'ภูมิคุ้มกัน';
                  var x =
                     '<table class="table table-striped table-bordered">'+
                      '<thead>'+
                        '<tr>'+
                            '<th style="text-align:center;background-color:#C9E0E1;" >'+t1+'</th>'+
                        '</tr>'+
                      '<thead>'+
                      '<tbody>';
                        $.each(data,function(i,v){
                            var nname = (type==='vcc') ? v.vaccine_name:v.immunization_name;
                            var t2 = (type==='vcc') ? 'vcc':'imm';
                            x+='<tr>'+
                                   '<td><label class="btn">'+
                                        '<input type="checkbox" value="'+t2+'_'+v.id+'" style="width:20px;height:20px;">&nbsp;'+nname+
                                        '</label>'+
                                    '</td>'+
                               '</tr>';
                        });
                      x+='</tbody>'+
                    '</table>';
                    return x;
                };
                vccTb.empty().append(tbl(vcc_name,'vcc'));
                immTb.empty().append(tbl(imm_name,'imm'));
                //show hide table เลือกวัคซีนและภูมิคุ้มกัน
                $("#btnShwHid").off('click').on('click',function(e){
                   e.stopPropagation();
                   var tbl = $(this).closest('.panel-header').find('table');
                   if(tbl.hasClass('hidden')){
                       tbl.removeClass('hidden').show( "slow", function() {//ถ้า show ตารางให้ซ่อน ผลการค้นหา
                           subPanelBody.toggleClass('hidden').hide();
                       });
                       //subPanelBody.empty();
                       $(this).text('hide table');
                   }else{
                       tbl.addClass('hidden').hide("slow",function(){//ถ้าซ่อน ตาราง ให้ show ผลการค้นหา
                           subPanelBody.removeClass('hidden').show();
                       });
                       $(this).text('show table');
                   }
                });
                var def_Sch = function(obj,param){
                    var def = $.Deferred();
                    var tbl = function(data){
                      var x =
                         '<span style="font-size:20px; background:#F4EEBA;">พบข้อมูลทั้งหมด '+data.countAll+' ราย</span>'+
                         '<table class="table table-striped table-bordered">'+
                          '<thead>'+
                            '<tr>'+
                                '<th>CID</th>'+
                                '<th>ชื่อ-สกุล</th>'+
                                '<th>ตำแหน่ง</th>'+
                                '<th>รายละเอียด</th>'+
                            '</tr>'+
                          '<thead>'+
                          '<tbody>';
                            $.each(data.allFieldData,function(i,v){
                                x+='<tr>'+
                                        '<td>'+v.cid+'</td>'+
                                        '<td>'+v.pnames+'</td>'+
                                        '<td>'+v.position_name+'</td>'+
                                        '<td>'+
                                            '<a href="#" class="btn btn-success detail" '+
                                                'data-cid="'+v.cid+'" '+
                                                'data-toggle="popover" '+
                                                'title="รายละเอียด" '+
                                                'data-content="sss" '+
                                                'data-html="true" '+
                                            '>รายละเอียด</a>'+
                                        '</td>'+
                                   '</tr>';
                            });
                          x+='</tbody>'+
                        '</table>'+
                        data.htmlPGbtn;
                        return x;
                    };
                    $.ajax({
                        url:"VaccineRpt1.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{
                            'param':JSON.stringify(param)
                        }
                    }).done(function(data){
                        if(typeof data !=='string'){
                            obj.empty().append(tbl(data));
                            //$("#btnShwHid").trigger('click');
                            var txtmodal = function(){
                                var txt = '<div class="modal fade"   role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                                  '<div class="modal-dialog modal-xs" role="document">'+
                                      '<div class="modal-content">'+
                                          '<div class="modal-header"></div>'+
                                          '<div class="modal-body"></div>'+
                                          '<div class="modal-footer">'+
                                              '<button type="button"  class="btn bg-success" style="color:black;" data-dismiss="modal">OK</button>'+
                                          '</div>'+
                                      '</div>'+
                                  '</div>'+
                                '</div>';
                                return txt;  
                            };
                            var modal = $(txtmodal());
                            var ttbl = function(d,type){
                                var x = 
                                  '<table class="table">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th>วัคซีน/ภูมิคุ้มกัน</th>'+
                                            '<th>สถานะ</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '</tbody>';
                                    $.each(d,function(i,v){
                                        var txt1 = (type==='vcc')? v.vaccine_name:v.immunization_name;
                                        var txt2 = (type==='vcc')? v.vaccine_ids_status:v.immunization_ids_status;
                                        x+='<tr>'+
                                                '<td>'+txt1+'</td>'+
                                                '<td>'+txt2+'</td>'+
                                           '</tr>';
                                    });
                                    x+='</tbody>'+
                                  '</table>';
                                return x;
                            };
                            obj.find('a.detail').click(function(e){
                                e.stopPropagation();
                                var newParam = {'cid':$(e.target).data('cid'),'year':param.year};
                                $.ajax({
                                    url:"VaccineDataByCid.php", 
                                    type:"post",
                                    cache:false,
                                    dataType:'json',
                                    data:{
                                        'param':JSON.stringify(newParam)
                                    }
                                }).done(function(cbData){
                                    modal.on('shown.bs.modal', function(){
                                        var htm = ''; 
                                        if(typeof cbData.vcc !=='string'){
                                            htm += ttbl(cbData.vcc,'vcc');
                                        }else{
                                            htm +='<font color="red">'+cbData.vcc+'</font>';
                                        }
                                        if(typeof cbData.imm !=='string'){
                                            htm += ttbl(cbData.imm,'imm');
                                        }else{
                                            htm +='<font color="red">'+cbData.imm+'</font>';
                                        }
                                        modal.find('.modal-body').empty().append(htm);
                                    });
                                    modal.on('hidden.bs.modal', function(){
                                        $(this).data('bs.modal', null);
                                    });
                                    modal.modal('show');
                                });
                            });
                            def.resolve(obj);
                        }else{
                            obj.empty().append('<h4><font color="red">'+data+'</font></h4>');
                            //$("#btnShwHid").trigger('click');//ซ่อนตารางทันทีที่ไม่พบข้อมูล
                        }
                    });
                    return def.promise();
                };
                subPanelHeader.find("select > option:not(:selected)").css({'background-color':'#FFF'});
                btnSch.off('click').click(function(e){
                    e.stopPropagation();
                    $("#btnShwHid").trigger('click');//ซ่อนตารางทันทีที่กด search
                    //เลือก id ภูมิคุ้มกันหรือวัคซีนใดเข้ามาบ้าง
                    var chkVcc = [];//เลือกวัคซีนหรือภูมิคุ้มกันอะไรเข้ามาบ้าง
                    var year = subPanelHeader.find('select').prop('selected',true).val();
                    $("input[type='checkbox']:checked").each(function(){
                        chkVcc.push($(this).val());  
                    });
                    var param = {'page':1,'chk':chkVcc,'year':year};
                    $.when(def_Sch(subPanelBody,param)).done(function(obj){
                        obj.off("click",".mypg a").on( "click", ".mypg a", function (e){
                            e.preventDefault();
                            e.stopPropagation();
                            var page = $(e.target).attr("data-page");
                            param = {'page':page,'chk':chkVcc,'year':year};
                            $.when.apply(this,def_Sch(subPanelBody,param));
                        });
                    });
                });
            });
        };
        var VaccineReport2_module = function(){
            var LayoutHtml = function(){
                var x ='<div class="panel panel-default">'+
                            '<div class="panel-header">'+
                                '<div class="row">'+
                                    '<div class="col-xs-4 pull-right">'+
                                        '<div class="input-group">'+ 
                                            '<input type="text"  placeholder="ค้น Person..." class="form-control">'+
                                            '<span class="input-group-btn">'+
                                                '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>'+                                 
                                            '</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="panel-body"></div>'+
                        '</div>';
                return x;
            };
            PanelBody.empty().append(LayoutHtml);
            var subHeader = PanelBody.find('.panel-header');
            var subBody = PanelBody.find('.panel-body').empty();
            var txtSch = subHeader.find("input[type=text]");
            //function
            var CallbackAction = function(CBdata){
                //html
                var htmlRpt = function(){
                    var txt = 
                    '<div class="panel panel-default" style="border:1px;">'+
                      '<div class="panel-header">header</div>'+
                      '<div class="panel-body">body</div>'+
                    '</div>';
                    return txt;  
                };
                subBody.empty().append(htmlRpt);
                var header = subBody.find('.panel-header'),
                    body = subBody.find('.panel-body');
                header.empty().append(
                    '<h3>'+CBdata.cid+'-->'+CBdata.fname+' '+CBdata.lname+'</h3>'+
                    '<div class="row">'+
                        '<div class="col-xs-6">'+
                            '<select class="form-control">'+
                                '<option value="2020">2563</option>'+
                                '<option value="2019" selected>2562</option>'+
                                '<option value="2018">2561</option>'+
                                '<option value="2017">2560</option>'+
                                '<option value="2016">2559</option>'+
                            '</select>'+
                        '</div>'+
                        '<div class="col-xs-4">'+
                            '<button class="btn btn-success">Search</button>'+
                        '</div>'+
                    '</div>'
                );
                var def_callDataVaccine = function(obj,param){
                    var def = $.Deferred();
                    var yearToBudhist = function(ym){
                        var arr = ym.split('-');
                        var year = parseInt(arr[0])+543;
                        var mArr = [
                            'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                            'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
                        ];
                        var m = parseInt(arr[1].replace('0','')) -1;
                        return mArr[m] + ' ' + year;
                    };
                    var tbl = function(D,type,obj){
                        var x =
                            '<table class="table table-responsive">'+
                                '<tr class="bg-success">'+
                                    '<th>ID</th>'+
                                    '<th>วัคซีน/ภูมิคุ้มกัน</th>'+
                                    '<th>Status</th>'+
                                    '<th>ปีงบฯ</th>'+
                                '</tr>'+
                                '<tbody>';
                                
                                $.each(D,function(i,v){
                                    var txtAtrr1,txtAtrr2,txtAtrr3,txtAtrr4;
                                    if(type==='vcc'){
                                        txtAtrr1 = v.vaccine_ids;
                                        txtAtrr2 = v.vaccine_name;
                                        txtAtrr3 = v.vaccine_ids_status;
                                        txtAtrr4 = yearToBudhist(v.vaccine_get_month_year);
                                    }else{
                                        txtAtrr1 = v.immunization_ids;
                                        txtAtrr2 = v.immunization_name;
                                        txtAtrr3 = v.immunization_ids_status;
                                        txtAtrr4 = yearToBudhist(v.immunization_get_month_year);
                                    }
                                    x+='<tr>'+
                                            '<td>'+txtAtrr1+'</td>'+
                                            '<td>'+txtAtrr2+'</td>'+
                                            '<td>'+txtAtrr3+'</td>'+
                                            '<td>'+txtAtrr4+'</td>'+
                                       '</tr>';
                                });
                                x+='</tbody>'+
                               '</table>';
                       obj.append(x);
                        //return x;
                    };
                    $.ajax({
                        url:"VaccineRpt2.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{'param':JSON.stringify(param)}
                    }).done(function(data){
                        obj.empty();
                        if(data.vcc_err){//ไม่พบข้อมูลวัคซีน
                            obj.append(data.vcc_err+"&nbsp;<br>");
                        }else{
                            tbl(data.vcc,'vcc',obj);
                        }
                        if(data.imm_err){//ไม่พบข้อมูลภูมิคุ้มกัน
                            obj.append(data.imm_err+"&nbsp;");
                        }else{
                            tbl(data.imm,'imm',obj);
                        }
                        
                        def.resolve(obj);
                    });
                    return def.promise();
                };
                var select = header.find('select');
                var selectVal = select.prop('selected',true).val();
                var btn = header.find('button');
                select.change(function(){
                   selectVal = $(this).val(); 
                });
                btn.off('click').click(function(){
                    var param ={'cid':CBdata.cid,'year':selectVal};
                    $.when(def_callDataVaccine(body,param)).done(function(obj){

                    }); 
                });
                
            };
            var def_Sch = function(obj,page,txtSch){
                var def = $.Deferred();
                var tbl = function(data){
                        var x = '<div class="table-responsive">'+
                                '<table class="table">'+
                                    '<thead>'+
                                        '<tr>'+
                                            '<th>CID</th>'+
                                            '<th>เลขที่ตำแหน่ง</th>'+
                                            '<th>ชื่อ-สกุล</th>'+
                                            '<th>&nbsp;</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody>';
                                $.each(data,function(i,v){
                                    if((v.status_note ==='1' || v.status_note ==='2') && v.status_use==='Y')
                                    {
                                        x+='<tr data-idselect='+v.id+'>'+//id รายการที่เลือก
                                                '<td>'+v.cid+'</td>'+
                                                '<td>'+v.po_num+'</td>'+
                                                '<td>'+v.pname+v.fname+' '+v.lname+'</td>'+
                                                '<td class="tg-0lax" style="text-align:center">'+
                                                    '<label class="btn">'+
                                                       '<a href="#editPerson"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>'+
                                                    '</label>'+
                                                '</td>'+
                                           '</tr>';
                                    }
                                });            
                            x+=     '</tbody>'+
                                '</table>'+
                            '</div>'; 
                        return x;
                    };
                    $.ajax({
                        url:"PersonDataForAdmin.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{
                            'txtSch':JSON.stringify(txtSch),
                            'page':JSON.stringify(page)
                        }
                    }).done(function(data){
                        if(typeof data ==='object'){
                            var x = tbl(data.allFieldData)+data.htmlPGbtn;
                            obj.empty().append(x);
                            var aTag = obj.find("label.btn > a");
                            aTag.click(function(e){
                                e.stopPropagation();
                                e.preventDefault();
                                var target = $(this).attr('href');
                                var idselect = parseInt($(this).closest('tr').data('idselect'));//id รายการที่เลือก
                                $.each(data.allFieldData,function(i,v){
                                    if(parseInt(v.id)===idselect){
                                        CallbackAction(v);
                                    }
                                });

                            });
                        }else{
                            obj.empty().append(data);
                        }
                        def.resolve(obj);
                    });
                return def.promise();
            };
            //event
            subHeader.find("button").off('click').on('click',function(e){
                e.stopPropagation();
                $.when(def_Sch(subBody,1,txtSch.val())).done(function(obj){
                    obj.off("click",".mypg a").on( "click", ".mypg a", function (e){
                        e.preventDefault();
                        e.stopPropagation();
                        var page = $(e.target).attr("data-page");
                        $.when.apply(this,def_Sch(subBody,page,txtSch.val()));
                    });
                });
            });
            subHeader.find("button").trigger('click');
        };
        //event
        $("#navbar-vaccine").find('li a').click(function(e){//click('a',function(e){
            e.preventDefault();
            switchModule($(e.target).attr('href'));
        });//เหตุการณ์คลิก mainmenu และ submenu
    };
    var tbl_biofeedback_module = function(){
        var content = $("#myContent").empty();
        var LayoutHtml = function(){
            var x=
             // '<div class="container-fluid">'+
                  '<nav class="navbar navbar-default noradius" role="navigation" style=" margin-bottom: 0px;">'+
                      '<div class="container-fluid">'+
                          '<div class="navbar-header">'+
                              '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-vaccine">'+
                                  '<span class="sr-only">Toggle navigation</span>'+
                                  '<span class="icon-bar"></span>'+
                                  '<span class="icon-bar"></span>'+
                                  '<span class="icon-bar"></span>'+
                              '</button>'+
                          '</div>'+
                          '<div class="collapse navbar-collapse" id="navbar-Biofeedback">'+
                              '<ul class="nav navbar-nav">'+
                                  '<li><a href="#WriteHRV">[1.แบบประเมินเตรียมตัว:HRV] <span class="sr-only">(current)</span></a></li>'+
                                  '<li class="dropdown">'+
                                      '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[2.รายงานผล] <span class="caret"></span></a>'+
                                      '<ul class="dropdown-menu" role="menu">'+
                                          '<li><a href="#BioRpt1">APG Report</a></li>'+
                                          '<li><a href="#BioRpt2">Stress Test</a></li>'+
                                      '</ul>'+
                                  '</li>'+
                              '</ul>'+
                          '</div>'+
                      '</div>'+
                  '</nav>'+
                  '<div class="panel panel-default noradius" style="margin-top:0px;">'+
                      '<h3></h3>'+
                      '<div class="panel-body noradius"></div>'+//subContent
                  '</div>';
              //'</div>';
              return x;
        };
        content.append(LayoutHtml);
        var subContent = content.find(".panel .panel-body");
        function htmFilter(gw,ge){
            var x =
                '<div class="row">'+
                    '<div class="form-group col-md-4">'+
                        '<label>กลุ่มภารกิจ:</label>';
                        $.each(gw,function(i,v){
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth1chkbox" value="'+v.groupwork_code+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+v.groupwork_name+'</span>'+
                                  '</label>'+
                              '</div>';
                        }); x+= 
                    '</div>'+
                    '<div class="form-group col-md-4">'+
                        '<label>ประเภทบุคลากรของรัฐ:</label>';
                        $.each(ge,function(i,v){
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth2chkbox" value="'+v.government_emp_type_code+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+v.government_emp_type_name+'</span>'+
                                  '</label>'+
                              '</div>';
                        }); x+= 
                    '</div>'+
                    '<div class="col-md-4">'+
                        '<div class="input-group">'+ 
                            '<span class="input-group-btn">'+
                                '<a href="#schWF" class="btn btn-default">SEARCH <span class="glyphicon glyphicon-search"></span></a>'+                                
                            '</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+//row nth-child(1)
                '<div class="row"></div>';//row nth-child(2)
            return x;
        };
        //modal config
        var txtmodal = function(){
            var txt = '<div class="modal hidden" data-updid="" role="dialog">'+
              '<div class="modal-dialog" role="document" style="width: 90%;height: 90%;">'+
                  '<div class="modal-content">'+
                      '<div class="modal-header"></div>'+
                      '<div class="modal-body"></div>'+
                      '<div class="modal-footer">'+
                          '<span></span>'+
                          '<button type="button"  class="btn bg-success" style="color:black;">บันทึก</button>'+
                          '<button type="button"  class="btn bg-danger" style="color:black;" data-dismiss="modal">ปิด</button>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
            '</div>';
            return txt;  
        };
        var modal = $(txtmodal());
        modal.modal({
            keyboard:false,
            backdrop:'static'
        }).modal('hide');
        modal.on('hidden.bs.modal', function(){
            $(this)
                .find("input,textarea,select")
                .val('')
                .end()
                .find("input[type=checkbox], input[type=radio]")
                .prop("checked", "")
                .end();
            $(this).find("option:selected",this).removeAttr('selected');
            $(this).data('bs.modal', null);
        });
        var HRV_module = function(gw,ge){
            subContent.empty().append(htmFilter(gw,ge));
            subContent.parent('.panel').find('h3').empty().append('แบบประเมินการเตรียมตัวก่อนการตรวจ HRV');
            var f1arr = [],//กลุ่มภารกิจ
            f2arr = [];//ประเภทบุคลากรของรัฐ  
            function tbl(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;">ตำแหน่ง</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">HRV</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">สถานะ</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.pocl+'</td>'+
                                           '<td class="text-center"><a href="#writeHRV" data-idperson="'+v.ppid+'"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a></td>'+
                                           '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            }; 
            $("input[name='nth1chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f1arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f1arr.splice( $.inArray($(this).val(),f1arr) ,1 );
                }
                e.stopPropagation();
            });
            $("input[name='nth2chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f2arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f2arr.splice( $.inArray($(this).val(),f2arr) ,1 );
                }
                e.stopPropagation();
            });
            //run sub Module
            var writeHRV_module = function(personData,hrvData){
                var txtModalHeader = function(){
                    var x = 
                    '<h3>แบบประเมินการเตรียมตัวก่อนตรวจ HRV</h3>'+
                    '<p style="font-size:1vw 1vh;">'+
                        personData.ppname+' '+personData.position_class+' '+personData.department+
                    '</p>'+
                    '<p style="font-size:1vw 1vh;">'+
                        '<div class="row">'+
                            '<div class="form-group col-md-3">'+
                                '<label>วันที่ตรวจ</label>'+
                                '<input type="text" name="chkupdate" data-date_true="" autocomplete="off">'+
                            '</div>'+
                            '<div class="form-group col-md-3">'+
                                '<label>เวลาที่ตรวจ</label>'+
                                '<input type="text" name="chkuptime"  autocomplete="off">'+
                            '</div>'+
                            '<div class="form-group col-md-3">'+
                                '<label>ประวัติการตรวจ</label>'+
                                '<label class="btn">'+
                                    '<input type="radio" name="rdo_history" value="ตรวจครั้งแรก" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ตรวจครั้งแรก</span>'+
                                '</label>'+
                            '</div>'+
                            '<div class="form-group col-md-3">'+
                                '<label>&nbsp;</label>'+
                                '<label class="btn">'+
                                    '<input type="radio" name="rdo_history" value="ติดตามผล" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ติดตามผล</span>'+
                                '</label>'+
                            '</div>'+
                        '</div>'+                       
                    '</p>';
                    return x;
                };
                var txtModalBody = function(){
                    var x =
                    '<div class="container">'+
                        //ก.การเตรียมตัวก่อนการตรวจวัด
                        '<div class="row">'+//nth-child(1)
                            '<h4><u><b>ก.การเตรียมตัวก่อนการตรวจวัด</b></u></h4>'+
                            '<div class="col-md-8 col-md-offset-1">'+
                                //ข้อ a1
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">1.ยังไม่ได้รับประทานอาหารหรือทานมาแล้วอย่างน้อย 2 ชั่วโมง</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a1" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a1" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+

                                //ข้อ a2
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">2.ไม่ได้ดื่มเครื่องดื่มแอลกอฮอล์มาอย่างน้อย 2 ชั่วโมง</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a2" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a2" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+

                                //ข้อ a3
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">3.ไม่ได้สูบบุหรี่มาก่อนการตรวจมาอย่างน้อย 2 ชั่วโมง</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a3" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a3" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+

                                //ข้อ a4
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">4.ไม่ได้ดื่มกาแฟ ชา หรือเครื่องดื่มที่มีคาเฟอีนมาแล้วอย่างน้อย 2 ชั่วโมง</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a4" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a4" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+

                                //ข้อ a5
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">5.ได้นั่งพักก่อนการตรวจอย่างน้อย 5-10 นาที</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a5" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a5" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+

                                //ข้อ a6
                                '<div class="row">'+
                                    '<label class="col-md-8 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">6.ไม่ได้ติดเครื่องมือแพทย์ที่เป็นอุปกรณ์ไฟฟ้าในตัว</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a6" value="Y" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ใช่</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_a6" value="N" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ใช่</span>'+
                                    '</label>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        //ข.ประวัติสุขภาพ
                        '<div class="row">'+//nth-child(2)
                            '<h4><u><b>ข.ประวัติสุขภาพ</b></u></h4>'+
                            '<div class="col-md-8 col-md-offset-1">'+
                                //ข้อ b1
                                '<div class="row">'+
                                    '<label class="col-md-5 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">1.การออกกำลังกายหรือเล่นกีฬา</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b1" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่เลย</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b1" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>บางครั้ง</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b1" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>เป็นประจำ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b1" placeholder="ความถี่" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                                //ข้อ b2
                                '<div class="row">'+
                                    '<label class="col-md-5 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">2.การรับประทานประเภทไขมันสูง</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b2" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่เลย</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b2" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>บางครั้ง</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b2" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>เป็นประจำ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b2" placeholder="ความถี่" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                                //ข้อ b3
                                '<div class="row">'+
                                    '<label class="col-md-5 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">3.สูบบุรี่</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b3" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่สูบ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b3" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>เลิก</span>'+
                                    '</label>'+
                                    '<input type="text" placeholder="ปี" class="col-md-1" name="txt_b31"  autocomplete="off">'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b3" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>เป็นประจำ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b32" placeholder="ความถี่" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                                //ข้อ b4
                                '<div class="row">'+
                                    '<label class="col-md-5 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">4.ดื่มสุราหรือเครื่องดื่มแอลกอฮอล์</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b4" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ดื่ม</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b4" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>บางครั้ง</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b4" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>เป็นประจำ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b4" placeholder="ความถี่" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                                //ข้อ b5
                                '<div class="row">'+
                                    '<label class="col-md-4 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">5.มีโรคประจำตัว</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b5" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่มี</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b5" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่ทราบ</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b5" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>มี โปรดระบุ</span>'+
                                    '</label>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="1" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>เบาหวาน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="2" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ความดัน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="3" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ไขมัน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-1 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="4" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>หัวใจ</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="5" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ไทรอยด์</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b5" value="6" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>หอบหืด</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<label class="btn col-md-1 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b5" placeholder="อื่นๆระบุ" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                                //ข้อ b6
                                '<div class="row">'+
                                    '<label class="col-md-4 no-gutter">'+
                                        '<p style="font-size:1.2vw;1vh;">6.ยาที่รับประทานอยู่เป็นประจำ</p>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b6" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>ไม่มี</span>'+
                                    '</label>'+
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="radio" name="rdo_b6" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>มี โปรดระบุ</span>'+
                                    '</label>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="1" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยาเบาหวาน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="2" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยาความดัน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="3" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยาไขมัน</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                '</div>'+     
                                '<div class="row">'+
                                    '<div class="col-md-4 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="4" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยาหัวใจ/หลอดเลือด</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-2 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="5" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยานอนหลับ</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-md-3 no-gutter">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="chkbox_b6" value="6" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ยาบำบัดเครียด</span>'+
                                        '</label>'+
                                    '</div>'+ 
                                    '<label class="btn col-md-2 no-gutter" style="padding:0;margin:0;">'+
                                        '<input type="text" name="txt_b6" placeholder="อื่นๆระบุ" autocomplete="off">'+
                                    '</label>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        //คำแนะนำในระหว่างการตรวจ
                        '<div class="row">'+//nth-child(3)
                            '<h4><u><b>คำแนะนำข้อควรปฏิบัติในระหว่างการตรวจ</b></u></h4>'+
                            '<div class="col-md-11 col-md-offset-1">'+
                                '<p style="font-size:1.2vw;1vh;">1.นั่งอยู่ในท่าที่สบาย วางแขนซ้ายไว้บนโต๊ะ ระดับแขนควรมีระดับใกล้เคียงกับระดับของหัวใจ</p>'+
                                '<p style="font-size:1.2vw;1vh;">2.วางฝ่ามือข้างที่หนีบ Finger Probe แนบพื้นโต๊ะ อย่าวางเอียงหรือขยับขณะวัด</p>'+
                                '<p style="font-size:1.2vw;1vh;">3.ไม่ขยับตัว เคลื่อนไหว หันไปมา หรือพูดคุย</p>'+
                                '<p style="font-size:1.2vw;1vh;">4.ห้ามหลับตา หรือ นอนหลับขณะตรวจ</p>'+
                                '<p style="font-size:1.2vw;1vh;">5.หายใจเป็นปกติ ไม่กลั้นหายใจหรือตั้งใจหายใจช้าๆหรือเร็วผิดปกติ</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
                    return x;
                };
                modal.find('.modal-header').empty().append(txtModalHeader);
                modal.find('.modal-body').empty().append(txtModalBody);
                $("input[name='chkupdate']").ConfigDatePicker();
                //declare variable element
                var nth1 = modal.find('.modal-body .container ').children('div:nth-child(1)'),//คำถาม a
                    nth2 = modal.find('.modal-body .container ').children('div:nth-child(2)');//คำถาม b
                
                var objSendA ={a1:'',a2:'',a3:'',a4:'',a5:'',a6:''},
                    objSendB = {b1:'',b2:'',b3:'',b4:'',b5:'',b6:''};

                //กรณีมีค่า hrvData เข้ามา ให้ edit
                if(typeof hrvData !=='string'){
                    //set value ข้อมูลส่วนที่ 1
                    var dbchkupdate = '';
                    if(hrvData[0].chkupdate){
                        dbchkupdate = $.fn.StrThaiDate(new Date(hrvData[0].chkupdate));
                    }
                    $("input[name='chkupdate']").val(dbchkupdate);
                    $("input[name='chkupdate']").data('date_true',hrvData[0].chkupdate);
                    $("input[name='chkuptime']").val(hrvData[0].chkuptime);
                    $("input[name='rdo_history']").chkedRdoByValue(hrvData[0].historychk);
                    //set value คำถาม a1
                    $("input[name='rdo_a1']").chkedRdoByValue(hrvData[0].q_a1);
                    $("input[name='rdo_a2']").chkedRdoByValue(hrvData[0].q_a2);
                    $("input[name='rdo_a3']").chkedRdoByValue(hrvData[0].q_a3);
                    $("input[name='rdo_a4']").chkedRdoByValue(hrvData[0].q_a4);
                    $("input[name='rdo_a5']").chkedRdoByValue(hrvData[0].q_a5);
                    $("input[name='rdo_a6']").chkedRdoByValue(hrvData[0].q_a6);
                    objSendA.a1=hrvData[0].q_a1;
                    objSendA.a2=hrvData[0].q_a2;
                    objSendA.a3=hrvData[0].q_a3;
                    objSendA.a4=hrvData[0].q_a4;
                    objSendA.a5=hrvData[0].q_a5;
                    objSendA.a6=hrvData[0].q_a6;
                    //set value คำถาม a2
                    function splitB2(d){
                        var arr=[];
                        if($.fn.splitStrToArr(d,'_').length > 0){
                            arr = $.fn.splitStrToArr(d,'_');
                        }else{
                            arr[0] = d;
                        }
                        return arr;
                    };
                    $("input[name='rdo_b1']").chkedRdoByValue( (splitB2(hrvData[0].q_b1))[0]  );
                    $("input[name='txt_b1']").val( (splitB2(hrvData[0].q_b1))[1]  );
                    $("input[name='rdo_b2']").chkedRdoByValue( (splitB2(hrvData[0].q_b2))[0]  );
                    $("input[name='txt_b2']").val( (splitB2(hrvData[0].q_b2))[1]  );
                    $("input[name='rdo_b3']").chkedRdoByValue( (splitB2(hrvData[0].q_b3))[0]  );
                    if((splitB2(hrvData[0].q_b3))[0]==='1'){
                        $("input[name='txt_b31']").val((splitB2(hrvData[0].q_b3))[1]);
                    }
                    if((splitB2(hrvData[0].q_b3))[0]==='2'){
                        $("input[name='txt_b32']").val((splitB2(hrvData[0].q_b3))[1]);
                    }
                    $("input[name='rdo_b4']").chkedRdoByValue( (splitB2(hrvData[0].q_b4))[0]  );
                    $("input[name='txt_b4']").val( (splitB2(hrvData[0].q_b4))[1]  );
                    
                    $("input[name='rdo_b5']").chkedRdoByValue( (splitB2(hrvData[0].q_b5))[0]  );
                    if((splitB2(hrvData[0].q_b5))[0]==='2'){
                        var b5arr = (splitB2(hrvData[0].q_b5));
                        var b5len = b5arr.length;
                        for(var i = 0;i<b5len;i++){
                            $("input[name='chkbox_b5']").each(function(){
                                if(  ($(this).val()===b5arr[i]) && (i!==0)   ){
                                    $(this).prop('checked',true);
                                }
                            });
                        }
                    }
                    $("input[name='rdo_b6']").chkedRdoByValue( (splitB2(hrvData[0].q_b6))[0]  );
                    if((splitB2(hrvData[0].q_b6))[0]==='1'){
                        var b6arr = (splitB2(hrvData[0].q_b6));
                        var b6len = b6arr.length;
                        for(var i = 0;i<b6len;i++){
                            $("input[name='chkbox_b6']").each(function(){
                                if(  ($(this).val()===b6arr[i]) && (i!==0)   ){
                                    $(this).prop('checked',true);
                                }
                            });
                        }
                    }

                    objSendB.b1=hrvData[0].q_b1;
                    objSendB.b2=hrvData[0].q_b2;
                    objSendB.b3=hrvData[0].q_b3;
                    objSendB.b4=hrvData[0].q_b4;
                    objSendB.b5=hrvData[0].q_b5;
                    objSendB.b6=hrvData[0].q_b6;
                }

                //radio คำถาม a1
                nth1.find('input[type=radio]').change(function(){
                    if(   $(this).attr('name')==='rdo_a1'  ){objSendA.a1=$(this).val();}
                    if(   $(this).attr('name')==='rdo_a2'  ){objSendA.a2=$(this).val();}
                    if(   $(this).attr('name')==='rdo_a3'  ){objSendA.a3=$(this).val();}
                    if(   $(this).attr('name')==='rdo_a4'  ){objSendA.a4=$(this).val();}
                    if(   $(this).attr('name')==='rdo_a5'  ){objSendA.a5=$(this).val();}
                    if(   $(this).attr('name')==='rdo_a6'  ){objSendA.a6=$(this).val();}
                    //console.log(objSendA);
                });
                //radio คำถาม a2
                nth2.find('input[type=radio]').change(function(e){
                    if(   $(this).attr('name')==='rdo_b1'  ){objSendB.b1=$(this).val();}
                    if(   $(this).attr('name')==='rdo_b2'  ){objSendB.b2=$(this).val();}
                    if(   $(this).attr('name')==='rdo_b3'  ){objSendB.b3=$(this).val();}
                    if(   $(this).attr('name')==='rdo_b4'  ){objSendB.b4=$(this).val();}
                    if(   $(this).attr('name')==='rdo_b5'  ){objSendB.b5=$(this).val();}
                    if(   $(this).attr('name')==='rdo_b6'  ){objSendB.b6=$(this).val();}
                    e.stopPropagation();
                });
                //save Data
                modal.find('.modal-footer button').first().off('click').click(function(e){
                    e.preventDefault();
                    //object data ที่่ต้องได้ใน event click save
                    personData.chkupdate = $("input[name='chkupdate']").data('date_true');
                    personData.chkuptime = $("input[name='chkuptime']").val();
                    personData.historychk = $("input[name='rdo_history']:checked").val();
                    if(objSendB.b1 ==='2'){objSendB.b1 = objSendB.b1 + '_'+$('input[name="txt_b1"]').val();};
                    if(objSendB.b2 ==='2'){objSendB.b2 = objSendB.b2 + '_'+$('input[name="txt_b2"]').val();};
                    if(objSendB.b3 ==='1'){objSendB.b3 = objSendB.b3 + '_'+$('input[name="txt_b31"]').val();};
                    if(objSendB.b3 ==='2'){objSendB.b3 = objSendB.b3 + '_'+$('input[name="txt_b32"]').val();};
                    if(objSendB.b4 ==='2'){objSendB.b4 = objSendB.b4 + '_'+$('input[name="txt_b4"]').val();};
                    if(objSendB.b5 ==='2'){
                        $("input[name='chkbox_b5']").each(function(){
                            if($(this).prop('checked')){
                                objSendB.b5 += '_'+$(this).val();
                            }
                        });
                        if($("input[name='txt_b5']").val()){
                            objSendB.b5 += '_'+$("input[name='txt_b5']").val();
                        }
                    };
                    if(objSendB.b6 ==='1'){
                        $("input[name='chkbox_b6']").each(function(){
                            if($(this).prop('checked')){
                                
                                objSendB.b6 += '_'+$(this).val();
                            }
                        });
                        if($("input[name='txt_b6']").val()){
                            objSendB.b6 += '_'+$("input[name='txt_b6']").val();
                        }
                    };

                    if($.fn.chkEmptyObj(personData) && $.fn.chkEmptyObj(objSendA) && $.fn.chkEmptyObj(objSendB)){
                        $.ajax({
                            url:"Biofeedback_saveHRV.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{
                                personData:JSON.stringify(personData),
                                objSendA:JSON.stringify(objSendA),
                                objSendB:JSON.stringify(objSendB)
                            }
                        }).done(function(resp){
                            if(resp==='ok'){
                                $("a[href='#writeHRV']").each(function(){
                                    if(parseInt($(this).data('idperson'))===parseInt(personData.person_id)){
                                        $(this).closest('tr').children('td').last().html(
                                            '<span style="color:lightgreen;">'+
                                                '<i class="fa fa-floppy-o fa-2x" aria-hidden="true"></i>'+
                                            '</span>'
                                        );
                                    }
                                });
                                modal.modal('hide');
                            }
                            //console.log(resp);
                        });
                    }else{
                        alert('ยังกรอกข้อมูลไม่ครบ!!');
                    }
                    e.stopPropagation();
                });
                modal.removeClass('hidden').modal('show');
                
            };
            //search person and run writeHRV_module
            subContent.find("a[href='#schWF']").click(function(){
                var objParam = {
                    groupwork:f1arr,
                    government_emp_type:f2arr
                };
                $.when($.fn.def_WorkForce2(objParam)).done(function(wf){
                    if(typeof wf ==='object'){
                        subContent.children('div.row:nth-child(2)').empty().append(tbl(wf));
                        subContent.children('div.row:nth-child(2)').find('table').DataTable({
                            // "pagingType": "full_numbers",
                            "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                            "lengthMenu": [[400,500,800, -1], [400,500,800, "All"]],
                             buttons: ['excel','pdf','print'],
                             "scrollX": true,
                             "order": [[ 0, "asc" ]]
                        });
                         //click writeHRV_module
                        subContent.find("a[href='#writeHRV']").click(function(e){
                            var person_id = $(this).data("idperson");
                            $.each(wf,function(i,v){
                                if(parseInt(v.ppid)===parseInt(person_id)){//person_id ที่เลือก
                                    $.when($.fn.def_BiofeedbackCallHRV(v.ppid)).done(function(hrvData){
                                        writeHRV_module({
                                            person_id:v.ppid,
                                            ppname:v.ppname,
                                            position_class:v.pocl,
                                            department:v.dep_name
                                        },hrvData);
                                    });
                                }
                            });
                            e.stopPropagation();
                        });
                    }else{
                        alert(wf);
                    }
                });
            });
        };
        var APG_module = function(gw,ge){
            subContent.empty().append(htmFilter(gw,ge));
            subContent.parent('.panel').find('h3').empty().append('Accelerated Photoplethysmograph Report:APG');
            var f1arr = [],//กลุ่มภารกิจ
            f2arr = [];//ประเภทบุคลากรของรัฐ  
            function tbl(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;">ตำแหน่ง</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">APG</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">สถานะ</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.pocl+'</td>'+
                                           '<td class="text-center"><a href="#writeAPG" data-idperson="'+v.ppid+'"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a></td>'+
                                           '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            }; 
            $("input[name='nth1chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f1arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f1arr.splice( $.inArray($(this).val(),f1arr) ,1 );
                }
                e.stopPropagation();
            });
            $("input[name='nth2chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f2arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f2arr.splice( $.inArray($(this).val(),f2arr) ,1 );
                }
                e.stopPropagation();
            });
            //run sub Module
            var writeAPG_module = function(personData,apgData){
                var txtModalHeader = function(){
                    var x = 
                    '<h3>Accelerated Photoplethysmograph Report</h3>'+
                    '<p style="font-size:1vw 1vh;">'+
                        personData.ppname+' '+personData.position_class+' '+personData.department+
                    '</p>'+
                    '<div class="row">'+
                        '<div class="form-group col-md-11 col-md-offset-1">'+
                            '<label>การวิเคราะห์ Pulse Wave</label>'+
                            '<p style="font-size:1vw 1vh;">'+
                                'การตรวจวัด APG นี้ เป็นการประเมินความเสี่ยงต่อโรคหลอดเลือดส่วนปลาย '+
                                '(Peripheral circulation disorder) และสภาวะความเสื่อมของ'+
                                'หลอดเลือด (Blood vessel aging) โดยวิเคราะห์การไหลเวียนของเลือด '+
                                'ซึ่งวัดจากระดับความยืดหยุ่นและความแข็งแรงของหลอดเลือด ด้วยการติดตามวัด'+
                                'คลื่นชีพจรจากปลายนิ้ว'+
                            '</p>'+
                        '</div>'+
                    '</div>';
                    return x;
                };
                var txtModalBody = function(){
                    var x =
                    '<div class="container">'+
                        '<div class="col-md-12">'+
                            '<div class="panel panel-default">'+//panel nth-child(1)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>การวิเคราะห์สุขภาพหลอดเลือด</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="control-label">'+
                                                'Mean Heart Rate:<br>'+
                                                'อัตราการเต้นของหัวใจเฉลี่ย'+
                                                '<input type="text" name="txt_heartrate" class="form-control">'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<img class="img-responsive" src="../img/biofeedback_apg.png" style="align:center;width:80px;height:70px;" />'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-md-3">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_heartrate" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                '<p >'+
                                                    '<b>ต่ำกว่า 60 ครั้ง/นาที</b><br>'+
                                                    'อาจพบในผู้ออกกำลังกาย<br>'+
                                                    'สม่ำเสมอหรือผลของยา<br>'+
                                                    'บางอย่าง หรือ ไฮโปไทรอยด์<br>'+
                                                    'หากมีอาการผิดปกติควรปรึกษา<br>'+
                                                    'แพทย์'+
                                                '</p>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="col-md-3">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_heartrate" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                '<p >'+
                                                    '<b>ค่าปกติ 60-80 ครั้ง/นาที</b><br>'+
                                                    'ควรออกกำลังกายสม่ำเสมอ<br>'+
                                                    'อย่างน้อย 3 วันต่อสัปดาห์<br>'+
                                                    'เพื่อรักษาสุขภาพที่ดี'+
                                                '</p>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="col-md-3">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_heartrate" value="3" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                '<p >'+
                                                    '<b>ค่า 81-100 ครั้ง/นาที</b><br>'+
                                                    'จังหวะการเต้นเร็วกว่า<br>'+
                                                    'ค่าปกติ อาจตื่นเต้น<br>'+
                                                    'หรือสุขภาพไม่ฟิต'+
                                                '</p>'+
                                            '</label>'+
                                        '</div>'+
                                        '<div class="col-md-3">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_heartrate" value="4" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                '<p>'+
                                                    '<b>ค่าสูงกว่า 100 ครั้ง/นาที</b><br>'+
                                                    'มีสภาวะสุขภาพอ่อนแอ หรือ<br>'+
                                                    'เครียด วิตกกังวล หรือผลจาก<br>'+
                                                    'คาเฟอีน แอลกอฮอล์ ยาบางชนิด<br>'+
                                                    'อาจมีภาวะโลหิตจาง หรือภาวะ<br>'+
                                                    'ไฮเปอร์ไทรอยด์ หรือมีภาวะหัวใจ<br>'+
                                                    'ทำงานผิดปกติ ควรปรึกษาแพทย์<br>'+
                                                    'หากมีอาการผิดปกติ เช่น <br>'+
                                                    'เจ็บหน้าอก ปวดศีรษะ ฯลฯ'+
                                                '</p>'+
                                            '</label>'+
                                        '</div>'+
                                    '</div>'+//row   
                                '</div>'+ //panel body
                            '</div>'+ //panel nth1  
                            '<div class="panel panel-default">'+//panel nth-child(2)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>ระดับของสภาวะหลอดเลือด</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<div class="row">'+
                                            '<h2>Wave Type:</h2>'+
                                            '<p style="1vw;1vh;">'+
                                                'ระดับของ<br>'+
                                                'สภาวะหลอดเลือด'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="row">'+
                                            '<input type="text" name="txt_wavetype" class="col-md-4" placeholder="Level" >'+
                                        '</div>'+
                                        '<div class="row">'+
                                            '<p style="1vw;1vh;">'+
                                                'แสดงภาวะเสื่อมของหลอด<br>'+
                                                'เลือดส่วนปลาย โดยประเมิน<br>'+
                                                'จากความยืดหยุ่น และ<br>'+
                                                'การไหลเวียนของเลือด'+
                                            '</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-10 no-gutter">'+
                                        '<div class="row">'+
                                            '<div class="col-md-2 no-gutter">'+
                                                '<div class="row">'+
                                                    '<img class="img-responsive" src="../img/biofeedback_APGwaveType1.jpg" style="align:center;width:100px;height:150px;display:block;margin:0 auto;" />'+
                                                '</div>'+
                                                '<div class="row">'+
                                                    '<p style="1vw;1vh;text-align:center;margin:0 auto;">'+
                                                        '<b>Excellence</b><br>'+
                                                        'การไหลเวียน<br>'+
                                                        'เลือดและสภาพ<br>'+
                                                        'หลอดเลือดอยู่<br>'+
                                                        'ระดับดี'+
                                                    '</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-2 no-gutter">'+
                                                '<div class="row">'+
                                                    '<img class="img-responsive" src="../img/biofeedback_APGwaveType2.jpg" style="align:center;width:100px;height:150px;display:block;margin:0 auto;" />'+
                                                '</div>'+
                                                '<div class="row">'+
                                                    '<p style="1vw;1vh;text-align:center;margin:0 auto;">'+
                                                        '<b>Good</b><br>'+
                                                        'ระดับปกติ<br>'+
                                                        'แต่อาจแย่ลงได้<br>'+
                                                        'ถ้าไม่ดูแลสุขภาพ'+
                                                    '</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-3 no-gutter">'+
                                                '<div class="row">'+
                                                    '<img class="img-responsive" src="../img/biofeedback_APGwaveType34.jpg" style="align:center;width:130px;height:150px;display:block;margin:0 auto;" />'+
                                                '</div>'+
                                                '<div class="row">'+
                                                    '<p style="1vw;1vh;text-align:center;margin:0 auto;">'+
                                                        '<b>Careful l Warning</b><br>'+
                                                        'หลอดเลือดเริ่มมีความ<br>'+
                                                        'เสื่อมสภาพ'+
                                                    '</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-2 no-gutter">'+
                                                '<div class="row">'+
                                                    '<img class="img-responsive" src="../img/biofeedback_APGwaveType5.jpg" style="align:center;width:100px;height:150px;display:block;margin:0 auto;" />'+
                                                '</div>'+
                                                '<div class="row">'+
                                                    '<p style="1vw;1vh;text-align:center;margin:0 auto;">'+
                                                        '<b>Bad</b><br>'+
                                                        'การไหลเวียน<br>'+
                                                        'เลือดไม่ดีและ<br>'+
                                                        'หลอดเลือด<br>'+
                                                        'เสื่อมสภาพ'+
                                                    '</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-md-3 no-gutter">'+
                                                '<div class="row">'+
                                                    '<img class="img-responsive" src="../img/biofeedback_APGwaveType67.jpg" style="align:center;width:130px;height:150px;display:block;margin:0 auto;" />'+
                                                '</div>'+
                                                '<div class="row">'+
                                                    '<p style="1vw;1vh;text-align:center;margin:0 auto;">'+
                                                        '<b>Very Bad</b><br>'+
                                                        'มีความเสื่อมสภาพมากขึ้น<br>'+
                                                        'และการไหลเวียนของเลือด<br>'+
                                                        'ผิดปกติ'+
                                                    '</p>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//panel nth2
                            '<div class="panel panel-default">'+//panel nth-child(3)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>การวิเคราะห์ Waveform</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row"  style="border-bottom:1px solid;">'+
                                        '<div class="col-md-6 no-gutter">'+
                                            '<p style="1vw;1vh;text-align:left;margin:0 auto;">'+
                                                '<b>DPI (Differential Pulse Wave)</b><br>'+
                                                'ดัชนีวัดสุขภาพของระบบไหลเวียนเลือด แสดงสภาวะเสื่อมของหลอดเลือด'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq1.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform1" value="ไม่ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+    
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq2.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform1" value="ปกติ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq3.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform1" value="ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                    '</div>'+//DPI
                                    '<div class="row"  style="border-bottom:1px solid;">'+
                                        '<div class="col-md-6 no-gutter">'+
                                            '<p style="1vw;1vh;text-align:left;margin:0 auto;">'+
                                                '<b>EC (Eccentric Constriction)</b><br>'+
                                                'แรงบีบของหลอดเลือดจากหัวใจห้องล่างซ้ายซึ่งไปเลี้ยงส่วนต่างๆของร่างกาย'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq1.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform2" value="ไม่ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+    
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq2.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform2" value="ปกติ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq3.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform2" value="ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                    '</div>'+//EC
                                    '<div class="row"  style="border-bottom:1px solid;">'+
                                        '<div class="col-md-6 no-gutter">'+
                                            '<p style="1vw;1vh;text-align:left;margin:0 auto;">'+
                                                '<b>AE (Arterial Elasticity)</b><br>'+
                                                'ความยืดหยุ่นของหลอดเลือดบ่งบอกถึงการไหลเวียนของเลือด ช่วยค้นหาความเสี่ยงได้เร็วขึ้นต่อโรคหลอดเลือดตีบและความผิดปกติของการไหลเวียนเลือดส่วนปลาย'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq1.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform3" value="ไม่ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+    
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq2.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform3" value="ปกติ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq3.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform3" value="ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                    '</div>'+//AE
                                    '<div class="row"  style="border-bottom:1px solid;">'+
                                        '<div class="col-md-6 no-gutter">'+
                                            '<p style="1vw;1vh;text-align:left;margin:0 auto;">'+
                                                '<b>RBV (Remaining Blood Volume)</b><br>'+
                                                'ปริมาณเลือดคงเหลือในหลอดเลือดหลังการบีบเลือดจากหัวใจ ถ้าสุขภาพหลอดเลือดดี จะมีปริมาณเลือดคงเหลือเล็กน้อย'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq1.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform4" value="ไม่ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+    
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq2.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform4" value="ปกติ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                        '<div class="col-md-2 no-gutter">'+
                                            '<label class="btn" style="font-size:1vw;margin:0 auto;padding:0 auto;">'+
                                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq3.jpg" style="align:center;width:43px;height:43px;display:block;margin:0 auto;" />'+
                                                '<input type="radio" name="rdo_waveform4" value="ดี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                            '</label>'+
                                        '</div>'+ 
                                    '</div>'+//RBV
                                '</div>'+//panel body nth3 
                            '</div>'+//panel nth3
                        '</div>'+ //col-md-12 
                    '</div>';//container
                    return x;
                };
                modal.find('.modal-header').empty().append(txtModalHeader);
                modal.find('.modal-body').empty().append(txtModalBody);
                //declare variable element
                var heartrate = 0;
                function chkHeartrate(heartrate){
                    if(heartrate < 60){
                        $("input[name='rdo_heartrate']").chkedRdoByValue('1');
                    }else if( (heartrate >= 60)&&(heartrate <= 80.99)  ){
                        $("input[name='rdo_heartrate']").chkedRdoByValue('2');
                    }else if( (heartrate >= 81)&&(heartrate <= 100.99)  ){
                        $("input[name='rdo_heartrate']").chkedRdoByValue('3');
                    }else if( heartrate > 100  ){
                        $("input[name='rdo_heartrate']").chkedRdoByValue('4');
                    }
                };
                //event เลือก radio heartrate เมื่อพิมพ์ค่า heartrate ลงในช่อง text
                $("input[name='txt_heartrate']").blur(function(e){
                    if(isNaN(parseFloat($(this).val()))){
                        heartrate = 0;
                    }else{
                        heartrate = parseFloat($(this).val());
                    }
                    chkHeartrate(heartrate);
                    e.stopPropagation();
                });
                //นำค่าในฐานมาแสดง
                if(typeof apgData !=='string'){
                    $("input[name='txt_heartrate']").val(apgData[0].heartrate);
                    chkHeartrate(parseFloat(apgData[0].heartrate));
                    $("input[name='txt_wavetype']").val(apgData[0].wavetype_level);
                    $("input[name='rdo_waveform1']").chkedRdoByValue(apgData[0].waveform_dpi);
                    $("input[name='rdo_waveform2']").chkedRdoByValue(apgData[0].waveform_ec);
                    $("input[name='rdo_waveform3']").chkedRdoByValue(apgData[0].waveform_ae);
                    $("input[name='rdo_waveform4']").chkedRdoByValue(apgData[0].waveform_rbv);
                }
                //save Data
                modal.find('.modal-footer button').first().off('click').click(function(e){
                    e.preventDefault();//console.log(apgData);
                    var objSendAPG = {
                        person_id:personData.person_id,
                        heartrate:heartrate,
                        wavetype_level:(isNaN(parseInt($("input[name='txt_wavetype']").val())))?0:parseInt($("input[name='txt_wavetype']").val()),
                        waveform_dpi:$("input[name='rdo_waveform1']:checked").val(),
                        waveform_ec:$("input[name='rdo_waveform2']:checked").val(),
                        waveform_ae:$("input[name='rdo_waveform3']:checked").val(),
                        waveform_rbv:$("input[name='rdo_waveform4']:checked").val()
                    };
                    
                    $.ajax({
                        url:"Biofeedback_saveAPG.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{param:JSON.stringify(objSendAPG)}
                    }).done(function(resp){
                        //console.log(resp);
                        if(resp){
                            $("a[href='#writeAPG']").each(function(){
                                if(parseInt($(this).data('idperson'))===parseInt(objSendAPG.person_id)){
                                    $(this).closest('tr').children('td').last().html(
                                        '<span style="color:lightgreen;">'+
                                            '<i class="fa fa-floppy-o fa-2x" aria-hidden="true"></i>'+
                                        '</span>'
                                    );
                                }
                            });
                            modal.modal('hide');
                        }
                    });
                });
                modal.removeClass('hidden').modal('show');
            };
            //search person and run writeAPG_module
            subContent.find("a[href='#schWF']").click(function(){
                var objParam = {
                    groupwork:f1arr,
                    government_emp_type:f2arr
                };
                $.when($.fn.def_WorkForce2(objParam)).done(function(wf){
                    if(typeof wf ==='object'){
                        subContent.children('div.row:nth-child(2)').empty().append(tbl(wf));
                        subContent.children('div.row:nth-child(2)').find('table').DataTable({
                            // "pagingType": "full_numbers",
                            "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                            "lengthMenu": [[400,500,800, -1], [400,500,800, "All"]],
                             buttons: ['excel','pdf','print'],
                             "scrollX": true,
                             "order": [[ 0, "asc" ]]
                        });
                        //click writeAPG_module
                        subContent.find("a[href='#writeAPG']").click(function(e){
                            var person_id = $(this).data("idperson");
                            $.each(wf,function(i,v){
                                if(parseInt(v.ppid)===parseInt(person_id)){//person_id ที่เลือก
                                    $.when($.fn.def_BiofeedbackCallAPG(v.ppid)).done(function(apgData){
                                        writeAPG_module({
                                            person_id:v.ppid,
                                            ppname:v.ppname,
                                            position_class:v.pocl,
                                            department:v.dep_name
                                        },apgData);
                                    });
                                }
                            });
                            e.stopPropagation();
                        });
                    }else{
                        alert(wf);
                    }
                });
            });
        };
        var STRESS_module = function(gw,ge){
            subContent.empty().append(htmFilter(gw,ge));
            subContent.parent('.panel').find('h3').empty().append('STRESS TEST:ANS,Stress,Heart');
            var f1arr = [],//กลุ่มภารกิจ
            f2arr = [];//ประเภทบุคลากรของรัฐ  
            function tbl(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;">ตำแหน่ง</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">STRESS</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">สถานะ</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td style="width:40%;font-size:1.2vw;">'+v.pocl+'</td>'+
                                           '<td class="text-center"><a href="#writeSTRESS" data-idperson="'+v.ppid+'"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a></td>'+
                                           '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            }; 
            $("input[name='nth1chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f1arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f1arr.splice( $.inArray($(this).val(),f1arr) ,1 );
                }
                e.stopPropagation();
            });
            $("input[name='nth2chkbox']").change(function(e){
                if($(this).prop('checked')){
                    if($.inArray($(this).val()===-1)){
                        f2arr.push( ($(this).val()).toString() );
                    }
                }else{
                   f2arr.splice( $.inArray($(this).val(),f2arr) ,1 );
                }
                e.stopPropagation();
            });
            //run sub Module
            var writeSTRESS_module = function(personData,stressData){
                var txtModalHeader = function(){
                    var x = 
                    '<h2>STRESS TEST</h2>'+
                    '<h3>AUTONOMIC NERVE BALANCE TEST</h3>'+
                    '<h4>AUTONOMIC BALANCE REPORT</h4>'+
                    '<p style="font-size:1vw 1vh;">'+
                        personData.ppname+' '+personData.position_class+' '+personData.department+
                    '</p>'+
                    '<div class="row">'+
                        '<div class="form-group col-md-11 col-md-offset-1">'+
                            '<label>ANS Balance Test</label>'+
                            '<p style="font-size:1vw 1vh;">'+
                                'การตรวจวัดความแปรปรวนในการเต้นของหัวใจ (Heart Rate Variablility) '+
                                'สามารถบ่งบอกสภาวะสุขภาพโดยภาพรวม รวมถึงความทนทานต่อความเครียด '+
                                'และระดับความเหนื่อยล้าของร่างกาย โดยการตรวจวัดการทำงานและความสมดุล'+
                                'ของระบบประสาทอัตโนมัติ (ANS)'+
                            '</p>'+
                        '</div>'+
                    '</div>';
                    return x;
                };
                var txtModalBody = function(){
                    var x =
                    '<div class="container">'+
                        '<div class="col-md-12">'+
                            '<div class="panel panel-default">'+//panel nth-child(1)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>ANS</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<div class="col-md-2">'+//รูป ANS
                                            '<img class="img-responsive" src="../img/biofeedback_ans.jpg" style="align:center;width:160px;height:180px;" />'+
                                        '</div>'+
                                        '<div class="col-md-2">'+//ข้อความอธิบาย ANS
                                            '<p>'+
                                                'ระบบประสาทอัตโนมัติ (ANS)<br>'+
                                                'ทำหน้าที่ควบคุมการทำงานของอวัยวะภายในและรักษาสมดุลของร่างกาย'+
                                                'อยู่นอกเหนือการควบคุมของจิตใจ ประกอบด้วย<br>'+
                                                '-ระบบประสาทซิมพาเทธิค(Sympathetic Nervous System:SNS)<br>'+
                                                '-ระบบประสาทพาราซิมพาเทธิค(Parasympathetic Nervous System:PNS)'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-8">'+
                                            '<div class="row">'+//ANS Stability
                                                '<div class="col-md-6 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>ANS Stability</b><br></p>'+
                                                    '<input type="text" name="txt_ans_stability" style="text-align:center;font-size:2vw;width:100px;height:100px;">'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//ANS Activity
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>ANS Activity</b><br></p>'+
                                                    '<input type="text" name="txt_ans_activity" class="col-md-10">'+
                                                '</div>'+
                                                '<div class="col-md-10 no-gutter">'+//radio แสดง scale
                                                    '<p><b>ANS Activity</b>&nbsp;การทำงานของระบบประสาทอัตโนมัติ<span></span></p>'+
                                                    '<div id="AnsActivityRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//ANS Blance
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>ANS Balance</b><br></p>'+
                                                    '<input type="text" name="txt_ans_balance" class="col-md-10">'+
                                                '</div>'+
                                                '<div class="col-md-10 no-gutter">'+//radio แสดง scale
                                                    '<p><b>ANS Balance</b>&nbsp;ความสมดุลของระบบประสาทอัตโนมัติ<span></span></p>'+
                                                    '<div id="AnsBalanceRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//panel nth-child(1)

                            '<div class="panel panel-default">'+//panel nth-child(2)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>STRESS</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<div class="col-md-2">'+//รูป STRESS
                                            '<img class="img-responsive" src="../img/biofeedback_stress.jpg" style="align:center;width:160px;height:180px;" />'+
                                        '</div>'+
                                        '<div class="col-md-2">'+//ข้อความอธิบาย STRESS
                                            '<p>'+
                                                'ความเครียด (Stress)<br>'+
                                                'ความเครียดปกติเกิดขึ้นได้ในชีวิตประจำวัน แต่หากไม่ได้จัดการดูแล'+
                                                'ที่เหมาะสม ทำให้เกิดความเครียดสะสมเรื้อรัง จะส่งผลให้เกิดโรคทาง'+
                                                'ร่างกาย เช่น มีอาการเหลื่อล้า ระบบย่อยอาหารผิดปกติ ฯลฯ รวมถึง'+
                                                'ภาวะสุขภาพจิตใ เช่น มีความวิตกกังวลสูง หงุดหงิดโมโห ท้อแท้ และซึมเศร้า ฯลฯ'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-8">'+
                                            '<div class="row">'+//Stress Resistance
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>Stress Resistance</b><br></p>'+
                                                    '<input type="text" name="txt_stress_resistance" class="col-md-10">'+
                                                '</div>'+
                                                '<div class="col-md-10 no-gutter">'+//radio แสดง scale
                                                    '<p><b>Stress Resistance</b>&nbsp;ความทนทานต่อความเครียด<span></span></p>'+
                                                    '<div id="StressResistanceRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//Stress Index
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>Stress Index</b><br></p>'+
                                                    '<input type="text" name="txt_stress_index" class="col-md-10">'+
                                                '</div>'+
                                                '<div class="col-md-10 no-gutter">'+//radio แสดง scale
                                                    '<p><b>Stress Index</b>&nbsp;ระดับความเครียด<span></span></p>'+
                                                    '<div id="StressIndexRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//Fatigue Index
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>Fatique Index</b><br></p>'+
                                                    '<input type="text" name="txt_fatique_index" class="col-md-10">'+
                                                '</div>'+
                                                '<div class="col-md-10 no-gutter">'+//radio แสดง scale
                                                    '<p><b>Stress Resistance</b>&nbsp;ระดับความเหนื่อยล้า<span></span></p>'+
                                                    '<div id="FatiqueIndexRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//panel nth-child(2)

                            '<div class="panel panel-default">'+//panel nth-child(3)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>Heart</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<div class="col-md-2">'+//รูป Heart
                                            '<img class="img-responsive" src="../img/biofeedback_heart.jpg" style="align:center;width:160px;height:180px;" />'+
                                        '</div>'+
                                        '<div class="col-md-2">'+//ข้อความอธิบาย Heart
                                            '<p>'+
                                                'หัวใจ (Heart)<br>'+
                                                'ทำหน้าที่สูบฉีดเลือดที่ประกอบด้วยออกซิเจน และสารอาหารไปเลี้ยง'+
                                                'ส่วนต่างๆของร่างกาย ความเครียดจะทำให้ระบบประสาทอัตโนมัติ'+
                                                'ที่ควบคุมการทำงานของหัวใจทำงานลดลงผิดปกติ ซึ่งจะส่งผลต่อการ'+
                                                'ทำงานของหัวใจด้วย'+
                                            '</p>'+
                                        '</div>'+
                                        '<div class="col-md-8">'+
                                            '<div class="row">'+//Mean Heart Rate
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<label class="control-label">'+
                                                        'Mean Heart Rate:<br>'+
                                                        'อัตราการเต้นของหัวใจเฉลี่ย'+
                                                        '<input type="text" name="txt_mean_heart_rate" class="form-control">'+
                                                    '</label>'+
                                                '</div>'+
                                                '<div class="col-md-2">'+
                                                    '<label class="btn" style="font-size:1vw;">'+
                                                        '<input type="radio" name="rdo_meanheartrate" value="ต่ำมาก" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                        '<p ><b>ต่ำมาก</b></p>'+
                                                    '</label>'+
                                                '</div>'+
                                                '<div class="col-md-2">'+
                                                    '<label class="btn" style="font-size:1vw;">'+
                                                        '<input type="radio" name="rdo_meanheartrate" value="ต่ำ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                        '<p ><b>ต่ำ</b></p>'+
                                                    '</label>'+
                                                '</div>'+
                                                '<div class="col-md-2">'+
                                                    '<label class="btn" style="font-size:1vw;">'+
                                                        '<input type="radio" name="rdo_meanheartrate" value="ปกติ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                        '<p ><b>ปกติ</b></p>'+
                                                    '</label>'+
                                                '</div>'+
                                                '<div class="col-md-2">'+
                                                    '<label class="btn" style="font-size:1vw;">'+
                                                        '<input type="radio" name="rdo_meanheartrate" value="สูง" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                        '<p ><b>สูง</b></p>'+
                                                    '</label>'+
                                                '</div>'+
                                                '<div class="col-md-2">'+
                                                    '<label class="btn" style="font-size:1vw;">'+
                                                        '<input type="radio" name="rdo_meanheartrate" value="สูงมาก" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                                        '<p ><b>สูงมาก</b></p>'+
                                                    '</label>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//Eletro-Cardiac Stability
                                                '<div class="col-md-4 no-gutter">'+//กรอกตัวเลข
                                                    '<p><b>Eletro-Cardiac Stability</b><br></p>'+
                                                    '<input type="text" name="txt_eletro_cardiac_stability" class="col-md-6">'+
                                                '</div>'+
                                                '<div class="col-md-8 no-gutter">'+//radio แสดง scale
                                                    '<p><b>Eletro-Cardiac Stability</b>&nbsp;<span></span></p>'+
                                                    '<div id="EletroCardiacStabilityRange" style="width:auto;font-size:1vw;1vh;"></div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="row">'+//Ectopic Beat
                                                '<div class="col-md-2 no-gutter">'+//กรอกตัวเลข
                                                    '<p>'+
                                                        '<b>Ectopic Beat</b>&nbsp;'+
                                                    '</p>'+
                                                '</div>'+
                                                '<div class="col-md-4 no-gutter">'+
                                                    '<input type="text" name="txt_ectopic_beat" class="col-md-4">'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+//panel nth-child(3)

                            '<div class="panel panel-default">'+//panel nth-child(4)
                                '<div class="panel-header chayanon-trapizoid">'+
                                    '<h3>สรุป</h3>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="conclude_ectopic_chkbox" value="Y" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;'+
                                                '<span>'+
                                                    'กรณีพบ Ectopic beat เกินกว่า 5 ครั้ง อาจเกิดจากการขยับตัวหรือเคลื่อนไหว '+
                                                    'ถ้าทดสอบซ้ำแล้ว ยังพบค่าเกินกำหนด <br> จะไม่สรุปผลให้ เนื่องจากระหว่างการตรวจวัด '+
                                                    'พบว่ามีจำนวนครั้งของการเต้นหัวใจผิดจังหวะไปมากกว่าที่กำหนด ซึ่งมีผลต่อแปลผลได้'+
                                                    'หากสงสัย<br>เรื่องภาวะหัวใจเต้นผิดจังหวะหรือพบอาการผิดปกติ เช่นใจสั่น เหนื่อย เจ็บหน้าอก '+
                                                    'ควรปรึกษาแพทย์เพื่อตรวจวินิจฉัยเพิ่มเติม'+
                                                '</span>'+
                                        '</label>'+
                                    '</div>'+
                                    //สมดุล
                                    '<div class="row">'+
                                        '<h4>ความสมดุลของระบบประสาทอัตโนมัติ(ANS Balance) มีผลต่อภาวะทางจิตใจและอารมณ์</h4>'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<div class="row">'+
                                                '<div class="col-md-2">'+
                                                    '<input type="radio" name="rdo_conclude" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>&nbsp;<span><b>สมดุล</b></span>'+
                                                '</div>'+
                                                '<div class="col-md-10">'+
                                                    '<div class="row">'+
                                                        '<label class="btn">'+
                                                            '<span>'+
                                                                'การทำงานของระบบประสาทซิมพาเธติคและระบบประสาทพาราเธติคมีความสมดุล แสดงว่า ภาวะอารมณ์มั่นคง'+
                                                            '</span>'+
                                                        '</label>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</label>'+
                                    '</div>'+
                                    //ไม่สมดุล
                                    '<div class="row">'+
                                        '<div class="col-md-2">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_conclude" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>&nbsp;<span><b>ไม่สมดุล</b></span>'+
                                            '</label>'+    
                                        '</div>'+
                                        '<div class="col-md-10">'+
                                            '<div class="row">'+
                                                '<label class="btn">'+
                                                    '<input type="checkbox" name="conclude2_chkbox" value="1" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;'+
                                                    '<span>'+
                                                        'ระบบประสาทซิมพาเธติคถูกกระตุ้น อาจรู้สึกตื่นเต้นหรือกังวล'+
                                                    '</span>'+
                                                '</label>'+
                                            '</div>'+
                                            '<div class="row">'+
                                                '<label class="btn">'+
                                                    '<input type="checkbox" name="conclude2_chkbox" value="2" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;'+
                                                    '<span>'+
                                                        'ระบบประสาทพาราซิมพาเธติคถูกกระตุ้น ทำให้อารมณ์ไม่มั่นคง อาจรู้สึกว่าไม่กระตือรือล้น ไม่สดชื่น เศร้า ฯลฯ'+
                                                    '</span>'+
                                                '</label>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    //ไม่สมดุลอย่างมาก
                                    '<div class="row">'+
                                        '<div class="col-md-2">'+
                                            '<label class="btn" style="font-size:1vw;">'+
                                                '<input type="radio" name="rdo_conclude" value="3" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>&nbsp;<span><b>ไม่สมดุลอย่างมาก</b></span>'+
                                            '</label>'+    
                                        '</div>'+
                                        '<div class="col-md-10">'+
                                            '<div class="row">'+
                                                '<label class="btn">'+
                                                    '<input type="checkbox" name="conclude3_chkbox" value="1" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;'+
                                                    '<span>'+
                                                        'ระบบประสาทซิมพาเธติคถูกกระตุ้นมาก ภาวะอารมณ์ไม่คงที่ หงุดหงิด วิตกกังวล โมโหง่าย ฯลฯ'+
                                                    '</span>'+
                                                '</label>'+
                                            '</div>'+
                                            '<div class="row">'+
                                                '<label class="btn">'+
                                                    '<input type="checkbox" name="conclude3_chkbox" value="2" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;'+
                                                    '<span>'+
                                                        'ระบบประสาทพาราซิมพาเธติคถูกกระตุ้นมาก ทำให้มีภาวะอารมณ์ เหนื่อยหน่าย หดหู่ ไม่กระตือรือล้น เศร้า ฯลฯ'+
                                                    '</span>'+
                                                '</label>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+//col-md-12
                    '</div>';//container           
                    return x;
                };
                modal.find('.modal-header').empty().append(txtModalHeader);
                modal.find('.modal-body').empty().append(txtModalBody);
                function chkANSbalance(v){
                    $("input[name='rdo_conclude']").prop('checked',false);
                    var n = isNaN(parseFloat(v))?0:parseFloat(v);
                    if( (n >= 0)&&(n <= 50.99) ){
                        $("input[name='rdo_conclude'][value='1']").prop('checked',true);
                    }else if( (n >= 60)&&(n <= 100.99)  ){
                        $("input[name='rdo_conclude'][value='2']").prop('checked',true);
                    }else if( (n >= 101)&&(n <= 150.99)  ){
                        $("input[name='rdo_conclude'][value='3']").prop('checked',true);
                    }
                }
                //ANS
                $("#AnsActivityRange").jRange({
                    from: 50,
                    to: 150,
                    step: 1,
                    scale:[50,70,90,110,130,150],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_ans_activity']").val(e);
                    }
                });
                $("#AnsBalanceRange").jRange({
                    from: 150,
                    to: 0,
                    step: -1,
                    scale:[150,100,50,0],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_ans_balance']").val(e);
                        chkANSbalance(e);
                    }
                });
                //stress
                $("#StressResistanceRange").jRange({
                    from: 50,
                    to: 150,
                    step: 1,
                    scale:[50,70,90,110,130,150],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_stress_resistance']").val(e);
                    }
                });
                $("#StressIndexRange").jRange({
                    from: 150,
                    to: 50,
                    step: -1,
                    scale:[150,130,110,90,70,50],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_stress_index']").val(e);
                    }
                });
                $("#FatiqueIndexRange").jRange({
                    from: 150,
                    to: 50,
                    step: -1,
                    scale:[150,130,110,90,70,50],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_fatique_index']").val(e);
                    }
                });
                //Heart
                $("#EletroCardiacStabilityRange").jRange({
                    from: 50,
                    to: 150,
                    step: 1,
                    scale:[50,70,90,110,130,150],
                    format: '%s',
                    width: 400,
                    showLabels: true,
                    snap: true,
                    onstatechange:function(e){
                        $("input[name='txt_eletro_cardiac_stability']").val(e);
                    }
                });
                //event ตอนสรุป conclude
                var ectopic_beat = isNaN(parseFloat($("input[name='txt_ectopic_beat']").val()))?0:parseFloat($("input[name='txt_ectopic_beat']").val());
                $("input[name='conclude_ectopic_chkbox'][value='Y']").prop('checked',false);
                $("input[name='txt_ectopic_beat']").blur(function(){
                    ectopic_beat = isNaN(parseFloat($(this).val()))?0:parseFloat($(this).val());
                    if(ectopic_beat >5){
                        $("input[name='conclude_ectopic_chkbox'][value='Y']").prop('checked',true);
                    }else{
                        $("input[name='conclude_ectopic_chkbox'][value='Y']").prop('checked',false); 
                    }
                });
                //กรณีมีข้อมูลเข้ามา edit
                if(typeof stressData !=='string'){
                    var conclude_ans_balance = $.fn.splitStrToArr(stressData[0].conclude_ans_balance,"_");
                    $("input[name='txt_ans_activity']").val(stressData[0].ans_activity);
                    $("input[name='txt_ans_balance']").val(stressData[0].ans_balance);
                    $("input[name='txt_stress_resistance']").val(stressData[0].stress_resistance);
                    $("input[name='txt_stress_index']").val(stressData[0].stress_index);
                    $("input[name='txt_fatique_index']").val(stressData[0].stress_fatique);
                    $("input[name='txt_mean_heart_rate']").val(stressData[0].mean_heart_rate_num);
                    $("input[name='rdo_meanheartrate'][value='"+stressData[0].mean_heart_rate_txt+"']").prop('checked',true);
                    $("input[name='txt_eletro_cardiac_stability']").val(stressData[0].eletro_cardiac_stability);
                    $("input[name='txt_ectopic_beat']").val(stressData[0].ectopic_beat);
                    
                    
                    chkANSbalance(stressData[0].ans_balance);//ค่า  $("input[name='rdo_conclude']")
                    //แสดงค่า conclude_ectopic_beat
                    $("input[name='conclude_ectopic_chkbox'][value='"+stressData[0].conclude_ectopic_beat+"']").prop('checked',true);
                    ectopic_beat = isNaN(parseFloat(stressData[0].ectopic_beat))?0:parseFloat(stressData[0].ectopic_beat);
                    if(ectopic_beat >5){
                        $("input[name='conclude_ectopic_chkbox'][value='Y']").prop('checked',true);
                    }else{
                        $("input[name='conclude_ectopic_chkbox'][value='Y']").prop('checked',false); 
                    }
                    //แสดงค่า conclude_ans_balance
                    //$("input[name='rdo_conclude'][value='"+conclude_ans_balance[0]+"']").prop('checked',true);
                    if(conclude_ans_balance[0]==='2'){
                        $("input[name='conclude2_chkbox'][value='"+conclude_ans_balance[1]+"']").prop('checked',true);
                        $("input[name='conclude2_chkbox'][value='"+conclude_ans_balance[2]+"']").prop('checked',true);
                    }
                    if(conclude_ans_balance[0]==='3'){
                        $("input[name='conclude3_chkbox'][value='"+conclude_ans_balance[1]+"']").prop('checked',true);
                        $("input[name='conclude3_chkbox'][value='"+conclude_ans_balance[2]+"']").prop('checked',true);
                    }
                }
                //save Data
                modal.find('.modal-footer button').first().off('click').click(function(e){
                    e.preventDefault();//console.log(stressData);
                    var conclude_txt  = $("input[name='rdo_conclude']:checked").val(), 
                        conclude_rdo = $("input[name='rdo_conclude']:checked").val();
                    if(conclude_rdo==='2'){
                        $("input[name='conclude2_chkbox']").each(function(){
                            if(  $(this).prop('checked')  ){
                                conclude_txt+='_'+$(this).val();
                            }
                        });
                    }
                    if(conclude_rdo==='3'){
                        $("input[name='conclude3_chkbox']").each(function(){
                            if(  $(this).prop('checked')  ){
                                conclude_txt+='_'+$(this).val();
                            }
                        });
                    }
                    var objSendSTRESS = {
                        person_id:personData.person_id,
                        //ans
                        ans_activity : $("input[name='txt_ans_activity']").val(),
                        ans_balance : $("input[name='txt_ans_balance']").val(),
                        //stress
                        stress_resistance : $("input[name='txt_stress_resistance']").val(),
                        stress_index : $("input[name='txt_stress_index']").val(),
                        stress_fatique : $("input[name='txt_fatique_index']").val(),
                        //heart
                        mean_heart_rate_num:$("input[name='txt_mean_heart_rate']").val(),
                        mean_heart_rate_txt:$("input[name='rdo_meanheartrate']:checked").val(),
                        eletro_cardiac_stability:$("input[name='txt_eletro_cardiac_stability']").val(),
                        ectopic_beat:$("input[name='txt_ectopic_beat']").val(),
                        //สรุป
                        conclude_ectopic_beat:$("input[name='conclude_ectopic_chkbox']").val(),
                        conclude_ans_balance:conclude_txt
                    };
                    //save Data 
                    if($.fn.chkEmptyObj(objSendSTRESS)){
                        $.ajax({
                            url:"Biofeedback_saveSTRESS.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{param:JSON.stringify(objSendSTRESS)}
                        }).done(function(resp){
                            if(resp){
                                $("a[href='#writeSTRESS']").each(function(){
                                    if(parseInt($(this).data('idperson'))===parseInt(objSendSTRESS.person_id)){
                                        $(this).closest('tr').children('td').last().html(
                                            '<span style="color:lightgreen;">'+
                                                '<i class="fa fa-floppy-o fa-2x" aria-hidden="true"></i>'+
                                            '</span>'
                                        );
                                    }
                                });
                                modal.modal('hide');
                            }
                        });
                    }else{
                        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
                    }
                    
                    e.stopPropagation();
                });
                modal.removeClass('hidden').modal('show');
            };
            //search person and run writeSTRESS_module
            subContent.find("a[href='#schWF']").click(function(){
                var objParam = {
                    groupwork:f1arr,
                    government_emp_type:f2arr
                };
                $.when($.fn.def_WorkForce2(objParam)).done(function(wf){
                    if(typeof wf ==='object'){
                        subContent.children('div.row:nth-child(2)').empty().append(tbl(wf));
                        subContent.children('div.row:nth-child(2)').find('table').DataTable({
                            // "pagingType": "full_numbers",
                            "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                            "lengthMenu": [[400,500,800, -1], [400,500,800, "All"]],
                             buttons: ['excel','pdf','print'],
                             "scrollX": true,
                             "order": [[ 0, "asc" ]]
                        });
                        //click writeSTRESS_module
                        subContent.find("a[href='#writeSTRESS']").click(function(e){
                            var person_id = $(this).data("idperson");
                            $.each(wf,function(i,v){
                                if(parseInt(v.ppid)===parseInt(person_id)){//person_id ที่เลือก
                                    $.when($.fn.def_BiofeedbackCallSTRESS(v.ppid)).done(function(stressData){
                                        writeSTRESS_module({
                                            person_id:v.ppid,
                                            ppname:v.ppname,
                                            position_class:v.pocl,
                                            department:v.dep_name
                                        },stressData);
                                    });
                                }
                            });
                            e.stopPropagation();
                        });
                    }else{
                        alert(wf);
                    }
                });
            });
        };
        //คลิกเมนู เลือก run module ต่างๆ ได้แก่ HRV_module,
        $.when(
            $.fn.def_GroupWorkData(),
            $.fn.def_GovernmentEmpType(),
            $.fn.def_StatusNote()
        ).done(function(gw,ge){
            content.find("ul li a[href='#WriteHRV']").click(function(){
                HRV_module(gw,ge);
            });
            content.find("ul li a[href='#BioRpt1']").click(function(){
                APG_module(gw,ge);
            });
            content.find("ul li a[href='#BioRpt2']").click(function(){
                STRESS_module(gw,ge);
            });
        });
    };
    $(document).ready(function() {
        //Time out การใช้ page
        $(document.body).bind("mousemove keypress", function(e) {
            chayanon_on_time = new Date().getTime();
        });
        setTimeout(timeout_refresh,60000);
        $(document.body).append(html_layout);//menu layout
        
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        
        $('#btnTrigger').trigger('click');//show menu ทันทีที่ load page
        $('#updDB1').toggleClass('collapse');//show menu ปรับปรุงฐานข้อมูลก่อน
        $('#menu-content').find('li a').click(function(e){//click('a',function(e){
            e.preventDefault(); 
            window.location.href.split('#')[0];//clear hash ทุกครั้งที่กดเมนู
            var aMN = $(e.target),
                idMolduleSub = aMN.parent('li').data("target");//idMolduleSub คือ target ของ li mainmenu
            if(typeof(idMolduleSub) !== "undefined" && idMolduleSub !== null) {//มี Submenu
                $(idMolduleSub).find('li a').off('click').click(function(evt){
                    evt.preventDefault();
                    evt.stopPropagation(); 
                    switchModule($(evt.target).attr('href'));
                });
            }else{//ไม่มี Submenu
                e.stopPropagation(); 
                switchModule(aMN.attr("href"));
            }
        });//เหตุการณ์คลิก mainmenu และ submenu
        
        if(window.location.hash === '#tblPerson'){//window.location.href.split('#')[0];
            tblPerson_moldule();
        } 
        
    });
})(jQuery);


