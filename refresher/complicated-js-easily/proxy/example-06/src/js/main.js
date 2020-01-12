// Optimization
const userData = [
    { id: 71, name: 'Andrew', job: 'Front-End', age: 33 },
    { id: 22, name: 'Sveta', job: 'HouseWife', age: 33 },
    { id: 73, name: 'Sofiya', job: 'Kindergarten', age: 3 },
    { id: 54, name: 'Lola', job: 'President', age: 26 }
];

// Filter by ID
// console.log( userData.find(user => user.id == 4) );

/*
const index = {};
userData.forEach(i => index[i.id] = i);
console.log(index[73]);*/

const IndexArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {};
        args.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch(prop) {
                    case 'push': return item => {
                        index[item.id] = item;
                        arr[prop].call(arr, item);
                    };
                    case 'findById': return id => index[id];
                    default:
                        return arr[prop]
                }
            }
        });
    }
});

const users = new IndexArray([
    { id: 71, name: 'Andrew', job: 'Front-End', age: 33 },
    { id: 22, name: 'Sveta', job: 'HouseWife', age: 33 },
    { id: 73, name: 'Sofiya', job: 'Kindergarten', age: 3 },
    { id: 54, name: 'Lola', job: 'President', age: 26 }
]);

/*console.log(users);
console.log(users[0]);
console.log(users[2]);*/

users.push({id: 55, name: 'Anita'});

console.log(users[4]);

console.log(users.findById(73));
console.log(users.findById(55));

