function* numberGen(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

const num = numberGen(7);

console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());
console.log('num.next', num.next());