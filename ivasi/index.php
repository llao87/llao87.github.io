<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Антей - главная страница</title>
    <?php include ($_SERVER['DOCUMENT_ROOT'] . '/header.php');?>
</head>

<body class="home" id="home">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4JLMNS"
        height="0" width="0" style="display:none;visibility:hidden">
    </iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<header>
    <div class="header__menu">
        <div class="logo">
            <div class="logo__photo"></div>
            <div class="logo__shadow"></div>
        </div>

        <div class="container">
            <div class="main-menu-wrap">
                <div class="burger_wrapper">
                    <div class="burger"></div>
                </div>

                <?php include ($_SERVER['DOCUMENT_ROOT'] . '/menu.php');?>

            </div>
        </div>
    </div>

    <div class="home-slider-wrap">
        <div class="home-slider">
            <div>
                <div class="home-slider__slide">
                    <img class="slide__image slide__image--desktop" src="img/head-sliders/slider-pyatnitsa-desck.jpg"
                    alt="Иваси на сковороде">
                    <img class="slide__image slide__image--mobile" src="img/head-sliders/pyatniza.jpg"
                    alt="Иваси на сковороде">
                </div>
            </div>

            <div>
                <div class="home-slider__slide">
                    <img class="slide__image slide__image--desktop"
                    src="img/head-sliders/slider-seledka-kubiki-desck.jpg" alt="Нарезка кубиками">
                    <img class="slide__image slide__image--mobile" src="img/head-sliders/seledka-slider.jpg"
                    alt="Нарезка кубиками">
                </div>
            </div>

            <div>
                <div class="home-slider__slide">
                    <img class="slide__image slide__image--desktop"
                    src="img/head-sliders/slider-seledka-pod-shuboy-desck.jpg" alt="Сельдь под шубой">
                    <img class="slide__image slide__image--mobile" src="img/head-sliders/pod-shuboy-slider.jpg"
                    alt="Сельдь под шубой">
                </div>
            </div>

            <div>
                <div class="home-slider__slide">
                    <img class="slide__image slide__image--desktop" src="img/head-sliders/slider-po-datski-desck.jpg"
                    align="Бутерброд по-датски">
                    <img class="slide__image slide__image--mobile" src="img/head-sliders/po-datski.jpg"
                    align="Бутерброд по-датски">
                </div>
            </div>

            <div>
                <div class="home-slider__slide">
                    <img class="slide__image slide__image--desktop" src="img/head-sliders/slider-avocado-desck.jpg"
                    alt="Бутерброд с авокадо">
                    <img class="slide__image slide__image--mobile" src="img/head-sliders/avocado-slider.png"
                    alt="Бутерброд с авокадо">
                </div>
            </div>
        </div>
    </div>
</header>

<div class="advantages">
    <div class="container">
        <img class="advantages__fish animated fadeInRight delay-0-8s slower" src="img/advantages-fish.svg"
        alt="Большая Иваси">

        <div>
            <div class="bullets">
                <div class="bullet bullet--wild">
                    <a href="http://antey.group/">
                        <img class="bullet__img" src="img/bullet-wild-fish.svg" alt="В гости к рыбакам">
                    </a>
                    <span class="bullet__info">В гости<br>к рыбакам</span>
                </div>

                <div class="bullet bullet--omega3">
                    <a  class="fancybox" data-fancybox-type="iframe" href="img/gab-3-28.pdf">
                        <img class="bullet__img" src="img/bullet-omega-3.svg" alt="Протоколы исследования РАН">
                    </a>
                    <span class="bullet__info">Протоколы<br>исследования<br>РАН</span>
                </div>

                <div class="slogan-wrap">
                    <div class="slogan">Возвращаем легенду</div>

                    <h1 class="line-wave__text">ИВАСИ</h1>
                    <span class="line-wave"></span>
                    <span class="line-wave"></span>
                    <span class="line-wave"></span>
                    <span class="line-wave"></span>
                    <span class="line-wave"></span>
                    <span class="line-wave"></span>
                </div>

                <div class="bullet bullet--ca-mg-i">
                    <a  class="fancybox" data-fancybox-type="iframe" href="img/gab-3-28.pdf">
                        <img class="bullet__img" src="img/bullet-ca-mg-i.svg" alt="Протоколы исследования РАН">
                    </a>
                    <span class="bullet__info">Протоколы<br>исследования<br>РАН</span>
                </div>

                <div class="bullet bullet--mechanic">
                    <a href="#fish_bones" class="js-fish-bones">
                        <img class="bullet__img" src="img/bullet-mechanic.svg" alt="Узнать подробности">
                    </a>
                    <span class="bullet__info">Узнать<br> подробности</span>
                </div>
            </div>
        </div>

        <div>
            <div class="advantages__description animated delay-3s fast flipInX">
                Иваси - это полезная рыба, которая пользовалась большой популярностью во времена СССР.<br>Легендарная
                «Сельдь Иваси» была чем-то наподобие национального достояния.
            </div>
        </div>
    </div>
