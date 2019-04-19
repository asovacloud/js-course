// 1. Create function with timeout
function promiseCreator( time, message) {
    const promise = new Promise(function (resolve, reject){
        setTimeout( function () {
            resolve(message)
        }, time );
    });
    return promise;
};


const prom = promiseCreator(500, 'Ok!');

prom
    .then( (value) => console.log(value))
    .catch((err) => console.log(err));

