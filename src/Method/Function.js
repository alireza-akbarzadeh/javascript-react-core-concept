// How To Define Functions in JavaScript
// Introduction
// A function is a block of code that performs an action or returns a value. Functions are custom code defined by programmers that are reusable, and can therefore make your programs more modular and efficient.

// In this tutorial, we will learn several ways to define a function, call a function, and use function parameters in JavaScript.

// Defining a Function
// Functions are defined, or declared, with the function keyword. Below is the syntax for a function in JavaScript
function nameOfFunction() {
  // Code to be executed
}

// Initialize greeting function
function greet() {
  console.log("Hello, World!");
}
greet();

// Function Parameters

// Initialize custom greeting function
function greeting(name) {
  console.log(`Hello, ${name}!`);
}
greeting("Alireza");

// Returning Values
// Initialize add function
function add(x, y) {
  return x + y;
}

// Invoke function to find the sum
add(9, 7);

// Expressions
// Assign add function to sum constant
const sum = function add(x, y) {
  return x + y;
};

// Invoke function to find the sum
sum(20, 5);

// Arrow Functions

// So far, we have gone through how to define functions using the function keyword. However, there is a newer, more concise method of defining a function known as arrow function expressions as of ECMAScript 6. Arrow functions, as they are commonly known, are represented by an equals sign followed by a greater than sign: =>.
// Arrow functions are always anonymous functions and a type of function expression. We can create a basic example to find the product of two numbers.
// Define multiply function
const multiply = (x, y) => {
  return x * y;
};

// Invoke function to find product
multiply(30, 4);
// Define square function
const square = (x) => {
  return x * x;
};

// Invoke function to find product
square(8);
// Define square function
// const square = x => x * x;

// square(10);
