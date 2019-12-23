<?php

require __DIR__ . '/PHPMailer/PHPMailerAutoload.php';
require __DIR__ . '/../vendor/autoload.php'; // geoIP

/* Определение IP клиента */
use GeoIp2\Database\Reader;
$ip = $_SERVER['REMOTE_ADDR'] == '127.0.0.1' ? '213.174.10.58' : $_SERVER['REMOTE_ADDR'];

$reader = new Reader('../vendor/geoip2/geoip2/maxmind-db/country.mmdb');
$geo = $reader->country($ip);


$data = $_POST; // данные с формы

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://server40.hosting.reg.ru';
$mail->Port = 465;
$mail->Username = 'no-reply@ioprc-spb.ru';
$mail->Password = 'D3o0P8u0';

// Тема письма
$mail->Subject = 'Сообщение с сайта ioprc-spb.ru';
// От кого
$mail->setFrom('no-reply@ioprc-spb.ru', 'ioprc-spb.ru');
// Тело письма
$body = getMessage($data, $ip, $geo);
$mail->msgHTML($body);

// Кому
$managers = getManagerLists($data['referer'], $geo); // array

foreach ($managers as $manager) {
	$mail->addAddress($manager);
}

// отправка
if ($mail->send()) {
	echo 'ok';
} else {
	echo 'send error';
}
die();


function getManagerLists($referer, $geo) {
	include __DIR__ . '/../data/data.php'; // подключение дата-файла

	// определяем источник перехода и списки рассылки
	$managers = $defaultManagers; // по умолчанию список дефолтный

	// если IP Украинский
	if ($geo->country->isoCode == 'UA') {
		$managers = $uaManagers;
	}

	// если пришли по ссылке с инстаграма
	if (strpos($referer, 'instagram') !== FALSE) {
		$managers = $instagramManagers;
	}

	// если прилши по ссылке с ютуба
	if (strpos($referer, 'youtube') !== FALSE) {
		$managers = $youtubeManagers;
	}

	return $managers;
}

function getMessage($data, $ip, $geo) {
	$message = 'Страница откуда пришел (если пусто - ввел вручную):<br>';
	$message .= $data['referer'] . '<br>' . $ip . '<br><br>';
	$message .= 'С формы ' . $data['form'] . ' пришел запрос на консультацию от<br>';
	$message .= $data['lastName'] . ' ' . $data['name'] . '<br>';
	$message .= 'Контактный телефон: ' . $data['phone'] . '<br><br>';
	$message .= 'Страна: ' . $geo->country->name . ' (' . $geo->country->isoCode . ')';

	return $message;
}