export default class Http {
    constructor() { }
    get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.addEventListener('load', () => resolve(JSON.parse(xhr.responseText)));
            xhr.addEventListener('error', () => reject({status: xhr.status, url}))

        });
    }
}