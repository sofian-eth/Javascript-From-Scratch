const numbers = [1,2,3,4,5,6,7,8,9,10];

//the long way

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

//the actual reduce way

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

const sum3 = () => {
    let acc = 0;

    for (const cur of numbers) {
        acc = acc + cur;
    }

    return acc;
}

console.log(sum3());

const cart = [
    {id: 1, name: "Product 1", price: 130},
    {id: 2, name: "Product 2", price: 150},
    {id: 3, name: "Product 3", price: 175},
]

const totalCost = cart
//.filter(item => item.price)
.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalCost);