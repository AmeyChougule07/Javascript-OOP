//    This is how to access prototype

/* 
let computer = {cpu: 12};
let lenovo = {screen: "HD"};
let ameyHardware = {};

console.log(`Computer`,computer.__proto__);
*/

//    This is how to use it 
//    Its not the preferred way to do so because the dunder function is irritating

/*
let computer = {cpu:12};
let lenovo = {
  screen: "HD",
  __proto__: computer,
}
let dell = {};

console.log(lenovo.__proto__);
*/

//    This is the preferred way

let genericCar = {tyres: 4};
tesla = {
  driver: "Automatic",
}

Object.setPrototypeOf(tesla,genericCar);

console.log(Object.getPrototypeOf(tesla));
