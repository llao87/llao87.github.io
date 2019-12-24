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

    /* инициализация SLICK PROMO */
    $('.js-promo-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-promo-slider-nav',
        // fade: true,
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




    jQuery('.btn_popup').on('click', function () {
        jQuery('.feedback-form').fadeIn(300);
        jQuery('.feedback-form__bgr-mask').fadeIn(300);
    });
    jQuery('.feedback-form__bgr-mask').on('click', function () {
        jQuery('.feedback-form').fadeOut(300);
        jQuery('.feedback-form__bgr-mask').fadeOut(300);
    });
    jQuery('.feedback-form__close').on('click', function () {
        jQuery('.feedback-form').fadeOut(300);
        jQuery('.feedback-form__bgr-mask').fadeOut(300);
    });


    jQuery('.js-see-all-recipie').on('click', function (e) {
        e.preventDefault();
        $(this).fadeOut(200);
        jQuery('.recipies_static_item').removeClass('hidden');
    });



    $('#feedback_form').submit(function (e) {
        /* отменяем стандартное действие при отправке формы */
        e.preventDefault();
        $form = $(this);
        
        $.ajax({
            type: $form.attr('method'),
            url:  $form.attr('action'),
            data: $form.serialize(),
            success: function () {
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


    var voted = false;
    var rating = 0;

    $('.stars_to_choose').mousemove(function(e){
        var ratW = $('.stars_to_choose').width();
        var parentOffset = $(this).offset();
        var posX = parseInt((e.pageX - parentOffset.left) / ratW * 100);
        var rating = parseInt(posX/15);

        if(rating > 5) { rating = 5; }

        $(this).attr('data-rating',rating);

        $(this).find('img').attr('src','img/star-empty.svg');

        switch (rating) {
          case 1:
          $(this).find('img').eq(0).attr('src','img/star-filled.svg');
          break;
          case 2:
          $(this).find('img').eq(0).attr('src','img/star-filled.svg');
          $(this).find('img').eq(1).attr('src','img/star-filled.svg');
          break;
          case 3:
          $(this).find('img').eq(0).attr('src','img/star-filled.svg');
          $(this).find('img').eq(1).attr('src','img/star-filled.svg');
          $(this).find('img').eq(2).attr('src','img/star-filled.svg');
          break;
          case 4:
          $(this).find('img').eq(0).attr('src','img/star-filled.svg');
          $(this).find('img').eq(1).attr('src','img/star-filled.svg');
          $(this).find('img').eq(2).attr('src','img/star-filled.svg');
          $(this).find('img').eq(3).attr('src','img/star-filled.svg');
          break;
          case 5:
          $(this).find('img').eq(0).attr('src','img/star-filled.svg');
          $(this).find('img').eq(1).attr('src','img/star-filled.svg');
          $(this).find('img').eq(2).attr('src','img/star-filled.svg');
          $(this).find('img').eq(3).attr('src','img/star-filled.svg');
          $(this).find('img').eq(4).attr('src','img/star-filled.svg');
          break;
          default:
          $(this).find('img').attr('src','img/star-empty.svg');
      }
  });

    $('.stars_to_choose').on('click',function(){
        var rating = $(this).attr('data-rating');
        var name = $(this).parents('.col--info').find('.product-slide__title').text();
        sendData(name, rating);
        voted = true;
    })

    function sendData(name, rating) {
        if(!voted) {
            // toastr.success('Ваша оценка отправлена', {timeOut: 7000});
        } else {
            // toastr.error('Вы голосовали ранее', {timeOut: 7000});
        }
    }




}());