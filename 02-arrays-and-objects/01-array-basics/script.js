// Array literal
const numbers = [1,2,3,4,5];
const mixed = [true, "Football", 64, null];

// Array constructor
const fruits = new Array('apple', 'orange', 'strawberry');

let x;

x = numbers[2] + numbers[5];

x = `My favourite fruit is ${fruits[2]}`;

x = numbers.length

fruits[1] = 'grape';

// fruits.length = 2

fruits[3] = 'mango';

fruits[fruits.length] = 'watermelon';

console.log(x);
console.log(numbers);
console.log(fruits);