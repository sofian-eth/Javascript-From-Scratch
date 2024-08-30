const post = {
    id: 1,
    title: "This is the first post",
    body: "Just a body"
};

//convert to JSON

const str = JSON.stringify(post);

console.log(str);

//parse JSON

const obj = JSON.parse(str);

console.log(obj);

const posts = [
    {
        id: 1,
        title: "Post one",
        body: "Body of the first post"
    },
    {
        id: 2,
        title: "Post two",
        body: "Body of the second post"
    }
]

const str2 = JSON.stringify(posts);

console.log(str2);