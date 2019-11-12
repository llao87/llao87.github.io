<?php include __DIR__ . '/data/data.php'; // подключение дата-файла ?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<header class="header">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="header__inner">
						<div class="header__buttons">
							<div class="btn btn--gray" id="js-callback"><?= $callback_text ?></div>
							<div class="btn btn--gray" id="js-toConsult"><?= $consult_text ?></div>
						</div>

						<a href="https://llao87.github.io/initio-landing/" class="logo"></a>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="section section--promo section--gray">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-6 promo__left-col">
					<div class="section__title section__title--promo">
						<?php
						foreach ($promo_text as $block) {
							echo '<span class="bg-gradient">' . $block . '</span><br>';
						}
						?>
					</div>
					<div class="section__subtitle"><?= $promo_subtext ?></div>
				</div>
				<div class="col-xs-12 col-md-6 promo__right-col">
					<img src="img/promo-photo.png" alt="promo-alt-text" class="promo__photo">
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-6">
					<div class="section__title">
						<?php
						foreach ($leftlist_header as $block) {
							echo '<span class="bg-gradient">' . $block . '</span><br>';
						}
						?>
					</div>

					<div class="section__list">
						<ul>
							<?php
							foreach ($leftlist_options as $block) {
								echo '<li>' . $block . '</li>';
							}
							?>
						</ul>
					</div>
				</div>

				<div class="list__separator"></div>

				<div class="col-xs-12 col-md-6">
					<div class="section__title">
						<?php
						foreach ($rightlist_header as $block) {
							echo '<span class="bg-gradient">' . $block . '</span><br>';
						}
						?>
					</div>

					<div class="section__list">
						<ul>
							<?php
							foreach ($rightlist_options as $block) {
								echo '<li>' . $block . '</li>';
							}
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section section--gray catalog">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="section__title">
						<?php
						foreach ($catalog_header as $block) {
							echo '<span class="bg-gradient">' . $block . '</span><br>';
						}
						?>
					</div>
				</div>

				<div class="col-xs-12 col-md-4">
					<div class="item">
						<div class="item__photo">
							<img src="img/item-1.png" alt="mousse" class="item__img item--mousse">
						</div>
						<div class="item__caption"><?= $item_1_caption ?></div>
					</div>
				</div>

				<div class="col-xs-12 col-md-4">
					<div class="item">
						<div class="item__photo">
							<img src="img/item-2.png" alt="peeling" class="item__img item--peeling">
						</div>
						<div class="item__caption"><?= $item_2_caption ?></div>
					</div>
				</div>

				<div class="col-xs-12 col-md-4">
					<div class="item">
						<div class="item__photo">
							<img src="img/item-3.png" alt="oxygen mask" class="item__img item--mask">
						</div>
						<div class="item__caption"><?= $item_3_caption ?></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section section--gray section--consult">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<form action="#" class="consult" id="form-consult" method="POST">
						<div class="row">
							<div class="col-xs-12 col-md-6 col-lg-6">
								<div class="section__title">
									<?php
									foreach ($consult_header as $block) {
										echo '<span class="bg-gradient">' . $block . '</span><br>';
									}
									?>
								</div>
							</div>

							<input type="hidden" name="referer" value="<?= $_SERVER['HTTP_REFERER'] ?? 'default' ?>">
							<input type="hidden" name="form" value="consult">

							<div class="col-xs-12 col-md-6 col-lg-6">
								<div class="fields">
									<div class="form-field">
										<span class="consult__input-label"><?= $last_name_label ?></span>
										<input type="text" class="consult__input" placeholder="Фамилия" name="lastName">
									</div>

									<div class="form-field">
										<span class="consult__input-label"><?= $name_label ?></span>
										<input type="text" class="consult__input" placeholder="Имя" name="name">
									</div>

									<div class="form-field">
										<span class="consult__input-label"><?= $city_label ?></span>
										<input type="text" class="consult__input" placeholder="Город" name="city">
									</div>

									<div class="form-field">
										<span class="consult__input-label"><?= $phone_label ?></span>
										<input id="user_phone" type="text" class="consult__input user_phone" placeholder="+7 (xxx) xxx xx xx" name="phone">
									</div>

									<div class="form-field">
										<span class="consult__input-label"><?= $message_label ?></span>
										<input type="text" class="consult__input" placeholder="Ваше сообщение" name="msg">
									</div>

									<input type="submit" class="btn bg-gradient btn-submit" value="<?= $consult_submit_text ?>">

									<div class="form-field">
										<input type="checkbox" name="agree" class="hidden-checkbox" id="hidden-agreement" checked="true">

										<div class="agreement">
											<div class="checkbox checkbox--active" id="js-agreement"></div>
											<div class="agreement__text"><?= $agreement_text ?></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<footer class="section section--footer">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<a href="https://llao87.github.io/initio-landing/" class="logo"></a>
					<div class="to-top" id="js-toTop">
						<img src="img/to-top.png">
						<span>Наверх</span>
					</div>
				</div>
			</div>
		</div>
	</footer>

	<div class="dark-layer" id="js-dark"></div>
	<form class="callback" id="form-callback" method="POST">
		<div class="form-inner">
		<div class="section__title">
			<span>Заказать обратный звонок</span>
		</div>

		<input type="hidden" name="referer" value="<?= $_SERVER['HTTP_REFERER'] ?? 'default' ?>">
		<input type="hidden" name="form" value="callback">

		<div class="fields">
			<div class="form-field">
				<span class="consult__input-label"><?= $callback_phone_label ?></span>
				<input type="text" id="user_phone_callback" class="consult__input" placeholder="+7 (xxx) xxx xx xx" name="callback_phone">
			</div>
			<input type="submit" class="btn bg-gradient btn-submit">

		</div>
		</div>
		<div id="js-callback-close" class="callback-close">✖</div>
	</form>

	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/maskedinput.js"></script>
	<script src="js/main.js"></script>
</body>
</html>