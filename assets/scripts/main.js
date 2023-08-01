const email = document.getElementById('email');
const form = document.getElementById('form');
const success = document.getElementById('success');
const mainPage = document.getElementById('main-container');
const mailLink = document.getElementById('place-mail');
const invalid = document.getElementById('invalid');

let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

function renderSucces() {
  mailLink.innerHTML = email.value;
  mainPage.classList.add('active');
  success.classList.add('active');
}
function renderError() {
  email.classList.add('active');
  invalid.style.display = 'unset';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (regx.test(email.value)) {
    renderSucces();
  } else {
    renderError();
  }
});

function dismiss() {
  form.reset();
  mainPage.classList.remove('active');
  success.classList.remove('active');
}
