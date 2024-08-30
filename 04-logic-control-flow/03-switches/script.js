const d = new Date(2022, 1, 10, 8, 0, 0);
console.log(d);
const month = d.getMonth();
const hour = d.getHours();
console.log(hour);

switch(month) {
    case 0:
        console.log("It is January");
        break;
    case 1:
        console.log("It is February");
        break;
    case 3:
        console.log("It is March");
        break;
    default:
        console.log("It is NOT January, February or March");
}

switch (true) {
    case hour < 12:
        console.log("Good Morning");
        break;
    case hour < 18:
        console.log("Good Afternoon");
        break;
    default:
        console.log("Good Night");
}