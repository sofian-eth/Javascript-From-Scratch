let x;

const name = 'John';
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old.";

//Template literals 

x = `Hello my name is ${name} and I am ${age} years old`;

//String properties and methods

const s = new String("Hello World")


x = typeof s;

x = s.length;

//Access value by key
x = s[8];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLocaleLowerCase();

x = s.charAt(0);

x = s.indexOf("l");

x = s.substring(0, 5);

x = s.slice(0, -3);

x = '                     Hello World. '

x = x.trim();

x = x.replace(".", "!");

x = x.includes('H');

x = s.valueOf();

x = s.split("");
x = s.split(" ");

console.log(x)