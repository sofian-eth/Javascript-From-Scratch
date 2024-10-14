// CHALLENGE 1

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'janepoe@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Esther',
        lastName: 'Foe',
        email: 'esthernathaphorn@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Bob',
        lastName: 'Mork',
        email: 'bobby@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
]

const youngPeople = people.filter(person => person.age <= 25)
.map(person => {
    return {name: person.firstName +' ' + person.lastName, email: person.email}
})

console.log(youngPeople);

// CHALLENGE 2

const nums = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = nums.filter(num => num > 0)
.reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum);

// CHALLENGE 3

const words = ['coder', 'programmer', 'developer']

const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));

console.log(capitalizedWords);