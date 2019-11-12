<?php

include __DIR__ . '/../data/data.php'; // подключение дата-файла

$data = $_POST;


if (strpos($data['referer'], 'google') !== FALSE) {
	sendData($data, $googleManagers);
	return;
}

if (strpos($data['referer'], 'instagram') !== FALSE) {
	sendData($data, $instagramManagers);
	return;
}

if (strpos($data['referer'], 'youtube') !== FALSE) {
	sendData($data, $youtubeManagers);
	return;
}

sendData($data, $defaultManagers);

function sendData($data, $managers)
{
	$message = '';

	if ($data['form'] == 'consult') {

		$message .= 'С формы ' . $data['form'] . ' пришел запрос на консультацию от<br>';
		$message .= $data['lastName'] . ' ' . $data['name'] . '<br>';
		$message .= 'Город: ' . $data['city'] . '<br>';
		$message .= 'Контактный телефон: ' . $data['phone'] . '<br><br>';
		$message .= 'Сообщение:<br>' . ($data['msg'] != '' ? $data['msg'] : '- - -');

	} elseif ($data['form'] == 'callback') {

		$message .= 'С формы ' . $data['form'] . ' пришел запрос на обратный звонок<br>';
		$message .= 'Контактный телефон: ' . $data['callback_phone'] . '<br><br>';

	} else {
		return false;
	}


	foreach ($managers as $manager) {
		mail($manager, 'Consult request from Initio landing page', $message);
	}
	return false;
}