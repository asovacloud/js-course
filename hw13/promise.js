// 1. Create function with timeout
function promiseCreator( time, message) {
    return new Promise(function (resolve, reject){
        setTimeout( function () {
            resolve(message)
        }, time );
    });
};


const prom = promiseCreator(500, 'Ok!');

prom
    .then( (value) => console.log(value))
    .catch((err) => console.log(err));

// 2. Create class with promise

class Prom {

    constructor() {
        this.mesage = ''

        this.promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve( this.mesage ), 1000);

        });

    }

    resolve( value ) {
        return this.mesage = value;
    }

}

const inst = new Prom();

inst.promise.then(data => console.log( `Response is ${data}` ));

inst.resolve('test');
