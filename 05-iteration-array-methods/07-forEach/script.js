const socials = ["Twitter", "Facebook", "Instagram", "Threads"];

// socials.forEach((a) => console.log(a));

// socials.forEach(function (item) {
//     console.log(item);
// })

socials.forEach((a, index, arr) => console.log(`${index} - ${a}`, arr));

console.log("--------------------------------------------------------")

function logSocials(socials) {
    console.log(socials);
}

socials.forEach(logSocials);

const socialObjects = [
    {
        name: "twitter",
        url: "twitter.com"
    },
    {
        name: "facebook",
        url: "facebook.com"
    },
    {
        name: "instagram",
        url: "instagram.com"
    },
    {
        name: "threads",
        url: "threads.com"
    }
]

socialObjects.forEach((item) => {
    console.log(item.url);
})