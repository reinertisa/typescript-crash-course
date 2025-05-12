//--------
// type guards
//--------

type Id = number | string

function swapIdType(id: Id) {

    if (typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString();
    }
}

console.log(swapIdType('123'));
console.log(swapIdType(23));

// ---------
// tagged interfaces
// ---------

interface User {
    type: 'user'
    username: string
    email: string
    id: Id
}
interface Person {
    type: 'person'
    firstName: string
    age: number
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.username)
    } else {
        console.log(value.firstName, value.age)
    }
}

logDetails({ type: 'user', username: 'john', email: '<EMAIL>', id: 123 })
logDetails({ type: 'person', firstName: 'john', age: 23, id: 123 })
