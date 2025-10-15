$(document).ready(function(){
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    const swiperVisual = new Swiper('.swiper-visual', {
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-visual-pagination',
        },
        navigation: {
            nextEl: '.swiper-visual-button-prev',
            prevEl: '.swiper-visual-button-next',
        }
    });

    const swiperQuick = new Swiper('.swiper-quick-btn', {
        loop: true,
        pagination: {
            el: '.swiper-quick-btn-pagination',
        },
        navigation: {
            nextEl: '.swiper-quick-btn-button-prev',
            prevEl: '.swiper-quick-btn-button-next',
        }
    });

    function setModelPadding() {
        var $activeContentBox = $('.model .content .content_box.active');
        if ($activeContentBox.length) {
            var contentHeight = $activeContentBox.outerHeight();
            $('.model').css('padding-bottom', contentHeight + 'px');
        }
    }
    $('.model .content .age_list ul li').on('click', function() {
        var index = $(this).index();
        $('.model .content .age_list ul li').removeClass('active');
        $('.model .content .content_box').removeClass('active');
        $(this).addClass('active');
        $('.model .content .content_box').eq(index).addClass('active');
    });
    setModelPadding();
    $(window).on('resize', setModelPadding);

    const swiperCarSlide = new Swiper('.swiper-car_slide', {
        loop: true,
        pagination: {
            el: '.car_slide-pagination',
        },
        navigation: {
            nextEl: '.car_slide-prev',
            prevEl: '.car_slide-next',
        }
    });
});