</div>

<div class="promo js-promo" id="promo">
    <div class="container">
        <div class="product-slider js-promo-slider">
            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-bez-kozhi-v-masle.png"
                                alt="Филе иваси с кожей в масле">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Филе Иваси<br>без кожи в масле</h3>

                            <div class="option-list">240 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-s-kozhey_v-masle.png" alt="Филе Иваси с кожей в масле">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Филе Иваси<br>с кожей в масле</h3>

                            <div class="option-list">240 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-podkopchenaya-v-masle.png"
                                alt="Филе Иваси подкопченое в масле">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Филе Иваси<br>подкопченое в масле</h3>

                            <div class="option-list">240 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-tushka-holodnogo-kopcheniya.png"
                                alt="Тушка Иваси холодного копчения">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Тушка Иваси<br>холодного копчения</h3>

                            <div class="option-list">200 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-ivasi-holod-kopcheniya.png"
                                alt="Филе Иваси с кожей холодного копчения">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Филе Иваси с кожей<br>холодного копчения</h3>

                            <div class="option-list">150 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-kusochki-v-masle-appetitnaya.png"
                                alt='Кусочки Иваси в масле «Аппетитная»'>
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Кусочки Иваси<br>в масле "Аппетитная"</h3>

                            <div class="option-list">210 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-kusochki-v-solevoy-zalivke-firmennaya.png"
                                alt='Кусочки Иваси<br>в солевой заливке «Фирменная»'>
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Кусочки Иваси<br>в солевой заливке "Фирменная"</h3>

                            <div class="option-list">210 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo">
                                <img src="img/products/promo-tushka-solenaya-v-solevoy-zalivke-250.png"
                                alt="Тушка соленая Иваси в солевой заливке 250г">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Тушка соленая Иваси<br>в солевой заливке</h3>

                            <div class="option-list">250 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-slide">
                <div>
                    <div class="slide-inner">
                        <div class="col col--half">
                            <div class="product-slider__photo ">
                                <img src="img/products/promo-tushka-solenaya-v-solevoy-zalivke-500.png"
                                alt="Тушка соленая Иваси в солевой заливке 530г">
                            </div>
                        </div>

                        <div class="col col--half col--info">
                            <h3 class="product-slide__title">Тушка соленая Иваси<br>в солевой заливке</h3>

                            <div class="option-list">530 г</div>

                            <div class="product__rating">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                                <img src="img/star-filled.svg" alt="">
                            </div>

                            <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy go-to-shops">Где
                            купить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="/#" data-target="shops" class="btn btn--orange btn--promo-buy btn--promo-buy-total go-to-shops">Где купить</a>
    </div>

    <div class="promo-nav">
        <div class="container">
            <div class="promo-slider-nav-wrap">

                <div class="js-promo-slider-nav">
                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-file-bez-kozhi-v-masle.png" alt="Филе Иваси без кожи в масле">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-file-s-kozhey-v-masle-slider.png"
                            alt="Филе Иваси с кожей в масле">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-podkopchen-v-masle.png" alt="Филе Иваси подкопченное в масле">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-tushka-holodnogo-kopcheniya.png"
                            alt="Тушка Иваси холодного копчения">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-bez-kozhi-holod-kopcheniya.png"
                            alt="Филе Иваси с кожей холодного копчения">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-kusochki-v-masle.png" alt='Кусочки Иваси в масле «Аппетитная»'>
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-kusochki-v-sol-zalivke.png"
                            alt='Кусочки Иваси в солевой заливке «Фирменная»'>
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-tushka-solen-v-zalivke.png"
                            alt="Тушка соленая Иваси в солевой заливке 250 г">
                        </div>
                    </div>

                    <div>
                        <div class="promo-nav-slide">
                            <img src="img/products/thmb-tushka-solen-v-zalivke-bolshaya.png"
                            alt="Тушка соленая Иваси в солевой заливке 530 г">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div>

