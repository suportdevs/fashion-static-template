(function ($) {
    "use strict";

    jQuery(document).ready(function($) {

    $(".homepage-sliders").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".product-promotions").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".menu-trigger").on("click", function() {
        $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
        return false;
    });
    $(".menu-close, .off-canvar-overlay").on("click", function() {
        $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
    });

    $(".products-list-item").masonry();

    
    });

    jQuery(window).load(function() {
        
    });

}(jQuery));
