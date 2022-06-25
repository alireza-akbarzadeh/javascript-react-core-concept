// constructor();
// Returns the function that created this object's instance. By default this is the Number object.
let num = 10.9;
let constructor = num.constructor();

// toExponential()
// Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.
let toExponential = num.toExponential();

// toFixed() ********
// Formats a number with a specific number of digits to the right of the decimal.
let toFixed = num.toFixed();

// toLocaleString() *******
// Returns a string value version of the current number in a format that may vary according to a browser's locale settings.
let toLocaleString = num.toLocaleString();
// toPrecision();
// Defines how many total digits (including digits to the left and right of the decimal) to display of a number.
let toPrecision = num.toPrecision(4);

// toString() ********
// Returns the string representation of the number's value.
let toString = num.toString();
// valueOf()
// Returns the number's value.
let valueOf = num.valueOf();
