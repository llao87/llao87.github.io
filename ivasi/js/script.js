(function () {



	/* инициализация SLICK */
	$('.slider').slick({
		dots: true,
		arrows: false
	});

	/* инициализация SLICK PROMO */
	$('.js-promo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.js-promo-slider-nav',
		fade: true,
		dots: false,
		arrows: false,
		// responsive: {		}
	});

	$('.js-promo-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		focusOnSelect: true,
		appendArrows: $('.promo-slider-nav-wrap'),
		asNavFor: '.js-promo-slider',
		prevArrow: '<div class="slider-prev promo-prev"></div>',
		nextArrow: '<div class="slider-next promo-next"></div>',
		// responsive: {		}
	});

	/* инициализация SLICK PRECIPES */
	$('.js-recipes-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// asNavFor: '.js-promo-slider-nav',
		// fade: true,
		customPaging: function(slick,index) {
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			return '<img src=" ' + targetImage + ' "/>';
		},
		dots: false,
		arrows: true
		// responsive: {		}
	});

	/* инициализация SLICK COMMENTS */
	$('.js-comments-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		adaptiveHeight: true,
		appendArrows: $('.js-comments-slider-controls'),
		prevArrow: '<div class="slider-prev comments-prev"></div>',
		nextArrow: '<div class="slider-next comments-next"></div>',
	});






























	}());