/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);


// Implicit Returns
// single parameter
const saySomething = message => console.log(message);
saySomething("Hello there!!");
// no parameter
const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines
// must log everything after the arrow in () - has to enclose {} if used
const returnMultipleLines = () => (
    `<p>
    This is a multiple line string
    </p>`
)
console.log(returnMultipleLines());
