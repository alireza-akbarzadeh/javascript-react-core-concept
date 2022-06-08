//Converting Values to Strings

String(true);
// Output "true";

String(49);
// Output "49";

let blows = 400;
blows.toString();
// Output "400";

(1776).toString(); // returns "1776"
false.toString(); // returns "false"
(100 + 200).toString(); // returns "300"

//Converting Values to Numbers

Number("1984");
// Output 1984;
let dalmatians = "101";
Number(dalmatians);
// Output 101;
Number(" "); // returns 0
Number(""); // returns 0

Number("twelve"); // returns NaN
Number("20,000"); // returns NaN
Number("2 3"); // returns NaN
Number("11-11-11"); // returns NaN

Number(false); // returns 0
Number(true); // returns 1

// Converting Values to Booleans
// Any value that is interpreted as empty, like the number 0, an empty string, or values that are undefined or NaN or null are converted to false.
Boolean(0); // returns false
Boolean(""); // returns false
Boolean(undefined); // returns false
Boolean(NaN); // returns false
Boolean(null); // returns false

// Other values will be converted to true, including string literals composed of white space.

Boolean(2000); // returns true
Boolean(" "); // returns true
Boolean("Maniacs"); // returns true

// Note that "0" as a string literal will convert to true since it is a non-empty string value:
Boolean("0"); // returns true
