//Challenge 1

const getCelcius = (n) => (n - 32) * 5 / 9;

console.log(`The temperature is ${getCelcius('70')} \xB0C`);

//Challenge 2
const minMax = (array) => ({
    min: Math.min(...array),
    max: Math.max(...array)
});

console.log(minMax([44,25,745,21,33,5,7,4]));

//Challenge 3
// (function (a, b) {
//     console.log(`The area of a rectangle with a length of ${a} and width of ${b} is ${a * b}`)
// })(12, 5);

((length, width) => {
    console.log(`The area of a rectangle with a length of ${length} and width of ${width} is ${length * width}`);
})(10, 5);