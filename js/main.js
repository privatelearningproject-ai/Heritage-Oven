(function ($) {
    "use strict";

    /* ==============================
       Spinner (remove after full load)
    ============================== */
    window.addEventListener('load', function () {
        const spinner = document.getElementById('spinner');
        if (spinner) spinner.classList.remove('show');
    });


    /* ==============================
       WOW.js (DESKTOP ONLY)
       Disabled on mobile for performance
    ============================== */
    if (window.innerWidth >= 768 && typeof WOW === "function") {
        setTimeout(() => {
            new WOW().init();
        }, 500);
    }


    /* ==============================
       Fixed Navbar + Back To Top
       (single optimized scroll handler)
    ============================== */
    const $navbar = $('.fixed-top');
    const $backToTop = $('.back-to-top');
    const topBarHeight = $('.top-bar').length ? $('.top-bar').height() : 0;

    $navbar.css('top', topBarHeight);

    $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();

        // Navbar background
        if (scrollTop > 0) {
            $navbar.addClass('bg-dark').css('top', 0);
        } else {
            $navbar.removeClass('bg-dark').css('top', topBarHeight);
        }

        // Back to top button
        if (scrollTop > 300) {
            $backToTop.fadeIn('slow');
        } else {
            $backToTop.fadeOut('slow');
        }
    });

    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
    });


    /* ==============================
       Header Carousel (light + delayed)
    ============================== */
    setTimeout(() => {
        if ($('.header-carousel').length) {
            $('.header-carousel').owlCarousel({
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 800,
                loop: true,
                items: 1,
                dots: true,
                nav: false
            });
        }
    }, 700);


    /* ==============================
       Testimonials Carousel (lazy init)
    ============================== */
    setTimeout(() => {
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                autoplay: true,
                autoplayTimeout: 6000,
                smartSpeed: 800,
                margin: 25,
                loop: true,
                dots: true,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });
        }
    }, 1100);

})(jQuery);
