/*function foo() {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

foo();*/

function foo() {
    const a = {
        b: {
            c: 2
        }
    };

    for(let i = 0; i < 10; i++) {
        let value = a.b;
        setTimeout(() => {
            console.log(value.c++);
        }, 1000)
    }
}

foo();
