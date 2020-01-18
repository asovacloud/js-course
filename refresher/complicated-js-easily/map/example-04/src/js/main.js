const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
];

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60));

const lastVisit = (user) => {
    return visits.get(user)
};

console.log('1',lastVisit(users[0]));
console.log('2',lastVisit(users[1]));
console.log('3',lastVisit(users[2]));