<div class="wave-separator"></div>


<div class="recipes" id="recipes">
    <div class="container">
        <div class="recipes-top">
            <h2 class="section-title">Рецепты из иваси</h2>

            <div class="recipies_static">

                <div class="recipies_static_item">

                    <div class="col col--half recipe-main-photo">
                        <a href="seld-pod-shuboi.php" class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/pod-shuboi/pod-shuboy-main.jpg" alt="Салат Сельдь под шубой">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="seld-pod-shuboi.php">Салат «Сельдь под шубой»</a></h4>

                            <div class="details">
                                <div class="time">50 мин.</div>
                                <div class="portion">2 порции</div>
                            </div>

                            <a href="seld-pod-shuboi.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <div class="recipies_static_item">

                    <div class="col col--half recipe-main-photo">
                        <a href="kanape-s-kivi.php"  class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/kanape-s-kivi/kanape-s-kivi-main.jpg" alt="Салат Сельдь под шубой">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="kanape-s-kivi.php">Канапе с иваси и киви</a></h4>

                            <div class="details">
                                <div class="time">5 мин.</div>
                                <div class="portion">4 порции</div>
                            </div>

                            <a href="kanape-s-kivi.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <div class="recipies_static_item hidden">

                    <div class="col col--half recipe-main-photo">
                        <a href="po-datski.php" class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/po-datski/po-datski-main.jpg" alt="Бутерброд с сельдью по-датски">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="po-datski.php">Бутерброд с сельдью по-датски</a></h4>

                            <div class="details">
                                <div class="time">15 мин.</div>
                                <div class="portion">4 порции</div>
                            </div>

                            <a href="po-datski.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <div class="recipies_static_item hidden">

                    <div class="col col--half recipe-main-photo">
                        <a href="russian-friday.php" class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/russian-friday/russkaya-pyatnitsa-main.jpg"
                            alt="Салат Русская пятница">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="russian-friday.php">Салат Русская пятница</a></h4>

                            <div class="details">
                                <div class="time">30 мин.</div>
                                <div class="portion">2 порции</div>
                            </div>

                            <a href="russian-friday.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <div class="recipies_static_item hidden">

                    <div class="col col--half recipe-main-photo">
                        <a href="s-avokado.php" class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/s-avokado/s-avokado-main.jpg"
                            alt="Салат Русская пятница">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="s-avokado.php">Бутерброд с сельдью и авокадо</a></h4>

                            <div class="details">
                                <div class="time">12 мин.</div>
                                <div class="portion">4 порции</div>
                            </div>

                            <a href="s-avokado.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <div class="recipies_static_item hidden">

                    <div class="col col--half recipe-main-photo">
                        <a href="bliny.php" class="recipe recipe--main animated animated-scroll slow" data-animateClass="fadeInLeft">
                            <img src="img/recipes/bliny/bliny-main.jpg"
                            alt="Салат Русская пятница">
                        </a>
                    </div>

                    <div class="col col--half">
                        <div class="recipe recipe__info">
                            <h4 class="recipe-name"><a href="bliny.php">«Русская классика: блины с сельдью»</a></h4>

                            <div class="details">
                                <div class="time">60 мин.</div>
                                <div class="portion">4 порции</div>
                            </div>

                            <a href="bliny.php" class="btn btn--orange btn--pecipe-more">Узнать подробнее</a>
                        </div>
                    </div>
                </div>

                <a href="#" class="btn btn--orange btn--all-pecipe-more js-see-all-recipie">Все рецепты</a>
            </div>


        </div>

        <div class="recipes-slider-wrap">
            <div class="recipes-slider js-recipes-slider">
                <a href="kanape-s-kivi.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/kanape-s-kivi/kanape-s-kivi-main.jpg" alt="Канапе с иваси и киви">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">Канапе с иваси и киви</span>
                    </p>
                </a>

                <a href="po-datski.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/po-datski/po-datski-main.jpg" alt="Бутерброд с сельдью по-датски">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">Бутерброд с сельдью по-датски</span>
                    </p>
                </a>

                <a href="russian-friday.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/russian-friday/russkaya-pyatnitsa-main.jpg"
                        alt="Салат Русская пятница">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">Салат Русская пятница</span>
                    </p>
                </a>

                <a href="seld-pod-shuboi.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/pod-shuboi/pod-shuboy-main.jpg" alt="Салат Сельдь под шубой">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">Салат «Сельдь под шубой»</span>
                    </p>
                </a>

                <a href="s-avokado.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/s-avokado/s-avokado-main.jpg" alt="Бутерброд с сельдью и авокадо">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">Бутерброд с сельдью и авокадо</span>
                    </p>
                </a>

                <a href="bliny.php" class="recipe animated animated-scroll slow" data-animateClass="fadeInUp">
                    <div class="recipe__photo">
                        <img src="img/recipes/bliny/bliny-main.jpg" alt="«Русская классика: блины с сельдью»">
                    </div>

                    <p class="recipe__link">
                        <span class="recipe__caption">«Русская классика: блины с сельдью»</span>
                    </p>
                </a>
            </div>
        </div>

        <div class="slider-controls js-recipes-slider-controls"></div>

        <div class="trava animated animated-scroll delay-0-8s slower" data-animateClass='fadeInDown'></div>
        <div class="svekla animated animated-scroll delay-0-8s slower" data-animateClass='fadeInRight'></div>
    </div>
