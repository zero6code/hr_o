<?php
if(session_id() == '') {
    session_start();
}
if(!isset($_SESSION['ses_user'])||empty($_SESSION['ses_user'])){
        header("Location:../index.html");	
}  
/*connect Database*/   
include_once "../connectDB.php";
include_once "../PHP_func/func_datetime.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
if ($objmysqli->connect_errno) {exit;}

if(isset($_POST["image"])){
    $person_id = json_decode(filter_input(INPUT_POST,'person_id'));  
    $data = $_POST["image"];
    $image_array_1 = explode(";", $data);
    $image_array_2 = explode(",", $image_array_1[1]);
    $data = base64_decode($image_array_2[1]);
    //$imageName = '../img/imgProfile/'.$person_id.'.png'; 
    $imageName = '../img/imgProfile/'.$person_id.'_'.time() . '.png';
    
    //checking if file exsists
    $rsfindOldFile = $objmysqli->query("select img_profile_path from person where id='$person_id';");
    if($rsfindOldFile->num_rows >0){
        while ($colsfindOldFile = $rsfindOldFile->fetch_assoc()){
            $OldFilePath = $colsfindOldFile['img_profile_path'];
            if(isset($OldFilePath) && !empty($OldFilePath) && ($OldFilePath!='../img/imgProfile/imgProfile.png')){
                unlink($OldFilePath);
            }
        }
    }     
    if(file_exists($imageName)){
        unlink($imageName);
    }
    //upload file
    $objmysqli->query("update person set img_profile_path='$imageName' where id='$person_id';");
    file_put_contents($imageName, $data);//upload file
    
    echo $imageName;
}
$objmysqli->close();