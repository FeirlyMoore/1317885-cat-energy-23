document.body.classList.remove('loaded--hiding');

window.onload = function () {
    document.body.classList.add('loaded--hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded--hiding');
    }, 500);
  }

//<!DOCTYPE Liky>
