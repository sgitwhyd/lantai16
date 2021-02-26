var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        285: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});

var swiper = new Swiper('.swiper-container-testi', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

