const map = new Map();
map.set("firstName", "Luke");
map.set("lastName", "Skywalker");
map.set("occupation", "Jedi Knight");
const luke = {
  firstName: "Luke",
  lastName: "Skywalker",
  occupation: "Jedi Knight",
};

const maps = new Map(Object.entries(luke));
// The following converts a Map to an Object:
const obj = Object.fromEntries(map);
// Now, let’s convert a Map to an Array;
const arr = Array.from(map);

// Map Keys

// const map = new Map()
// map.set('1', 'String one')
// map.set(1, 'This will be overwritten')
// map.set(1, 'Number one')
// map.set(true, 'A Boolean')

console.log(arr);
// Getting and Deleting Items from a Map
// Initialize a new Map
const mapss = new Map([
  ["animal", "otter"],
  ["shape", "triangle"],
  ["city", "New York"],
  ["country", "Bulgaria"],
]);
// Check if a key exists in a Map
map.has("shark"); // false
map.has("country"); // true
// Get an item from a Map
map.get("animal"); // "otter"
// Get the count of items in a Map
map.size(); // 4
// Delete an item from a Map by key
map.delete("city"); // true
// Empty a Map
map.clear();
// Keys, Values, and Entries for Maps
map.keys();

map.values();
map.entries();
// Iteration with Map
// Map.prototype.forEach((value, key, map) = () => {})

// Array
// Array.prototype.forEach((item, index, array) = () => {})

// Log the keys and values of the Map with forEach

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Map Properties and Methods

// Properties/Methods	Description	Returns
// set(key, value)	Appends a key/value pair to a Map	Map Object
// delete(key)	Removes a key/value pair from a Map by key	Boolean
// get(key)	Returns a value by key	value
// has(key)	Checks for the presence of an element in a Map by key	Boolean
// clear()	Removes all items from a Map	N/A
// keys()	Returns all keys in a Map	MapIterator object
// values()	Returns all values in a Map	MapIterator object
// entries()	Returns all keys and values in a Map as [key, value]	MapIterator object
// forEach()	Iterates through the Map in insertion order	N/A
// size	Returns the number of items in a Map	Number
