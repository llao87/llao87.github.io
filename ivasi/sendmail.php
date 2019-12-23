<?php

if (isset($_POST["name"])) { $person_name = $_POST["name"];}
if (isset($_POST["mail"])) { $person_mail = $_POST["mail"];}
if (isset($_POST["phone"])) { $person_phone = $_POST["phone"];}
if (isset($_POST["message"])) { $service_type = $_POST["message"];}


// $mail_to = "unifin@protonmail.com";
// $mail_to = "sm@unifin.ltd";
$mail_to = "syd.phoenix@gmail.com";
$mail_subj = "Новая заявка на Antey.fish" . "\n";
$mail_body = '<html>  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">  
<title>Новая заявка на UniFin.ltd</title>  
</head>
<body>  
<table width="100%" cellpadding="0" cellspacing="0"><tr><td>  
<table id="top-message" cellpadding="0" cellspacing="0" bgcolor="ffffff"><tr><td><p style="margin: 5px 0; padding-left: 10px;">От кого: '. $person_name .'</p></td></tr></table>

<table id="main" cellpadding="0" cellspacing="0" bgcolor="ffffff"><tr><td><p style="margin: 5px 0; padding-left: 10px;">Номер телефона: '.$person_phone.'</p></td></tr></table>

<table id="bottom-message" cellpadding="0" cellspacing="0" bgcolor="ffffff"><tr><td><p style="margin: 5px 0; padding-left: 10px;">Адрес почты: '.$person_mail.'</p></td></tr></table>

<table id="bottom-message" cellpadding="0" cellspacing="0" bgcolor="ffffff"><tr><td><p style="margin: 5px 0; padding-left: 10px;">Список услуг: '.$service_type.'</p></td></tr></table>

</tr></td>
</table>
</body>  
</html>';

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$result = mail ($mail_to, $mail_subj, $mail_body, $headers);

?>
