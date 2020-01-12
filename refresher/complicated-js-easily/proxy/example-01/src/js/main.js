// Objects
const person = {
    name: 'Andrew',
    age: 33,
    job: 'Front-End'
};

const op = new Proxy(person, {
    get(target, prop) {
        // console.log(`Getting prop ${prop}`);
        if(!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ');
        }
        return target[prop];
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

// Get
/*console.log(op);
console.log(op.name);*/

// Set
/*op.age = 26;
console.log('op.age ', op.age);
console.log('op ',op);*/

// Set error
// op.qqqq = 2;

// Has
/*
console.log('do we have a field \'age\' in object person? ', 'age' in person);
console.log('do we have a field \'age2\' in object person? ', 'age2' in person);*/

// Delete
/*
delete op.age;
console.log('op ', op);*/

// Check when we don't have a prop into key
console.log('op: ',op);
console.log('op.name: ', op.name);
console.log(op.name_job_age);
console.log(op.name_age_job_job_age_name);


