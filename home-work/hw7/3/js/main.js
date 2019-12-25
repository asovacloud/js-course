// 1. Add list of tag LI with text
const addElements = ( parent, count) => {

    for(let i = 0; i < count; i++) {
        let text = `<li class="new-item">item ${count+i}</li>`;
        parent.insertAdjacentHTML('beforeend', text)
    }

    return null;

};

const parent = document.querySelector('ul');

addElements(parent, 5);


// 2. Add list of tag A with tag strong inside

const addElements1 = ( parents, element) => {

    for(let i = 0; i < parents.length; i++) {
        parents[i].insertAdjacentHTML('beforeend', element);
    }

    return null;

};

const parents = document.querySelectorAll('ul a');
const element = '<strong></strong>';

console.log( addElements1(parents, element) );

// 3. Add image
let img = document.createElement('img');
img.setAttribute('src','https://picsum.photos/300/200/?image=316');
img.setAttribute('alt','The best picture');
document.body.insertAdjacentElement('afterbegin', img);

// 4. Add class and text to the MARK tag
const someTest = 'green';
const markEL = document.querySelector('mark');

markEL.className = 'green';
markEL.insertAdjacentText('beforeend',someTest);

// 5. Sort the LI elements
const sortLiEl = ( parent, childrens ) => {

    let arr = [];
    let lastEl = null;

    console.log( parent );

    for(let i = 0; i < childrens.length; i++) {

        lastEl = childrens[i];
        parent.insertAdjacentElement('afterbegin', lastEl);

    };

    return arr;

};

const childrensLiEL = document.getElementsByTagName('li');
const parentUlEL = document.querySelector('ul');

sortLiEl(parentUlEL, childrensLiEL);
