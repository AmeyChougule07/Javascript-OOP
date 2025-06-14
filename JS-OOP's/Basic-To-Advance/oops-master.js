//Functinal constructor revision

let car = {
  make: "Toyoto",
  model: "camry",
  year:2008,

  start: function() {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start())

function Person(name,age){
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe",19);
// console.log(john.name);

//prototype and prototypal chain revision

function Animal(type) {
  this.type = type;
}

Animal.prototype.sound = function(){
  return `${this.type} makes a sound`;
}

Array.prototype.Batman = function(){
   return `Self made method ${this}`;
}


let myArray = [1,3,5];
// console.log(myArray.Batman());


//Classes and Objects and inheritance

class Vehicle{
  constructor(make,model){
    this.make = make;
    this.model = model;
  }

  start(){
    return `${this.model} is car from ${this.make} `;
  }
}
 
class Car extends Vehicle{
  drive(){
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("Tata","Nexon");
// console.log(myCar.start());
// console.log(myCar.drive());


//Encapsulation

class BankAccount{
  #balance = 0;

  deposit(amount){
    this.#balance += amount;
    return this.#balance;
  }

  getBalance(){
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());


//Abstraction

class CoffeeMachine{
  start(){
    //call DB
    //filter value
    return `starting the machine`;
  }
  brewCoffee(){
    //complex calculation
    return `Brewing coffee`;
  }
  pressStartButton(){
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`;
  }
}

let myCoffee = new CoffeeMachine();
// console.log(myCoffee.pressStartButton());


//Polymorphism

class Bird {
  fly(){
    return `Flying...`;
  }
}
class Penguin extends Bird{
  fly(){
    return `Penguins can't fly...`;
  }
}

//here two same methods that is fly having different behaviour is polymorphism
let bird = new Bird();          
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());


//Static method
//Static variable/method is always meant to be accessed only by the class and is same for all the objects created to this class

class Student{
  static schoolName = "Infant Jesus High School";
  static changeSchoolName(name){
    let newName = this.schoolName = name;
    return `${newName}`
  }
}

// console.log(Student.changeSchoolName("abc school"));



