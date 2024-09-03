/*

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

let x = myFunction();
function myFunction() {
    return this;
}
console.log(x);

const myObj1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    myFunction: function () {
        return `Full Name : ${this.firstName} ${this.lastName}`;
    }
}
console.log(myObj1.myFunction());

// call method 
const person4 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person5 = {
    firstName: "John",
    lastName: "Doe"
}
const person6 = {
    firstName: "Jane",
    lastName: "Doe"
}
console.log(person4.fullName.call(person5));

