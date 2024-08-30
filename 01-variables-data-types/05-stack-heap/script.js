//these values are stored on the stack

const name = 'John';

const age = 30;

//reference values are stored on the heap

const person = {
    name: "Shaeel Iqbal",
    age: 27
}

let newName = name;

newName = 'Jonathan'

let newPerson = person;
newPerson.name = "Muhammad Shaeel"

console.log(name, newName);
console.log(person, newPerson);