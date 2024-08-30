let x;

const arr = [23,515,73,43,71];

// arr.push(69);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(43);

x = arr.indexOf(73);

x = arr.slice(1, 3); // it does not manipulate the original array

// x = arr.splice(0, 3); // it manipulates the original array and stores the deleted elements

// x = arr.splice(2, 1);

x = arr.splice(1, 3).reverse().toString().replace(/,/gi , '...');

console.log(x, arr);