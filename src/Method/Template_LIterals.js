function createOAuthString(host, clientId, scope) {
  return `${host}/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
}

createOAuthString("https://github.com", "abc123", "repo,user");

// Output
// https://github.com/login/oauth/authorize?client_id=abc123&scope=repo,user

const menuItem = (url, link) =>
  `
<li>
  <a href="${url}">${link}</a>
</li>
`.trim();

menuItem("https://google.com", "Google");

const sum = (x, y) => x + y;
const x = 5;
const y = 100;
const string = `The sum of ${x} and ${y} is ${sum(x, y)}.`;

console.log(string);

const age = 19;
const message = `You can ${age < 21 ? "not" : ""} view this page`;
console.log(message);

// Tagged Template Literals
function tag(strings, ...expressions) {
  console.log(strings);
  console.log(expressions);
}
const strings = tag`This is a string with ${true} and ${false} and ${100} interpolated inside.`;
function returnsNull(strings, ...expressions) {
  return null;
}

const stringss = returnsNull`Does this work?`;
console.log(stringss);

function bold(strings, ...expressions) {
  let finalString = "";

  // Loop through all expressions
  expressions.forEach((value, i) => {
    finalString += `${strings[i]}<strong>${value}</strong>`;
  });

  // Add the last string literal
  finalString += strings[strings.length - 1];

  return finalString;
}

const stringaa = bold`This is a string with ${true} and ${false} and ${100} interpolated inside.`;

console.log(string);
// const query = gql`
//   {
//     user(id: 5) {
//       firstName
//       lastName
//     }
//   }
// `;.

console.log(string);
const rawString = String.raw`I want to write /n without it being escaped.`;
console.log(rawString);
