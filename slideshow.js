$(document).ready(function() {
    var preloadImg = new Image();
    preloadImg.src = `images/2021_adv150.jpg`
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        pause: 3000,
        pager:true,
        pagerType: 'short',
        moveSlides: 1
    });
});