const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
},{
    name: {
        value: 'Andrew',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1986,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            console.log('Age: ', new Date().getFullYear() - this.birthYear);
        },
        set(value) {
            document.body.style.background = 'tomato'
        }
    }
});

// person.name = 'Max';

// console.log(person);

/*delete person.name;
delete person.birthYear;*/

for (let key in person) {
    if(person.hasOwnProperty(key)) {
        console.log('Key:', key, person[key]);
    }
}