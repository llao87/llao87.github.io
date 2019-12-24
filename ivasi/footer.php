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

<script src="/js/jquery-3.4.1.min.js"></script>
<script src="/js/jquery.scrollbar/jquery.scrollbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="/js/slick/slick.min.js"></script>
<script src="/js/script.js?v=<?php echo time(); ?>"></script>