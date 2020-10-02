<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(false);

try {
    //Server settings
    $mail->SMTPDebug  = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.yandex.ru';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'icebreakersgame';            // SMTP username
    $mail->Password   = '1q2w3e4r5t!A@S#D$F%G';                 // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->CharSet    = "utf-8";

    //Recipients
    $mail->setFrom('icebreakersgame@yandex.ru', 'Icebreakers user');
    $mail->addAddress('gameicebreakers@gmail.com');             // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "новый отзыв на игру \"Ледоколы\"";
    $mail->Body    = "Имя: ". $_POST["name"] . "\n";
    $mail->Body   .= "E-mail: " . $_POST["email"] . "\n";
    $mail->Body   .= "Отзыв: "   . $_POST["review"] . "\n";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
