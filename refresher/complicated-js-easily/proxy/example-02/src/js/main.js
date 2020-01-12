// Functions
const log = text => `Log: ${text}`

// console.log(log('Yo yo yo !!!!'));
const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...');
        return target.apply(thisArg, args)
    }
});

// Test Functions
console.log(fp('Yo yo yo.'));
console.log(fp('Yo yo yo.').toUpperCase());