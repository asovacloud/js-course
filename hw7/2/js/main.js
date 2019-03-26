// 1. Find a tag UL and add .list
document.querySelector('ul').setAttribute('class','list');

// 2. Find a Link after UL and add #link
const nextAll = ( elem ) => {

    var matched = [];
    while (elem = elem.nextSibling) {
        if (elem.nodeName === 'A') {
            elem.setAttribute('id','link');
            matched.push(elem);
        }
    }
    return matched;

};


console.log( nextAll( document.querySelector('ul') ) );

// 3. Add .item on the ODD lists
const addClassOnLiEl = ( items ) => {

    for(let i = 1; i < items.length + 1; i++) {
        if( !(i % 2 == 0) ) items[i - 1].setAttribute('class','item');
    }

    return null;

};


console.log( addClassOnLiEl( document.querySelectorAll('li') ) );


// 4. Add .custom-link on the links
const addClassOnLinks = ( items ) => {

    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute('class','custom-link');
    }

    return null;

};


console.log( addClassOnLinks( document.querySelectorAll('a') ) );