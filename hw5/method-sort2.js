// 1. Sort array
let arr = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

console.log( arr.sort(function (previous, next) {
    return previous.length - next.length;
} ));

// 2. Sort array
let arr1 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

console.log( arr1.sort(function (previous, next) {
    return previous.info.cores - next.info.cores;
} ));

// 3. Sport array
let products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function filterCollection(arr, min, max) {
    let newProducts = arr.filter( item => ( item.price >= min ) && (item.price <= max) );

    return newProducts.sort(function (previous, next) {
        return previous.price - next.price;
    });
}

console.log( filterCollection(products, 15, 30) );