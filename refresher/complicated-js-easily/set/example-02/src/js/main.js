const set = new Set([1, 2, 3, 3, 3, 4, 6, 5, 5, 7, 6]);

set.add(10).add(20).add(30).add(20);

/*function uniqValues(array) {
    return [...new Set(array)]
}*/

function uniqValues(array) {
    return Array.from(new Set(array))
}

console.log(uniqValues( [1, 1, 2, 2, 4, 4, 4, 5, 6, 7] ));