jQuery(function(){
    // по умолчанию выбираем 1ый товар в слайдере
    var productID = 1;
    var $userProductElem = jQuery('#users-product');
    // Имя продукта
    var productName = '';
    // наименьшая оценка рейтинга для продукта (по умолч)
    var userRating = 1;
    var $userRatingElem = jQuery('#user-rating');
    // форма фидбека
    var feedbackForm = jQuery('.feedback-form');
    // слой-оверлей
    var overlayBgrMask = jQuery('.feedback-form__bgr-mask');


    // SELECT в форме отзыва
    jQuery('#product-selector').selectmenu({
    	appendTo: "#product-selector-wrap",
    	change: function( event, ui ) {
    		productID = ui.item.value;
    		console.log('ИД товара из списка', productID);
    		productName = jQuery('#feedback_form option[value="' + productID + '"]').text();
    		console.log('Имя товара из списка', productName);
    	}
    });

    // Логика смены активности звезд рейтинга
    function changeUserRating(currentStar, direction) {

    	// в зависимости от направления цепляем разные классы
    	var allStars = jQuery(".product__rating--form .rating-star");
    	switch(direction) {
    		case 'click': {
    			allStars.removeClass('rating-star--click-full rating-star--click-empty');
    			classStarFull  = 'rating-star--click-full';
    			classStarEmpty = 'rating-star--click-empty';
    			// сохраняем выбранные баллы
    			userRating = currentStar.attr('data-ratingscore');
    			console.log(productID, ' ', productName, ' ', userRating);
    			break;
    		}
    		case 'mouseover': {
    			allStars.removeClass('rating-star--hover-full rating-star--hover-empty');
    			classStarFull  = 'rating-star--hover-full';
    			classStarEmpty = 'rating-star--hover-empty';
    			break;
    		}
    		case 'mouseout': {
    			classStarFull  = '';
    			classStarEmpty = '';
    			allStars.removeClass('rating-star--hover-full rating-star--hover-empty');
    			break;
    		}

    	}

    	currentStar.prevAll(".rating-star").addClass(classStarFull);
    	currentStar.addClass(classStarFull);
    	currentStar.nextAll(".rating-star").addClass(classStarEmpty);

    	return false;
    }

    // Запуск функции обработки анимации
    $(".product__rating--form .rating-star").on('mouseover mouseout click', function(e) {
    	changeUserRating( $(this), e.type );
    });


    // отображение формы через появление фонового слоя вокруг нее
    // var $bgrMask = jQuery('.feedback-form__bgr-mask');

    // function showBgrMask() {
    // 	if(!$bgrMask.hasClass('active')) {
    // 		$bgrMask.fadeIn(300);
    // 		jQuery('.feedback-form').fadeIn(300);
    // 	} else {
    // 		jQuery('.feedback-form').fadeOut(300);
    // 		$bgrMask.fadeOut(300);
    // 	}
    // 	$bgrMask.toggleClass('active')
    // }

    // jQuery('.btn_popup, .promo .rating-star').click(function(e) {
    // 	// e.preventDefault();
    // 	// var $elem = $(this);

    // 	jQuery('.feedback-form').addClass('active').fadeIn(300);
    // 	jQuery('.feedback-form__bgr-mask').fadeOut(300);
    // });


    // jQuery('.btn_popup, .promo .rating-star').click(function(e) {
    // 	e.preventDefault();
    // 	var $elem = $(this);

    // 	if ($elem.hasClass('rating-star')) {
    // 		// меняем номер продукта на котором вызываем форму
    // 		// (выбираем продукт о котором отзыв)
    // 		jQuery("#product-selector-wrap").hide();
    // 		productID = $elem.parents('.rating').attr('data-productid');
    // 		// jQuery( ".selector" ).selectmenu( "destroy" );
    // 		console.log('Данные всплывашки по нажатию на рейтинг productID = ', productID);
    // 		console.log('Из формы с рейтинга товар ', productID);
    // 	} else {
    // 		jQuery("#product-selector-wrap").show();
    // 	}

    // 	if (!jQuery('.feedback-form').hasClass('active')) {
    // 		// $( ".selector" ).selectmenu( "instance" );
    // 		jQuery('.feedback-form').addClass('active').fadeIn(300);
    // 		jQuery('.feedback-form__bgr-mask').fadeIn(300);
    // 	}
    // });





    // jQuery('.btn_popup, .promo .rating-star').click(function (e) {
    // 	e.preventDefault();
    // 	var $elem = $(this);

    // 	jQuery('.feedback-form').addClass('active').fadeIn(300);
    // 	jQuery('.feedback-form__bgr-mask').fadeOut(300);
    // }
    function showProductSelect(isShow) {
    	if(isShow) {
    		jQuery('#product-selector-wrap').show();
    	} else {
    		jQuery('#product-selector-wrap').hide();
    	}
    }
    function showFeedbackForm() {
    	if (!feedbackForm.hasClass('active')) {
    		feedbackForm.addClass('active').fadeIn(300);
    		overlayBgrMask.fadeIn(300);
    	}
    }

    // Открытие формы отзыва с кнопки в футере
    jQuery('.btn_popup').click(function (e) {
    	console.log('с кнопки');
    	showProductSelect(1);
    	// productID обновляется через метод Change() Selectmenu
    	// ...
    	// имя продукта на котором клик
    	productName = jQuery('#product-selector>option[value="' + productID + '"]').text();
    	console.log(productName, userRating);
    	showFeedbackForm();
    });

    // Открытие формы отзыва с рейтинга на слайдере
    jQuery('.promo .rating-star').click(function (e) {
    	console.log('с рейтинга');
    	showProductSelect(0);
    	// номер продукта на котором клик
    	productID = jQuery(this).parents('.rating').attr('data-productid');
    	// имя продукта на котором клик
    	productName = jQuery(this).parents('.col--info').find('.product-slide__title').text();
    	console.log(productName, userRating);
    	showFeedbackForm();
    });

    // функция закрытия и обнуления формы
    function closeFeedbackForm() {
    	feedbackForm.removeClass('active').fadeOut(300);
    	overlayBgrMask.fadeOut(300);
    }


    // Закрытие формы отзыва по клику на оверлей
    jQuery('.feedback-form__bgr-mask').on('click', function (e) {
    	// останавливаем всплытие нажатия на форму, но без stopPropagation()
    	if ($(e.target).hasClass('feedback-form__bgr-mask')) {
    		closeFeedbackForm();
    	}
    });

    // Закрытие формы отзыва по клику на кнопке закрытия формы
    jQuery('.feedback-form__close').on('click', function () {
    	closeFeedbackForm()
    });














    // обработка формы
    $('#feedback_form').submit(function (e) {
    	/* отменяем стандартное действие при отправке формы */
    	e.preventDefault();
    	$form = $(this);

    	jQuery('#product-name').val(productName);
    	jQuery('#users-product').val(productID);
    	jQuery('#user-rating').val(userRating);



    	// Подготовка данных рейтинга для записи в базу
    	let postData = {
    		'product_id': productID,
    		'rating': $form.find('#user-rating').val(),
    		'product_name': productName,
    		'action': 'write'
    	};
    	// console.log('JSON ', postData);
    	console.log('serialize(): ', $form.serialize());

    	// Запись рейтинга в базу
    	$.ajax({
    		url: '/php/rating.php',
    		method: 'POST',
    		data: postData,
    		success: function(response) {
    			//$currentParent.siblings('.result').html(response);
    		}
    	});

    	// Отправка письма с данными формы на почту
    	$.ajax({
    		type: $form.attr('method'),
    		url:  $form.attr('action'),
    		data: $form.serialize(),
    		success: function (response) {
    			$('.feedback-form__title').hide();
    			$form.html('<div class="form-result"><span class="form-result__success">Успешно!</span><br>Спасибо за ваш отзыв!');
    			$($form)[0].reset();
    		},
    		error: function () {
    			$('.feedback-form__title').hide();
    			$form.html('<div class="form-result"><span class="form-result__error">Ошибка!</span><br>Пожалуйста, попробуйте повторить отправку позже!');
    		}
    	});

    });
});
