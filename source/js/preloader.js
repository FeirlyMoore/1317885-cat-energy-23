document.body.classList.remove('loaded-hiding');

window.onload = () => {
  document.body.classList.add('loaded-hiding');

  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded-hiding');

    const products = document.querySelectorAll('.products__item');
    for (product of products) {
      product.classList.add('animation-scale');
      // product.style.animation = "animation-scale 1s ease";
    }

    const promoWrapper = document.querySelector('.promo__title-wrapper');
    if (promoWrapper) promoWrapper.style.animation = "animation-scale 1s ease";

    const promoButton = document.querySelector('.promo-button');
    if (promoButton) promoButton.style.animation = "animation-scale 1s ease";

    const promoPicture = document.querySelector('.promo__picture');
    if (promoPicture) promoPicture.style.animation = "animation-position 1s ease";

    const privilegesItem = document.querySelectorAll('.privileges__list-item');
    if (privilegesItem) {
      for (let i = 0; i < privilegesItem.length; i++) {
        let j = 1.5 + i;
        privilegesItem[i].style.animation = `animation-scale ${j}s ease`;
        // privilegesItem[i].style = `--animation-duration: ${j}s`;
        // j++;
      }
    }

  }, 500);
}

//<!DOCTYPE Liky>
