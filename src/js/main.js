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

new TypeIt('#motto', {
    speed: 60,
    loop: true,
    cursor: false,
    deleteSpeed: 60
})
    .type('Fokus Pada Hasil')
    .pause(400)
    .options({ speed: 200 })
    .delete(5)
    .options({ speed: 60 })
    .pause(300)
    .type('Karya')
    .go();