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

const amount = people.filter(person => person.budget > 50000)
    .map((person) => {
       return {
           info: `${person.name}: (${person.age})`,
           budget: person.budget
       }
    })
    .reduce((total, person) => total + person.budget, 0);
console.log(amount);