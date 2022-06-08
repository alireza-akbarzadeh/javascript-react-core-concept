// Set variable to current date and time
const now = new Date();

// View the output
// Get the current timestamp

const time = now.getTime();
// Assign the timestamp 0 to a new variable
const epochTime = new Date(0);
// Timestamp method
let Timestamp = new Date(-6106015800000);

// Date string method
let strMethod = new Date("July 4 1776 12:30");

// Date and time method
let DT = new Date(1776, 6, 4, 12, 30, 0, 0);
// Retrieving the Date with get
// Date/Time	Method	Range	Example
// Year	getFullYear()	YYYY	1970
// Month	getMonth()	0-11	0 = January
// Day (of the month)	getDate()	1-31	1 = 1st of the month
// Day (of the week)	getDay()	0-6	0 = Sunday
// Hour	getHours()	0-23	0 = midnight
// Minute	getMinutes()	0-59
// Second	getSeconds()	0-59
// Millisecond	getMilliseconds()	0-999
// Timestamp	getTime()	Milliseconds since Epoch time
// Initialize a new birthday instance
const birthday = new Date(1980, 6, 31);
const fullYear = birthday.getFullYear();
// output 1980
const month = birthday.getMonth();
// output 6
const date = birthday.getDate();
// output 31
const day = birthday.getDate();
// output 4
const hours = birthday.getHours(); // 0
const min = birthday.getMinutes(); // 0
const sec = birthday.getSeconds(); // 0
const millSec = birthday.getMilliseconds(); // 0
const newTime = birthday.getTime(); // 333849600000 (for GMT)
// Get today's date
const today = new Date();

// Compare today with October 3rd
if (today.getDate() === 3 && today.getMonth() === 9) {
  //   console.log("It's October 3rd.");
} else {
  //   console.log("It's not October 3rd.");
}
// Modifying the Date with set
// Date/Time	Method	Range	Example
// Year	setFullYear()	YYYY	1970
// Month	setMonth()	0-11	0 = January
// Day (of the month)	setDate()	1-31	1 = 1st of the month
// Day (of the week)	setDay()	0-6	0 = Sunday
// Hour	setHours()	0-23	0 = midnight
// Minute	setMinutes()	0-59
// Second	setSeconds()	0-59
// Millisecond	setMilliseconds()	0-999
// Timestamp	setTime()	Milliseconds since Epoch time
// Change year of birthday date
const setYear = birthday.setFullYear(1997);

// Date Methods with UTC

// Date/Time	Method	Range	Example
// Year	getUTCFullYear()	YYYY	1970
// Month	getUTCMonth()	0-11	0 = January
// Day (of the month)	getUTCDate()	1-31	1 = 1st of the month
// Day (of the week)	getUTCDay()	0-6	0 = Sunday
// Hour	getUTCHours()	0-23	0 = midnight
// Minute	getUTCMinutes()	0-59
// Second	getUTCSeconds()	0-59
// Millisecond	getUTCMilliseconds()	0-999

// Assign current time to a variable

// Print local and UTC timezones
console.log(now.getHours(), "getHours");
console.log(now.getUTCHours(), "getUTCHours");
export { now };
