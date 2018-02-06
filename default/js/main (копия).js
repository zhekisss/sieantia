var header = $('header'),
    begin = $('.begin'),
    s1OffsetTop = $('#s1').offset().top,
    win = $(window),
    winHeight = win.height(),
    docHeight = $(document).height(),
    logo = $('#logo-container'),
    lastScrollTop = 0,
    menuNav = $('nav a'),
    info_window = $('#info_window'),
    res = 'null',
    section = $('.section'),
    sectionHeight = section.height();
elementOffset = [],
    footerHeight = $('#footer').height(),

    flag = false, // нужен для того, чтоб предотвращать действия во время анимации
    bn = 0, // индекс текущего блока
    section = $('.section'), // все блоки
    cnt = section.length, // кол-во блоков
    mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; // событие прокрутки колеса

//
// menuNav.each(function (i) {
// console.log(menuNav[i]);
// })
//

menuNav.on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var offset = $(href).offset().top;
    scroll(offset);
});

function onScroll() {
    var offsetTop = win.scrollTop();

    if (lastScrollTop > offsetTop) {
        info_window.text('up');
        res = 'true';
    } else if (lastScrollTop < offsetTop) {

        info_window.text('down');
        res = 'false';
    }
    lastScrollTop = offsetTop;
    return res;
}

section.each(function(index, element) {
    elementOffset[index] = $(element).offset().top;
});

win.on('scroll', function(e) {
    console.log(bn);
    if (win.scrollTop() + winHeight > docHeight - footerHeight) {
        bn = elementOffset.length - 1;
    } else {
        for (i = 0; i < elementOffset.length; i++) {
            if ((win.scrollTop() + sectionHeight / 2 > elementOffset[i]) && (win.scrollTop() + sectionHeight / 2 <= elementOffset[i + 1])) {
                bn = i;
            }
        }
    }
    // if (win.scrollTop() <= elementOffset[1] - 1) {
    // bn = 0;
    // console.log(bn);
    // } else if ((win.scrollTop() >= elementOffset[0]) && (win.scrollTop() <= elementOffset[1])) {
    // bn = 1;
    // console.log(bn);
    // } else if ((win.scrollTop() >= elementOffset[1]) && (win.scrollTop() <= elementOffset[2])) {
    // bn = 2;
    // console.log(bn);
    // }
});


// win.bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
// delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
// if (delta >= 0) {
// $('#result').html('Вверх');
// } else {
// $('#result').html('Вниз');
// }
// });
// 
// win.on('scrollDown', function(e){
// e.preventDefault();
// $('html, body').animate({
// scrollTop: s1OffsetTop
// }, 1000);
// });

function scroll(scrollTo, duration = 1000) {
    $('html, body').animate({
        scrollTop: scrollTo
    }, duration, 'easeInOutCubic');
}

logo.on('click', function(e) {
    e.preventDefault();
    scroll(0);

});

begin.on('click', function(e) {
    e.preventDefault();
    scroll(s1OffsetTop);
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 1000,
    indicators: true
});

function nextSlide() {
    $('.carousel').carousel('next');
}

var duration = 7000;
var nextSlideInterval = setInterval(nextSlide, duration);

$('.carousel').on('mouseenter', function() {
    clearInterval(nextSlideInterval);

});
$('.carousel').on('mouseleave', function() {
    nextSlideInterval = setInterval(nextSlide, duration);

});



$('.modal').modal();

// main menu

var win = $(window),
    nav = $('body nav'),
    ths = $(this);
win.on('scroll', function() {
    if (ths.scrollTop() > s1OffsetTop - 100) {

        nav.css('top', '0');
    } else {
        nav.css('top', '-100px');
    }
});

// main menu //

$('.parallax-window').parallax({
    imageSrc: '/content/themes/default/img/16-usersthink-stock-image.jpg',
    speed: 0.5,
    positionY: '-70px'
});

// blocks.eq(0).load('loadblocks.html #b0'); // сразу подгружаем контент в первый блок
// функция определения направления прокрутки колеса
function getDelta(e) {
    var evt = e || window.event;
    evt = evt.originalEvent ? evt.originalEvent : evt;
    return delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
}
// ловим событие прокрутки
$(document).on(mousewheelevt + '.my_wheel', function(e) {
    // $(document).on('wheel.my_wheel', function(e){
    e.preventDefault(); // отменяем обычное поведение (страница не скроллится)
    if (flag) return false; // если flag == true, значит в данный момент происходит анимация
    if (getDelta(e) > 0) {
        if (bn <= 0) return false; // если дошли до первого блока, то отменяем дальнейшие действия
        --bn; // если блок не первый, то высчитываем индекс предыдущего блока
    } else {
        if (bn >= cnt - 1) return false; // если дошли до последнего блока, то отменяем дальнейшие действия
        ++bn; // если блок не последний, то высчитываем индекс следующего блока
    }
    flag = true; // ставим флаг, указывая, что анимация началась
    $('html, body').finish().animate({
        scrollTop: section.eq(bn).offset().top // прокручиваем страницу до вычисленного по индексу блока
    }, 1000, 'easeInOutCubic', function() {
        // section.eq(bn).load('loadblocks.html #b' + bn); // подгружаем контент для блока
        flag = false; // снимаем флаг, указывая, что анимация завершена
    });
});