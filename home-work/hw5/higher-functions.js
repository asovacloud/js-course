// 1. Create two functions.
function processArr(arr, handler) {
    let label = 'New value: ';

    for (let i = 0; i < arr.length; i++) {
        label += handler( arr[ i ] );
    }

    return label;

}

function joinStrings( symbol ) {
    return symbol[0].toUpperCase() + symbol.slice( 1 );
}

function multiply( symbol ) {
    return symbol * 10 + ' ';
}

function getNameAge( obj ) {
    if ( obj.hasOwnProperty('name') && obj.hasOwnProperty('age') ) {
        return `${obj.name} is ${obj.age} `;
    } else if ( !obj.hasOwnProperty('name') ) {
        return `Unknown is ${obj.age} `;
    } else if ( !obj.hasOwnProperty('age') ) {
        return `${obj.name} is nothing `;
    } else {
        return `Unknown is nothing`;
    }
}

function reverseString( string ) {
    return string.split("").reverse().join("") + ' ';
}

console.log( processArr( ['my', 'name', 'is', 'Trinity'], joinStrings ) );

console.log( processArr( [10, 20, 30], multiply ) );

console.log( processArr( [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}, {}, {name: 'Aaron'}], getNameAge ) );

console.log( processArr( [ 'abc', '123' ], reverseString ) );

// 2. Create an analogue of the method Every
function every( arr, handler ) {

    let label = '';

    if (typeof arr[0] !== undefined) {

        for (let i = 0; i < arr.length; i++) {
            label += handler( arr[ i ], i, arr ) + '\n';
        }

    }

    return label;

}

function getСomparison( number, index, arr ) {
    return `Number ${ number } is ${ number > 5 }`;
}

console.log( every( [ 1, 5, 10], getСomparison ) );