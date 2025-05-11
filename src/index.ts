//---------
// functions
//---------

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addTwoNumbers(1, 2));

const subtractTwoNumber = (a: number, b: number): number => a - b;
console.log(subtractTwoNumber(1, 2));

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}

addAllNumbers([1, 2, 3, 4, 5]);

//---------
// return type interference
//---------

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('John', 'Hello');
console.log(result);
