console.log('Request data...');

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');

        const backendData = {
            sever: 'aws',
            port: 2000,
            status: 'working'
        };
        resolve(backendData);
    }, 2000)
});

p.then(data => {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            data.modified = true;
            resolve(data);
        }, 2000)
    });
}).then(clientData => {
    clientData.fromPromise = true;
    return clientData;
}).then(data => {
    console.log('Modified data: ', data);
})
.catch(err => console.error('Error: ', err))
.finally(() => console.log('Finally!'));
