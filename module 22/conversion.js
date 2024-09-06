// inch to feet 

function inchToFeet(inch) {
    return inch / 12;
}
console.log(inchToFeet(62)); // 5.166666666666667

// inch to feet and inch 

function inchToFeetAndInch(inch){
    let feet = Math.floor(inch / 12);
    let remainingInch = inch % 12;
    return `${feet} feet and ${remainingInch} inch`;
}

console.log(inchToFeetAndInch(62)); // 5 feet and 2 inch

// mile to kilometer 
function mileToKilometer(mile){
    return mile * 1.60934;
}
console.log(mileToKilometer(100)); // 160.934

// kilometer to mile
function kilometerToMile(kilometer){
    return kilometer / 1.60934;
}
console.log(kilometerToMile(160.934)); // 100

// celsius to fahrenheit
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(100)); // 212

// fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitToCelsius(212)); // 100

// celsius to kelvin
function celsiusToKelvin(celsius){
    return celsius + 273.15;
}
console.log(celsiusToKelvin(100)); // 373.15

// kelvin to celsius
function kelvinToCelsius(kelvin){
    return kelvin - 273.15;
}
console.log(kelvinToCelsius(373.15)); // 100 