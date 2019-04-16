class XHRrequest {

    sendText = function ( data, callback, inputText ) {
        let url = data.url || null;
        const method = data.method || 'get';
        const key = data.headerKey || null;

        if(inputText) { url = `${url}?q=${inputText}` }

        console.log(url);

        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (key) { xhr.setRequestHeader("X-Api-Key", key) }

        xhr.send();

        xhr.addEventListener('load', (inputText) => callback( JSON.parse(xhr.responseText) ) );

    }

}

const data = {
    url: 'https://newsapi.org/v2/top-headlines',
    method: 'get',
    headerKey: '42e1b2026e564af2835710350c3082db'
}


const request = new XHRrequest();

//request.sendText( data, callback );