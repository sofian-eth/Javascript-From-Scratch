const arr = [1,2,3,4,5];
let x;

arr.unshift(0);
arr.push(6);

arr.reverse();

console.log(arr);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// x = arr1.concat(arr2);
x = [...arr1, ...arr2];

x.splice(4,1);

console.log(x);