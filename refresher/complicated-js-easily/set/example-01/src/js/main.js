const set = new Set([1, 2, 3, 3, 3, 4, 6, 5, 5, 7, 6]);

// console.log(set);

set.add(10).add(20).add(30).add(20);

/*
console.log(set);
console.log(set.has(30));
console.log(set.has(62));
console.log(set.size);
console.log(set.delete(1));
console.log(set.size);
console.log(set.clear());
console.log(set.size);*/

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

for(let key of set) {
    console.log(key);
}
