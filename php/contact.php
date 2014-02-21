<?php
//Mail sending function
            $subject = $_GET["name"]." sent you a Wall of Debt message";
            $to = "langille.kyle@gmail.com";
            $from = $_GET["email"];

            //data
            $msg = "User name: ".$_GET["name"]."<br>"."User email: ".$_GET["email"]."<br><br>\r\nMessage: ".$_GET["message"]."<br><br>\n";       


            //Headers
            $headers  = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=UTF-8\r\n";
            $headers .= "From: <".$from. ">" ;

            mail($to,$subject,$msg,$headers);
 ?>