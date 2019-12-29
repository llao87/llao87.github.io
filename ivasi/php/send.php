<?php
// PHP Mailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
// IP клиента
$ip = $_SERVER['REMOTE_ADDR'];
// данные с формы
$data = $_POST;

// Объект письма:
$mail = new PHPMailer;

try {
	//Server settings
	$mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->Mailer = "smtp";
    $mail->SMTPAuth   = true;
    $mail->isSMTP();
    $mail->Host 	  = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@antey.fish';
    $mail->Password   = 'HJ2phepR';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
	//Recipients
    $mail->setFrom('no-reply@antey.fish');
    // $mail->addAddress('info@antey.fish');
    $mail->addAddress('dimka.kragel@bk.ru');
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Сообщение с сайта antey.fish';
    $mail->Body    = getMessage($data);
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

function getMessage($data) {
	$message  = 'Новый отзыв на сайте ANTEY.FISH<br>';
	$message .= 'От: ' . $data['name'] . '<br>' . $ip . '<br><br>';
	$message .= 'телефон: ' . $data['phone'] . '<br>';
	$message .= 'e-mail: ' . $data['mail'] . '<br><br>';
	$message .= 'На продукт: ID = ' . $data['users-product'] . ' "' . $data['product-name'] . '" оставлена оценка ' . $data['user-rating'] . '<br><br>';
	$message .= 'Текст сообщения:<br>' . $data['message'] . '<br><br>';

	return $message;
}


var_dump($data);