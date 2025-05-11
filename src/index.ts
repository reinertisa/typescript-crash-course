//--------
// tuples
//--------

let person: [string, number, boolean] = ['isa', 10, true];

//--------
// tuples examples
//--------

let hsla: [number, string, string, number] = [ 100, 'red', '50%', 0.5];

let xy: [number, number] = [94.4, 29.2];

function useCoords(): [number, number] {
    // get coords
    const lat = 100;
    const long = 200;
    return [lat, long];
}

const[lat, long] = useCoords();

//---------
// named tuples
//---------

let user: [name: string, age: number]
user = ['isa', 10];
console.log(user[0]);