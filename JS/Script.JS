! function(e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var a = e(this.hash); if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({ scrollTop: a.offset().top - 54 }, 1e3, "easeInOutExpo"), !1 } }), e(".js-scroll-trigger").click(function() { e(".navbar-collapse").collapse("hide") }), e("body").scrollspy({ target: "#mainNav", offset: 56 });

    function a() { 100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink") }
    a(), e(window).scroll(a)
}(jQuery);


$(".regular").slick({

    nextArrow: '<img class="slick-next" src="/Img/Icons/arrow-next.svg" >',
    prevArrow: '<img class="slick-prev"  src="/Img/Icons/arrow-prev.svg" >',
    useTransform: true,
    infinite: true,
    slidesPerRow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: 'progressive',

    responsive: [{
            breakpoint: 1024,
            settings: {

                mobileFirst: true,
                centerMode: true,
                variableWidth: true,
                slidesPerRow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {

                centerMode: true,
                variableWidth: true,
            }
        },
        {
            breakpoint: 480,
            settings: {

                centerMode: true,
                slidesPerRow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});