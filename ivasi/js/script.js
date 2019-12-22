(function () {


    /* инициализация SLICK MAIN HOME SLIDER */
    var isMainPage = $('body').hasClass('home') ? true : false;

    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: isMainPage,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3500,
        speed: 3000,
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
                    dots: false
                }
            }
        ]
    });

    $certSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide <= 1 || nextSlide >= 4) {

            $certSlider.slick('slickSetOption', {
                draggable: false
            }, true);
            $certSlider.addClass('no-draggable');
        }
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
        // responsive: {		}
    });


    /* Обработка скролла и присвоение классов анимации */
    $(window).scroll(function () {
        $(document).find('.animated-scroll').each(function () {
            var blockPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (blockPos < topOfWindow + 750) {
                var newClass = $(this).attr('data-animateClass');

                $(this).addClass(newClass).css({'opacity': 1});
            }
        });
    });


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


}());