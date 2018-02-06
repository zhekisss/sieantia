var header = $('header'),
    begin = $('.begin'),
    s1OffsetTop = $('#s1').offset().top,
    win = $(window),
    winHeight = win.height(),
    docHeight = $(document).height(),
    logo = $('#logo-container'),
    lastScrollTop = 0,
    menuNav = $('nav a'),
    infoWindow = $('#infoWindow'),
    res = 'null',
    section = $('.section'),
    sectionHeight = section.height(),
    win = $(window),
    nav = $('body nav'),
    ths = $(this),
    elementOffset = [],
    footerHeight = $('#footer').height(),
    scrollDuration = 1000,
    count = 0,
    flag = false, // нужен для того, чтоб предотвращать действия во время анимации
    bn = 0, // индекс текущего блока
    blockNum = 0,
    section = $('.section'), // все блоки
    cnt = section.length, // кол-во блоков
    mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel", // событие прокрутки колеса
    xz = 0,
    materialIcons = $(".material-icons");

var navLi = document.querySelectorAll('nav ul li a');

// console.log(navLi);
//
// menuNav.each(function (i) {
// console.log(menuNav[i]);
// })

setInterval(function() {
    $('.loader').fadeOut(100);
}, 5000);

menuNav.on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var offset = $(href).offset().top;
    scroll(offset, scrollDuration, e.type);

});

function onScroll() {
    var offsetTop = win.scrollTop();

    if (lastScrollTop > offsetTop) {
        infoWindow.text('up');
        res = 'true';
    } else if (lastScrollTop < offsetTop) {
        infoWindow.text('down');
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
    section.each(function(id) {
        var offSet = section[id].offsetTop;
        parallax($(this), 0.6, offSet, winHeight);
    });

    parallax(header, 0.6, 0, 0);

    if (ths.scrollTop() > s1OffsetTop - 100) {

        nav.css('top', '0');
    } else {
        nav.css('top', '-100px');
    }

    blockNum = bn;
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

function callBackFunction() {

    if (bn != 0 && (bn != 5)) {
        section.eq(bn).append('\n<h1>Блок №' + bn + '</h1>');
    }
    flag = false;
}

function scroll(scrollTo, duration) {
    console.log('xz = ' + xz++);
    $('html').animate({
        scrollTop: scrollTo
    }, duration, 'easeInOutCubic', callBackFunction);
}

logo.on('click', function(e) {
    e.preventDefault();
    scroll(0, scrollDuration, e.type);
});

begin.on('click', function(e) {
    e.preventDefault();
    scroll(s1OffsetTop, scrollDuration, e.type);
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 500,
    indicators: true
});

function nextSlide() {
    $('.carousel').carousel('next');
}

var duration = 4000;
var nextSlideInterval = setInterval(nextSlide, duration);

$('.carousel').on('mouseenter', function() {
    clearInterval(nextSlideInterval);

});
$('.carousel').on('mouseleave', function() {
    nextSlideInterval = setInterval(nextSlide, duration);

});



// $('.parallax-window').parallax({
// imageSrc: '/content/themes/default/img/usersthink-stock-image.jpg',
// speed: 0.5,
// positionY: '-70px'
// });

// blocks.eq(0).load('loadblocks.html #b0'); // сразу подгружаем контент в первый блок
// функция определения направления прокрутки колеса
function getDelta(e) {
    var evt = e || window.event;
    evt = evt.originalEvent ? evt.originalEvent : evt;
    return delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
}
// ловим событие прокрутки
$(document).on(mousewheelevt + '.my_wheel', function(e) {


    console.log('Счетчик = ' + count);
    e.preventDefault(); // отменяем обычное поведение (страница не скроллится)
    if (flag) return false; // если flag == true, значит в данный момент происходит анимация

    if (getDelta(e) > 0) {
        if (blockNum <= 0) return false; // если дошли до первого блока, то отменяем дальнейшие действия
        --blockNum; // если блок не первый, то высчитываем индекс предыдущего блока
    } else {
        if (blockNum >= cnt - 1) return false; // если дошли до последнего блока, то отменяем дальнейшие действия
        ++blockNum; // если блок не последний, то высчитываем индекс следующего блока
    }
    count++;
    flag = true; // ставим флаг, указывая, что анимация началась

    scroll(section.eq(blockNum).offset().top, scrollDuration);


    // $('html, body').animate({
    // scrollTop: section.eq(blockNum).offset().top // прокручиваем страницу до вычисленного по индексу блока
    // }, 1000, 'easeInOutCubic', function() {
    // section.eq(bn).text('Блок №' + bn); // подгружаем контент для блока
    // flag = false; // снимаем флаг, указывая, что анимация завершена
    // });
});

//parallax

function parallax(node, backgroundSpeed, offset, winHeight) {
    var thisScrollTop = $(window).scrollTop() * backgroundSpeed;
    offset = offset * backgroundSpeed;
    node.css("background-position", "0 " + (thisScrollTop - offset + winHeight) + "px");
}

// parallax

// LayerSlider

$('#layerslider').layerSlider({
    autoStart: false,
    firstLayer: 2,
    skin: 'borderlesslight',
    skinsPath: '/static/layerslider/skins/'

    // Please make sure that you didn't forget to add a comma to the line endings
    // except the last line!
});

//