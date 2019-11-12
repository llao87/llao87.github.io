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
		jQuery(this).toggleClass('checkbox--active');
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
});