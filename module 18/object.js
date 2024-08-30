
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car, typeof car); // { type: 'Fiat', model: '500', color: 'white' } 'object'
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person, typeof person); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' } 'object'

// Object declare in multiple line
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
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

//creating more object from a object
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Bangladeshi";
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(myFather, myMother, mySister, mySelf);

//constructor function methods 
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
const myFather1 = new Person("John", "Doe", 50, "blue");
console.log(myFather1.fullName());

//JavaScript Object Methods
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object    

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().