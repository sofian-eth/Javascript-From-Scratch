//Loop through arrays
const items = ["apple", "orange", "chair", "table", "tiles"];
const users = [{name: "Andy", age: 15}, {name: "Pandy", age: 29}, {name: "Sandy", age: 33}];

for(const item of items) {
    console.log(item);
}

for(const user of users) {
    console.log(user);
}

//Loop over strings
const str = "Hello World!"

for(const alpha of str) {
    console.log(alpha);
}

//Loop over maps
const map = new Map();
map.set('name', "John");
map.set('age', 30);

for(const [key, value] of map) {
    console.log(key, value);
}