</div>


<div class="wave-separator"></div>


<div class="comments" id="comments">
    <div class="container">
        <h2 class="section-title">Отзывы</h2>

        <div class="js-comments-slider animated animated-scroll slow" data-animateClass="fadeIn">

            <div>
                <div class="comment">
                    <div class="comment__text-wrap">
                        <div class="comment__text">Яркий насыщенный вкус. Есть кожура с одной
                            стороны. Легко очищается от кожуры. Есть мелкие косточки, иногда даже не мелкие, но меня
                            это не смущает. Вкусная сардина, буду брать ещё.
                        </div>
                    </div>

                    <div class="comment__author">
                        <a target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html" class="author__photo">
                            <img src="img/user.svg" alt="фото пользователя">
                        </a>

                        <div class="author__info">
                            <a class="author__link" target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html"><span class="author__name">Олеся</span></a>
                            <span class="author__type">покупатель</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="comment">
                    <div class="comment__text-wrap">
                        <div class="comment__text">Купила сегодня «иваси» филе холодного копчения,
                            так как рыбу люблю и разбираюсь… угодить мне не так просто. Была приятно удивлена,
                            насколько хороша рыбка. В меру соли, не сухая, легкий аромат копчения!
                        </div>
                    </div>

                    <div class="comment__author">
                        <a target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html" class="author__photo">
                            <img src="img/user.svg" alt="фото пользователя">
                        </a>

                        <div class="author__info">
                            <a class="author__link" target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html"><span class="author__name">Инна</span></a>
                            <span class="author__type">покупатель</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="comment">
                    <div class="comment__text-wrap">
                        <div class="comment__text">Изумительно!!! Очень вкусная, малосолёная и не
                            очень жирная рыбка! С копчёностью тоже всё в норме, в меру. Очень понравилась всей
                            семье. Купила сначала две упаковки, оказалось мало. Ходила ещё покупать.
                        </div>
                    </div>

                    <div class="comment__author">
                        <a target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html" class="author__photo">
                            <img src="img/user.svg" alt="фото пользователя">
                        </a>

                        <div class="author__info">
                            <a class="author__link" target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html"><span class="author__name">Мария</span></a>
                            <span class="author__type">покупатель</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="comment">
                    <div class="comment__text-wrap">
                        <div class="comment__text">Очень вкусная рыбка с подкопченным вкусом и
                            приятным и естественным запахом дымка. В меру маслянистая, плотной структуры, с
                            сохранённой кожицей. Не содержит костей. Вкус приятный и невероятно нежный.
                        </div>
                    </div>

                    <div class="comment__author">
                        <a target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html" class="author__photo">
                            <img src="img/user.svg" alt="фото пользователя">
                        </a>

                        <div class="author__info">
                            <a class="author__link" target="_blank" href="https://vkusvill.ru/goods/sardina-ivasi-file-s-kozhey-kh-k.html"><span class="author__name">Вадим</span></a>
                            <span class="author__type">покупатель</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="comment">
                    <div class="comment__text-wrap">
                        <div class="comment__text">Рыба вкусная, в меру соленая, жирная.</div>
                    </div>

                    <div class="comment__author">
                        <a target="_blank" href="https://www.utkonos.ru/item/3367698/sardina-tikhookeanskaja-ivasi-tushka-v-solevoj-zalivke-firmennaja--530g" class="author__photo">
                            <img src="img/user.svg" alt="фото пользователя">
                        </a>

                        <div class="author__info">
                            <a class="author__link" target="_blank" href="https://www.utkonos.ru/item/3367698/sardina-tikhookeanskaja-ivasi-tushka-v-solevoj-zalivke-firmennaja--530g"><span class="author__name">Людмила</span></a>
                            <span class="author__type">покупатель</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-controls js-comments-slider-controls"></div>

        <div class="quote quote-up   animated animated-scroll delay0-8s slower" data-animateClass="fadeInLeft"></div>
        <div class="quote quote-down animated animated-scroll delay0-8s slower" data-animateClass="fadeInRight"></div>
    </div>
