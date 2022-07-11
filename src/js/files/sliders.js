// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { EffectFade, Pagination, Autoplay } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".home__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".home__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, EffectFade, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 1000,
            effect: "fade",
            // Дополнение к fade
            fadeEffect: {
                // Параллельная
                // смена прозрачности
                crossFade: true,
            },
            pagination: {
                el: ".home__pagination",

                // Буллеты
                type: "bullets",
                clickable: true,
            },
            watchOverflow: true,
            adaptiveHeight: true,
            autoplay: {
                // Пауза между прокруткой
                delay: 4000,
                // Закончить на последнем слайде
                stopOnLastSlide: true,
                // Отключить после ручного переключения
                disableOnInteraction: false,
            },

            loop: true,
        });
    }
}
window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});
