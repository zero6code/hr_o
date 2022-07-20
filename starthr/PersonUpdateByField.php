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

$person_id = json_decode(filter_input(INPUT_POST,'person_id'));
$objField =  json_decode(filter_input(INPUT_POST,'objField'));
$err_arr = array();

if(   is_object($objField) && !empty($person_id)  ){
    $sql = "UPDATE person SET ";
    $f = "";
    $n = 0;
    $objField = (array)$objField;
    $len = count($objField);
    if($len>0){
        foreach ($objField as $fieldname => $value) {
            if( ($len - $n) !==1){
                $f.=$fieldname."='".$value."',";
            }else{
                $f.=$fieldname."='".$value."'";
            }
            $n++; 
        }
        $sql.="$f WHERE id='$person_id';";
        $objmysqli->query($sql);
    }else{
        array_push($err_arr,'Object is empty');
    }
}else{
    array_push($err_arr,'Your parameters is not object');
}

//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($objField);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}

$objmysqli->close();
