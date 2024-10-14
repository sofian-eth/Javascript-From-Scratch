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

//////////////////////////////////////////////////////////////////

const students = [
    { name: 'Alice', age: 20, score: 85 },
    { name: 'Bob', age: 22, score: 78 },
    { name: 'Charlie', age: 23, score: 95 },
    { name: 'David', age: 21, score: 66 },
    { name: 'Eve', age: 22, score: 88 }
];

const useFilter = students.filter(student => student.score >= 80);
console.log(useFilter);

const useMap = useFilter.map(student => student.name);
console.log(useMap);

const useReduce = students.reduce((acc, curr) => (acc + curr.score), 0);
const useReduceAnswer = useReduce/students.length;
console.log(useReduceAnswer);

students.forEach(student => {
    console.log(student.score >= 80? `${student.name} - passed!`:`${student.name} - failed!`)
})
