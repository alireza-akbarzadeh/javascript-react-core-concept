// Define a function to cube a number
function cube(x) {
  return x * x * x;
}
// Invoke cube function
cube(10);
// Output 1000
// Assign a number to a variable
const number = 10;

// Invoke cube function
cube(number);
// Invoke the cube function without passing an argument
cube();
// Output NaN

// Default Parameter Syntax
// Check for undefined manually

// function defCube(x) {
//   if (typeof x === "undefined") {
//     x = 5;
//   }

//   return x * x * x;
// }
// defCube();
// Output 125

// Define a cube function with a default value
function defCube(x = 5) {
  return x * x * x;
}
defCube();

// Create functions with a default value for each data type
const defaultNumber = (number = 42) => console.log(number);
const defaultString = (string = "Shark") => console.log(string);
const defaultBoolean = (boolean = true) => console.log(boolean);
const defaultObject = (object = { id: 7 }) => console.log(object);
const defaultArray = (array = [1, 2, 3]) => console.log(array);
const defaultNull = (nullValue = null) => console.log(nullValue);
// Invoke each function
defaultNumber();
defaultString();
defaultBoolean();
defaultObject();
defaultArray();
defaultNull();

function settings(options = {}) {
  const { theme, debug } = options;
}
// Do something with settings

// Define a function to add two values

// Using Multiple Default Parameters
// You can use as many default parameters as you want in a function. This section will show you how to do this, and how to use it to manipulate the DOM in a real-world example.

// First, declare a sum() function with multiple default parameters:

function sum(a = 1, b = 2) {
  return a + b;
}

sum();

// Define a function to create a user object using parameters
function createUser(name, rank, userObj = { name, rank }) {
  return userObj;
}

// Create user
const user = createUser("Jean-Luc Picard", "Captain");

// Output
// {name: "Jean-Luc Picard", rank: "Captain"}
// Define a function with a default parameter at the start of the list
function defaultFirst(a = 1, b) {
  return a + b;
}
defaultFirst(undefined, 2);
// Output 3

// Define a function with a default parameter at the end of the list
function defaultLast(a, b = 1) {
  return a + b;
}

defaultLast(2);

// Assign a random number to x
//
// sAssign the cube root of the result of the cube function and x to y
// function doesXEqualY(x = getRandomNumber(), y = Math.cbrt(cube(x))) {
//   return x === y;
// }

// doesXEqualY();

// Define a function with a default parameter that is an anonymous function
function outer(
  parameter = function inner() {
    return 100;
  }
) {
  return parameter();
}

// Invoke outer function
outer();
