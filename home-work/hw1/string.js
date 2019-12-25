let string = 'some test string';

// 1. Take first and last letters from the string.
const FIRST_LETTER = string.charAt(0);
const LAST_LETTER = string.charAt(string.length - 1);
// 1.1 Result
console.log('1. First letter - ',  FIRST_LETTER );
console.log('1. Last letter - ', LAST_LETTER );

// 2. Add uppercase for the first letter and the last letter of the string
console.log('2. Uppercase for the first letter and the last letter - ', FIRST_LETTER.toUpperCase() + string.slice(1, -1) + LAST_LETTER.toUpperCase());

// 3. Find a position of a word 'string'
// 3.1 Result
console.log("3. Position of a word 'string' - ", string.indexOf('string') + 1 );

// 4. Find a position of a second space
let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1 ) + 1;
console.log( '4. Position of a second space', secondSpace );

// 5. Get a sring from the 5th symbol to length on 4 sylbols
console.log( '5. Sring from the 5th symbol to length on 4 sylbols - ', string.substr( 5, 4 ));

// 6. Get a sring from the 5th symbol to the 9th symbol
console.log( '6. Sring from the 5th symbol to the 9th symbol - ', string.substring( 5, 9 ));

// 7. Add new string without the last 6th symbolys
console.log( '7. Remove last 6 symbols - ', string.slice(0, -6) );

// 8. From two variables we should make 2016
const A = 20;
const B = 16;
console.log( '8. Fold two number viriables to string - ', '' + A + B );