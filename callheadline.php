<?php

/*connect Database*/   
include_once "connectDB.php";
$objmysqli=new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
$objmysqli->query("set names utf8");
$err_arr = array();
if ($objmysqli->connect_errno)
{
    array_push($err_arr,'error connection');
}

 
    $strCond = "";
    $strSelect = "";
    if(filter_input(INPUT_POST,'id')){
        $id = json_decode(filter_input(INPUT_POST,'id'));
        $strCond = "and id='$id'";
        $strSelect = ",activity_text_detail,activity_img_array";
    }

    $sql = "select id,head_news_text,head_news_image_thumb,datetime_upload $strSelect from blog_newsheadline where status_use='Y' $strCond;";

    $rs = $objmysqli->query($sql);
    if($rs)
    {
        $numrow = $rs->num_rows;
        if($numrow>0)
        {
            while(NULL!==($cols = $rs->fetch_assoc())){
               $data[] = $cols;
            }
        }
        else
        {
            array_push($err_arr,'error data not found !');
        }
    }
    else
    {
        array_push($err_arr,'error recordset!');
    }
    


//ajax return
if(sizeof($err_arr)==0){
    echo json_encode($data);
}else{
    $str_err = implode(",",$err_arr);
    echo json_encode($str_err);
}
$objmysqli->close();