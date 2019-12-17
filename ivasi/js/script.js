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

	/* инициализация SLICK RECIPES */
	$('.js-recipes-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: $('.js-recipes-slider-controls'),
		prevArrow: '<div class="slider-prev recipe-prev"></div>',
		nextArrow: '<div class="slider-next recipe-next"></div>',
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
		// responsive: {		}
	});

	/* инициализация SLICK CERTIFICATES */
	$('.js-certificates-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		adaptiveHeight: true,
		appendArrows: $('.js-certificates-slider-controls'),
		prevArrow: '<div class="slider-prev certificates-prev"></div>',
		nextArrow: '<div class="slider-next certificates-next"></div>',
		// responsive: {		}
	});

	/* Обработка скролла и присвоение классов анимации */
	$(window).scroll(function() {
		$('.animated-scroll').each(function() {
			var blockPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			if(blockPos < topOfWindow + 750) {
				var newClass = $(this).attr('data-animateClass');

				$(this).addClass(newClass).css({'opacity':1});
			}
		});
	});


	/* Certificate popup */
	$(".fancybox").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		autoScale : true,
		fitToView	: false,
	});


	/* Обработка появления списка магазинов */
	$('.js-more-shops').click(function() {
		$(this).fadeOut(function() {
			$('.js-shops-list').slideDown('slow');
		});
	});


	/* Обработка текстов комментариев */
	$('.comment__text').each(function() {
		var commentText = $(this).text();
		var slicedText = commentText.slice(0,150);

		slicedText += slicedText.length < commentText.length ? '...' : '';

		$(this).text(slicedText);
	});






























}());