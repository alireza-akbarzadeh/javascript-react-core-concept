// Initialize object literal with curly brackets
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();
// Initialize gimli object
const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function () {
    return `Hi, my name is ${this.name}!`;
  },
};
// Add new age property to gimli
gimli.age = 139;
gimli["name"] = "Lion";
gimli.fight = function () {
  return `Gimli attacks with an ${this.weapon}.`;
};
// Update weapon from axe to battle axe
gimli.weapon = "battle axe";
// Remove weapon from gimli
delete gimli.weapon;
// Looping Through Object Properties
// Iterate through properties of gimli
// const names = ["ali", "saeed", "joe"];
// for (let key of names) {
//   console.log(key);
// }
for (let key in gimli) {
  //   console.log(key.toUpperCase() + ":", gimli[key]);
}
// Initialize method on gimli object to return property keys
// let convert = Object.keys(gimli);
let s = Object.getOwnPropertyNames(gimli);
console.log(s);
// console.log(gimli.fight(), "Gimli");
// Prerequisites
// Initialize an object with properties and methods
const job = {
  position: "cashier",
  type: "hourly",
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable
      ? "is accepting applications"
      : "is not currently accepting applications";

    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}.`
    );
  },
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// Object.keys() creates an array containing the keys of an object.
// Initialize an object
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

// Get the keys of the object
const keys = Object.keys(employees);
console.log(keys);
//  As Object.keys
//  0converts your object’s keys into an array of
//  keys, the forEach() array method can be used to iterate through the keys and values.
// Iterate through the keys
Object.keys(employees).forEach((key) => {
  let value = employees[key];

  console.log(`${key}: ${value}`);
});
// Get the length of the keys
// Object.keys is also useful for checking the length of the converted array using the length property.

const length = Object.keys(employees).length;
console.log(length);
// Object.values()
// Object.values() creates an array containing the values of an object.
// Initialize an object
const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};

// Get all values of the object
const values = Object.values(session);
console.log(values);
// Object.entries()
// Object.entries() creates a nested array of the key/value pairs of an object.
// Initialize an object
const operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source",
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
// Loop through the results
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  console.log(`${key}: ${value}`);
});
// The Object.entries() method will only return the object instance’s own properties, and not any properties that may be inherited through its prototype.
// Object.assign()
// Object.assign() is used to copy values from one object to another.

// We can create two objects, and merge them with Object.assign().
// Initialize an object
const name = {
  firstName: "Philip",
  lastName: "Fry",
};

// Initialize another object
const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

// Merge the objects
const character = Object.assign(name, details);
// // Merge the object with the spread operator
const characterSpred = { ...name, ...details };

console.log(character);
console.log(characterSpred);

// This spread syntax in object literals is also known as shallow-cloning.

Object.freeze();
// Object.freeze() prevents modification to pro
// Initialize an object
// Initialize an object
const user3 = {
  username: "AzureDiamond",
  password: "hunter2",
};
// Freeze the object
const newUser3 = Object.freeze(user3);

// newUser.password = "*******";
// newUser.active = true;

// console.log(newUser);

Object.seal();
// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties. This method is similar to Object.freeze(). Refresh your console before implementing the code below to avoid an error.
// Initialize an object
const user = {
  username: "AzureDiamond",
  password: "hunter2",
};

// Seal the object
const newUser = Object.seal(user);
// newUser.password = "*******";
// newUser.active = true;
const stof = ["Ron", "April", "Andy", "Leslie"];

Object.getPrototypeOf(stof);
console.log(newUser);
export { gimli };
