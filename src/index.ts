//-------
// arrays
//-------
let names: string[] = ['Isa', 'Fezzik', 'Inigo', 'Cat'];
let ages: number[] = [23, 25, 21, 22];

names.push('Sade');
// names.push(24);

ages.push(33);
//ages.push('24');

//--------------------------------
// type inference with strings
//--------------------------------
let myName = 'Isa';
myName = 'Fezzik';

// type interference with arrays
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');

const f = fruits[0];

let things = [1, true, 'hello'];
// things.push([]);
things.push(1);
things.push(false);
things.push('world');

const t = things[0];

//--------------------------------
// object literals
//--------------------------------
let user: {firstName: string, age: number, id: number} = {
    firstName: 'Isa',
    age: 40,
    id: 1
};
console.log(user);

user.firstName = 'Sade';
user.age = 16;
user.id = 3;
console.log(user);

//--------------------------------
// type inference with objects
//--------------------------------
let person = {
    firstName: 'Isa',
    lastName: 'Fezzik',
    age: 23,
    isMarried: false
}
