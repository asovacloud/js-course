console.log('Request data...');

setTimeout(() => {
   console.log('Preparing data...');

   const backendData = {
       sever: 'aws',
       port: 2000,
       status: 'working'
   };

   setTimeout(() => {
       backendData.modified = true;
       console.log('Data reciverd: ', backendData);
   }, 2000)

}, 2000);
