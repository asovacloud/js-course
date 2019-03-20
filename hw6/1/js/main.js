// 1. Find HEAD
console.log( 'Head: \n ', document.head );

// 2. Find BODY
console.log( 'Body: \n ', document.body );

// 3. Find BODY's elements
console.log( 'BODY\'s elements: \n ', document.body.children );

// 4. Find First DIV's elements
console.log( 'DIV\'s elements: \n ', document.body.firstElementChild.childNodes );

// 5. Find DIV's elements except first and last
function getChildNodes( arr ) {
    let arrNew = [];

    for(let i = 1; i < arr.length - 1; i++){
        arrNew[arrNew.length] = arr[i];
    };

    return arrNew;
};

getChildNodes( document.body.firstElementChild.childNodes );

