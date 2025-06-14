// Example One

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

let myCar = new Car("Toyota", "MK4");
// console.log(myCar);

let myNewCar = new Car("Tata", "Nexon");
// console.log(myNewCar);

// Example Two

function Tea(type) {
  this.type = type;

  this.describe = () => {
    return `This is a ${this.type}`;
  }
}

let lemonTea = new Tea("Lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

// Example Three
//prototype keyword can be used to add properties

function Animal(species) {
  this.species = species;
}

// here arrow function can't be used because it does not refer to animal while using this keyword inside
Animal.prototype.sound = function () {
  return `${this.species} makes sound!`
}

let cat = new Animal("Cat");
// console.log(cat);
// console.log(cat.sound());


// Example Three
// Throwing errors in functional constructors

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let coke = new Drink("Coca cola");
// console.log(coke);
let sprite = Drink("Coca cola");
// console.log(sprite);