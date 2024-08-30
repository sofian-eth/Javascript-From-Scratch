function first() {
    const x = 100;
    
    function second() {
        const y = 200;
        console.log(x + y);
    }
    
    second();
}

first();

if(true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);
    }

    console.log(y);
}

//both work the same way.
//child function can access the variables of parent function but parent function cannot access variable of child function