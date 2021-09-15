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
