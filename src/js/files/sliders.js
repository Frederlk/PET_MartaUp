import Swiper, { EffectFade, Pagination, Autoplay } from "swiper";

import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".home__slider")) {
        new Swiper(".home__slider", {
            modules: [Pagination, EffectFade, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 500,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".home__pagination",
                type: "bullets",
                clickable: true,
            },
            watchOverflow: true,
            autoHeight: false,
            autoplay: {
                delay: 4000,
                stopOnLastSlide: true,
                disableOnInteraction: false,
            },
            loop: true,
        });
    }
}
window.addEventListener("load", function (e) {
    initSliders();
});
