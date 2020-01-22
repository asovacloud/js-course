document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishlistBtn = document.getElementById('wishlist');
    const  category = document.querySelector('.category');

    const loading = () => {
        goodsWrapper.innerHTML = `<div id="spinner"><div class="spinner-loading"><div><div><div></div>
</div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div>`;
    };

    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');

    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
            <div class="card-img-wrapper">
                <img class="card-img-top" src="${ img }" alt="image description">
                <button class="card-add-wishlist"
                    data-goods-id=${ id }
                ></button>
            </div>
            <div class="card-body justify-content-between">
                <a href="#" class="card-title">${ title }</a>
                <div class="card-price">${ price }</div>
                <div>
                    <button class="card-add-cart">Add to basket</button>
                </div>
            </div>
        </div>`;

        return card;
    };

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
    };

    const renderCard = items => {
        goodsWrapper.textContent = '';
        items.forEach(({id, title, price, imgMin}) => {
            goodsWrapper.append(createCardGoods(id, title, price, imgMin));
        });
    };

    const getGoods = (handler, filter) => {
        loading();
        fetch('./db/db.json')
            .then(response => response.json())
            .then(filter)
            .then(handler);
    };

    const randomSort = item => item.sort(() => Math.random() - 0.5);

    const chooseCategory = event => {
        event.preventDefault();
        const target = event.target;
        if(target.classList.contains('category-item')) {
            const categoryTitle = target.dataset.category;
            getGoods(
                renderCard,
                goods => goods.filter(item => item.category.includes(categoryTitle) )
            );
        }

    };

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    category.addEventListener('click', chooseCategory);

    getGoods(renderCard, randomSort);

});