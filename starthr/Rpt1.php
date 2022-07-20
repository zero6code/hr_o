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

$d1 = json_decode(filter_input(INPUT_POST,'d1'));
$d2 = json_decode(filter_input(INPUT_POST,'d2'));

if(empty($d1)) {$d1="";}
if(empty($d2)) {$d2="";}
$txt = "";
if($d1!="" && $d2 !=""){
    $txt = " and gogov_date_depart between '$d1' and '$d2' ";
}
//start module
$sql = "SELECT "
        . "SUM(case when gw.groupwork_code = 'gwA' then 1 else 0 end) as gwA,"
        . "SUM(case when gw.groupwork_code = 'gwB' then 1 else 0 end) as gwB,"
        . "SUM(case when gw.groupwork_code = 'gwC' then 1 else 0 end) as gwC,"
        . "SUM(case when gw.groupwork_code = 'gwD' then 1 else 0 end) as gwD,"
        . "SUM(case when gw.groupwork_code = 'gwE' then 1 else 0 end) as gwE "
        . "FROM gogov g "
        . "LEFT OUTER JOIN groupwork gw on gw.groupwork_code = SUBSTRING_INDEX(g.gogov_depcode,'_',-1) "
        . "WHERE g.director_permit_status = 'director_Y' and g.status_use = 'Y' $txt ;";

$rs = $objmysqli->query($sql);
if($rs->num_rows >0){
    while ($cols = $rs->fetch_assoc()){
        $data['gwA'] = $cols['gwA'];
        $data['gwB'] = $cols['gwB'];
        $data['gwC'] = $cols['gwC'];
        $data['gwD'] = $cols['gwD'];
        $data['gwE'] = $cols['gwE'];
    }
    echo json_encode($data);
}else{
    echo json_encode('err');
}
$objmysqli->close();
