<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5GWF8B6');</script>
<!-- End Google Tag Manager -->


    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z6YHGR7E6X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z6YHGR7E6X');
</script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Registering</title>
</head>
<body>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $phone = test_input($_POST['phone']);
    $reason = test_input($_POST['reason']);
    $property = test_input($_POST['inputProperty']);
    $comment = test_input($_POST['comment']);

    $subject = 'Registration From maxpo.in';
 $message = "<table width='60%' style='border:1px solid black;'>
        <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Description</th>
        <th style='background-color:#0051A4;color:#FFFFFF;text-align: center;'>Value</th>";

    $message .= "<tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Name</td>
                    <td>" . $name . "</td>
                </tr>";

    $message .= "<tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Phone</td>
                    <td>" . $phone . "</td>
                </tr>";

    $message .= "<tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Email</td>
                    <td>" . $email . "</td>
                </tr>";

    if (!empty($property)) {
        // Only include property information if it is not empty
        $message .= "<tr style='background-color:#AAD4FF;'>
                        <td width='65%'>Property</td>
                        <td>" . $property . "</td>
                    </tr>";
    }

    $message .= "<tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Reason</td>
                    <td>" . $reason . "</td>
                </tr>";

    $message .= "<tr style='background-color:#AAD4FF;'>
                    <td width='65%'>Message</td>
                    <td>" . $comment . "</td>
                </tr>";

    $message .= "</table>";

           //Deal with the email
       
$to="danny.maxpo@gmail.com";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: no-reply@maxpo.in';


    if (mail($to, $subject, $message, $headers)) {
        echo "<meta http-equiv='refresh' content='3; url=property-grid.html' /><br/><center><h3>Thank you..! </h3>.<h4> Your mail has been sent. We will contact soon.</h4></center>";
       
    } else {
        echo "<meta http-equiv='refresh' content='3; url=index.html' /><br/><center><h3>Sorry ..! </h3>.<h4> Your mail not sent. Please Try Again.</h4></center>
        <a href='javascript: history.go(-1)'>Click here to go back</a>";

    }

} else {
    echo "<p>No form data submitted.</p>";
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