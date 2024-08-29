/*
Comparison
1 . bigger: >
2 . smaller: <
3 . equal: ==
4 . not equal: !=
5 . bigger or equal: >=
6 . smaller or equal: <=


-------------------
7. and: &&
8. or: ||
9. not: !
10. equal value and equal type: ===
*/
console.log(999 > 1000); // false
console.log(999 < 1000); // true
console.log(999 == 1000); // false
console.log(999 != 1000); // true
console.log(999 >= 1000); // false
console.log(999 <= 1000); // true
console.log(10=='10'); // true
console.log(10==='10'); // false
console.log(120 =='one hundred twenty'); // false

var a = 10;
var b = 20;
var c = 30;
console.log(a < b && b < c); // true
