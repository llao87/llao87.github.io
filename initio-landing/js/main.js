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
	})

	/* Чекбокс */
	jQuery('#js-agreement').click(function() {
		var elem = jQuery('#hidden-agreement')
		elem.attr('checked') ? elem.removeAttr('checked') : elem.attr('checked', 'true');
		jQuery(this).toggleClass('checkbox--active');
	})

	/* Маска полей ввода телефона */
	jQuery("#user_phone").mask("+7 (999) 999 99 99");
});