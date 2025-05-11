"use strict";
//---------
// any type
//---------
let age;
age = 10;
age = '10';
age = true;
age = {};
age = ['isa', 'sade'];
let title;
title = 'hello';
title = 10;
title = true;
title = {
    name: 'isa',
    age: 10
};
title = [];
//-------------------
// any type in arrays
//-------------------
let things = ['hello', 10, true, {}];
things.push('isa');
things.push(100);
//-------------------
// any type in functions
//-------------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
console.log(resultOne);
const resultTwo = addTogether(10);
console.log(resultTwo);
const resultThree = addTogether([10, 20]);
console.log(resultThree);
// useful when migrating from js to ts
// because using any won't cause errors initially
