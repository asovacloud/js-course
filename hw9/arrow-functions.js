// 1.1 Rewrite to use an arrow functions

const sum = (...arguments) => {
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) return 0;
    return params.reduce( (prev, next) => prev + next );
}

sum(1, 2, 3, 4); // 10
sum(); // 0

// 2.1 On the object create a function with get a Square
const rectangle = {
    width: 7,
    height: 3,
    getSquare: function () {
        return this.width * this.height;
    }
};

console.log( rectangle.getSquare() );

// 2.2 Create two function: first only price, second price without the discount
const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price
    },
    getPriceWithDiscount: function() {
        const price = this.price;
        const discount = parseInt(this.discount);

        return price * (1 - discount / 100);
    }
};
price.getPrice();
price.getPriceWithDiscount();

// 2.3 Create function with increment of Height
const incrementHeight = {
    height: 0,
    inc: function () { return this.height += 1 }

};
incrementHeight.height = 10;
incrementHeight.inc();
console.log( incrementHeight.height );

// 2.4 reate object with functions which call themself
const numerator = {
    value: 1,
    double: function () {
        this.value += this.value;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value

// 3.1; 3.2 Create Objects
const products = {
    price: 20,
    count: 6,
    getTotal: function () {
        return this.price * this.count;
    }
};

console.log( products.getTotal() );


const detailst = {
    price: 120,
    count: 60
};

detailst.total = products.getTotal.call(detailst);

console.log( detailst );

// 3.3 Get the result of funtion getSquare
let sizes = {width: 5, height: 10};
getSquare = function () {return this.width * this.height};

console.log( getSquare.call(sizes) );

// 3.4 Correct the function getElementHeight to setUp the getHeight function
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
