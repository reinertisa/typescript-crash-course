//--------
// union types
//--------

let someId: number | string
someId = 123
someId = 'abc'

let email: string | null = null;
email = 'test@gmail.com';
console.log(email);

type Id = number | string
let anotherId: Id
anotherId = 'isa'
console.log(anotherId);
anotherId = 123
console.log(anotherId);


//--------
// union type pitfall
//--------

function swapIdType(id: Id): Id {
    // can only use props and methods common to
    // both number and string
    // parseInt(id) --> not allowed

    parseInt(id)

    return id;
}

swapIdType('123')