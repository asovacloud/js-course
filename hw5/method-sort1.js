// 1. Check to the Odd
let arr1 = [1,2,3,5,8,9,10];

function createInfoObject( arr ) {
    return arr1.map(function(item, index){
        return ({
            digit: index,
            odd: !( item % 2 == 0 )
        });
    });
};

createInfoObject( arr1 );


// 2. Find Zero
console.log( [12, 4, 50, 1, 0, 20, 40].some( item => item === 0 ) );

// 3. Find long String
console.log( ['yes', 'hello', 'no', 'easycode', 'what'].some( item => item.length > 3 ) );


// 4. Create new string
let arrOfChars = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

function getString( arr ) {
    arr.sort(function (a, b) {
        if (a.index > b.index) {
            return 1;
        }
        if (a.index < b.index) {
            return -1;
        }
        return 0;
    });

    return multiplyChars( arr );
}

function multiplyChars( arr ) {
    var initialValue = '';

    let sum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue.char,
        initialValue
    );

    return sum;
}

console.log( getString( arrOfChars ) );