<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="refresh" content="30; url="index.html" />
<title>Mail Conformation</title> 
</head>

<body>

 <?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $phone = test_input($_POST['phone']);
        $subject = test_input($_POST['subject']);
        $property = test_input($_POST['inputProperty']);
        $message = test_input($_POST['message']);
        
        $client_ip = $_SERVER['REMOTE_ADDR'];
        
   
        $message = " <table  width='60%' style='border:1px solid black;'>
          <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Description</th>
          <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Value</th>

          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>Name</td>
            <td>" . $name . "</td>
          </tr>

          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>Phone</td>
            <td>" . $phone . "</td>
          </tr>
          
          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>Email</td>
            <td>" . $email . "</td>
          </tr>


          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>property</td>
            <td>" . $property . "</td>
          </tr>
          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>Subject</td>
            <td>" . $subject . "</td>
          </tr>

          <tr style='background-color:#AAD4FF;'>
            <td width='65%'>Subject</td>
            <td>" . $message . "</td>
          </tr>

          </table>";

           //Deal with the email
       
$to="danny.maxpo@gmail.com";

//$to = "info@maxpo.ae";
            $subject = 'mail from assets global live';
            // Always set content-type when sending HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
            $headers .= 'From:no-reply@maxpo.ae';

            if (mail($to, $subject, $message, $headers)) {
                echo "<meta http-equiv='refresh' content='3; url=property-grid.html' /><br/><center><h3>Thank you..! </h3>.<h4> Your mail has been sent. We will contact soon.</h4></center>";
               
            } else {
                echo "<meta http-equiv='refresh' content='3; url=index.html' /><br/><center><h3>Sorry ..! </h3>.<h4> Your mail not sent. Please Try Again.</h4></center>
                <a href='javascript: history.go(-1)'>Click here to go back</a>";
               
            }

    }

    
       
  function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
} 
    
    ?>
 
 

</body>
</html>