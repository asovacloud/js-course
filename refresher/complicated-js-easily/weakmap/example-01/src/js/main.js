let obj = {name: 'weakmap'};

/*
const arr = [obj];
obj = null;
console.log(obj);
console.log(arr[0]);*/

const map = new WeakMap([
    [obj, 'obj data']
]);

obj = null;
// get set delete has
console.log(map.has(obj));
console.log(map.get(obj));

console.log(map);
