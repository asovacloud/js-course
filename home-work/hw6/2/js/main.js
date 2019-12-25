// 1. Two elements check for equality

function isParent( parent, child ) {
    let parentElements = parent.querySelectorAll('*');

    for(let i = 0; i < parentElements.length; i++) {
        if(parentElements[i] === child) {
            return true;
        }
    }

    return false;
}

console.log( isParent(document.body.children[0], document.querySelector('mark')) );
console.log( isParent(document.querySelector('ul'), document.querySelector('mark')) );

// 2. Get all links outside the tag ul
function getLinks() {
    let getLinks = document.body.querySelectorAll('a');
    let getLinksOutsideUl = [];

    for(let i = 0; i < getLinks.length; i++ ) {
        let parent = getLinks[i].closest( 'ul' );
        if( parent === null ) {
            getLinksOutsideUl[getLinksOutsideUl.length] = getLinks[i];
        }
    }

    return getLinksOutsideUl;
};

console.log(getLinks());

// 3. Find previous element and next element of UL

console.log('Previous element: \n', document.querySelector('ul').previousElementSibling);
console.log('Next element: \n', document.querySelector('ul').nextElementSibling);

// 4. Count of LI elements
console.log('Count LI: \n', document.querySelectorAll('ul li').length);