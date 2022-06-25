// toSource()
// Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object.
function book(title, publisher, price) {
  this.title = title;
  this.publisher = publisher;
  this.price = price;
}
var newBook = new book("Perl", "Leo Inc", 200);
// document.write(newBook.toSource());
// toString()
// Returns a string of either "true" or "false" depending upon the value of the object.
var flag = false;
console.log(flag.toString());
// valueOf()
console.log(flag.valueOf());
// Returns the primitive value of the Boolean object.
