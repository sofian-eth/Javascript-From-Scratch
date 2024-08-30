let x;

const person = {
    name: "John Doe",
    age: 29,
    isAdmin: true,
    address: {
        street: "17 pearl st",
        city: 'Boston',
        state: "MA"
    },
    hobbies: ["sports", "fishing"]
}

x = person.name;
x = person['age'];
x = person.address.city;
x = person['address'].state;
x = person.hobbies[0];

person.name = "Not John Doe";
person['isAdmin'] = false;

delete person.age;
person.hasChildren = true;

person.greet = function () {
    console.log(`Hi, my name is ${this.name} and we are friends till the end`);
}

person.greet();

const person2 = {
    'first name': 'Brad',
    'last name': 'Traversy',
}

x = person2["first name"];

console.log(x);