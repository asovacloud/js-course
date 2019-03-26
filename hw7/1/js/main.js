// 1. Find the text of P tag
console.log( 'Text of P tag: \n ', document.querySelector('p').textContent );

// 2. Create Object with Node info
let nodeInfo = ( node ) => {
    const nodeInfo = {};

    nodeInfo.type = node.nodeType;

    nodeInfo.name = node.nodeName;

    nodeInfo.countNodes = node.childNodes.length;

    return nodeInfo;
};



console.log( nodeInfo( document.querySelector('p') ) );
console.log( nodeInfo( document.querySelector('ul') ) );
console.log( nodeInfo( document.querySelector('span') ) );
console.log( nodeInfo( document.querySelector('a') ) );

// 3. Create an Array with text list
let getTextFromUl = ( element ) => {
    const arr = [];

    const elementList = document.querySelectorAll(element);

    for(let i = 0; i < elementList.length; i++ ) {
        arr[arr.length] = elementList[i].textContent;
    };

    return arr;
};


console.log( getTextFromUl('li') );
console.log( getTextFromUl('p') );
console.log( getTextFromUl('span') );
console.log( getTextFromUl('a') );

// 4. Change all Nodes inside the Tag
let changeChildrenNodes = ( element ) => {

    const elementList = document.getElementsByTagName('p')[0].childNodes;

    for(let i = 0; i < elementList.length; i++ ) {
        if(elementList[i].nodeType === 3) {
            elementList[i].textContent = '-text-';
        }
    };

    return document.getElementsByTagName(element)[0].innerHTML;
};


console.log( changeChildrenNodes('p') );