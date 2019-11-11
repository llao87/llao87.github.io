jQuery(document).ready(function() {

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
});