// 1 Create function with a Lexical scoping. Subtract numbers
const minus = function (numberOne) {
    numberOne = numberOne || 0;
    return function (numberTwo) {
        numberTwo = numberTwo || 0;
        return numberOne - numberTwo;
    }
}


console.log( minus(10)(6) ); // 4
console.log( minus(5)(6) ); // -1
console.log( minus(10)() ); // 10
console.log( minus()(6) ); // -6
console.log( minus()() ); // 0

// 2 Create function with a Lexical scoping. Multiply numbers
const multiplyMaker = function (numberOne) {
    numberOne = numberOne || 0;
    let sum = numberOne;

    return function (numberTwo) {
        numberTwo = numberTwo || 0;

        return sum = sum * numberTwo;
    }

}

const multiply = multiplyMaker(2);

console.log( multiply(2) ); // 4 (2 * 2)
console.log( multiply(1) ); // 4 (4 * 1)
console.log( multiply(3) ); // 12 (4 * 3)
console.log( multiply(10) ); // 120 (12 * 10)

// 3