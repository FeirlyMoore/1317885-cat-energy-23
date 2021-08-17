let navToggle = document.querySelector(".nav-toggle-button--js");
let nav = document.querySelector(".main-nav");
let indexNav = document.querySelector(".nav-list__item-index");
let partnership = document.querySelector(".partnership");

navToggle.onclick = function () {
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  } else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");
  }
}

if (indexNav.classList.contains("nav-list__item--current")) {
  partnership.style.background = "#ffffff";
}

//<!DOCTYPE Liky>
