(function () {


	/* инициализация SLICK MAIN HOME SLIDER */
	var isMainPage = $('body').hasClass('home') ? true : false;

	$('.home-slider').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: isMainPage,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}
		]
	});

	function getPSI() {
		var winWidth = $(window).width();

		$('#otvet-kosti').html('<img class="answer-img" src="img/faq/otvet-kosti.png" alt="">');
		$('#fishing-places').html('<img class="fishing-map" src="img/faq/fishing-places.svg" alt="Карта промысла">');
		$('#vitaminy').html('<img class="answer-img" src="img/faq/vitaminy.svg" alt="">');
		$('#otvet-recept').html('<img class="answer-img" src="img/faq/otvet-recept.png" alt="">');


		$('#promo-bez-kozhi-v-masle').html('<img src="img/products/promo-bez-kozhi-v-masle.png" alt="Филе иваси с кожей в масле">');
		$('#promo-s-kozhey_v-masle').html('<img src="img/products/promo-s-kozhey_v-masle.png" alt="Филе Иваси с кожей в масле">');
		$('#promo-podkopchenaya-v-masle').html('<img src="img/products/promo-podkopchenaya-v-masle.png" alt="Филе Иваси подкопченое в масле">');
		$('#promo-tushka-holodnogo-kopcheniya').html('<img src="img/products/promo-tushka-holodnogo-kopcheniya.png" alt="Тушка Иваси холодного копчения">');
		$('#promo-ivasi-holod-kopcheniya').html('<img src="img/products/promo-ivasi-holod-kopcheniya.png" alt="Филе Иваси с кожей холодного копчения">');
		$('#promo-kusochki-v-masle-appetitnaya').html('<img src="img/products/promo-kusochki-v-masle-appetitnaya.png" alt="Кусочки Иваси в масле «Аппетитная»">');
		$('#promo-kusochki-v-solevoy-zalivke-firmennaya').html('<img src="img/products/promo-kusochki-v-solevoy-zalivke-firmennaya.png" alt="Кусочки Иваси<br>в солевой заливке «Фирменная»">');
		$('#promo-tushka-solenaya-v-solevoy-zalivke-250').html('<img src="img/products/promo-tushka-solenaya-v-solevoy-zalivke-250.png" alt="Тушка соленая Иваси в солевой заливке 250г">');
		$('#promo-tushka-solenaya-v-solevoy-zalivke-500').html('<img src="img/products/promo-tushka-solenaya-v-solevoy-zalivke-500.png" alt="Тушка соленая Иваси в солевой заливке 530г">');
		$('#promo-bez-kozhi-v-masle-200g').html('<img src="img/products/promo-bez-kozhi-v-masle-200g.png" alt="Филе Иваси без кожи в масле 200г">');

		if (winWidth > 700) {
			$('#home_slider_2').html('<img class="slide__image slide__image--desktop" data-lazy="img/head-sliders/slider-seledka-kubiki-desck.jpg" alt="Нарезка кубиками">');
			$('#home_slider_3').html('<img class="slide__image slide__image--desktop" data-lazy="img/head-sliders/slider-seledka-pod-shuboy-desck.jpg" alt="Сельдь под шубой">');
			$('#home_slider_4').html('<img class="slide__image slide__image--desktop" data-lazy="img/head-sliders/slider-po-datski-desck.jpg" alt="Бутерброд по-датски">');
			$('#home_slider_5').html('<img class="slide__image slide__image--desktop" data-lazy="img/head-sliders/slider-avocado-desck.jpg" alt="Бутерброд с авокадо">');
		} else {
			$('#home_slider_2').html('<img class="slide__image slide__image--mobile" data-lazy="img/head-sliders/seledka-slider.jpg" alt="Нарезка кубиками">');
			$('#home_slider_3').html('<img class="slide__image slide__image--mobile" data-lazy="img/head-sliders/pod-shuboy-slider.jpg" alt="Сельдь под шубой">');
			$('#home_slider_4').html('<img class="slide__image slide__image--mobile" data-lazy="img/head-sliders/po-datski.jpg" alt="Бутерброд по-датски">');
			$('#home_slider_5').html('<img class="slide__image slide__image--mobile" data-lazy="img/head-sliders/avocado-slider.jpg" alt="Бутерброд с авокадо">');
		}
	}

	setTimeout(function() {
		getPSI();

		/* За неимением коллбэка у setTimeout() делаем инициализацию слайдера внутри getPSI() */
		/* инициализация SLICK PROMO */
		$('.js-promo-slider').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.js-promo-slider-nav',
			dots: false,
			arrows: false,
			infinite: true,
			responsive: [{

				breakpoint: 700,
				settings: {
					accessibility: true,
					dots: false,
				}
			}]
		});

		$('.js-promo-slider-nav').slick({
			lazyLoad: 'ondemand',
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			focusOnSelect: true,
			appendArrows: $('.promo-slider-nav-wrap'),
			asNavFor: '.js-promo-slider',
			prevArrow: '<div class="slider-prev promo-prev"></div>',
			nextArrow: '<div class="slider-next promo-next"></div>',
			responsive: [{

				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}]
		});

	}, 200);



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
		centerMode: false,
		infinite: true,
		adaptiveHeight: true,
		appendArrows: $('.js-comments-slider-controls'),
		prevArrow: '<div class="slider-prev comments-prev"></div>',
		nextArrow: '<div class="slider-next comments-next"></div>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}
		]
	});

	/* инициализация SLICK CERTIFICATES */
	var $certSlider = $('.js-certificates-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		adaptiveHeight: true,
		centerPadding: 0,

		appendArrows: $('.js-certificates-slider-controls'),
		prevArrow: '<div class="slider-prev certificates-prev"></div>',
		nextArrow: '<div class="slider-next certificates-next"></div>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrow: false
			}
		}
		]
	});

	/* инициализация SLICK ALL PRODUCTS */
	$('.js-all-products-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		adaptiveHeight: true,
		centerPadding: 0,
		appendArrows: $('.js-all-products-slider-controls'),
		prevArrow: '<div class="slider-prev"></div>',
		nextArrow: '<div class="slider-next"></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false
			}
		}
		]
	});


	/* Обработка скролла и присвоение классов анимации */
	function scrollFunc() {
		var topOfWindow = $(window).scrollTop();

		if(topOfWindow > 100) {
			$('.logo').addClass('small');
		} else {
			$('.logo').removeClass('small');
		}


		$(document).find('.animated-scroll').each(function () {
			var blockPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			if (blockPos < topOfWindow + 750) {
				var newClass = $(this).attr('data-animateClass');

				$(this).addClass(newClass).css({'opacity': 1});
			}
		});
	}
	$(document).ready(scrollFunc);
	$(window).on('scroll resize', scrollFunc);


	/* Certificate popup */
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		autoScale: true,
		fitToView: false,
	});


	/* Обработка появления списка магазинов */
	$('.js-more-shops, .js-less-shops').click(function () {
		var btnMore = $('.js-more-shops');
		var btnLess = $('.js-less-shops');

		$('.js-shops-list').slideToggle(600, function () {
			btnMore.toggleClass('hide');
			btnLess.toggleClass('hide');
		});


	});

	/* Обработка появления списка вопросов */
	$('.btn--questions-more, .btn--questions-less').click(function () {
		var btnMore = $('.btn--questions-more');
		var btnLess = $('.btn--questions-less');

		btnMore.hasClass('hide') ? clearInterval(fishingInterval) : theRotator();

		$('.js-question-more-wrap').slideToggle(2000, function () {
			btnMore.toggleClass('hide');
			btnLess.toggleClass('hide');
		});
	});
	$('.js-fish-bones').click(function () {
		$('.js-question-more-wrap').slideToggle(10, function () {
			btnMore.toggleClass('hide');
			btnLess.toggleClass('hide');
		});
	});



	/* Бесконечная смена фотографий в вопросе о вылове иваси */
	function rotateImg() {
        // Берем первую картинку
        var current = ($('#fishing-process li.show') ? $('#fishing-process li.show') : $('#fishing-process li:first'));
        // Берем следующую картинку, когда дойдем до последней начинаем с начала
        var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('#fishing-process li:first') : current.next()) : $('#fishing-process li:first'));
        // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
        next.css({opacity: 0.0})
        .addClass('show')
        .css({opacity: 1.0})
        // Прячем текущую картинку
        current.css({opacity: 0.0})
        .removeClass('show');
    };

    var fishingInterval; // для сброса интервала при сворачивании блока

    function theRotator() {
        // Устанавливаем прозрачность всех картинок в 0
        $('#fishing-process li').css({opacity: 0.0});
        // Берем первую картинку и показываем ее (по пути включаем полную видимость)
        $('#fishing-process li:first').css({opacity: 1.0});
        // Вызываем функцию rotate для запуска слайдшоу
        fishingInterval = setInterval(rotateImg, 2500);
    }


    /* Скролл в комментариях */
    // if (isMainPage) {
    //     $('.scrollbar-outer').scrollbar();
    // }


    /* Прокрутка наверх */
    $('.js-to-top').click(function () {
    	var target = $('body');

    	$("html, body").animate({
    		scrollTop: target.offset().top
    	}, 1000);
    });


    /* Прокрутка до блока из меню */
    $(document).find('.main-menu__link, .go-to-shops, .go-to-recipes').click(function (e) {

    	if ($('body').hasClass('home')) {
    		e.preventDefault();

    		if ($(this).hasClass('main-menu__link')) {
    			$('.main-menu__link').removeClass('link--active');
    			$(this).addClass('link--active');
    		}

    		var className = $(this).attr('data-target');
    		var target = $('.' + className);

    		$("html, body").stop().animate({
    			scrollTop: target.offset().top
    		}, 1000);
    	}
    });


    $('.burger_wrapper').on('click', function () {
    	$(this).find('.burger').toggleClass('burger-active');
    	$('.main-menu').toggleClass('visible');
    });


    $('.main-menu__link').on('click', function () {
    	$('.burger').removeClass('burger-active');
    	$('.main-menu').removeClass('visible');
    });


    $('.recipes-more').on('click',function(e){
    	e.preventDefault();
    	$(this).fadeOut(10);
    	$('.recipes-catalog .recipe').removeClass('hidden');
    })



    jQuery('.js-see-all-recipie').on('click', function (e) {
    	e.preventDefault();
    	$(this).fadeOut(200);
    	jQuery('.recipies_static_item').removeClass('hidden');
    });


    var voted = false;
    var rating = 0;


    function sendData(name, rating) {
    	if(!voted) {
    		// toastr.success('Ваша оценка отправлена', {timeOut: 7000});
    	} else {
            // toastr.error('Вы голосовали ранее', {timeOut: 7000});
        }
    }


}());