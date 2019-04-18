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

// 3 Create module with String
const setStringFunct = (function () {
    let stringVal = '';

    function setString(value) {
        stringVal = value || '';
        stringVal = stringVal + '';
    }

    function getString() { return stringVal; }

    function getLength() { return `Length on string is ${stringVal.length}` }

    function getReverse() {
        return stringVal.split('').reverse().join('');
    }

    return {
        setString: setString,
        getString: getString,
        getLength: getLength,
        getReverse: getReverse
    };
}());

const string = setStringFunct;

string.setString("I'm the best");
console.log( string.getString() );
console.log( string.getReverse() );
console.log( string.getLength() );
console.log( '---------------' );

string.setString(10500);
console.log( string.getString() );
console.log( string.getReverse() );
console.log( string.getLength() );
console.log( '---------------' );

string.setString();
console.log( string.getString() );
console.log( string.getLength() );
console.log( '---------------' );

string.setString("I'm cleverer than before");
console.log( string.getString() );
console.log( string.getReverse() );
console.log( string.getLength() );

// 4 Create calculator

const Calculator = (function () {
    let number = 0;

    const checkNumber = function(value) {
        if (value !== undefined) {
            return parseInt(value);
        } else {
            return 0;
        }
    }

    function setValue(value) {
        number = checkNumber(value);
        return this;
    }

    function plus(value) {
        number += checkNumber(value);
        return this;
    }

    function minus(value) {
        number -= checkNumber(value);
        return this;
    }

    function multiply(value) {
        number *= checkNumber(value);
        return this;
    }

    function divide(value) {
        number /= checkNumber(value);
        return this;
    }

    function power(value) {
        number = Math.pow(number, checkNumber(value) );
        return this;
    }

    function getValue() {
        console.log( Math.round( number ) );
        return this;
    }

    return {
        setValue: setValue,
        getValue: getValue,
        plus: plus,
        minus: minus,
        multiply: multiply,
        divide: divide,
        power: power
    };
}());

const calculator = Calculator;

calculator.setValue(10);
calculator.plus(5);
calculator.getValue();

calculator.multiply(2);
calculator.getValue();

calculator.divide(10);
calculator.getValue();

calculator.power(2);
calculator.getValue();

calculator.setValue(10).power(2).getValue();
