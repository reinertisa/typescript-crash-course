"use strict";
//---------
// functions
//---------
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(1, 2));
const subtractTwoNumber = (a, b) => a - b;
console.log(subtractTwoNumber(1, 2));
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
//---------
// return type interference
//---------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('John', 'Hello');
console.log(result);
