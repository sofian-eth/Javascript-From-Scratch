let x;

const fruits = ['apple', 'orange', 'peach'];
const berries = ['strawberry', 'blueberry', 'cranberry'];

// fruits.push(berries);

// x = fruits[3][2];

const allFruits = [fruits, berries];

x = allFruits[1][2];

x = fruits.concat(berries);

// Spread operator

x = [...fruits, ...berries];

// Flatten arrays

const arr = [1,2,[3,4,5],6,[7],8];

x = arr.flat();

// Static methods on Array objects

x = Array.isArray(berries);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);

console.log(x);