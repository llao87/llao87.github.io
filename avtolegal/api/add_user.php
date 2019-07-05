<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'OPTIONS') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


try {
    $content = trim(file_get_contents("php://input"));

    date_default_timezone_set("Europe/Moscow");

    $form_data = json_decode($content, true);

    $response = '';

    $config = parse_ini_file("config.ini", true);

    if (isset($form_data)) {
        require 'vendor/autoload.php';

        function send_mail($to, $from, $fromName, $body, $config)
        {
            $mail = new PHPMailer(true);
            $mail->CharSet = 'UTF-8';
            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'ssl';
            $mail->Host = $config['host'];
            $mail->Port = $config['port'];
            $mail->Username = $config['username'];
            $mail->Password = $config['password'];
            $mail->setFrom($from, $fromName);

            foreach ($to as $email) {
                $mail->addBCC($email);
            }

            $mail->setLanguage('ru');
            $mail->Subject = 'HEADS | Новая заявка от ' . date("d-m-Y H:i:s");
            $mail->msgHTML($body);
            $mail->isHtml(true);

            return $mail->send();
        }

        $name = $form_data['username'];
        $phone = $form_data['phone'];

        $response = "<div>Имя: " . $name . "</div>" . "<div>Телефон: " . $phone . "</div>";

        if (send_mail(
            $config['email_list'],
            'info@avtolegal.ru',
            'HEADS Mail Service',
            $response,
            $config
        ))
            echo 'Success';
        else {
            echo 'Error';
        }
    } else {
        throw 'No form data';
    }
} catch (Exception $e) {
    http_response_code(500);
    echo 'Unexpected error: ', $e->getMessage(), "\n";
}