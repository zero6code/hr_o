;(function($){
    var htmlbody = function(){
        var txt = 
        '<div class="container">'+
            '<div class="panel-heading">จัดทำฐานข้อมูล</div>'+
            '<div class="panel-body"></div>'+
            '<div class="panel-footer">'+
                '<button>RUN</button>'+
            '</div>'+
        '</div>';
        return txt;
    };
    $(document).ready(function() {
        $(document.body).append(htmlbody);
        var btn = $('.container').find('button');
        btn.click(function(){
            $.ajax({
                url:"makeDB.php", 
                type:"post",
                cache:false,
                dataType:'json'
            }).done(function(data){
               // $.each(data,function(i,v){
                   console.log(data); 
                //});
            }); 
        });
    });
})(jQuery);

