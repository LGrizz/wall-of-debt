<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$con=mysqli_connect("localhost","root","root","wallofdebt");
// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$page = $_GET['page'] * 10;

$result = mysqli_query($con, "SELECT * FROM wallpost LIMIT ". $page .", 10");  

if (!$result) { // add this check.
    die('Invalid query: ' . mysqli_error());
}

$json = array();

while($r = mysqli_fetch_array($result)){
  $json[] = $r;
}

echo $json_data = json_encode($json);

mysqli_close($con);
?>