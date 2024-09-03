function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));

// we can declare function as a variable 
const x = function (a, b) { // asynchronous function 
    return a * b;
}
let z = x(4, 2);
console.log(z);

// Functions defined using an expression are not hoisted.

// self invoking function 
(function () {
    console.log("hello world from self invoking function");
}

)();

function myFunction (a,b){
    console.log(arguments.length);

};
myFunction(10,20); //showing result 2 

function myFunction1 (a, b){
    return a*b ;

}
let text = myFunction1.toString();
console.log(text, typeof text); // return the whole function as a string and the type of the text is string 

// arrow function 
//ES 5
var a =function(x,y){
    return x*y;
}
//ES 6
const b = (x,y ) => x*y;
console.log(b(10,20));

// deault parameter in js 
function myFunction2(a, b = 10){
    return a+b;
}
console.log(myFunction2(5)); // 15 

// rest parameter in js
function sum(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55