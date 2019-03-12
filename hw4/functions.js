// 1. Multiply numbers
function multiply( ...numbers ) {
    let sumNumbers = 0;

    if ( numbers.length ) {
        sumNumbers = 1;
        numbers.forEach(function(item) {
            sumNumbers *= item;
        });
    }

    return sumNumbers;
};

console.log( multiply(1,2,3,4) );

// 2. Reverse a string
function reverseString( string ) {
    string = string.split("").reverse().join("");

    return string;
};

console.log( reverseString('test') );


// 3. Transfer symbols to the Unicode
function getCodeStringFromText( string ) {
    let map = Array.prototype.map;
    let a = map.call( string, function(x) { return x.charCodeAt(0); });
    return a.join( ' ' );
};

console.log( getCodeStringFromText('hello') );

//4. Guess the number
function guessNumber( number ) {
    if (number > 0 && number <= 10) {
        let randomNumber = getRandomArbitary(1, 10);

        return compareNumbers(number, randomNumber);
    }
};

function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function compareNumbers(number, randomNumber) {
    if (number !== randomNumber) {
        return `You lose. /n Your number is ${number} but rundom number is ${randomNumber}`;
    } else {
        return `You WIN!!! /n Your number is ${number} and rundom number is ${randomNumber}`;
    }
}

console.log( guessNumber( 5 ) );

//5. Creat massive of numbers
function getArray( number ) {
    if (number > 0) {
        let array = [];
        for(var i = 1; i <= number; i++) {
            array[array.length] = i;
        }

        return array;
    } else {
        return 'Choose another number';
    }

}

console.log( getArray( 10 ) );

//6. Dublicate Array
function doubleArray( array ) {
    return [...array, ...array];
}

console.log ( doubleArray([1,2,3]) );

//7. Remove first element from each Array
function changeCollection( ...array ) {
    let newArray = [];

    array.forEach(function(item, i) {
        item.splice(0, 1);
        newArray[i] = item;
    });

    return newArray;
};

console.log( changeCollection([1,2,3], ['a','b','c'], [10,23,234,'sdf',]) );

//8. Remove first element from each Array