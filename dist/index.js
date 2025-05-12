"use strict";
//--------
// type guards
//--------
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
console.log(swapIdType('123'));
console.log(swapIdType(23));
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
logDetails({ type: 'user', username: 'john', email: '<EMAIL>', id: 123 });
logDetails({ type: 'person', firstName: 'john', age: 23, id: 123 });
