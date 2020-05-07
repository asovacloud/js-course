'use strict';

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const logInForm = document.getElementById('logInForm');
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.getElementById('login');
const loginLabel = document.getElementById('login-label');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('#login .error-message');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');

let loginUserName = localStorage.getItem('loginUserName');

function toggleModal() {
  modal.classList.toggle("is-open");
}

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

function createCardRestaurants() {
  const card = `
    <a class="card card-restaurant">
      <img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">Тануки 1</h3>
          <span class="card-tag tag">60 мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            4.5
          </div>
          <div class="price">От 1 200 ₽</div>
          <div class="category">Суши, роллы</div>
        </div>
      </div>
    </a>
  `;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);

}

function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">Пицца Везувий 211</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
          «Халапенье», соус «Тобаско», томаты.
        </div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">545 ₽</strong>
      </div>
    </div>
  `;

  console.log(card);

  cardsMenu.insertAdjacentElement('beforeend', card)
}

function openGoods(event) {
  const target = event.target;

  const restaurant = target.closest('.card-restaurant');

  if (restaurant && loginUserName) {
    cardsMenu.textContent = '';

    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    createCardGood();
    createCardGood();
    createCardGood();

  } else if (restaurant && !loginUserName) {
    toogleModalAuth();
  }

}

cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', () => {
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');
});
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

checkAuth();
createCardRestaurants();
createCardRestaurants();
createCardRestaurants();
