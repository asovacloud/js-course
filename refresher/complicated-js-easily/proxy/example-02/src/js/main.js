const person = {
    name: 'Andrew',
    age: 33,
    job: 'Front-End'
};

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`);
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target.`)
        }
    },
    has(target, prop) {
        return ['age', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting... ', prop);
        delete target[prop];
        return true;
    }
});