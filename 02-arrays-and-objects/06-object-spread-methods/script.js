let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Andy';
todo.completed = false;
// todo.daddy = {
//     age: 35,
//     nationality: "Paki"
// }

x = todo;

const person = {
    address: {
        coords: {
            lat: 12.4214,
            lng: 21.241
        }
    }
}

x = person.address.coords.lat;

const obj1= {a: 1, b: 2}, obj2 = {c: 3, d: 4}
const obj3 = {...obj1, ...obj2};

x = obj3;

const obj4 = Object.assign({}, obj1);

x = obj4;

const todos = [
    {
        id: 1,
        name: "Learn new language"
    },
    {
        id: 2,
        name: "Play football"
    },
    {
        id: 3,
        name: "Take out trash"
    }
]

x = todos[1].name;

x = Object.keys(todo);
x = x.length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');

console.log(x);