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

new Typed(".text-title", {
    strings: [
        `Kami Membuat <br> Aplikasi Yang <br>`,
        `Kami Membuat <br> Aplikasi Yang <br> <span>Fokus Pada Hasil</span>`,
    ],
    typeSpeed: 40,
    showCursor: false,
    backDelay: 50,
    backSpeed: 30,
    loop: true,
});