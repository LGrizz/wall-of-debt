<?php
$con=mysqli_connect("localhost","root","root","wallofdebt");
// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con, "SELECT sum(debt) from wallpost");  

if (!$result) { // add this check.
    die('Invalid query: ' . mysqli_error());
}

$row = mysqli_fetch_array($result);

echo $row[0];

mysqli_close($con);
?>