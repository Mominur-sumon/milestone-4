//JavaScript Numbers are Always 64-bit Floating Point
/*JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:
*/
let x = 999999999999999; // x will be 999999999999999
let y = 9999999999999999; // y will be 10000000000000000
let z = 0.2 + 0.1; // z will be 0.30000000000000004 we need to add fixed point to get 0.3
console.log(x);
console.log(y);
console.log(z.toFixed(2)); // 0.30 type is string

let a = (0.2 * 10 + 0.1 * 10) / 10;
console.log(a); // 0.3


let b = 10 ;
let c = 20;
let d = "30";
let e = "40";
console.log(b+c+d+e); // 103040 is the common mistake in javascript but the result will be 10+20=30 then concatinated with 3040 with the string 30 and 40
let f = 10;
let g = "20";
let h = f / g;
console.log(h); // 0.5 beacuse the string is converted to number and then divided
let i = '10';
console.log(g/f); // 2 because the string is converted to number and then divided
console.log(g-i); // 10 because the string is converted to number and then subtracted

console.log(f/"apple"); // NaN because the string is not converted to number
console.log(typeof NaN); // number
//The result of any operation with NaN is NaN

//Infinity
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
console.log(typeof Infinity); // number

let myNumber = 32 ;
console.log(myNumber.toString(10)); // 32
console.log(myNumber.toString(16)); // 20
console.log(myNumber.toString(8)); // 40
console.log(myNumber.toString(2)); // 100000
console.log(myNumber.toString(32)); // 10

//Comparing two JavaScript objects always returns false.

let j = 9007199254740991n;
let k = 9007199254740991n;
console.log(j === k); // true
console.log(j*k); // 8106479329266896n

console.log(9007199254740992 === 9007199254740993); // it become true because the number is greater than the maximum number that can be represented in javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

//JavaScript Number Properties
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(10.5)); // false
//Safe integers are all integers from -(253 - 1) to +(253 - 1).

let m = 123 ;
console.log(m.toString(), typeof m.toString()); // returns 123 from variable x
console.log((123).toString()); // returns 123 from literal 123
console.log((100 + 23).toString()); // returns 123 from expression 100 + 23

//Exponential Notation
let n = 123e5; // 12300000
let o = 123e-5; // 0.00123
console.log(n);
console.log(o);

let p = 9999999999999999; // 10000000000000000
console.log(p);

let q = 9.656;
console.log(q.toExponential()); // 9.656e+0
console.log(q.toExponential(2)); // 9.66e+0
console.log(q.toExponential(4)); // 9.6560e+0
console.log(q.toExponential(6)); // 9.656000e+0`);

//Fixed Point Notation
console.log(q.toFixed()); // 10
console.log(q.toFixed(0)); // 10
console.log(q.toFixed(2)); // 9.66
console.log(q.toFixed(4)); // 9.6560
console.log(q.toFixed(6)); // 9.656000

//Precision is the total number of significant digits in a number.
console.log(q.toPrecision()); // 9.656
console.log(q.toPrecision(2)); // 9.7
console.log(q.toPrecision(4)); // 9.656
console.log(q.toPrecision(6)); // 9.65600

//All JavaScript data types have a valueOf() and a toString() method.

console.log(parseInt("-10"),
parseInt("-10.33"),
parseInt("10"),
parseInt("10.33"),
parseInt("10 20 30"),
parseInt("10 years"),
parseInt("years 10")); //-10 -10 10 10 10 10 NaN

//Number Methods Cannot be Used on Variables
// The number methods above belong to the JavaScript Number Object.

// These methods can only be accessed like Number.isInteger().

// Using X.isInteger() where X is a variable, will result in an error:

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


