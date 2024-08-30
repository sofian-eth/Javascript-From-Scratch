// ways to declate a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age)

// naming conventions
// Only letters, numbers, underscores and dollar signs
// can't start with a number

//multi-word formatting
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

// re-assigning variables

age = 31;

console.log(age);

let score;

score = 33;

console.log(score)

if(true) {
    score = score + 1;
}

console.log(score)

const arr = [1,2,3,4,5];

arr.push(6);

console.log(arr);

const person = {
    name: "Andy"
}

person.name = "Braddy";

person.email = "traversy@gmail.com";

console.log(person);

//declare multiple values at once

let a, b, c;

const d = 10, e = 20, f = 69;

console.log(d);
console.log(a);