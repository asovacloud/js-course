class XHRrequest {

    sendText = function ( data ) {

        return new Promise(function(resolve, reject) {

            let url = data.url || null;
            const method = data.method || 'get';
            const key = data.headerKey || null;

            if(data.inputText) { url = `${url}?country=${data.countryValue}&category=${data.categoryValue}&q=${data.inputText}` }

            const xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (key) { xhr.setRequestHeader("X-Api-Key", key) }

            xhr.onload = function() {
                if (this.status == 200) {
                    resolve( JSON.parse(xhr.responseText) );
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };

            xhr.send();


        });

    }

}

const data = {
    url: 'https://newsapi.org/v2/top-headlines',
    method: 'get',
    headerKey: '42e1b2026e564af2835710350c3082db'
}


const request = new XHRrequest();