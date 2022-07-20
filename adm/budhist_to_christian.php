<?php
/*connect Database*/   
//include_once "../connectDB.php";
$objmysqli=new mysqli("localhost","root","6uOTLFtX6u","hr_06082561");
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

$rs = $objmysqli->query("select * from sheet1;");
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data[] = $cols;
    }
}
echo json_encode($data);
$objmysqli->close();
