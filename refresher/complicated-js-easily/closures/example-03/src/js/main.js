function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }
}

const person1 = {
    name: 'Sveta',
    age: 33,
    job: 'Housewife'
};

const person2 = {
    name: 'Sofiya',
    age: 3,
    job: 'Honey child'
};

bind(person1, logPerson)();
bind(person2, logPerson)();