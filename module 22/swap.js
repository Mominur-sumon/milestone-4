// Write a program to swap two numbers without using any temporary variable.

let a = 5;
let b = 7;
let c = a;
a = b;
b = c;

console.log(a, b);

// we can swap two numbers without using any temporary variable
let x =  10 ;
let y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

// by distructuring 
let p = 50;
let q = 60;
[p, q] = [q, p];
console.log(p, q);


// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }

let m = 10 ;
let n = "monir";
[m, n] = [n, m];
console.log(m,n);
