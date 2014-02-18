<?php
$con=mysqli_connect("localhost","root","root","wallofdebt");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO wallpost (name, email, debt, school)
VALUES
('$_POST[name]','$_POST[email]','$_POST[debt]', '$_POST[school]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }

echo "Row added";

mysqli_close($con);
?>