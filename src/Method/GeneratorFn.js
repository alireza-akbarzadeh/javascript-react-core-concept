// Generator function declaration
function* generateFunction() {}
// Generator functions can also be defined in an expression, like regular functions:
// Generator function expression
const generatorFunction = function* () {};
// Generator as the method of an object
const generatorObj = {
  *generatorMethod() {},
};

// Generator as the method of a class
class GeneratorClass {
  *generatorMethod() {}
}

// Generator Objects
// A regular function that sums two values
function sum(a, b) {
  return a + b;
}
sum(5, 6); // 11
// Declare a generator function with a single return value
function* generatFunction() {
  return "Hello, Generator!";
}
// Assign the Generator object to generator
const generator = generatorFunction();
// Call the next method on the Generator object
generator.next();

// yield Operators
// Create a generator function with multiple yields
function* geFunction() {
  yield "Neo";
  yield "Morpheus";
  yield "Trinity";

  return "The Oracle";
}

const generators = geFunction();
generators.next(); // { value: "Neo", done: false }
generator.next(); // { value: "Morpheus", done: false }
generator.next(); // { value: "Trinity", done: false }
generator.next(); // { value: "The Oracle", done: true }

// Iterating Over a Generator
// Iterate over Generator object
for (const value of generators) {
  console.log(value);
}
// Create an array from the values of a Generator object
const values = [...generators];

console.log(values);
function* genearatorFunction() {
  yield "Neo";
  yield "Morpheus";
  yield "Trinity";
}

const genea = genearatorFunction();
genea.next();
genea.return("There is no spoon!");
genea.next();

// Define a generator function with a try...catch
// function* generatorFunction() {
//   try {
//     yield "Neo";
//     yield "Morpheus";
//   } catch (error) {
//     console.log(error);
//   }
// }

// Invoke the generator and throw an error
// const generator = generatorFunction();

// Generator Object Methods and States
// The following table shows a list of methods that can be used on Generator objects:

// Method	Description
// next()	Returns the next value in a generator
// return()	Returns a value in a generator and finishes the generator
// throw()	Throws an error and finishes the generator
// The next table lists the possible states of a Generator object:

// Status	Description
// suspended	Generator has halted execution but has not terminated
// closed	Generator has terminated by either encountering an error, returning, or iterating through all
// Generator function that will be delegated to
function* delegate() {
  yield 3;
  yield 4;
}

// Outer generator function
function* begin() {
  yield 1;
  yield 2;
  yield* delegate();
}
// Iterate through the outer generator
const generatorssssssss = begin();

for (const value of generatorssssssss) {
  console.log(value);
}

// Infinite Data Streams

// Infinite Data Streams
// One of the useful aspects of generators is the ability to work with infinite data streams and collections. This can be demonstrated by creating an infinite loop inside a generator function that increments a number by one.

// In the following code block, we define this generator function and then initiate the generator:
// Define a generator function that increments by one
function* incrementer() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

// Initiate the generator
const counter = incrementer();

console.log(counter.next().value);
// Create a fibonacci generator function
function* fibonacci() {
  let prev = 0;
  let next = 1;

  yield prev;
  yield next;

  // Add previous and next values and yield them forever
  while (true) {
    const newVal = next + prev;

    yield newVal;

    prev = next;
    next = newVal;
  }
}
// Print the first 10 values of fibonacci
const fib = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}
// Passing Values in Generators
function* generatorFasdunction() {
  console.log(yield);
  console.log(yield);

  return "The end";
}

const generasdsator = generatorFasdunction();

generasdsator.next();
generasdsator.next(100);
generasdsator.next(200);

// function* generatorFunction(value) {
//   while (true) {
//     value = yield value * 10;
//   }
// }

// // Initiate a generator and seed it with an initial value
// const generator = generatorFunction(0);

// for (let i = 0; i < 5; i++) {
//   console.log(generator.next(i).value);
// }
const getUsers = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();

  return json;
};

// Call the getUsers function and log the response
getUsers().then((response) => console.log(response));

const getUserss = asyncAlt(function* () {
  const response = yield fetch("https://jsonplaceholder.typicode.com/users");
  const json = yield response.json();

  return json;
});

// Invoking the function
getUserss().then((response) => console.log(response));

// Define a function named asyncAlt that takes a generator function as an argument
function asyncAlt(generatorFunction) {
  // Return a function
  return function () {
    // Create and assign the generator object
    const generator = generatorFunction();

    // Define a function that accepts the next iteration of the generator
    function resolve(next) {
      // If the generator is closed and there are no more values to yield,
      // resolve the last value
      if (next.done) {
        return Promise.resolve(next.value);
      }

      // If there are still values to yield, they are promises and
      // must be resolved.
      return Promise.resolve(next.value).then((response) => {
        return resolve(generator.next(response));
      });
    }

    // Begin resolving promises
    return resolve(generator.next());
  };
}
