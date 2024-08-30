//JS Function declaration
/*
function myFunction(parameter1, parameter2, ...) {
    //block of code
    return value; //optional
}

Why Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
*/
// convert fahrenheit to celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let value = toCelsius(98.6);
console.log('Celsius: ', value);
// convert celsius to fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
value = toFahrenheit(37);
console.log('Fahrenheit: ', value);

let value1 = toCelsius ;
console.log(value1, typeof value1); // function, function