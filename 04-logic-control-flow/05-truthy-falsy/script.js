// Falsey values:

// 1- false
// 2- 0
// 3- ""
// 4- null
// 5- undefined
// 6- Nan

// Truthy values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space is a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = [];

if(x) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if(children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log("Please enter the number of children")
}

//Checking for empty arrays
const posts = [];

if(posts.length) {
    console.log('List Posts');
} else {
    console.log("No posts to list");
}

//Checking for empty objects

const user = {
    name: "Braddy"
};

if(Object.keys(user).length) {
    console.log("List User");
} else {
    console.log("No User");
}

//Loose equality (==)

console.log(false === 0);
console.log(null === undefined);
console.log(false === '');