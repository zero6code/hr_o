<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$err_arr = array();

$objdata = (array)json_decode(filter_input(INPUT_POST,'objdata'));
$objprint = json_decode(filter_input(INPUT_POST,'objprint'));

$sql = "INSERT INTO gogov_new(";
$f = "";
$n = 0;
$v = "";
$len = count($objdata);
foreach ( $objdata as $field => $x   ) {
    if( ($len - $n) !==1){
        $f.=$field.",";
        $v.="'$x'".",";
    }else{
        $f.=$field;
        $v.="'$x'";
    }
    $n++; 
}

$sql.= $f.") VALUES(".$v.");";


    //หา id ต่อไปก่อน insert gogov_new  โดย lock ห้ามเขียน ไว้ก่อนเพื่อหาค่า next id
    $objmysqli->query("Lock tables gogov_new write;");
    $rsmaxid = $objmysqli->query("select max(id) as id from gogov_new;");
    while ($colsmaxid = $rsmaxid->fetch_assoc()){
        $next_id = ((int)$colsmaxid['id'])+1;
    }
    
    //insert เข้า gogov_new
    $objmysqli->query("unlock tables;");//ปลด lock table ที่ lock ไว้ทั้งหมด
    $rs = $objmysqli->query($sql);//ทำการ insert gogov_new
    
    //insert เข้าตาราง gogov_back
    if(!$rs){
        array_push($err_arr,'recordset error');
    }else{
        //หาว่า id ที่ insert กับ ที่ คำนวณ next id ไว้ ตรงกันหรือไม่ ถ้า ตรงกัน ถึงจะ insert เข้า gogov_back ได้
        $rs_last_ins = $objmysqli->query("select max(id) as id from gogov_new;");
        while ($colslast_ins = $rs_last_ins->fetch_assoc()){
            $id_last_ins = (int)$colslast_ins['id'];
        }
        if( $id_last_ins == $next_id ){//เช็คว่า id ที่ insert เข้า gogov_new นั้นๆ มีอยู่จริง
            $objmysqli->query("insert into gogov_back(gogov_new_id,status_use) values('".$next_id."','Y');");
        }
    }

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode('ok');
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();