const people = [
    {
        name: 'Andrew',
        age: 33,
        budget: 100000
    },
    {
        name: 'Sveta',
        age: 18,
        budget: 70000
    },
    {
        name: 'Vasylisa',
        age: 16,
        budget: 10000
    },
    {
        name: 'Viktoriya',
        age: 22,
        budget: 30000
    },
    {
        name: 'Piter',
        age: 26,
        budget: 65000
    }

];

// For
/*for(let i = 0; i < people.length; i++ ) {
    console.log( 'person: ', people[i] );
}

for (let person of people) {
    console.log('person: ', person);
}*/

// ForEach
// people.forEach((person, index, pArr) => console.log('person: ', person));

// Map
// const newPeoples =  people.map(person => `Person name: ${person.name} - ${person.age * 3}`);
// console.log(newPeoples);

// Filter
/*const adults = [];
for(let i = 0; i < people.length; i++) {
    if(people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log( adults );*/

/*const adults = people.filter(person => person.age >= 18);
console.log(adults);*/

// Reduce
/*let amount = 0;
for(let i = 0; i < people.length; i++) {
    totalBudget += people[i].budget;
}
console.log(amount);*/

/*let amount = people.reduce( (total, person) => total + person.budget, 200000);
console.log( amount );*/

// Find
const viktoria = people.find(person => person.name == 'Viktoriya');
console.log(viktoria);

// FindIndex
const viktoriaIndex = people.findIndex(person => person.name == 'Viktoriya');
console.log(viktoriaIndex);
