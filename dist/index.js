"use strict";
const authorOne = {
    name: 'Isa Reinert',
    age: 40,
};
console.log(authorOne);
;
const newPost = {
    title: 'New Post',
    body: 'This is a new post',
    tags: ['post', 'new'],
    create_at: new Date(),
    author: authorOne,
};
console.log(newPost);
//--------------------------------
// as function argument type
//--------------------------------
function createPost(post) {
    console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//-------------------------
// with arrays
//-------------------------
let posts = [];
posts.push(newPost);
posts.push(newPost);
console.log(posts);
