const firstName = "Andy"
const lastName = "Below"
const age = 18;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.lastName);

//Destructuring

const todo = {
    id: 1,
    title: "take out trash",
    user: {
        name: "Daddy Dan"
    },
}

const { id: todoId, title, user: { name } } = todo;

console.log(todoId, title, name);

//destructuring arrays

const numbers = [1,2,7,124,965];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);