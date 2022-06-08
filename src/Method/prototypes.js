// JavaScript Prototypes
let x = {};
Object.getPrototypeOf(x);

// console.log(x.__proto__);

// Prototype Inheritance
let y = [];
const a = y.__proto__ === Array.prototype; // true
const b = y.__proto__.__proto__ === Object.prototype; // true
Array.prototype.isPrototypeOf(y); // true
Object.prototype.isPrototypeOf(Array); // true
const z = y instanceof Array; // true
// Constructor Functions
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
let hero1 = new Hero("Bjorn", 1);
let constractor = Object.getPrototypeOf(hero1);
// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};
hero1.greet();
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};
const hero12 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");
hero12.attack();
console.log(constractor);
