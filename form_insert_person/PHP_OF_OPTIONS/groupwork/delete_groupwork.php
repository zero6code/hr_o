<?php
require_once("../../../connectDB.php");
$conn = new mysqli(DB_SERVER,DB_USER,DB_PASS,DB_NAME);

$id = $_GET['id'];

$query_data = $conn->query(sprintf("DELETE FROM groupwork WHERE id={$id}"));


if($query_data) {
    echo json_encode(array('delete' => 'success'));
    // echo "Record delete successfully";
}else{
    echo json_encode(array('delete' => 'error'));
}

mysqli_close($conn);
?>