const ppButton = document.querySelector('.pixel-perfect__button');
const ppImg = document.querySelector('.pixel-perfect__img');
const pixelPerfect = document.querySelector('.pixel-perfect');

ppImg.style.opacity = 0;
pixelPerfect.classList.add('hidden');

let ppOpValue = ppImg.style.opacity;

let i = 0.1;

document.onkeydown = function(e) {
  if (ppImg.style.opacity <= 0) {
    pixelPerfect.classList.add('hidden');
  } else if (ppImg.style.opacity > 0) {
    pixelPerfect.classList.remove('hidden');
  }

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

//<!DOCTYPE Liky>
