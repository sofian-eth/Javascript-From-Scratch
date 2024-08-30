// const user = 'Jimmy'
// console.log(user);

(function () {
    const user = 'Jimmy';
    console.log(user);
    const greeting = () => console.log('Hello from the IIFE ' + user);
    greeting();
})();

(function (name) {
    console.log(`Hey ${name}`);
})('Johnny');

(function hello() {
    console.log('Hello Bro!');
})();