</div>


<div class="faq" id="faq">
    <div class="container">
        <!-- <div class="row"> -->
            <!-- <div class="col-xl-12"> -->
                <h2 class="section-title">Вопросы и ответы</h2>
                <!-- </div> -->

                <div class="faq-inner">
                    <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                        <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                        <div class="faq__buble faq__buble--question">Что такое ИВАСИ?</div>
                    </div>

                    <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                        <div class="faq__buble faq__buble--answer">ИВАСИ – это рыбка семейства сельдевых, которая в переводе
                            с японского означает сардина. Ее особенность заключается в том, что она меняет место обитания
                            раз в 25-30 лет. В последний раз ИВАСИ ловили в местах промысла в1980-х годах. Тогда биомасса
                            сардины достигала 20 млн. тонн и запас практически не ограничивал вылов, вследствие чего она
                            стала настоящей любимицей в СССР.
                        </div>

                        <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                            <img src="img/logo-antei.svg" alt="Антей">
                        </a>
                    </div>
                </div>

                <div class="faq-inner">
                    <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                        <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                        <div class="faq__buble faq__buble--question">Где находятся места промысла?</div>
                    </div>

                    <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                        <div class="faq__buble faq__buble--answer">
                            <div class="fishing">
                                <img class="fishing-map" src="img/faq/fishing-places.svg" alt="Карта промысла">

                                <img class="fishing-point fishing-point-1 animated animated-scroll slow"
                                src="img/faq/fishing-point.svg" data-animateClass="fadeInUp" alt="Точка на карте">
                                <img class="fishing-point fishing-point-2 animated animated-scroll delay-0-5s slow"
                                src="img/faq/fishing-point.svg" data-animateClass="fadeInUp" alt="Точка на карте">
                                <img class="fishing-point fishing-point-3 animated animated-scroll delay-1s slow"
                                src="img/faq/fishing-point.svg" data-animateClass="fadeInUp" alt="Точка на карте">
                                <img class="fishing-point fishing-point-4 animated animated-scroll delay-1-5s slow"
                                src="img/faq/fishing-point.svg" data-animateClass="fadeInUp" alt="Точка на карте">
                                <img class="fishing-point fishing-point-5 animated animated-scroll delay-2s slow"
                                src="img/faq/fishing-point.svg" data-animateClass="fadeInUp" alt="Точка на карте">
                            </div>

                            <p>Сардина ИВАСИ обитает в морях Дальнего Востока, преимущественно в Японском море, нередко
                                заходит в более северные широты вплоть до берегов Камчаткии Курильских островов. Также
                                встречается у берегов Японии, Кореи и Китая, вплоть до северной части Южно-Китайского
                            моря.</p>
                        </div>

                        <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                            <img src="img/logo-antei.svg" alt="Антей">
                        </a>
                    </div>
                </div>
                <!-- </div> -->

                <div class="question-more-wrap js-question-more-wrap">
                    <div class="faq-inner">
                        <div class="col-xl-10 col-xl-offset-2">
                            <div class="faq__row">
                                <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                                <div class="faq__buble faq__buble--question">Почему не все могут выловить ИВАСИ?</div>
                            </div>

                            <div class="faq__row">
                                <div class="faq__buble faq__buble--answer">
                                    <div id="fishing-process">
                                        <ul>
                                            <li class="show"><img class="fishing-process-img" src="img/faq/fishing-ivasi-1.svg"
                                              alt=""></li>
                                              <li><img class="fishing-process-img" src="img/faq/fishing-ivasi-2.svg" alt=""></li>
                                              <li><img class="fishing-process-img" src="img/faq/fishing-ivasi-3.svg" alt=""></li>
                                          </ul>
                                      </div>

                                      <p class="">Из-за того что у сардины Иваси нежное и жирное тельце, которое при подъеме на
                                        корабль легко травмируется, рыбакам пришлось обратиться к необычному методу вылова –
                                        кошельковому неводу. Вначале им окружают косяк рыбы, потом тросом, через кольца в нижней
                                    части, сеть стягивают в «закрытый кошелек».</p>

                                    <p>Из этого огромного сачка живую рыбу специальными насосами выгружают на плавзавод. Этим
                                        способом овладели немногие, включая <a href="http://antey.group/flot.html">компанию
                                        «Антей»</a>, флот которой насчитывает более 20 кораблей </p>
                                    </div>

                                    <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                                        <img src="img/logo-antei.svg" alt="Антей">
                                    </a>
                                </div>
                            </div>


                            <div class="col-xl-10 col-xl-offset-2">
                                <div class="faq__row">
                                    <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                                    <div class="faq__buble faq__buble--question">Какие полезные свойства содержит сардина?</div>
                                </div>

                                <div class="faq__row">
                                    <div class="faq__buble faq__buble--answer">
                                        <img class="answer-img" src="img/faq/vitaminy.svg" alt="">

                                        <p>В Иваси содержится максимум полезных веществ – она богата витаминами группы В, сардина
                                            Иваси лидирует по количеству ОМЕГА-3 в составе - в ней содержится в 6 раз больше ОМЕГА-3
                                        по сравнению с лососем. Она также содержит йод, фосфор, кальций, магний, калий.</p>

                                        <p>Кожа рыбки защищает полезный рыбий жир (в том числе ОМЕГА-3, микроэлементы и витамины) от
                                            окисления. Она не такая жесткая, как у сельди, и ее можно спокойно есть и восполнять
                                        недостающие витамины.</p>
                                    </div>

                                    <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                                        <img src="img/logo-antei.svg" alt="Антей">
                                    </a>
                                </div>
                            </div>


                            <div class="col-xl-10 col-xl-offset-2">
                                <div class="faq__row">
                                    <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                                    <div class="faq__buble faq__buble--question">А как все эти микроэлементы сохраняются в пресервах
                                        и чем эта упаковка отличается от консервов?
                                    </div>
                                </div>

                                <div class="faq__row">
                                    <div class="faq__buble faq__buble--answer">
                                        <img class="answer-img" src="img/faq/how-to-save.svg" alt="">

                                        <p>Пресервы не подвергаются обработке высокими температурами в отличие от консервов. Срок
                                            хранения пресервов меньше, чем консервов, зато у рыбных пресервов более насыщенный вкус,
                                        в них сохранен максимум полезных веществ, к тому же поверхность рыбы не страдает.</p>
                                    </div>

                                    <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                                        <img src="img/logo-antei.svg" alt="Антей">
                                    </a>
                                </div>
                            </div>


                            <div class="col-xl-10 col-xl-offset-2" id="fish_bones">
                                <div class="faq__row">
                                    <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                                    <div class="faq__buble faq__buble--question">Есть ли в филе ИВАСИ кости? Можно ли кормить детей
                                        ИВАСИ?
                                    </div>
                                </div>

                                <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                                    <div class="faq__buble faq__buble--answer">
                                        <img class="answer-img" src="img/faq/otvet-kosti.png" alt="">

                                        <p>Существует два пути удаления костей: химический и механический. Чтобы избежать
                                            использования химических веществ, мы удаляем их механически. Если и остаются какие-то
                                            небольшие косточки, то их можно съесть без дискомфорта, поскольку они гораздо мягче по
                                            сравнению с сельдью. Добавлять Иваси в рацион можно любому – здесь нет каких-либо
                                        возрастных ограничений.</p>
                                    </div>

                                    <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                                        <img src="img/logo-antei.svg" alt="Антей">
                                    </a>
                                </div>
                            </div>


                            <div class="col-xl-10 col-xl-offset-2">
                                <div class="faq__row">
                                    <img class="faq__avatar" src="img/user.svg" alt="аватар отзыва">
                                    <div class="faq__buble faq__buble--question">И что из нее готовить?</div>
                                </div>

                                <div class="faq__row animated animated-scroll fast" data-animateClass="fadeInUp">
                                    <div class="faq__buble faq__buble--answer">
                                        <img class="answer-img" src="img/faq/otvet-recept.png" alt="">

                                        <p>Рецептов с ИВАСИ множество: от традиционных советских блюд до современных рецептов со
                                            всего света. Следите за обновлениями в разделе <a class="go-to-recipes" href="/#recipes"
                                            data-target="recipes">«Рецепты»</a>
                                        </p>
                                    </div>

                                    <a class="faq__avatar faq__avatar--antei" href="https://antey.group/">
                                        <img src="img/logo-antei.svg" alt="Антей">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="js-question-more">
                        <div class="btn btn--orange btn--questions-more">Еще вопросы</div>
                        <div class="btn btn--orange btn--questions-less hide">Свернуть</div>
                    </div>
                </div>

                <span class="bg-elem bg-fish-big animated animated-scroll slower" data-animateClass="fadeInRight"></span>
                <span class="bg-elem bg-fish-small animated animated-scroll slower" data-animateClass="fadeInLeft"></span>
                <span class="bg-elem bg-ship animated animated-scroll slower" data-animateClass="fadeInLeft"></span>
            </div>


            <div class="wave-separator"></div>


            <div class="certificates" id="certificates">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h2 class="section-title">Сертификаты</h2>
                        </div>


                        <div class="col-xl-12">
                            <div class="certificates-slider js-certificates-slider">
                                <div class="certificate">
                                    <a class="fancybox" data-fancybox-type="iframe" href="img/gab-5-41.pdf">
                                        <div class="certificate__frame">
                                            <div class="certificate__photo">
                                                <div class="img_wrapper">
                                                    <img src="img/gab-5-41.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="certificate__title">Протокол исследования РАН</div>
                                    </a>
                                </div>

                                <div class="certificate">
                                    <a class="fancybox" data-fancybox-type="iframe" href="img/gab-3-28.pdf">
                                        <div class="certificate__frame">
                                            <div class="certificate__photo">
                                                <div class="img_wrapper">
                                                    <img src="img/gab-3-28.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="certificate__title">Протокол исследования РАН</div>
                                    </a>
                                </div>

                                <div class="certificate">
                                    <a class="fancybox" data-fancybox-type="iframe" href="img/gab-5-41.pdf">
                                        <div class="certificate__frame">
                                            <div class="certificate__photo">
                                                <div class="img_wrapper">
                                                    <img src="img/gab-5-41.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="certificate__title">Протокол исследования РАН</div>
                                    </a>
                                </div>

                                <div class="certificate">
                                    <a class="fancybox" data-fancybox-type="iframe" href="img/gab-3-28.pdf">
                                        <div class="certificate__frame">
                                            <div class="certificate__photo">
                                                <div class="img_wrapper">
                                                    <img src="img/gab-3-28.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="certificate__title">Протокол исследования РАН</div>
                                    </a>
                                </div>
                            </div>
                            <div class="slider-controls js-certificates-slider-controls"></div>
                        </div>
                    </div>
                </div>


                <span class="bg-elem bg-schoolfish-lt animated animated-scroll delay-2-5s slower"
                data-animateClass="fadeInLeft"></span>
                <span class="bg-elem bg-schoolfish-rt animated animated-scroll delay-2-5s slower"
                data-animateClass="fadeInRight"></span>
                <span class="bg-elem bg-schoolfish-lb animated animated-scroll delay-2-5s slower"
                data-animateClass="fadeInLeft"></span>
                <span class="bg-elem bg-schoolfish-rb animated animated-scroll delay-2-5s slower"
                data-animateClass="fadeInRight"></span>
            </div>


            <div class="shops" id="shops">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h2 class="section-title">Где купить</h2>
                        </div>

                        <div class="col-xl-12 outer-margin-15">
                            <div class="shops-list">
                                <!-- 1 ряд -->
                                <span class="shop-icon"><img src="img/shops/karusel.png" alt=""></span>

                                <a class="shop-icon" href="https://www.perekrestok.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/perekrestok.png" alt="">
                                </a>

                                <span class="shop-icon"><img src="img/shops/pyaterochka.png" alt=""></span>
                                <span class="shop-icon"><img src="img/shops/magnit.png" alt=""></span>
                                <span class="shop-icon"><img src="img/shops/diksi.png" alt=""></span>

                                <!-- 2 ряд -->
                                <a class="shop-icon" href="https://www.auchan.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/ashan.png" alt="">
                                </a>
                                <a class="shop-icon" href="http://atak.testeam.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/atak.png" alt="">
                                </a>
                                <a class="shop-icon" href="https://lenta.com/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/lenta.png" alt="">
                                </a>
                                <a class="shop-icon" href="https://delivery.metro-cc.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/metro.png" alt="">
                                </a>
                                <a class="shop-icon" href="https://vkusvill.ru/goods/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/vkuswille.png" alt="">
                                </a>

                                <!-- 3 ряд -->
                                <a class="shop-icon" href="https://www.utkonos.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/utkonos.png" alt="">
                                </a>
                                <a class="shop-icon" href="https://online.globus.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/globus.png" alt="">
                                </a>
                                <a class="shop-icon" href="https://av.ru/">
                                    <span>Онлайн</span>
                                    <img src="img/shops/azbuka.png" alt="">
                                </a>
                                <span class="shop-icon"><img src="img/shops/miratorg.png" alt=""></span>
                                <span class="shop-icon mobile-hide"><img src="img/shops/avmarket.png" alt=""></span>
                            </div>

                            <div class="shops-list--hidden js-shops-list">
                                <div class="shops-list">
                                    <!-- 4 ряд -->
                                    <span class="shop-icon mobile-show"><img src="img/shops/avmarket.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/billa.png" alt=""></span>
                                    <a class="shop-icon" href="https://my-spar.ru/discount/?utm_campaign=sparnn_catalog">
                                        <span>Онлайн</span>
                                        <img src="img/shops/spar.png" alt="">
                                    </a>
                                    <span class="shop-icon"><img src="img/shops/mariara.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/vysliga.png" alt=""></span>
                                    <a class="shop-icon" href="https://tvoydom.ru/catalog/produkty-1/?page=1">
                                        <span>Онлайн</span>
                                        <img src="img/shops/tvoidom.png" alt="">
                                    </a>

                                    <!-- 5 ряд -->
                                    <a class="shop-icon" href="https://delivery.one/">
                                        <span>Онлайн</span>
                                        <img src="img/shops/deliveryone.png" alt="">
                                    </a>
                                    <span class="shop-icon"><img src="img/shops/rybset.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/ecomorie.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/ohotomorie.png" alt=""></span>
                                    <a class="shop-icon" href="https://seafood-shop.ru/">
                                        <span>Онлайн</span>
                                        <img src="img/shops/ikornyi.png" alt="">
                                    </a>

                                    <!-- 6 ряд -->
                                    <span class="shop-icon"><img src="img/shops/bahetle.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/mindal.png" alt=""></span>
                                    <a class="shop-icon" href="https://shop.slata.ru/">
                                        <span>Онлайн</span>
                                        <img src="img/shops/slata.png" alt="">
                                    </a>
                                    <span class="shop-icon"><img src="img/shops/yabloko.png" alt=""></span>
                                    <span class="shop-icon"><img src="img/shops/rait.png" alt=""></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="center">
                        <div class="btn btn--orange btn--more-shops js-more-shops">Весь список</div>
                        <div class="btn btn--orange btn--less-shops js-less-shops hide">Свернуть</div>
                    </div>
                </div>
            </div>


            <div class="wave-separator"></div>


            <footer class="footer" id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h2 class="section-title">Контакты</h2>
                        </div>

                        <div class="col-xl-4 col-xl-offset-2">
                            <h4 class="block-title">Адрес производства:</h4>
                            <p class="address">109383, г. Москва,<br>Проектируемый проезд 5112, д. 2, стр.6.</p>
                        </div>

                        <div class="col-xl-4 col-xl-offset-1">
                            <div class="phone">8 800 333 46 25</div>
                            <div class="btn btn--orange btn_popup">Оставить отзыв</div>
                        </div>
                    </div>
                </div>
                <div class="to-top-wrap">
                    <img class="to-top js-to-top animated infinite pulse" src="img/naverh-white.svg" alt="Наверх">
                </div>
                <div class="copyrights">© antey.group 2019</div>

                <span class="bg-elem bg-footer-ship animated animated-scroll delay-0-5s slower"
                data-animateClass="fadeInRight"></span>
            </footer>

            <?php include ($_SERVER['DOCUMENT_ROOT'] . '/footer.php');?>

        </body>
        </html>