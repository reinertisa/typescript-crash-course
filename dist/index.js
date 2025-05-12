"use strict";
//--------
// union types
//--------
let someId;
someId = 123;
someId = 'abc';
let email = null;
email = 'test@gmail.com';
console.log(email);
let anotherId;
anotherId = 'isa';
console.log(anotherId);
anotherId = 123;
console.log(anotherId);
//--------
// union type pitfall
//--------
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string
    // parseInt(id) --> not allowed
    parseInt(id);
    return id;
}
swapIdType('123');
