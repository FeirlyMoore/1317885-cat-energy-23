const preloader = document.querySelector('.preloader');

window.onload = () => {
  document.body.classList.add('loaded-hiding');

  window.setTimeout(() => {
    /* Прелоадер */
    preloader.classList.remove('preloader--active');
    document.body.classList.remove('loaded-hiding');

    /* Анимации */
    const promoWrapper = document.querySelector('.promo__title-wrapper');
    const promoButton = document.querySelector('.promo-button');
    const formAnimItem = document.querySelector('.form-wrapper');
    const formAnimFieldset = document.querySelector('.form__fieldset-wrapper');
    const formAnimTextarea = document.querySelector('.form__textarea');
    const promoPicture = document.querySelector('.promo__picture');
    const products = document.querySelectorAll('.products__item');
    const privilegesItem = document.querySelectorAll('.privileges__list-item');
    const mainTitle = document.querySelector('.main-title');
    const mainSubtitle = document.querySelector('.main-subtitle');
    const formLegends = document.querySelectorAll('.form__legend');

    /* Добавление класса общей анимации ( Scale ) */
    let animScaleArr = [promoWrapper, promoButton, formAnimItem, formAnimFieldset, formAnimTextarea];
    for (let i = 0; i < animScaleArr.length; i++) {
      animScaleArr[i] && animScaleArr[i].classList.add('animation-scale');
    }

    if (products) {
      for (product of products) {
        product.classList.add('animation-scale');
      }
    }

    /* Вариативная анимация Position*/
    promoPicture && promoPicture.classList.add('animation-position');
    mainTitle && mainTitle.classList.add('animation-position');
    mainSubtitle && mainSubtitle.classList.add('animation-position');

    if (formLegends) {
      for (legend of formLegends) {
        legend.classList.add('animation-position');
      }
    }

    /* Вариативная анимация Scale*/
    if (privilegesItem) {
      for (let i = 0; i < privilegesItem.length; i++) {
        let b = i - 0.5, j = 1.5;
        if (b >= 0) j = j+b;
        /*Значение duration передаётся в переменную ( Пользовательское свойство ),
        которая в свою очередь идёт значением в animation*/
        privilegesItem[i].style = `--animation-duration: ${j}s`;
      }
    }
  }, 500);
}

//<!DOCTYPE Liky>

let navToggle = document.querySelector('.nav-toggle-button--js');
let nav = document.querySelector('.main-nav');

nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

navToggle.onclick = function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
}

//<!DOCTYPE Liky>

let scrollLine = document.getElementById('page_progress');

window.onscroll = function scrollFunc() {
    let pageHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scroll = window.pageYOffset;

    let progressPercent = scroll/((pageHeight-innerHeight)/100);
    if (progressPercent == NaN) {
        scrollLine.value = 0;
    } else {
        scrollLine.value = progressPercent.toFixed(2);
    }
    return progressPercent
}

//<!DOCTYPE Liky>

const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.form__send-button');

if (inputs && submit) {
  submit.onclick = () => {
    for (input of inputs) {
      input.classList.add('input-required');
    }
  }
}


//<!DOCTYPE Liky>

/*Изображения*/
const imgOne = document.querySelector('.cat-img-1-js');
const imgTwo = document.querySelector('.cat-img-2-js');
/*Блок управления ( buttons/range )*/
const btnBefore = document.querySelector('.button-before-js');
const range = document.querySelector('.cat-change__range-js');
const btnAfter = document.querySelector('.button-after-js');

if (window.innerWidth <= 767 && imgOne && imgTwo && range) {
  imgOne.style.width = 100 + "%";
  imgTwo.style.width = 0 + "%";
  range.value = 0;
}

if (range || btnBefore || btnAfter) {
  range.oninput = () => {
    /*Значение range принимается за ширину второго елемента*/
    let rangeValue = range.value;
    /*Расчёт ширины первого элемента*/
    let elemOneWidth = 100 - rangeValue;

    imgOne.style.width = elemOneWidth + "%";
    imgTwo.style.width = rangeValue + "%";
  }

  btnBefore.onclick = () => {
    range.value = 0;
    imgOne.style.width = 100 + "%";
    imgTwo.style.width = 0 + "%";
  }

  btnAfter.onclick = () => {
    range.value = 100;
    imgOne.style.width = 0 + "%";
    imgTwo.style.width = 100 + "%";
  }
}
//<!DOCTYPE Liky>


//<!DOCTYPE Liky>
