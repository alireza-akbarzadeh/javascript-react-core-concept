// Implicit Context
// There are four main contexts in which the value of this can be implicitly inferred:

// the global context
// as a method within an object
// as a constructor on a function or class
// as a DOM event handler

console.log(this);
function printThis() {
  console.log(this);
}

printThis();

const america = {
  name: "The United States of America",
  yearFounded: 1776,

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  },
};
const americas = {
  name: "The United States of America",
  yearFounded: 1776,
  details: {
    symbol: "eagle",
    currency: "USD",
    printDetails() {
      console.log(
        `The symbol is the ${this.symbol} and the currency is ${this.currency}.`
      );
    },
  },
};

america.describe();
americas.details.printDetails();

// A Function Constructor
function Country(name, yearFounded) {
  this.name = name;
  this.yearFounded = yearFounded;

  this.describe = function () {
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  };
}

const americaaa = new Country("The United States of America", 1776);

americaaa.describe();

// A Class Constructor
class ssss {
  constructor(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded;
  }

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  }
}

const americaaaa = new ssss("The United States of America", 1776);

americaaaa.describe();

// A DOM Event Handler
// In the browser, there is a special this context for event handlers. In an event handler called by addEventListener, this will refer to event.currentTarget. More often than not, developers will simply use event.target or event.currentTarget as needed to access elements in the DOM, but since the this reference changes in this context, it is important to know.
// In the following example, we’ll create a button, add text to it, and append it to the DOM. When we log the value of this within the event handler, it will print the target.
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary() {
  console.log(`${this.title} was written by ${this.author}.`);
}

summary();
summary.call(book);
// or:
summary.apply(book);

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}
longerSummary.call(book, "dystopian", 1932);
longerSummary.apply(book, "dystopian", 1932);
longerSummary.apply(book, ["dystopian", 1932]);
// Bind
// const braveNewWorldSummary = summary.bind(book);

// braveNewWorldSummary();
// const braveNewWorldSummary = summary.bind(book);

braveNewWorldSummary(); // Brave New World was written by Aldous Huxley.

const book2 = {
  title: "1984",
  author: "George Orwell",
};

braveNewWorldSummary.bind(book2);

braveNewWorldSummary(); // Brave New World was written by Aldous Huxley.
const whoAmI = {
  name: "Leslie Knope",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

whoAmI.regularFunction(); // "Leslie Knope"
whoAmI.arrowFunction(); // undefined
const button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);

class Display {
  constructor() {
    this.buttonText = "New text";

    button.addEventListener("click", (event) => {
      event.target.textContent = this.buttonText;
    });
  }
}

new Display();
