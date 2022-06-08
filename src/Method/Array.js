// Assign the five oceans
let oceans = ["Pacific", "Atlantic", "Indian", "Arctic", "Antarctic"];

// To access a specific item, append its index to the variable.

// Print out the first item of the oceans array
// console.log(oceans[0]);

// Initialize array of shark species with array literal
let sharks = [
  { name: "Hammerhead" },
  { name: "Great White" },
  { name: "Tiger" },
];

// Initialize array of shark species with array constructor
let shark = new Array(
  { name: "Hammerhead" },
  { name: "Great White" },
  { name: "Tiger" }
);
// Initialize array of mixed datatypes
let mixedData = ["String", null, 7, ["another", "array"]];

let seaCreatures = [
  "octopus",
  "squid",
  "shark",
  "seahorse",
  { name: "starfish" },
];
// console.log(seaCreatures.length);

// console.log(seaCreatures.indexOf("starfish"), "s");
const lastIndex = seaCreatures.length - 1;
// console.log(seaCreatures[lastIndex], "s");

let nestedArray = [
  ["salmon", "halibut"],
  ["coral", "reef"],
];
// nested array
// console.log(nestedArray[0][1]);

// Append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");
// Append whale to the beginning of the seaCreatures array
seaCreatures.unshift("whale");
// Remove the last item of the seaCreatures array
seaCreatures.splice(6, 1);
// In the splice() method, the first parameter stands for the index number to be removed (in this case, 7), and the second parameter is how many items should be removed. We put 1, signifying that only one item will be removed.

let firstArray = seaCreatures.slice(0, 6);
let secondArray = seaCreatures.slice(8, 10);

const thirdArray = firstArray.concat(secondArray);

// Remove the last item from the seaCreatures array
seaCreatures.pop();
// Remove the first item from the seaCreatures array
seaCreatures.shift();
// Assign manatee to the first item in the seaCreatures array
seaCreatures[0] = "manatee";
// Replace seahorse with sea lion using splice method
seaCreatures.splice(3, 1, "sea lion");
// Create an array of shellfish species
let shellfish = ["oyster", "shrimp", "clam", "mussel"];
// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  // console.log(i, shellfish[i]);
}
// Create an array of aquatic mammals
let mammals = ["dolphin", "whale", "manatee"];
for (let mammal of mammals) {
  // console.log(mammal);
}
let fish = ["piranha", "barracuda", "koi", "eel"];

// Test if fish variable is an array
Array.isArray(fish);
// Use pop method to remove an item from the end of an array
fish.pop();
// Use pop method to remove an item from the start of an array
fish.shift();
// Use push method to add an item to the end of an array
fish.push("swordfish");
// The unshift() mutator array method adds a new element or elements to the beginning of an array.
fish.unshift("shark");

// The splice() method can add or remove an item from any position in an array. A mutator method, splice() can either add or remove, or add and remove simultaneously.
// splice() takes three parameters — the index number to start at, the number of items to remove, and items to add (optional).
fish.splice(1, 1, "golden Fish");
// splice(0, 0, "new") would add the string "new" to the beginning of an array, and delete nothing.
fish.splice(0, 0, "Mega");
fish.splice(1, 0, "manta ray");
fish.splice(1, 2, "Manta ray");
fish.splice(1, 0, "1 eel");
// The reverse() method reverses the order of the elements in an array.
fish.reverse();
// fill()
// The fill() method replaces all the elements in an array with a static value.
fish.fill("shark", 1, 3);

// sort()

// The sort() method sorts the elements in an array based on the first character in the element. In the case that the first character is identical, it will continue down the line and compare the second character, and so on.
// By default, sort() will alphabetize an array of strings that are all either uppercase or lowercase.
fish.sort();
let numbers = [42, 23, 16, 15, 4, 8];
numbers.sort((a, b) => a - b);
// console.log(fish, "isArray");
// console.log(numbers, "numbers");
// Create arrays of monovalves and bivalves
let monovalves = ["abalone", "conch"];
let bivalves = ["oyster", "mussel", "clam"];

// Concatenate them together into shellfish variable
let sea = monovalves.concat(bivalves);

// join()
// The join() method converts all the elements of an array into a new string.
let seaString = sea.join();
// Join the elements of an array into a string
let fishString = fish.join(", ");
// slice()
// The slice() method copies a portion of an array to a new array.
// Slice a new array from 2 to 5
let fishWithShortNames = fish.slice(2, 4);
// Find the first instance of an element
fish.indexOf("barracuda");
// Output 1
fish.indexOf("shark");
// Output -1
// Find the last instance of an element
fish.lastIndexOf("barracuda");
// Output 3

// forEach();
// The forEach() method calls a function for each element in an array.
let ocean = ["piranha", "barracuda", "cod", "eel"];
// ocean.forEach((fish, index) => console.log(index, fish));
// for();
for (let i = 0; i < ocean.length; i++) {
  // console.log(i, ocean[i]);
}
// map();
// The map() method creates a new array with the results of calling a function for each array element.

// ocean.map((fish) => console.log(fish));
const t = ocean.map((fish) => `${fish} is a fish`);
// filter()
// The filter() method creates a new array with all array elements that pass a test.
let oceanCreatures = [
  "shark",
  "whale",
  "squid",
  "starfish",
  "narwhal",
  "cuttlefish",
  "octopus",
];
let filterData = oceanCreatures.filter((fish) => fish[0] === "s");
// reduce()
// The reduce() method reduces the array to a single value.
// This is seen commonly with numbers, such as finding the sum of all the numbers in an array.
let Num = [42, 23, 16, 15, 4, 8];
// Get the sum of all numerical values
// This is seen commonly with numbers, such as finding the sum of all the numbers in an array.
let sum = Num.reduce((a, b) => a + b);
// find()
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Check if a given value is a cephalopod
let s = oceanCreatures.find((fish) => ["cuttlefish", "octopus"].includes(fish));
let B = oceanCreatures.findIndex((fish) =>
  ["cuttlefish", "octopus"].includes(fish)
);
console.log(B);
export { shark, mixedData };
