//Sol 1
const myString = "developer";

let myNewString = myString[0].toUpperCase() + myString.slice(1);

//Sol 2
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

//Sol 3
myNewString = myString.toUpperCase().replace("EVELOPER", "eveloper");

myNewString = undefined + Number(Date());

console.log ("Date: ",myNewString)