var pi = 3.141592653589793238462643;

// 1. A number of PI round up to 2 decimal places
console.log('1. Round up to 2 decimal places - ', pi.toFixed(2) );

// 2. Find max and min number
console.log('2. Min number is: ', Math.min(15, 11, 16, 12, 51, 12, 13, 51) );
console.log('2. Max number is: ', Math.max(15, 11, 16, 12, 51, 12, 13, 51) );

// 3. Work with Math.random
console.log('3. Math random float with round up to 2 decimal places: ', Math.random().toFixed(2) );
const X = 100;
console.log('3. Get a random integer from 0 to X: ', Math.floor(Math.random() * Math.floor(X) ) );

// 4. Check the result of the calculation 0.6 + 0.7 after round up to 1.3
console.log('4. Check the result of the calculation 0.6 + 0.7: ', (0.6 + 0.7).toFixed(1) );

// 5. Get a number from the string '100$'
console.log( "5. Get a number from the string '100$': ", parseInt( '100$' ) );
