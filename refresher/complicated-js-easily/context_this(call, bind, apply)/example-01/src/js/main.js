function hello() {
    console.log('Hello', this);
}

// console.log( hello() );

const person = {
    name: 'Andrew',
    age: 33,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

//console.log( person.sayHelloWindow() );

// console.log( window.hello() );

// console.log( person.logInfo() );

const sveta = {
    name: 'Svetlana',
    age: 25
};

const fnSvetaInfoLog = person.logInfo.bind(sveta);

//console.log( person.logInfo.bind(sveta, 'Front-end', '234-234234-345')() );

//console.log( person.logInfo.call(sveta, 'Front-end', '234-234234-345') );

// console.log( person.logInfo.apply(sveta, ['Front-end', '234-234234-345']) );

//// =====================

const array = [1, 2, 3, 4, 5]

/*
function multBy(arr, n) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * n)
    }
    return newArr;
}

console.log( multBy(array, 5) );*/

Array.prototype.multBy = function (n) {
   return this.map(item => item * n);
};

console.log( array.multBy(20) );

console.log( [5, 8, 16].multBy(6) );