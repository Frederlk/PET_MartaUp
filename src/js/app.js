// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

import "./files/sliders.js";

// Функции работы скроллом
import * as flsScroll from "./files/scroll.js";

// Функционал добавления классов к хедеру при прокрутке
flsScroll.headerScroll();

/* Динамический адаптив */
import "./files/dynamic_adapt.js";
