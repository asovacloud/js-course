const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const logInForm = document.getElementById('logInForm');

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.getElementById('login');
const loginLabel = document.getElementById('login-label');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('#login .error-message');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

let loginUserName = localStorage.getItem('loginUserName');

function toogleModalAuth() {
  loginInput.style.borderColor = '';
  loginLabel.style.color = '';
  modalAuth.classList.toggle("is-open");
}

function autorized() {
  console.log('Autorized');
  function logOut() {
    loginUserName = null;

    buttonAuth.style.display = '';
    buttonOut.style.display = '';
    userName.style.display = '';

    localStorage.removeItem('loginUserName');

    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'block';
  userName.style.display = 'inline';
  userName.textContent = loginUserName;

  buttonOut.addEventListener('click', logOut);
}

function notAutorized() {
  console.log('Not autorized');

  function logIn(event) {
    event.preventDefault();
    if (loginInput.value.trim()) {
      loginUserName = loginInput.value;
      localStorage.setItem('loginUserName', loginUserName);
      toogleModalAuth();
      buttonAuth.removeEventListener('click', toogleModalAuth);
      closeAuth.removeEventListener('click', toogleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
      loginInput.style.borderColor = 'red';
      loginLabel.style.color = 'red';
    }
    
  }

  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if(loginUserName) {
    autorized();
  } else {
    notAutorized();
  }
}

checkAuth();