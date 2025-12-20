console.log("Hello from Node.js!");

const { add, subtract, multiply, divide } = require('./local-modules/mathOperations.js');

const a = 10;
const b = 5;  
console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);
console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);