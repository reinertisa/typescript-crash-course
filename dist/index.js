"use strict";
//--------
// tuples
//--------
let person = ['isa', 10, true];
//--------
// tuples examples
//--------
let hsla = [100, 'red', '50%', 0.5];
let xy = [94.4, 29.2];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 200;
    return [lat, long];
}
const [lat, long] = useCoords();
//---------
// named tuples
//---------
let user;
user = ['isa', 10];
console.log(user[0]);
