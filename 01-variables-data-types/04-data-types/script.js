//String

const firstName = "Sara"

//Number

const age = 30.3;

//Boolean

const hasKids = true;

//Null

const aptNumber = null;

//Undefined

let score;

//Symbol

const id = Symbol('id');

//BigInt

const n = 9007199254740991n
//Reference types

const number = [1,2,3,4,5];

const person = {
    name: "Jani"
}

function sayHello() {
    console.log('Hello')
}

const output = sayHello;

console.log(output, typeof output);