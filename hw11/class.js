// 1. Create Component with constructor
class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}

const comp = new Component( 'span' );

console.dir( comp.node );

// 2. Create constructor and method
class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
        return this.node.textContent;
    }
}

const comp = new Component( 'span' );

console.log( comp.setText('London is a capital of Great Britain !!!') );

// 3. Create Calculator

class Calculator {
    constructor( number ) {
        this.number = number || 0;
        this.sum = 0;
    }
    plus() {
        this.sum = Math.round( this.number + this.sum );
        return `Sum after plus is ${this.sum}`;
    }
    minus() {
        this.sum = Math.round( this.number - this.sum );
        return `Sum after minus is ${this.sum}`;
    }
    devide() {
        this.sum = Math.round( this.number / this.sum );
        return `Sum after devide is ${this.sum}`;
    }
    multiply() {
        this.sum = Math.round( this.number * this.sum );
        return `Sum after multiply is ${this.sum}`;
    }
    get numberInfo() { return `First number is ${this.number} \nTotal is ${this.sum}` }

    set numberInfo( number ) {
        this.number = number || 0;
    }

}

const calc = new Calculator( 5 );

console.log( calc.plus() );

console.log( calc.numberInfo );

console.log( calc.numberInfo = 10 );

console.log( calc.numberInfo );

console.log( calc.devide() );

console.log( calc.numberInfo );

console.log( calc.minus() );

console.log( calc.numberInfo );

console.log( calc.multiply() );

console.log( calc.numberInfo );

