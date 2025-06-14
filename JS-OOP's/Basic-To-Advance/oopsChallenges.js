/* CHALLENGE ONE
Prototypes in JavaScript
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal
*/

function Animal() {
}
Animal.prototype.speak = function(){
    return 'Animal speaking';
};

function Dog() {
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(){
    return 'Woof!';
}

Dog.prototype.constructor = Dog;


/* CHALLENGE TWO
Functional Constructor and Errors
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number
*/

function Person(name,age) {
    this.name = name;
    this.age = age;
    
    if (this.age <= 0) {
        throw new Error('Age must be a positive number');
    }
}
           
Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`;
};
        

/* CHALLENGE THREE
Classes, Objects, and Inheritance
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".



Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails(){
      return `Make: ${this.make}, Model: ${this.model}`;
  }
  move(){
        return `The vehicle is moving`;
  }
  static isVehicle(obj){
      return obj instanceof Vehicle;
      
  }
    
}

class Car extends Vehicle {
    startEngine(){
        return `Engine started`;
    }
    move(){
        return `The car is driving`;
    }
}

/* CHALLENGE FOUR
Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/

class BankAccount {
  constructor(balance = 0) {
    if (balance < 0) throw new Error("Initial balance cannot be negative.");
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(newAmount) {
    if (newAmount >= 0) {
      this._balance = newAmount;
    } else {
      throw new Error("Balance cannot be negative");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    } else {
      throw new Error("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive.");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
}


/* CHALLENGE FIVE
Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    if (this.radius < 0) {
      throw new Error("Radius cannot be negative.");
    }
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    if (this.length < 0 || this.width < 0) {
      throw new Error("Length and width must be non-negative.");
    }
    return this.length * this.width;
  }
}


