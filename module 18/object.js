
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car , typeof car); // { type: 'Fiat', model: '500', color: 'white' } 'object'
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person , typeof person); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' } 'object'

// Object declare in multiple line
const person1 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
console.log(person1, typeof person1); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' } 'object'

// Create an object
const person3 = {};

// Add properties to an object
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";

console.log(person3, typeof person3); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' } 'object'

// Object creating using new keyword
const person4 = new Object();

// Add properties to an object
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue";

console.log(person4, typeof person4);

// Object are mutable (can be changed)
person4.age = 40;
console.log(person4, typeof person4);

// create a copy of object 
const person5 = person4;
person5.age = 30;
console.log(person5.age); // 30

// access object properties

let age = person5.age;
let age1 = person5["age"];
let age3 = person["expresion"];

/*
Some solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/
const person6 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
document.getElementById("demo").innerHTML = person6.firstName + " is " + person6.age + " years old.";
