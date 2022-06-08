// Initializing a new string primitive
const stringPrimitive = "A new string.";

// Initializing a new String object
const stringObject = new String("A new string.");

// console.log(typeof stringPrimitive); // string
// console.log(typeof stringObject); // object

const H = "How are you?"[0];
const A = "How are you?".slice(1, 2);
const indexof = "How are you?".indexOf("o");
const lasIndexoOf = "How are you?o".lastIndexOf("o");
const slice = "How are you?o".slice(8, 11);
const length = "How are you?o".length;
const upper = "How are you?o".toUpperCase();
const lower = "How are you?o".toLowerCase();

const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ")[2];

const tooMuchWhitespace = "  How are you?     ".trim();
const replace = "How are you?";

// Replace the first instance of "How" with "Where"
const replacenew = originalString.replace("How", "Where");
const change1 =
  "Javascript is a programming language. I'm learning javascript.";

// Search string for "javascript" and replace with "JavaScript"
const change3 = originalString.replace(/javascript/gi, "JavaScript");
export {
  H,
  A,
  indexof,
  lasIndexoOf,
  slice,
  upper,
  lower,
  splitString,
  tooMuchWhitespace,
};
