const person = new Object({
    name: 'Andrew',
    age: 33,
    greet: function(){
        console.log('Welcome to the Mars.');
    }
});

Object.prototype.sayHello = function () {
    console.log('Hello my friend.');
};

const lena = Object.create(person)

console.log(lena);

console.log(lena.greet());

console.log(lena.name);

lena.name = 'Elena'

console.log(lena.name);

// =======================

const str = new String('I am string!');


console.log(str);

str.sayHello()