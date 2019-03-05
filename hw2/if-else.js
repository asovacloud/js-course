// 1. If the variable equal 'hidden', we should assign 'visible', else 'hidden'
let condition = 'hidden';

if (condition === 'hidden') {
    condition = 'visible';
} else {
    condition = 'hidden';
}

console.log(condition);

// 2 If the variable equal '0' then assign '1'

let number = -4;

if (number === 0) {
    number = 1;
} else if (number < 0) {
    number = 'Less then zero';
} else {
    number *= 10;
}

console.log(number);

// 3. Check the age of car

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(`Need repair: ${car.needRepair}`);

// 4. Need to add condition to the item

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};

if (item.discount) {
    item.priceWithDiscount = foundDiscount(item.price, item.discount);

    console.log(`Price with discount: ${item.priceWithDiscount}`);
} else {
    console.log(`Price without discount: ${parseInt(item.price)}`);
};

function foundDiscount(price, discount) {
    price = parseInt(price);
    discount = parseInt(discount);

    let discountSum = (price * discount) / 100;

    return price - discountSum;
};

// 5. Price of product larger or less or equals of a max price

let product = {
    name: 'Apple',
    price: '10$'
};

// min price
let min = 10;

// max price
let max = 20;

// Price like a number
let productPrice = parseInt(product.price)

if (productPrice >= min && productPrice <= max) {
    console.log(`Name of product: ${product.name} `);
} else {
    console.log('Product not found');
};
