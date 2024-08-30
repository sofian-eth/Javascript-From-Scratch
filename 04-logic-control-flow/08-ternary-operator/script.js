const age = 18;

//using an if statement

if(age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//using a ternary operator

const answer = age >= 18 ? "You can vote" : "you cannot vote";

console.log(answer);

//assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "Yes" : "No";

console.log(canVote);
console.log(canVote2);

//multiple statements

const auth = true;
// let redirect;

// if(auth) {
//     alert("Welcome to the dashboard");
//     redirect = "/dashboard"
// } else {
//     alert("Access denied");
//     redirect = "/login";
// }

// const redirect = auth ? (alert("Welcome to the dashboard"), "/dashboard") : (alert("Access Denied"), "/login");

// console.log(redirect);

auth ? console.log("Welcome to the dashboard") : null;

auth && console.log("Welcome to the dashboard");