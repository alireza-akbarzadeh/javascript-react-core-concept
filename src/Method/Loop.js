// Set population limit of aquarium to 10
const popLimit = 10;

// Start off with 0 fish
let fish = 0;

// Initiate while loop to run until fish reaches population limit
while (fish < popLimit) {
  // add one fish for each iteration
  fish++;
  console.log("There's room for " + (popLimit - fish) + " more fish.");
}

// Set variable to 0
let x = 0;

do {
  // Increment variable by 1
  x++;
  console.log(x);
} while (false);

// For Loop
// for (initialization; condition; final expression) {
// 	// code to be executed
// }

// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
  // Print each iteration to the console
  console.log(i);
}

// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
  // Update array with variable value
  arrayExample.push(i);
  console.log(arrayExample);
}

// Declare array with 3 items
let fishs = ["flounder", "salmon", "pike"];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fishs.length; i++) {
  // Print each item to the console
  console.log(fishs[i]);
}

// For…In Loop
// The for...in statement iterates over the properties of an object. To demonstrate, we will make a simple shark object with a few name:value pairs.
const shark = {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity,
};
// Print property names of object
for (let key in shark) {
  console.log(`${key}`.toUpperCase() + `: ${shark[key]}`);
}

// For…Of Loop
// The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement. The for...of statement is a newer feature as of ECMAScript 6. ECMAScript (or ES) is a scripting-language specification created to standardize JavaScript.
// In this example of a for...of loop, we will create an array and print each item in the array to the console.

// Initialize array of shark species
let sharks = ["great white", "tiger", "hammerhead"];

// Print out each type of shark
for (let shark of sharks) {
  console.log(shark);
}

// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
  console.log(index, shark);
}

// Assign string to a variable
let sharkString = "sharks";

// Iterate through each index in the string
for (let shark of sharkString) {
  console.log(shark);
}
