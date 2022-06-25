// Understanding Destructuring, Rest Parameters, and Spread Syntax in JavaScript

// Destructuring
const note = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
};

// Destructure properties into variables
// const { id, title, date } = note;

// Assign a custom name to a destructured value
const { id: noteId, title, date } = note;
const notes = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
  author: {
    firstName: "Sherlock",
    lastName: "Holmes",
  },
};
const {
  author,
  author: { firstName, lastName },
} = note;
// Next, log the new variables firstName and lastName using template literals:
console.log(`${firstName} ${lastName}`);

const { length } = "A string";
console.log(length);
// Output 8

// Array Destructuring
const datae = ["1970", "12", "01"];
const [year, month, day] = datae;

// Create a nested array
const nestedArray = [1, 2, [3, 4], 5];

// Destructure nested items
const [one, two, [three, four], five] = nestedArray;

console.log(one, two, three, four, five);

const notess = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
};

// Using forEach
Object.entries(notess).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Using a for loop
for (let [key, value] of Object.entries(note)) {
  console.log(`${key}: ${value}`);
}

const noteasd = {
  title: "My first note",
  author: {
    firstName: "Sherlock",
    lastName: "Holmes",
  },
  tags: ["personal", "writing", "investigations"],
};
const {
  title: s,
  date: a = new Date(),
  author: { firstName: f },
  tags: [personalTag, writingTag],
} = noteasd;

console.log(date);
// Spread syntax (...) is another helpful addition to JavaScript for working with arrays, objects, and function calls. Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation.

// Spread

// Spread can simplify common tasks with arrays. For example, let’s say you have two arrays and want to combine them:
// Create an Array
const tools = ["hammer", "screwdriver"];
const otherTools = ["wrench", "saw"];
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools];

console.log(allTools);
// Array of users
const users = [
  { id: 1, name: "Ben" },
  { id: 2, name: "Leslie" },
];
// A new user to be added
const newUser = { id: 3, name: "Ron" };

users.push(newUser);
// Create an Array
const originalArray = ["one", "two", "three"];

// Use spread to make a shallow copy
const secondArray = [...originalArray];

// Remove the last item of the second Array
secondArray.pop();

console.log(originalArray);
const updatedUsers = [...users, newUser];
// Convert Set to Array
const set = new Set();
const seaCreatures = [...set];

console.log(seaCreatures);
console.log(users);
console.log(updatedUsers);
const string = "hello";

const stringArray = [...string];

console.log(stringArray);
// Spread with Objects
// When working with objects, spread can be used to copy and update objects.

// Originally, Object.assign() was used to copy an object:
// Create an Object and a copied Object with Object.assign()
// const originalObject = { enabled: true, darkMode: false };
// const secondObject = Object.assign({}, originalObject);
// Create an object and a copied object with spread

const originalObject = { enabled: true, darkMode: false };
const secondObject = { ...originalObject };

console.log(secondObject);

const user = {
  id: 3,
  name: "Ron",
};

const updatedUser = { ...user, isLoggedIn: true };

console.log(updatedUser);

const updatedUsedfss = { ...user, organization: { position: "Director" } };

console.log(updatedUsedfss);

// Rest Parameters

function restTest(one, two, ...args) {
  console.log(one);
  console.log(two);
  console.log(args);
}

restTest(1, 2, 3, 4, 5, 6);
// Output
// 1
// 2
// [3, 4, 5, 6]
