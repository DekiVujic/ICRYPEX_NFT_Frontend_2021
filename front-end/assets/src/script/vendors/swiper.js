
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const homeCategorySwiper = new Swiper('.homecatswiper .swiper', {
    loop: true,
    slidesPerView: 3,
    //slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,
    centeredSlidesBounds: false,
    watchSlidesProgress: true,
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
        el: ".homecatswiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.homecatswiper-prev',
        nextEl: '.homecatswiper-next'
    },
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */
});

const homeForYouSwiper = new Swiper('.foryouswiper .swiper', {
    loop: true,
    slidesPerView: 4,
    //slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,
    centeredSlidesBounds: false,
    watchSlidesProgress: true,
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
            slidesPerView: 4,
        },
        1940: {
            slidesPerView: 4,
        },
        2580: {
            slidesPerView: 5,
        },
    },
    pagination: {
        el: ".foryouswiperswiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.foryouswiper-prev',
        nextEl: '.foryouswiper-next'
    },
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */
});