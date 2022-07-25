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
        // var modal = $(txtmodal());
        // modal.on('shown.bs.modal', function(e){
        //     window.setTimeout(function () {//ภายใน 2 นาที ถ้าไม่ทำอะไรจะ logout เอง
        //         // logout();
        //         modal.modal("hide");
        //     },120000);
        //     var btnYes = $(this).find('.modal-footer >button').first();
        //     var btnNo = $(this).find('.modal-footer >button').last();
        //     btnYes.off('click').on('click',function(){
        //         logout();
        //     });
        //     btnNo.click(function(){
        //         window.location.reload(true);
        //     });
            
        //     e.stopPropagation();
        // });
        // modal.on('hidden.bs.modal', function(){
        //     $(this).data('bs.modal', null);
        // });
        // if(new Date().getTime() - chayanon_on_time >= 300000){//5นาที*60*1000 = 300000
        //     modal.modal('show');
        // }else{ 
        //     setTimeout(timeout_refresh, 60000);
        // }
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
        '<div class="wrapper">'+                    //start nav user paage
            '<header class="main-header">'+ 
                '<a href="#" class="logo">'+ //mini logo for sidebar mini 50x50 pixels
                    '<span class="logo-mini"><b>A</b>LT</span>'+ 
                    '<span class="logo-lg"><b>HR</b>@SSRH</span>'+
                '</a>'+ 
                '<nav class="navbar navbar-static-top">'+ //Header Navbar: style can be found in header.less
                    '<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">'+ //Sidebar toggle button
                      '<span class="sr-only">Toggle navigation</span>'+ 
                    '</a>'+ 
                    '<div class="navbar-custom-menu">'+ 
                        '<ul class="nav navbar-nav">'+ 
                            '<!-- User Account: style can be found in dropdown.less -->'+ 
                            '<li class="dropdown user user-menu">'+ 
                              '<ul class="dropdown-menu">'+ 
                                '<!-- Menu Body -->'+ 
                                '<li class="user-body">'+ 
                                  '<div class="row">'+ 
                                    '<div class="col-xs-4 text-center">'+ 
                                      '<a href="#">Followers</a>'+ 
                                    '</div>'+ 
                                    '<div class="col-xs-4 text-center">'+ 
                                      '<a href="#">Sales</a>'+ 
                                    '</div>'+ 
                                    '<div class="col-xs-4 text-center">'+ 
                                      '<a href="#">Friends</a>'+ 
                                    '</div>'+ 
                                  '</div>'+ 
                                  '<!-- /.row -->'+ 
                                '</li>'+ 
                                '<!-- Menu Footer-->'+ 
                                '<li class="user-footer">'+ 
                                  '<div class="pull-left">'+ 
                                    '<a href="#" class="btn btn-default btn-flat">Profile</a>'+ 
                                  '</div>'+ 
                                  '<div class="pull-right">'+ 
                                    '<a href="#" class="btn btn-default btn-flat">Sign out</a>'+ 
                                  '</div>'+ 
                                '</li>'+ 
                              '</ul>'+ 
                            '</li>'+ 
                            '<!-- Control Sidebar Toggle Button -->'+ 
                            '<li>'+ 
                              '<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>'+ 
                            '</li>'+ 
                        '</ul>'+ 
                    '</div>'+ 
                '</nav>'+ 
            '</header>'+   //end nav user paage
        
            '<aside class="main-sidebar" >'+
                '<section class="sidebar" id="mn_sidebar">'+//style can be found in sidebar.less
                    '<div class="user-panel">'+//Sidebar user panel
                      '<div class="pull-left image">'+
                        '<img  class="img-circle" alt="User Image">'+
                      '</div>'+
                      '<div class="pull-left info">'+
                        '<p>Alexander Pierce999</p>'+
                        '<a href="#onlinestatus"><i class="fa fa-circle text-success"></i> Online</a>'+
                      '</div>'+
                    '</div>'+
                    '<form action="#" method="get" class="sidebar-form">'+//search form
                      '<div class="input-group">'+
                        '<input type="text" name="q" class="form-control" placeholder="Search...">'+
                        '<span class="input-group-btn">'+
                              '<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>'+
                              '</button>'+
                            '</span>'+
                      '</div>'+
                    '</form>'+
                    '<ul class="sidebar-menu" data-widget="tree">'+//style can be found in sidebar.less
                        '<li class="header">MAIN NAVIGATION</li>'+
                        '<li id="Dashboard" class="treeview active">'+
                          '<a href="#">'+
                            '<i class="fa fa-dashboard"></i>'+
                            '<span>Dashboard</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li class="active"><a href="#hrDashboard"><i class="fa fa-circle-o"></i> Dashboard1</a></li>'+
                          '</ul>'+
                        '</li>'+

                        
                        '<li class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-folder-open-o"></i>'+
                            '<span>Profiles</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#Profile1"><i class="fa fa-circle-o"></i> ข้อมูลเบื้องต้น</a></li>'+
                            '<li><a href="#Profile2"><i class="fa fa-circle-o"></i> ประวัติการเลื่อนเงินเดือน</a></li>'+
                            '<li><a href="#Profile3"><i class="fa fa-circle-o"></i> ข้อมูลฝึกอบรม/พัฒนา</a></li>'+
                          '</ul>'+
                        '</li>'+


                        '<li id="people" class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-users"></i>'+
                            '<span>อัตรากำลัง</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#WorkForce1"><i class="fa fa-circle-o"></i> อัตรากำลัง1</a></li>'+
                            '<li><a href="#WorkForce2"><i class="fa fa-circle-o"></i> อัตรากำลัง2</a></li>'+
                            '<li><a href="#WorkForce3"><i class="fa fa-circle-o"></i> อัตรากำลัง3</a></li>'+
                          '</ul>'+
                        '</li>'+

                        '<li id="performance_appraisal" class="treeview">'+
                           '<a href="#">'+
                             '<i class="fa fa-google-wallet"></i>'+
                             '<span>ระบบประเมินผลปฏิบัติราชการ</span>'+
                             '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                           '</a>'+
                           '<ul class="treeview-menu">'+
                             '<li><a href="#PMS"><i class="fa fa-circle-o"></i> บันทึกผลปฏิบัติราชการ</a></li>'+
                           '</ul>'+
                        '</li>'+

                        '<li id="on_leave" class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-globe"></i>'+
                            '<span>ระบบวันลา</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#Leave1"><i class="fa fa-circle-o"></i> ยื่นใบลา</a></li>'+
                            '<li><a href="#Leave2"><i class="fa fa-circle-o"></i> ตรวจสอบวันลา</a></li>'+
                          '</ul>'+
                        '</li>'+

                        '<li class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-plane"></i>'+
                            '<span>ระบบไปราชการ</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#gogov1"><i class="fa fa-circle-o"></i> เขียนบันทึกไปราชการ</a></li>'+
                            '<li><a href="#gogov2"><i class="fa fa-circle-o"></i> เขียนรายงานการเดินทาง</a></li>'+
                          '</ul>'+
                        '</li>'+

                        '<li id="training" class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-graduation-cap"></i>'+
                            '<span>อบรม-พัฒนา</span>'+
                            '<span class="pull-right-container">'+
                              '<small class="label pull-right bg-green">new</small>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#Develope_BySelfBook"><i class="fa fa-circle-o"></i> สมุดบันทึกการพัฒนา</a></li>'+
                          '</ul>'+
                        '</li>'+

                        '<li id="health_database" class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-user-md"></i>'+
                            '<span>ฐานข้อมูลสุขภาพ</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#Health1"><i class="fa fa-circle-o"></i> ประเมิน/คัดกรอง</a></li>'+
                            '<li><a href="#Health2"><i class="fa fa-circle-o"></i> ผลตรวจสุขภาพประจำปี</a></li>'+
                            '<li><a href="#Health3"><i class="fa fa-circle-o"></i> ข้อมูลวัคซีน</a></li>'+
                            '<li><a href="#Health4"><i class="fa fa-circle-o"></i> Biofeedback</a></li>'+
                          '</ul>'+
                        '</li>'+

                        '<li id="insert_person" class="treeview">'+
                        '<a href="#insert_person">'+
                          '<i class="fa fa-user-md"></i>'+
                          '<span>เพิ่มบุคลากร</span>'+
                        '</a>'+
                      '</li>'+

                        '<li class="treeview">'+
                          '<a href="#">'+
                            '<i class="fa fa-cogs"></i>'+
                            '<span>System Settings</span>'+
                            '<span class="pull-right-container">'+
                              '<i class="fa fa-angle-left pull-right"></i>'+
                            '</span>'+
                          '</a>'+
                          '<ul class="treeview-menu">'+
                            '<li><a href="#Logout"><i class="fa fa-circle-o"></i> ออกจากระบบ</a></li>'+
                          '</ul>'+
                        '</li>'+
                    '</ul>'+
                '</section>'+//sidebar
            '</aside>'+
            '<div class="content-wrapper" id="myContent"></div>'+
        '</div>';//.wrapper
        return txt;
    };
    var switchModule = function(hrefID){
        switch(hrefID){
            //MainMenu
            case '#hrDashboard':
                hrDashboard_moldule();
            break;
            case '#Profile1'://ข้อมูล profile เบื้องต้น
                myProfile_moldule(hrefID);
            break;
            case '#Profile2'://ข้อมูล profile ประวัติการเลื่อนเงินเดือน
                myProfile_moldule(hrefID);
            break;
            case '#Profile3'://ข้อมูล profile ข้อมูลฝึกอบรมพัฒนา
                myProfile_moldule(hrefID);
            break;
            case '#Develope_BySelfBook'://สมุดบันทึกการพัฒนาตนเอง
                Develope_BySelfBook_module();
            break;
            
            case '#WorkForce1'://อัตรากำลัง1
                WorkForce_module(hrefID);
            break;
            case '#WorkForce2'://อัตรากำลัง2
                WorkForce_module(hrefID);
            break;
            case '#WorkForce3'://อัตรากำลัง3
                WorkForce_module(hrefID);
            break;

            case '#PMS'://ระบบประเมินผลปฏิบัติราชการ
                Pms_module();
            break;

            case '#Health1'://แบบประเมิน-คัดกรอง ต่างๆ
                HealthScreening_module();
            break;
            case '#Health2'://ผลตรวจสุขภาพประจำปี
                HealthOfyear_module();
            break;
            case '#Health3'://ข้อมูลวัคซีน
                HealthVaccine_module();
            break;
            case '#Health4'://Biofeedback
                HealthBiofeedback_module();
            break;

            case '#Logout'://ออกจากระบบ
                logout();
            break;
            case '#insert_person'://ออกจากระบบ
                insert_person();
            break;
            //SubMenu
            case '#Leave1'://ยื่นใบลา
                LeaveAbsence_module(hrefID);
            break;
            case '#Leave2'://ข้อมูลการลา
                LeaveAbsence_module(hrefID);
            break;
            case '#gogov1'://เขียนบันทึกไปราชการ
                gogov1_moldule();
            break;
            case '#gogov2'://เขียนรายงานการเดินทาง
                gogov2_moldule();
            break;
            case '#gogov3'://ข้อมูลไปราชการ
                gogov3_moldule();
            break;
        }
    };

    var insert_person = () => {
        window.location.href='../form_insert_person/form_insert.php';
    }
    //module ต่างๆ
    var hrDashboard_moldule = function(){
        $("#myContent").empty().append(
            '<div class="container-fluid">'+
                '<div class="row"></div>'+//content1  auto slide
                '<div class="row">'+//content2 fix content
                    '<div class="panel panel-default">'+
                        '<div class="panel-heading">'+
                            '<h3>อัตรากำลัง(แยกตามประเภทสายงาน)</h3>'+
                            '<div class="input-group">'+
                                '<span class="input-group-addon"><i class="fa fa-cog" aria-hidden="true"></i></span>'+
                                '<select class="form-control">'+
                                    '<option value="1" selected>สายงานหลัก</option>'+
                                    '<option value="2">สายงานสนับสนุนสายงานหลัก</option>'+
                                    '<option value="3">สายงานสนับสนุน</option>'+
                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="panel-body" id="hrDashboard2"></div>'+
                    '</div>'+
                '</div>'+//row
            '</div>'
        );
        var content1 = $("#myContent").find('.container-fluid').children('div:nth-child(1)');
        //(กราฟ) อัตรากำลัง แยกข้าราชการ พกส พรก ลจป ลจช -->rpt2
        var workforce1_moldule = function(){
            content1.empty().append(
                '<div class="panel panel-default">'+
                    '<div class="panel-heading"></div>'+
                    '<div class="panel-body" id="hrDashboard1"></div>'+
                '</div>'
            );  
            var runPlot1 = function(ticks,s1){
                var plot1;
                if (plot1) {plot1.destroy();}

                plot1 = $.jqplot('hrDashboard1', [s1], {
                    animate: !$.jqplot.use_excanvas,// Only animate if we're not using excanvas (not in IE 7 or IE 8)..
                    seriesDefaults:{
                        renderer:$.jqplot.BarRenderer,
                        pointLabels: { show: true }
                    },
                    axes: {
                        xaxis: {
                            renderer: $.jqplot.CategoryAxisRenderer,
                            ticks: ticks
                        }
                    },
                    highlighter: { show: false }
                });
            };
            var callRpt1 = function(d1,d2){
                    var def = $.Deferred();
                    $.ajax({
                        url:"Rpt2.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{'d1':JSON.stringify(d1),'d2':JSON.stringify(d2)}
                    }).done(function(data){
                        var dd = {
                            's1':[],
                            'ticks':[]
                        };
                        $.each(data,function(i,v){
                           var txt = "";
                           if(i==="officialtype"){
                               txt = "ข้าราชการ";
                           }else if(i==="permanenttype"){
                               txt = "ลูกจ้างประจำ";
                           }else if(i==="governmenttype"){
                               txt = "พนักงานราชการ";
                           }else if(i==="mentalhealthtype"){
                               txt = "พนักงานกระทรวงสาธารณสุข";
                           }else if(i==="parttimetype"){
                               txt = "ลูกจ้างชั่วคราว";
                           }
                           dd.ticks.push(txt);
                           dd.s1.push(parseInt(v));
                        });       
                        var sum = parseInt(dd.s1[0]) + parseInt(dd.s1[1]) +parseInt(dd.s1[2])+parseInt(dd.s1[3]) +parseInt(dd.s1[4]);
                        $("#hrDashboard1").parent('.panel').children('.panel-heading').html("<h3>อัตรากำลัง(ปฏิบัติงานจริง) จำนวน <u>"+sum+"</u> คน</h3>");
                        def.resolve(dd);    
                    });
                    return def.promise();
                };
            $.when(callRpt1()).done(function(data){
                runPlot1(data.ticks,data.s1);
            });
        };
        //(ตาราง) อัตรากำลัง แยกตาม สายงานหลัก สนับสนุนสายงานหลัก สายงานสนับสนุน เลือกจาก dropdown list --->rpt4
        var workforce2_module = function(){ 
            var selDash2 = $("#hrDashboard2").closest('.panel').find('select');
            var selDash2Val = selDash2.prop('selected',true).val();
            var runPlot2 = function(data){
                var tbl = function(){
                        var sum = 0;
                        var x = '<div class="table-responsive">'+
                            '<table class="table table-striped">'+
                                '<thead>'+
                                    '<tr>'+
                                        '<th class="col-md-3"  style="vertical-align:middle;background-color:#92a8d1;">ตำแหน่ง</th>'+
                                        '<th class="col-md-3"  style="text-align:center;background-color:#92a8d1;">จำนวน</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody>';
                                $.each(data,function(i,v){
                                    sum += parseInt(v.cnt);
                                   x+='<tr>'+
                                           '<td class="col-md-3" >'+v.position_name+'</td>'+
                                           '<td class="col-md-3" style="text-align:center;">'+v.cnt+'</td>'+
                                      '</tr>';
                                });
                                    x+='<tr><td style="text-align:right;background-color:#92a8d1;">รวม</td><td style="text-align:center;background-color: #92a8d1;">'+sum+'</td></tr>';
                                    x+='</tbody>'+
                                '</table>'+
                            '</div>'; 
                    return x;
                };
                $("#hrDashboard2").empty().append(tbl);
            };
            var callRpt3 = function(typesch){
                            var def = $.Deferred();
                $.ajax({
                    url:"Rpt4.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{'type':JSON.stringify(typesch)}
                }).done(function(data){
                    def.resolve(data);  
                });
                return def.promise();
            };
            $.when(callRpt3(selDash2Val)).done(function(data){
                runPlot2(data);
            });
            selDash2.change(function(e){
                e.stopPropagation();
                e.preventDefault();
                selDash2Val = selDash2.prop('selected',true).val();
                $.when(callRpt3(selDash2Val)).done(function(data){
                    runPlot2(data);
                });
            });
        };
        //(กราฟ) อัตรากำลัง แยกตาม สายงานหลัก สนับสนุนสายงานหลัก สายงานสนับสนุน -->rpt6
        var workforce3_module = function(){
            content1.empty().append(
                '<div class="panel panel-default">'+
                    '<div class="panel-heading"><h3>อัตรากำลังแยกตามประเภทสายงาน</h3></div>'+
                    '<div class="panel-body" id="hrDashboard3"></div>'+
                '</div>'
            ); 
            var runPlot = function(ticks,s1){
                var plot;
                if (plot) {plot.destroy();}

                plot = $.jqplot('hrDashboard3', [s1], {
                    animate: !$.jqplot.use_excanvas,// Only animate if we're not using excanvas (not in IE 7 or IE 8)..
                    seriesDefaults:{
                        renderer:$.jqplot.BarRenderer,
                        pointLabels: { show: true }
                    },
                    axes: {
                        xaxis: {
                            renderer: $.jqplot.CategoryAxisRenderer,
                            ticks: ticks
                        }
                    },
                    highlighter: { show: false }
                });
            };
            var callRpt = function(){
                    var def = $.Deferred();
                    $.ajax({
                        url:"Rpt6.php", 
                        type:"post",
                        cache:false,
                        dataType:'json'
                    }).done(function(data){
                        var dd = {
                            's1':[],
                            'ticks':[]
                        };
                        $.each(data,function(i,v){
                            var txt = "";
                            if(v.a==='a'){
                                txt = "สายงานหลัก";
                            }else{
                                txt = v.a;
                            }
                           dd.ticks.push(txt);
                           dd.s1.push(parseInt(v.cnt));
                        });       
                        def.resolve(dd);    
                    });
                    return def.promise();
                };
            $.when(callRpt()).done(function(data){
                runPlot(data.ticks,data.s1);
            });
        };
        
        var a = function(){
            workforce1_moldule();
            setTimeout(function(){//เมื่อ timeout a(); ให้ run b();
              b();
            },6000);
        };
        var b = function(){
            workforce3_module();
            setTimeout(function(){
                //c();
                a();
            },6000);
        };
        
        //start All content
        a();
        workforce2_module();
    };//กราฟ สถิติ ด้านบุคลากร
    var gogov_print_moldule1 = function(data,OnlineUser){
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
        function replaceThaiMonth(Date){
            var str = $.fn.StrThaiDate4(Date);
            var nstr = (str.indexOf("เดือน")>=0)?str.replace("เดือน",""):str;
            return nstr;
        };//replace คำว่าเดือนออกจาก ฟังก์ชัน $.fn.StrThaiDate4
        function moneyType(money_type){
            var arr = $.fn.splitStrToArr(money_type,"_"),
                len = arr.length,
                str = "";
            if(len===0){
                str = money_type;
            }else if(len===2){
                str = arr[0]+' ปี '+arr[1];
            }else if(len===3){
                str = arr[0]+' ปี '+arr[1] + ' หมวด '+arr[2];
            }
            return str;
        };//string ประเภทเงินที่ใช้เดินทางไปราชการ
        function carType(car_type){
            var arr = $.fn.splitStrToArr(car_type,"_"),
                len = arr.length,
                str = "";
            if(len===0){
                str = car_type;
            }else if(len===3){
                str = arr[0]+' ทะเบียน '+arr[1] + ' '+arr[2];
            }
            return str;
        };//string ประเภทการเดินทาง
        function costEtm(cost_estimate){
            var t="",chk="",txtbath="",sumbath=0;
            $.each(cost_estimate,function(j,v){
                (v.bath)?chk="/":chk="";
                (v.bath)?txtbath=v.bath+" บาท":txtbath="";
                sumbath += (v.bath)?parseFloat((v.bath).replace(',', '')):0;
                t+=" [ "+chk+" ] "+v.costtype+" "+txtbath;
            });
            t+=(sumbath===0) ? " [/] ไม่ขอเบิกค่าใช้จ่าย":"";
            return [t,$.fn.numberWithCommas(sumbath)];
        }//ข้อความและผลรวมประมาณการค่าใช้จ่าย
        function costRegis(cost_registration){
            var txt = "โดยเบิกจาก";
            if(cost_registration.costtype==='เงินบำรุง'){
                txt += "เงินบำรุง ปี "+cost_registration.year+" งบดำเนินงาน หมวดค่าตอบแทน ใช้สอยและวัสดุ ";
            }else if(cost_registration.costtype==='เงินงบประมาณ'){
                txt += "เงินงบประมาณ ปี "+cost_registration.year+" หมวด "+cost_registration.group;
            }else{
                txt = "";
            }
            return txt;
        };//ข้อความเบิกเงินค่าลงทะเบียนจากงบอะไร ปี อะไร
        
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
        function chkDepHospital(){
            var txtRet = '';
            if(OnlineUser.id13_online===OnlineUser.skph_Boss_cid){//ผู้ที่ online เป็น ผอ เอง
                txtRet = ' โรงพยาบาลจิตเวชสงขลาราชนครินทร์';
            }else if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){//ผู้ที่ online เป็น หน.กลุ่มภารกิจ
                txtRet = ' '+data.groupwork_name;
            }else{//บุคลากรทั่วไป
                txtRet = ' '+data.groupwork_name+' '+data.dep_name;
            }
            return txtRet;
        };
        function chkDocNum(){
            var txtRet = '';
            if(OnlineUser.id13_online===OnlineUser.skph_Boss_cid){
                txtRet = ' สธ. 0834/';
            }else{
                txtRet = ' '+data.officialdoc_num;
            }
            return txtRet;
        };
        function chkPositionName(){
            var txtRet = '';
            if(OnlineUser.id13_online===OnlineUser.skph_Boss_cid){
                txtRet = 'ผู้อำนวยการ';
            }else{
                if ((data.position_name).indexOf("ผู้อำนวยการ") >= 0){
                    txtRet = data.position_name;
                }else if(data.position_name==='ผู้อำนวยการ'){
                    txtRet = data.position_name;
                }else{
                    txtRet = data.position_name+data.class_position;
                }
            }
            return txtRet;
        }
        function txtSignatureWorkgroupBoss(){
            var txtRet = '';
            if(
                OnlineUser.id13_online===OnlineUser.skph_Boss_cid ||
                OnlineUser.groupwork_code==='gwG'
            ){
                txtRet = 
                '<td>'+
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+ 
                    '<p>&nbsp;</p>'+ 
                    '<p>&nbsp;</p>'+    
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                '</td>';
            }else{
                txtRet = 
                '<td>'+
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+  
                    '<p>&nbsp;</p>'+ 
                    '<p>&nbsp;</p>'+ 
                    '<p>เรียนผู้อำนวยการ</p>'+    
                    '<p>.&nbsp;&nbsp;เพื่อโปรดพิจารณา</p>'+ 
                    '<p>&nbsp;</p>'+  
                    '<p>(ลงชื่อ)................................................................</p>'+
                    '<p>.     (..............................................................) </p>'+
                    '<p>(ตำแหน่ง).............................................................</p>'+
                    '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                '</td>';
            }
            return txtRet;
        };

        //doc1 = บันทึกขออนุมัติเดินทางไปราชการ
        var doc1 = {
            pageSize: 'A4',
            pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
            content: [
                {
                    columns: [//https://github.com/bpampuch/pdfmake/issues/26
                        {
                            width: '5%',
                            alignment: 'left',
                            stack: [
                                {
                                    //image: 'data:image/png;base64,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',
                                    image:'data:image/png;base64,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',
                                    width: 60,
                                    height: 57
                                }
                            ]
                        },
                        {
                            width: '95%',
                            alignment: 'center',
                            stack: [
                                ' ',
                                ' ',
                                {text:'บันทึกข้อความ',fontSize:29,bold:true,alignment:'center'}
                            ]
                        }
                    ]
                },
                {
                    text: [
                        {text: 'ส่วนราชการ',fontSize:18,bold:true},
                        {text:chklenStr(chkDepHospital(),5.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text: 'ที่',fontSize:18,bold:true},
                        {text:chklenStr(chkDocNum(),3.25),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        //{text:chklenStr(replaceThaiMonth(new Date()),2.85),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'วันที่  ',fontSize:16,bold:true},
                        {text:chklenStr(  (data.date_stamp)?data.date_stamp:''    ,2.45),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text: 'เรื่อง',fontSize:18,bold:true},
                        {text:chklenStr(' ขออนุมัติเดินทางไปราชการ',6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n\n',
                        //{text: 'เรียน ผู้อำนวยการ ',fontSize:16},
                        {text:'',fontSize:16},//  array[11]ผ่าน/ไม่ผ่าน หัวหน้ากลุ่มภารกิจ
                        '\n\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text: 'ด้วยข้าพเจ้า ',fontSize:16},
                        {text:chklenStr(data.pname),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:' ตำแหน่ง ',fontSize:16},
                        {text: chklenStr(chkPositionName(),2.7),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'พร้อมด้วย (ดังรายชื่อแนบท้าย) ',fontSize:16},
                        {text:'ขออนุมัติเดินทางไปราชการเพื่อ ',fontSize:16},
                        {text:chklenStr(data.gogov_for,2.6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'เรื่อง ',fontSize:16},
                        {text:chklenStr(data.gogov_topic,6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'ในวันที่ ',fontSize:16},
                        {text:chklenStr(data.gogov_real_date1,1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:' ถึงวันที่ ',fontSize:16},
                        {text:chklenStr(data.gogov_real_date2,1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:' จัดโดย ',fontSize:16},
                        {text:chklenStr(data.dep_project_owner,2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'สถานที่ ',fontSize:16},
                        {text:chklenStr(data.gogov_place,6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'ในการนี้ ข้าพเจ้าขออนุมัติ',fontSize:16},
                        '\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'1.ขออนุมัติเดินทางไปราชการ โดยไม่ถือเป็นวันลา ตั้งแต่วันที่ ',fontSize:16},
                        {text:chklenStr(data.gogov_date1,2.1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:' ถึงวันที่ ',fontSize:16},
                        {text:chklenStr(data.gogov_date2,1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:' รวมไปราชการครั้งนี้ ',fontSize:16},
                        {text:chklenStr((parseInt($.fn.DateDiff($.fn.ReverseStrThaiDate1(data.gogov_date1),$.fn.ReverseStrThaiDate1(data.gogov_date2)))+1) +' วัน',0.4),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:'และขอเบิกค่าใช้จ่ายในการเดินทางไปราชการจาก',fontSize:16},
                        '\n',
                        {text:chklenStr(moneyType(data.money_type),3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'2.ขออนุมัติเดินทางโดย ',fontSize:16},
                        {text:chklenStr((data.car_type)?carType(data.car_type)+'(ขาไป)':'',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:chklenStr((data.car_type2)?carType(data.car_type2)+'(ขากลับ)':'',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'ประมาณการค่าใช้จ่ายในการเดินทางไปราชการครั้งนี้ เป็นจำนวนเงิน ',fontSize:16},
                        {text:chklenStr(costEtm(data.cost_estimate)[1],0.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:'บาท แยกเป็นค่าใช้จ่าย ดังนี้',fontSize:16},
                        {text:costEtm(data.cost_estimate)[0],fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'3.ขออนุมัติเบิกเงินค่าลงทะเบียน(ถ้ามี) เป็นจำนวนเงิน ',fontSize:16},
                        {text:chklenStr(   (typeof data.cost_registration==='object')?data.cost_registration[0].bath:''   ,0.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text:' บาท ',fontSize:16},
                        {text:costRegis((typeof data.cost_registration==='object')?data.cost_registration[0].bath:''),fontSize:16},
                        '\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'4.ในระหว่างที่ข้าพเจ้าเดินทางไปราชการ ขอให้ (ชื่อ) ',fontSize:15},
                        {text:chklenStr(     
                            (data.person_instead)?( 
                                    ((data.person_instead).indexOf("_")>=0)?     
                                        ($.fn.splitStrToArr(data.person_instead,"_")[0]+' '+$.fn.splitStrToArr(data.person_instead,"_")[1]+' '+$.fn.splitStrToArr(data.person_instead,"_")[2] )        
                                :''):''        
                        ,2),fontSize:15,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text:'ปฏิบัติหน้าที่แทนข้าพเจ้า จนกว่าจะกลับมาปฏิบัติราชการตามปกติ',fontSize:16},
                        '\n\n',
                        {text:'.......................',fontSize:16,color:'white'},
                        {text:'จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ',fontSize:16}
                    ]//text array  
                }//object of content
            ]//content array
        };
        var doc2 = [
            {text: ' ', fontSize:16,pageBreak: 'after'},//สิ้นสุดหน้า                             
            {
                text:[
                    {text:'-2-',fontSize:16,alignment:'center'},
                    '\n\n',
                    {text:'รายชื่อผู้ร่วมเดินทางไปราชการ',decoration: 'underline',fontSize:18,bold:true,alignment:'center'},
                    '\n\n',
                    {text:'เรื่อง ',fontSize:18,bold:true},
                    {text:chklenStr(data.gogov_topic,6),fontSize:15,decoration: 'underline',decorationStyle: 'dotted'},
                    '\n\n'
                ]
            }
        ];//หน้า 2 ใบเบิกค่าเดินทาง
        function tbldoc1(){
            var x =
            '<table  style="font-size:16px;">'+
                '<tr>'+//ลงชื่อ เจ้าตัว
                    txtSignatureWorkgroupBoss()+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ)................................................................</p>'+
                        '<p>.       ('+OnlineUser.pname+') </p>'+
                        '<p>(ตำแหน่ง) '+(chkPositionName())+'</p>'+
                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                    '</td>'+
                '</tr>'+
            '</table>';
            return x;
        };
        function tbldoc2(){
            var x =
            '<table  style="font-size:16px;" border="1" widths="9%,41%,40%,10%">'+
                '<tr>'+
                    '<td>ลำดับที่</td>'+
                    '<td>ชื่อ-สกุล</td>'+
                    '<td>ตำแหน่ง</td>'+
                    '<td>หมายเหตุ</td>'+
                '</tr>';
                $.each(data.group_gogov2,function(i,v){
                    x+=
                    '<tr>'+
                        '<td>'+(i+1)+'</td>'+
                        '<td>'+$.fn.splitStrToArr(v,"_")[0]+'</td>'+
                        '<td>'+($.fn.splitStrToArr(v,"_")[1])+($.fn.splitStrToArr(v,"_")[2])+'</td>'+
                        '<td></td>'+
                    '</tr>';
                });
            x+='</table>';
            return x;
        };
        //console.log(OnlineUser);
        if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){//หัวหน้ากลุ่มภารกิจไปราชการเอง
            doc1.content[1].text[11].text=chklenStr('เรียน ผู้อำนวยการ',1.8);
        }else if(OnlineUser.id13_online===OnlineUser.skph_Boss_cid){//ผอ ไปราชการเอง
            doc1.content[1].text[11].text=chklenStr('เรียน อธิบดีกรมสุขภาพจิต',1.8);
        }else{//เรียน ผู้อำนวยการ
            if(OnlineUser.groupwork_code==='gwG'){//มีกลุ่มภารกิจนั้นขึ้นตรง ผอ groupwork=ค่าว่าง
                doc1.content[1].text[11].text=chklenStr('เรียน ผู้อำนวยการ',1.8);
            }else{//กลุ่มภารกิจทั่วไป
                doc1.content[1].text[11].text=chklenStr('เรียน ผู้อำนวยการ(ผ่านหัวหน้า'+OnlineUser.groupwork_name+')',1.8);
            }
        } 
        //page1
        var endpage = [{text: '',fontSize:16}];
        ParseHtml(endpage,tbldoc1());
        $.each(endpage,function(i,v){
            doc1.content.push(v);
        });
        //page2
        if((data.group_gogov).length>0){
            ParseHtml(doc2,tbldoc2());
            $.each(doc2,function(i,v){
                doc1.content.push(v);
            });
        }
        pdfMake.createPdf(doc1).open();
    };//print ตอนขออนุมัติไปราชการ
    var gogov_print_moldule2 = function(data){
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
        function replaceThaiMonth(Date){
            var str = $.fn.StrThaiDate4(Date);
            var nstr = (str.indexOf("เดือน")>=0)?str.replace("เดือน",""):str;
            return nstr;
        };//replace คำว่าเดือนออกจาก ฟังก์ชัน $.fn.StrThaiDate4
        
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
        };//content = [];ParseHtml(content, simpleHtm);pdfMake.createPdf({content: content}).download();
        function CreateParagraph() {
                var p = {text:[]};
                return p;
        };
        //ข้อมูลขาไปราชการ gogov_new
        var doc2ObjGogov,doc2ObjGogovPrint;
        if(data.json_gogov){
           doc2ObjGogov = $.parseJSON(data.json_gogov);//ข้อมูลขาไปราชการ 
           if(doc2ObjGogov.json_print){
               doc2ObjGogovPrint = $.parseJSON(doc2ObjGogov.json_print);//ข้อมูลขาไปราชการ (json_print)
           }
        } 
        
        function chkGofromGoback(str){
            var newstr = "";
            if(str){
                if(str==='บ้านพัก'){
                    newstr='[/]บ้านพัก [ ]สำนักงาน [ ]ประเทศไทย ';
                }else if(str==='สำนักงาน'){
                    newstr='[ ]บ้านพัก [/]สำนักงาน [ ]ประเทศไทย ';
                }else if(str==='ประเทศไทย'){
                    newstr='[ ]บ้านพัก [ ]สำนักงาน [/]ประเทศไทย ';
                }
            }
            return newstr;
        };
        function doc2SumBudget(b1,b2,b3,b4,b5){
            var bd1=0,bd2=0,bd3=0,bd4=0,bd5=0,sum=0,ret=[];
            bd1 = isNaN(parseInt(b1.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(b1.toString().replace(/,/g, ''), 10); 
            bd2 = isNaN(parseInt(b2.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(b2.toString().replace(/,/g, ''), 10); 
            bd3 = isNaN(parseInt(b3.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(b3.toString().replace(/,/g, ''), 10); 
            bd4 = isNaN(parseInt(b4.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(b4.toString().replace(/,/g, ''), 10); 
            bd5 = isNaN(parseInt(b5.toString().replace(/,/g, ''), 10)) ? 0 : parseInt(b5.toString().replace(/,/g, ''), 10); 
            sum = bd1+bd2+bd3+bd4+bd5;
            ret = [$.fn.numberWithCommas(sum),$.fn.getBathText(sum)];
            return ret;
        };
        function doc2Agreement(agreementData){
            var ret=[],arrSp=[],reg='',date='',bath=0;
            if(agreementData){
                if(agreementData.indexOf("_")>=0){
                    arrSp = $.fn.splitStrToArr(data.agreement,"_");
                    reg = arrSp[0];
                    date = arrSp[1].toString();//.substring(1,10);
                    bath = (arrSp[2])?arrSp[2]:0;
                    ret = [reg,date,bath];
                }
            }
            return ret;
        };
        
        var doc1 = {
            pageSize: 'A4',
            pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
            content: [
                {
                    text:[
                        {text: 'สัญญายืมเงินเลขที่ ',fontSize:16},
                        {text:chklenStr( 
                                    (doc2Agreement(data.agreement)[2])  ? doc2Agreement(data.agreement)[0]  :""
                            ,0.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'วันที่ ',fontSize:16},
                        {text:chklenStr( 
                                    (doc2Agreement(data.agreement)[2])  ?    $.fn.formatDate4(doc2Agreement(data.agreement)[1]).strThaiDate2  :  ""
                            ,3.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'ส่วนที่ 1',fontSize:16},
                        '\n',
                        {text: 'ชื่อผู้ยืม ',fontSize:16},
                        {text: chklenStr(  (doc2Agreement(data.agreement)[2])  ?    ((doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"") :  ""  ,1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' จำนวนเงิน ',fontSize:16},
                        {text:chklenStr( (doc2Agreement(data.agreement)[2]) ? doc2Agreement(data.agreement)[2]  :""   ,2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท แบบ 8708',fontSize:16},
                        '\n\n',
                        {text: 'ใบเบิกค่าใช้จ่ายในการเดินทางไปราชการ',fontSize:20,bold:true,alignment:'center'},
                        '\n\n',
                        {text: 'ที่ทำการ โรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16,alignment:'right'},
                        '\n\n',
                        {text:replaceThaiMonth(new Date()),fontSize:16,alignment:'right',decoration: 'underline',decorationStyle: 'dotted'},
                        '\n\n',
                        {text: 'เรื่อง ขออนุมัติเบิกค่าใช้จ่ายในการเดินทางไปราชการ',fontSize:16},
                        '\n\n',
                        {text: 'เรียน ผู้อำนวยการโรงพยาบาลจิตเวชสงขลาราชนคริทร์',fontSize:16},
                        '\n\n',
                        {text:'............................',fontSize:16,color:'white'},
                        {text: 'ตามคำสั่ง/บันทึก ที่ ',fontSize:16},
                        {text:chklenStr((doc2ObjGogovPrint)?doc2ObjGogovPrint.officialdoc_num:'',1.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' ลงวันที่ ',fontSize:16},
                        {text:chklenStr((doc2ObjGogovPrint.date_stamp)?doc2ObjGogovPrint.date_stamp:'',1.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' ได้อนุมัติให้ ',fontSize:16},
                        '\n',
                        {text: 'ข้าพเจ้า ',fontSize:16},
                        {text: chklenStr((doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"",1.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' ตำแหน่ง ',fontSize:16},
                        {text: chklenStr((doc2ObjGogovPrint.position_name)?doc2ObjGogovPrint.position_name:"",1.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: chklenStr((doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"",2.4),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text: ' สังกัด ',fontSize:16},
                        {text: chklenStr((doc2ObjGogovPrint.dep_name)?doc2ObjGogovPrint.dep_name:"",2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' พร้อมด้วย ',fontSize:16},
                        {text: chklenStr(' สัมภาระ ',2.6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text: ' เดินทางไปปฏิบัติราชการ เพื่อ',fontSize:16},
                        {text: chklenStr((doc2ObjGogovPrint.gogov_for)?doc2ObjGogovPrint.gogov_for:"",0.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: chklenStr((doc2ObjGogovPrint.gogov_topic)?doc2ObjGogovPrint.gogov_topic:"",4),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n',
                        {text: ' โดยออกเดินทางจาก ',fontSize:16},
                        {text: chklenStr((data.go_from)?chkGofromGoback(data.go_from):"",2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' ตั้งแต่วันที่ ',fontSize:16},
                        {text: chklenStr((data.go_from_date)?$.fn.formatDate4(data.go_from_date).strThaiDate2:"",1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' เวลา ',fontSize:16},
                        {text: chklenStr((data.go_from_date)?$.fn.formatDate4(data.go_from_date).formatTime:"",0.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' น.',fontSize:16},
                        '\n',
                        {text: 'และกลับถึง ',fontSize:16},
                        {text: chklenStr((data.go_back)?chkGofromGoback(data.go_back):"",2.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' วันที่ ',fontSize:16},
                        {text: chklenStr((data.go_back_date)?$.fn.formatDate4(data.go_back_date).strThaiDate2:"",1.7),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' เวลา ',fontSize:16},
                        {text: chklenStr((data.go_back_date)?$.fn.formatDate4(data.go_back_date).formatTime:"",0.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' น.',fontSize:16},
                        {text: ' รวมเวลาไปราชการครั้งนี้ ',fontSize:16},
                        {text: chklenStr((data.go_from_date&&data.go_back_date)?$.fn.DateDiff4(data.go_from_date,data.go_back_date)[0]:"",0.15),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'วัน ',fontSize:16},
                        {text: chklenStr((data.go_from_date&&data.go_back_date)?$.fn.DateDiff4(data.go_from_date,data.go_back_date)[1]:"",0.15),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' ชั่วโมง',fontSize:16},
                        '\n\n',
                        {text:'............................',fontSize:16,color:'white'},
                        {text: 'ข้าพเจ้าขอเบิกค่าใช้จ่ายในการเดินทางไปราชการสำหรับ [ ] ข้าพเจ้า [ ] คณะเดินทาง ดังนี้',fontSize:16},
                        '\n',
                        {text: 'ค่าเบี้ยเลี้ยงเดินทาง ประเภท',fontSize:16},
                        {text: chklenStr(' ',2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'จำนวน ',fontSize:16},
                        {text: chklenStr( ((data.datediff)[0]  )?parseInt( (data.datediff)[0] ):'',0.14),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' วัน รวม ',fontSize:16},
                        {text: chklenStr( (data.budget1)?$.fn.numberWithCommas(parseInt(data.budget1)):'',0.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท',fontSize:16},
                        '\n',
                        {text: 'ค่าเช่าที่พักประเภท',fontSize:16},
                        {text: chklenStr(' ',2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: 'จำนวน ',fontSize:16},
                        {text: chklenStr( (data.budget2_list1 !=='__')?$.fn.splitStrToArr(data.budget2_list1,'_')[2]:'',0.12),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' วัน รวม ',fontSize:16},
                        {text: chklenStr( (data.budget2)?$.fn.numberWithCommas(parseInt(data.budget2)):'',0.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท',fontSize:16},
                        '\n',
                        {text: 'ค่าพาหนะ',fontSize:16},
                        {text: chklenStr(' ',3.85),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' รวม ',fontSize:16},
                        {text: chklenStr( (data.budget3)?$.fn.numberWithCommas(parseInt(data.budget3)):'',0.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท',fontSize:16},
                        '\n',
                        {text: 'ค่าใช้จ่ายอื่น',fontSize:16},
                        {text: chklenStr(' ',3.78),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' รวม ',fontSize:16},
                        {text: chklenStr(  $.fn.numberWithCommas(   ((data.budget4)? $.fn.StrToNumInt(data.budget4):0) + ((data.budget5)?$.fn.StrToNumInt(data.budget5):0)   )    ,0.3),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท',fontSize:16},
                        '\n',
                        {text:'............................',fontSize:16,color:'white'},
                        {text:'............................',fontSize:16,color:'white'},
                        {text:'............................',fontSize:16,color:'white'},
                        {text:'.................',fontSize:16,color:'white'},
                        {text: 'รวมทั้งสิ้น ',fontSize:16},
                        {text: chklenStr(doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[0],1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        {text: ' บาท',fontSize:16},
                        '\n',
                        {text: 'จำนวนเงิน (ตัวอักษร) ',fontSize:16},
                        {text: chklenStr(doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[1],3.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                        '\n\n'
                    ]//text array
                }//object of content
            ]//content array
        };//หน้า 1 ใบเบิกค่าเดินทาง
        var doc2 = [
            {text: ' ', fontSize:16,pageBreak: 'after'},//สิ้นสุดหน้า                             
            {
                text:[
                    {text:'-2-',fontSize:16,alignment:'center'},
                    '\n',
                    {text:' ',fontSize:16,alignment:'center'}
                ]
            }
        ];//หน้า 2 ใบเบิกค่าเดินทาง
        var doc3 = [
            {text: ' ', fontSize:16,pageBreak: 'after'},//สิ้นสุดหน้า                             
            {
                text:[
                    {text:'-3-',fontSize:16,alignment:'center'},
                    '\n',
                    {text:' ',fontSize:16,alignment:'center'}
                ]
            }
        ];//หน้า 3 ใบเบิกค่าเดินทาง
        var doc4 = [  
            {
                text:[
                    {text:'-4-',fontSize:16,alignment:'center'},
                    '\n',
                    {text:'ส่วนที่ 2',fontSize:16,alignment:'right'},
                    '\n',
                    {text:'แบบ 8708',fontSize:16,alignment:'right'},
                    '\n',
                    {text:'หลักฐานการจ่ายเงินค่าใช้จ่ายในการเดินทางไปราชการ',styles: [ 'header'],fontSize:16,alignment:'center'},
                    '\n',
                    {text:'ชื่อส่วนราชการ โรงพยาบาลจิตเวชสงขลาราชนครินทร์ จังหวัด สงขลา',fontSize:16,alignment:'center'},
                    '\n',
                    {text:'ประกอบใบเบิกค่าใช้จ่ายในการเดินทางของ ',fontSize:16,alignment:'center'},
                    {text:doc2ObjGogovPrint.pname+' ลง'+$.fn.StrThaiDate4(new Date()),fontSize:16,alignment:'center',decoration: 'underline',decorationStyle: 'dotted'}
           
                ],pageOrientation: 'landscape', pageBreak: 'before' ,margin: 0//margin: [ 5, 5, 5, 5 ]
            }
        ];
        
        function tbldoc1(){
            var x =
            '<table  style="font-size:16px;">'+
                '<tr>'+
                    '<td>'+ 
                        '<p>.                    ข้าพเจ้าขอรับรองว่ารายการที่กล่าวมาข้างต้นเป็นความจริง และหลักฐานการจ่ายที่ส่งมาด้วย จำนวน......ฉบับ'+
                            'รวมทั้งจำนวนเงินที่ขอเบิกถูกต้องตามกฎหมายทุกประการ'+
                        '</p>'+
                     '</td>'+ 
                '</tr>'+
            '</table>'+        
            '<table  style="font-size:16px;">'+
                '<tr>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                    '</td>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ).....................................................ผู้ขอรับเงิน</p>'+
                        '<p>.     ('+( (doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"" )+') </p>'+
                        '<p>ตำแหน่ง '+( (doc2ObjGogovPrint.position_name)?doc2ObjGogovPrint.position_name:"" )+
                        ( (doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"" ) +
                        '</p>'+
                    '</td>'+
                '</tr>'+
            '</table>';
            return x;
        };//ลายเซ็น หน้า 1 ใบเบิกค่าเดินทาง
        function tbldoc2(){
            var x =       
            '<table  style="font-size:16px;" border="1">'+
                '<tr>'+
                    '<td>'+
                        '<p>ได้ตรวจสอบหลักฐานการเบิกจ่ายเงินที่แนบถูกต้องแล้ว</p>'+ 
                        '<p>เห็นควรอนุมัติให้เบิกจ่ายได้</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ)...............................................................</p>'+
                        '<p>.     (..............................................................) </p>'+
                        '<p>(ตำแหน่ง).............................................................</p>'+
                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                    '</td>'+
                    '<td>'+
                        '<p>.               อนุมัติให้เบิกจ่ายได้</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ)............................................................</p>'+
                        '<p>.     (..............................................................) </p>'+
                        '<p>(ตำแหน่ง).............................................................</p>'+
                        ( (doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"" ) +
                        '</p>'+
                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                    '</td>'+
                '</tr>'+
            '</table>'+
            '<table  style="font-size:16px;">'+
                '<tr>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>ได้รับเงินค่าใช้จ่ายในการเดินทางไปราชการ      จำนวน</p>'+ 
                        '<p>('+doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[1]+')</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ)............................................................ผู้รับเงิน</p>'+
                        '<p>.       ('+( (doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"" )+') </p>'+
                        '<p>ตำแหน่ง '+( (doc2ObjGogovPrint.position_name)?doc2ObjGogovPrint.position_name:"" )+
                        ( (doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"" ) +
                        '</p>'+
                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>จากเงินยืมตามสัญญาเลขที่ <u>'+ ( (doc2Agreement(data.agreement)[2])  ? doc2Agreement(data.agreement)[0]  :"") +'</u></p>'+
                           
                    '</td>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>'+doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[0]+' บาท</p>'+ 
                        '<p>&nbsp;ไว้เป็นการถูกต้องแล้ว</p>'+ 
                        '<p>&nbsp;</p>'+ 
                        '<p>(ลงชื่อ)............................................................ผู้จ่ายเงิน</p>'+
                        '<p>.     (..............................................................) </p>'+
                        '<p>(ตำแหน่ง).............................................................</p>'+
                        '<p>&nbsp;&nbsp;วันที่..................../..................../.....................</p>'+
                        '<p>&nbsp;</p>'+ 
                        '<p>&nbsp;</p>'+ 
                         ' วันที่ '+  (   (doc2Agreement(data.agreement)[2])  ?    $.fn.formatDate4(doc2Agreement(data.agreement)[1]).strThaiDate2  :  ""      )  +'</p>'+ 
                    '</td>'+
                '</tr>'+
            '</table>'+
            '<table  style="font-size:16px;" border="1">'+
                '<tr>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p><u><b>หมายเหตุ</b></u></p>'+ 
                        '<p>......................................................................................'+
                        '......................................................................................</p>'+
                        '<p>......................................................................................'+
                        '......................................................................................</p>'+
                        '<p>......................................................................................'+
                        '......................................................................................</p>'+
                        '<p>......................................................................................'+
                        '......................................................................................</p>'+
                    '</td>'+
                '</tr>'+
            '</table>'+
             '<table  style="font-size:16px;" border="1">'+
                '<tr>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+ 
                        '<p><u><b>คำชี้แจง</b></u></p>'+ 
                        '<p>1.กรณีเดินทางเป็นหมู่คณะและจัดทำใบเบิกค่าใช้จ่ายรวมฉบับเดียวกัน หากระยะเวลาในการเริ่มต้น และสิ้นสุดการเดินทาง'+
                        'ของแต่ละบุคคลแตกต่างกัน ให้แสดงรายละเอียดของวันเวลาที่แตกต่างกันของบุคคลนั้นในช่องหมายเหตุ</p>'+
                        '<p>2.กรณียื่นขอเบิกค่าใช้จ่ายรายบุคคล ให้ผู้ขอรับเงินเป็นผู้ลงลายมือชื่อผู้รับเงินและวันเดือนปีที่รับเงิน กรณีที่มีการยืมเงิน'+
                        'ให้ระบุวันที่ที่ได้รับเงินยืม เลขที่สัญญายืมเงิน และวันที่อนุมัติเงินยืมด้วย</p>'+
                        '<p>3.กรณีที่ยื่นขอเบิกค่าใช้จ่ายรวมเป็นหมู่คณะ ผู้ขอรับเงินมิต้องลงลายมือชื่อในช่องผู้รับเงิน ทั้งนี้ให้ผู้มีสิทธิแต่ละคนลง'+
                        'ลายมือชื่อผู้รับเงินในหลักฐานการจ่ายเงิน(ส่วนที่ 2)</p>'+
                    '</td>'+
                '</tr>'+
            '</table>';
            return x;
        };//ลายเซ็น หน้า 2 ใบเบิกค่าเดินทาง
        function tbldoc3(){
                function bd3Cal(bd3list){
                    var strBath = $.fn.splitStrToArr(bd3list,'_')[2];
                    var n = 0;
                    if(strBath){
                        //n = $.fn.numberWithCommas($.fn.StrToNumInt(strBath));
                        n = $.fn.StrToNumInt(strBath);
                        //console.log(n);
                    }
                    return n;
                };
                var sumNoRecipt = parseInt(bd3Cal(data.budget3_list1)) + 
                        parseInt(bd3Cal(data.budget3_list2)) + 
                        parseInt(bd3Cal(data.budget3_list3)) + 
                        parseInt(bd3Cal(data.budget3_list4)) + 
                        parseInt(bd3Cal(data.budget3_list5)) + 
                        parseInt(bd3Cal(data.budget3_list6)) + 
                        parseInt(bd3Cal(data.budget3_list7)) + 
                        parseInt(bd3Cal(data.budget3_list8));
                /*console.log(
                        //parseInt(bd3Cal(data.budget3_list1)),
                        //parseInt(bd3Cal(data.budget3_list2)),
                       // parseInt(bd3Cal(data.budget3_list3)) , 
                       // parseInt(bd3Cal(data.budget3_list4)) , 
                       // parseInt(bd3Cal(data.budget3_list5)) , 
                       // parseInt(bd3Cal(data.budget3_list6)) , 
                       // parseInt(bd3Cal(data.budget3_list7)) , 
                       // parseInt(bd3Cal(data.budget3_list8))
                );*/
                var txtAddrFrom = (data.addr_from)?' '+data.addr_from+' ':"",
                txtAddrBack = (data.addr_back)?' '+data.addr_back+' ':""; 
                var x = 
                    '<table border="1" style="font-size:14px;">'+
                        '<tr>'+
                            '<td>'+//เริ่มเนื้อหาทั้งหมดในนี้
                                '<p style="text-align:right;">แบบ บก.111</p>'+
                                '<p style="font-weight:bold;text-align:center;">ใบรับรองแทนใบเสร็จรับเงิน</p>'+
                                '<p> </p>'+
                                '<p style="text-align:center;">ส่วนราชการ โรงพยาบาลจิตเวชสงขลาราชนครินทร์</p>'+
                                '<p> </p>'+
                                '<p> </p>'+
                                '<table border="1" widths="12%,70%,10%,8%">'+
                                    '<tr>'+
                                        '<td>วัน เดือน ปี</td>'+
                                        '<td>รายการ</td>'+
                                        '<td>จำนวนเงิน</td>'+
                                        '<td>หมายเหตุ</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>.............</td>'+
                                        '<td>'+//เส้นทางเดินทาง
                                            '<p style="text-align:left;">'+
                                                '<u>เดินทางจากที่พักเลขที่</u> '+txtAddrFrom+
                                            '</p>'+ 
                                            '<p style="text-align:left;">'+
                                                '<u>ถึงที่พักเลขที่</u> '+txtAddrBack+
                                            '</p>'+
                                        '</td>'+
                                        '<td>.............</td>'+
                                        '<td>'+
                                            '<p style="text-align:center;">พร้อม<br>สัมภาระ</p>'+
                                        '</td>'+
                                    '</tr>';
                                    if(data.budget3_list1){
                                        if( (data.budget3_list1).indexOf('_')>=0 && (data.budget3_list1)!=='___' ){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list1,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list1,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list1)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list1,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list2){
                                        if( (data.budget3_list2).indexOf('_')>=0  && (data.budget3_list2)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list2,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list2,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list2)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list2,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list3){
                                        if( (data.budget3_list3).indexOf('_')>=0  && (data.budget3_list3)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list3,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list3,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list3)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list3,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list4){
                                        if( (data.budget3_list4).indexOf('_')>=0  && (data.budget3_list4)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list4,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list4,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list4)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list4,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list5){
                                        if( (data.budget3_list5).indexOf('_')>=0  && (data.budget3_list5)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list5,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list5,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list5)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list5,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list6){
                                        if( (data.budget3_list6).indexOf('_')>=0  && (data.budget3_list6)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list6,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list6,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list6)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list6,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list7){
                                        if( (data.budget3_list7).indexOf('_')>=0  && (data.budget3_list7)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list7,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list7,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list7)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list7,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    if(data.budget3_list8){
                                        if( (data.budget3_list8).indexOf('_')>=0  && (data.budget3_list8)!=='___'){
                                            x+='<tr>'+
                                                '<td>'+
                                                    '<p style="text-align:left;">'+
                                                        $.fn.splitStrToArr(data.budget3_list8,'_')[0].substring(0,10)+
                                                    '</p>'+
                                                '</td>'+
                                                '<td><p style="text-align:left;">'+$.fn.splitStrToArr(data.budget3_list8,'_')[1]+'</p></td>'+
                                                '<td><p style="text-align:right;">'+bd3Cal(data.budget3_list8)+'</p></td>'+
                                                '<td>'+$.fn.splitStrToArr(data.budget3_list8,'_')[3]+'</td>'+
                                            '</tr>';
                                        }
                                    }
                                    x+='<tr>'+//รวมเป็นเงิน
                                        '<td></td>'+
                                        '<td><p style="text-align:center;">รวมเป็นเงิน</p></td>'+
                                        '<td>'+
                                              '<p style="text-align:right;">'+$.fn.numberWithCommas(sumNoRecipt)+'</p>'+
                                        '</td>'+
                                        '<td></td>'+
                                    '</tr>'+
                                '</table>'+
                                '<p> </p>'+
                                '<p> </p>'+
                                '<p style="text-align:left;">'+
                                    'รวมทั้งสิ้น (ตัวอักษร)  '+
                                    '<u>'+$.fn.getBathText($.fn.StrToNumInt($.fn.numberWithCommas(sumNoRecipt)))+'</u>'+
                                '</p>'+
                                '<p style="text-align:left;">ข้าพเจ้า '+( (doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"" )+
                                    ' ตำแหน่ง '+( (doc2ObjGogovPrint.position_name)?doc2ObjGogovPrint.position_name:"" )+
                                    ( (doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"" )+' กองโรงพยาบาลจิตเวชสงขลาราชนครินทร์ ขอรับรองว่า รายจ่ายข้างต้นนี้ ไม่อาจเรียกใบเสร็จ'+
                                    'รับเงินจากผู้รับได้ และข้าพเจ้าได้จ่ายไปในงานของราชการโดยแท้'+
                                '</p>'+
                                '<p> </p>'+
                                '<p> </p>'+
                                '<p style="text-align:center;">'+
                                    '<p >ลงชื่อ...............................................ผู้รับเงิน</p>'+
                                    '<p>('+( (doc2ObjGogovPrint.pname)?doc2ObjGogovPrint.pname:"" )+')    </p>'+
                                    '<p>ตำแหน่ง  '+( (doc2ObjGogovPrint.position_name)?doc2ObjGogovPrint.position_name:"" )+
                                    ( (doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:"" ) +
                                    '</p>'+
                                    '<p>วันที่...............................................................</p>'+
                                '</p>'+
                            '</td>'+
                        '</tr>'+
                    '</table>';    
                return x;
        };//ลายเซ็น หน้า 3 ใบเบิกค่าเดินทาง
        function tbldoc4(){
            var bd34 = $.fn.numberWithCommas(  
                (  (data.budget4) ? parseInt(data.budget4):0  ) + ( (data.budget5)?parseInt(data.budget5):0 )   
            );
            bd34 = bd34.toString();
            var x =
            '<p>&nbsp;</p>'+
            '<table border="1" widths="3%,19%,23%,7%,7%,7%,7%,7%,7%,8%,6%" style="font-size:16px;">'+
                '<tr>'+
                    '<td rowspan="2"><p style="text-align:center;">ลำดับ<br>ที่</p></td>'+
                    '<td rowspan="2"><p style="text-align:center;">ชื่อ</p></td>'+
                    '<td rowspan="2"><p style="text-align:center;">ตำแหน่ง</p></td>'+
                    '<td colspan="4"><p style="text-align:center;">ค่าใช้จ่าย</p></td>'+
                    '<td colspan="4">ค่าเช่าที่พัก</td>'+
                    '<td colspan="4">ค่าพาหนะ</td>'+
                    '<td colspan="4">ค่าใช้จ่ายอื่น</td>'+
                    '<td rowspan="2"><p style="text-align:center;">รวม</p></td>'+
                    '<td rowspan="2"><p style="text-align:center;">ลายมือชื่อ<br>ผู้รับเงิน</p></td>'+
                    '<td rowspan="2"><p style="text-align:center;">วันเดือนปี<br>ที่รับเงิน</p></td>'+
                    '<td rowspan="2"><p style="text-align:center;">หมายเหตุ</p></td>'+
                '</tr>'+
                '<tr>'+
                    '<td>ลำดับที่</td>'+
                    '<td>ชื่อ</td>'+
                    '<td>ตำแหน่ง</td>'+
                    '<td>ค่าเบี้ยเลี้ยง</td>'+
                    '<td>ค่าเช่าที่พัก</td>'+
                    '<td>ค่าพาหนะ</td>'+
                    '<td>ค่าใช้จ่ายอื่น</td>'+
                    '<td>รวม</td>'+
                    '<td>ลายมือชื่อผู้รับเงิน</td>'+
                    '<td>วันเดือนปีที่รับเงิน</td>'+
                    '<td>หมายเหตุ</td>'+
                '</tr>'+

                '<tr>'+
                    '<td rowspan="35">1</td>'+
                    '<td rowspan="35">'+doc2ObjGogovPrint.pname+'</td>'+
                    '<td rowspan="35">'+(
                        (doc2ObjGogovPrint.position_name) +
                        ((doc2ObjGogovPrint.class_position)?doc2ObjGogovPrint.class_position:'')
                        )+'</td>'+
                    '<td rowspan="35">'+(  (data.budget1)?$.fn.numberWithCommas(parseInt(data.budget1)):''  )+'</td>'+
                    '<td rowspan="35">'+(  (data.budget2)?$.fn.numberWithCommas(parseInt(data.budget2)):''  )+'</td>'+
                    '<td rowspan="35">'+( (data.budget3)?$.fn.numberWithCommas(parseInt(data.budget3)):'' )+'</td>'+
                    '<td rowspan="35">'+
                        $.fn.numberWithCommas(  
                            (  (data.budget4) ? parseInt(data.budget4):0  ) + ( (data.budget5)?parseInt(data.budget5):0 )   
                        )+
                    '</td>'+
                    '<td rowspan="35">'+(doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[0])+'</td>'+
                    '<td rowspan="35">&nbsp;</td>'+
                    '<td rowspan="35">&nbsp;</td>'+
                    '<td rowspan="35">&nbsp;</td>'+
                '</tr>';
                for(var i=1;i<=35;i++){
                    x+=
                    '<tr>'+
                        '<td colspan="3">รวมเงิน</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>&nbsp;</td>'+
                        '<td>'+(doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[0])+'</td>'+
                        '<td colspan="3">ตามสัญญายืมเงินเลขที่</td>'+
                        '<td>&nbsp;.</td>'+
                        '<td>&nbsp;.</td>'+     
                    '</tr>';
                }
            x+=    
            '</table>'+
            '<table  style="font-size:16px;">'+
                '<tr>'+
                    '<td><p>จำนวนเงินรวมทั้งสิ้น (ตัวอักษร) ('+(doc2SumBudget(data.budget1,data.budget2,data.budget3,data.budget4,data.budget5)[1])+')</p></td>'+
                    '<td>'+
                        '<p>&nbsp;</p>'+  
                        '<p>(ลงชื่อ).....................................................ผู้จ่ายเงิน</p>'+
                        '<p>.     (.....................................................) </p>'+
                        '<p>ตำแหน่ง .....................................................</p>'+
                        '<p>วันที่ .....................................................</p>'+
                    '</td>'+
                '</tr>'+
            '</table>';
            return x;
        }//ตารางขวาง หน้า 4 หลักฐานการเบิกเงิน
        //page1
        var endpage1 = [{text: '',fontSize:16}];
        ParseHtml(endpage1,tbldoc1());
        $.each(endpage1,function(i,v){
            doc1.content.push(v);
        });
        //page2
        ParseHtml(doc2,tbldoc2());
        $.each(doc2,function(i,v){
            doc1.content.push(v);
        });
        //page3
        ParseHtml(doc3,tbldoc3());
        $.each(doc3,function(i,v){
            doc1.content.push(v);
        });
        //page4
        ParseHtml(doc4,tbldoc4());
        $.each(doc4,function(i,v){
            doc1.content.push(v);
        });
        pdfMake.createPdf(doc1).open();
    };//print ตอนเขียนรายงานการเดินทางไปราชการ
    var gogov1_moldule = function(){//console.log('เขียนบันทึกไปราชการ');
        var content = $("#myContent");
        var htmlform = function(){
            var x =
            '<div class="container-fluid">'+
                '<h2 class="text-center">ขออนุมัติเดินทางไปราชการ</h2>'+
                '<form class="col-xs-12">'+//col-offset-1
                    '<div class="form-group">'+//nth-child(1)
                        '<label for="name" class="cols-sm-2 control-label">เลขที่หนังสือส่ง(กรอกเฉพาะเลข running)</label>'+
                        '<div class="row">'+        
                            '<div class="col-xs-3 no-gutter">'+
                                '<input type="text"  maxlength = "12" class="form-control noradius" name="child1_txt1" />'+
                            '</div>'+
                            '<div class="col-xs-3 no-gutter">'+
                                '<input type="text"  maxlength = "3" class="form-control noradius" name="child1_txt2"  placeholder="เฉพาะเลข running" autocomplete="off"/>'+
                            '</div>'+
                            '<div class="col-xs-3 no-gutter">'+
                                '<input type="text"  maxlength = "3" class="form-control noradius" name="child1_txt3"  placeholder="ลงวันที่" autocomplete="off"/>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//nth-child(1)

                    '<div class="form-group">'+//nth-child(2)
                        '<label for="name" class="cols-sm-2 control-label">ขออนุมัติคนเดียว/เป็นหมู่คณะ</label>'+
                        '<div class="input-group">'+             
                            '<div  class="btn-group" data-toggle="buttons" >'+
                                '<label class="btn">'+
                                  '<input type="radio" value="1" name="child2_rdo" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เดินทางคนเดียว</span>'+
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="2" name="child2_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เดินทางเป็นคณะ</span>'+                                                     
                                '</label>'+
                            '</div>'+ 
                            '<input type="text" name="child2_txt" value="0" class="hidden" maxlength="2" style="width:30px;" placeholder="กี่คน"">'+
                        '</div>'+

                        '<label for="name" class="cols-sm-2 control-label">เดินทางไปราชการเพื่อ...</label>'+
                        '<div class="input-group">'+             
                            '<div  class="btn-group" data-toggle="buttons" >'+
                                '<label class="btn">'+
                                  '<input type="radio" value="ประชุม" name="child22_rdo" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ประชุม</span>'+
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="อบรม" name="child22_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  อบรม</span>'+                                                     
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="สัมมนา" name="child22_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  สัมมนา</span>'+                                                     
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="ไปเป็นวิทยากร" name="child22_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ไปเป็นวิทยากร</span>'+                                                     
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="ไปตรวจราชการ" name="child22_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ไปตรวจราชการ</span>'+                                                     
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="radio" value="0" name="child22_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  อื่นๆ ระบุ</span>'+                                                     
                                '</label>'+
                                '<label class="btn">'+
                                  '<input type="text"  name="txtchild22_rdo">'+                                                     
                                '</label>'+
                            '</div>'+ 
                        '</div>'+
                    '</div>'+//nth-child(2)
            
                    '<div class="form-group has-error">'+//nth-child(3)
                        '<label for="name" class="cols-sm-2 control-label">ไปราชการเรื่อง</label>'+
                        '<div class="cols-sm-10">'+
                            '<div class="input-group">'+
                                '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                                '<input type="text" class="form-control" name="child3_txt"  placeholder="ไปราชการเรื่อง"/>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//nth-child(3)

                    '<div class="form-group has-error">'+//nth-child(4)
                        '<label for="name" class="cols-sm-2 control-label">ระหว่างวันที่</label>'+
                        '<div class="cols-sm-10">'+
                            '<div class="form-group">'+
                                '<div class="input-group">'+
                                    '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                                    '<input type="text" class="form-control" name="child4_txt1"  placeholder="ระหว่างวันที่" autocomplete="off"/>'+
                                    '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                                    '<input type="text" class="form-control" name="child4_txt2"  placeholder="ถึงวันที่" autocomplete="off"/>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//nth-child(4)

                    '<div class="form-group">'+//nth-child(5)
                        '<label for="name" class="cols-sm-2 control-label">ผู้จัดเป็นหน่วยงานภายใน/ภายนอก กรมสุขภาพจิต</label>'+
                        '<div class="input-group">'+
                            '<div  class="btn-group" data-toggle="buttons">'+
                                '<div class="row-fluid">'+
                                    '<div class="span6">'+
                                        '<label class="btn" style="white-space:nowrap;">'+
                                            '<div style="display:inline-block;">'+
                                                '<input type="radio" value="1" name="child5_rdo" style="display:none;" checked><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> หน่วยงานภายในกรมสุขภาพจิต</span>'+  
                                            '</div>'+
                                            '<div class="child5chosen" style="display:inline-block;"></div>'+//action chosen ชื่อหน่วยงานในสังกัดกรม
                                        '</label>'+
                                    '</div>'+    
                                    '<div class="span6">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="2" name="child5_rdo" style="display:none;" ><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> หน่วยงานภายนอกกรมสุขภาพจิต</span>'+                                                     
                                            '<input type="text"  value="" name="child5_txt1" value="ไม่ระบุ">'+
                                        '</label>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+ 
                        '</div>'+
                        '<label for="name" class="cols-sm-2 control-label">ไปราชการ(สถานที่)</label>'+
                        '<div class="input-group has-error">'+
                            '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                            '<input type="text" class="form-control"  name="child5_txt2" placeholder="กรุณาระบุสถานที่ให้ชัดเจน เช่น โรงแรมอมารี แขวงดอนเมือง เขตดอนเมือง กรุงเทพฯ"/>'+
                        '</div>'+
                    '</div>'+//nth-child(5)

                    '<div class="form-group has-error">'+//nth-child(6)
                        '<label for="name" class="cols-sm-2 control-label">ขออนุมัติเดินทางโดยไม่ถือเป็นวันลา ระหว่างวันที่</label>'+
                        '<div class="form-group">'+
                            '<div class="input-group">'+
                                '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                                '<input type="text" class="form-control" name="child6_txt1"  placeholder="ระหว่างวันที่" autocomplete="off" />'+
                                '<span class="input-group-addon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>'+
                                '<input type="text" class="form-control" name="child6_txt2"  placeholder="ถึงวันที่" autocomplete="off" />'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//nth-child(6)

                    '<div class="row" style="border:1px solid;">'+//nth-child(7)  
                        '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+  //เบิกค่าเดินทางจาก
                            '<label for="name" class="cols-sm-2 control-label">เบิกค่าเดินทางจาก</label>'+
                            '<div class="input-group btn-group" data-toggle="buttons">'+   
                                '<div class="row">'+
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="เงินบำรุง" name="child71_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เงินบำรุง</span>'+  
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-xs-6 chayanon-padding-0">'+    
                                        $.fn.HTML_selYear(3,3)+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="เงินงบประมาณ" name="child71_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เงินงบประมาณ</span>'+  
                                        '</label>'+
                                    '</div>'+ 
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        $.fn.HTML_selYear(3,3)+
                                    '</div>'+
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<select class="form-control">'+
                                            '<option value="0">-ประเภท-</option>'+
                                            '<option value="งบบุคลากร">งบบุคลากร</option>'+
                                            '<option value="งบดำเนินงาน">งบดำเนินงาน</option>'+
                                            '<option value="งบลงทุน">งบลงทุน</option>'+
                                            '<option value="งบอุดหนุน">งบอุดหนุน</option>'+
                                            '<option value="งบรายจ่ายอื่น">งบรายจ่ายอื่น</option>'+
                                        '</select>'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="เงินโครงการ" name="child71_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เงินโครงการ</span>'+  
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 chayanon-padding-0">'+    
                                        '<input type="text" name="child71_txt1" class="form-control" placeholder="ชื่อโครงการ">'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                        '<input type="radio" value="ทุนส่วนตัว" name="child71_rdo"  style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ทุนส่วนตัว</span>'+
                                    '</label>'+
                                '</div>'+ 
                            '</div>'+
                        '</div>'+    
                        '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+ //เดินทางโดย    
                            '<label for="name" class="cols-sm-2 control-label">เดินทางโดย(ขาไป)</label>'+
                            '<div class="input-group btn-group" data-toggle="buttons">'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                        '<input type="radio" value="รถโดยสารประจำทาง" name="child72_rdo" checked style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถโดยสารประจำทาง</span>'+
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                      '<input type="radio" value="รถไฟ" name="child72_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถไฟ</span>'+                                                     
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                      '<input type="radio" value="เครื่องบิน" name="child72_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เครื่องบิน</span>'+                                                     
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+  
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="รถยนต์ส่วนตัว" name="child72_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถยนต์ส่วนตัว</span>'+  
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child72_txt1" class="form-control" placeholder="ทะเบียน">'+
                                    '</div>'+
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child72_txt2" class="form-control" placeholder="ระยะทาง(km)">'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+    
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="รถยนต์ส่วนกลาง" name="child72_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถยนต์ส่วนกลาง</span>'+  
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child72_txt3" class="form-control" placeholder="ทะเบียน">'+
                                    '</div>'+
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child72_txt4" class="form-control" placeholder="ชื่อพนักงานขับรถ">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+  
                        '<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+ //เดินทางโดย    
                            '<label for="name" class="cols-sm-2 control-label">เดินทางโดย(ขากลับ)</label>'+
                            '<div class="input-group btn-group" data-toggle="buttons">'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                        '<input type="radio" value="รถโดยสารประจำทาง" name="child73_rdo" checked style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถโดยสารประจำทาง</span>'+
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                      '<input type="radio" value="รถไฟ" name="child73_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถไฟ</span>'+                                                     
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<label class="btn">'+
                                      '<input type="radio" value="เครื่องบิน" name="child73_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เครื่องบิน</span>'+                                                     
                                    '</label>'+
                                '</div>'+ 
                                '<div class="row">'+  
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="รถยนต์ส่วนตัว" name="child73_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถยนต์ส่วนตัว</span>'+  
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child73_txt1" class="form-control" placeholder="ทะเบียน">'+
                                    '</div>'+
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child73_txt2" class="form-control" placeholder="ระยะทาง(km)">'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+    
                                    '<div class="col-xs-6 chayanon-padding-0">'+
                                        '<label class="btn">'+
                                            '<input type="radio" value="รถยนต์ส่วนกลาง" name="child73_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  รถยนต์ส่วนกลาง</span>'+  
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child73_txt3" class="form-control" placeholder="ทะเบียน">'+
                                    '</div>'+
                                    '<div class="col-xs-3 chayanon-padding-0">'+    
                                        '<input type="text" name="child73_txt4" class="form-control" placeholder="ชื่อพนักงานขับรถ">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+//nth-child(7)     

                    '<div class="row" style="border:1px solid;border-top:0;border-bottom:0;margin-bottom:2px;">'+//nth-child(8)  
                        '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+
                            '<div class="input-group">'+
                                '<label for="name" class="control-label">หนังสือเรื่องเดิม</label>'+
                                '<div class="row">'+
                                    '<div class="col-xs-6">'+
                                        '<input type="text" name="child8_txt1" class="form-control" placeholder="ที่.......">'+
                                    '</div>'+
                                    '<div class="col-xs-6">'+    
                                        '<input type="text" name="child8_txt2" class="form-control" placeholder="ลงวันที่...........">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+    
                        '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+
                            '<div class="input-group">'+
                                '<label  class="control-label">ไฟล์แนบ</label>'+
                                '<input type="file" name="child8_file" accept=".pdf" />'+
                            '</div>'+
                        '</div>'+       
                    '</div>'+//nth-child(8)

                    '<div class="row" style="border:1px solid;">'+//nth-child(9)  
                        '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+  //ค่าเบี้ยเลี้ยง,ค่าที่พัก,ค่าพาหนะ
                            '<label for="name" class="cols-sm-2 control-label">ประมาณการค่าใช้จ่าย</label>'+
                            '<div class="input-group btn-group" data-toggle="buttons">'+   
                                '<div class="row">'+
                                    '<div class="col-xs-6 ">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="child9_chkbox" value="ค่าเบี้ยเลี้ยง" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าเบี้ยเลี้ยง</span>'+
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 ">'+    
                                        '<input type="text" name="child9_txt1" class="form-control" placeholder="ค่าเบี้ยเลี้ยง(บาท)" disabled>'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="col-xs-6 ">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="child9_chkbox" value="ค่าที่พัก" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าที่พัก</span>'+
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 ">'+    
                                        '<input type="text" name="child9_txt2" class="form-control" placeholder="ค่าที่พัก(บาท)" disabled>'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="col-xs-6 ">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="child9_chkbox" value="ค่าพาหนะ" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าพาหนะ</span>'+
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 ">'+    
                                        '<input type="text" name="child9_txt3" class="form-control" placeholder="ค่าพาหนะ(บาท)" disabled>'+
                                    '</div>'+
                                '</div>'+ 
                            '</div>'+
                        '</div>'+    
                        '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+ //ค่าใช้จ่ายอื่นๆ,ไม่ขอเบิกค่าใช้จ่าย   
                            '<label for="name" class="cols-sm-2 control-label"></label>'+
                            '<div class="input-group btn-group" data-toggle="buttons">'+  
                                '<div class="row">'+
                                    '<div class="col-xs-6 ">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="child9_chkbox" value="ค่าใช้จ่ายอื่นๆ" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าใช้จ่ายอื่นๆ</span>'+
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 ">'+    
                                        '<input type="text" name="child9_txt4" class="form-control" placeholder="ค่าใช้จ่ายอื่นๆ(บาท)" disabled>'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="col-xs-6 ">'+
                                        '<label class="btn">'+
                                            '<input type="checkbox" name="child9_chkbox" value="6" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ไม่ขอเบิกค่าใช้จ่าย</span>'+
                                        '</label>'+
                                    '</div>'+  
                                    '<div class="col-xs-6 "></div>'+
                                '</div>'+ 
                            '</div>'+
                        '</div>'+    
                    '</div>'+//nth-child(9) 
                    
                    '<div class="row" style="border:1px solid;border-top:0;border-bottom:0;">'+//nth-child(10) 
                        '<label  class="col-xs-2 control-label">ขอเบิกค่าลงทะเบียน</label>'+
                        '<div class="input-group btn-group" data-toggle="buttons">'+  
                            '<div class="row">'+   
                                '<input type="text" name="child10_txt1" class="form-control" placeholder="ค่าลงทะเบียน(บาท)"/>'+ 
                            '</div>'+   
                            '<div class="row">'+
                                '<div class="col-xs-6 chayanon-padding-0">'+
                                    '<label class="btn">'+
                                        '<input type="radio" value="เงินบำรุง" name="child10_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เงินบำรุง</span>'+  
                                    '</label>'+
                                '</div>'+ 
                                '<div class="col-xs-6 chayanon-padding-0">'+    
                                    $.fn.HTML_selYear(3,3)+
                                '</div>'+
                            '</div>'+ 
                            '<div class="row">'+
                                '<div class="col-xs-6 chayanon-padding-0">'+
                                    '<label class="btn">'+
                                        '<input type="radio" value="เงินงบประมาณ" name="child10_rdo" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  เงินงบประมาณ</span>'+  
                                    '</label>'+
                                '</div>'+ 
                                '<div class="col-xs-3 chayanon-padding-0">'+    
                                    $.fn.HTML_selYear(3,3)+
                                '</div>'+
                                '<div class="col-xs-3 chayanon-padding-0">'+    
                                    '<select class="form-control">'+
                                        '<option value="ไม่ระบุ">-ประเภท-</option>'+
                                        '<option value="งบบุคลากร">งบบุคลากร</option>'+
                                        '<option value="งบดำเนินงาน">งบดำเนินงาน</option>'+
                                        '<option value="งบลงทุน">งบลงทุน</option>'+
                                        '<option value="งบอุดหนุน">งบอุดหนุน</option>'+
                                        '<option value="งบรายจ่ายอื่น">งบรายจ่ายอื่น</option>'+
                                    '</select>'+
                                '</div>'+
                            '</div>'+ //row
                        '</div>'+//data-toggle="buttons"    
                    '</div>'+//nth-child(10) 
                    
                    '<div class="row" style="border:1px solid;">'+//nth-child(11) 
                        '<div class="col-md-3 no-gutter">ผู้ปฏิบัติหน้าที่แทนข้าพเจ้าคือ</div>'+
                        '<div class="col-md-3 no-gutter"></div>'+ //ชื่อ-สกุล
                        '<div class="col-md-3 no-gutter"></div>'+//ตำแหน่ง 
                        '<div class="col-md-3 no-gutter"></div>'+//ระดับตำแหน่ง        
                    '</div>'+ //nth-child(11) 
                    
                    '<div class="row"  style="text-align:center;">'+//nth-child(12) 
                        '<a href="#save"  type="button" class="btn chayanon-btn3d-green" style="display:inline-block">SAVE</a>'+
                        '<a href="#close"  type="button" class="btn chayanon-btn3d-orange" style="display:inline-block">CLOSE</a>'+
                    '</div>'+//nth-child(12) 
                '</form>'+
            '</div>';//container
            return x;
        };
        //html config
        content.empty().append(htmlform);
        var frm = content.find('form'),
            nth1 = frm.children('div:nth-child(1)'),nth2 = frm.children('div:nth-child(2)'),
            nth3 = frm.children('div:nth-child(3)'),nth4 = frm.children('div:nth-child(4)'),
            nth5 = frm.children('div:nth-child(5)'),nth6 = frm.children('div:nth-child(6)'),
            nth7 = frm.children('div:nth-child(7)'),nth8 = frm.children('div:nth-child(8)'),
            nth9 = frm.children('div:nth-child(9)'),nth10 = frm.children('div:nth-child(10)'),
            nth11 = frm.children('div:nth-child(11)'),nth12 = frm.children('div:nth-child(12)');
        function ATC_person(ajaxData){
            var x = '<select  data-placeholder="ค้น...." class="form-control"><option value=""></option>';
                $.each(ajaxData,function(i,v){
                    x+='<option value="'+v.id+'" data-position_code="'+v.position_code+'" data-class_position_shortname="'+v.class_position_shortname+'">'+v.pname+v.fname+' '+v.lname+'</option>';
                });
                x+='</select>';
            return x;
        };    
        function ATC_otherDep(ajaxData){
            var x = 
            '<select  data-placeholder="หน่วยงานในสังกัดกรมสุขภาพจิต" class="form-control"><option value="0" selected>ไม่ระบุ</option>';
                $.each(ajaxData,function(i,v){
                    x+='<option value="'+v.id+'">'+v.dmh_child_name+'</option>';
                });
                x+='</select>';
            return x;  
        };
        function ATC_position(ajaxData){
            var x = 
            '<select  data-placeholder="ตำแหน่ง" class="form-control"><option value="0">ไม่ระบุ</option>';
                $.each(ajaxData,function(i,v){
                    x+='<option value="'+v.position_code+'">'+v.position_name+'</option>';
                });
                x+='</select>';
            return x;  
        };
        function ATC_classpo(ajaxData){
            var x = 
            '<select  data-placeholder="ระดับ" class="form-control"><option value="0"> - </option>';
                $.each(ajaxData,function(i,v){
                    x+='<option value="'+v.class_position_shortname+'">'+v.class_position_type_name2+'</option>';
                });
                x+='</select>';
            return x;  
        };
        //ajax call html
        $.when(
           $.fn.def_OnlineUser(),
           $.fn.def_PersonData(),
           $.fn.def_DepartmentOtherData(),
           $.fn.def_PositionData(),
           $.fn.def_ClassPositionData()
        )
        .done(function(onlineUser,person,otherDep,position,classpo){
            function positionCodeToPositionName(positionCode){
                var ret = "";
                if(positionCode){
                    $.each(position,function(i,v){
                        if(v.position_code===positionCode){
                            ret = v.position_name;
                        }
                    });
                }
                return ret;
            };
            function ClasspositionCodeToClassPositionName(ClasspositionCode){
                var ret = "";
                if(ClasspositionCode){
                    $.each(classpo,function(i,v){
                        if(v.class_position_shortname===ClasspositionCode){
                            ret = v.class_position_type_name2;
                        }
                    });
                }
                return ret;
            };
            //pupup บอกสถานะบันทึกสำเร็จหรือไม่
            var txtmodal = function(){
                var x = 
                '<div  class="modal hidden fade" role="dialog">'+
                    '<div class="modal-dialog">'+
                        '<div class="modal-content col-xs-10  well well-sm">'+
                            '<div class="modal-body"></div>'+
                            '<div class="modal-footer">'+
                                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
                return x;
            };
            var modal = $(txtmodal());
            modal.modal({keyboard:false,backdrop:'static'}).modal('hide');
            modal.on('hidden.bs.modal', function(){$(this).data('bs.modal', null);});
            //html config
            nth1.find("input[name='child1_txt1']").val("สธ.0830");//เลขหนังสือตัวหลัก onlineUser.document_code
            nth1.find("input[name='child1_txt3']").ConfigDatePicker();//ลงวันที่
            nth4.find("input[name='child4_txt1']").ConfigDatePicker();//วันที่ไปราชการ1 (ในโครงการ)
            nth4.find("input[name='child4_txt2']").ConfigDatePicker();//วันที่ไปราชการ2 (ในโครงการ)
            nth5.find('.child5chosen').empty().append(ATC_otherDep(otherDep));//หน่วยงานภายในกรมสุขภาพจิต
            nth6.find("input[name='child6_txt1']").ConfigDatePicker();//วันที่ไปราชการ1 (ไม่ถือเป็นวันลา)
            nth6.find("input[name='child6_txt2']").ConfigDatePicker();//วันที่ไปราชการ2 (ไม่ถือเป็นวันลา)
            nth11.children("div:nth-child(2)").empty().append(ATC_person(person));//ชื่อบุคลากรที่ ปฏิบัติหน้าที่แทน
            nth11.children("div:nth-child(3)").empty().append(ATC_position(position));//ชื่อตำแหน่งของบุคลากรที่ ปฏิบัติหน้าที่แทน
            nth11.children("div:nth-child(4)").empty().append(ATC_classpo(classpo));//ระดับตำแหน่งของบุคลากรที่ ปฏิบัติหน้าที่แทน
            
            //รายชื่อผู้ร่วมเดินทางไปราชการ
            var ch2txt = nth2.find("input[name='child2_txt']");
            nth2.find("input[name='child2_rdo']").change(function(){
               if($(this).val()==='2'){
                   ch2txt.removeClass('hidden').show();
               }else{
                   ch2txt.toggleClass('hidden').hide(); 
                   ch2txt.val("");
                   ch2txt.closest('.input-group').find('.namegroup').remove();
               }
            });
            ch2txt.blur(function(){
                var n = parseInt($(this).val());
                function htm(n){
                    var x =
                    '<div class="namegroup">';
                        for(var i =0;i<n;i++){
                            x+='<div class="namegroupAutocom"></div>';
                        }
                    x+='</div>';
                    return x;
                };   
                if(n>0){
                    $(this).closest('.input-group').find('.namegroup').remove();
                    $(this).closest('.input-group').append(htm(n));
                    var nm = $(this).closest('.input-group').find('.namegroupAutocom');
                    nm.empty().append(ATC_person(person));
                    nm.find('select').select2();
                }
            });
            
            //จัดโดย...(ผู้จัดในกรม/นอกกรม)
            var othDep1 = nth5.find('.child5chosen >select').select2();//select หน่วยงานในสังกัดกรมสุขภาพจิต
            var othDep2 = nth5.find("input[name='child5_txt1']");
            var othSel = '1';//เลือก หน่วยงานในสังกัดกรมสุขภาพจิตโดย default
            nth5.find("input[name='child5_rdo']").first().prop('checked',true).parent('label.btn').toggleClass('active');
            nth5.find("input[name='child5_rdo']").change(function(){othSel = $(this).val();});
            
            //ขอเบิกค่าใช้จ่ายเดินทางไปราชการจากเงินอะไร...
            var ch71f = nth7.find("input[name='child71_rdo']").first();
            ch71f.prop('checked',true).parent('label.btn').toggleClass('active');//เลือกเงินบำรุงให้ก่อน
            ch71f.closest('div.row').find("select >option[value="+((new Date()).getFullYear())+"]").prop('selected',true);//เลือกปีงบปัจจุบันให้ก่อน
            
            //เดินทางโดยอะไร เครื่องบิน รถทัวร์...
            var ch72f = nth7.find("input[name='child72_rdo']").first();
            ch72f.prop('checked',true).parent('label.btn').toggleClass('active');//เลือกรถทัวร์ให้ก่อน
            var ch73f = nth7.find("input[name='child73_rdo']").first();
            ch73f.prop('checked',true).parent('label.btn').toggleClass('active');//เลือกรถทัวร์ให้ก่อน
            
            //ประมาณการค่าใช้จ่ายไปราชการ
            nth9.find("input[type=text]").myNumberic();
            nth9.find("input[name='child9_chkbox']").change(function(){
                var chkbox = $(this);
                var txtbox = chkbox.closest('div.row').find('input[type=text]');
                if(chkbox.is(':checked')){
                    txtbox.prop('disabled',false);
                }else{
                    txtbox.prop('disabled',true);
                    txtbox.val("");
                }
            });
            nth9.find("input[name='child9_chkbox']").last().change(function(){
               var $this = $(this);
               if($this.is(':checked')){
                   nth9.find("input[name='child9_chkbox']").not($this).prop('checked',false).parent('label').removeClass('ative');
                   nth9.find("input[name='child9_chkbox']").closest('div.row').find('input[type=text]').prop('disabled',true).val('');
               }
            });
            //ค่าลงทะเบียน
            nth10.find("input[name='child10_txt1']").myNumberic();
            
            //ผู้ปฏิบัติหน้าที่แทน
            nth11.find('select').select2();
            //save to database
            nth12.find("a[href='#save']").click(function(e){
                e.preventDefault();
                var chk = false,gogov_forValue;
                //เงื่อนไข ไปราชการเพื่อ....ถ้าเลือกอื่นๆ ให้เก็บค่า text แทน radio value
                var txtchild22_rdo =$("input[name='txtchild22_rdo']").val();
                if((txtchild22_rdo.length>0)&&(nth2.find("input[name='child22_rdo']:checked").val()==='0')){
                    gogov_forValue=txtchild22_rdo;
                }else{
                    gogov_forValue=nth2.find("input[name='child22_rdo']:checked").val();
                }
                //ชุด object ข้อมูลที่จะส่งไปให้ฝั่ง PHP บันทึกข้อมูล
                var objdata = {
                    'person_id':onlineUser.person_id,
                    'officialdoc_num':nth1.find("input[name='child1_txt1']").val()+'/'+nth1.find("input[name='child1_txt2']").val(),
                    'date_stamp':nth1.find("input[name='child1_txt3']").data('date_true'),
                    'group_gogov':[],//person id ผู้ร่วมเดินทางไปราชการ
                    'gogov_for':gogov_forValue,//เดินทางไปราชการเพื่อ...อบรม ประชุม  สัมมนา
                    'gogov_topic':nth3.find("input[name='child3_txt']").val(),//ไปราชการเรื่อง
                    'gogov_real_date1':nth4.find("input[name='child4_txt1']").data('date_true'),//วันที่ไปราชการ1 (ในโครงการ)
                    'gogov_real_date2':nth4.find("input[name='child4_txt2']").data('date_true'),//วันที่ไปราชการ2 (ในโครงการ)
                    'dep_project_owner':(othSel==='1')?othDep1.children('option:selected').val():othDep2.val(),//จัดโดย (หน่วยงานผู้จัด)
                    'gogov_place':nth5.find("input[name='child5_txt2']").val(),//ไปราชการ (สถานที่)
                    'gogov_date1':nth6.find("input[name='child6_txt1']").data('date_true'),//วันที่ไปราชการ1(ไม่ถือเป็นวันลา)
                    'gogov_date2':nth6.find("input[name='child6_txt2']").data('date_true'),//วันที่ไปราชการ2(ไม่ถือเป็นวันลา)
                    'money_type':'',//เบิกค่าเดินทางจาก...เงินงบประมาณ_2563_งบลงทุน
                    'car_type':'',//ขออนุมัติเดินทางโดย...รถยนต์ส่วนตัว_กม7867_70km
                    'car_type2':'',//ขออนุมัติเดินทางโดย...รถยนต์ส่วนตัว_กม7867_70km
                    'project_owner_docnum':'',//เลขหนังสือเรื่องเดิม
                    'cost_estimate':[],//ประมาณการค่าใช้จ่ายไปราชการ [{'costtype':ค่าเบี้ยเบี้ยง,'bath':100}]
                    'cost_registration':[{bath:0,costtype:'',year:'',group:''}],//ค่าลงทะเบียน [{bath:5000,costtype:เงินบำรุง,year:2563,'group':งบบุคลากร}]
                    'person_instead':'',//ผู้ปฏิบัติหน้าที่แทนข้าพเจ้าคือ
                    'json_print':null,
                    'status_use':'Y'
                };
                var objprint = {
                    'person_id':onlineUser.person_id,//id บุคลากร
                    'pname':onlineUser.pname,//ข้าพเจ้านายชญานนท์ สุวรรณชัย
                    'id13_online':onlineUser.id13_online,//เลขบัตรปชช
                    'dep_name':onlineUser.dep_name,//ชื่อหน่วยงานหลัก
                    'groupwork_name':onlineUser.groupwork_name,//ใช้สำหรับ เรียนผู้อำนวยการ ผ่าน..หัวหน้ากลุ่มภารกิจอำนวยการ
                    'groupwork_Boss_id13':onlineUser.groupwork_Boss_id13,//id13หัวหน้ากลุ่มภารกิจ
                    'position_name':onlineUser.position_name,//ตำแหน่งนักทรัพยากรบุคคล
                    'class_position':onlineUser.class_position,//ปฏิบัติการ
                    'officialdoc_num':objdata.officialdoc_num,//เลขหนังสืออนุมัติไปราชการ
                    'date_stamp':nth1.find("input[name='child1_txt3']").val(),///เลขหนังสืออนุมัติไปราชการ ลงวันที่ เท่าไหร่
                    'group_gogov':[],//พร้อมด้วย(ดังรายชื่อแนบท้าย)รายชื่อผู้ร่วมเดินทางไปราชการ
                    'group_gogov2':[],//พร้อมด้วย(ดังรายชื่อแนบท้าย)รายชื่อผู้ร่วมเดินทางไปราชการ
                    'gogov_for':gogov_forValue,//เดินทางไปราชการเพื่อ...อบรม ประชุม  สัมมนา
                    'gogov_topic':nth3.find("input[name='child3_txt']").val(),//ไปราชการเรื่อง
                    'gogov_real_date1':nth4.find("input[name='child4_txt1']").val(),//วันที่ไปราชการ1 (ในโครงการ)
                    'gogov_real_date2':nth4.find("input[name='child4_txt2']").val(),//วันที่ไปราชการ2 (ในโครงการ)
                    'dep_project_owner':(othSel==='1')?othDep1.find('option:selected').text():othDep2.val(),//จัดโดย (หน่วยงานผู้จัด)
                    'gogov_place':nth5.find("input[name='child5_txt2']").val(),//ไปราชการ (สถานที่)
                    'gogov_date1':nth6.find("input[name='child6_txt1']").val(),//วันที่ไปราชการ1(ไม่ถือเป็นวันลา)
                    'gogov_date2':nth6.find("input[name='child6_txt2']").val(),//วันที่ไปราชการ2(ไม่ถือเป็นวันลา)
                    'money_type':'',//เบิกค่าเดินทางจาก...เงินงบประมาณ_2563_งบลงทุน
                    'car_type':'',//ขออนุมัติเดินทางโดย...รถยนต์ส่วนตัว_กม7867_70km
                    'car_type2':'',//ขออนุมัติเดินทางโดย...รถยนต์ส่วนตัว_กม7867_70km
                    'project_owner_docnum':'',//เลขหนังสือเรื่องเดิม
                    'cost_estimate':[],//ประมาณการค่าใช้จ่ายไปราชการ [{'costtype':ค่าเบี้ยเบี้ยง,'bath':100}]
                    'cost_registration':[{bath:0,costtype:'',year:'',group:''}],//ค่าลงทะเบียน [{bath:5000,costtype:เงินบำรุง,year:2563,'group':งบบุคลากร}]
                    'person_instead':''//ผู้ปฏิบัติหน้าที่แทนข้าพเจ้าคือ
                };
                
                //รายชื่อผู้ร่วมเดินทางไปราชการ
                var s1 = ch2txt.closest('.input-group').find('.namegroupAutocom >select');
                if(s1.length>0){
                    s1.each(function(i,v){
                        if($(this).find('option:selected').val()){//push array รายชื่อผู้ร่วมเดินทางไปราชการ
                            objdata.group_gogov.push($(this).find('option:selected').val());
                            objprint.group_gogov.push($(this).find('option:selected').text());
                            //ทำชื่อผู้ร่วมเดินทางใหม่ ให้มีตำแหน่งเข้าไปด้วย
                            objprint.group_gogov2.push(
                                $(this).find('option:selected').text()+'_'+
                                positionCodeToPositionName($(this).find('option:selected').data('position_code'))+'_'+
                                ClasspositionCodeToClassPositionName($(this).find('option:selected').data('class_position_shortname'))
                            );
                        } 
                    });
                }
                
                //เบิกค่าเดินทางจาก...เงินงบประมาณ_2563_งบลงทุน
                nth7.find("input[name='child71_rdo']").each(function(){
                    if($(this).prop('checked')){
                        objdata.money_type +=$(this).val();
                        objprint.money_type =objdata.money_type;
                        if($(this).closest('div.row').find('select')){
                            $(this).closest('div.row').find('select').each(function(){
                                objdata.money_type +=($(this).find('option:selected').val()!=='0')?'_'+$(this).find('option').filter(':selected').text():"";
                                objprint.money_type = objdata.money_type;
                            });
                        }
                        if($(this).closest('div.row').find('input[type=text]').val()){//กรณีเลือกเงินโครงการให้เป็น text ชื่อโครงการ
                            objdata.money_type +=' '+$(this).closest('div.row').find('input[type=text]').val();
                            objprint.money_type = objdata.money_type;
                        }
                    } 
                });
                
                //ขออนุมัติเดินทางโดย...รถยนต์ส่วนตัว_กม7867_70km
                nth7.find("input[name='child72_rdo']").each(function(){
                    if($(this).prop('checked')){
                        objdata.car_type +=$(this).val();
                        objprint.car_type =objdata.car_type;
                        $(this).closest('div.row').find('input[type=text]').each(function(){
                            if($(this).val()){
                                objdata.car_type +='_'+$(this).val();
                                objprint.car_type = objdata.car_type;
                            }
                        });
                    } 
                });
                nth7.find("input[name='child73_rdo']").each(function(){
                    if($(this).prop('checked')){
                        objdata.car_type2 +=$(this).val();
                        objprint.car_type2 =objdata.car_type2;
                        $(this).closest('div.row').find('input[type=text]').each(function(){
                            if($(this).val()){
                                objdata.car_type2 +='_'+$(this).val();
                                objprint.car_type2 = objdata.car_type2;
                            }
                        });
                    } 
                });
                
                //เรื่องเดิม เลขหนังสือ
                if(nth8.find("input[name='child8_txt1']").val()){
                    objdata.project_owner_docnum = nth8.find("input[name='child8_txt1']").val();
                    if(nth8.find("input[name='child8_txt2']").val()){
                        objdata.project_owner_docnum = objdata.project_owner_docnum +'_'+nth8.find("input[name='child8_txt2']").val();
                    }
                }
                objprint.project_owner_docnum = objdata.project_owner_docnum;
                
                //ประมาณการค่าใช้จ่ายไปราชการ
                nth9.find("input[name='child9_chkbox']").each(function(){
                    var chkbox = $(this);
                    var txtbox = chkbox.closest('div.row').find('input[type=text]');
                    if (typeof txtbox.val() !== "undefined"){
                        objdata.cost_estimate.push({'costtype':chkbox.val(),'bath':txtbox.val()});
                        objprint.cost_estimate.push({'costtype':chkbox.val(),'bath':txtbox.val()});
                    }
                });
                
                //ค่าลงทะเบียน [{bath:5000,costtype:เงินบำรุง,year:2563,group:งบบุคลากร}]
                if(nth10.find("input[name='child10_txt1']").val()!=='undefined'){
                    objdata.cost_registration[0].bath = nth10.find("input[name='child10_txt1']").val();//ค่าลงทะเบียน บาท
                    objprint.cost_registration[0].bath = nth10.find("input[name='child10_txt1']").val();//ค่าลงทะเบียน บาท
                    nth10.find("input[name='child10_rdo']").each(function(){
                        if($(this).prop('checked')){
                            objdata.cost_registration[0].costtype=$(this).val();//ปรเภท เงินบำรุง เงินงบประมาณ
                            objprint.cost_registration[0].costtype=$(this).val();//ปรเภท เงินบำรุง เงินงบประมาณ
                            if($(this).closest('div.row').find('select')){
                                $(this).closest('div.row').find('select').each(function(){//เป็นปีอะไร
                                    if( isNaN(parseInt( $(this).find('option').filter(':selected').text())) ){//เป็นงบอะไร
                                        objdata.cost_registration[0].group = $(this).find('option').filter(':selected').val();
                                        objprint.cost_registration[0].group = $(this).find('option').filter(':selected').val();
                                    }else{//เป็นปีอะไร
                                        objdata.cost_registration[0].year = $(this).find('option').filter(':selected').text();
                                        objprint.cost_registration[0].year = $(this).find('option').filter(':selected').text();
                                    }
                                });
                            }
                        } 
                    });
                }
                //ผู้ปฏิบัติหน้าที่แทน
                var pIntname =nth11.children("div:nth-child(2)").find("select"),
                    pIntPo=nth11.children("div:nth-child(3)").find("select"),
                    pIntCls=nth11.children("div:nth-child(4)").find("select");
                if(pIntname.children("option:selected").val()!=='0' && pIntPo.children("option:selected").val()!=='0'){
                    objdata.person_instead = pIntname.children("option:selected").text()+'_'+pIntPo.children("option:selected").text()+'_'+pIntCls.children("option:selected").text();
                    objprint.person_instead = objdata.person_instead;
                }
                
                //ตรวจสอบก่อนบันทึกลงฐาน
                if(objdata.gogov_topic){//เรื่อง
                    if(objdata.gogov_real_date1){//วันแรก (ในโครงการ)
                        if(objdata.gogov_real_date2){//วันสุดท้าย (ในโครงการ)
                            if( parseInt($.fn.DateDiff(objdata.gogov_real_date1,objdata.gogov_real_date2)) >= 0  ){
                                if(objdata.gogov_place){//สถานที่
                                    if(objdata.gogov_date1){//วันแรกไม่นับวันลา
                                        if(objdata.gogov_date2){//วันสุดท้ายไม่นับวันลา
                                            if( parseInt($.fn.DateDiff(objdata.gogov_date1,objdata.gogov_date2)) >= 0  ){
                                                //if(objdata.cost_estimate.length>0){//ประมาณการค่าใช้จ่าย
                                                    chk = true;
                                                    objdata.json_print = JSON.stringify(objprint);//เก็บ json_print ไว้พิมพ์ย้อนหลัง
                                                    $.each(objdata,function(i,v){
                                                        if( (typeof objdata[i] ==='object') ){
                                                            if(objdata[i].length !==0){
                                                                objdata[i] = JSON.stringify(objdata[i]);
                                                            }else{
                                                                objdata[i] = null;
                                                            }
                                                        }
                                                    });
                                                //}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
                //ajax บันทึกลงฐาน
                if(chk){
                    //console.log(objdata);
                    $.ajax({
                        url:"GoGovSaveData2.php", 
                        type:"post",
                        cache:false,
                        dataType:'json',
                        data:{'objdata':JSON.stringify(objdata)}
                    }).done(function(resp){
                        if(resp==='ok'){
                            modal.find('.modal-body').html(
                                'บันทึกข้อมูลสำเร็จ'+
                                '<a href="#print"  type="button" class="btn chayanon-btn3d-blue" style="display:inline-block">'+
                                    'Print&Close'+
                                '</a>'
                            );
                            modal.removeClass('hidden').show().modal('show');
                            modal.find("a[href='#print']").click(function(e){
                                e.preventDefault();
                                gogov_print_moldule1(objprint,onlineUser);
                                modal.toggleClass('hidden').hide().modal('hide'); 
                                gogov2_moldule();
                                //window.location.hash === '#gogov2';
                                //window.location.reload(true);
                            });
                            modal.find('button').click(function(e){
                               e.preventDefault();
                               modal.toggleClass('hidden').hide().modal('hide'); 
                               gogov2_moldule();
                            });
                        }
                    });
                }else{
                    alert("ยังกรอกข้อมูลไม่ครบ--สีแดงคือบังคับกรอก");
                }
            });
            nth12.find("a[href='#close']").click(function(e){
                e.preventDefault();
                window.location.reload(true);
            });
        });
    };//ขออนุมัติเดินทางไปราชการ
    var gogov2_moldule = function(){
        var content = $("#myContent").empty();
        var frmSchHtml = function(){
          var x='<div class="panel panel-default">'+
                    '<div class="panel-header">'+
                        '<nav  style="margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0;">'+
                            '<div class="container-fluid" style="padding:0;margin:0;">'+
                                '<div class="navbar-header" style="padding:0;margin:0;">'+
                                    '<div class="row" style="padding:0;margin:0;">'+ 
                                        '<div class="col-md-6 pull-right no-gutter" style="padding:0;margin:0;">'+
                                            '<div class="row" style="padding:0;margin:0;">'+ 
                                                '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 no-gutter" style="padding:0;margin:0;">'+ 
                                                    '<input type="text"  placeholder="คำค้น..." class="form-control noradius">'+
                                                '</div>'+
                                                '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-gutter">'+ 
                                                    '<select class="form-control noradius">'+
                                                        '<option value="gogov_topic">ชื่อเรื่อง</option>'+
                                                        '<option value="officialdoc_num">เลขหนังสือ</option>'+
                                                        '<option value="person_id">ชื่อบุคลากร</option>'+
                                                        '<option value="project_owner_docnum">หนังสือต้นเรื่อง</option>'+
                                                        '<option value="gogov_for">ประเภท</option>'+
                                                    '</select>'+
                                                '</div>'+
                                                '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 no-gutter">'+ 
                                                    '<span class="input-group-btn noradius">'+
                                                        '<a href="#sch" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></a>'+                                
                                                    '</span>'+
                                                '</div>'+
                                            '</div>'+
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
            nav = panel.children('div.panel-header').children('nav'),
            panelBody = panel.children('div.panel-body');
        //ฟังก์ชัน กรณีเลือก เขียนรายงานการเดินทางไปราชการ dtgogov=ข้อมูล ขาไปราชการ  dtgogovBack=ข้อมูลขากลับจากไปราชการ
        function writeGogovBack(dtgogov,dtgogovBack,OnlineUser){//ข้อมูลตอนไป ข้อมูลตอนกลับ
            //console.log('idgo='+dtgogov.id+',idback='+dtgogovBack[0].gogov_new_id);
            var txtmodal = function(){
                var txt = '<div class="modal fade"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                  '<div class="modal-dialog modal-sm" role="document">'+
                      '<div class="modal-content">'+
                          '<div class="modal-header"><h3><i class="fa fa-info-circle fa-2x" aria-hidden="true"></i></h3></div>'+
                          '<div class="modal-body"><h3></h3></div>'+
                          '<div class="modal-footer">'+
                              '<button type="button"  class="btn btn-lg bg-danger noradius" style="color:black;" data-dismiss="modal">ใช่</button>'+
                              '<button type="button"  class="btn btn-lg bg-success noradius" style="color:black;" data-dismiss="modal">ไม่ใช่</button>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
                '</div>';
                return txt;  
            };
            var modal = $(txtmodal());  
            modal.on('hidden.bs.modal', function(){
                $(this).data('bs.modal', null);
            });
            $.when($.fn.def_Competency(),$.fn.def_Skill(),$.fn.def_GogovType())
                .done(function(Competency,Skill,GogovType){
                var htmlCompetency = function(ajaxData){
                    var x = '<select  data-placeholder="ค้นสมรรถนะ...." class="form-control"><option value=""></option>';
                        $.each(ajaxData,function(i,v){
                            x+='<option value="'+v.id+'_'+v.competency_name+'">'+v.competency_name+'</option>';
                        });
                        x+='</select>';
                    return x;
                };
                var htmlSkill = function(ajaxData){
                    var x = '<select  data-placeholder="ค้นทักษะ...." class="form-control"><option value=""></option>';
                        $.each(ajaxData,function(i,v){
                            x+='<option value="'+v.id+'_'+v.skill_name+'">'+v.skill_name+'</option>';
                        });
                        x+='</select>';
                    return x;
                };
                var htmlGogovType = function(ajaxData){
                    var x = '<select  data-placeholder="ประเภทไปราชการ...." class="form-control"><option>***ประเภทการเดินทาง***</option>';
                        $.each(ajaxData,function(i,v){
                            x+='<option  value="'+v.id+'_'+v.gogov_type_name+'_'+v.group_type1+'" >'+v.gogov_type_name+'</option>';
                        });
                        x+='</select>';
                    return x;
                };
                var htmlback = function(){
                    var x=  
                    '<form class="form-horizontal">'+
                        '<div class="form-group">'+//nth-child(1) เบี้ยเลี้ยง
                            '<div class="chayanon-boxshw1 text-center" style="height:40px;font-size:2vw;">ค่าเบี้ยเลี้ยง</div>'+
                            '<div class="col-md-4 col-md-offset-1">'+htmlGogovType(GogovType)+'</div>'+//ประเภทไปราชการ
                            '<div class="col-md-4 col-md-offset-1">'+//เดินทางในจังหวัดใช่หรือไม่
                                '<span class="text-right">เดินทางในจังหวัดใช่หรือไม่</span>'+
                                '<div class="input-group">'+             
                                    '<div  class="btn-group" data-toggle="buttons" >'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="Y" name="BLrdoType" style="display:none;" ><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ใช่(6h=1)</span>'+
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="N" name="BLrdoType" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ไม่ใช่(12h=1)</span>'+                                                     
                                        '</label>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+

                            '<div class="col-md-11 col-md-offset-1">'+//เดินทางจาก
                                '<span class="text-right">เดินทางจาก</span>'+
                                '<div class="input-group">'+             
                                    '<div  class="btn-group" data-toggle="buttons" >'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="บ้านพัก" name="BLrdo1" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  บ้านพัก</span>'+
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="สำนักงาน" name="BLrdo1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  สำนักงาน</span>'+                                                     
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="ประเทศไทย" name="BLrdo1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ประเทศไทย</span>'+                                                     
                                        '</label>'+
                                    '</div>'+
                                    'วัน-เวลา&nbsp;<input type="text" name="BLtxt11">'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-11 col-md-offset-1">'+//และกลับถึง
                                '<span class="text-right">และกลับถึง</span>'+
                                '<div class="input-group">'+             
                                    '<div  class="btn-group" data-toggle="buttons" >'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="บ้านพัก" name="BLrdo2" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  บ้านพัก</span>'+
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="สำนักงาน" name="BLrdo2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  สำนักงาน</span>'+                                                     
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="ประเทศไทย" name="BLrdo2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ประเทศไทย</span>'+                                                     
                                        '</label>'+
                                    '</div>'+
                                    'วัน-เวลา&nbsp;<input type="text" name="BLtxt21">'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-11 col-md-offset-1">'+//รวมเวลาไปราชการครั้งนี้
                                '<div class="row">'+
                                    '<div class="col-md-5">'+
                                        '<span class="text-right" style="border-bottom: 3px solid grey;"></span>'+//แสดงผลการคำนวณ
                                    '</div>'+
                                    '<div class="col-md-7">'+
                                        'หักจำนวนมื้อที่ผู้จัดเลี้ยง(มื้อ)&nbsp;<div id="BLcounter" min="0" max="99" step="1" class="chayanon-counter"></div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-11 col-md-offset-1">'+//ปุ่มคลิกคำนวนเบี้ยเลี้ยงไปราชการ
                                '<a href="#CalcBL" class="btn btn-success col-md-2 noradius">คำนวนเบี้ยเลี้ยง</a>'+
                            '</div>'+
                        '</div>'+//nth-child(1) เบี้ยเลี้ยง

                        '<div class="form-group">'+//nth-child(2) ค่าพาหนะ
                            '<div class="chayanon-boxshw1 text-center" style="height:40px;font-size:2vw;">ค่าพาหนะ</div>'+                                           
                            '<div class="col-md-10 col-md-offset-1">'+
                                '<h3 style="color:#544003; font-size: 18px; font-weight:bold;letter-spacing: -1px; line-height:1;">ค่าพาหนะ-ไม่มีใบเสร็จ</h3>'+ 
                                '<div class="row">'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row1txt1" class="form-control noradius" placeholder="เดินทางจากที่พักเลขที่"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row1txt2" class="form-control noradius" placeholder="ถึงที่พักเลขที่"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row2txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row2txt2" class="form-control noradius" placeholder="รายการที่1"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row2txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row2txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row3txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row3txt2" class="form-control noradius" placeholder="รายการที่2"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row3txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row3txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row4txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row4txt2" class="form-control noradius" placeholder="รายการที่3"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row4txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row4txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row5txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row5txt2" class="form-control noradius" placeholder="รายการที่4"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row5txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row5txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row6txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row6txt2" class="form-control noradius" placeholder="รายการที่5"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row6txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row6txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row7txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row7txt2" class="form-control noradius" placeholder="รายการที่6"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row7txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row7txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row8txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row8txt2" class="form-control noradius" placeholder="รายการที่7"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row8txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row8txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row9txt1" class="form-control noradius" style="padding-right:1px;padding-left:1px;"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row9txt2" class="form-control noradius" placeholder="รายการที่8"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row9txt3" class="form-control noradius" placeholder="จำนวนเงิน"/>'+
                                    '</div>'+
                                    '<div class="col-md-2 no-gutter">'+
                                        '<input type="text" name="ch2row9txt4" class="form-control noradius" placeholder="หมายเหตุ"/>'+
                                    '</div>'+
                                '</div>'+

                                '<h3 style="color:#544003; font-size: 18px; font-weight:bold;letter-spacing: -1px; line-height:1;">ค่าพาหนะ-มีใบเสร็จ</h3>'+  

                                '<div class="row">'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row10txt1" class="form-control noradius" placeholder="รายการค่าพาหนะ(มีใบเสร็จ)"/>'+
                                    '</div>'+
                                    '<div class="col-md-6 no-gutter">'+
                                        '<input type="text" name="ch2row10txt2" class="form-control noradius" placeholder="จำนวนเงิน(บาท)"/>'+
                                    '</div>'+
                                '</div>'+
                                '<br/>'+
                                '<div class="row">'+
                                    '<a href="#CalcDst" class="btn btn-success noradius">คำนวณค่าเดินทาง</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+//nth-child(2) ค่าพาหนะ

                        '<div class="form-group">'+//nth-child(3) ค่าที่พัก
                            '<div class="chayanon-boxshw1 text-center" style="height:40px;font-size:2vw;">ค่าที่พัก</div>'+ 
                            '<div class="col-md-10 col-md-offset-1">'+
                                '<div class="row">'+
                                    '<div class="col-md-4 no-gutter">'+
                                        '<span>ชื่อโรงแรมที่พัก</span>'+
                                        '<input type="text" name="ch3row1txt1" class="form-control noradius" placeholder="ชื่อโรงแรมที่พัก เช่น โรงแรมไมด้า ฮามวงศ์วาน"/>'+
                                    '</div>'+
                                    '<div class="col-md-4 no-gutter">'+
                                        '<span>คืนละ(บาท)</span>'+
                                        '<input type="text" name="ch3row1txt2" class="form-control noradius" placeholder="คืนละ(บาท)"/>'+
                                    '</div>'+
                                    '<div class="col-md-4 no-gutter">'+
                                        '<span>กี่คืน</span>'+
                                        '<input type="text" name="ch3row1txt3" class="form-control noradius" placeholder="กี่คืน"/>'+
                                    '</div>'+
                                '</div>'+
                                '<br/>'+
                                '<div class="row">'+
                                    '<a href="#CalcHotel" class="btn btn-success noradius">คำนวณค่าที่พัก</a>'+
                                '</div>'+
                            '</div>'+ 
                        '</div>'+            


                        '<div class="form-group">'+//nth-child(4) สรุปค่าใช้จ่ายในการเดินทางไปราชการ ทั้งหมด   
                            '<div class="chayanon-boxshw1 text-center" style="height:40px;font-size:2vw;">สรุปค่าใช้จ่ายในการเดินทางไปราชการ</div>'+ 
                            '<div class="col-md-10 col-md-offset-1">'+
                                '<div class="row">'+ 
                                    '<div class="col-md-6">'+  //ค่าเบี้ยเลี้ยง,ค่าที่พัก,ค่าพาหนะ
                                        '<label  class="cols-sm-2 control-label">สรุปค่าใช้จ่าย</label>'+
                                        '<div class="input-group btn-group" data-toggle="buttons">'+   
                                            '<div class="row">'+
                                                '<div class="col-md-3 ">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="1" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าเบี้ยเลี้ยง</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-md-9 ">'+   
                                                    '<div class="row">'+
                                                        '<div class="col-md-5 form-group">'+
                                                            '<input type="text" style="padding-right:1px;padding-left:1px;" name="ch4txt1" class="form-control" placeholder="ค่าเบี้ยเลี้ยง(บาท)">'+   
                                                        '</div>'+
                                                        '<div class="col-md-7 form-group">'+        
                                                            '<select name="ch4select1" class="form-control" style="padding-right:1px;padding-left:1px;">'+
                                                                '<option value="เงินบำรุง">เงินบำรุง</option>'+
                                                                '<option value="เงินงบประมาณ">เงินงบประมาณ</option>'+
                                                                '<option value="เงินโครงการ">เงินโครงการ</option>'+
                                                                '<option value="ทุนส่วนตัว">ทุนส่วนตัว</option>'+
                                                            '</select>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+ 
                                            '<div class="row">'+
                                                '<div class="col-md-3 ">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="2" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าที่พัก</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-md-9 ">'+  
                                                    '<div class="row">'+
                                                        '<div class="col-md-5 form-group">'+
                                                            '<input type="text" style="padding-right:1px;padding-left:1px;" name="ch4txt2" class="form-control" placeholder="ค่าที่พัก(บาท)">'+   
                                                        '</div>'+
                                                        '<div class="col-md-7 form-group">'+        
                                                            '<select name="ch4select2" class="form-control" style="padding-right:1px;padding-left:1px;">'+
                                                                '<option value="เงินบำรุง">เงินบำรุง</option>'+
                                                                '<option value="เงินงบประมาณ">เงินงบประมาณ</option>'+
                                                                '<option value="เงินโครงการ">เงินโครงการ</option>'+
                                                                '<option value="ทุนส่วนตัว">ทุนส่วนตัว</option>'+
                                                            '</select>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+ 
                                            '<div class="row">'+
                                                '<div class="col-md-3 ">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="3" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าพาหนะ</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-md-9 ">'+   
                                                    '<div class="row">'+
                                                        '<div class="col-md-5 form-group">'+
                                                            '<input type="text" style="padding-right:1px;padding-left:1px;" name="ch4txt3" class="form-control" placeholder="ค่าพาหนะ(บาท)">'+   
                                                        '</div>'+
                                                        '<div class="col-md-7 form-group">'+        
                                                            '<select name="ch4select3" class="form-control" style="padding-right:1px;padding-left:1px;">'+
                                                                '<option value="เงินบำรุง">เงินบำรุง</option>'+
                                                                '<option value="เงินงบประมาณ">เงินงบประมาณ</option>'+
                                                                '<option value="เงินโครงการ">เงินโครงการ</option>'+
                                                                '<option value="ทุนส่วนตัว">ทุนส่วนตัว</option>'+
                                                            '</select>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+ 
                                        '</div>'+
                                    '</div>'+    
                                    '<div class="col-md-6">'+ //ค่าลงทะเบียน,ค่าใช้จ่ายอื่นๆ,ไม่ขอเบิกค่าใช้จ่าย   
                                        '<label for="name" class="cols-sm-2 control-label"></label>'+
                                        '<div class="input-group btn-group" data-toggle="buttons">'+ 
                                            '<div class="row">'+
                                                '<div class="col-md-3">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="4" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าลงทะเบียน</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-md-9">'+ 
                                                    '<div class="row">'+
                                                        '<div class="col-md-5 form-group">'+
                                                            '<input type="text" style="padding-right:1px;padding-left:1px;" name="ch4txt4" class="form-control" placeholder="ค่าลงทะเบียน(บาท)">'+   
                                                        '</div>'+
                                                        '<div class="col-md-7 form-group">'+        
                                                            '<select name="ch4select4" class="form-control" style="padding-right:1px;padding-left:1px;">'+
                                                                '<option value="เงินบำรุง">เงินบำรุง</option>'+
                                                                '<option value="เงินงบประมาณ">เงินงบประมาณ</option>'+
                                                                '<option value="เงินโครงการ">เงินโครงการ</option>'+
                                                                '<option value="ทุนส่วนตัว">ทุนส่วนตัว</option>'+
                                                            '</select>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+ 
                                            '<div class="row">'+
                                                '<div class="col-md-3 ">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="5" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ค่าใช้จ่ายอื่นๆ</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-md-9">'+   
                                                    '<div class="row">'+
                                                        '<div class="col-md-5 form-group">'+
                                                             '<input type="text" style="padding-right:1px;padding-left:1px;" name="ch4txt5" class="form-control" placeholder="ค่าใช้จ่ายอื่นๆ(บาท)">'+  
                                                        '</div>'+
                                                        '<div class="col-md-7 form-group">'+        
                                                            '<select name="ch4select5" class="form-control" style="padding-right:1px;padding-left:1px;">'+
                                                                '<option value="เงินบำรุง">เงินบำรุง</option>'+
                                                                '<option value="เงินงบประมาณ">เงินงบประมาณ</option>'+
                                                                '<option value="เงินโครงการ">เงินโครงการ</option>'+
                                                                '<option value="ทุนส่วนตัว">ทุนส่วนตัว</option>'+
                                                            '</select>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+ 
                                            '<div class="row">'+
                                                '<div class="col-xs-6 ">'+
                                                    '<label class="btn">'+
                                                        '<input type="checkbox" name="ch4chkbox" value="6" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>ไม่ขอเบิกค่าใช้จ่าย</span>'+
                                                    '</label>'+
                                                '</div>'+  
                                                '<div class="col-xs-6 "></div>'+
                                            '</div>'+ 
                                        '</div>'+
                                    '</div>'+    
                                '</div>'+//row
                            '</div>'+//col-md-8
                        '</div>'+//nth-child(4) สรุปค่าเดินทางทั้งหมด
                        '<div class="form-group">'+//nth-child(5) สรุปสาระสำคัญ
                            '<div class="chayanon-boxshw1 text-center" style="height:40px;font-size:2vw;">รายงานข้อมูลหลังฝึกอบรม/พัฒนา</div>'+     
                            '<span class="col-md-3 text-right"><i class="fa fa-file-text fa-2x"></i>&nbsp;&nbsp;สรุปสาระสำคัญ</span>'+
                            '<div class="col-md-8">'+
                                '<input type="text" name="gogovback_txtarea1" class="form-control"  rows="7">'+
                            '</div>'+
                        '</div>'+//nth-child(5) สรุปสาระสำคัญ
                        '<div class="form-group">'+//nth-child(6) การนำความรู้ที่ได้รับมาใช้
                            '<legend class="text-center header">การนำความรู้ที่ได้รับจากการอบรม/ประชุม/สัมมนา/ศึกษาดูงาน มาประยุกต์ใช้</legend>'+
                            '<span class="col-md-3 text-right">พัฒนาตนเอง(เรื่อง/วิธีการ)</span>'+
                            '<div class="col-md-8">'+
                                '<input type="text" name="gogovback_txtarea2" class="form-control"  rows="4">'+
                            '</div>'+
                        '</div>'+//nth-child(6) การนำความรู้ที่ได้รับมาใช้
                        '<div class="form-group">'+//nth-child(7) พัฒนางาน/องค์กร(เรื่อง/วิธีการ)
                            '<span class="col-md-3 text-right">พัฒนางาน/องค์กร(เรื่อง/วิธีการ)</span>'+
                            '<div class="col-md-8">'+
                                '<input type="text" name="gogovback_txtarea3" class="form-control"  rows="4">'+
                            '</div>'+
                        '</div>'+//nth-child(7) พัฒนางาน/องค์กร(เรื่อง/วิธีการ)
                        '<div class="form-group">'+//nth-child(8)ข้อเสนอแนะอื่นๆ
                            '<span class="col-md-3 text-right">ข้อเสนอแนะอื่นๆ</span>'+
                            '<div class="col-md-8">'+
                                '<input type="text" name="gogovback_txtarea4" class="form-control"  rows="4">'+
                            '</div>'+
                        '</div>'+//nth-child(8)ข้อเสนอแนะอื่นๆ
                        '<div class="form-group">'+//nth-child(9)สอดคล้องกับสมรรถนะ
                            '<span class="col-md-3 text-right">สอดคล้องกับสมรรถนะ</span>'+
                            '<div class="col-md-8">'+
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlCompetency(Competency)+'</div>'+//action chosen ชื่อสมรรถนะ
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlCompetency(Competency)+'</div>'+//action chosen ชื่อสมรรถนะ
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlCompetency(Competency)+'</div>'+//action chosen ชื่อสมรรถนะ
                                '</div>'+        
                            '</div>'+
                        '</div>'+//nth-child(9)สอดคล้องกับสมรรถนะ
                        '<div class="form-group">'+//nth-child(10)สอดคล้องกับทักษะ
                            '<span class="col-md-3 text-right">สอดคล้องกับทักษะ</span>'+
                            '<div class="col-md-8">'+
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlSkill(Skill)+'</div>'+//action chosen ชื่อทักษะ
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlSkill(Skill)+'</div>'+//action chosen ชื่อทักษะ
                                '</div>'+ 
                                '<div class="row">'+
                                    '<div class="input-group">'+htmlSkill(Skill)+'</div>'+//action chosen ชื่อทักษะ
                                '</div>'+ 
                            '</div>'+
                        '</div>'+//nth-child(10)สอดคล้องกับทักษะ

                        '<div class="form-group">'+//nth-child(11)//สัญญายืมเงิน
                            '<div class="col-md-11 col-md-offset-1">'+
                                '<span class="text-right">ยืมเงินหรือไม่</span>'+
                                '<div class="input-group">'+             
                                    '<div  class="btn-group" data-toggle="buttons" >'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="Y" name="ch11rdo" style="display:none;" ><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ใช่</span>'+
                                        '</label>'+
                                        '<label class="btn">'+
                                          '<input type="radio" value="N" name="ch11rdo" style="display:none;" checked="checked"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span>  ไม่ใช่</span>'+                                                     
                                        '</label>'+
                                    '</div>'+
                                    '<input type="text" name="ch11txt1" class="hidden" placeholder="สัญญายืมเงินเลขที่">'+
                                    '<input type="text" name="ch11txt2" class="hidden" placeholder="ลงวันที่">'+
                                    '<input type="text" name="ch11txt3" class="hidden" placeholder="จำนวนเงิน(บาท)">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+//nth-child(11) สัญญายืมเงิน
                        '<div class="form-group row">'+//nth-child(12)
                            '<div class="col-md-8 col-md-offset-4">'+
                                '<a href="#Update" class="btn chayanon-btn3d-orange">Update&Print</a>'+
                            '</div>'+
                        '</div>'+//nth-child(12) update print
                    '</form>';
                    return x;
                };
                panelBody.empty().append(htmlback);     
                /* ---------------start module---------------------- */
                var frm = panelBody.find('form'),
                    nth1 = frm.children('div:nth-child(1)'),//ค่าเบี้ยเลี้ยง
                    nth2 = frm.children('div:nth-child(2)'),//ค่าพาหนะ
                    nth3 = frm.children('div:nth-child(3)'),//ค่าที่พัก
                    nth4 = frm.children('div:nth-child(4)'),//สรุปค่าเดินทางทั้งหมด
                    nth5 = frm.children('div:nth-child(5)'),//สรุปสาระสำคัญ 
                    nth6 = frm.children('div:nth-child(6)'),//การนำความรู้ที่ได้รับมาใช้ 
                    nth7 = frm.children('div:nth-child(7)'),//พัฒนางาน/องค์กร(เรื่อง/วิธีการ) 
                    nth8 = frm.children('div:nth-child(8)'),//ข้อเสนอแนะอื่นๆ 
                    nth9 = frm.children('div:nth-child(9)'),//สอดคล้องกับสมรรถนะ
                    nth10 = frm.children('div:nth-child(10)'),//สอดคล้องกับทักษะ 
                    nth11 = frm.children('div:nth-child(11)'),//สัญญายืมเงิน 
                    nth12 = frm.children('div:nth-child(12)');//update และ print
                //วันเดินทางไป วันเดินทางกลับ    
                var ch1dt1 = $("input[name='BLtxt11']").ConfigDatePicker2(),//วันเดินทาง
                    ch1dt2 = $("input[name='BLtxt21']").ConfigDatePicker2(),//วันกลับ
                    dt1,dt2;
                    if(ch1dt1.val()){
                        dt1 = ch1dt1.data('date_true');
                    }else{
                        dt1 = $.fn.formatDate3(new Date()) + ' ' + '00:01';
                    }
                    if(ch1dt2.val()){
                        dt2 = ch1dt2.data('date_true');
                    }else{
                        dt2 = $.fn.formatDate3(new Date()) + ' ' + '00:01';
                    }
                    
                //สมรรถนะ 3 ตัว
                var nth9ColMd = nth9.find('div.col-md-8'),
                    comptency1 = nth9ColMd.children('div:nth-child(1)').find('select'),
                    comptency2 = nth9ColMd.children('div:nth-child(2)').find('select'),
                    comptency3 = nth9ColMd.children('div:nth-child(3)').find('select');
                //ทักษะ 3 ตัว
                var nth10ColMd = nth10.find('div.col-md-8'),
                    skill1 = nth10ColMd.children('div:nth-child(1)').find('select'),
                    skill2 = nth10ColMd.children('div:nth-child(2)').find('select'),
                    skill3 = nth10ColMd.children('div:nth-child(3)').find('select');
                    
                $("input[name='ch2row2txt1'],input[name='ch2row3txt1'],input[name='ch2row4txt1'],input[name='ch2row5txt1'],input[name='ch2row6txt1']").ConfigDatePicker2();//วันที่ (รายละเอียดการเดินทาง)
                $("#BLcounter").htmlNumberSpinner();//run script เพิ่ม ลด เลข  
                var txtStatusBL = $("#BLcounter").closest('div.row').find('span');//เอาไว้แสดงข้อความคำนวณเบี้ยเลี้ยง
                //คำนวนระยะเวลาไปราชการ (เบี้ยเลี้ยง)
                var datediffArr = [];//วัน,ชั่วโมง,นาที,วินาที 
                datediffArr = $.fn.DateDiff2(dt1,dt2);
                $("input[name='BLtxt11'],input[name='BLtxt21']").blur(function(e){
                    datediffArr.length = 0;
                    dt1 = ch1dt1.data('date_true');
                    dt2 = ch1dt2.data('date_true');
                    datediffArr = $.fn.DateDiff2(dt1,dt2);//[days,hrs_d,mnts,secs];
                    //console.log(datediffArr[0]+'วัน,'+datediffArr[1]+'ชั่วโมง,'+datediffArr[2]+'นาที');
                    e.stopPropagation();
                });

                //ตรวจสอบ เงื่อนไข ไปราชการในจังหวัด 6 ชั่วโมงคิด 1 วัน ที่เหลือ 12 ชั่วโมงคิด 1 วัน
                var BLrdoType = 'N';//12h=1
                $("input[name='BLrdoType']").change(function(){
                    BLrdoType = $(this).val();
                });
                            
                //ปุ่มคลิกคำนวณเบี้ยเลี้ยง
                nth1.find("a[href='#CalcBL']").click(function(e){//ปุ่มกดคำนวณเบี้ยเลี้ยง
                    e.preventDefault();
                    e.stopPropagation();
                     //กรณีมีค่ามาจากฐานข้อมูลแล้ว ให้แปลง .val() เป็น obj วันที่ก่อน หา datediff
                    if(ch1dt1.val()!=="" && ch1dt2.val()!==""){
                        var dt1arr =ch1dt1.val().split(" ");
                        var d1arr = dt1arr[0].split("/");

                        var dt2arr =ch1dt2.val().split(" ");
                        var d2arr = dt2arr[0].split("/");

                        var d1 = d1arr[2]+'-'+d1arr[1]+'-'+d1arr[0]+' '+dt1arr[1];
                        var d2 = d2arr[2]+'-'+d2arr[1]+'-'+d2arr[0]+' '+dt2arr[1];
                        datediffArr = $.fn.DateDiff2(d1,d2);//[days,hrs_d,mnts,secs];
                    }

                    var days = parseInt(datediffArr[0]),
                        hours = parseInt(datediffArr[1]);
                        if(BLrdoType==='Y'){//ถ้าเดินทางในจังหวัด 6 ชม. คิดเป็น 1 วัน
                            if(days<1){
                                if(hours >= 6){
                                    datediffArr[0] = days +1; 
                                }
                            }
                        }else{//12 ชม. คิดเป็น 1 วัน
                            if(hours >= 12){
                                datediffArr[0] = days +1; 
                                datediffArr[1] = hours - 12; 
                            }
                        }
                        var meal = parseInt(datediffArr[0])*3;//จำนวนมื้อ
                        var mealEject = parseInt($("#BLcounter").find("input[type=number]").val());//จำนวนมื้อที่ตัดออก
                        var Bath = (meal- mealEject)*80;//ค่าเบี้ยเลี้ยง
                        if(isNaN(meal)){
                            meal = 0;
                        }
                        if(isNaN(mealEject)){
                            mealEject = 0;
                        }
                        if(isNaN(Bath)){
                            Bath = 0;
                        }
                        txtStatusBL.html( (meal-mealEject)  +'&nbsp;มื้อ&nbsp;คิดเป็น&nbsp;'+Bath+'&nbsp;บาท');
                        $("input[name='ch4txt1']").val(Bath);
                        $("input[name='ch4chkbox'][value='1']").prop('checked',true);
                });
                            
                //ปุ่มคลิกคำนวณค่าพาหนะ
                nth2.find("a[href='#CalcDst']").click(function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    var m1 = (isNaN(parseFloat($("input[name='ch2row2txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row2txt3']").val());
                    var m2 = (isNaN(parseFloat($("input[name='ch2row3txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row3txt3']").val());
                    var m3 = (isNaN(parseFloat($("input[name='ch2row4txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row4txt3']").val());
                    var m4 = (isNaN(parseFloat($("input[name='ch2row5txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row5txt3']").val());
                    var m5 = (isNaN(parseFloat($("input[name='ch2row6txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row6txt3']").val());
                    var m6 = (isNaN(parseFloat($("input[name='ch2row7txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row7txt3']").val());
                    var m7 = (isNaN(parseFloat($("input[name='ch2row8txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row8txt3']").val());
                    var m8 = (isNaN(parseFloat($("input[name='ch2row9txt3']").val()))) ? 0 : parseFloat($("input[name='ch2row9txt3']").val());
                    var sum = m1+m2+m3+m4+m5+m6+m7+m8; //ค่าพาหนะ (ไม่มีใบเสร็จ)
                    var sumNoRpct = (isNaN(parseFloat($("input[name='ch2row10txt2']").val()))) ? 0 : parseFloat($("input[name='ch2row10txt2']").val());//ค่าใช้จ่ายมีใบเสร็จ
                    $("input[name='ch4txt3']").val(sum+sumNoRpct);
                    $("input[name='ch4chkbox'][value='3']").prop('checked',true);
                });
                
                //ปุ่มคลิกคำนวณค่าที่พัก
                nth3.find("a[href='#CalcHotel']").click(function(e){
                    e.preventDefault();
                    var t1 = $("input[name='ch3row1txt2']").val(),
                        t2 = $("input[name='ch3row1txt3']").val();
                    t1 = isNaN(t1)?0:parseInt(t1); 
                    t2 = isNaN(t2)?0:parseInt(t2); 
                    if(t1&&t2){
                       $("input[name='ch4txt2']").val(t1*t2); 
                    }
                    $("input[name='ch4chkbox'][value='2']").prop('checked',true);
                });    
                //ปุ่มคลิกคำนวณสรุปค่าใช้จ่ายไปราชการ (checkbox)
                nth4.find("input[type=text]")//.myNumberic()//บังคับป็น Numberic เพื่อสรุปค่าใช้จ่าย กลายเป็นพิมพ์หลักพัน ไม่ได้เลยไม่ใช้
                .focusin(function(){//เมาส์คลิก ก็จะ ติ๊กถูก checkbox
                    $(this).closest('.col-md-9').parent('.row').find("input[type='checkbox']").prop('checked',true);
                })
                .focusout(function(){//ถ้าใส่ค่าว่าง หรือ 0 ให้เอาติ๊กถูกออก
                    if($(this).val().length===0 || parseInt($(this).val())===0){
                        $(this).closest('.col-md-9').parent('.row').find("input[type='checkbox']").prop('checked',false);
                    }     
                });
                $("input[name='ch4chkbox']").change(function(){//event สรุปค่าใช้จ่ายไปราชการ (checkbox)
                    var $this = $(this) ,chkboxVal = $this.val();
                    var $thisText = $this.closest('.row').find("input[type=text]");
                    if($this.prop("checked")===false){//เมื่อเอาติ๊กถูกออกให้ clear text box เป็นค่าว่างทันที
                        $thisText.val("");
                    }else{
                        if( $thisText.val() ===""  ){
                            $thisText.val(0);
                        }
                    }
                    if(chkboxVal==="6"){//ไม่ขอเบิกค่าใช้จ่ายให้เคลียร์ทุกอย่าง
                        nth4.find("input[type=text]").val("");
                        nth4.find("input[type=checkbox]").not($this).prop("checked",false);
                    }
                });
                            
                //event ยืมเงินหรือไม่
                $("input[name='ch11txt2']").ConfigDatePicker2();
                $("input[name='ch11txt3']");//.myNumberic();
                $("input[name='ch11rdo']").change(function(){
                    if($(this).val()==='N'){//ไม่ยืมเงิน
                       $(this).closest('.input-group').find("input[type='text']").val("").toggleClass('hidden').hide();
                    }else{
                       $(this).closest('.input-group').find("input[type='text']").removeClass('hidden').show();
                    } 
                });
                
                //แสดงค่าในตาราง gogov_back
                $.each(dtgogovBack[0],function(i,v){
                    if(i==='gogov_type')
                    {//ประเภทไปราชการ แบบละเอียด เช่นประชุมที่มีระเบียบวาระการประชุม
                        var arr;
                        if(v){
                            nth1.find("select >option[value='"+v+"']").prop('selected',true);
                        }
                    }
                    else if(i==='datediff')
                    {//array เก็บข้อมูล ระยะเวลาไปราชการ field datediff
                        if(v){
                            datediffArr = v.split(",");
                        }
                    }
                    else if(i==='go_from')
                    {//โดยออกเดินทางจาก...  บ้านพัก สำนักงาน ประเทศไทย
                        $("input[name='BLrdo1'][value='"+v+"']").prop('checked',true);
                    }
                    else if(i==='go_from_date')
                    {//โดยออกเดินทางจาก... วัน เวลา
                        $("input[name='BLtxt11']").val(v);
                    }
                    else if(i==='go_back')
                    {//และกลับถึง ... บ้านพัก สำนักงาน ประเทศไทย
                        $("input[name='BLrdo2'][value='"+v+"']").prop('checked',true);
                    }
                    else if(i==='go_back_date')
                    {//และกลับถึง....วัน เวลา
                        $("input[name='BLtxt21']").val(v);
                    }
                    else if(i==='budget1')
                    {//ค่าเบี้ยเลี้ยง.... บาท
                        $("input[name='ch4txt1']").val(v);
                    }
                    else if(i==='budget2')
                    {//ค่าที่พัก.... บาท
                        $("input[name='ch4txt2']").val(v);
                    }
                    else if(i==='budget3')
                    {//ค่าพาหนะ.... บาท
                        $("input[name='ch4txt3']").val(v);
                    }
                    else if(i==='budget4')
                    {//ค่าลงทะเบียน.... บาท
                        $("input[name='ch4txt4']").val(v);
                    }else if(i==='budget5')
                    {//ค่าใช้จ่ายอื่น.... บาท
                        $("input[name='ch4txt5']").val(v);
                    }
                    else if(i==='addr_from')
                    {//โดยออกเดินทางจากบ้านพักเลขที่......ที่อยู่
                        $("input[name='ch2row1txt1']").val(v);
                    }else if(i==='addr_back')
                    {//กลับถึงบ้านพักเลขที่....ที่อยู่
                        $("input[name='ch2row1txt2']").val(v);
                    }
                    else if(i==='budget2_list1')
                    {//ค่าที่พัก
                        if(v){
                            $("input[name='ch3row1txt1']").val($.fn.splitStrToArr(v,'_')[0]);
                            $("input[name='ch3row1txt2']").val($.fn.splitStrToArr(v,'_')[1]);
                            $("input[name='ch3row1txt3']").val($.fn.splitStrToArr(v,'_')[2]);
                        }
                    }
                    else if(i==='budget3_list1')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่1
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row2txt1']").val(arr[0]);
                            $("input[name='ch2row2txt2']").val(arr[1]);
                            $("input[name='ch2row2txt3']").val(arr[2]);
                            $("input[name='ch2row2txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list2')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่2
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row3txt1']").val(arr[0]);
                            $("input[name='ch2row3txt2']").val(arr[1]);
                            $("input[name='ch2row3txt3']").val(arr[2]);
                            $("input[name='ch2row3txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list3')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่3
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row4txt1']").val(arr[0]);
                            $("input[name='ch2row4txt2']").val(arr[1]);
                            $("input[name='ch2row4txt3']").val(arr[2]);
                            $("input[name='ch2row4txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list4')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่4
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row5txt1']").val(arr[0]);
                            $("input[name='ch2row5txt2']").val(arr[1]);
                            $("input[name='ch2row5txt3']").val(arr[2]);
                            $("input[name='ch2row5txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list5')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่5
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row6txt1']").val(arr[0]);
                            $("input[name='ch2row6txt2']").val(arr[1]);
                            $("input[name='ch2row6txt3']").val(arr[2]);
                            $("input[name='ch2row6txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list6')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่6
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row7txt1']").val(arr[0]);
                            $("input[name='ch2row7txt2']").val(arr[1]);
                            $("input[name='ch2row7txt3']").val(arr[2]);
                            $("input[name='ch2row7txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list7')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่7
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row8txt1']").val(arr[0]);
                            $("input[name='ch2row8txt2']").val(arr[1]);
                            $("input[name='ch2row8txt3']").val(arr[2]);
                            $("input[name='ch2row8txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_list8')
                    {//รายละเอียดค่าพาหนะ...บรรทัดที่8
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row9txt1']").val(arr[0]);
                            $("input[name='ch2row9txt2']").val(arr[1]);
                            $("input[name='ch2row9txt3']").val(arr[2]);
                            $("input[name='ch2row9txt4']").val(arr[3]);
                        }
                    }
                    else if(i==='budget3_has_receipt')
                    {//รายละเอียดค่าพาหนะ(มีใบเสร็จ)
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch2row10txt1']").val(arr[0]);//เช่น ค่าเครื่องบิน
                            $("input[name='ch2row10txt2']").val(arr[1]);//กี่บาท (มีใบเสร็จ)
                        }
                    }
                    else if(i==='conclude')
                    {//สรุปสาระสำคัญ
                        $("input[name='gogovback_txtarea1']").val(v);
                    }
                    else if(i==='know_how_used1')
                    {//การนำความรู้ที่ได้รับมาประยุกต์ใช้....ด้านพัฒนาตน
                        $("input[name='gogovback_txtarea2']").val(v);
                    }else if(i==='know_how_used2')
                    {//การนำความรู้ที่ได้รับมาประยุกต์ใช้....พัฒนางาน องค์กร
                        $("input[name='gogovback_txtarea3']").val(v);
                    }
                    else if(i==='know_how_used3')
                    {//การนำความรู้ที่ได้รับมาประยุกต์ใช้....ข้อเสนอแนะอื่นๆ
                        $("input[name='gogovback_txtarea4']").val(v);
                    }
                    else if(i==='competency')
                    {//สมรรถนะ1
                        if(v){
                            comptency1.children("option[value='"+v+"']").prop('selected',true);
                        }
                    }
                    else if(i==='competency2')
                    {//สมรรถนะ2
                        if(v){
                            comptency2.children("option[value='"+v+"']").prop('selected',true);
                        }
                    }else if(i==='competency3')
                    {//สมรรถนะ3
                        if(v){
                            comptency3.children("option[value='"+v+"']").prop('selected',true);
                        }
                    }
                    else if(i==='skill')
                    {//ทักษะ1
                        if(v){
                            skill1.children("option[value='"+v+"']").prop('selected',true);
                        } 
                    }else if(i==='skill2')
                    {//ทักษะ2
                        if(v){
                            skill2.children("option[value='"+v+"']").prop('selected',true);
                        } 
                    }
                    else if(i==='skill3')
                    {//ทักษะ3
                        if(v){
                            skill3.children("option[value='"+v+"']").prop('selected',true);
                        } 
                    }
                    else if(i==='agreement')
                    {//ยืมเงินหรือไม่
                        var arr;
                        if(v){
                            arr = v.split("_");
                            $("input[name='ch11rdo'][value='Y']").prop('checked',true);
                            $("input[name='ch11txt1']").val(arr[0]).removeClass('hidden').show();
                            $("input[name='ch11txt2']").val(arr[1]).removeClass('hidden').show();
                            $("input[name='ch11txt3']").val(arr[2]).removeClass('hidden').show();
                        }
                    }
                });
                
                //update ลงฐานข้อมูล gogov_back
                nth12.find("a[href='#Update']").click(function(){
                    //สรุปจำนวนเงินค่าใช้จ่ายไปราชการ
                    var bd1 = (isNaN(parseFloat($("input[name='ch4txt1']").val()))) ? 0 : parseFloat($("input[name='ch4txt1']").val());
                    var bd2 = (isNaN(parseFloat($("input[name='ch4txt2']").val()))) ? 0 : parseFloat($("input[name='ch4txt2']").val());
                    var bd3 = (isNaN(parseFloat($("input[name='ch4txt3']").val()))) ? 0 : parseFloat($("input[name='ch4txt3']").val());
                    var bd4 = (isNaN(parseFloat($("input[name='ch4txt4']").val()))) ? 0 : parseFloat($("input[name='ch4txt4']").val());
                    var bd5 = (isNaN(parseFloat($("input[name='ch4txt5']").val()))) ? 0 : parseFloat($("input[name='ch4txt5']").val());
                    //console.log(bd1,bd2,bd3,bd4,bd5,bd6,bd7,bd8);
                    //สรุปรายละเอียดค่าพาหนะ 8 บรรทัด
                    var bd3_detail1 = $("input[name='ch2row2txt1']").val()+'_'+ $("input[name='ch2row2txt2']").val()+'_'+$("input[name='ch2row2txt3']").val()+'_'+$("input[name='ch2row2txt4']").val(),
                        bd3_detail2 =$("input[name='ch2row3txt1']").val()+'_'+ $("input[name='ch2row3txt2']").val()+'_'+$("input[name='ch2row3txt3']").val()+'_'+$("input[name='ch2row3txt4']").val(),
                        bd3_detail3 =$("input[name='ch2row4txt1']").val()+'_'+ $("input[name='ch2row4txt2']").val()+'_'+$("input[name='ch2row4txt3']").val()+'_'+$("input[name='ch2row4txt4']").val(),
                        bd3_detail4 =$("input[name='ch2row5txt1']").val()+'_'+ $("input[name='ch2row5txt2']").val()+'_'+$("input[name='ch2row5txt3']").val()+'_'+$("input[name='ch2row5txt4']").val(),
                        bd3_detail5 =$("input[name='ch2row6txt1']").val()+'_'+ $("input[name='ch2row6txt2']").val()+'_'+$("input[name='ch2row6txt3']").val()+'_'+$("input[name='ch2row6txt4']").val(),
                        bd3_detail6 =$("input[name='ch2row7txt1']").val()+'_'+ $("input[name='ch2row7txt2']").val()+'_'+$("input[name='ch2row7txt3']").val()+'_'+$("input[name='ch2row7txt4']").val(),
                        bd3_detail7 =$("input[name='ch2row8txt1']").val()+'_'+ $("input[name='ch2row8txt2']").val()+'_'+$("input[name='ch2row8txt3']").val()+'_'+$("input[name='ch2row8txt4']").val(),
                        bd3_detail8 =$("input[name='ch2row9txt1']").val()+'_'+ $("input[name='ch2row9txt2']").val()+'_'+$("input[name='ch2row9txt3']").val()+'_'+$("input[name='ch2row9txt4']").val(),
                        bd3_has_receipt =$("input[name='ch2row10txt1']").val()+'_'+ $("input[name='ch2row10txt2']").val();
                        
                    //สรุปรายละเอียดค่าที่พัก
                    var bd2_detail1 = $("input[name='ch3row1txt1']").val()+'_'+$("input[name='ch3row1txt2']").val()+'_'+$("input[name='ch3row1txt3']").val();
                    //สัญญายืมเงิน
                    var agreement = $("input[name='ch11txt1']").val()+'_'+$("input[name='ch11txt2']").val()+'_'+$("input[name='ch11txt3']").val();
                        
                        
                    //object ที่จะ update ลง table gogov_back
                    var obj = {
                        'gogov_type':nth1.find("select > option:selected").val(),
                        'datediff':datediffArr,
                        'go_from':$("input[name='BLrdo1']:checked").val(),//โดยออกเดินทางจาก...  บ้านพัก สำนักงาน ประเทศไทย
                        'go_from_date':$("input[name='BLtxt11']").val(),//โดยออกเดินทางจาก... วัน เวลา
                        'go_back':$("input[name='BLrdo2']:checked").val(),//และกลับถึง ... บ้านพัก สำนักงาน ประเทศไทย
                        'go_back_date':$("input[name='BLtxt21']").val(),//และกลับถึง....วัน เวลา
                        'budget1':bd1,//ค่าเบี้ยเลี้ยง.... บาท
                        'budget2':bd2,//ค่าที่พัก.... บาท
                        'budget3':bd3,//ค่าพาหนะ.... บาท
                        'budget4':bd4,//ค่าลงทะเบียน.... บาท
                        'budget5':bd5,//ค่าใช้จ่ายอื่น.... บาท
                        'addr_from':$("input[name='ch2row1txt1']").val(),//โดยออกเดินทางจากบ้านพักเลขที่......ที่อยู่
                        'addr_back':$("input[name='ch2row1txt2']").val(),//กลับถึงบ้านพักเลขที่....ที่อยู่
                        'budget2_list1':(bd2_detail1!=='__')?bd2_detail1:'',//รายละเอียดค่าที่พัก
                        'budget3_list1':(bd3_detail1!=='__')?bd3_detail1:'',//รายละเอียดค่าพาหนะ...บรรทัดที่1
                        'budget3_list2':(bd3_detail2!=='__')?bd3_detail2:'',//รายละเอียดค่าพาหนะ...บรรทัดที่2
                        'budget3_list3':(bd3_detail3!=='__')?bd3_detail3:'',//รายละเอียดค่าพาหนะ...บรรทัดที่3
                        'budget3_list4':(bd3_detail4!=='__')?bd3_detail4:'',//รายละเอียดค่าพาหนะ...บรรทัดที่4
                        'budget3_list5':(bd3_detail5!=='__')?bd3_detail5:'',//รายละเอียดค่าพาหนะ...บรรทัดที่5
                        'budget3_list6':(bd3_detail6!=='__')?bd3_detail6:'',//รายละเอียดค่าพาหนะ...บรรทัดที่6
                        'budget3_list7':(bd3_detail7!=='__')?bd3_detail7:'',//รายละเอียดค่าพาหนะ...บรรทัดที่7
                        'budget3_list8':(bd3_detail8!=='__')?bd3_detail8:'',//รายละเอียดค่าพาหนะ...บรรทัดที่8
                        'budget3_has_receipt':(bd3_has_receipt!=='_')?bd3_has_receipt:'',//ค่าพาหนะ(มีใบเสร็จ)  bd3_has_receipt
                        'conclude':$("input[name='gogovback_txtarea1']").val(),//สรุปสาระสำคัญ
                        'know_how_used1':$("input[name='gogovback_txtarea2']").val(),//การนำความรู้ที่ได้รับมาประยุกต์ใช้....ด้านพัฒนาตน
                        'know_how_used2':$("input[name='gogovback_txtarea3']").val(),//การนำความรู้ที่ได้รับมาประยุกต์ใช้....พัฒนางาน องค์กร
                        'know_how_used3':$("input[name='gogovback_txtarea4']").val(),//การนำความรู้ที่ได้รับมาประยุกต์ใช้....ข้อเสนอแนะอื่นๆ
                        'competency':comptency1.children("option:selected").val(),//สมรรถนะ1
                        'competency2':comptency2.children("option:selected").val(),//สมรรถนะ2
                        'competency3':comptency3.children("option:selected").val(),//สมรรถนะ3
                        'skill':skill1.children("option:selected").val(),//ทักษะ1
                        'skill2':skill2.children("option:selected").val(),//ทักษะ1
                        'skill3':skill3.children("option:selected").val(),//ทักษะ1
                        'agreement':(agreement!=='__')?agreement:'',//กรณียืมเงิน ...สัญญาเลขที่_วดป_กี่บาท
                        'status_use':'Y'
                        //,'json_gogov':JSON.stringify(dtgogov)
                    }; 
                    //บันทึกลงฐาน
                    if( 
                        parseFloat(obj.datediff[0]) > 0 ||  parseFloat(obj.datediff[1]) > 0 ||
                        parseFloat(obj.datediff[2]) > 0)
                    {//วันเดินทางไป และกลับ ห่างกัน อย่างน้อย 1 นาที
                        if( (obj.competency) || (obj.competency2) ||
                            (obj.competency3) || (obj.skill) ||
                            (obj.skill2) || (obj.skill3) )  
                        {
                            //loop คำสั่ง sql ที่จะ update
                            var sql = 'UPDATE gogov_back set ';
                            var n = 0,key=Object.keys(obj),len=key.length;
                            $.each(obj,function(i,v){//console.log('i='+i+',v='+v);
                                if(  (len - n) !==1   ){
                                    sql +=i+'='+'"'+v+'",';
                                }else{
                                    sql +=i+'='+'"'+v+'"';
                                }
                                n++;
                            });
                            sql+=' WHERE gogov_new_id="'+dtgogovBack[0].gogov_new_id+'" ;';
                            //console.log(dtgogovBack);
                            
                            //update ตาราง gogov_back
                            $.ajax({
                                url:"GoGovBackSaveData.php", 
                                type:"post",
                                cache:false,
                                dataType:'json',
                                data:{'sqls':JSON.stringify(sql)}
                            }).done(function(resp){
                                if(resp==='ok'){//modal print 
                                    obj.json_gogov = JSON.stringify(dtgogov);//ใส่ค่า object ขาไปราชการไป print ด้วย
                                    var btnClose=modal.find('.modal-footer > button').last().html('close');
                                    modal.find('.modal-body >h3').empty().append(
                                        'Success!! &#10132;<a class="btn chayanon-btn3d-blue" href="#Pprint">Print</a>'
                                    );
                                    modal.find('.modal-footer > button').first().toggleClass('hidden').hide();
                                    modal.modal('show');
                                    //print
                                    modal.find("a[href='#Pprint']").click(function(e){
                                       e.preventDefault();
                                       gogov_print_moldule2(obj);
                                       $(this).closest('.modal').modal('hide');
                                    }); 
                                    //close
                                    btnClose.click(function(e){
                                       e.preventDefault();
                                       $(this).closest('.modal').modal('hide');
                                    });
                                }else{
                                    alert(resp);
                                }
                            });
                        }
                        else
                        {
                            alert('จำเป็นต้องระบุว่าตรงกับสมรรถนะหรือทักษะด้านใด อย่างน้อย 1 ด้าน');
                        }
                    }
                    else
                    {
                        alert('เวลาเดินทางไปราชการของท่านน้อยกว่า 1 นาที !!');
                    }
                });
                
            });//when
        };
        //ได้ข้อมูล data (ยังไม่ได้เลือก id ในตาราง gogov_new) จากนั้นเลือก print ,delete หรือ เขียนรายงานการเดินทางไปราชการ
        function gogovBackData(data){//console.log(data);
            function tbl(d){
                var x = 
                '<table style="width:auto;text-align:center;" border="1">'+ //class='cell-border display'
                    '<thead>'+ 
                        '<tr>'+ 
                            '<th class="text-center">ID</th>'+
                            '<th class="text-center">เลขหนังสือ</th>'+ 
                            '<th class="text-center">ชื่อเรื่อง</th>'+ 
                            '<th class="text-center">ชื่อ-สกุล</th>'+ 
                            '<th class="text-center">ประเภท</th>'+ 
                            '<th class="text-center">Print</th>'+
                            '<th class="text-center">เขียนรายงาน</th>'+ 
                            '<th class="text-center">Delete</th>'+ 
                        '</tr>'+ 
                    '</thead>'+ 
                    '<tbody>';
                    
                    if(typeof d==='object'){
                        var IS_JSON = true;
                        $.each(d,function(i,v){
                            var key = Object.keys(v);
                            if($.inArray('json_print',key)!==-1){//ถ้ามี key ชื่อนี้อยู่จริง
                                try
                                {
                                    var obj = $.parseJSON(v['json_print']);
                                }
                                catch(err)
                                {
                                    IS_JSON = false;
                                }    
                            }
                            
                            x+='<tr>'+
                                    '<td class="text-left">'+v.id+'</td>'+
                                    '<td class="text-left">'+v.officialdoc_num+'</td>'+
                                    '<td class="text-left">'+v.gogov_topic+'</td>'+
                                    '<td class="text-left">'+( (IS_JSON)?obj.pname:""    )+'</td>'+
                                    '<td class="text-left">'+v.gogov_for+'</td>'+
                                    '<td class="text-center"><a href="#print" data-idprint="'+v.id+'"><i class="fa fa-print fa-2x" aria-hidden="true"></i></a></td>'+
                                    '<td class="text-center"><a href="#gogovData" data-idgogovdata="'+v.id+'"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a></td>'+
                                    '<td class="text-center"><a href="#delete" data-iddelete="'+v.id+'"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a></td>'+
                            '</tr>';
                            
                        });
                    }
                x+='</tbody></table>';
                return x;
            };
            var txtmodal = function(){
                var txt = '<div class="modal fade"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                  '<div class="modal-dialog modal-sm" role="document">'+
                      '<div class="modal-content">'+
                          '<div class="modal-header"><h3><i class="fa fa-info-circle fa-2x" aria-hidden="true"></i></h3></div>'+
                          '<div class="modal-body"><h3></h3></div>'+
                          '<div class="modal-footer">'+
                              '<button type="button"  class="btn btn-lg bg-danger noradius" style="color:black;" data-dismiss="modal">ใช่</button>'+
                              '<button type="button"  class="btn btn-lg bg-success noradius" style="color:black;" data-dismiss="modal">ไม่ใช่</button>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
                '</div>';
                return txt;  
            };
            var modal = $(txtmodal());  
            modal.on('hidden.bs.modal', function(){
                $(this).data('bs.modal', null);
            });
            panelBody.empty().append(tbl(data));
            var tbl = panelBody.find('table');
            tbl.DataTable({
               // "pagingType": "full_numbers",
               "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
               "lengthMenu": [[200,300,500, -1], [200,300,500, "All"]],
                buttons: ['excel','pdf','print'],
                "scrollX": true,
                "order": [[ 0, "desc" ]]
            });
            
            //คลิกเลือก print
            tbl.find("a[href='#print']").click(function(e){
                e.preventDefault();
                var idprint = parseInt($(this).data("idprint"));
                $.each(data,function(i,v){
                    if(parseInt(v.id)===idprint){
                        var key = Object.keys(v);
                        if($.inArray('json_print',key)!==-1){//ถ้ามี key ชื่อนี้อยู่จริง
                            $.when($.fn.def_OnlineUser()).done(function(OnlineUser){
                                gogov_print_moldule1($.parseJSON(v['json_print']),OnlineUser);
                            });
                        } 
                    }
                });
            });
            //คลิกเขียนรายงานการเดินทาง
            tbl.find("a[href='#gogovData']").click(function(e){
                e.preventDefault();
                modal.find('button').removeClass('hidden');
                var idgogovdata = parseInt($(this).data("idgogovdata"));//id gogov_new จากการเลือก
                var AcceptPersonFinanceID = ['9','18','235'];//บุคลากรการเงิน ยกเว้น สามารถเข้ามาแก้รายงานกา���เดินทางได้
                $.each(data,function(i,v){
                    if(parseInt(v.id)===idgogovdata){
                        $.when($.fn.def_OnlineUser()).done(function(OnlineUser){
                            if(  (OnlineUser.person_id===v.person_id) ||
                                 ( $.inArray(OnlineUser.person_id,AcceptPersonFinanceID) !== -1)    )
                            {//ถ้าเป็นเจ้าของรายการนั้นจะเขียนรายงานการเดินทางได้
                                $.when($.fn.def_GogovBackData(v.id)).done(function(gogovBack){//ข้อมูลขากลับจากไปราชการ (gogov_back)
                                    if(typeof gogovBack !=='string'){
                                        writeGogovBack(v,gogovBack,OnlineUser);// ข้อมูลไป gogov_new,ข้อมูลกลับ gogov_back 
                                    }else{
                                        alert(gogovBack);//ไม่พบข้อมูลกลับจากไปราชการ (ไม่พบ id gogov_new ในตาราง gogov_back
                                    }
                                });
                            }
                            else
                            {
                                modal.find('.modal-body >h3').empty().append("You Can't Edit for Data!!");
                                modal.find('.modal-footer > button').first().toggleClass('hidden').hide();
                                modal.find('.modal-footer > button').last().html('close');
                                modal.modal('show');
                            }
                        });  
                    }
                });
            });
            //คลิกลบข้อมูลไปราชการ
            tbl.find("a[href='#delete']").click(function(e){
                e.preventDefault();
                modal.find('button').removeClass('hidden');
                var iddelete = parseInt($(this).data("iddelete"));
                $.each(data,function(i,v){
                    if(parseInt(v.id)===iddelete){
                        $.when($.fn.def_OnlineUser()).done(function(OnlineUser){
                            if(OnlineUser.person_id===v.person_id){//ถ้าเป็นเจ้าของรายการนั้นจะลบได้
                                modal.find('.modal-body >h3').empty().append("Are you Sure?");
                                modal.find('.modal-footer > button').first().html('Yes').show();
                                modal.find('.modal-footer > button').last().html('No');
                                modal.modal('show');
                                modal.find('.modal-footer > button').first().click(function(e){
                                    e.preventDefault();
                                    $.ajax({
                                        url:"DeleteGogov.php", 
                                        type:"post",
                                        cache:false,
                                        dataType:'json',
                                        data:{'iddelete':JSON.stringify(iddelete)}
                                    }).done(function(data){
                                        if(data==='ok'){
                                            //alert('ลบข้อมูลไปราชการแล้ว');
                                            window.location.hash = '#gogov2';
                                            window.location.reload(true);
                                        }
                                    });
                                });
                            }else{
                                modal.find('.modal-body >h3').empty().append("You Can't Delete for Data!!");
                                modal.find('.modal-footer > button').first().toggleClass('hidden').hide();
                                modal.find('.modal-footer > button').last().html('close');
                                modal.modal('show');
                            }
                        });
                    }
                });
            });
        };
        //เงื่อนไขการค้นข้อมูลไปราชการ
        function DefSch(typeSch,txtSch){
            var def = $.Deferred();
            $.ajax({
                url:"GoGovSchData2.php", 
                type:"post",
                cache:false,
                dataType:'json',
                data:{'typeSch':JSON.stringify(typeSch),'txtSch':JSON.stringify(txtSch)}
            }).done(function(data){
                def.resolve(data);
            });
            return def.promise();
        }
        //event Search ข้อมูลไปราชการ
        $.when(DefSch('person_id','')).done(function(dSch){
            if(typeof dSch !=='string'){
               gogovBackData(dSch);
            }else{
               alert(dSch);
            }
        });
        nav.find("a[href='#sch']").click(function(){
            var typeSch = $(this).closest('div.row').find("select>option:selected").val(),
                txtSch = $(this).closest('div.row').find("input[type=text]").val();
            $.when(DefSch(typeSch,txtSch)).done(function(dSch){
                if(typeof dSch !=='string'){
                   gogovBackData(dSch);
                }else{
                   alert(dSch);
                }
            });
        });
    };//เขียนรายงานการเดินทางไปราชการ
    var gogov3_moldule = function(){
        $("#myContent").empty().append('ข้อมูล/สถิติไปราชการ--->ระหว่างดำเนินการ');
    };//ข้อมูลสถิติไปราชการ
    var myProfile_moldule = function(hrefID){
        var replacePname = function(str){
            var pname = ['นาย','นางสาว','นาง'];
            if(str){
                $.each(pname,function(i,v){
                    if (str.toLowerCase().indexOf(v) >= 0){
                        //newstr += str.replace(v,'');
                        str = str.replace(v,'');
                    }
                });
            }
            return "สวัสดีครับ คุณ"+str;
        };
        var profile1 = function(onlineUser,dep){
            function ATC_Dep(ajaxData){
                var x = '<select  data-placeholder="ค้น...." class="form-control noradius" style="width:100%;">';
                    $.each(ajaxData,function(i,v){
                        x+='<option value="'+v.dep_code+'">'+v.dep_name+'</option>';
                    });
                    x+='</select>';
                return x; 
            };
            var form = function(){
                var x = 
                '<div class="container">'+
                    '<div class="row">'+//nth-child(1)
                        '<div class="col-md-10 col-lg-10 ">'+
                            '<h2>Float Label Pattern Forms</h2>'+
                            '<p style="color:#4A0801; LINE-HEIGHT:19px;">'+
                                '<a href="#" class="btn btn-default btn-lg noradius" data-container="body" '+
                                    'data-toggle="popover" data-html="true" data-content="'+
                                        '<p style=font-size:25px;>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;หน้า Profile อยู่ระหว่างปรับปรุงให้เหมือน แบบ กพ.7 ช่วงแรกข้อมูลจึงยังมีไม่มาก<br>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;หากพบเห็นปุ่ม Update ที่ใด แสดงว่า ท่านสามารถปรับปรุงข้อมูลนั้นได้เอง<br>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10104;</font> &nbsp;เมื่อคลิกปุ่ม Update เราขอแนะนำให้ <button id=profileLogout>ออกจากระบบ</button>และเข้ามาใหม่ เพื่อความถูกต้องสมบูรณ์ของข้อมูล'+
                                        '</p>'+
                                    '" '+
                                '>'+
                                    '<i class="fa fa-info-circle" aria-hidden="true"></i>'+
                                    '&nbsp;คำแนะนำสำหรับหน้า Profile'+
                                '</a>'+
                            '</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+//nth-child(2)
                        '<div class="panel col-md-10 col-lg-10 " style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'+
                            '<div class="panel-body alert " style="">'+
                                '<div class="row">'+
                                    '<form  action="" method="post" enctype="multipart/form-data" class="col-xs-12 col-sm-6 col-md-4 col-lg-4">'+//รูป profile
                                        '<label class="control-label btn" style="border:1px solid; margin-top: 4rem;">'+
                                            '<img id="uploaded_image" class="img img-responsive" src="../img/imgProfile/imgProfile.png" width="250"  />'+
                                            '<input type="file" name="upload_image" id="upload_image" accept="image/*" style="display:none;" />'+
                                        '</label>'+  
                                        '<p style="font-size:1vw;"></p>'+
                                        '<div id="uploadimageModal" class="modal" role="dialog">'+
                                            '<div class="modal-dialog">'+
                                                '<div class="modal-content">'+
                                                    '<div class="modal-header">'+
                                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                                        '<h4 class="modal-title">Upload & Crop Image</h4>'+
                                                    '</div>'+
                                                    '<div class="modal-body">'+
                                                        '<div class="row">'+
                                                           '<div class="col-md-8 text-center">'+
                                                                '<div id="image_demo" style="width:350px; margin-top:30px"></div>'+
                                                           '</div>'+
                                                            '<div class="col-md-4" style="padding-top:30px;">'+
                                                                '<br />'+
                                                                '<br />'+
                                                                '<br/>'+
                                                                '<button class="btn btn-success crop_image">Crop & Upload Image</button>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<div class="modal-footer">'+
                                                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</form>'+
                                    '<div class="col-xs-12 col-sm-6 col-md-8 col-lg-8">'+//ข้อมูลเบื้องต้นฝั่งซ้ายมือ
                                        '<form role="form">'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                            '<div class="form-group float-label-control">'+
                                                '<input type="text" class="form-control"/>'+
                                            '</div>'+
                                        '</form>'+
                                    '</div>'+
                                '</div>'+//row
                            '</div>'+//panel-body
                        '</div>'+//panel
                    '</div>'+//nth-child(2)
                '</div>';//container
                return x;
            };
            var content = $("#myContent").empty().append(form);
            var ch1 = content.find('div.container').children('div:nth-child(1)'),//ข้อความทักทาย
                ch2 = content.find('div.container').children('div:nth-child(2)');//ข้อมูลพื้นฐาน
            var ch2frm1 = ch2.find('form').first(),//form upload รูป profile
                ch2frm2 = ch2.find('form').last(),//ข้อมูลพื้นฐาน
                btnlogout = ch2frm1.find('p >a');
                
            //ch1 popover event
            var ch1_aPopOver = ch1.find('a[data-toggle="popover"]');
            ch1_aPopOver.popover();
            ch1_aPopOver.click(function(e){//หยุด synchronous
               e.preventDefault();
            });
            $(document.body).on('shown.bs.popover', function () {
                $(document.body).on('click',"#profileLogout",function () {
                    logout();
                });
            });
            ch1.find('h2').empty().append(replacePname(onlineUser.pname));//ทักทาย ชื่อ-สกุล
            
            //loop กำหนดค่าให้ element
            ch2frm2.find('input[type=text]').each(function(i){
                if(i===0){$(this).val(onlineUser.pname);}
                if(i===1){$(this).val(onlineUser.position_name+' '+onlineUser.class_position);}
                if(i===2){
                    var frmRow = function(){
                        var x = '<div class="row" style="margin-left:5px;">'+
                                    '<div class="col-md-8 no-gutter">'+ATC_Dep(dep)+'</div>'+
                                    '<div class="col-md-4 no-gutter"><a href="#" class="btn btn-success  noradius" style="text-decoration:none">Update</a></div>';
                                '</div>';
                        return x;
                    };
                    var parentDiv = $(this).parent('div');
                    parentDiv.empty().append(frmRow);
                    parentDiv.find('select').select2();
                    parentDiv.find('select').val(onlineUser.dep_code).trigger('change');
                    //update ชื่อหน่วยงานในตาราง person
                    parentDiv.find('a').click(function(e){
                        $.fn.def_PersonUpdateByField(onlineUser.person_id,{
                            'dep_code':parentDiv.find('select option:selected').val()
                        }).done(function(data){
                           if(typeof data ==='object'){
                                var key = Object.keys(data);
                                if($.inArray('dep_code',key)!==-1){
                                   parentDiv.find('select').val(data['dep_code']).trigger('change');
                                   alert('Success!!');
                                }else{
                                   alert('error กรุณาติดต่อผู้ดูแลระบบ');
                                }
                           }else{
                               alert(data);
                           }
                           e.preventDefault();
                        });
                    });
                }
                if(i===3){$(this).val(onlineUser.groupwork_name);}
                if(i===4){$(this).val(onlineUser.government_emp_type_name);}
                if(i===5){$(this).val('เลขที่ตำแหน่ง: '+onlineUser.po_num);}
            });
            //image upload
            $('#uploaded_image').attr({src:onlineUser.img_profile_path});//รูป ณ ตอน login เข้ามา
            var $image_crop = $('#image_demo').croppie({
                enableExif: true,
                viewport: {
                  width:300,
                  height:300,
                  type:'circle' //circle  square
                },
                boundary:{
                  width:300,
                  height:300
                }
            });
            $('#upload_image').on('change', function(){//เมื่อ file change  
                var reader = new FileReader();
                reader.onload = function (event) {
                  $image_crop.croppie('bind', {//ให้ bind url ของ file นั้น
                    url: event.target.result
                  }).then(function(){
                    //console.log('jQuery bind complete');
                  });
                };
                if(this.files[0]){//คลิก change แล้วก็จริงแต่เลือก cancel
                    reader.readAsDataURL(this.files[0]);//เก็บ url path ไว้
                    $('#uploadimageModal').modal('show');//แล้ว show modal 
                }
            });//evnet file change
            $('.crop_image').click(function(event){//คลิก crop ให้ตัดและ upload ขึ้น server
                event.preventDefault();  //ไม่ได้ เพราะว่าภาพจะไม่ update แม้ server จะเปลี่ยนแล้ว
                $image_crop.croppie('result', {
                  type: 'canvas',
                  size: 'viewport'
                }).then(function(response){//alert(response); เป็นการเข้ารหัส base64
                    $.ajax({
                        url:"UserProfileUpdImg.php",
                        type: "POST",
                        data:{"image": response,'person_id':JSON.stringify(onlineUser.person_id)},
                        success:function(data){//data = "../img/imgProfile/9_1579401580.png"
                            $('#uploadimageModal').modal('hide');
                            var old = $('#uploaded_image').attr('src');
                            $('#uploaded_image').attr('src').replace(old,data);
                            $('#uploaded_image').attr('src',data);
                            //window.location.reload(true);
                        }
                    });
                });
            });//คลิก crop ให้ตัดและ upload ขึ้น server
            btnlogout.click(function(){
               logout(); 
            });//logout ออกก่อนกรณี upload รูปเป็นครั้งแรก
        };//ข้อมูลพื้นฐาน
        var profile2 = function(onlineUser){
            var form = function(){
                var x = 
                '<div class="container">'+
                    '<div class="panel col-md-10 col-lg-10" style="padding-top:20px;">'+
                        '<div class="panel-body alert alert-warning" '+
                            'style="padding-top:20px;border-radius: 0px 60px 0px 80px;-webkit-box-shadow: -8px -4px 6px -2px #000000;box-shadow: -8px -4px 6px -2px #000000; ">'+
                        '</div>'+//panel-body
                    '</div>'+//panel
                '</div>';//container
                return x;
            };
            $.when($.fn.def_CallPmsResult(onlineUser.person_id)).done(function(pmsRslt){
                var content = $("#myContent").empty().append(form);
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
                //ประวัติการเลื่อนเงินเดือน
                if(typeof pmsRslt !=='string'){
                    content.find('.panel-body').empty().append('<legend>ประวัติการเลื่อนเงินเดือน:</legend>'+htmlTblShiftSalary(pmsRslt));
                }
            });//when
        };//ประวัติการเลื่อนเงินเดือน
        var profile3= function(onlineUser){
            var formPanel = function(){
                var txt = 
                '<div class="panel panel-default">'+
                    '<div class="panel-body">'+
                        '<div class="container col-md-11">'+
                            '<div class="accordion-option">'+
                                '<h3 class="title">ข้อมูลฝึกอบรม/พัฒนา</h3>'+
                                '<a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a>'+
                            '</div>'+
                            '<div class="clearfix"></div>'+
                            
                            '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">'+
                                //id="collapseOne"
                                '<div class="panel accordian-panel-default">'+
                                    '<div class="panel-heading" role="tab" id="headingOne">'+
                                        '<h4 class="panel-title">'+
                                            '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
                                                '#1 ข้อมูลฝึกอบรม/พัฒนา (ไปราชการ)'+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">'+
                                        '<div class="panel-body">'+
                                            '<div class="row alert alert-warning" '+
                                                'style="padding-top:20px;border-radius: 0px 60px 0px 80px;-webkit-box-shadow: -8px -4px 6px -2px #000000;box-shadow: -8px -4px 6px -2px #000000; "'+
                                            '></div>'+    
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                //id="collapseTwo"
                                '<div class="panel accordian-panel-default">'+
                                    '<div class="panel-heading" role="tab" id="headingTwo">'+
                                        '<h4 class="panel-title">'+
                                            '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">'+
                                                '#2 ข้อมูลฝึกอบรม/พัฒนา (กรณีจัดภายในโรงพยาบาล)'+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">'+
                                        '<div class="panel-body">'+
                                            '<div class="row">'+
                                            
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                
                            '</div>'+//panel-group
                        '</div>'+//container
                    '</div>'+//panel body
                '</div>';//panel
                return txt;  
            };
            function tbl1(d1,d2){
                var x = '<div class="table-responsive">'+        
                '<table class="table"  style="width:auto;text-align:center;" border="1">'+ //class='cell-border display'
                    '<thead>'+ 
                        '<tr>'+ 
                            '<th class="text-center">ชื่อเรื่อง</th>'+  
                            '<th class="text-center">ประเภท</th>'+ 
                            '<th class="text-center">สมรรถนะ</th>'+ 
                            '<th class="text-center">ทักษะ</th>'+ 
                            //'<th class="text-center">Print</th>'+ 
                        '</tr>'+ 
                    '</thead>'+ 
                    '<tbody>';
                    function getGogovBack(id,atrib){//เป็น id ขากลับ ซึ่งต้องหา id ขาไปมาก่อน
                        var txt='';
                        $.each(d2,function(i,v){
                            if( parseInt(v.id) === parseInt(id) ){
                                var key = Object.keys(v);
                                if($.inArray(atrib,key)!==-1){//ถ้ามี key ชื่อนี้อยู่จริง
                                    if(v[atrib]){
                                        if(v[atrib]!==null){
                                            if(typeof v[atrib]!=='undefined'){
                                                txt = v[atrib]; 
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        return txt;
                    }; 
                    function thaiDate(strDate1,strDate2){
                        var txt ="",d1="",d2="";
                        if((strDate1)&&(strDate2) ){
                            d1=$.fn.StrThaiDate3(new Date(strDate1));
                            d2=$.fn.StrThaiDate3(new Date(strDate2));
                            txt = d1+' ถึง '+d2;
                        }
                        return txt;
                    };   
                    function rePlaceSep(str,sep){
                        var t="";
                        if(str){
                             if(str.indexOf(sep) >= 0 ){
                                 t = (str.split(sep))[1];
                             }
                        }
                        return t;
                    };
                    function getGogovBackID(gogovNewID){
                        var gogovBackID;
                        $.each(d2,function(i,v){
                            if( parseInt(v.gogov_new_id) === parseInt(gogovNewID) ){
                                gogovBackID = v.id;
                            }
                        });
                        return gogovBackID;
                    };
                    function getCompe(compe){
                        var t='';
                        if(compe){
                            t = '<p>-'+rePlaceSep(compe,"_")+'</p>';
                        }
                        return t;
                    };
                    function getSkill(skill){
                        var t='';
                        if(skill){
                            t = '<p>-'+rePlaceSep(skill,"_")+'</p>';
                        }
                        return t;
                    };
                    function transCostReg(costReg){
                        var t = '',bath='',costtype='',year='',group='';
                        if(typeof costReg[0] ==='object'){
                            bath = (costReg[0].bath!=='')?costReg[0].bath+' บาท':'';
                            costtype = (costReg[0].costtype!=='')?' ใช้'+costReg[0].costtype:'';
                            year = (costReg[0].year!=='')?' ปี'+costReg[0].year:'';
                            group = (costReg[0].group!=='')?' ประเภท'+costReg[0].group:'';
                            if(bath){
                                t = bath+costtype+year+group;
                            }else{
                                t = 'ไม่มี';
                            }
                        }
                        return t;
                    };
                    $.each(d1,function(i,v){//ข้อมูลไปราชการ
                        var objPrint;
                        var key = Object.keys(v);
                        if($.inArray('json_print',key)!==-1){//ถ้ามี key ชื่อนี้อยู่จริง
                            if(v['json_print']){
                                if(v['json_print']!==null){
                                    if(typeof v['json_print']!=='undefined'){
                                        objPrint = $.parseJSON(v['json_print']); //console.log(typeof objPrint);
                                    }
                                }
                            }
                        }
                        x+='<tr>'+
                                '<td class="text-left">'+
                                    '<a href="#" data-toggle="popover"  title="<legend>ข้อมูลฝึกอบรม/พัฒนา(จากการเดินทางไปราชการ)</legend>" '+
                                        'data-content="'+
                                        //'<legend>ข้อมูลฝึกอบรม/พัฒนา(จากการเดินทางไปราชการ)</legend>'+
                                        '<table border=1>'+
                                           '<tr>'+
                                            '<td bgcolor=orange>ID ตอนขออนุมัติเดินทางไปราชการ</td>'+
                                            '<td>'+v.id+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>เลขหนังสือ</td>'+
                                            '<td>'+v.officialdoc_num+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>เรื่อง</td>'+
                                            '<td>'+v.gogov_topic+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ประเภท</td>'+
                                            '<td>'+v.gogov_for+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ระหว่างวันที่</td>'+
                                            '<td>'+thaiDate(v.gogov_real_date1,v.gogov_real_date2)+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ผู้จัด</td>'+
                                            '<td>'+ ( (objPrint.dep_project_owner)?objPrint.dep_project_owner:'' ) +'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>สถานที่'+v.gogov_for+'</td>'+
                                            '<td>'+ ( (objPrint.gogov_place)?objPrint.gogov_place:'' ) +'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าลงทะเบียน (ตอนขออนุมัติไป)</td>'+
                                            '<td>'+ ( (objPrint.cost_registration)?transCostReg(objPrint.cost_registration):'ไม่มี' ) +'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าเบี้ยเลี้ยง</td>'+
                                            '<td>'+
                                                ( 
                                                    $.fn.numberWithCommas(  
                                                        isNaN(parseInt(getGogovBack(getGogovBackID(v.id),"budget1"))) ? 0 : parseInt(getGogovBack(getGogovBackID(v.id),"budget1"))    
                                                    ) 
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าที่พัก</td>'+
                                            '<td>'+
                                                ( 
                                                    $.fn.numberWithCommas(  
                                                        isNaN(parseInt(getGogovBack(getGogovBackID(v.id),"budget2"))) ? 0 : parseInt(getGogovBack(getGogovBackID(v.id),"budget2"))    
                                                    ) 
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าพาหนะ</td>'+
                                            '<td>'+
                                                ( 
                                                    $.fn.numberWithCommas(  
                                                        isNaN(parseInt(getGogovBack(getGogovBackID(v.id),"budget3"))) ? 0 : parseInt(getGogovBack(getGogovBackID(v.id),"budget3"))    
                                                    ) 
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าลงทะเบียน(ตอนเขียนรายงานเดินทาง)</td>'+
                                            '<td>'+
                                                ( 
                                                    $.fn.numberWithCommas(  
                                                        isNaN(parseInt(getGogovBack(getGogovBackID(v.id),"budget4"))) ? 0 : parseInt(getGogovBack(getGogovBackID(v.id),"budget4"))    
                                                    ) 
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>ค่าใช้จ่ายอื่น</td>'+
                                            '<td>'+
                                                ( 
                                                    $.fn.numberWithCommas(  
                                                        isNaN(parseInt(getGogovBack(getGogovBackID(v.id),"budget5"))) ? 0 : parseInt(getGogovBack(getGogovBackID(v.id),"budget5"))    
                                                    ) 
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                            '<td bgcolor=orange>รวมเบิกค่าใช้จ่ายไปราชการครั้งนี้</td>'+
                                            '<td>'+(
                                                    isNaN(
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget1")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget2")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget3")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget4")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget5")) 
                                                    )? 0 :$.fn.numberWithCommas(
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget1")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget2")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget3")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget4")) +
                                                        parseInt(getGogovBack(getGogovBackID(v.id),"budget5")) 
                                                    )
                                                ) +
                                            '</td>'+
                                          '</tr>'+
                                        '</table>'+
                                    '">'+  (  ((v.gogov_topic).length > 35 ) ? ((v.gogov_topic).substring(0,35))+'...(มีต่อ)' : v.gogov_topic  )  +'</a>'+
                                '</td>'+
                                '<td class="text-left">'+v.gogov_for+'</td>'+
                                '<td class="text-left" >'+
                                    getCompe( (getGogovBack(getGogovBackID(v.id),"competency"))  ) +
                                    getCompe( (getGogovBack(getGogovBackID(v.id),"competency2")) ) +
                                    getCompe( (getGogovBack(getGogovBackID(v.id),"competency3")) ) +
                                '</td>'+
                                '<td class="text-left" >'+
                                    getSkill( (getGogovBack(getGogovBackID(v.id),"skill"))  ) +
                                    getSkill( (getGogovBack(getGogovBackID(v.id),"skill2")) ) +
                                    getSkill( (getGogovBack(getGogovBackID(v.id),"skill3")) ) +
                                '</td>'+
                                //'<td class="text-center"><a href="#print" data-idprint="'+v.id+'"><i class="fa fa-print fa-2x" aria-hidden="true"></i></a></td>'+
                        '</tr>';
                    });
                x+='</tbody></table></div>';
                return x;
            };
            function tbl2(developpm){
                var x = '<div class="table-responsive">'+        
                '<table class="table"  style="width:auto;text-align:center;" border="1">'+ //class='cell-border display'
                    '<thead>'+ 
                        '<tr>'+ 
                            '<th class="text-center">ชื่อเรื่อง</th>'+  
                            '<th class="text-center">ประเภท</th>'+ 
                            '<th class="text-center">สมรรถนะ</th>'+ 
                            '<th class="text-center">ทักษะ</th>'+ 
                            //'<th class="text-center">Print</th>'+ 
                        '</tr>'+ 
                    '</thead>'+ 
                    '<tbody>';  
                    function rePlaceSep(str,sep){
                        var t="";
                        if(str){
                             if(str.indexOf(sep) >= 0 ){
                                 t = (str.split(sep))[1];
                             }
                        }
                        return t;
                    };
                    function getCompe(compe){
                        var t='';
                        if(compe){
                            t = '<p>-'+rePlaceSep(compe,"_")+'</p>';
                        }
                        return t;
                    };
                    function getSkill(skill){
                        var t='';
                        if(skill){
                            t = '<p>-'+rePlaceSep(skill,"_")+'</p>';
                        }
                        return t;
                    };
                    $.each(developpm,function(i,v){//ข้อมูลฝึกอบรมจากการจัดโครงการใน ร.พ.
                        x+='<tr>'+
                                '<td class="text-left">'+
                                    '<a href="#" data-toggle="popover"  title="<legend>ข้อมูลฝึกอบรม/พัฒนา(กรณีจัดภายในโรงพยาบาล)</legend>" '+
                                        'data-content="'+
                                        '<table border=1>'+
                                           '<tr>'+
                                                '<td bgcolor=orange>ประเภทการพัฒนา</td>'+
                                                '<td>'+v.develop_type+'</td>'+
                                            '<tr>'+
                                            '<tr>'+
                                                '<td bgcolor=orange>ชื่อโครงการ</td>'+
                                                '<td>'+v.project_name+'</td>'+
                                            '<tr>'+
                                            '<tr>'+
                                                '<td bgcolor=orange>ผู้รับผิดชอบโครงการ</td>'+
                                                '<td>'+v.project_owner_name+'</td>'+
                                            '<tr>'+
                                            '<tr>'+
                                                '<td bgcolor=orange>วันเริ่มโครงการ</td>'+
                                                '<td>'+v.project_date1_th+'</td>'+
                                            '<tr>'+
                                            '<tr>'+
                                                '<td bgcolor=orange>วันสิ้นสุดโครงการ</td>'+
                                                '<td>'+v.project_date2_th+'</td>'+
                                            '<tr>'+
                                            '<tr>'+
                                                '<td bgcolor=orange>ค่าใช้จ่ายทั้งหมดของโครงการ</td>'+
                                                //'<td>'+v.project_budget+'</td>'+
                                                '<td>'+
                                                    ( 
                                                        $.fn.numberWithCommas(  
                                                            isNaN(parseInt(v.project_budget)) ? 0 : parseInt(v.project_budget)    
                                                        ) 
                                                    ) +
                                                '</td>'+
                                            '<tr>'+
                                        '</table>'+
                                    '">'+v.project_name+'</a>'+
                                '</td>'+
                                '<td class="text-left">'+v.develop_type+'</td>'+
                                '<td class="text-left" >'+
                                    getCompe(v.competency1)+
                                    getCompe(v.competency2)+
                                    getCompe(v.competency3)+
                                '</td>'+
                                '<td class="text-left" >'+
                                    getSkill(v.skill1)+
                                    getSkill(v.skill2)+
                                    getSkill(v.skill3)+
                                '</td>'+
                        '</tr>';
                    });
                x+='</tbody></table></div>';
                return x;
            };
            $("#myContent").empty().append(formPanel);
            $.when( $.fn.def_GogovDataByPersonID(onlineUser.person_id),$.fn.def_CallDevelopByPm(onlineUser.person_id) )
            .done(function(gogov,developpm){//console.log(gogov.gogov_new,gogov.gogov_back);
                //accodion event
                $('.panel-collapse').collapse('hide');
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
                //#1 ข้อมูลฝึกอบรม/พัฒนา (ไปราชการ)  id="collapseOne" 
                if(typeof gogov !=='string'){
                    $("#collapseOne").find('div.row').empty().append(tbl1(gogov.gogov_new,gogov.gogov_back));
                    var tbl = $("#collapseOne").find('table');
                    tbl.DataTable({
                       // "pagingType": "full_numbers",
                       "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                       "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                        buttons: ['excel','pdf','print'],
                        "scrollX": true
                    });
                    tbl.find('a[data-toggle="popover"]').popover({
                        placement:'right',
                        html:true,
                        container: 'body'
                    });
                }
                //#2 ข้อมูลฝึกอบรม/พัฒนา (จัดโครงการในโรงพยาบาล)  id="collapseTwo" 
                
                if(typeof developpm !=='string'){//console.log(developpm);
                    $("#collapseTwo").find('div.row').empty().append(tbl2(developpm));
                    var tbl = $("#collapseTwo").find('table');
                    tbl.DataTable({
                       // "pagingType": "full_numbers",
                       "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                       "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
                        buttons: ['excel','pdf','print'],
                        "scrollX": true
                    });
                    tbl.find('a[data-toggle="popover"]').popover({
                        placement:'right',
                        html:true,
                        container: 'body'
                    });
                    
                }
            });
        };//ข้อมูลฝึกอบรม-พัฒนา
        $.when($.fn.def_OnlineUser(),$.fn.def_DepData()).done(function(onlineUser,dep){
            if(hrefID==='#Profile1'){
                profile1(onlineUser,dep);
            }else if(hrefID==='#Profile2'){
                profile2(onlineUser);
            }else if(hrefID==='#Profile3'){
                profile3(onlineUser);
            }else{
                profile1(onlineUser,dep);
            }
        });//run onlineUser และเลือก module
    };//ข้อมูลส่วนบุคคล
    var LeaveAbsence_module = function(SubModuleID){
        var Content = $("#myContent");
        var Print_module = function(data,OnlineUser){
            function splitDate(txtDate){
                var arr = [],day;
                if(txtDate.indexOf(' ')>=0){
                    arr = txtDate.split(' ');
                    //day =  (arr[0].toLowerCase().indexOf('0') >= 0) ? arr[0].replace('0',''):arr[0];
                }
                return [arr[0],arr[1],arr[2]];
            };
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
            function chkGWD(groupwork_code){
                //var returnV = '  '+data.dep_name+'  '+data.groupwork_name+'  ';
                var returnV = ' ';
                if(groupwork_code){
                    //if(groupwork_code==='gwD'){
                        returnV =' โรงพยาบาลจิตเวชสงขลาราชนครินทร์ '+data.groupwork_name;
                    //}
                }
                return returnV;
            };
            function chkBossGroupWork1(){
                var returnV = ' (ผ่านหัวหน้า'+data.groupwork_name+')';
                if(
                    OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13 ||
                    OnlineUser.groupwork_code ==='gwG'
                ){
                    returnV = '';
                }
                return returnV;
            };
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
            function ClearNextYear(dataToShow){
                var ret = dataToShow;
                var yearGovNow = parseInt($.fn.DateToYearGov(OnlineUser.dateNow2));//วันที่ปัจุบัน
                //console.log(data.dateLeaveRange);//dateLeaveRange: "2020-10-16,2020-10-16"
                var arr,y;
                if(data.dateLeaveRange){
                    arr = (data.dateLeaveRange).split(',');
                    y = parseInt($.fn.DateToYearGov(arr[0]));//ปีงบประมาณที่เลือกเข้ามา
                }
                if(y > yearGovNow){//ถ้าปีงบที่เลือกเข้ามามากกว่าปีงบปัจจุบัน แสดงว่าวันลานั้นเป็นปีงบหน้า
                    ret = ' ';
                }
                return ret;
            }
            var doc_leave1 = {
                pageSize: 'A4',
                pageMargins: [ 60, 40, 60, 40 ],//[left, top, right, bottom] เหลือพื้นที่ = 475.44pt หรือ 633.92px
                content: [
                    {
                        text: [
                            {text: data.doc_num,alignment: 'right'},
                            '\n',
                            {text: data.headtopic,decoration: 'underline',alignment: 'center',fontSize:18,bold:true},
                            '\n\n',
                            {text: '(เขียนที่) ',fontSize:16,alignment: 'right'},
                            {text: 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'วันที่ ',fontSize:16,alignment: 'right'},
                            {text: '   '+splitDate(data.date_write)[0]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' เดือน ',fontSize:16,alignment: 'right'},
                            {text: '   '+splitDate(data.date_write)[1]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' พ.ศ. ',fontSize:16,alignment: 'right'},
                            {text: '  '+splitDate(data.date_write)[2]+'  ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'เรื่อง ',fontSize:16,alignment: 'left'},
                            {text: data.topic,fontSize:16,alignment: 'left'},
                            '\n\n',
                            {text: 'เรียน ผู้อำนวยการโรงพยาบาล'+chkBossGroupWork1(),fontSize:16,alignment: 'left'},
                            '\n\n',
                            {text:'....................................................................',fontSize:5,color:'white'},//ย่อหน้า
                            {text:'ข้าพเจ้า',fontSize:16},
                            {text: chklenStr(' '+data.pname+' ',2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ตำแหน่ง',fontSize:16},
                            {text: chklenStr(' '+data.position_name,2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ระดับ',fontSize:16},
                            {text: chklenStr(' '+data.class_position+' ',0.8),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'สังกัด',fontSize:16},
                            {text: chklenStr(chkGWD(OnlineUser.groupwork_code),4.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'มีวันลาพักผ่อนสะสม',fontSize:16},
                            {text:((data.leave_num1)?chklenStr('  '+ClearNextYear(data.leave_num1)+'  ',0.35):""),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'วันทำการ มีสิทธิลาพักผ่อนประจำปีนี้อีก 10 วันทำการ รวมเป็น',fontSize:16},
                            {text:((data.leave_num2)?chklenStr('  '+ClearNextYear(data.leave_num2)+'  ',0.35):""),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'วันทำการ',fontSize:16},
                            '\n',
                            {text:'ตั้งแต่วันที่',fontSize:16},
                            {text: chklenStr(' '+data.txtDatetime+' ',4.7),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'มีกำหนด',fontSize:16},
                            {text: ' '+data.leave_num4+' วัน',fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่',fontSize:16},
                            {text: chklenStr('  '+data.contact_addr,4.52),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'หมายเลขโทรศัพท์',fontSize:16},
                            {text: chklenStr('  '+data.contact_tel,5.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n',
                            {text:chklenStr('.',3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:'(ลงชื่อ)',fontSize:16},
                            {text:chklenStr('.',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:chklenStr('.',3.3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:chklenStr('('+data.pname+')',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
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
                            {text: data.doc_num,alignment: 'right'},
                            '\n',
                            {text: data.headtopic,decoration: 'underline',alignment: 'center',fontSize:18,bold:true},
                            '\n\n',
                            {text: '(เขียนที่) ',fontSize:16,alignment: 'right'},
                            {text: 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'วันที่ ',fontSize:16,alignment: 'right'},
                            {text: '   '+splitDate(data.date_write)[0]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' เดือน ',fontSize:16,alignment: 'right'},
                            {text: '   '+splitDate(data.date_write)[1]+'   ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            {text: ' พ.ศ. ',fontSize:16,alignment: 'right'},
                            {text: '  '+splitDate(data.date_write)[2]+'  ',fontSize:16,decoration: 'underline',decorationStyle: 'dotted',alignment: 'right'},
                            '\n',
                            {text: 'เรื่อง ',fontSize:16,alignment: 'left'},
                            {text: data.topic,fontSize:16,alignment: 'left'},
                            '\n\n',
                           {text: 
                                    (OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13)?
                                        'เรียน ผู้อำนวยการโรงพยาบาล':
                                    'เรียน ผู้อำนวยการโรงพยาบาล (ผ่านหัวหน้า'+data.groupwork_name+')'
                                ,fontSize:16,alignment: 'left'},
                            '\n\n',
                            {text:'....................................................................',fontSize:5,color:'white'},//ย่อหน้า
                            {text:'ข้าพเจ้า',fontSize:16},
                            {text: chklenStr(' '+data.pname+' ',2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ตำแหน่ง',fontSize:16},
                            {text: chklenStr(' '+data.position_name,2.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ระดับ',fontSize:16},
                            {text: chklenStr(' '+data.class_position+' ',0.8),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'สังกัด',fontSize:16},
                            {text: chklenStr(chkGWD(OnlineUser.groupwork_code),4.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ขอลา',fontSize:16},
                            {text: chklenStr('  '+chkleave2type(data.leave_type,1)+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'เนื่องจาก ',fontSize:16},
                            {text:chklenStr(data.leave_txt_note,3.1),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ตั้งแต่วันที่',fontSize:16},
                            {text: chklenStr(' '+data.txtDatetime+' ',4.6),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'มีกำหนด',fontSize:16},
                            {text: ' '+data.leave_num2+' วัน',fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ข้าพเจ้าได้ลา',fontSize:16},
                            {text: chklenStr('  '+chkleave2type(data.leave_type,1)+'  ',0.35),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:'ครั้งสุดท้ายตั้งแต่ ',fontSize:16},
                            {text: chklenStr(
                                    ( $.isArray(chkLeaveLastDate(data.last_leave_date)) )?
                                    $.fn.StrThaiDate4(new Date(chkLeaveLastDate(data.last_leave_date)[0])):''
                                ,0.45),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'ถึง ',fontSize:16},
                            {text: chklenStr(
                                    ( $.isArray(chkLeaveLastDate(data.last_leave_date)) )?
                                    $.fn.StrThaiDate4(new Date(chkLeaveLastDate(data.last_leave_date)[1])):''
                                ,0.45),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            {text:' ในระหว่างลาจะติดต่อข้าพเจ้าได้ที่',fontSize:16},
                            {text: chklenStr('  '+data.contact_addr,2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:'หมายเลขโทรศัพท์',fontSize:16},
                            {text: chklenStr('  '+data.contact_tel,5.2),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n\n',
                            {text:chklenStr('.',3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:'(ลงชื่อ)',fontSize:16},
                            {text:chklenStr('.',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
                            '\n',
                            {text:chklenStr('.',3.3),fontSize:16,color:'white'},//ย่อหน้า
                            {text:chklenStr('('+data.pname+')',1.5),fontSize:16,decoration: 'underline',decorationStyle: 'dotted'},
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
                            {text: data.doc_num,alignment: 'right'},
                            '\n',
                            {text: data.headtopic,decoration: 'underline',alignment: 'center',fontSize:18,bold:true}
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
                if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){
                    txtBoss_name = '<p>.     (..............................................................) </p>';//data.skph_Boss_pname;
                    txtBoss_poclass = '<p>(ตำแหน่ง).............................................................</p>';//data.skph_Boss_position_name;
                    if(data.skph_Boss_pname){
                        bigBossAccept_name = '<p>.     ('+data.skph_Boss_pname+') </p>';
                        bigBossAccept_poclass =  '<p>(ตำแหน่ง)'+(data.skph_Boss_position_name)+'</p>';
                    }
                }
                
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
                                                '<td>'+((data.leave_num3)?ClearNextYear(data.leave_num3):"")+'</td>'+
                                                '<td>'+((data.leave_num4)?data.leave_num4:"")+'</td>'+
                                                '<td>'+((data.leave_num5)?ClearNextYear(data.leave_num5):"")+'</td>'+
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
                                '<tr>'+//หมายเหตุ มอบหมายหน้าที่ อำนาจให้ทำแทน
                                    '<td>'+
                                        '<p style="font-weight:bold;"><u>หมายเหตุ</u></p>'+
                                        '<p>'+data.leave_txt_note2+'</p>'+
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
                                       // txtBoss_poclass+
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
                if(OnlineUser.id13_online===OnlineUser.groupwork_Boss_id13){
                    txtBoss_name = '<p>.     (..............................................................) </p>';//data.skph_Boss_pname;
                    txtBoss_poclass = '<p>(ตำแหน่ง).............................................................</p>';//data.skph_Boss_position_name;
                    if(data.skph_Boss_pname){
                        bigBossAccept_name = '<p>.     ('+data.skph_Boss_pname+') </p>';
                        bigBossAccept_poclass =  '<p>(ตำแหน่ง)'+(data.skph_Boss_position_name)+'</p>';
                    }
                }
                
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
                                                '<td>'+((data.leave_num1)?ClearNextYear(data.leave_num1):""  )+'</td>'+
                                                '<td>'+((data.leave_num2)?data.leave_num2:"")+'</td>'+
                                                '<td>'+((data.leave_num3)?ClearNextYear(data.leave_num3):"")+'</td>'+
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
                                '<tr>'+//หมายเหตุ มอบหมายหน้าที่ อำนาจให้ทำแทน
                                    '<td>'+
                                        '<p style="font-weight:bold;"><u>หมายเหตุ</u></p>'+
                                        '<p>'+data.leave_txt_note2+'</p>'+
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
            if(data.leave_type==='1'){
                var tbl_leave1 = [
                    {text: 'สถิติการลาในปีงบประมาณนี้',fontSize:16,decoration: 'underline'}
                ];//,pageBreak: 'after'  สิ้นสุดหน้า leave = 1 
                ParseHtml(tbl_leave1,htmlTblLeave1(data));
                $.each(tbl_leave1,function(i,v){
                    doc_leave1.content.push(v);
                });
                pdfMake.createPdf(doc_leave1).open();
            }else if(data.leave_type==='2' || data.leave_type==='3' ||data.leave_type==='5'){
                var tbl_leave2 = [
                    {text: 'สถิติการลาในปีงบประมาณนี้',fontSize:16,decoration: 'underline'}
                ];//,pageBreak: 'after'  สิ้นสุดหน้า leave = 1 
                ParseHtml(tbl_leave2,htmlTblLeave2(data));
                $.each(tbl_leave2,function(i,v){
                    doc_leave2.content.push(v);
                });
                pdfMake.createPdf(doc_leave2).open();
            }else{
                pdfMake.createPdf(doc_leaveEmpty).open();
            }
        };//json_print,OnlineUser
        var Leave_send_module = function(){
            var htmlLeaveForm = function(LeaveAbsenceName){
                var x = 
                    '<div class="container chayanon-header">'+
                        '<div class="row overlay">'+//nth-child(1)
                            '<p style="font-size:60px;font-weight: bold;" class="thsarabunnew">ยื่นใบลา</p>'+
                            '<p style="color:#4A0801; LINE-HEIGHT:19px;">'+
                                '<a href="#" class="btn btn-default btn-lg noradius" data-container="body" '+
                                    'data-toggle="popover" data-placement="bottom" data-html="true" data-content="'+
                                        '<p style=font-size:25px;>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;ขณะนี้อยู่ระหว่างทดสอบระบบ ในอนาคตจะพัฒนาให้ผู้บังคับบัญชาสามารถอนุมัติใบลาในระบบได้ (paperless)<br>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;ช่วงทดสอบระบบ ท่านสามารถพิมพ์ใบลาได้เรื่อยๆ แม้พิมพ์ผิด ก็สามารถพิมพ์ใหม่ได้ (ระบบไม่นับเป็นวันลา)<br>'+
                                            '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10104;</font> &nbsp;การจะนับว่าเป็นวันลา จะยึดถือเอกสารซึ่งมีลายเซ็นผู้บังคับบัญชาตามลำดับขั้นโดยสมบูรณ์แล้วเท่านั้น'+
                                        '</p>'+    
                                    '" '+
                                '>'+
                                    '<i class="fa fa-info-circle" aria-hidden="true"></i>'+
                                    '&nbsp;คำแนะนำสำหรับระบบยื่นใบลา'+
                                '</a>'+
                            '</p>'+
                        '</div>'+
                        '<div class="row">'+//nth-child(2) ประเภทการลา
                            '<div class="col-md-8 text-left">'+
                                '<label>ประเภทการลา&nbsp;<font color="red">&#10034;จำเป็นต้องเลือก</font></label>'+
                                '<select class="form-control" name="leave_id">'+
                                    '<option value="0">กรุณาเลือกประเภทการลา</option>';
                                    $.each(LeaveAbsenceName,function(i,v){
                                        if(v.leave_absence_group!=='13'){
                                            x+='<option  value="'+v.id+'">'+
                                                    '<i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i> <span> '+v.leave_absence_name+'</span>'+
                                                '</option>';
                                        }
                                    });
                                x+='</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row hidden">'+//nth-child(3) เลือกช่วงวันที่เพื่อคำนวณ array days
                            '<div class="col-xs-8 text-left">'+
                                '<div class="col-md-4 no-gutter">'+
                                    '<label>Start Date</label>'+
                                    '<input type="text"  name="d1" placeholder="Start Date..." class="form-control noradius" autocomplete="off">'+
                                '</div>'+
                                '<div class="col-md-4 no-gutter">'+
                                    '<label>End Date</label>'+
                                    '<input type="text"  name="d2" placeholder="End Date..." class="form-control noradius" autocomplete="off">'+
                                '</div>'+
                                '<div class="col-md-1 no-gutter" >'+
                                    '<label>&nbsp</label>'+
                                    '<span class="input-group-btn">'+
                                        '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>'+                                 
                                    '</span>'+
                                '</div>'+ 
                                '<div class="col-md-3 no-gutter" style="display:table-cell;vertical-align:middle;">'+
                                    '<label style="color:white;font-size:20px;">--------</label>'+
                                    '<label style="display:inline-block;"><font color="red">&#10096;&#10096;&#10096;&nbsp;คลิก&nbsp;<span class="glyphicon glyphicon-search"></span>&nbsp;เลือกวัน</font></label>'+
                                '</div>'+ 
                            '</div>'+    
                        '</div>'+
                        '<div class="row hidden"></div>'+//nth-child(4) array days
                        '<div class="row hidden">'+//nth-child(5)
                            '<div class="col-md-4 text-left">'+
                                '<label>ที่อยู่ติดต่อได้</label>'+
                                '<input type="text" name="txtAddress" placeholder="ที่อยู่ติดต่อได้..." class="form-control noradius">'+
                            '</div>'+
                            '<div class="col-md-4 text-left">'+
                                '<label>หมายเลขโทรศัพท์ติดต่อ</label>'+
                                '<input type="text" name="txtTel" placeholder="หมายเลขโทรศัพท์ติดต่อ..." class="form-control noradius">'+
                            '</div>'+
                        '</div>'+
                        '<div class="row hidden">'+//nth-child(6)
                            '<div class="col-md-4 text-left">'+
                                '<label>เนื่องจาก(ใช้กรณี ลาป่วย ลากิจ)</label>'+
                                '<input type="text" name="txtNote" placeholder="เนื่องจาก..." class="form-control noradius">'+
                            '</div>'+
                            '<div class="col-md-4 text-left">'+
                                '<label>การมอบหมายงาน(ยกเว้นลาป่วย)</label>'+
                                '<input type="text" name="txtNote2" placeholder="ในระหว่างลาขอมอบหมายให้..." class="form-control noradius">'+
                            '</div>'+
                        '</div>'+
                        '<div class="row hidden">'+//nth-child(7)
                            '<div class="col-md-8 text-right">'+
                                '<div class="col-md-10 no-gutter">'+    
                                    '<span></span>'+
                                '</div>'+ 
                                '<div class="col-md-2 no-gutter">'+  
                                    '<button class="chayanon-btn3d-orange chayanon-btn-xlarge" style="color:black;">บันทึก</button>'+
                                '</div>'+ 
                            '</div>'+
                        '</div>'+ 
                    '</div>';
                return x;
            };
            $.when($.fn.def_OnlineUser()).done(function(OnlineUser){
                var nNowYearGov = $.fn.DateToYearGov(OnlineUser.dateNow2);
                $.when(
                    $.fn.def_LeaveAbsenceVacationSummary(OnlineUser.person_id),
                    $.fn.def_LeaveFullHalfType(),
                    $.fn.def_LeaveAbsenceName(),
                    $.fn.def_CallLeaveParam({
                        'person_id':OnlineUser.person_id,
                        //'leave_year_gov':new Date(OnlineUser.dateNow2).getFullYear()
                        'leave_year_gov':nNowYearGov
                    })
                ).done(function(VacationSummary,LeaveFullHalfType,LeaveAbsenceName,LeaveData){
                    //console.log(LeaveData);
                    Content.empty().append(htmlLeaveForm(LeaveAbsenceName));
                    var container = Content.children('.container');
                    var ch1 = container.children('div:nth-child(1)'),//คำแนะนำสำหรับการยื่นใบลา
                        ch2 = container.children('div:nth-child(2)'),//select ประเภทการลา
                        ch3 = container.children('div:nth-child(3)'),//คลิกโหลดช่วงวันที่
                        ch4 = container.children('div:nth-child(4)'),//array days
                        ch5 = container.children('div:nth-child(5)'),//ที่อยู่+เบอร์โทร
                        ch6 = container.children('div:nth-child(6)'),//เนื่องจาก+มอบหมายงาน
                        ch7 = container.children('div:nth-child(7)');//ปุ่มบันทึกลงฐาน
                        
                        //ch1 popover event คำแนะนำสำหรับการยื่นใบลา
                        var ch1_aPopOver = ch1.find('a[data-toggle="popover"]');
                        ch1_aPopOver.popover();
                        ch1_aPopOver.click(function(e){//หยุด synchronous
                           e.preventDefault();
                        });
                        
                    var objData = [];//ข้อมูลที่จะบันทึกไป database  -->  [{},{}]
                    var days = [];//array เก็บวันที่ ที่เลือกเข้ามา
                    var ContinousLeave = ['5','7'];//การลาที่เต็มวันทุกวัน นับวันหยุด และต่อเนื่องติดกันหลายวัน เช่น ลาคลอด,อุปสมบท ไม่ต้องเลือกทีละวัน  ค่อยไปเก็บค่าตอนกดบันทึก
                    var json_print_func = function(leave_type,dd1,dd2){
                        //console.log(dd1,dd2);
                        function chkStr(data){
                            if(data){
                                return data;
                            }else{
                                return '';
                            }
                        }; 
                        var json_print = {
                            'leave_type':leave_type,//leave id ของฐาน (select option)
                            //'write_at':'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',//เขียนที่..
                            'date_write':OnlineUser.dateNow,//วันที่ เขียนใบลา
                            'pname':OnlineUser.pname,//ชื่อ-สกุล
                            'position_name':OnlineUser.position_name,//ชื่อตำแหน่ง
                            'class_position':OnlineUser.class_position,//ระดับของตำแหน่ง
                            'dep_name':OnlineUser.dep_name,//ชื่อกลุ่มงาน
                            'groupwork_name':OnlineUser.groupwork_name,//ชื่อกลุ่มภารกิจ
                            'contact_addr':chkStr(objData[0].contact_addr),//ที่อยู่ติดต่อระหว่างลา
                            'contact_tel':chkStr(objData[0].contact_tel),//เบอร์โทรติดต่อระหว่างลา
                            'leave_txt_note':chkStr(objData[0].leave_txt_note),//เนื่องจาก
                            'leave_txt_note2':chkStr(objData[0].leave_txt_note2),//มอบหมายงาน
                            'leave_checker_man':'',//'นางพุทธิมา  จุนาพงศ์',//ผู้ตรวจสอบ
                            'leave_checker_man_position':'',//'เจ้าพนักงานธุรการ',//ตำแหน่งผู้ตรวจสอบ
                            'Boss_pname':OnlineUser.Boss_pname,//ชื่อ-สกุล หัวหน้าของคนที่ยื่นใบลา
                            'Boss_position_name':OnlineUser.Boss_position_name,//ตำแหน่ง หัวหน้าของคนที่ยื่นใบลา
                            'Boss_class_position':OnlineUser.Boss_class_position,//ระดับตำแหน่ง หัวหน้าของคนที่ยื่นใบลา
                            'Groupwork_Boss_pname':OnlineUser.Groupwork_Boss_pname,//ชื่อ-สกุล หัวหน้ากลุ่มภารกิจของคนที่ยื่นใบลา
                            'Groupwork_Boss_position_name':OnlineUser.Groupwork_Boss_position_name,//ตำแหน่ง หัวหน้ากลุ่มภารกิจของคนที่ยื่นใบลา
                            'Groupwork_Boss_class_position':OnlineUser.Groupwork_Boss_class_position,//ระดับตำแหน่ง หัวหน้ากลุ่มภารกิจของคนที่ยื่นใบลา
                            'skph_Boss_pname':OnlineUser.skph_Boss_pname,//ชื่อผู้อำนวยการโรงพยาบาล
                            'skph_Boss_position_name':OnlineUser.skph_Boss_position_name//ตำแหน่งของผู้อำนวยการโรงพยาบาล
                        };
                        var totalLeave = function(){
                            var n = 0;
                            $.each(objData,function(i,v){
                                n = parseFloat(n) + parseFloat(v.leave_num_day);
                            });
                            return n;
                        };//หาผลรวมของวันลา
                        var txtDatetime = function(){
                            var txt = "",sp = ",",len = objData.length;
                            var sumleave = totalLeave();
                            var real_firstday = "",//วันที่วันแรกที่เลือกเข้ามาจริงๆ
                                real_lastday = "",//วันที่วันสุดท้ายที่เลือกเข้ามาจริงๆ
                                range_firstday = objData[0].range_firstday,//วันที่วันแรกตอนเลือกเข้ามาเป็นช่วง
                                range_lastday = objData[0].range_lastday;//วันที่วันสุดท้ายตอนเลือกเข้ามาเป็นช่วง
                            var cnts;//true = ต่อเนื่อง,false = ไม่ต่อเนื่อง
                            $.each(objData,function(i,v){
                                if(i===0){real_firstday=v.leave_date;}//หาวันที่จริงวันแรก
                                if((len-i)===1){real_lastday=v.leave_date;}//หาวันที่จริงสุดท้าย
                                if(real_firstday.length!==0&&real_lastday.length!==0){
                                    var diff = $.fn.DateDiff(range_firstday,range_lastday) + 1;
                                    if( sumleave === diff  ){//console.log('วันที่ต่อเนื่อง');
                                        cnts = true;
                                    }else{//console.log('วันที่ไม่ต่อเนื่อง');
                                        cnts = false;
                                    }
                                };
                                if(cnts){//ถ้าวันที่ต่อเนื่องให้แสดงเป็นช่วง
                                    txt = $.fn.StrThaiDate(new Date(range_firstday))+' ถึงวันที่ '+$.fn.StrThaiDate(new Date(range_lastday));    
                                }else{//ถ้าวันที่ไม่ต่อเนื่องเอาวันที่ v.leave_date มา คอมม่า กัน
                                    if( (len-i) > 1 ){//ยังต้องมีคอมม่า
                                        txt += $.fn.StrThaiDate3(new Date(v.leave_date))+' ('+v.fullhalf_txt+') '+sp;
                                    }else{
                                        txt += $.fn.StrThaiDate3(new Date(v.leave_date))+' ('+v.fullhalf_txt+') ';
                                    }
                                }
                            });
                            return txt;
                        };//ข้อความแสดงวันที่ ที่จะลา
                        var txtDatetime2 = function(){
                            var txt = "",len = objData.length;
                            var real_firstday = "",//วันที่วันแรกที่เลือกเข้ามาจริงๆ
                                real_lastday = "";//วันที่วันสุดท้ายที่เลือกเข้ามาจริงๆ
                            $.each(objData,function(i,v){
                                if(i===0){real_firstday=v.leave_date;}//หาวันที่จริงวันแรก
                                if((len-i)===1){real_lastday=v.leave_date;}//หาวันที่จริงสุดท้าย
                                txt = $.fn.StrThaiDate(new Date(real_firstday))+' ถึงวันที่ '+$.fn.StrThaiDate(new Date(real_lastday));
                            });
                            return txt;
                        };//ข้อความแสดงวันที่ ที่จะลา
                        var lastLeaveData = function(leave_id,f){
                            var returnV;
                            if(typeof LeaveData !=='string'){//console.log(LeaveData);//ถ้าไม่พบ เป็น string data not found
                                switch(f){
                                    case 'f1'://หาผลรวมของวันที่ลาประเภทนั้น เช่น ลาป่วยมาแล้วเท่าไหร่ในปีงบปัจจุบัน
                                        var n1 = 0;
                                        $.each(LeaveData,function(i,v){
                                            //console.log(v);
                                            if(leave_id===v.leave_absence_id){   
                                                n1 +=parseFloat(v.leave_num_day);
                                            }
                                        });
                                        returnV = n1;
                                    break;
                                    case 'f2'://หาวันที่ลาครั้งล่าสุด
                                        var s=[],dd=[];
                                        $.each(LeaveData,function(i,v){//หา serialuse ที่ไม่ซ้ำกัน
                                            if(leave_id===v.leave_absence_id){
                                                //console.log(v.serialgen);
                                                if($.inArray(v.serialgen,s)===-1){//เอา serialuse ที่ไม่ซ้ำกัน
                                                    s.push(v.serialgen);
                                                }
                                            }
                                        });
                                        $.each(LeaveData,function(i,v){//หาวันแรกและวันสุดท้ายของ serialuse ครั้งล่าสุด
                                            if(leave_id===v.leave_absence_id){
                                                //console.log(s);
                                                if(v.serialgen===s[s.length -1]){//หาวันที่ทั้งหมดจาก serialgen อันล่าสุด
                                                    dd.push(v.leave_date);
                                                }
                                            }
                                        });
                                        if(dd.length!==0){
                                            var last = dd.length -1;//วันสุดท้ายใน array
                                            /*
                                            var llast = last -1;
                                            if( (llast<0) || (llast >= last) ){
                                                llast = 0;
                                            }
                                            returnV = dd[llast]+','+dd[last];
                                            */
                                           returnV = dd[0]+','+dd[last];
                                        }else{
                                            returnV = OnlineUser.dateNow2 + ',' + OnlineUser.dateNow2;
                                        }
                                    break;
                                    default:
                                        returnV = null;
                                    break;
                                }
                            }else{
                                //returnV = LeaveData;
                                returnV = ' ';
                            }
                            return returnV;
                        };//ฟังก์ชันหาว่าที่ล่าสุด return 2020-02-01,2020-02-02
                        switch(leave_type) {
                          case '1'://ลาพักผ่อน
                            var vcs = VacationSummary[0];//สรุปข้อมูลการลาพักผ่อน
                            json_print.doc_num = '0899-401-034';
                            json_print.headtopic = 'แบบใบลาพักผ่อน';
                            json_print.topic = 'ขอลาพักผ่อน';
                            json_print.last_leave_date =OnlineUser.dateNow2 + ',' + OnlineUser.dateNow2;//ทำให้เป็นวันที่ปัจจุบันเพราะจะมีฟังก์ชัน clear ออกไม่โชว์กรณีลาพักผ่อน
                            json_print.leave_num1 = parseFloat(parseFloat(vcs.sum_keep_and_now_numday)-parseFloat(vcs.now_year_numday));//มีวันลาพักผ่อนสะสม
                            json_print.leave_num2  = parseFloat(vcs.sum_keep_and_now_numday);//รวมเป็น xx วันทำการ
                            json_print.leave_num3 = parseFloat(vcs.total_day_leave_numday);//ลามาแล้ว(วันทำการ)
                            json_print.leave_num4 = totalLeave();//ลาครั้งนี้(วันทำการ)
                            json_print.leave_num5 = json_print.leave_num4+json_print.leave_num3;//รวมเป็น(วันทำการ)
                            json_print.txtDatetime = txtDatetime();
                            json_print.dateLeaveRange = dd1+','+dd2;
                          break;
                          case '2'://ลาป่วย
                            json_print.doc_num = '0899-401-035';
                            json_print.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            json_print.topic = 'ขอลาป่วย';
                            json_print.last_leave_date = lastLeaveData(leave_type,'f2');//วันที่ลาครั้งล่าสุด วันแรกกับวันสุดท้าย เป็น array
                            json_print.leave_num1 = lastLeaveData(leave_type,'f1');//ลาป่วยมาแล้วกี่วัน
                            json_print.leave_num2 = totalLeave();//ลาครั้งนี้(วันทำการ)
                            json_print.leave_num3 = json_print.leave_num1+json_print.leave_num2;//รวมเป็น(วันทำการ)
                            json_print.leave_num4 = 0;
                            json_print.leave_num5 = 0;
                            //json_print.txtDatetime = txtDatetime();
                            json_print.txtDatetime = (totalLeave()>=3)?txtDatetime2():txtDatetime();//เพราะลาป่วย 3 วันขึ้นไปต้องมีใบรับรองแพทย์
                            json_print.dateLeaveRange = dd1+','+dd2;
                          break;
                          case '3'://ลากิจส่วนตัว
                            json_print.doc_num = '0899-401-035';
                            json_print.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            json_print.topic = 'ขอลากิจส่วนตัว';
                            json_print.last_leave_date = lastLeaveData(leave_type,'f2');//วันที่ลาครั้งล่าสุด วันแรกกับวันสุดท้าย เป็น array
                            json_print.leave_num1 = lastLeaveData(leave_type,'f1');//ลากิจส่วนตัวมาแล้วกี่วัน
                            json_print.leave_num2 = totalLeave();//ลาครั้งนี้(วันทำการ)
                            json_print.leave_num3 = json_print.leave_num1+json_print.leave_num2;//รวมเป็น(วันทำการ)
                            json_print.leave_num4 = 0;
                            json_print.leave_num5 = 0;
                            json_print.txtDatetime = txtDatetime();
                            json_print.dateLeaveRange = dd1+','+dd2;
                          break;
                          case '5'://ลาคลอดบุตร
                            json_print.doc_num = '0899-401-035';
                            json_print.headtopic = 'แบบใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว';
                            json_print.topic = 'ขอลาคลอดบุตร';
                            json_print.last_leave_date = lastLeaveData(leave_type,'f2');//วันที่ลาครั้งล่าสุด วันแรกกับวันสุดท้าย เป็น array
                            json_print.leave_num1 = lastLeaveData(leave_type,'f1');//ลาคลอดบุตรมาแล้วกี่วัน
                            json_print.leave_num2 = totalLeave();//ลาครั้งนี้(วันทำการ)
                            json_print.leave_num3 = json_print.leave_num1+json_print.leave_num2;//รวมเป็น(วันทำการ)
                            json_print.leave_num4 = 0;
                            json_print.leave_num5 = 0;
                            json_print.txtDatetime = txtDatetime();
                            json_print.dateLeaveRange = dd1+','+dd2;
                          break;
                          default:
                            json_print.doc_num = '0000-000-000';
                            json_print.headtopic = 'แบบฟอร์มนี้ไม่สามารถใช้เป็น electronic ได้';
                            json_print.topic = '';
                            json_print.last_leave_date = OnlineUser.dateNow2 + ',' + OnlineUser.dateNow2;
                            json_print.leave_num1 = 0;
                            json_print.leave_num2 =0;
                            json_print.leave_num3 = 0;
                            json_print.leave_num4 = 0;
                            json_print.leave_num5 = 0;
                            json_print.txtDatetime = txtDatetime();
                            json_print.dateLeaveRange = dd1+','+dd2;
                          break;
                        };
                        return json_print;
                    };//ฟังก์ชันสำหรับ  ยำ json print ใหม่ก่อน run pdfmake

                    //เลือกประเภทการลา
                    ch2.find("select").change(function(){//เงื่อนไขต่างๆ ที่เกิดขึ้นจากการเลือกประเภทการลา
                        objData.length = 0;
                        days.length = 0;
                        if($(this).val()!=='0'){
                            $(this).attr('style', 'background-color:#C7E5F5;');
                            ch3.removeClass('hidden').show();
                            ch4.removeClass('hidden').show();
                            ch5.removeClass('hidden').show();
                            ch6.removeClass('hidden').show();
                            ch7.removeClass('hidden').show();
                            //เงื่อนไขอื่นๆ
                            if($.inArray($("select[name='leave_id']").val(),ContinousLeave) === -1){//การลาประเภทที่ลาไม่ต่อเนื่อง และไม่ได้เต็มวันตลอด
                                ch3.find('button').trigger('click');
                            }else{//การลาที่เต็มวันทุกวัน นับวันหยุด และต่อเนื่องติดกันหลายวัน เช่น ลาคลอด,อุปสมบท ไม่ต้องเลือกทีละวัน  ค่อยไปเก็บค่าตอนกดบันทึก
                                ch4.empty();
                                ch4.toggleClass('hidden').hide();
                            }
                        }else{//ไม่ได้เลือกประเภทการลาต้อง clear ทุกอย่างออก
                            $(this).attr('style', 'background-color:none;');
                            ch4.empty();
                            ch3.toggleClass('hidden').hide();
                            ch4.toggleClass('hidden').hide();
                            ch5.toggleClass('hidden').hide();
                            ch6.toggleClass('hidden').hide();
                            ch7.toggleClass('hidden').hide();
                        }
                    });

                    //element ช่วงวันที่
                    var d1 = $("input[name='d1']").ConfigDatePicker(),d2=$("input[name='d2']").ConfigDatePicker();
                    var htmlDays = function(days){
                        var x='<br/>';
                        $.each(days,function(i,v){
                           var valdate = $.fn.StrThaiDate2(new Date(v));
                           x+=
                            '<div class="col-xs-8 text-left">'+
                                '<div class="col-xs-6 no-gutter">'+
                                  '<input type="text" name="txtDays_'+i+'" value="'+valdate+'"  class="form-control noradius" autocomplete="off" disabled="true">'+
                                '</div>'+
                                '<div class="col-xs-5 no-gutter">'+ 
                                    '<select  class="form-control noradius" name="SelHalffullday_'+i+'">'+
                                        '<option value="0">----โปรดเลือก-----</option>';
                                        $.each(LeaveFullHalfType,function(i,v){
                                            x+='<option value="'+v.id+'" data-leave_num_day="'+((v.id==='1')?1:0.5)+'">'+v.name+'</option>';
                                        });
                                  x+='</select>'+
                                '</div>'+
                                '<div class="col-xs-1 no-gutter">'+
                                    '<label class="btn" disabled>'+
                                        '<input type="checkbox" name="chkboxDays_'+i+'" value="'+v+'" style="display:none;" disabled><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span style="font-size: large;"></span>'+
                                    '</label>'+
                                '</div>'+
                            '</div>'; 
                        });
                        return x;
                    };

                    //คลิกโหลดช่วงวันที่ และ event เลือกวันที่จะลา และ การลาประเภทที่ลาไม่ต่อเนื่อง และไม่ได้เต็มวันตลอด ดังนั้นต้องเลือกทีละวัน
                    ch3.find('button').off('click').on('click',function(e){
                        objData.length = 0;
                        days.length = 0;
                        //การลาประเภทที่ลาไม่ต่อเนื่อง และไม่ได้เต็มวันตลอด ดังนั้นต้องเลือกทีละวัน
                        if($.inArray($("select[name='leave_id']").val(),ContinousLeave) === -1){//การลาประเภทที่ลาไม่ต่อเนื่อง และไม่ได้เต็มวันตลอด ดังนั้นต้องเลือกทีละวัน
                            var dd1 = (d1.val())?d1.data('date_true'):'';
                            var dd2 = (d2.val())?d2.data('date_true'):'';
                            if($.fn.DaysBetweenDate(dd1,dd2)!=='error'){
                                days = $.fn.DaysBetweenDate(dd1,dd2);//เก็บวันที่ไว้ใน array 
                                if(days.length >0){
                                    ch4.empty().append(htmlDays(days));//array วันที่+checkbox
                                    var color = "none";
                                    $("select[name*='SelHalffullday_']").change(function(){//เลือก select ครึ่งวัน เต็มวัน ให้เก็บค่าเข้า objData
                                        var thisChekBox = $(this).closest('.col-xs-8').find("input[name*='chkboxDays_']");
                                        if($(this).val()!=='0'){
                                            //เล่นสีตอนเลือก
                                            color="#C7E5F5";
                                            $(this).attr('style', 'background-color:'+color+';');
                                            $(this).closest('.col-xs-8').find("input[name*='txtDays_']").attr('style', 'background-color:'+color+';');
                                            $(this).closest('.col-xs-8').find("label.btn >.fa-check-square-o").attr('style', 'background-color:'+color+';');

                                            thisChekBox.prop('checked',true);//ติ๊กถูกให้ด้วย

                                            //แม้จะไม่เป็น 0 แต่ค่านั้น push เข้าไปแล้ว จะต้องไม่ push ซ้ำ
                                            objData = $.grep(objData, function (v) {
                                                if(v.leave_date===thisChekBox.val()){//ลบออกซะก่อน ป้องกันกด change 2 ครั้ง
                                                    return v.leave_date !==thisChekBox.val();
                                                }else{//ไม่ต้องลบออก
                                                    return v;
                                                }
                                            });
                                            //เก็บค่าเข้า array
                                            objData.push({
                                                'person_id':OnlineUser.person_id,
                                                'leave_date':thisChekBox.val(),
                                                'fullhalf':$(this).val(),
                                                'fullhalf_txt':$(this).find('option:selected').text(),
                                                'leave_num_day':$(this).find('option:selected').data('leave_num_day'),
                                                'range_firstday':dd1,//วันที่ตอนเลือกเข้ามาเป็นช่วง
                                                'range_lastday':dd2,//วันที่ตอนเลือกเข้ามาเป็นช่วง
                                                'leave_id':'',
                                                'contact_addr':'',
                                                'contact_tel':'',
                                                'leave_txt_note':'',
                                                'json_print':'',
                                                'status_use':'E',//รอพิจารณา
                                                'record_use':'Y'
                                            });
                                        }else{
                                            color="none";
                                            $(this).attr('style', 'background-color:'+color+';');
                                            $(this).closest('.col-xs-8').find("input[name*='txtDays_']").attr('style', 'background-color:'+color+';');
                                            $(this).closest('.col-xs-8').find("label.btn >.fa-check-square-o").attr('style', 'background-color:'+color+';');

                                            thisChekBox.prop('checked',false);
                                            objData = $.grep(objData, function (v) {
                                                return v.leave_date !==thisChekBox.val();
                                            });
                                        }
                                    });
                                }
                            }
                        }
                        //การลาที่เต็มวันทุกวัน นับวันหยุด และต่อเนื่องติดกันหลายวัน เช่น ลาคลอด,อุปสมบท ไม่ต้องเลือกทีละวัน  ค่อยไปเก็บค่าตอนกดบันทึก
                        else{
                            ch4.empty();
                            ch4.toggleClass('hidden').hide();
                            objData.length = 0;
                            days.length = 0;
                        }  
                        e.stopPropagation();
                    });
                    //กดบันทึกลงฐาน
                    ch7.find('button').click(function(){
                        var msg = ch7.find('span').css({color:'red'});
                        var dd1 = (d1.val())?d1.data('date_true'):'';
                        var dd2 = (d2.val())?d2.data('date_true'):'';
                        //การลาที่เต็มวันทุกวัน นับวันหยุด และต่อเนื่องติดกันหลายวัน เช่น ลาคลอด,อุปสมบท ไม่ต้องเลือกทีละวัน  ค่อยไปเก็บค่าตอนกดบันทึก
                        if($.inArray($("select[name='leave_id']").val(),ContinousLeave) !== -1){
                            if($.fn.DaysBetweenDate(dd1,dd2)!=='error'){
                                days.length = 0;
                                days = $.fn.DaysBetweenDate(dd1,dd2);//เก็บวันที่ไว้ใน array 
                                if(days.length >0){
                                    $.each(days,function(i,v){
                                        objData.push({
                                            'leave_date':v,
                                            'fullhalf':'1',//เต็มวันทุกวัน
                                            'fullhalf_txt':'เต็มวัน',
                                            'leave_num_day':'1',//เต็มวันทุกวัน
                                            'range_firstday':dd1,//วันที่ตอนเลือกเข้ามาเป็นช่วง
                                            'range_lastday':dd2,//วันที่ตอนเลือกเข้ามาเป็นช่วง
                                            'leave_id':'',
                                            'contact_addr':'',
                                            'contact_tel':'',
                                            'leave_txt_note':'',
                                            'leave_txt_note2':''
                                        });
                                    });
                                }
                            } 
                        }
                        var leave_id = $("select[name='leave_id']").val();
                        
                        var json_print_one = function(){
                            var x = false;
                            if(leave_id){
                                if(dd1 !=='' && dd2 !==''){
                                    x = true;
                                }
                            }
                            if(x){
                                return json_print_func(leave_id,dd1,dd2);
                            }else{
                                return {};
                            }
                        };//ถ้ามี leave_id เข้ามาให้ run json_print_func(leave_id);
                        var CurrDT =$.fn.CurrDateTimeCode(); //วันเวลาปัจจุบันสำหรับทำ serialgen
                        var json_print_obj;
                        $.each(objData,function(i,v){//สิ่งที่เหมือนกันทุกวัน (loop ซ้ำเท่าจำนวนวัน ต้องระวังเรื่องเก็บข้อมูล)
                            v.person_id=OnlineUser.person_id;
                            v.leave_id=leave_id;
                            v.contact_addr=$("input[name='txtAddress']").val();
                            v.contact_tel=$("input[name='txtTel']").val();
                            v.leave_txt_note=$("input[name='txtNote']").val();
                            v.leave_txt_note2=$("input[name='txtNote2']").val();
                            v.json_print =json_print_one();
                            v.serialgen = leave_id+'x'+CurrDT;
                            v.status_use = 'E';
                            v.record_use = 'Y';
                            json_print_obj = v.json_print;
                        });
                        
                        if(objData.length>0){
                            msg.html("");
                            $.ajax({
                                url:"UserLeaveSend2.php", 
                                type:"post",
                                cache:false,
                                dataType:'json',
                                data:{'d':JSON.stringify(objData),'json_print_str':JSON.stringify(json_print_obj)}
                            }).done(function(data){//console.log(typeof data);
                                
                                var txtmodal = function(){
                                    var txt = '<div class="modal hidden fade" data-json_print="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                                        '<div class="modal-dialog modal-xs" role="document">'+
                                            '<div class="modal-content">'+
                                                '<div class="modal-body">'+
                                                        '<div class="row">'+
                                                            '<h3 style="padding:15px;margin:15px">'+
                                                                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กลุ่มงานทรัพยากรบุคคลได้รับข้อมูลการลาของท่านแล้ว'+
                                                                '&nbsp;แต่อย่างไรก็ตามการลาครั้งนี้จะนับเป็นวันลาได้ก็ต่อเมื่อ'+
                                                                'ท่านได้&nbsp;<u>Print ใบลา</u>&nbsp;แล้วนำไปเสนอต่อผู้บังคับบัญชาพิจารณาอนุญาตเท่านั้น'+
                                                            '</h3>'+
                                                        '</div>'+
                                                '</div>'+
                                                '<div class="modal-footer">'+
                                                    '<button type="button"  class="btn chayanon-btn3d-orange" style="color:black;">Print</button>'+
                                                    '<button type="button"  class="btn btn-lg btn-danger noradius" style="color:white;">Close</button>'+//data-dismiss="modal"
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
                                    return txt;  
                                };
                                var modal1 =  $(txtmodal());
                                modal1.modal({
                                    keyboard:false,
                                    backdrop:'static'
                                });
                                modal1.on('hidden.bs.modal', function(){
                                    $(this).data('bs.modal', null);
                                });//clear null modal เมื่อ hide modal   
                                modal1.data('json_print',data[0].json_print);
                                modal1.find('.modal-footer button').first().click(function(){//กด print
                                    Print_module($(this).closest('.modal').data('json_print'),OnlineUser);
                                });//run function Print_module(data,OnlineUser);
                                modal1.find('.modal-footer button').last().click(function(){//คลิก Close
                                    window.location.hash = '#Leave2';
                                    window.location.reload(true);
                                });//click ok ไม่ print ให้ไป LeaveAbsence_module('#Leave2');
                                modal1.removeClass('hidden').modal('show');

                                
                            });
                            
                        }else{
                            msg.html("กรุณาระบุรายละเอียดให้ครบ !!");
                        }
                    });
                    
                });//when2
            });//when1
        };//ยื่นใบลา
        var Leave_Report_module = function(){
            function Tbl(d,olu){
                var x = "",
                    d1 = [],//array object เฉพาะการลา
                    d2 = [],//array object ที่ไม่ใช่การลา
                    ld2 = ['13','14','15','16','17'];//leave_absence_group ที่ไม่ใช่การลา
                function CalcNumDays(l){
                    n = 0;
                    if(l.status_use==='Y'){
                        if(isNaN(parseFloat(l.leave_num_day))===false){
                            if( parseInt($.fn.DateToYearGov(olu.dateNow2)) === parseInt(l.leave_year_gov)){
                                n = parseFloat(l.leave_num_day);
                            }
                        }
                    }
                    return n;
                };
                function Txt_head(){
                    var x ='<h3 style="text-align:center";>ทะเบียนวันลา&nbsp;</h3>'+
                    '<nav class="navbar navbar-expand-xs ">'+
                        '<a href="#" '+
                            'data-toggle="popover" '+
                            'data-content="'+
                                '<p style=font-size:25px;>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;สถานะ รอพิจารณา หมายถึง กระบวนการขออนุมัติยังไม่เสร็จสิ้น(ยังไม่นับเป็นวันลา)<br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;สถานะ รอพิจารณา <u>จะสามารถลบรายการได้</u>'+
                                '</p>'+
                            '"'+
                            '><span class="h4"><i class="fa fa-spinner fa-2x" aria-hidden="true" style="color:blue;"></i>รอพิจารณา</span>'+
                        '</a>'+
                        '<a href="#" '+
                            'data-toggle="popover" '+
                            'data-content="'+
                                '<p style=font-size:25px;>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;สถานะ นับเป็นวันลา หมายถึงกระบวนการขออนุมัติเสร็จสิ้นแล้ว(นับเป็นวันลา)<br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;สถานะ นับเป็นวันลา <u>จะไม่สามารถลบรายการได้</u>'+
                                    'และหากไม่ต้องการนับเป็นวันลา <u>ต้องยกเลิกวันลาเท่านั้น</u>'+
                                '</p>'+
                            '"'+
                            '><span class="h4"><i class="fa fa-check fa-2x" aria-hidden="true" style="color:#1E7007;"></i>นับเป็นวันลา</span>'+
                        '</a>'+
                        '<a href="#" '+
                            'data-toggle="popover" '+
                            'data-content="'+
                                '<p style=font-size:25px;>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;จะยกเลิกวันลาได้ก็ต่อเมื่อ รายการนั้นถูกนับเป็นวันลาแล้วเท่านั้น<br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;ปุ่มยกเลิกวันลาจะปรากฎก็ต่อเมื่อ <u>กระบวนการขออนุมัติเสร็จสิ้นแล้ว(นับเป็นวันลา)</u>'+
                                '</p>'+
                            '"'+
                            '><span class="h4"><i class="fa fa-ban fa-2x" aria-hidden="true" style="color:#EC850B;"></i>ยกเลิกวันลา</span>'+
                        '</a>'+
                        '<a href="#" '+
                            'data-toggle="popover" '+
                            'data-content="'+
                                '<p style=font-size:25px;>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10102;</font> &nbsp;รายการที่ลบได้มีเพียงกรณีเดียวคือมีสถานะเป็น รอพิจารณา<br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;<font style=font-size:35px;>&#10103;</font> &nbsp;ขอความกรุณาลบรายการนั้นๆทิ้งทันทีหากท่านไม่ประสงค์จะยื่นขออนุมัติการลา</u>'+
                                '</p>'+
                            '"'+
                            '><span class="h4"><i class="fa fa-trash fa-2x" aria-hidden="true" style="color:red;"></i>ลบรายการ</span>'+
                        '</a>'+
                    '</nav>';
                    return x;
                };
                function Tbl_head1(){
                    var x = 
                        '<div class="table-responsive">'+
                            '<table class="table" border="1">'+
                              '<thead >'+
                                '<tr>'+
                                    '<th style="vertical-align:middle;text-align:center;padding:0;margin:0;" rowspan="2">ว/ด/ป</th>'+
                                    '<th style="text-align:center;" colspan="7">ประเภทการลา</th>'+
                                    '<th style="text-align:center;" colspan="3">Action</th>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">ป่วย</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">กิจ</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">พักผ่อน</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">คลอดบุตร</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">ช่วยภริยาคลอดบุตร</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">อุปสมบท/ฮัจย์</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#F9DFC0;">ศึกษาต่อ/ดูงาน</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#A2E5F6;">Print</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#A2E5F6;">ยกเลิกวันลา</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#A2E5F6;">ลบรายการ</th>'+
                                '</tr>'+
                              '<thead>'+
                              '<tbody>';   
                    return x;
                };
                function Tbl_head2(){
                    var x = 
                        '<div class="table-responsive">'+
                            '<table class="table" border="1">'+
                              '<thead >'+
                                '<tr>'+
                                    '<th style="vertical-align:middle;text-align:center;padding:0;margin:0;" rowspan="2">ว/ด/ป</th>'+
                                    '<th style="text-align:center;" colspan="4">การปฏิบัติราชการ/พฤติกรรมการปฏิบัติราชการ</th>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#C4F383;">ไปราชการ</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#C4F383;">สาย</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#C4F383;">ไม่สแกนเข้า</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#C4F383;">ไม่สแกนออก</th>'+
                                    '<th style="text-align:center;padding:0;margin:0;background-color:#C4F383;">สแกนออกก่อน</th>'+
                                '</tr>'+
                              '<thead>'+
                              '<tbody>';   
                    return x;
                };
                function Tbl_end1(){
                    var x =
                            '</tbody>'+
                        '</table>'+
                       '</div>';
                    return x;
                };
                function Tbl_body1(data){
                    function status_use(st){
                      var x = "";
                      if(st==='Y'){
                          x ='<i class="fa fa-check" aria-hidden="true" style="color:#1E7007;"></i>';
                      }else if(st==='N'){
                          x ='<i class="fa fa-ban" aria-hidden="true" style="color:red;"></i>';
                      }else if(st==='E'){
                          x = '<i class="fa fa-spinner" aria-hidden="true" style="color:blue;"></i>';
                      }
                      return x;
                    };
                    var x ="";
                    var s2=0,s3=0,s1=0,s5=0,s6=0,s7=0,s9=0;
                        $.each(data,function(i,v){
                            if(v.leave_absence_group==='2'){s2 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='3'){s3 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='1'){s1 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='5'){s5 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='6'){s6 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='7'){s7 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='9'){s9 +=CalcNumDays(v);}
                            x+='<tr data-lid="'+v.id+'">'+
                                    '<td>'+(   (v.leave_date)?$.fn.StrThaiDate3( new Date(v.leave_date) ):''  )+'</td>'+
                                    '<td>'+( (v.leave_absence_group==='2')?v.fh+status_use(v.status_use):'')+'</td>'+//ป่วย
                                    '<td>'+( (v.leave_absence_group==='3')?v.fh+status_use(v.status_use):'')+'</td>'+//กิจ
                                    '<td>'+( (v.leave_absence_group==='1')?v.fh+status_use(v.status_use):'')+'</td>'+//พักผ่อน
                                    '<td>'+( (v.leave_absence_group==='5')?v.fh+status_use(v.status_use):'')+'</td>'+//คลอดบุตร
                                    '<td>'+( (v.leave_absence_group==='6')?v.fh+status_use(v.status_use):'')+'</td>'+//ช่วยภริยาคลอดบุตร
                                    '<td>'+( (v.leave_absence_group==='7')?v.fh+status_use(v.status_use):'')+'</td>'+//อุปสมบท/ฮัจย์
                                    '<td>'+( (v.leave_absence_group==='9')?v.fh+status_use(v.status_use):'')+'</td>'+//ศึกษาต่อ/ดูงาน
                                    '<td style="text-align:center;">';
                                        if(v.json_print){//ถ้ามี json_print ให้ print
                                            x+='<a href="#print" data-idprint="'+v.id+'"><i class="fa fa-print fa-2x" aria-hidden="true"></i></a>';
                                        }
                                 x+='</td>'+
                                    '<td style="text-align:center;">';
                                        if(v.status_use==='Y'){//ถ้านับเป็นวันลาแล้ว ให้ยกเลิกวันลาได้
                                            x+='<a href="#cancel" data-idcancel="'+v.id+'"><i class="fa fa-ban fa-2x" aria-hidden="true" style="color:#EC850B;"></i></a>';
                                        }
                                x+='</td>'+
                                    '<td style="text-align:center;">';
                                        if(v.status_use==='E'){//ถ้าอยู่ระหว่างรอพิจารณา ให้ลบ record นี้ได้
                                            x+='<a href="#delete" data-iddelete="'+v.id+'"><i class="fa fa-trash fa-2x" aria-hidden="true" style="color:red;"></i></a>';
                                        }
                                x+='</td>'+
                              '</tr>'; 
                        });
                    function summary(){
                        var xs = '';
                        xs+='<tr>'+
                            '<td style="text-align:right;padding:0;margin:0;">รวม</td>'+
                            '<td style="text-align:center;padding:0;margin:0;">'+((s2===0)?"-":s2)+'</td>'+//ป่วย
                            '<td style="text-align:center;padding:0;margin:0;">'+((s3===0)?"-":s3)+'</td>'+//กิจ
                            '<td style="text-align:center;padding:0;margin:0;">'+//ลาพักผ่อน
                                '<a href="#" class="btn chayanon-btn3d-orange" '+    
                                   'data-toggle="popover" data-placement="top" '+
                                   'title="ข้อมูลวันลาพักผ่อน" data-html="true" data-trigger="hover focus" '+
                                   'data-content="" '+
                                  '>'+((s1===0)?"-":s1)+'&nbsp;วัน&nbsp;<i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></a>'+
                            '</td>'+
                            '<td style="text-align:center;padding:0;margin:0;">'+((s5===0)?"-":s5)+'</td>'+//คลอดบุตร
                            '<td style="text-align:center;padding:0;margin:0;">'+((s6===0)?"-":s6)+'</td>'+//ช่วยภริยาคลอดบุตร
                            '<td style="text-align:center;padding:0;margin:0;">'+((s7===0)?"-":s7)+'</td>'+//อุปสมบท/ฮัจย์
                            '<td style="text-align:center;padding:0;margin:0;">'+((s9===0)?"-":s9)+'</td>'+//ศึกษาต่อ/ดูงาน
                        '</tr>';
                        return xs;
                    };
                    return x+summary();
                };//ข้อมูลและสรุป ที่เป็นการลา
                function Tbl_body2(data){
                    var x ="";
                    var s14=0,s13=0,s15=0,s16=0,s17=0;
                        $.each(data,function(i,v){
                            if(v.leave_absence_group==='14'){s14 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='13'){s13 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='15'){s15 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='16'){s16 +=CalcNumDays(v);}
                            if(v.leave_absence_group==='17'){s17 +=CalcNumDays(v);}
                           x+='<tr data-lid="'+v.id+'">'+
                                    '<td>'+( (v.leave_date)?$.fn.StrThaiDate3( new Date(v.leave_date) ):''  )+'</td>'+
                                    '<td style="text-align:center;">'+( (v.leave_absence_group==='14')?v.fh:''  )+'</td>'+//ไปราชการ
                                    '<td style="text-align:center;">'+( (v.leave_absence_group==='13')?v.fh:''  )+'</td>'+//สาย
                                    '<td style="text-align:center;">'+( (v.leave_absence_group==='17')?v.fh:''  )+'</td>'+//ไม่สแกนเข้า
                                    '<td style="text-align:center;">'+( (v.leave_absence_group==='15')?v.fh:''  )+'</td>'+//ไม่สแกนออก
                                    '<td style="text-align:center;">'+( (v.leave_absence_group==='16')?v.fh:''  )+'</td>'+//สแกนออกก่อน
                              '</tr>'; 
                        });
                    function summary(){
                        var xs = '';
                        xs+='<tr>'+
                            '<td style="text-align:right;padding:0;margin:0;">รวม</td>'+
                            '<td style="text-align:center;padding:0;margin:0;">'+((s14===0)?"-":s14)+'</td>'+//ไปราชการ
                            '<td style="text-align:center;padding:0;margin:0;">'+((s13===0)?"-":s13)+'</td>'+//สาย
                            '<td style="text-align:center;padding:0;margin:0;">'+((s17===0)?"-":s17)+'</td>'+//ไม่สแกนเข้า
                            '<td style="text-align:center;padding:0;margin:0;">'+((s15===0)?"-":s15)+'</td>'+//ไม่สแกนออก
                            '<td style="text-align:center;padding:0;margin:0;">'+((s16===0)?"-":s16)+'</td>'+//สแกนออกก่อน
                        '</tr>';
                        return xs;
                    };
                    return x+summary();
                };//ข้อมูลและสรุป ที่ไม่ใช่การลา เช่น ไปราชการ
                if(d.length > 0){
                    $.each(d,function(i,v){
                       if($.inArray(v.leave_absence_group,ld2)===-1){
                           d1.push(d[i]);//ที่เป็นการลา
                       }else{
                           d2.push(d[i]);//ที่ไม่ใช่การลา เช่น ไปราชการ ไม่สแกนออก
                       }
                    });
                    if(d1.length >0){
                       x += Txt_head()+Tbl_head1()+Tbl_body1(d1)+Tbl_end1();
                    }
                    if(d2.length >0){
                       x+=Tbl_head2()+Tbl_body2(d2)+Tbl_end1();
                    }   
                }//แยกระหว่างข้อมูลวันลา กับ ข้อมูลการปฏิบัติราชการ (เช่น ไปราชการ สาย ออกก่อน)
                return x;
            };
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
                    '<div class="col-xs-6 no-gutter">5)ณ วันนี้ท่านลาพักผ่อนไปแล้ว</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" value="'+VacationSummary[0].total_day_leave_numday+'" size="6" maxlength="6"></div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-xs-6 no-gutter">6)วันลาพักผ่อนคงเหลือ คือ</div>'+
                    '<div class="col-xs-6 no-gutter chayanon-transclass"><input type="number" class="bg-success" value="'+VacationSummary[0].net_numday+'" size="6" maxlength="6"></div>'+
                '</div>';
               return x;
            };
            $.when($.fn.def_OnlineUser()).done(function(onlineUser){
                $.when(
                    $.fn.def_CallLeave(onlineUser.person_id),
                    $.fn.def_LeaveAbsenceVacationSummary(onlineUser.person_id)
                ).done(function(ld,VacationSummary){
                    if(typeof ld !=='string'){//ld คือ ไฟล์ LeaveData.php ของ folder starthr ซึ่ง query ต่างกับ folder adm
                        Content.empty().append(Tbl(ld,onlineUser));
                        //modal config
                        var txtmodal = function(){
                            var txt = '<div class="modal"  role="dialog"  aria-hidden="true">'+
                              '<div class="modal-dialog modal-xs" role="document">'+
                                  '<div class="modal-content">'+
                                      '<div class="modal-header"></div>'+
                                      '<div class="modal-body"></div>'+
                                      '<div class="modal-footer"></div>'+
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
                    
                        //html config
                        var a_nav = Content.find('nav.navbar > a[data-toggle="popover"]').popover({
                            html:true,
                            container: 'body',
                            trigger: "hover",
                            title:"คำอธิบาย"
                        });
                        var Tbl1 = Content.find('table').first();
                        var Tbl1_aTog = Tbl1.find('tr:last-child > td:nth-child(4) >a[data-toggle="popover"]');
                            Tbl1_aTog.popover({'content':htmlPopVacationDetail(VacationSummary)});
                        
                        //event click
                        Tbl1.find('a[href="#print"]').click(function(e){
                            e.preventDefault();
                            var id = $(this).data('idprint');
                            $.ajax({
                                url:"LeaveData.php", 
                                type:"post",
                                cache:false,
                                dataType:'json',
                                data:{'person_id':JSON.stringify(onlineUser.person_id)}
                            }).done(function(data){
                                if(typeof data !=='string'){
                                    $.each(data,function(i,v){
                                        if(parseInt(id)===parseInt(v.id)){
                                           if(v.json_print){
                                               Print_module($.parseJSON(v.json_print),onlineUser);
                                           }
                                        }
                                    });
                                }
                            });
                        });  
                        Tbl1.find('a[href="#cancel"]').click(function(e){
                            e.preventDefault();
                            var id = $(this).data('idcancel');
                            function dataSelect(alldata,FieldName){
                                var dataSel = '';
                                $.each(alldata,function(i,v){
                                    if(parseInt(v.id)===parseInt(id)){
                                        dataSel = $.fn.callDataByFieldName2(FieldName,v);
                                    }
                                });
                                return dataSel;
                            };//return string data
                            function LeaveDate_sameSerialgen(dataAll){
                                var serialgenSelect,leavedate=[];
                                if(dataSelect(dataAll,'id')){
                                    if(  parseInt(dataSelect(dataAll,'id')) === parseInt(id)  ){
                                        if(dataSelect(dataAll,'serialgen')){
                                           serialgenSelect =  dataSelect(dataAll,'serialgen');
                                        }
                                    }
                                }
                                if(serialgenSelect){
                                    $.each(dataAll,function(i,v){
                                        if(v.serialgen===serialgenSelect){
                                            leavedate.push(v.leave_date);
                                        }
                                    });
                                }
                                return leavedate;
                            };
                            function CancelFrm(cfd){//cfd คือ ข้อมูลการลาทั้งหมดของ person_id นี้
                                var arrLeaveDate = LeaveDate_sameSerialgen(cfd);
                                var x ='<div class="form-group">'+
                                        '<div class="row">'+
                                            '<div class="col-xs-4">'+
                                                '<label>วันที่ขอยกเลิก</label>'+
                                            '</div>'+
                                            '<div class="col-xs-3">'+
                                                '<label>จำนวน(วัน)</label>'+
                                            '</div>'+
                                            '<div class="col-xs-5">'+
                                                '<label>เลือกวัน</label>'+
                                            '</div>'+
                                        '</div>';    
                                if( arrLeaveDate.length >0  ){
                                    $.each(arrLeaveDate,function(i,v){
                                        x+=
                                        '<div class="row">'+
                                            '<div class="col-xs-4">'+
                                                '<input type="text" value="'+ $.fn.StrThaiDate3( new Date(v) )  +'" class="form-control noradius" disabled>'+
                                            '</div>'+
                                            '<div class="col-xs-3">'+
                                                '<input type="text" data-leavenumday="'+dataSelect(cfd,'leave_num_day')+'" name="txtfullhalf" value="'+dataSelect(cfd,'fh')+'" class="form-control noradius" disabled>'+
                                            '</div>'+
                                            '<div class="col-xs-5">'+
                                                '<label class="btn">'+
                                                    '<input type="checkbox" name="chkboxDays_'+i+'" value="'+v+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span style="font-size: large;"></span>'+
                                                '</label>'+
                                            '</div>'+
                                        '</div>';
                                    });
                                }
                                x+=
                                '</div>'+
                                '<div class="form-group">'+
                                    '<label>เนื่องจาก</label>'+
                                    '<input type="text" name="txtcauseCancel" class="form-control noradius" placeholder="ระบุเหตุผลที่ยกเลิกวันลา">'+
                                '</div>';
                                return x;
                            };
                            function print_CancelFrm(d,dataSend){
                                function chklenStr(str,wMax){//wMax หน่วยเป็นนิ้ว
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
                                    var newStr =str,wStr;
                                    wStr = textWidth(newStr);//ความกว้าง str
                                    var wiMax = parseFloat(wMax*96);//1 inch = 96px
                                    while (wStr < wiMax) {
                                        newStr += ' ';
                                        wStr = wStr+4.5;//เพิ่มทีละ 4.5px
                                    }
                                    return newStr;
                                };
                                var content = [
                                    {text: '0899-401-036',fontSize:16,alignment: 'right'},
                                    {text: 'แบบใบขอยกเลิกวันลา',fontSize:16,alignment: 'center',decoration: 'underline'},
                                    '\n',
                                    {text:[
                                            {text: '(เขียนที่) '},
                                            {text: 'โรงพยาบาลจิตเวชสงขลาราชนครินทร์',decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16,alignment: 'right'},
                                    {text: $.fn.StrThaiDate4(new Date()),decoration: 'underline',decorationStyle: 'dotted',fontSize:16,alignment: 'right'},
                                    {text:[
                                            {text: 'เรื่อง ยกเลิกวันลา '},
                                            {text: dataSelect(d,'leave_absence_name'),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    '\n',
                                    {text: 'เรียน ผู้อำนวยการโรงพยาบาลจิตเวชสงขลาราชนครินทร์',fontSize:16},
                                    '\n',
                                    {text:[
                                            {text: '................',color:'white'},
                                            {text: 'ตามที่ข้าพเจ้า '},
                                            {text: chklenStr(onlineUser.pname,2),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'ตำแหน่ง '},
                                            {text: chklenStr( (onlineUser.position_name),2.5),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: 'ระดับ '},
                                            {text: chklenStr((onlineUser.class_position)?onlineUser.class_position:'-',1.3),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'สังกัด โรงพยาบาลจิตเวชสงขลาราชนครินทร์ '},
                                            {text: chklenStr((onlineUser.groupwork_name)?onlineUser.groupwork_name:'',2.2),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: 'ได้รับอนุญาตให้ลา '},
                                            {text: chklenStr(dataSelect(d,'leave_absence_name'),2.5),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'ตั้งแต่ '},
                                            {text: chklenStr(dataSend[0].txtfirst_leave_date,2.55),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: 'ถึง '},
                                            {text: chklenStr(dataSend[0].txtlast_leave_date,2.55),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'รวม '},
                                            {text: chklenStr(dataSend[0].sum_leave_date,0.3),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: ' วัน นั้น'}
                                        ],fontSize:16},
                                    '\n',
                                    {text:[
                                            {text: '................',color:'white'},
                                            {text: 'เนื่องจาก (ระบุเหตุผล) '},
                                            {text: chklenStr( (dataSend[0].txtcauseCancel)?dataSend[0].txtcauseCancel:'' ,4.5  ),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: 'จึงขอยกเลิกวันลา '},
                                            {text: chklenStr(dataSelect(d,'leave_absence_name'),2.5),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'ตั้งแต่ '},
                                            {text: chklenStr(dataSend[0].txtfirst_leave_date,2.55),decoration: 'underline',decorationStyle: 'dotted'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: 'ถึง '},
                                            {text: chklenStr(dataSend[0].txtlast_leave_date,2.55),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: 'รวม '},
                                            {text: chklenStr(dataSend[0].sum_leave_date,0.3),decoration: 'underline',decorationStyle: 'dotted'},
                                            {text: ' วัน'}
                                        ],fontSize:16},
                                    '\n\n',
                                    {text:[
                                            {text: '...........................................................................................................',color:'white'},
                                            {text: '(ลงชื่อ).............................................................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '......................................................................................................................',color:'white'},
                                            {text: '('+chklenStr(onlineUser.pname,1.5)+')'},
                                            {text: '..................................................................................................................',color:'white'}
                                           // {text: '('+chklenStr( (onlineUser.position_name),1)+chklenStr((onlineUser.class_position)?onlineUser.class_position:'',0.5)+')'}
                                        ],fontSize:16},
                                    '\n\n\n',
                                    {text: 'ความเห็นผู้บังคับบัญชา',fontSize:16,decoration: 'underline'},
                                    {text:[
                                            {text: '.............................................................................'+
                                                   '.............................................................................'+
                                                   ' ..........................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '.............................................................................'+
                                                   '.............................................................................'+
                                                   ' ..........................'}
                                        ],fontSize:16},
                                    '\n\n',
                                    {text:[
                                            {text: '...........................................................................................................',color:'white'},
                                            {text: '(ลงชื่อ).............................................................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '......................................................................................................................',color:'white'},
                                            {text: '(........................................................)'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '...................................................................................................................',color:'white'},
                                            {text: '(ตำแหน่ง)............................................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '...........................................................................................................',color:'white'},
                                            {text: 'วันที่................./........................../..................'}
                                        ],fontSize:16},
                                     '\n',
                                    {text: 'คำสั่ง',fontSize:16,decoration: 'underline'},
                                    {text:[
                                            {text: '....................',color:'white'},
                                            {text: '[ ] อนุญาต  [ ] ไม่อนุญาต'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '.............................................................................'+
                                                   '.............................................................................'+
                                                   ' ..........................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '.............................................................................'+
                                                   '.............................................................................'+
                                                   ' ..........................'}
                                        ],fontSize:16},
                                    '\n\n',
                                    {text:[
                                            {text: '...........................................................................................................',color:'white'},
                                            {text: '(ลงชื่อ).............................................................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '......................................................................................................................',color:'white'},
                                            {text: '(........................................................)'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '...................................................................................................................',color:'white'},
                                            {text: '(ตำแหน่ง)............................................'}
                                        ],fontSize:16},
                                    {text:[
                                            {text: '...........................................................................................................',color:'white'},
                                            {text: 'วันที่................./........................../..................'}
                                        ],fontSize:16}
                                ];
                                
                                pdfMake.createPdf($.fn.print_pdf(content,null)).open();
                            };
                            if(id){
                                modal.find('.modal-header').empty().append('ยกเลิกวัน '+dataSelect(ld,'leave_absence_name'));
                                modal.find('.modal-body').empty().append(CancelFrm(ld));
                                modal.find('.modal-footer').empty().append(
                                    '<p style=font-size:14px;text-align:left;>'+
                                        '<font style=font-size:22px;>&#10102;</font> &nbsp;print เอกสารไปให้ผู้บังคับบัญชาเซ็นอนุญาตก่อน<br>'+
                                        '<font style=font-size:22px;>&#10103;</font> &nbsp;เมื่อผู้บังคับบัญชาเซ็นอนุญาตแล้ว การยกเลิกวันลาจึงจะสมบูรณ์</u>'+
                                    '</p>'+
                                    '<button type="button"  class="btn bg-danger noradius" style="color:black;" data-dismiss="modal">แน่ใจ,ยกเลิกวันลา</button>'+
                                    '<button type="button"  class="btn bg-success noradius" style="color:black;" data-dismiss="modal">ปิด</button>'
                                );
                                modal.modal('show');
                                
                                //คลิก แน่ใจ ยกเลิกวันลา
                                modal.find('.modal-footer > button').first().click(function(e){
                                    e.preventDefault();
                                    var arr_daySend = [],dayOnly = [],sumLeave = 0;
                                    $("input[name^='chkboxDays_']").each(function(){
                                        if($(this).is(':checked')){
                                            dayOnly.push($(this).val());
                                            sumLeave = sumLeave + parseFloat($(this).closest('div.row').find("input[name='txtfullhalf']").data('leavenumday'));
                                            arr_daySend.push({
                                               leave_date:$(this).val(),
                                               txt_leave_date:$.fn.StrThaiDate3(new Date($(this).val())),
                                               txtfullhalf:$(this).closest('div.row').find("input[name='txtfullhalf']").val(),//0.5(เช้า)
                                               txtcauseCancel:$(this).closest('.modal-body').find("input[name='txtcauseCancel']").val(),//เหมือนกันหมด
                                               txtfirst_leave_date:'',//วันแรก เหมือนกันหมด
                                               txtlast_leave_date:'',//วันสุดท้าย เหมือนกันหมด
                                               sum_leave_date:0//ผลรวมวันที่ขอยกเลิก เหมือนกันหมด
                                            });
                                        }
                                    });
                                   
                                    if(arr_daySend.length > 0){
                                        var len = arr_daySend.length;
                                        $.each(arr_daySend,function(i,v){
                                            v.txtfirst_leave_date = $.fn.StrThaiDate4(new Date( dayOnly[0]  ));
                                            v.txtlast_leave_date = $.fn.StrThaiDate4(new Date( dayOnly[len-1]  ));
                                            v.sum_leave_date = sumLeave;
                                        });
                                        print_CancelFrm(ld,arr_daySend);
                                    }
                                });
                            }
                        }); 
                        Tbl1.find('a[href="#delete"]').click(function(e){
                            e.preventDefault();
                            var id = $(this).data('iddelete');
                            if(id){
                                modal.find('.modal-body').empty().append('<h1>Data ID='+id+' will be lost,Are you sure?</h1>');
                                modal.find('.modal-footer').empty().append(
                                    '<button type="button"  class="btn bg-danger noradius" style="color:black;" data-dismiss="modal">Sure Delete</button>'+
                                    '<button type="button"  class="btn bg-success noradius" style="color:black;" data-dismiss="modal">CANCEL</button>'
                                );

                                modal.modal('show');
                                modal.find('button').first().click(function(e){//sure delete
                                    $.when($.fn.def_LeaveDelByID(id)).done(function(resp){
                                        if(resp==='ok'){
                                            window.location.hash = '#Leave2';
                                            window.location.reload(true);
                                        }
                                    });
                                    e.stopPropagation();
                                });
                            }
                        }); 
                        
                        a_nav.click(function(e){
                           e.preventDefault(); 
                        });
                        
                    }else{
                        alert(ld);
                    }  
                });
            });
        };//ทะเบียนวันลา
        if(SubModuleID==='#Leave1'){//ส่งใบลา
            Leave_send_module();
        }else if(SubModuleID==='#Leave2'){//ทะเบียนวันลา
            Leave_Report_module();
        }else{
            return false;
        }
    };//ระบบวันลา
    var Develope_BySelfBook_module = function(){
        var content = $("#myContent");
        var LayoutHtml = function(){
            var x=
            '<nav class="navbar navbar-default noradius" role="navigation" style=" margin-bottom: 0px;">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-SelftDev">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse nopaddnomargin"  id="navbar-SelftDev">'+
                        '<ul  class="nav navbar-nav nopaddnomargin">'+
                            //'<li><a href="#" class="chayanon-wrap-img" style="width:80px;height:50px;" ><img src="../img/self-development.jpg" class="img-responsive" style="width:80px;height:50px;"/></a></li>'+
                            '<li class="dropdown">'+
                                '<a href="#SelfDev1" class="btn btn-default noradius dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[1.เขียนบันทึกการพัฒนาตนเอง]</a>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#SelfDev2" class="btn btn-default noradius dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[2.ข้อมูลการพัฒนาตนเอง] <button class="hidden" id="btnBindClick">clickme</button></a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
            '<div class="panel panel-default noradius" style="margin-top:0px;">'+
                '<div class="panel-body noradius"></div>'+//subContent
            '</div>';
            return x;
        };//html_เมนู
        var frm1 = function(){
            var x = 
            '<div class="panel">'+
                '<div class="panel-header"><h3 class="text-center">บันทึกการพัฒนาตนเอง</h3></div>'+
                '<div class="panel-body">'+
                    '<div class="row">'+//nth1
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">เริ่มวันที่</label>'+
                        '</div>'+
                        '<div class="col-md-8">'+
                            '<div class="col-md-5 no-gutter text-right">'+
                                '<input type="text" name="txtDate1" class="form-control noradius" autocomplete="off" placeholder="วันที่พัฒนา(เริ่ม)">'+
                            '</div>'+   
                            '<div class="col-md-2 no-gutter text-right">'+
                                '<label class="control-label">สิ้นสุดวันที่</label>'+
                            '</div>'+
                            '<div class="col-md-5 no-gutter text-right">'+
                                '<input type="text" name="txtDate2" class="form-control noradius" autocomplete="off" placeholder="วันที่พัฒนา(สิ้นสุด)">'+
                            '</div>'+  
                        '</div>'+ 
                    '</div>'+    
                    '<div class="row">'+//nth2
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">เรื่องที่อบรม/ประชุมวิชาการ/สัมมนา</label>'+
                        '</div>'+ 
                        '<div class="col-md-8">'+
                            '<input type="text" name="txtTopic" class="form-control noradius" autocomplete="off" placeholder="ชื่อเรื่องที่พัฒนา">'+
                        '</div>'+   
                    '</div>'+   
                    '<div class="row">'+//nth3
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">ตรงกับสมรรถนะ</label>'+
                        '</div>'+ 
                        '<div class="col-md-8 no-gutter">'+
                            '<div class="col-md-12" id="competency" style="display:inline-block;"></div>'+
                        '</div>'+   
                    '</div>'+   
                    '<div class="row">'+//nth4
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">ตรงกับทักษะ</label>'+
                        '</div>'+ 
                        '<div class="col-md-8 no-gutter">'+
                            '<div class="col-md-12" id="skill" style="display:inline-block;"></div>'+
                        '</div>'+   
                    '</div>'+  
                    '<div class="row">'+//nth5
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">ระยะเวลา(ชั่วโมง)</label>'+
                        '</div>'+ 
                        '<div class="col-md-8">'+
                            '<input type="text" name="txtHour" class="form-control noradius" autocomplete="off" placeholder="ระยะเวลา(ชั่วโมง)">'+
                        '</div>'+   
                    '</div>'+   
                    '<div class="row">'+//nth6
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">หน่วยงานที่จัดโครงการ(ใน รพ.)</label>'+
                        '</div>'+ 
                        '<div class="col-md-8 no-gutter">'+
                            '<div class="col-md-12" id="pmDep" style="display:inline-block;"></div>'+
                        '</div>'+   
                    '</div>'+  
                    '<div class="row">'+//nth7
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">หน่วยงานที่จัดโครงการ(นอก รพ.)</label>'+
                        '</div>'+ 
                        '<div class="col-md-8">'+
                            '<input type="text" name="txtpmDep2" class="form-control noradius" autocomplete="off" placeholder="หน่วยงานที่จัดโครงการ(หน่วยงานนอก รพ.)">'+
                        '</div>'+   
                    '</div>'+ 
                    '<div class="row">'+//nth8
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">สถานที่จัดอบรม/ประชุมวิชาการ/สัมมนา</label>'+
                        '</div>'+ 
                        '<div class="col-md-8">'+
                            '<input type="text" name="txtPlace" class="form-control noradius" autocomplete="off" placeholder="สถานที่จัดอบรม/ประชุมวิชาการ/สัมมนา">'+
                        '</div>'+   
                    '</div>'+ 
                    '<div class="row">'+//nth9
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">ผู้รับผิดชอบโครงการ(บุคลากรใน รพ.)</label>'+
                        '</div>'+ 
                        '<div class="col-md-8 no-gutter">'+
                            '<div class="col-md-12" id="pmPersonOwner" style="display:inline-block;"></div>'+
                        '</div>'+   
                    '</div>'+ 
                    '<div class="row">'+//nth10
                        '<div class="col-md-4 text-right">'+
                            '<label class="control-label">ผู้รับผิดชอบโครงการ(บุคลากรนอก รพ.)</label>'+
                        '</div>'+ 
                        '<div class="col-md-8">'+
                            '<input type="text" name="pmPersonOwner2" class="form-control noradius" autocomplete="off" placeholder="ผู้รับผิดชอบโครงการ(บุคลากรนอก รพ.)">'+
                        '</div>'+   
                    '</div>'+ 
                    '<div class="row text-center">'+//nth11
                        '<button class="btn chayanon-btn3d-purple">SAVE</button>'+  
                    '</div>'+ 
                '</div>'+
            '</div>';
            return x;
        };//html_กรอกสมุดบันทึกการพัฒนาตนเอง
        var frm2 = function(data,compe,skill,dep,personData){
            function compefunc(compeid){
                var ret = '-';
                $.each(compe,function(i,v){
                    if(isNaN(compeid)){
                        ret='-';
                    }else{
                        if(parseInt(v.id) ===parseInt(compeid) ){
                            ret = v.competency_name;
                        }
                    }
                });
                return ret;
            };
            function skillfunc(skillid){
                var ret = '-';
                $.each(skill,function(i,v){
                    if(isNaN(skillid)){
                        ret='-';
                    }else{
                        if(parseInt(v.id) ===parseInt(skillid) ){
                            ret = v.skill_name;
                        }
                    }
                });
                return ret;
            };
            function Depfunc(Depid){
                var ret = '-';
                $.each(dep,function(i,v){
                    if(Depid){
                        if(v.dep_code ===Depid ){
                            ret = v.dep_name;
                        }
                    }else{
                        ret='-';
                    }
                });
                return ret;
            };
            function personDatafunc(personid){
                var ret = '-';
                $.each(personData,function(i,v){
                    if(personid){
                        if(v.id ===personid ){
                            ret = v.fname+' '+v.lname;
                        }
                    }else{
                        ret='-';
                    }
                });
                return ret;
            };
            var x =
            '<div class="table-responsive">'+
               '<table class="table table-bordered">'+
                    '<thead>'+
                        '<tr>'+
                            '<th>#</th>'+
                            '<th>เริ่ม</th>'+
                            '<th>สิ้นสุด</th>'+
                            '<th>เรื่อง</th>'+
                            '<th>ระยะเวลา(ชั่วโมง)</th>'+
                            '<th>สมรรถนะ</th>'+
                            '<th>ทักษะ</th>'+
                            '<th>ผู้จัด(ภายใน)</th>'+
                            '<th>ผู้จัด(ภายนอก)</th>'+
                            '<th>สถานที่</th>'+
                            '<th>ผู้รับผิดชอบ(ภายใน)</th>'+
                            '<th>ผู้รับผิดชอบ(ภายนอก)</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>';
                if(data.length >0){
                    $.each(data,function(i,v){
                        var d1 = ((v.date_begin).length===10)?$.fn.StrThaiDate3(new Date(v.date_begin)):'-';
                        var d2 = ((v.date_end).length===10)?$.fn.StrThaiDate3(new Date(v.date_end)):'-';
                        x+='<tr>'+
                            '<td>'+v.id+'</td>'+
                            '<td>'+d1+'</td>'+
                            '<td>'+d2+'</td>'+
                            '<td>'+v.topic+'</td>'+
                            '<td>'+v.hour+'</td>'+
                            '<td>'+compefunc(v.competency)+'</td>'+
                            '<td>'+skillfunc(v.skill)+'</td>'+
                            '<td>'+Depfunc(v.pm_department1)+'</td>'+
                            '<td>'+v.pm_department2+'</td>'+
                            '<td>'+v.place+'</td>'+
                            '<td>'+personDatafunc(v.dev_pm_person_owner1)+'</td>'+
                            '<td>'+v.dev_pm_person_owner2+'</td>'+
                        '</tr>';
                    });
                }
                x+='<tbody>'
               '</table>'+
            '</div>';
            
            return x;
        };//html_รายงานบันทึกการพัฒนาตนเอง
        var writeDevBySelfBook = function(){
            subContent.empty().append(frm1);
            $.when(
                $.fn.def_OnlineUser(),
                $.fn.def_Competency(),
                $.fn.def_Skill(),
                $.fn.def_DepData(),
                $.fn.def_PersonData()
            ).done(function(onlineUser,competency,skill,dep,person){
                $("#competency").empty().append($.fn.html_Competency(competency));
                $("#skill").empty().append($.fn.html_Skill(skill));
                $("#pmDep").empty().append($.fn.html_Department(dep));
                $("#pmPersonOwner").empty().append($.fn.html_Person(person));
                $("#competency,#skill,#pmDep,#pmPersonOwner").find('select').select2();
                var btnSave = subContent.find('button');
                $("input[name='txtDate1'],input[name='txtDate2']").ConfigDatePicker();
                $("input[name='txtHour']").myNumberic();

                //บันทึกลงฐานข้อมูล
                btnSave.click(function(e){
                    if($("input[name='txtDate1']").val() && $("input[name='txtDate2']").val() && $("input[name='txtTopic']").val()){
                        var objData = {
                            person_id:onlineUser.person_id,
                            date_begin:$("input[name='txtDate1']").data('date_true'),
                            date_end:$("input[name='txtDate2']").data('date_true'),
                            topic:$("input[name='txtTopic']").val(),
                            competency:$("#competency").find('select').val(),
                            skill:$("#skill").find('select').val(),
                            hour:$("input[name='txtHour']").val(),
                            pm_department1:$("#pmDep").find('select').val(),
                            pm_department2:$("input[name='txtpmDep2']").val(),
                            place:$("input[name='txtPlace']").val(),
                            dev_pm_person_owner1:$("#pmPersonOwner").find('select').val(),
                            dev_pm_person_owner2:$("input[name='pmPersonOwner2']").val()
                        };

                        $.ajax({
                            url:"DevelopBySelfSave.php", 
                            type:"post",
                            cache:false,
                            dataType:'json',
                            data:{data:JSON.stringify(objData)}
                        }).done(function(resp){
                            if(typeof resp !=='string'){
                                btnBindClick.trigger('click');
                                e.stopPropagation();
                            }else{
                                alert(resp);
                            }
                        });
                    }else{
                        alert('ต้องระบุวันที่และเรื่องที่ได้รับการพัฒนา เป็นอย่างน้อย...');
                    }
                });
            });
        };
        var reportDevBySelfBook = function(){
            $.when(
                $.fn.def_OnlineUser(),
                $.fn.def_Competency(),
                $.fn.def_Skill(),
                $.fn.def_DepData(),
                $.fn.def_PersonData()
                ).done(function(onlineUser,compe,skill,dep,personData){
                    $.when($.fn.def_CallDevelopBySelf(onlineUser.person_id)).done(function(DS){
                        if(typeof DS !=='string'){
                            subContent.empty().append(frm2(DS,compe,skill,dep,personData));
                            subContent.find('table.table').DataTable({
                                // "pagingType": "full_numbers",
                                "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                                "lengthMenu": [[100,200,500, -1], [100,200,500, "All"]],
                                 buttons: ['excel','pdf','print'],
                                 "scrollX": true,
                                 "order": [[ 0, "asc" ]]
                            });
                        }else{
                            alert('Data not found!!');
                        }
                    });
            });
        };
        content.empty().append(LayoutHtml);
        var btnBindClick = $("#btnBindClick");
        var nav = content.find('nav'),
            subContent =content.find('.panel .panel-body'),
            btnMN1 = nav.find("a[href='#SelfDev1']"),
            btnMN2 = nav.find("a[href='#SelfDev2']");
        writeDevBySelfBook();
        btnMN1.click(function(e){//คลิกเมนูเขียนบันทึกสมุดพัฒนาตนเอง
            writeDevBySelfBook();
            e.stopPropagation();
        });
        btnMN2.click(function(){//คลิกเมนู รายงานสมุดพัฒนาตนเอง
            reportDevBySelfBook();
        }); 
        btnBindClick.off('click').on('click',function(e){//คลิกเมนู รายงานสมุดพัฒนาตนเอง
            reportDevBySelfBook();
            e.stopPropagation();
        });   
    };//สมุดบันทึกการพัฒนาตนเอง
    var WorkForce_module = function(hrefID){
        var content = $("#myContent").empty();
        var workforce1_mol = function(){
            function tbl(d1,d2,onlineUserData){
                var x=
                    '<div class="row">'+
                        '<div class="col-lg-12">'+
                            '<p><h3>อัตรากำลัง '+onlineUserData.groupwork_name+'</h3></p>'+
                        '</div>'+
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
                                    if(d1.length>0){
                                        $.each(d1,function(i,v){
                                            nn = nn+1;
                                            x+= '<tr>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                                    '<td>'+v.position_name+'</td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.a!=='0'?v.a:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.b!=='0'?v.b:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.c!=='0'?v.c:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.d!=='0'?v.d:'-')+'</p></td>'+
                                                    '<td><p align="center" style="vertical-align:middle;">'+(v.ttotal!=='0'?v.ttotal:'-')+'</p></td>'+
                                                '</tr>';
                                        });
                                    }
                                    if(d2.length>0){
                                        $.each(d2,function(i,v){
                                            nn = nn+1;
                                            x+= '<tr>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                                    '<td class="bg-success">'+v.position_name+'</td>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(v.a!=='0'?v.a:'-')+'</p></td>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(v.b!=='0'?v.b:'-')+'</p></td>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(v.c!=='0'?v.c:'-')+'</p></td>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(v.d!=='0'?v.d:'-')+'</p></td>'+
                                                    '<td class="bg-success"><p align="center" style="vertical-align:middle;">'+(v.ttotal!=='0'?v.ttotal:'-')+'</p></td>'+
                                                '</tr>';
                                        });
                                    }
                                    x+= '</tbody>'+  
                                '</table>'+
                            '</div>'+//table-responsive
                        '<div>'+//col-lg-12
                    '<div>';
                return x;
            };
            $.when($.fn.def_OnlineUser()).done(function(onlineUser){
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
                    content.empty().append(tbl(wf1,wf2,onlineUser));
                    content.find('table.table').DataTable({
                       // "pagingType": "full_numbers",
                       "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                       "lengthMenu": [[100,200,500, -1], [100,200,500, "All"]],
                        buttons: ['excel','pdf','print'],
                        "scrollX": true,
                        "order": [[ 0, "asc" ]]
                    });
                    
                });
            });
        };
        var workforce2_mol = function(){
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
                                    var xsum = 0,sum_a=0,sum_b=0,sum_c=0,sum_d=0;
                                    var sumrow_a = 0,sumrow_b = 0,sumrow_c = 0,sumrow_d = 0;
                                    if(d.length>0){
                                        $.each(d,function(i,v){
                                            var ssum = 0;
                                            sumrow_a = (isNaN(v.a))?0:parseInt(v.a);
                                            sumrow_b = (isNaN(v.b))?0:parseInt(v.b);
                                            sumrow_c = (isNaN(v.c))?0:parseInt(v.c);
                                            sumrow_d = (isNaN(v.d))?0:parseInt(v.d);
                                            sum_a +=sumrow_a;
                                            sum_b +=sumrow_b;
                                            sum_c +=sumrow_c;
                                            sum_d +=sumrow_d;
                                            ssum = (sumrow_a + sumrow_b + sumrow_c + sumrow_d);
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
                                        });
                                        xsum = sum_a + sum_b + sum_c + sum_d;
                                    }
                                    x+='</tbody>'+
                                       '<tfooter>'+
                                           '<tr>'+
                                                '<td><p align="center" style="vertical-align:middle;">&nbsp;</p></td>'+
                                                '<td>รวม</td>'+
                                                '<td><p align="center" style="vertical-align:middle;">'+sum_a+'</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">'+sum_b+'</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">'+sum_c+'</p></td>'+
                                                '<td><p align="center" style="vertical-align:middle;">'+sum_d+'</p></td>'+
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
                    '<div class="form-group col-md-5">'+
                        '<div class="row">'+//เลือกประเภทบุคลากร
                            '<div class="col-md-11">'+
                                '<label>สถานะบุคลากร:</label>'+
                                '<select  class="form-control noradius" multiple>'+
                                    '<option value="">ไม่ระบุ</option>'+
                                    '<option value="Y">Y=ยังปฏิบัติงาน</option>'+
                                    '<option value="N">N=ลาออก,เกษียณ,โอน/ย้าย ไปที่อื่น </option>'+
                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+//เลือกช่วงวันที่
                            '<div class="col-md-11">'+
                                '<div class="col-md-6 no-gutter">'+
                                    '<label>อัตรากำลัง ณ วันที่ (ใช้วันรายงานตัวปฏิบัติราชการเป็นเงื่อนไข)</label>'+
                                    '<input type="text"  name="d1" placeholder="Start Date..." class="form-control noradius" autocomplete="off">'+
                                '</div>'+
                            '</div>'+ 
                        '</div>'+
                    '</div>'+
                      
                    '<div class="form-group col-md-2">'+
                        '<label>การปฏิบัติราชการ:</label>';
                        $.each(stnote,function(i,v){// $.fn.html_StatusNote(stnote)+
                          x+=
                            '<div class="row">'+
                                '<label class="btn">'+
                                    '<input type="checkbox" name="nth2chkbox" value="'+v.id+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span style="font-size:1.1vw;">'+v.status_note_name+'</span>'+
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
                                      '<input type="checkbox" name="nth3chkbox" value="'+v.groupwork_code+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span style="font-size:1.1vw;">'+v.groupwork_name+'</span>'+
                                  '</label>'+
                              '</div>';
                        }); x+= 
                    '</div>'+
                    '<div class="form-group col-md-2">'+
                        '<label>ประเภทบุคลากร:</label>';
                        $.each(potype1,function(i,v){//$.fn.html_PositionByType1(potype1)+
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth4chkbox" value="'+v.id+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span style="font-size:1.1vw;">'+v.position_by_type1_name+'</span>'+
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
                    content.empty().append(htmFilter(gw,po,potype1,stnote));
                    var resultSch = content.children('div.row:nth-child(3)'),
                        btnSch = content.find("a[href='#schWf1']"),
                        nth1sel = content.children('div.row:nth-child(1)').find("select");
                    var f1arr = [],//status_use
                        f2arr = [],//การปฏิบัติราชการ
                        f3arr = [],//กลุ่มภารกิจ
                        f4arr = [];//ประเภทบุคลากร      
                    $("input[name='nth2chkbox']").change(function(e){
                        var thisVals = "'"+($(this).val()).toString()+"'";
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f2arr.push(thisVals);
                            }
                        }else{
                           f2arr.splice( $.inArray(thisVals,f2arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    $("input[name='nth3chkbox']").change(function(e){
                        var thisVals = "'"+($(this).val()).toString()+"'";
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f3arr.push(thisVals);
                            }
                        }else{
                           f3arr.splice( $.inArray(thisVals,f3arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    $("input[name='nth4chkbox']").change(function(e){
                        var thisVals = "'"+($(this).val()).toString()+"'";
                        if($(this).prop('checked')){
                            if($.inArray($(this).val()===-1)){
                                f4arr.push((thisVals).toString());
                            }
                        }else{
                           f4arr.splice( $.inArray(thisVals,f4arr) ,1 );
                        }
                        e.stopPropagation();
                    });
                    var d1 = $("input[name='d1']").ConfigDatePicker();
                   // var d2 = $("input[name='d2']").ConfigDatePicker();
                    btnSch.click(function(e){
                        //เงื่อนไขวันที่
                        var dd1 = (d1.val())?d1.data('date_true'):'';
                       // var dd2 = (d2.val())?d2.data('date_true'):'';
                        f1arr= ["'"+nth1sel.val()+"'"];
                        var objSend = {
                            status_use:f1arr,//สถานะบุคลากร
                            status_note:f2arr,//การปฏิบัติราชการ
                            groupwork:f3arr,//กลุ่มภารกิจ
                            position_by_type1:f4arr,//ประเภทบุคลากร
                            d1:dd1//ข้อมูล ณ วันที่ (ย้อนไปจากนี้)
                        };
                        //console.log(objSend);
                        $.when($.fn.def_WorkForce3(objSend)).done(function(wf){
                            //console.log(wf);
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
        };
        if(hrefID==='#WorkForce1'){
            workforce1_mol();
        }else if(hrefID==='#WorkForce2'){
            workforce2_mol();
        }else if(hrefID==='#WorkForce3'){
            alert('ขออภัย อยู่ระหว่างดำเนินการ');
        }
    };//อัตรากำลัง
    var Pms_module = function(){
        var content = $("#myContent");
        var navMeNu = function(){
            var x = 
            '<div class="container">'+
                '<nav class="navbar navbar-default">'+
                    '<div class="container-fluid">'+
                        '<div class="navbar-header">'+
                            '<a class="navbar-brand" href="#">PMS</a>'+
                        '</div>'+
                        '<ul class="nav navbar-nav">'+
                            '<li class="active"><a href="#pms1"><i class="fa fa-medkit fa-lg"></i>&nbsp;ผลการประเมินฯของฉัน</a></li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[ให้คะแนนองค์ประกอบ] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#pms2-1" data-headertitle="ผลการปฏิบัติงานตามสายงานหรือหน้าที่หลัก">ผลการปฏิบัติงานตามสายงานหรือหน้าที่หลัก</a></li>'+
                                    '<li><a href="#pms2-2" data-headertitle="ผลการปฏิบัติงานเป็นทีมในฐานะกรรมการของคณะกรรมการใน รพ.">ผลการปฏิบัติงานเป็นทีมในฐานะกรรมการของคณะกรรมการใน รพ.</a></li>'+
                                    '<li><a href="#pms2-3" data-headertitle="กิจกรรมวิชาการ-ผลงานวิชาการ">กิจกรรมวิชาการ-ผลงานวิชาการ</a></li>'+
                                    '<li><a href="#pms2-4" data-headertitle="การเข้าร่วมกิจกรรมส่วนกลางของโรงพยาบาลฯ">การเข้าร่วมกิจกรรมส่วนกลางของโรงพยาบาลฯ</a></li>'+
                                    '<li><a href="#pms2-5" data-headertitle="การมาปฏิบัติราชการ">การมาปฏิบัติราชการ</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</nav>'+
                '<div class="container" id="pmsSubContent"></div>'+//subContent
            '</div>';
            return x;
        };
        content.empty().append(navMeNu);
        var nav = content.find('nav');
        var subContent = $("#pmsSubContent");
        function htmFilter(gw,ge){
            var x =//'<h3>Search กลุ่มภารกิจ</h3>'+
                '<div class="row" style="border:1px solid;">'+
                    '<div class="form-group col-md-3">'+
                        '<label>กลุ่มภารกิจ:</label>';
                        $.each(gw,function(i,v){
                            x+=
                              '<div class="row">'+
                                  '<label class="btn">'+
                                      '<input type="checkbox" name="nth1chkbox" value="'+v.groupwork_code+'" style="display:none;"><i class="fa fa-square-o fa-2x"></i><i class="fa fa-check-square-o fa-2x"></i>&nbsp;<span>'+(v.groupwork_name).replace(/\s/g,"ขึ้นตรงผู้อำนวยการ")+'</span>'+
                                  '</label>'+
                              '</div>';
                        }); x+= 
                    '</div>'+
                    '<div class="form-group col-md-3">'+
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
                    '<div class="col-md-2 no-gutter">'+
                        '<div class="input-group">'+ 
                            '<span class="input-group-btn">'+
                                '<a href="#schWF" class="btn btn-default btn-block">ค้น <i class="fa fa-search" aria-hidden="true"></i></a>'+                                
                            '</span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+//row nth-child(1)
                '<div class="row" id="ctAfterSch"></div>';//row nth-child(2)
            return x;
        };

        /* start module*/
        var PMS1_moldule = function(){
            subContent.empty().append('ขออภัย อยู่ระหว่างดำเนินการ');
        };
        var PMS2_moldule = function(onlineUser,mnSelected,txtTitle,gw,ge){
            var curr_yearGov = $.fn.DateToYearGov($.fn.CurrDate());//ปีงบประมาณปัจจุบัน
            var htmlHeader = function (){
                var x =
                '<h3 class="h3header">'+
                    txtTitle+
                    '<div class="row">'+
                        '<div class="col-md-3 headerYearGov">'+
                            $.fn.HTML_selYear(3,3)+
                        '</div>'+
                        '<div class="col-md-3 headerRound">'+
                            '<select class="form-control">'+
                                '<option value="1">รอบการประเมินที่ 1</option>'+
                                '<option value="2">รอบการประเมินที่ 2</option>'+
                            '</select>'+
                        '</div>'+
                    '</div>'+
                '</h3>'+
                htmFilter(gw,ge);
                return x;
            };
            subContent.empty().append(htmlHeader);
            subContent.find("div.headerYearGov select").val(curr_yearGov);//เลือกปีงบปัจจุบันก่อน
            subContent.find("div.headerRound select").val('1');//เลือกรอบการประเมินที่ 1 ก่อน
            var f1arr = [],//กลุ่มภารกิจ
                f2arr = [];//ประเภทบุคลากรของรัฐ  
            //ฟังก์ชันไว้เปรียบเทียบ person_id ถ้าตรง ให้เอาข้อมูลมา edit
            var comparePersonID = function(pmsDdata,personIDtbl,fieldName){
                var ret = "";
                if(typeof pmsDdata ==='object'){
                    $.each(pmsDdata,function(i,v){
                        if(Object.keys(v).length > 0){
                            var key = Object.keys(v);
                            if(v.person_id===personIDtbl){
                                if($.inArray(fieldName,key)!==-1){
                                    ret = v[fieldName];
                                }
                            }
                        }
                    }); 
                }
                return ret;
            };
            function tbl1(d,pmsDdata){
                //console.log(pmsDdata); อาจมี data not found
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ผลสัมฤทธิ์ของงาน(50คะแนน)</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">สมรรถนะ(10คะแนน)</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr data-personid="'+v.id+'">'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:20%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td class="no-gutter"><input type="text" name="score1" value="'+comparePersonID(pmsDdata,v.id,'score1')+'" class="col-xs-8 no-gutter"></td>'+
                                            '<td class="no-gutter"><input type="text" name="score2" value="'+comparePersonID(pmsDdata,v.id,'score2')+'" class="col-xs-8 no-gutter"></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            }; 
            function tbl2(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ความมีส่วนร่วม(7คะแนน)</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ผลการปฏิบัติงาน(10คะแนน)</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">กรรมการพัสดุ-การเงิน(3คะแนน)</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:20%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            };
            function tbl3(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">กิจกรรมวิชาการ-ผลงานวิชาการ(10คะแนน)</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:20%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            };
            function tbl4(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">การเข้าร่วมกิจกรรมของ รพ.(5 คะแนน)</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:20%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            };
            function tbl5(d){
                var x=
                    '<div class="col-md-11">'+//table-responsive
                        '<table class="table table-bordered">'+//table table-bordered
                            '<thead>'+
                                '<tr>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">#</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">ชื่อ-สกุล</p></th>'+
                                    '<th><p align="center" style="vertical-align:middle;font-size:1vw;">การมาปฏิบัติราชการ(5 คะแนน)</p></th>'+
                                '</tr>'+  
                            '</thead>'+  
                            '<tbody>';
                            var nn = 0;
                            if(d.length>0){
                                $.each(d,function(i,v){
                                    nn = nn+1;
                                    x+= '<tr>'+
                                            '<td><p align="center" style="vertical-align:middle;">'+(nn)+'</p></td>'+
                                            '<td style="width:20%;font-size:1.2vw;">'+v.ppname+'</td>'+
                                            '<td class="no-gutter"><input type="text" class="col-xs-8 no-gutter"></td>'+
                                        '</tr>';
                                });
                            }
                            x+='</tbody>'+
                        '</table>'+
                    '</div>';//table-responsive
                return x;
            };
            function htmbtnSave(){
                var x =
                '<div class="col-md-2 col-md-offset-4">'+ 
                    '<span class="input-group-btn">'+
                        '<a href="#savePMS" class="btn btn-default btn-block">บันทึก <i class="fa fa-floppy-o" aria-hidden="true"></i></a>'+                                
                    '</span>'+
                '</div>';
                return x;
            };
            //เลือกกลุ่มภารกิจ
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
            //เลือกประเภทบุคลากร
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
            //call ข้อมูลตาราง pms_part1-5
            function callPMS(tblname,year_gov,first_second_half_year_gov,staff_person){
                var def = $.Deferred();
                $.ajax({
                    url:"PmsCallDataByTbl.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{
                        tblname:JSON.stringify(tblname),//ชื่อตาราง pms_part 1-5
                        year_gov:JSON.stringify(year_gov),//ปีงบที่เลือก
                        first_second_half_year_gov:JSON.stringify(first_second_half_year_gov),//ครึ่งแรกครึ่งหลังที่เลือก
                        staff_person:JSON.stringify(staff_person)//คนที่กำลัง online (staff_person)
                    }
                }).done(function(data){
                    def.resolve(data);
                });
                return def.promise();
            };//ทักษะ
            //บันทึกลงตาราง pms_part1
            function saveToPmsPart1(tblData){
                var arrData=[];
                tblData.find('tbody').children('tr').each(function(){
                    var sc1 = (   isNaN(parseFloat($(this).find("input[name='score1']").val()))   ) ? 0:parseFloat($(this).find("input[name='score1']").val()),
                        sc2 = (   isNaN(parseFloat($(this).find("input[name='score2']").val()))   ) ? 0:parseFloat($(this).find("input[name='score2']").val());
                    arrData.push({
                        table_sel:'pms_part1',
                        person_id:$(this).data('personid'),
                        year_gov:tblData.closest(subContent).find("div.headerYearGov select").val(),
                        first_second_half_year_gov:tblData.closest(subContent).find("div.headerRound select").val(),
                        score1:sc1,
                        score2:sc2,
                        score3:0,
                        score4:0,
                        score5:0,
                        score6:0,
                        score7:0,
                        score8:0,
                        score9:0,
                        score10:0,
                        sum_score:sc1+sc2,
                        staff_person:onlineUser.person_id,
                        timestamp:'',
                        status_use:'Y'
                    });
                });
                $.ajax({
                    url:"PmsSavePart1.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{d:JSON.stringify(arrData)}
                }).done(function(resp){
                    console.log(resp);
                });
            };
            //search person
            subContent.find("a[href='#schWF']").click(function(){
                //$("#ctAfterSch")
                var objParam = {
                    groupwork:f1arr,
                    government_emp_type:f2arr
                };
                $.when($.fn.def_WorkForce2(objParam)).done(function(wf){
                    if(typeof wf ==='object'){
                        //เลือก html ตามเมนูต่างๆ
                        if(mnSelected==='#pms2-1'){
                            $.when(
                                callPMS(
                                    'pms_part1',
                                    subContent.find("div.headerYearGov select").val(),
                                    subContent.find("div.headerRound select").val(),
                                    onlineUser.person_id
                                )
                            ).done(function(pmsData){
                                $("#ctAfterSch").empty().append(tbl1(wf,pmsData)+htmbtnSave());
                                //html config
                                $("#ctAfterSch").find('table').DataTable({
                                    // "pagingType": "full_numbers",
                                    "dom": 'Blfrtip',//'Bfrtip',Blfrtip,'lrtip','<lf<t>ip>','<"wrapper"flipt>'
                                    "lengthMenu": [[400,500,800, -1], [400,500,800, "All"]],
                                     buttons: ['excel','pdf','print'],
                                     "scrollX": true,
                                     "order": [[ 0, "asc" ]]
                                });
                                $("#ctAfterSch").find("table input[type=text]").myNumberic();
                                //กดบันทึก
                                $("#ctAfterSch").find("a[href='#savePMS']").off('click').click(function(e){
                                    e.preventDefault();
                                    var thisTbl = $(e.target).closest($("#ctAfterSch")).find('table');
                                    saveToPmsPart1(thisTbl);
                                });
                            });
                        }else if(mnSelected==='#pms2-2'){
                            $("#ctAfterSch").empty().append(tbl2(wf));
                        }else if(mnSelected==='#pms2-3'){
                            $("#ctAfterSch").empty().append(tbl3(wf));
                        }else if(mnSelected==='#pms2-4'){
                            $("#ctAfterSch").empty().append(tbl4(wf));
                        }else if(mnSelected==='#pms2-5'){
                            $("#ctAfterSch").empty().append(tbl5(wf));
                        }
                    }else{
                        alert(wf);
                    }
                });
            });
        };
        $.when(
            $.fn.def_OnlineUser(),
            $.fn.def_GroupWorkData(),
            $.fn.def_GovernmentEmpType(),
            $.fn.def_StatusNote()
        ).done(function(onlineUser,gw,ge){
            //console.log(onlineUser);
            nav.find("ul li a[href='#pms1']").click(function(){
                PMS1_moldule();
            });
            nav.find("ul li a[href^='#pms2']").click(function(e){
                var $this = $(this),
                    target = $this.attr('href'),
                    person_id = onlineUser.person_id;
                
                $.ajax({
                    url:"PmsMenuPermission.php", 
                    type:"post",
                    cache:false,
                    dataType:'json',
                    data:{
                        'menu_name':JSON.stringify(target),
                        'person_id':JSON.stringify(person_id)
                    }
                }).done(function(resp){
                    if(typeof resp !=='string'){
                        PMS2_moldule(
                            onlineUser,
                            target,
                            $this.data("headertitle"),
                            gw,ge
                        );
                    }else{
                        alert("Access Denied!!")
                    }
                });   
                e.stopPropagation();
            });
        });
    };//ระบบประเมินผลปฏิบัติราชการ
    var HealthScreening_module = function(){
        var content = $("#myContent");
        var LayoutHtml = function(){
            var x=
            '<nav class="navbar navbar-default noradius" role="navigation" style=" margin-bottom: 0px;">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-ScreeningTest">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse" id="navbar-ScreeningTest">'+
                        '<ul class="nav navbar-nav">'+
                            '<li><a href="#"><i class="fa fa-medkit fa-lg"></i>&nbsp;Screening-Test</a></li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[1.ความเครียด ST-5] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#ST5-1">ทำแบบประเมิน ST-5</a></li>'+
                                    '<li><a href="#ST5-2">ผลประเมิน ST-5</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[2.กังวล COVID-19] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#covid19-1">ทำแบบประเมินกังวล COVID-19</a></li>'+
                                    '<li><a href="#covid19-2">ผลประเมินกังวล COVID-19</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[3.ภาวะหมดไฟ (ฺBurnout)] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                     '<li><a href="#burnout-1">ทำแบบประเมิน Burnout</a></li>'+
                                    '<li><a href="#burnout-2">ผลประเมิน Burnout</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
            '<div class="panel panel-default noradius" style="margin-top:0px;">'+
                '<div class="panel-header noradius chayanon-trapizoid"></div>'+
                '<div class="panel-body noradius"></div>'+//subContent
            '</div>';
            return x;
        };
        content.empty().append(LayoutHtml);
        var nav = content.find('nav'),
            subContent = nav.parent('div').find("div.panel-body"),
            subContentHeader = nav.parent('div').find("div.panel-header");
        var def_saveScreening = function(obj){
            var def = $.Deferred();
            $.ajax({
                url:"ScreeningST5Covid19BurnOutSave.php", 
                type:"post",
                cache:false,
                dataType:'json',
                data:{param:JSON.stringify(obj)}
            }).done(function(resp){
                def.resolve(resp);
            });
            return def.promise();
        };    
        var module_st5 = function(onlineUser,ST5q){
            function tbl(){
                var x =
                '<div class="table-responsive">'+
                    '<table class="table table-bordered" style="width:100%;table-layout:fixed;">'+
                        '<thead>'+
                            '<tr class="bg-success">'+
                                '<th style="text-align:center;width:5%;font-size:1.5vw;vertical-align:middle;" rowspan="2">ข้อ</th>'+
                                '<th style="text-align:center;width:75%;font-size:1.5vw;vertical-align:middle;" rowspan="2">อาการหรือความรู้สึกที่เกิดขึ้นในระยะ 2-4 สัปดาห์ที่ผ่านมา</th>'+
                                '<th style="text-align:center;width:20%;font-size:1.5vw;" colspan="4">คะแนน</th>'+
                            '</tr>'+
                            '<tr class="bg-success">'+
                                '<td style="text-align:center;width:5%;font-size:1.5vw;">0</td>'+
                                '<td style="text-align:center;width:5%;font-size:1.5vw;">1</td>'+
                                '<td style="text-align:center;width:5%;font-size:1.5vw;">2</td>'+
                                '<td style="text-align:center;width:5%;font-size:1.5vw;">3</td>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>';
                            var n = 0;
                            $.each(ST5q,function(i,v){
                                n = n+1;
                                x+=
                                '<tr>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+n+'</td>'+
                                    '<td style="text-align:left;width:75%;font-size:1.5vw;">'+v.question+'</td>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_st5_'+n+'" value="0" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_st5_'+n+'" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_st5_'+n+'" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_st5_'+n+'" value="3" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                '</tr>';
                            });
                            x+= 
                            '<tr>'+
                                '<td style="text-align:center;font-size:1.5vw;" colspan="2">รวมคะแนน</td>'+
                                '<td style="text-align:center;font-size:1.5vw;" colspan="4">'+
                                    '<button class="btn chayanon-btn3d-orange">บันทึก</button>'+
                                '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>';
                return x;
            };
            subContentHeader.empty().append(onlineUser.pname+' '+onlineUser.position_name+onlineUser.class_position);
            subContent.empty().append(tbl);
            //event
            var tdSum = $("input[name^='rdo_st5_']").closest('table').find('tbody tr').last().children('td').last();
            var btnSave = tdSum.children('button');
            var ssum=0,score1 = 0,score2 = 0,score3 = 0,score4 = 0,score5 = 0;
            $("input[name^='rdo_st5_']").change(function(e){
                var $this = $(e.target),nm=$this.attr('name');
                btnSave.removeClass('hidden').show();
                if(nm==='rdo_st5_1'){
                    score1 = parseInt($this.val());
                }
                if(nm==='rdo_st5_2'){
                    score2 = parseInt($this.val());
                }
                if(nm==='rdo_st5_3'){
                    score3 = parseInt($this.val());
                }
                if(nm==='rdo_st5_4'){
                    score4 = parseInt($this.val());
                }
                if(nm==='rdo_st5_5'){
                    score5 = parseInt($this.val());
                }
                ssum = score1+score2+score3+score4+score5;
                //tdSum.html(ssum+'&nbsp;คะแนน');
            });
            btnSave.click(function(e){
                $.when(def_saveScreening({
                    screentype:'st5',
                    person_id:onlineUser.person_id,
                    st5_score_result:ssum
                })).done(function(resp){
                    alert(resp);
                });
                //e.stopPropagation();
            });
        };
        var html_ST5rslt = function(rslt){
            function excST5(score){
                var ret = '';
                if((score>=0)&&(score<=4)){
                    ret = '<p style="font-size:1.2vw;">'+
                            '<u>เครียดน้อย</u>&nbsp;'+
                            'เป็นความเครียดในชีวิตประจำวัน ซึ่งแต่ละคนสามารถปรับตัวได้เอง'+
                            'ไม่เกิดปัญหาสุขภาพของตนเอง และท่านยังสามารถช่วยดูแลบุคคลอื่นๆ '+
                            'ในครอบครัวและชุมชนได้ด้วย'+
                          '</p>';
                }else if((score>=5)&&(score<=7)){
                    ret = '<p style="font-size:1.2vw;">'+
                            '<u>เครียดปานกลาง</u>&nbsp;'+
                            'ในภาวะวิกฤตหรือภัยพิบัติบุคคลต้องเตรียมพร้อมในการจัดการกับปัญหา'+
                            'ต่างๆ จนทำให้เกิดความเครียดเพิ่มขึ้นในระดับปานกลาง ซึ่งยังถือว่าเป็น '+
                            'ปกติเพราะทำให้เกิดความกระตือรือร้นในการเผชิญปัญหา'+
                          '</p>';
                }else if((score>=8)&&(score<=9)){
                    ret = '<p style="font-size:1.2vw;">'+
                            '<u>เครียดมาก</u>&nbsp;'+
                            'ในภาวะวิกฤตหรือภัยพิบัติต่างๆ อาจทำให้เกิดการตอบสนองที่รุนแรงขึ้น'+
                            'ชั่วคราว ซึ่งมักจะลดลงมาเป็นปกติหลังเหตุการณ์ อย่างไรก็ตามท่านควรมี'+
                            'การจัดการกับความเครียดดังต่อไปนี้'+
                          '</p>'+
                          '<p style="font-size:0.9vw;">'+
                            '&nbsp;&#187;การฝึกการหายใจคลายเครียด'+
                          '</p>'+
                          '<p style="font-size:0.9vw;">'+
                            '&nbsp;&#187;การพูดคุยกับคนใกล้ชิด การสวดมนต์ไหว้พระ การช่วยเหลือผู้อื่น'+
                            'ที่ประสบปัญหาจะช่วยให้ความเครียดลดลง'+
                          '</p>'+
                          '<p style="font-size:0.9vw;">'+
                            '&nbsp;&#187;การมีความหวังว่า เราจะฝ่าฟันอุปสรรคหรือปัญหาครั้งนี้ไปได้และมอง'+
                            'เห็นด้านบวก เช่น อย่างน้อยก็ยังรักาาชีวิตไว้ได้ มีคนเห็นใจและมีการช่วยเหลือจากฝ่ายต่างๆ'+
                          '</p>'+
                          '<p style="font-size:0.9vw;">'+
                            '&nbsp;&#187;มองข้ามความขัดแย้งเก่าๆ ในอดีตและรวมตัวกันช่วยให้ชุมชนผ่านวิกฤตไปได้'+
                          '</p>'+
                          '<p style="font-size:0.9vw;">'+
                            '&nbsp;&#187;ภายใน 2 สัปดาห์ ท่านควรไปพบแพทย์เพื่อประเมินซ้ำว่าความเครียดลดลงหรือไม่'+
                            'เพราะความเครียดที่มากและต่อเนื่องอาจนำไปสู่โรควิตกกังวล ภาวะซึมเศร้า และเสี่ยงต่อ'+
                            'การฆ่าตัวตายได้ ซึ่งจะต้องได้รับการรักษาจากแพทย์'+
                          '</p>';
                }else if((score>=10)&&(score<=15)){
                    ret = '<p style="font-size:1.2vw;">'+
                            '<u>เครียดมากที่สุด</u>&nbsp;'+
                            'เป็นความเครียดที่รุนแรงซึ่งส่งผลกระทบต่อภาวะร่างกาย ทำให้อ่อนแอ'+
                            'เจ็บป่วยง่าย และต่อภาวะจิตใจจนอาจทำให้เกิดโรควิตกกังวล ภาวะซึมเศร้า และเสี่ยงต่อ'+
                            'การฆ่าตัวตายจะต้องได้รับการรักษาจากแพทยืทันที และได้รับการดูแลต่อเนื่องไปอีก 3-6 เดือน'+
                          '</p>';
                }
                return ret;
            };
            var x =
            '<div class="table-responsive">'+
                '<table class="table table-bordered">'+
                   '<thead>'+
                        '<tr>'+
                            '<th style="width:5%;">#</th>'+
                            '<th style="width:10%;">ว/ด/ป</th>'+
                            '<th style="width:5%;">คะแนน</th>'+
                            '<th style="width:80%;">แปรผล</th>'+
                        '</tr>'+
                   '</thead>'+
                   '<tbody>';
                    $.each(rslt,function(i,v){
                        x+=
                        '<tr>'+
                            '<th style="width:5%;">'+(i+1)+'</th>'+
                            '<th style="width:10%;">'+$.fn.StrThaiDate3(new Date(v.screening_date))+'</th>'+
                            '<th style="width:5%;">'+v.st5_score_result+'</th>'+
                            '<th style="width:80%;">'+excST5(parseInt(v.st5_score_result))+'</th>'+
                        '</tr>';
                    });
                    x+=
                   '</tbody>'+
                '</table>'+
            '</div>';
            return x;
        };
        var module_covid19 = function(onlineUser,covid){
            function tbl(){
                var x =
                '<div class="table-responsive">'+
                    '<table class="table table-bordered" style="width:100%;table-layout:fixed;">'+
                        '<thead>'+
                            '<tr class="bg-success">'+
                                '<th style="text-align:center;width:5%;font-size:1.5vw;vertical-align:middle;" rowspan="2">ข้อ</th>'+
                                '<th style="text-align:center;width:77%;font-size:1.5vw;vertical-align:middle;" rowspan="2">ความคิดและพฤติกรรมในระยะ 2 สัปดาห์ที่ผ่านมา</th>'+
                                '<th style="text-align:center;width:18%;font-size:1.5vw;" colspan="3">คะแนน</th>'+
                            '</tr>'+
                            '<tr class="bg-success">'+
                                '<td style="text-align:center;width:6%;font-size:1.2vw;"><p>1<br>(ไม่มี)</p></td>'+
                                '<td style="text-align:center;width:6%;font-size:1.2vw;"><p>2<br>(ปานกลาง)</p></td>'+
                                '<td style="text-align:center;width:6%;font-size:1.2vw;"><p>3<br>(มาก/ประจำ)</p></td>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>';
                            var n = 0;
                            $.each(covid,function(i,v){
                                n = n+1;
                                x+=
                                '<tr>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+n+'</td>'+
                                    '<td style="text-align:left;width:77%;font-size:1.5vw;">'+v.question+'</td>'+
                                    '<td style="text-align:center;width:6%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_covid19_'+n+'" value="1" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                    '<td style="text-align:center;width:6%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_covid19_'+n+'" value="2" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                    '<td style="text-align:center;width:6%;font-size:1.5vw;">'+
                                        '<label class="btn" style="font-size:1vw;">'+
                                            '<input type="radio" name="rdo_covid19_'+n+'" value="3" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>'+
                                        '</label>'+
                                    '</td>'+
                                '</tr>';
                            });
                            x+= 
                            '<tr>'+
                                '<td style="text-align:center;font-size:1.5vw;" colspan="2">รวมคะแนน</td>'+
                                '<td style="text-align:center;font-size:1.5vw;" colspan="4">'+
                                    '<button class="btn chayanon-btn3d-orange">บันทึก</button>'+
                                '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>';
                return x;
            };
            subContentHeader.empty().append(onlineUser.pname+' '+onlineUser.position_name+onlineUser.class_position);
            subContent.empty().append(tbl);
            //event
            var tdSum = $("input[name^='rdo_covid19_']").closest('table').find('tbody tr').last().children('td').last();
            var btnSave = tdSum.children('button');
            var ssum=0,score1 = 0,score2 = 0,score3 = 0,score4 = 0,score5 = 0;
            $("input[name^='rdo_covid19_']").change(function(e){
                var $this = $(e.target),nm=$this.attr('name');
                btnSave.removeClass('hidden').show();
                if(nm==='rdo_covid19_1'){
                    score1 = parseInt($this.val());
                }
                if(nm==='rdo_covid19_2'){
                    score2 = parseInt($this.val());
                }
                if(nm==='rdo_covid19_3'){
                    score3 = parseInt($this.val());
                }
                if(nm==='rdo_covid19_4'){
                    score4 = parseInt($this.val());
                }
                if(nm==='rdo_covid19_5'){
                    score5 = parseInt($this.val());
                }
                ssum = score1+score2+score3+score4+score5;
                //tdSum.html(ssum+'&nbsp;คะแนน');
            });
            btnSave.click(function(e){
                $.when(def_saveScreening({
                    screentype:'covid19',
                    person_id:onlineUser.person_id,
                    covid19_score_result:ssum
                })).done(function(resp){
                    alert(resp);
                });
                e.stopPropagation();
            });
        };
        var html_covid19rslt = function(rslt){
            function exccovid19(score){
                var ret = '';
                if((score>=5)&&(score<=6)){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq2.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">มีความกังวลในระดับต่ำ</h4>&nbsp;'+
                          '</div>';
                }else if((score>=7)&&(score<=11)){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq4.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">มีความกังวลในระดับปานกลาง</h4>&nbsp;'+
                          '</div>';
                }else if(score>=12){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/biofeedback_APGvisualAnaloq1.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">มีกังวลในระดับสูง</h4>&nbsp;'+
                           '</div>';
                }
                return ret;
            };
            var x =
            '<div class="table-responsive">'+
                '<table class="table table-bordered">'+
                   '<thead>'+
                        '<tr>'+
                            '<th style="width:5%;">#</th>'+
                            '<th style="width:10%;">ว/ด/ป</th>'+
                            '<th style="width:5%;">คะแนน</th>'+
                            '<th style="width:80%;">แปรผล</th>'+
                        '</tr>'+
                   '</thead>'+
                   '<tbody>';
                    $.each(rslt,function(i,v){
                        x+=
                        '<tr>'+
                            '<th style="width:5%;">'+(i+1)+'</th>'+
                            '<th style="width:10%;">'+$.fn.StrThaiDate3(new Date(v.screening_date))+'</th>'+
                            '<th style="width:5%;">'+    (isNaN(parseInt(v.covid19_score_result))?'-': v.covid19_score_result)     +'</th>'+
                            '<th style="width:80%;">'+exccovid19(  (isNaN(parseInt(v.covid19_score_result))?0: parseInt(v.covid19_score_result))  )+'</th>'+
                        '</tr>';
                    });
                    x+=
                   '</tbody>'+
                '</table>'+
            '</div>';
            return x;
        };
        var module_burnout = function(onlineUser){
            subContentHeader.empty().append(onlineUser.pname+' '+onlineUser.position_name+onlineUser.class_position);
            subContent.empty().append(
                '<p style="font-size:1.6vw;">'+
                    'ในช่วง 1 สัปดาห์ที่ผ่านมา ท่านมีความเหนื่อยล้าทางอารมณ์ รู้สึกหมดพลังงานทางจิตใจหรือไม่'+
                '</p>'+
                '<label class="btn" style="font-size:1.6vw;">'+
                    '<input type="radio" name="rdo_burnout" value="แทบไม่มี" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>แทบไม่มี'+
                '</label>'+
                '<label class="btn" style="font-size:1.6vw;">'+
                    '<input type="radio" name="rdo_burnout" value="เป็นบางครั้ง" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>เป็นบางครั้ง'+
                '</label>'+
                '<label class="btn" style="font-size:1.6vw;">'+
                    '<input type="radio" name="rdo_burnout" value="บ่อยครั้ง" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>บ่อยครั้ง'+
                '</label>'+
                '<label class="btn" style="font-size:1.6vw;">'+
                    '<input type="radio" name="rdo_burnout" value="เป็นประจำ" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>เป็นประจำ'+
                '</label>'+
                '<button class="btn chayanon-btn3d-orange">บันทึก</button>'
            );
            subContent.find('button.chayanon-btn3d-orange').click(function(e){
                var brnSend = $("input[name='rdo_burnout']:checked").val();
                if(brnSend){
                    $.when(def_saveScreening({
                        screentype:'burnout',
                        person_id:onlineUser.person_id,
                        burnout_score_result:brnSend
                    })).done(function(resp){
                        alert(resp);
                    });
                }else{
                    alert('ยังไม่ได้เลือก');
                }
                e.stopPropagation();
            });
        };
        var html_burnoutrslt = function(rslt){
            function excburnout(score){
                var ret = '';
                if(score==='แทบไม่มี'){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/green-sq.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">แทบไม่มี</h4>&nbsp;'+
                          '</div>';
                }else if(score==='เป็นบางครั้ง'){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/yellow-sq.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">เป็นบางครั้ง</h4>&nbsp;'+
                          '</div>';
                }else if(score==='บ่อยครั้ง'){
                    ret = '<div class="row">'+
                            '<div class="col-md-1">'+
                                '<img class="img-responsive" src="../img/orange-sq.jpg" style="align:center;width:40px;height:40px;" />'+
                            '</div>'+
                            '<h4 class="col-md-11">บ่อยครั้ง</h4>&nbsp;'+
                           '</div>';
                }else if(score==='เป็นประจำ'){
                    ret = '<div class="row">'+
                           '<div class="col-md-1">'+
                               '<img class="img-responsive" src="../img/red-sq.jpg" style="align:center;width:40px;height:40px;" />'+
                           '</div>'+
                           '<h4 class="col-md-11">เป็นประจำ</h4>&nbsp;'+
                          '</div>';
                }

                return ret;
            };
            var x =
            '<div class="table-responsive">'+
                '<table class="table table-bordered">'+
                   '<thead>'+
                        '<tr>'+
                            '<th style="width:5%;">#</th>'+
                            '<th style="width:10%;">ว/ด/ป</th>'+
                            '<th style="width:80%;">แปรผล</th>'+
                        '</tr>'+
                   '</thead>'+
                   '<tbody>';
                    $.each(rslt,function(i,v){
                        x+=
                        '<tr>'+
                            '<th style="width:5%;">'+(i+1)+'</th>'+
                            '<th style="width:10%;">'+$.fn.StrThaiDate3(new Date(v.screening_date))+'</th>'+
                            '<th style="width:80%;">'+excburnout(v.burnout_score_result)+'</th>'+
                        '</tr>';
                    });
                    x+=
                   '</tbody>'+
                '</table>'+
            '</div>';
            return x;
        };
        $.when(
            $.fn.def_OnlineUser(),
            $.fn.def_screening_st5_question(),
            $.fn.def_screening_covid19_question()
        ).done(function(onlineUser,ST5q,covid){
            module_st5(onlineUser,ST5q);
            nav.find("a[href='#ST5-1']").click(function(e){//ทำแบบประเมิน ST5
                module_st5(onlineUser,ST5q);
                e.stopPropagation();
            });
            nav.find("a[href='#covid19-1']").click(function(e){//ทำแบบประเมิน covid19
                module_covid19(onlineUser,covid);
                e.stopPropagation();
            });
            nav.find("a[href='#burnout-1']").click(function(e){//ทำแบบประเมิน burnout
                module_burnout(onlineUser);
                e.stopPropagation();
            });
            nav.find("a[href='#ST5-2']").click(function(e){//ดูผลประเมิน ST5
                $.when($.fn.def_screening_st5covid19burnout_result(onlineUser.person_id)).done(function(rslt){
                    if(typeof rslt !=='string'){
                        subContent.empty().append(html_ST5rslt(rslt));
                    }else{
                        alert(rslt);
                    }
                });
                e.stopPropagation();
            });
            nav.find("a[href='#covid19-2']").click(function(e){//ดูผลประเมิน covid19
                $.when($.fn.def_screening_st5covid19burnout_result(onlineUser.person_id)).done(function(rslt){
                    if(typeof rslt !=='string'){
                        subContent.empty().append(html_covid19rslt(rslt));
                    }else{
                        alert(rslt);
                    }
                });
                e.stopPropagation();
            });
            nav.find("a[href='#burnout-2']").click(function(e){//ดูผลประเมิน burnout
                $.when($.fn.def_screening_st5covid19burnout_result(onlineUser.person_id)).done(function(rslt){
                    if(typeof rslt !=='string'){
                        subContent.empty().append(html_burnoutrslt(rslt));
                    }else{
                        alert(rslt);
                    }
                });
                e.stopPropagation();
            });
        });
    };//แบบประเมิน-คัดกรอง
    var HealthOfyear_module = function(){
        alert('ขออภัยอยู่ระหว่างดำเนินการ');
    };//ระบบตรวจสุขภาพประจำปี
    var HealthVaccine_module = function(){
        var content = $("#myContent");
        var LayoutHtml = function(){
            var x=
            '<nav class="navbar navbar-default noradius" role="navigation" style=" margin-bottom: 0px;">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-ScreeningTest">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse" id="navbar-ScreeningTest">'+
                        '<ul class="nav navbar-nav">'+
                            '<li><a href="#"><img src="../img/syringe.png" class="img-responsive" style="width:50px;height:60px;" /></a></li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[1.การได้รับวัคซีน] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#vcc-1">ข้อมูลการได้รับวัคซีนตามปีงบฯ</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[2.ข้อมูลภูมิคุ้มกัน] <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu" role="menu">'+
                                    '<li><a href="#imm-1">ข้อมูลภูมิคุ้มกันตามปีงบฯ</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
            '<div class="panel panel-default noradius" style="margin-top:0px;">'+
                '<div class="panel-header noradius chayanon-trapizoid"></div>'+
                '<div class="panel-body noradius"></div>'+//subContent
            '</div>';
            return x;
        };
        content.empty().append(LayoutHtml);
        var nav = content.find('nav'),
            subContent = nav.parent('div').find("div.panel-body");
        function module_getVaccine(){
            function tbl_getVaccine(vccData){
                var x =
                '<div class="table-responsive">'+
                    '<table class="table table-bordered" style="width:100%;table-layout:fixed;">'+
                        '<thead>'+
                            '<tr class="bg-success">'+
                                '<th style="text-align:center;width:5%;font-size:1.5vw;vertical-align:middle;">#</th>'+
                                '<th style="text-align:center;width:75%;font-size:1.5vw;vertical-align:middle;">ชื่อวัคซีน</th>'+
                                '<th style="text-align:center;width:20%;font-size:1.5vw;">ปีที่ได้รับวัคซีน</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>';
                            var n = 0;
                            $.each(vccData,function(i,v){
                                n = n+1;
                                x+=
                                '<tr>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+n+'</td>'+
                                    '<td style="text-align:left;width:75%;font-size:1.5vw;">'+v.vaccine_name+'</td>'+
                                    '<td style="text-align:center;width:20%;font-size:1.5vw;">'+$.fn.StrThaiDate6(new Date(v.vaccine_get_month_year))+'</td>'+
                                '</tr>';
                            });
                            x+= 
                        '</tbody>'+
                    '</table>'+
                '</div>';
                return x;
            };
            $.when($.fn.def_OnlineUser()).done(function(onlineUser){
                $.when(
                    $.fn.def_getVaccineByParam({person_id:onlineUser.person_id})
                    ).done(function(resp){
                        if(typeof resp!=='string'){
                            subContent.empty().append(tbl_getVaccine(resp));  
                        }else{
                            alert(resp);
                        }
                });
            });
        };
        function module_getImmunization(){
            function tbl_getImmunization(immData){
                var x =
                '<div class="table-responsive">'+
                    '<table class="table table-bordered" style="width:100%;table-layout:fixed;">'+
                        '<thead>'+
                            '<tr class="bg-success">'+
                                '<th style="text-align:center;width:5%;font-size:1.5vw;vertical-align:middle;">#</th>'+
                                '<th style="text-align:center;width:75%;font-size:1.5vw;vertical-align:middle;">ชื่อภูมิคุ้มกัน</th>'+
                                '<th style="text-align:center;width:20%;font-size:1.5vw;">ปีที่มีภูมิคุ้มกัน</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>';
                            var n = 0;
                            $.each(immData,function(i,v){
                                n = n+1;
                                x+=
                                '<tr>'+
                                    '<td style="text-align:center;width:5%;font-size:1.5vw;">'+n+'</td>'+
                                    '<td style="text-align:left;width:75%;font-size:1.5vw;">'+v.immunization_name+'</td>'+
                                    '<td style="text-align:center;width:20%;font-size:1.5vw;">'+$.fn.StrThaiDate6(new Date(v.immunization_get_month_year))+'</td>'+
                                '</tr>';
                            });
                            x+= 
                        '</tbody>'+
                    '</table>'+
                '</div>';
                return x;
            };
            $.when($.fn.def_OnlineUser()).done(function(onlineUser){
                $.when(
                    $.fn.def_getImmunizationByParam({person_id:onlineUser.person_id})
                    ).done(function(resp){
                        if(typeof resp!=='string'){
                            subContent.empty().append(tbl_getImmunization(resp));  
                        }else{
                            alert(resp);
                        }
                });
            });
        };
        module_getVaccine();
        nav.find("ul li a[href='#vcc-1']").click(function(e){//ข้อมูลการได้รับวัคซีนตามปีงบฯ
            module_getVaccine();
            e.stopPropagation();
        });
        nav.find("ul li a[href='#imm-1']").click(function(e){//ข้อมูลการได้รับภูมิคุ้มกันตามปีงบฯ
            module_getImmunization();
            e.stopPropagation();
        });
    };//ฐานข้อมูลวัคซีน
    var HealthBiofeedback_module = function(){
        var content = $("#myContent");
        var LayoutHtml = function(){
            var x=
            '<nav class="navbar navbar-default noradius" role="navigation" style=" margin-bottom: 0px;">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-ScreeningTest">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse">'+
                        '<ul class="nav navbar-nav">'+
                            '<li><a href="#"><i class="fa fa-medkit fa-lg"></i>&nbsp;Biofeedback Report</a></li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
            '<div class="panel panel-default noradius" style="margin-top:0px;">'+
                '<div class="panel-header noradius">'+//search by year
                    '<div class="col-xs-4 no-gutter noradius">'+
                        '<label class="btn" style="font-size:1vw;">'+
                            '<input type="radio" name="rdo_mn" value="APG" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>APG-Report'+
                        '</label>'+
                        '<label class="btn" style="font-size:1vw;">'+
                            '<input type="radio" name="rdo_mn" value="STRESS" style="display:none;"><i class="fa fa-circle-o fa-2x"></i><i class="fa fa-dot-circle-o fa-2x"></i>Stress-Report'+
                        '</label>'+
                    '</div>'+
                    '<div class="col-xs-6 text-left no-gutter noradius">'+
                        '<div class="col-md-4 no-gutter">'+
                            '<label>เลือกปีงบประมาณ</label>'+
                            $.fn.HTML_selYear(3,3)+
                        '</div>'+
                        '<div class="col-md-2 no-gutter" >'+
                            '<label>&nbsp</label>'+
                            '<span class="input-group-btn">'+
                                '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>'+                                 
                            '</span>'+
                        '</div>'+ 
                    '</div>'+ 
                '</div>'+
                '<div class="panel-body noradius">'+//subContent
                    '<p style="font-size:1.2vw;color:red;">กรุณาเลือกเงื่อนไขการสืบค้นข้อมูลก่อน จึงจะแสดงข้อมูลได้</p>'+
                '</div>'+
            '</div>';
            return x;
        };
        //create html form
        content.empty().append(LayoutHtml);
        var header = content.find("div.panel-header"),
            hselect = header.find('select'),
            btnSch = header.find('button'),
            subContent = content.find("div.panel-body");
        hselect.addClass('noradius');
        var showAPG = function(apgData){
            //form แสดงข้อมูล
            var txtHtml = function(){
                var x =
                '<div class="container">'+
                    '<div class="col-md-10">'+
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
            subContent.empty().append(txtHtml);
            //ฟังก์ชันเลือก radio heartrate
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
            $("input[name='txt_heartrate']").val(apgData[0].heartrate);
            chkHeartrate(parseFloat(apgData[0].heartrate));
            $("input[name='txt_wavetype']").val(apgData[0].wavetype_level);
            $("input[name='rdo_waveform1']").chkedRdoByValue(apgData[0].waveform_dpi);
            $("input[name='rdo_waveform2']").chkedRdoByValue(apgData[0].waveform_ec);
            $("input[name='rdo_waveform3']").chkedRdoByValue(apgData[0].waveform_ae);
            $("input[name='rdo_waveform4']").chkedRdoByValue(apgData[0].waveform_rbv);
        };
        var showSTRESS = function(stressData){
            var txtHtml = function(){
                var x =
                '<div class="container">'+
                    '<div class="col-md-10">'+
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
                                    '<h4>ความสมดุลข���งระบบประสาทอัตโนมัติ(ANS Balance) มีผลต่อภาวะทางจิตใจและอารมณ์</h4>'+
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
            subContent.empty().append(txtHtml);
            //config plugin ต่างๆ
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
            //กำหนดค่าจากฐานข้อมูลมาแสดงที่ form
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
        };
        //event
        var mn = "APG",
            year = $.fn.DateToYearGov($.fn.CurrDate());
        $("input[name='rdo_mn']").change(function(){
            mn=$(this).val();
        });
        hselect.change(function(){
            year = $(this).val();
        });
        btnSch.click(function(){
            $.when($.fn.def_OnlineUser()).done(function(onlineUser){
                if(mn==='APG'){
                    $.when(
                        $.fn.def_BiofeedbackCallAPGbyParam(
                            {
                                person_id:onlineUser.person_id,
                                yeargov:year
                            }
                        )).done(function(apgData){
                        if(typeof apgData !=='string'){
                            showAPG(apgData);
                        }else{
                            alert(apgData);
                        }
                    });
                    
                }else if(mn==='STRESS'){
                    $.when(
                        $.fn.def_BiofeedbackCallSTRESSbyParam(
                            {
                                person_id:onlineUser.person_id,
                                yeargov:year
                            }
                        )).done(function(stressData){
                        if(typeof stressData !=='string'){
                            showSTRESS(stressData);
                        }else{
                            alert(stressData);
                        }
                    });
                }
            });
        });
    };//ฐานข้อมูล biofeedback
    //create html และคลิกเลือกเมนู ตาม module ต่างๆ
    $(document).ready(function() {
        //Time out การใช้ page และ load html page
        $(document.body).bind("mousemove keypress", function(e) {
            chayanon_on_time = new Date().getTime();
        });
        setTimeout(timeout_refresh, 60000);
        //create menu layout
        $(document.body).append(html_layout);
        $.jqplot.config.enablePlugins = true;//run plugin jqplot

        //แสดงสถานะ onlineuser
        $.when($.fn.def_OnlineUser()).done(function(data){
            var divOnlineUser = $("#mn_sidebar").find("a[href='#onlinestatus']").parent("div.info");
            divOnlineUser.children('p').empty().append(data.pname);
            divOnlineUser.parent("div.user-panel").find("img").attr('src',data.img_profile_path);
        });
        
        //start module ต่างๆ
        myProfile_moldule();//default module กรณียังไม่ได้คลิกเมนูใดๆ
        $("#mn_sidebar").find("ul[data-widget='tree']  li  a").click(function(e){
            e.preventDefault(); 
            var this_li = $(this).parent('li'),
                this_a = this_li.children('a');
            //สลับ class active
            this_li.closest("#mn_sidebar").find('li').removeClass('active');
            this_li.closest("#mn_sidebar").find('a').removeClass('active');

            this_li.addClass('active');
            this_a.addClass('active');

            if(this_li.hasClass('active')){
                if(typeof(this_a.attr('href')) !== "undefined" && this_a.attr('href') !== null) {
                    switchModule(this_a.attr('href'));
                    e.stopPropagation();
                }
            }
        });//เหตุการณ์คลิก menu sidebar
        
        //หลัง ajax return พร้อมกับ reload page จะให้ไปที่เมนูไหนบ้าง
        if(window.location.hash === '#Leave2'){
            LeaveAbsence_module('#Leave2');
        }else if(window.location.hash === '#gogov2'){
            gogov2_moldule();
        } 
    });
})(jQuery);


