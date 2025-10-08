import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

try {
    // init Swiper:
    const swiper = new Swiper('.works__slider', {

        slidesPerView: 1,
        loop: true,
        modules: [Navigation, Pagination],

        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is >= 1920px
            1920: {
                slidesPerView: 3,
                spaceBetween: 35
            }
        }
    });
} catch (e) {

}
