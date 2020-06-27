$(document).ready(function () {
    var swiper = new Swiper(".slideshow .swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
        }
    })

    $(".link-brand .slider-content").bxSlider({
        wrapperClass: false,
        controls: false,
        pager: false,
        maxSlides: 6,
        moveSlides: 6,
        moveSlides: 4,
        slideWidth: 180,
        slideMargin: 5
      });
});