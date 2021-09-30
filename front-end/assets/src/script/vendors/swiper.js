
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const homeCarsSwiper = new Swiper('.trendingswiper .swiper', {
    loop: true,
    slidesPerView: 3,
    //slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    //grabCursor: true,
    freeMode: false,
    //containerModifierClass: 'swiper-',
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 3,
        },
        820: {
            slidesPerView: 3,
        },
        1060: {
            slidesPerView: 3,
        },
        1380: {
            slidesPerView: 3,
        },
        1620: {
            slidesPerView: 3,
        },
        1940: {
            slidesPerView: 3,
        },
        2580: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */
});