const colorObj = {
    color1: "red",
    color2: "blue",
    color3: "green",
    color4: "black"
}

for(const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'white', 'blue', 'green'];

for(const key in colorArr) {
    console.log(key, colorArr[key]);
}
