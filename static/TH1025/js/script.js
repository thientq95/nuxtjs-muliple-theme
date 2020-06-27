$(document).ready(function () {
    $(".slide-show .slider-content").bxSlider({
        wrapperClass: false,
        controls: false,
        pager: false
    });

    $("#toggle-search").click(function () {
        $(".input-search").toggleClass("open");
    });

    $('.link-brand .slider-content').bxSlider({
        wrapperClass: false,
        controls: false,
        pager: false,
        maxSlides: 6,
        moveSlides: 6,
        moveSlides: 4,
        slideWidth: 180,
        slideMargin: 5,
    });

    $('#page-gallery').lightGallery({
        thumbnail: true
    });
})