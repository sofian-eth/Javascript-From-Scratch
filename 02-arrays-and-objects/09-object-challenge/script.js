const library = [
    {
        title: "Harry Potter",
        author: "JK Rowlins",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Game of Thrones",
        author: "Charles Dickson",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Office",
        author: "Michael Scott",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

const { title: firstBook} = library[0];
// library[0].firstBook = firstBook;

// delete library[0].title;

console.log(library);

const json = JSON.stringify(library);

console.log(json);