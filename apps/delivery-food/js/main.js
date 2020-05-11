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
const restaurantTitle = document.querySelector('.section-heading .restaurant-title');
const restaurantRating = document.querySelector('.section-heading .rating');
const restaurantPrice = document.querySelector('.section-heading .price');
const restaurantCategory = document.querySelector('.section-heading .category');
const inputSearch = document.querySelector('.input-search');
const modalBody = document.querySelector('.modal-body');
const modalPricetag = document.querySelector('.modal-pricetag');
const buttonClearCart = document.querySelector('.clear-cart');

let loginUserName = localStorage.getItem('deliveryLogin');

const cart = [];

const loadCart = () => {
  if(localStorage.getItem(loginUserName)) {
    JSON.parse(localStorage.getItem(loginUserName)).forEach(item => cart.push(item));
    localStorage.getItem(loginUserName, cart);
  }
}

const saveCart = () => {
  localStorage.setItem(loginUserName, JSON.stringify(cart));
}

const getData = async function(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error on the address: ${url},
    status of error: ${response}.`);
  }
  return await response.json();
};

const toggleModal = () => {
  modal.classList.toggle("is-open");
};

const toogleModalAuth = () => {
  loginInput.style.borderColor = '';
  loginLabel.style.color = '';
  modalAuth.classList.toggle("is-open");
};

const autorized = () => {
  function logOut() {
    saveCart();

    loginUserName = null;
    cart.length = 0;
    buttonAuth.style.display = '';
    buttonOut.style.display = '';
    userName.style.display = '';
    cartButton.style.display = '';

    localStorage.removeItem('deliveryLogin');
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'flex';
  userName.style.display = 'inline';
  cartButton.style.display = 'flex';
  userName.textContent = loginUserName;
  buttonOut.addEventListener('click', logOut);
  loadCart();
};

const notAutorized = () => {
  function logIn(event) {
    event.preventDefault();
    if (loginInput.value.trim()) {
      loginUserName = loginInput.value;
      localStorage.setItem('deliveryLogin', loginUserName);
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
};

const checkAuth = () => (loginUserName) ? autorized() : notAutorized();

const createCardRestaurants = ({ image, kitchen, name,
  price, stars, products, time_of_delivery: timeOfDelivery,
}) => {

  const dataRestaurant = JSON.stringify({
    kitchen,
    stars,
    price,
    name,
  });

  const card = `
    <a class="card card-restaurant" data-restaurant='${ dataRestaurant }' data-products="${ products }">
      <img src="${ image }" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">${ name }</h3>
          <span class="card-tag tag">${ timeOfDelivery } мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            ${ stars }
          </div>
          <div class="price">От ${ price } ₽</div>
          <div class="category">${ kitchen }</div>
        </div>
      </div>
    </a>
  `;
  
  cardsRestaurants.insertAdjacentHTML('beforeend', card);

};

const createCardGood = ({ description, image,
  price, name, id }) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = id;

  card.innerHTML = `
      <img src="${ image }" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">${ name }</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">${ description }</div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price card-price-bold">${ price } ₽</strong>
        </div>
      </div>
    `;

  cardsMenu.insertAdjacentElement('beforeend', card)
};

const openGoods = event => {
  const target = event.target;

  const restaurant = target.closest('.card-restaurant');

  if (restaurant && loginUserName) {

    cardsMenu.textContent = '';

    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    const {kitchen, stars, price, name,} = JSON.parse(restaurant.dataset.restaurant);

    restaurantTitle.textContent = name;
    restaurantRating.textContent = stars;
    restaurantPrice.textContent = `От ${ price } ₽`;
    restaurantCategory.textContent = kitchen;

    getData(`./db/${ restaurant.dataset.products }`)
      .then(data => data.forEach(createCardGood) );

  } else if (restaurant && !loginUserName) {
    toogleModalAuth();
  }

};

const addToCart = event => {
  const target = event.target;

  const buttonAddToCart = target.closest('.button-add-cart');

  if (buttonAddToCart) {
    const card = buttonAddToCart.closest('.card');
    const title = card.querySelector('.card-title-reg').textContent;
    const cost = card.querySelector('.card-price').textContent;
    const id = card.id;

    const food = cart.find(item => {
      return item.id === id;
    });

    if (!food) {
      cart.push({
        id,
        title,
        cost,
        count: 1,
      });
    } else {
      food.count++;
    }
  }

};

const renderCart = () => {
  modalBody.textContent = '';

  cart.forEach(({ id, title, cost, count }) => {

    const foodRow = `
      <div class="food-row" id="${id}">
        <span class="food-name">${title}</span>
        <strong class="food-price">${cost}</strong>
        <div class="food-counter">
          <button class="counter-button counter-decrement">-</button>
          <span class="counter">${count}</span>
          <button class="counter-button counter-increment">+</button>
        </div>
      </div>
    `;

    modalBody.insertAdjacentHTML('afterbegin', foodRow);
  });

  const totalPrice = cart.reduce((result, item) => {
    return result + (+/\d+/.exec(item.cost) * item.count);
  }, 0);

  modalPricetag.textContent = `${totalPrice} ₽`;

  saveCart();
};

const changeCount = event => {
  const target = event.target;
  if (target.closest('.counter-button')) {
    const id = target.closest('.food-row').id;
    const food = cart.find(item => item.id === id);

    if (target.classList.contains('counter-increment')) {
      food.count++;
    }

    if (target.classList.contains('counter-decrement')) {
      food.count--;
      if (food.count === 0) {
        cart.splice(cart.indexOf(food), 1);
      };
    }

    saveCart();
    renderCart();
  }
};

const clearCartHandle = () => {
  cart.length = 0;
  renderCart();
}

const init = () => {
  getData('./db/partners.json')
    .then(data => data.forEach(createCardRestaurants));

  cardsRestaurants.addEventListener('click', openGoods);

  modalBody.addEventListener('click', changeCount);

  cardsMenu.addEventListener('click', addToCart);

  buttonClearCart.addEventListener('click', clearCartHandle);

  logo.addEventListener('click', () => {
    containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
  });
  cartButton.addEventListener('click', () => {
    renderCart();
    toggleModal();
  });
  close.addEventListener('click', toggleModal);
  inputSearch.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
      const target = event.target;

      const value = target.value.toLowerCase().trim();

      target.value = '';

      if (!value || value.length < 3) {
        target.style.backgroundColor = 'tomato';
        setTimeout(() => {
          target.style.backgroundColor = '';
        }, 2000);
        return;
      }

      const goods = [];

      getData('./db/partners.json')
        .then(data => {
          const products = data.map(item => {
            return item.products;
          });

          products.forEach(product => {
            getData(`./db/${product}`)
              .then( data => {
                goods.push(...data);

                const searchGoods = goods
                  .filter(item => {
                    return item.name.toLowerCase().includes(value);
                  });

                cardsMenu.textContent = '';

                containerPromo.classList.add('hide');
                restaurants.classList.add('hide');
                menu.classList.remove('hide');

                restaurantTitle.textContent = 'Result of the search.';
                restaurantRating.textContent = '';
                restaurantPrice.textContent = '';
                restaurantCategory.textContent = '';

                return searchGoods
              })
              .then(data => {
                if (data.length < 1) {
                  cardsMenu.insertAdjacentHTML('beforeend', '<p>Sorry. Nothing was found on your request.</p>');
                  return;
                }
                return data.forEach(createCardGood);
              });
          });

        })
    }
  });

  checkAuth();
}

init();

new Swiper('.swiper-container', {
    autoplay: {
      delay: 2000,
    },
});