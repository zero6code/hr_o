;(function($){ 
    var html_layout = function(){
        var txt = 
            
            '<!-- Page Content -->'+
            '<div class="container mt-5" '+
                '<div class="row">'+
                    '<div class="col-md-6 mx-auto">'+//Content ขวามือ
                        '<div class="row">'+
                            "<form class='myboxshadow' style='background-color:white;'>"+
                                "<div class='row'>"+
                                    "<div class='' style='text-align:center;'>"+
                                        "<img src='img/skphlogo.jpg' class='img-responsive'>"+
                                    "</div>"+
                                "</div>"+
                                "<h2 class='form-signin-heading' style='text-align: center;'>กลุ่มงานทรัพยากรบุคคล</h2>"+
                                "<div class=' col-sm-12'>"+
                                "<label  class='sr-only'>Username</label>"+
                                "<input type='text' class='form-control' placeholder='Username'>"+
                                "<label  class='sr-only'>Password</label>"+
                                "<input type='password'  class='form-control' placeholder='Password'>"+
                                "</div>"+
                                '<div class="funkyradio">'+
                                    '<div class="funkyradio-success" style="padding:0; margin-top: 2vh;">'+
                                        '<input type="radio" name="logintype" id="typeuser" value="typeuser" checked />'+
                                        '<label for="typeuser" style="padding:0; margin:0;">ผู้ใช้งานทั่วไป(user)</label>'+
                                    '</div>'+
                                    '<div class="funkyradio-success" style="padding:0; margin:0;">'+
                                        '<input type="radio" name="logintype" id="typeadmin" value="typeadmin"/>'+
                                        '<label for="typeadmin" style="padding:0; margin:0;">ผู้ดูแลระบบ(admin)</label>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    "<div class='col-xs-12  col-sm-12  col-md-12'>"+
                                      "<button class='btn btn-primary' style='"+
                                        "width: 100%;"+
                                        "margin-top: 2vh; height: 5vh;"+
                                        "'>เข้าสู่ระบบ</button>"+
                                    '</div>'+
                                '</div>'+
                            "</form>"+
                        '</div>'+
                    '</div>'+
                '</div><!-- /.row -->'+
            '</div><!-- /.container -->';//container-fluid
        return txt;
    };

    $(document).ready(function($){
        $(document.body).append(html_layout());
        var content = $(document.body).find('div.container'),
            contentRight = content.find('.row > .col-md-4'),
            //contentLeft = content.find('.row > .col-md-8'),
            staffLoginFrm = contentRight.find('div:nth-child(1) >form');
 
       
        //Staff Login
        var logintype=$('#typeuser').prop('checked',true).val(); 
        $('input[name=logintype]').change(function(){
           logintype = $(this).prop('checked',true).val(); 
        });
        
        //keyboard Detect
        contentRight.find("input[type='text'],input[type='password']").keydown(function(e){
            //console.log($(this));
        });  
        
        staffLoginFrm.find('button.btn-primary').off('click').click(function(e){//click btn login
            e.preventDefault();
            e.stopPropagation();
            var frm = $(e.target).closest('form'),
            user = frm.find('input[type=text]'),
            pass = frm.find('input[type=password]');
            if(user.val() !== "" && pass.val() !=="" && logintype !== ""){
                var dataSend = {
                    'user':user.val(),
                    'pass':pass.val(),
                    'typeuser':logintype
                };
                $.ajax({
                    type: "POST",
                    url: "chklogin.php",
                    cache:false,
                    data: {'d':JSON.stringify(dataSend)},
                    datatype: 'json'
                }).done(function(resp){
                    if (resp.toLowerCase().indexOf("okeypassed") >= 0){
                        if(logintype==='typeuser'){
                            window.location='starthr/index.php';
                        }else if(logintype==='typeadmin'){
                            window.location='adm/index.php';
                        }else{
                            window.location.reload();
                        }
                    }else{
                        alert(resp);
                    }
                });
            }else{
                alert('กรอกข้อมูลไม่ครบ');
            }
        });
    });
})(jQuery);

