jQuery(document).ready(function() {

	/* Кнопка "консультация"" */
	jQuery("#js-toConsult").on("click", function() {
		var target = jQuery("#form-consult").offset().top - 200;
		jQuery("html, body").animate({scrollTop: target}, 800);
	});

	/* Кнопка вверх */
	jQuery('#js-toTop').click(function() {
		jQuery("body,html").animate({
			scrollTop:0
		}, 800);
		return false;
	});

	/* Чекбокс */
	jQuery('#js-agreement').click(function() {
		var elem = jQuery('#hidden-agreement');
		elem.attr('checked') ? elem.removeAttr('checked') : elem.attr('checked', 'true');
		jQuery(this).toggleClass('checkbox--active').removeClass('consult__input--error');
	});

	/* Маска полей ввода телефона */
	jQuery("#user_phone").mask("+7 (999) 999 99 99");
	jQuery("#user_phone_callback").mask("+7 (999) 999 99 99");

	/* открытие формы коллбэка */
	var form = jQuery('form.callback');
	var dark = jQuery('#js-dark');

	jQuery('#js-callback').click(function() {
		dark.fadeIn(function(){
			form.fadeIn();
		});
	});

	jQuery('#js-callback-close').click(function() {
		form.fadeOut(function(){
			dark.fadeOut();
		});
	})

	/* Прилипающая шапка меньшей высоты */
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() >= 290) {
			jQuery('header').addClass('header-sticky');
		}
		else{
			jQuery('header').removeClass('header-sticky');
		}
	});

	/* валидация формы консультации */
	jQuery('#form-consult').submit(function(e) {
		e.preventDefault();

		var errors = 0;

		var textFields = {
			'lastName' :  jQuery('input[name=lastName]'),
			'name' :  jQuery('input[name=name]'),
			'city' :  jQuery('input[name=city]')
		};

		var phone = jQuery('input[name=phone]');
		var check = jQuery('#js-agreement');

		/* окраска поля с ошибкой */
		jQuery.each(textFields, function(index) {
			var regexp = /^[a-zа-я\s]+$/i;
			if(jQuery(this).val() == '' || !regexp.test(this.val())) {
				errorBackgroundFill(jQuery(this));
				errors++;
			}
		});

		/* отдельная проверка телефона */
		if (phone.val() == '') {
			errorBackgroundFill(phone);
			errors++;
		}
		/* отдельная проверка чекбокса */
		if (!check.hasClass('checkbox--active')) {
			errorBackgroundFill(check);
			errors++;
		}

		if (errors > 0) {
			return false;
		}

		/* отправка сообщения */
		jQuery.ajax({
			url: "/php/send.php",
			method: 'POST',
			data: jQuery('#form-consult').serialize(),
			success: function(data){
				var successMessage = '<div class="success-message">Сообщение отправлено успешно</div>';
				jQuery('#form-consult .fields').html(successMessage);
			}
		});
	});

	/* отправка формы обратной связи */
	jQuery('#form-callback').submit(function(e) {
		e.preventDefault();

		var phone = jQuery('#user_phone_callback');

		/* проверка телефона на заполнение*/
		if (phone.val() == '') {
			errorBackgroundFill(phone);
			return false;
		}

		/* отправка сообщения */
		jQuery.ajax({
			url: "/php/send.php",
			method: 'POST',
			data: jQuery('#form-callback').serialize(),
			success: function(data){
				var successMessage = '<div class="success-message">Сообщение отправлено успешно</div>';
				jQuery('#form-callback .form-inner').html(successMessage);
			}
		});
	});


	/* отмена окраски поля с ошибкой */
	jQuery('.consult__input').change(function() {
		jQuery(this).removeClass('consult__input--error');
	})

	function errorBackgroundFill(elem) {
		elem.addClass('consult__input--error');
	}

	function removeErrorBackgrounFill(elem) {
		elem.removeClass('consult__input--error');
	}
});