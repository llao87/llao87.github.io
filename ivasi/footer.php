<div class="feedback-form">
	<p class="feedback-form__title">Оставить отзыв</p>
	<div class="feedback-form__close"></div>
	<form action="php/send.php" method="post" id="feedback_form">
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
		<div class="feedback-form__row">
			<input class="feedback-form__input" type="text" name="message" placeholder="Ваше сообщение" size="30"
			maxlength="5000"/>
		</div>
		<input type="submit" class="feedback-form__submit" value="Отправить">

		<div class="checkbox">
			<input id="checkbox_header" type="checkbox" required="" class="buttons">
			<label for="checkbox_header">Я согласен с политикой конфиденциальности</label><br>
		</div>

	</form>
</div>
<div class="feedback-form__bgr-mask"></div>



<!-- Google Tag Manager -->
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

<link rel="stylesheet" href="js/jquery.scrollbar/jquery.scrollbar.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"/>
<link rel="stylesheet" href="css/toastr.css">
<link rel="stylesheet" href="js/slick/slick.css">
<link rel="stylesheet" href="js/slick/slick-theme.css">

<script src="/js/jquery.scrollbar/jquery.scrollbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="/js/toastr.min.js"></script>
<script src="/js/script.js?v=<?php echo time(); ?>"></script>
<script src="/js/lazysizes.min.js" async></script>