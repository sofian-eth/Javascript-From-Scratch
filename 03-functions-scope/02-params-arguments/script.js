// Default Params
function registerUser(user = 'Bot') {

    //old method
    // if(!user) {
    //     user = 'Bot'
    // }

    return user + ' is registered'
}

console.log(registerUser());

//Rest params
function sum(...numbers) {
    let total = 0;

    for(const num of numbers) {
        total += num;
    }
    console.log(numbers);
    return total;
}

console.log(sum(1,2,4,6,5));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id ${user.id} is logged in`
}

const user = {
    id: 1,
    name: "Sandy"
}

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: "Rizwan"
}));

//Arrays as params
function randomArray(array) {
    const num = Math.floor(Math.random() * array.length)

    console.log(num);

    return array[num];
}

console.log(randomArray([1,2,4,6,3,5,743,234,133,62,124,54]));