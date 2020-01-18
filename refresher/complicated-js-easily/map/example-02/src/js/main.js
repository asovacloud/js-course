const obj = {
    name: 'Andrew',
    age: 33,
    job: 'Front-End'
};

const entries = [
    ['name', 'Andrew'],
    ['age', 33],
    ['job', 'Front-End']
];

const map = new Map(entries);

// Find KEYs, VALUEs
/*for (let [key, value] of map) {
    console.log(key, value)
}*/

// Find VALUEs
/*for(let val of map.values()) {
    console.log(val);
}*/

// Find KEYs
/*for(let key of map.keys()) {
    console.log(key);
}*/

// Map ForEach
map.forEach((val, key, m) => {
    console.log(val, key);
});
