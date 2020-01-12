function* strGenerator() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

const str = strGenerator();

console.log('str: ', str);
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());
console.log('str.next: ', str.next());