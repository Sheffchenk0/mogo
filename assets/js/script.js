$(document).ready(function() {

    window.addEventListener('scroll', () => {
        let scroll = pageYOffset;
        if (scroll >= $('#Contact').offset().top - 500) {
            toggleActive(4);
        } else if (scroll >= $('#Blog').offset().top - 300) {
            toggleActive(3);
        } else if (scroll >= $('#Work').offset().top - 300) {
            toggleActive(2);
        } else if (scroll >= $('#Service').offset().top - 300) {
            toggleActive(1);
        } else if (scroll >= $('#About').offset().top - 300) {
            toggleActive(0);
            console.log(1);
        }
    });
    $('.drop_menu__item').click((action) => {
        let item = action.currentTarget.children[0];
        if ($(item).hasClass('active')) {
            $(item).removeClass('active');
            return;
        }
        $('.' + item.className).removeClass('active');
        $(item).addClass('active');

    });

    function toggleActive(id, item) {
        item = $('.nav.mobile .nav__link')[id];
        $('.nav.mobile .nav__link').removeClass('active');
        $(item).addClass('active');
        console.log(item.textContent);
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 770) {
            handler2();
        }
    });
    $(".nav__link").click((action) => {
        text = "#" + action.currentTarget.firstChild.textContent;
        console.log(text);
        $("html, body").animate({
            scrollTop: $(text).offset().top
        });
    });

    function handler1() {
        $('.header-mobile').css('max-height', '100%');
        $('.nav.mobile').css('transition', 'transform .6s, background-color 1s');
        $('.nav.mobile').css('transform', 'translateY(75px)');
        $("body").css("overflow", "hidden");
        // $('.nav').css('backdrop-filter', 'blur(9px)');
        $('.nav.mobile').css('background-color', 'rgba(0, 0, 0, 0.48)');
        $('.header-mobile').css('background-color', 'rgba(0, 0, 0, 0.58)');
        $('.header-mobile').css('backdrop-filter', 'blur(7px)');
        $('.nav-toggle').addClass('active');
        // $('.header-mobile').css('box-shadow', 'none');
        $(".nav-toggle").one("click", handler2);
    }

    function handler2() {
        // $('.header').css('height', 'auto');
        $('.nav').css('transform', '');
        $("body").css("overflow-y", "");
        $('.header-mobile').css('background-color', '');
        $('.header-mobile').css('backdrop-filter', '');
        $('.header-mobile').css('box-shadow', '');
        $('.nav-toggle').removeClass('active');
        $(".nav-toggle").one("click", handler1);
    }
    $(".nav-toggle").one("click", handler1);


    // Slick

    $('.data-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        infinity: true,
        dots: true,
    });
});