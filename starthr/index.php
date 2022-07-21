<!DOCTYPE html>
<?php
    if(session_id() == '') {
        session_start();
        
    }
    if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
            header("Location:../index.html");	
    }   
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>ระบบบริหารทรัพยากรบุคคล</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta property="og:type"          content="website" />
	<meta property="og:title"         content="SongKhla Rajanagarindra Psychiatric Hospital:SKPH" />
	<meta property="og:description"   content="โรงพยาบาลจิตเวชสงขลาราชนครินทร์,จิตเวชสงขลา" />
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
        <link rel="stylesheet" href="../dist/css/AdminLTE.css">
        <link rel="stylesheet" href="../dist/css/skins/_all-skins.min.css">
        <link rel="stylesheet" type="text/css" href="../css/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="../fonts/thsarabunnew.css" />
        <link rel="stylesheet" type="text/css" href="../css/select2.min.css" />
        
        <link rel="stylesheet" type="text/css" href="../css/bootstrap-datepicker3.standalone.css" />
        <link rel="stylesheet" type="text/css" href="../css/bootstrap-datetimepicker.min.css" />
        
        <link rel="stylesheet" type="text/css" href="../css/croppie.css" /><!--upload และ crop ภาพ -->
        
        <link rel="stylesheet" type="text/css" href="../css/datatables.css" />
        <link rel="stylesheet" type="text/css" href="../css/buttons.dataTables.min.css" />
        <link rel="stylesheet" type="text/css" href="../css/jquery.range.css" />
        <link rel="stylesheet" type="text/css" href="../css/mycss.css" />
    </head>
    <body class="hold-transition skin-blue sidebar-mini">   
        <script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="../js/bootstrap.js"></script>
        <script type="text/javascript" src="../dist/js/adminlte.js"></script>
        <!-- datatables -->
        <script type="text/javascript" src="../js/datatables.js"></script>
        <script type="text/javascript" src="../js/dataTables.buttons.min.js"></script>
        <script type="text/javascript" src="../js/buttons.flash.min.js"></script>
        <script type="text/javascript" src="../js/jszip.min.js"></script>
        <script type="text/javascript" src="../js/buttons.html5.min.js"></script>
        <script type="text/javascript" src="../js/buttons.print.min.js"></script>
        
        <script type="text/javascript" src="../js/popper.min.js"></script><!--bootstrap tooltips แต่ต้องอยู่บน bootstrap.js -->
        
        <script type="text/javascript" src="../js/select2.min.js"></script><!--autocomplete search ได้ -->
        <script type="text/javascript" src="../js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="../js/bootstrap-datepicker-thai.js"></script>
        
        <!-- datetimepicker -->
        <script type="text/javascript" src="../js/moment-with-locales.js"></script>  
        <script type="text/javascript" src="../js/th.js" charset="UTF-8"></script> 
        <script type="text/javascript" src="../js/bootstrap-datetimepicker.min.js"></script>
     
        
        <script type="text/javascript" src="../js/jquery.numeric.js"></script><!--บังคับให้พิมพ์แต่ตัวเลขจำนวนเต็ม -->
        <script type="text/javascript" src="../js/jquery.formatCurrency-1.4.0.js"></script><!--แปลงเป็นเลขเงินบาท -->
        <script type="text/javascript" src="../js/jquery.range-min.js"></script><!-- https://github.com/nitinhayaran/jRange  -->
        <script type="text/javascript" src="../js/spin-number.js"></script><!--กดบวก ลบ เพื่อเพิ่มลดตัวเลข -->
        <script type="text/javascript" src="../js/pdfmake/pdfmake.min.js"></script>
        <script type="text/javascript" src="../js/pdfmake/vfs_fonts.js"></script>
        <script type="text/javascript" src="../js/croppie.js"></script><!--upload และ crop ภาพ -->
        
        <!-- jqplot -->
        <script type="text/javascript" src="../js/jqplot/jquery.jqplot.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.canvasTextRenderer.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.canvasAxisLabelRenderer.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.barRenderer.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.categoryAxisRenderer.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.highlighter.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.cursor.min.js"></script>
        <script type="text/javascript" src="../js/jqplot/jqplot.pointLabels.min.js"></script>
        
        <!-- JS by chayanon -->
        <script type="text/javascript" src="../js/GlobalFunc.js"></script><!--Global function เขียนไว้ใช้สำหรับ project นี้ -->
        <script type="text/javascript" src="../js/user.js"></script>
    </body>
</html>



