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
