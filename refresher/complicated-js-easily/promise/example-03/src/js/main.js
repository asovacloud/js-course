const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};

// sleep(2000).then(() => console.log('After two seconds'));
// sleep(3000).then(() => console.log('After three seconds'));

Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('All promises was done!'));

Promise.race([sleep(2000), sleep(5000)])
    .then(() => console.log('Race promises!'));