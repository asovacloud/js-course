const obj = {
    name: 'Andrew',
    age: 33,
    job: 'Front-End',
    '{}': 'yo yo yo'
};

const entries = [
    ['name', 'Andrew'],
    ['age', 33],
    ['job', 'Front-End']
];

const map = new Map(entries);

// Convert to Array
// const array = [...map];
const array = Array.from(map);
console.log(array);

// Convert to Object
const mapObj = Object.fromEntries(map.entries());
console.log(mapObj);