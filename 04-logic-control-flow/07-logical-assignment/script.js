// ||= assigns the right side value only if the left is a falsy value.

// &&= assigns the right side value only if the left is a truthy value.

// ??= assigns the right side value only if the left is null or undefined.

let a;

a = false;

// if(!a) {
//     a = 100;
// }

// a = a || 100;

a ||= 100;

console.log(a);

let b = 10;

// if(b) {
//     b = 20;
// }

// b = b && 20;

b &&= 20;

console.log(b);

let c = null

// if(c === null || c === undefined) {
//     c = 20;
// }

// c = c ?? 20

c ??= 20;

console.log(c);