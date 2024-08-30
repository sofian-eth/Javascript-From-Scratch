// function add(a, b) {
//     return a + b;
// }

//arrow function syntax
const add = (a, b) => {
    return a + b;
}

//implicit return
const subtract = (a, b) => a - b;

//no need for parenthesis when we have 1 param
const double = a => a * 2;

//returning an object
const createObj = () => ({
    name: 'Andy',
    age: 18,
    sport: "football"
})

const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
    console.log(n);
})

numbers.forEach(n => console.log(n));

console.log(add(3,2));
console.log(subtract(9,2));
console.log(double(3));
console.log(createObj());