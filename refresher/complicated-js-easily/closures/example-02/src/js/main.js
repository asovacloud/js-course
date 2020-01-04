/*
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}

const calc = createCalcFunction(46);

calc(); */

/*
function createIncrementor(n) {
    return function(num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log( addOne(5) );
console.log( addOne(10) );

console.log( addTen(5) );
console.log( addTen(10) );*/

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
const uaUrl = urlGenerator('ua');

console.log( comUrl('google') );
console.log( comUrl('netflix') );

console.log( uaUrl('i') );
console.log( uaUrl('football') );

console.log( comUrl('football') );

