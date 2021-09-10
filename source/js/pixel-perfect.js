const ppButton = document.querySelector('.pixel-perfect__button');
const ppImg = document.querySelector('.pixel-perfect__img');

ppImg.style.opacity = 0;

let ppOpValue = ppImg.style.opacity;

let i = 0.1;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 87:
      ppOpValue = Number(ppOpValue) + i;
      ppImg.style.opacity = ppOpValue;
      console.log(ppOpValue);
      break;
    case 83:
      ppOpValue = Number(ppOpValue) - i;
      ppImg.style.opacity = ppOpValue;
      console.log(ppOpValue);
      break;
  }
};
