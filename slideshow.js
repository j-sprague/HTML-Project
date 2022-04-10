$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 700,
        slideMargin: 20,
        captions: true,
        pause: 3000,
        pager:true,
        pagerType: 'short',
        moveSlides: 1
    });
});