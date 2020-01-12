/*const iterator = {
    generator(n = 10) {
        let i = 0;

        return {
            next() {
                if(i < n) {
                    return { value: ++i,  done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
};

const itr = iterator.generator();
console.log(itr);
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );
console.log( itr.next() );

for(let k of 'Hello') {
    console.log(k);
}

for(let k of [1,1,2,3,5,8,13]) {
    console.log(k);
}
*/

function* iter(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

for(let k of iter(6)){
    console.log(k);
}
