<div class="feedback-form__bgr-mask">
	<div class="feedback-form">
		<p class="feedback-form__title">Оставить отзыв</p>
		<div class="feedback-form__close"></div>
		<form action="/php/send.php" method="post" id="feedback_form">
			<div class="feedback-form__row">
				<input class="feedback-form__input" type="text" name="name" required="" placeholder="Имя" size="30"
				maxlength="50"/>
			</div>
			<div class="feedback-form__row">
				<input class="feedback-form__input" type="text" name="mail" placeholder="E-mail" size="30" maxlength="50"
				id="phone" required/>
			</div>
			<div class="feedback-form__row">
				<input class="feedback-form__input" type="text" name="phone" required="" placeholder="Телефон" size="30"
				maxlength="50"/>
			</div>

			<div class="feedback-form__row" id="product-selector-wrap">
				<select class="feedback-form__input" id="product-selector">
					<option value="0" selected disabled>Выберите продукт для отзыва</option>
					<option value="1">Филе Иваси без кожи в масле</option>
					<option value="2">Филе Иваси с кожей в масле</option>
					<option value="3">Филе Иваси подкопченое в масле</option>
					<option value="4">Тушка Иваси холодного копчения</option>
					<option value="5">Филе Иваси с кожей холодного копчения</option>
					<option value="6">Кусочки Иваси в масле "Аппетитная"</option>
					<option value="7">Кусочки Иваси в солевой заливке "Фирменная"</option>
					<option value="8">Тушка соленая Иваси в солевой заливке 250г</option>
					<option value="9">Тушка соленая Иваси в солевой заливке 500г</option>
					<option value="10">Филе Иваси без кожи в масле 200г</option>
				</select>
			</div>


			<div class="feedback-form__row">
				<label>Ваше сообщение</label>
			<!-- <input class="feedback-form__input" type="text" name="message" placeholder="Ваше сообщение" size="30"
				maxlength="5000"/> -->

				<textarea class="feedback-form__input" type="text" name="message" size="30" rows="3"
				maxlength="5000"></textarea>
			</div>

			<div class="product__rating product__rating--form">
				<input type="hidden" name="product-name"  id="product-name"	 value="">
				<input type="hidden" name="users-product" id="users-product" value="" >
				<input type="hidden" name="user-rating"   id="user-rating"	 value="1">
				<div class="rating">
					<div class="rating-star rating-star--full" data-ratingScore="1"></div>
					<?php for ($i = 2; $i <= 5; $i++): ?>
						<div class="rating-star rating-star--empty" data-ratingScore="<?= $i ?>"></div>
					<?php endfor; ?>
				</div>
				<div class="result"></div>
			</div>

			<input type="submit" class="feedback-form__submit" value="Отправить">

			<div class="checkbox">
				<input id="checkbox_header" type="checkbox" required="" class="buttons">
				<label for="checkbox_header">Я согласен с политикой конфиденциальности</label><br>
			</div>
		</form>
	</div>
</div>

<!-- Google Tag Manager -->
<!--
<script>
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
		var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})
	(window, document, 'script', 'dataLayer', 'GTM-N4JLMNS');
</script>
-->
<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154876645-1"></script>
<script>
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}

	gtag('js', new Date());
	gtag('config', 'UA-154876645-1');
</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	(function (m, e, t, r, i, k, a) {
		m[i] = m[i] || function () {
			(m[i].a = m[i].a || []).push(arguments)
		};
		m[i].l = 1 * new Date();
		k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
	(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

	ym(56756578, "init", {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true,
		webvisor: true
	});
</script>
<noscript>
	<div><img src="https://mc.yandex.ru/watch/56756578" style="position:absolute; left:-9999px;" alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->

<link rel="stylesheet" href="/js/jquery.scrollbar/jquery.scrollbar.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"/>
<link rel="stylesheet" href="/css/toastr.css">
<link rel="stylesheet" href="/js/slick/slick.css">
<link rel="stylesheet" href="/js/slick/slick-theme.css">
<link rel="stylesheet" href="/css/animate.css">


<script src="/js/jquery-3.4.1.min.js"></script>
<script src="/js/jquery-ui-1.12.1/jquery-ui.min.js"></script>
<script src="/js/slick/slick.min.js"></script>
<script src="/js/jquery.scrollbar/jquery.scrollbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="/js/toastr.min.js"></script>
<script src="/js/script.js?v=<?php echo time(); ?>"></script>
<script src="/js/lazysizes.min.js" async></script>
<script src="/js/rating.js"></script>