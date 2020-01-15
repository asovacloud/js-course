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

/*
console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));*/

const map = new Map(entries);

/*
console.log(map);
console.log(map.get('job'));
console.log(obj.job);*/

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??');

/*
console.log(map.get(obj));
console.log(map.get(NaN));*/

map.delete('job');
console.log(map.has('job'));
console.log(map.size);
map.clear();
console.log(map.size);
