const d = new Date(2000, 3, 18, 6, 32, 11);

const hour = d.getHours();

// console.log(typeof hour, typeof d)

if(hour < 12) {
    console.log('Good Morning!');
} else if(hour < 18) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}

//Nested if

if(hour < 12) {
    console.log('Good Morning!');

    if(hour === 6) {
        console.log("Wake Up!");
    }
} else if(hour < 18) {
    console.log("Good Evening");
} else {
    console.log("Good Night"); 

    if(hour >= 20) {
        console.log("zzzzzzzzzzzzz");
    }
}

if(hour >= 7 && hour < 15) {
    console.log("It is work time");
}

if(hour === 6 || hour ===20) {
    console.log("Brush your teeth");
}