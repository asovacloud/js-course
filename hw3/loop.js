// 1. Create new String with the Uppercase for the each first letter of word.
let string = 'i am in the easycode';
let stringNew = '';

for (let i = 0; i < string.length; i++) {
    let currentSymbol = string[i];

    if (i === 0 && currentSymbol !== ' ') {
        stringNew = currentSymbol.toUpperCase();
    } else if (string[i - 1] === ' ') {
        stringNew += currentSymbol.toUpperCase();
    } else {
        stringNew += currentSymbol;
    }
}

console.log(`New sting: ${stringNew}`);

// 2. Revert back String.
let string1 = 'tseb eht ma i';
let stringNew1 = '';

for (let i = 0; i < string1.length; i++) {
    let lastSymbol = string1[string1.length - i - 1];

    stringNew1 += lastSymbol;
}

console.log(`New sting: ${stringNew1}`);

// 3. Find the factorial of Number
let number = 10;
let factorial = 1;

for (var i = number; i; i--) {
    factorial *= i;
}

console.log(`Factorial of a number of ${number} is: ${factorial} `);

// 4. Create new String without space
let string3 = 'JavaScript is a pretty good language';
let stringNew3 = '';

for (let i = 0; i < string3.length; i++) {
    let currentSymbol = string3[i];

    if (currentSymbol === ' ') {
        continue;
    } else if (i === 0) {
        stringNew3 = currentSymbol.toUpperCase();
    } else if (string3[i - 1] === ' ') {
        stringNew3 += currentSymbol.toUpperCase();
    } else {
        stringNew3 += currentSymbol;
    }
}

console.log(`New sting:${stringNew3}`);

// 5. Create new Array with odd numbers

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arrayNew = [];

for (let key of array) {
    if (key % 2 !== 0) {
        arrayNew[arrayNew.length] = key;
    }
}

console.log(arrayNew);

// 6. Create new Object
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (var key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}
;
console.log(list);
