
interface Author {
    name: string,
    age: number,
}

const authorOne: Author = {
    name: 'Isa Reinert',
    age: 40,
};

console.log(authorOne);

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author,
};

const newPost: Post = {
    title: 'New Post',
    body: 'This is a new post',
    tags: ['post', 'new'],
    create_at: new Date(),
    author: authorOne,
}

console.log(newPost);

//--------------------------------
// as function argument type
//--------------------------------

function createPost(post: Post): void {
    console.log(`Created post: ${post.title} by ${post.author.name}`)
}
createPost(newPost);

//-------------------------
// with arrays
//-------------------------
let posts: Post[] = [];
posts.push(newPost)
posts.push(newPost);

console.log(posts);