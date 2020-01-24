'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishlistBtn = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');
    const  category = document.querySelector('.category');
    const cardCounter = cartBtn.querySelector('.counter');
    const wishlistCounter = wishlistBtn.querySelector('.counter');
    const cartWrapper = document.querySelector('.cart-wrapper');

    const wishlist = [];

    const goodsBasket = {};

    const loading = (nameFunction) => {
        const spinner = `<div id="spinner"><div class="spinner-loading"><div><div><div></div>
</div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div>`;

        if(nameFunction === 'renderCard') {
            goodsWrapper.innerHTML = spinner;
        }

        if(nameFunction === 'renderBasket') {
            cartWrapper.innerHTML = spinner;
        }

    };

    // Request to Server
    const getGoods = (handler, filter) => {
        loading(handler.name);
        fetch('./db/db.json')
            .then(response => response.json())
            .then(filter)
            .then(handler);
    };

    // Generator of Carts
    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `
        <div class="card">
            <div class="card-img-wrapper">
                <img class="card-img-top" src="${ img }" alt="image description">
                    <button class="card-add-wishlist ${wishlist.includes(id) ? 'active' : ''}"
                    data-goods-id=${id} ></button>
            </div>
            <div class="card-body justify-content-between">
                <a href="#" class="card-title">${ title }</a>
                <div class="card-price">${ price }</div>
                <div>
                    <button
                        class="card-add-cart"
                        data-goods-id=${id}
                    >Add to basket</button>
                </div>
            </div>
        </div>`;

        return card;
    };

    // Render goods in basket
    const createCardGoodsBasket = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'goods';

        card.innerHTML = `
        <div class="goods-img-wrapper">
            <img class="goods-img" src="${img}" alt="">

        </div>
        <div class="goods-description">
            <h2 class="goods-title">${title}</h2>
            <p class="goods-price">${price} ₽</p>

        </div>
        <div class="goods-price-count">
            <div class="goods-trigger">
                <button class="goods-add-wishlist ${wishlist.includes(id)} ? 'active' : '' "
                data-goods-id="${id}"></button>
                <button class="goods-delete" data-goods-id="${id}"></button>
            </div>
            <div class="goods-count">${goodsBasket[id]}</div>
        </div>
      `;

        return card;

    };

    // Renders
    const renderCard = goods => {
        goodsWrapper.textContent = '';

        if (goods.length) {
            goods.forEach(({ id, title, price, imgMin}) => {
                goodsWrapper.append(createCardGoods(id, title, price, imgMin));
            });
        } else {
            goodsWrapper.textContent = '❌ Sorry, we don\'t found goods on your request!';
        }
    };

    const renderBasket = goods => {
        cartWrapper.textContent = '';

        if(goods.length) {
            goods.forEach(({id, title, price, imgMin}) => {
                cartWrapper.append(createCardGoodsBasket(id, title, price, imgMin));
            });
        } else {
            cartWrapper.innerHTML = `<div id="cart-empty">Your basket is empty!</div>`;
        }

    };

    // Calculator
    const calcTotalPrice = goods => {
        const sum = goods.reduce((total, item) => total + (item.price * goodsBasket[item.id]) , 0);

        cart.querySelector('.cart-total > span').textContent = sum.toFixed(2);
    };

    const checkCount = () => {
        wishlistCounter.textContent = wishlist.length;
        cardCounter.textContent = Object.keys(goodsBasket).length;
    };

    // Filters
    const showCardBasket = goods => {
        const basketGoods = goods.filter(item => goodsBasket.hasOwnProperty(item.id));
        calcTotalPrice(basketGoods);
        return basketGoods;
    };

    const randomSort = goods => goods.sort(() => Math.random() - 0.5);

    const showWishlist = () => {
        getGoods(renderCard, goods => goods.filter(item => wishlist.includes(item.id)))
    };

    // Work with Storage
    const getCookie = name => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    const cookieQuery = get => {
        if(get) {
            if (getCookie('goodsBasket')) {
                Object.assign(goodsBasket, JSON.parse(getCookie('goodsBasket')))
            }

            checkCount();
        } else {
            document.cookie = `goodsBasket=${JSON.stringify(goodsBasket)};max-age=86400e3`;
        }
    };

    const storageQuery = get => {
        if (get) {
            if (localStorage.getItem('wishlist')) {
                wishlist.push(...JSON.parse(localStorage.getItem('wishlist')));
            }
            checkCount();
        } else {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    };

    // Events
    const closeCart = event => {
        event.preventDefault();
        const target = event.target;

        if(target === cart ||
            target.classList.contains('cart-close') ||
            event.keyCode === 27 )
        {
            cart.style.display = '';
            document.removeEventListener('keyup', closeCart);
        }

    };

    const openCart = event => {
        event.preventDefault();
        cart.style.display = 'flex';
        document.addEventListener('keyup', closeCart);
        getGoods(renderBasket, showCardBasket);
    };

    const chooseCategory = event => {
        event.preventDefault();
        const target = event.target;

        if(target.classList.contains('category-item')) {
            const cat = target.dataset.category;
            getGoods(
                renderCard,
                goods => goods.filter(item => item.category.includes(cat) )
            );
        }

    };

    const searchGoods = event => {
        event.preventDefault();

        const input = event.target.elements.searchGoods;
        const inputValue = input.value.trim();
        if(inputValue !== '') {
            const searchString = new RegExp(inputValue, 'i');
            getGoods(renderCard, goods => goods.filter(item => searchString.test(item.title)));
        } else {
            search.classList.add('error');
            setTimeout( () => {
                search.classList.remove('error');
            }, 2000)
        }

        input.value = '';
    };

    const toggleWishlist = (id, elem) => {
        if (wishlist.includes(id)) {
            wishlist.splice(wishlist.indexOf(id), 1);
            elem.classList.remove('active');
        } else {
            wishlist.push(id);
            elem.classList.add('active');
        }

        checkCount();
        storageQuery();
    };

    const addBasket = id => {
        if (goodsBasket[id]) {
            goodsBasket[id] += 1;
        } else {
            goodsBasket[id] = 1;
        }

        checkCount();
        cookieQuery()
    };

    const removeGoods = (id) => {
        delete goodsBasket[id];
        checkCount();
        cookieQuery();
        getGoods(renderBasket, showCardBasket);
    };

    // Handler
    const handlerGoods = event => {
        const target = event.target;

        if (target.classList.contains('card-add-wishlist')) {
            toggleWishlist(target.dataset.goodsId, target);
        }

        if (target.classList.contains('card-add-cart')) {
            addBasket(target.dataset.goodsId);
        }
    };

    const handlerBasket = event => {
        const target = event.target;

        if (target.classList.contains('goods-add-wishlist')) {
            toggleWishlist(target.dataset.goodsId, target);
        }

        if (target.classList.contains('goods-delete')) {
            removeGoods(target.dataset.goodsId);
        }
    };

    // Initialization
    {
        getGoods(renderCard, randomSort);
        storageQuery('get');
        cookieQuery('get');

        cartBtn.addEventListener('click', openCart);
        cart.addEventListener('click', closeCart);
        category.addEventListener('click', chooseCategory);
        search.addEventListener('submit', searchGoods);
        goodsWrapper.addEventListener('click', handlerGoods);
        cartWrapper.addEventListener('click', handlerBasket);
        wishlistBtn.addEventListener('click', showWishlist);
    }

});