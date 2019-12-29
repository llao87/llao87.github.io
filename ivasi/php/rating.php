<?php

$data = $_POST;
$data['ip'] = $_SERVER['REMOTE_ADDR'];
$link = getDbLink();

$averageRating = getAverageRating($link);

// Если пришла команда на запись рейтинга
if (isset($data['action']) && $data['action'] == 'write' ) {
	$result = writeRating($link, $data);

	if ($result === true)  	 { $msg = 'Спасибо за оценку'; }
	if ($result === false) 	 { $msg = 'Голосование не удалось, попробуйте позже';	}
	if ($result === 'again') { $msg = 'Вы уже голосовали'; }

	echo $msg;
}


function listRatingStars($productId) {
	$link = getDbLink();
	$allProductsRating = getAverageRating($link);
	$rating = $allProductsRating['product_' . $productId]['rating'];


	$fullStars = floor($rating);
	$emptyStars = floor(5 - ceil($rating));
	$halfStars = 5 - $fullStars - $emptyStars;

	$startClasses = [];

	for ($i=0; $i <$fullStars ; $i++) {
		$startClasses[] = 'rating-star--full';
	}
	for ($i=0; $i <$halfStars ; $i++) {
		$startClasses[] = 'rating-star--half';
	}
	for ($i=0; $i <$emptyStars ; $i++) {
		$startClasses[] = 'rating-star--empty';
	}

	return $startClasses;
}


function getAverageRating($link) {
	$products = getProductList($link);
	$averageRating = [];

	foreach ($products as $product) {
		$rating = readRating($link, $product['id']);

		if (isset($rating['sum_rating']) && isset($rating['rows_count'])) {
			$averageRating['product_' . $product['id']] = [
				'id' => $product['id'],
				'rating' => $rating['sum_rating'] / $rating['rows_count']
			];
		}
	}

	return $averageRating;
}


// Возвращае ID продуктов
function getProductList($link) {
	$sql = "SELECT DISTINCT(id) FROM product ORDER BY id";
	$request = $link->prepare($sql);
	$request->execute($productId);

	while ($row = $request->fetch(PDO::FETCH_ASSOC)) {
		$result[] = $row;
	}

	return $result;
}

// Возвращает рейтинг определенного продукта
function readRating($link, $productId) {

	$sql = "SELECT SUM(rating) sum_rating, COUNT(rating) rows_count FROM rating WHERE product_id = ?";

	$request = $link->prepare($sql);
	$request->execute([$productId]);
	$response = $request->fetch(PDO::FETCH_ASSOC);

	return $response;
}

// проверка IP в рейтинге
function checkRatingVote($data) {
	$link = getDbLink();
	$sql = "SELECT COUNT(id) count FROM rating WHERE IP = ? AND product_id = ?";
	$request = $link->prepare($sql);
	$request->execute(
		[
			$data['ip'],
			$data['product_id']
		]
	);

	// Голосовал ли ранее этот IP-адрес
	$row = $request->fetch(PDO::FETCH_ASSOC);
	// return ($row['count'] > 0);
	return false;
}

// Запись рейтинга товара в БД
function writeRating($link, $data) {

	if (checkRatingVote($data)) {
		return 'again';
	}


	$sql = "INSERT INTO rating (IP, product_id, rating)	VALUES (?, ?, ?)";
	$request = $link->prepare($sql);
	$result = $request->execute(
		[
			$data['ip'],
			$data['product_id'],
			$data['rating']
		]
	);

	return $result;
}

// Возвращает конфигурацию подключения к БД
function getDbConfig() {
	$dbConfig = [
		'host' => 'localhost',
		'database' => 'antey',
		'login' => 'antey',
		'password' => 'zBVcIVBiBDFMDcCR'
	];

	return $dbConfig;
}

// Возвращает ссылку на полключение к БД
function getDbLink() {
	$db = getDbConfig();

	$link = new PDO(
		'mysql:host=' . $db['host'] . ';' . 'dbname=' . $db['database'],
		$db['login'],
		$db['password']
	);

	return $link;
}
