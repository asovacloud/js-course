// 1. Instead of 'IF' use 'SWITCH'
let a = 'block';

switch (a) {
case 'block':
case 'none':
case 'inline':
    {
        console.log(a);
        break;
    }
default:
    console.log('other');
}

// 2. Use ternary operator.
// 2.1
let condition = 'hidden';

condition === 'hidden' ? condition = 'visible' : condition = 'hidden';

console.log(condition);

// 2.2
let number = -4;

number === 0 ? number = 1 : (number < 0) ? number = 'Less then zero' : number *= 10;

console.log(number);

// 2.3
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

car.age > 5 ? (console.log('Need Repair'),
car.needRepair = true) : car.needRepair = false;

console.log(`Need repair: ${car.needRepair}`);