<?php

/*  ---------------------  */
/*  КОНТАКТНАЯ ИНФОРМАЦИЯ  */
/*  ---------------------  */

/* Телефоны дял разных источников перехода */
$dafaultPhone = '+7 951 668 90 91';
$googlePhone = '+7 951 668 90 91';
$youtubePhone = '+7 931 229 79 39';
$instagramPhone = '+7 965 064 08 54';

/* Почты на которые принимать сообщения с сайта для разных источников перехода */
$defaultManagers = [
	'admin@admin.ru'
];

$googleManagers = [
	'm.rozental@ioprc-spb.ru',
	'autozaim24.com@gmail.com',
	'a.rudkov@icloud.com'
];

$instagramManagers = [
	'office@ioprc-spb.ru',
	'autozaim24.com@gmail.com',
	'a.rudkov@icloud.com'
];

$youtubeManagers = [
	'office@ioprc-spb.ru',
	'autozaim24.com@gmail.com',
	'a.rudkov@icloud.com'
];

/*  ------------------  */
/*  ТЕКСТЫ ПРОМО БЛОКА  */
/*  ------------------  */

/* Текст на кнопке обратного звонка */
$callback_text = 'Позвонить';

/* Текст на кнопке перехода к форме консультации */
$consult_text = 'Консультация';

/*
Заголовок промоблока.
Чтобы слова переносились и заливались
фоном правильно, их надо вписывать как элементы массива.
Каждое отдельное слово надо писать с большой буквы.
В конце каждого отдельного слова должен быть пробел (внутри кавычек)
и запятая (после кавычек и кроме последнего слова, за ним необязательно).
Если слово одно - его надо оформить так же, как если бы их было
много.

ПРИМЕРЫ:

$promo_text = [
	'Единственное слово '
];

Или

$promo_text = [
	'Первое слово ',
	'Второе слово ',
	... ,
	'Последнее слово '
];
*/
$promo_text = [
	'Всесезонный ',
	'Пилинг IO PRC '
];

/* Подпись под заголовком промоблока */
$promo_subtext = 'Pro recreation complex IO PRC';


/*  --------------------------  */
/*  ТЕКСТЫ СПИСКОВ ПРЕИМУЩЕСТВ  */
/*  --------------------------  */

/*
Заголовок первого списка преимуществ.
Чтобы слова переносились и заливались фоном правильно, их надо
вписывать как элементы массива. Каждое отдельное слово надо писать
с большой буквы. В конце каждого отдельного слова должен быть
пробел (внутри кавычек) и запятая (после кавычек и кроме последнего
слова, за ним необязательно).
Если слово одно - его надо оформить так же, как если бы их было
много.

ПРИМЕРЫ:

$promo_text = [
	'Единственное слово '
];

Или

$leftlist_header = [
	'Первое слово ',
	'Второе слово ',
	... ,
	'Последнее слово '
];
*/
$leftlist_header = [
	'Устраняет '
];

/*
Пункты первого списка преимуществ.
Пункты перечисляются аналогично словам в заголовке списка преимуществ.

ПРИМЕР:
$leftlist_options = [
	'Первый пункт ',
	'Второй пункт ',
	... ,
	'Последний пункт '
];
*/
$leftlist_options = [
	'Признаки старения кожи',
	'Растяжки',
	'Рубцы',
	'Пигментные пятна',
	'Пост-АКНЕ',
	'Себорейный дерматит, гиперкератоз',
	'Легкие тату',
	'Фотостарение кожи'
];



/* Заголовок первого списка преимуществ.*/
$rightlist_header = [
	'Гарантированный ',
	'Результат '
];

/* Пункты первого списка преимуществ. */
$rightlist_options = [
	'Ровный и здоровый цвет лица',
	'Гладкая кожа',
	'Уменьшение глубины морщин',
	'убедительный лифтинг-эффект и уплотнение кожи',
	'Повышение упругости и эластичности кожи',
	'Осветление пигментных пятен',
	'Сужение пор',
	'Коррекция рубцов и растяжек',
	'Профилактика появления поствоспалительной гиперпигментации'
];



/*  -------------------------  */
/*  ТЕКСТЫ КАТАЛОГА ПРОДУКЦИИ  */
/*  -------------------------  */

/* Заголовок каталога.*/
$catalog_header = [
	'Профессиональные ',
	'Продукты '
];

/* Подпись 1 товара */
$item_1_caption = 'Очищающая пенка-мусс Pro-Active Cleansing Foam IO PRF';

/* Подпись 2 товара */
$item_2_caption = 'Всесезонный пилинг Pro-Recreation Complex IO PRC';

/* Подпись 3 товара */
$item_3_caption = 'Кислородная маска с перфтордекалином и гиалуроновой кислотой Pro-Oxygen Mask Optimizer IO PRM';



/*  --------------------------------  */
/*  ТЕКСТЫ БЛОКА ЗАКАЗА КОНСУЛЬТАЦИИ  */
/*  --------------------------------  */

/* Заголовок блока заказа консультации.*/
$consult_header = [
	'Получить ',
	'Консультацию ',
	'О продукте '
];

/* Тексты на форме. Эти тексты не меняют поведение формы, они являются визуализацией */
$last_name_label = 'Фамилия';
$name_label = 'Имя';
$city_label = 'Город';
$phone_label = 'Телефон';
$message_label = 'Ваше сообщение';

/* Подпись кнопки "отправить" */
$consult_submit_text = "Отправить";

/* Текст сообщения о согласии на обработку персональных данных */
$agreement_text = 'Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных.';


/*  ------------------------------------  */
/*  ТЕКСТЫ ФОРМЫ ЗАКАЗА ОБРАТНОГО ЗВОНКА  */
/*  ------------------------------------  */

/* Заголовок формы обратного звонка */
$callback_header = 'Заказать обратный звонок';

/* Подпись к полю телефона */
$callback_phone_label = 'Телефон';