// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target,{
        get: (obj, prop) => (prop in obj ? obj[prop]: defaultValue)
    })
};

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    });
};

// console.log(Reflect.ownKeys(position));

const data = withHiddenProps({
    name: 'Andrew',
    age: 33,
    _uid: '23523523d'
});

/*console.log(data);
console.log(data.age);*/

/*
console.log(data._uid);
console.log('\'_uid\' in data: ','_uid' in data);
console.log('\'name\' in data','name' in data);*/

/*
for(let key in data) console.log(key);

console.log( Object.keys(data) );

console.log( data );*/
