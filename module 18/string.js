/*
Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()*/

let text = 'Hello World';
let length = text.length;
console.log(length); // 11

let char = text.charAt(0);
console.log(char); // H

let charCode = text.charCodeAt(0);
console.log(charCode); // 72 the decimal value of H in ASCII

let letter = text.charAt(3);
console.log(letter); // l

let letter1 = text[4];
console.log(letter1); // 0

//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
/*
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length) */

let txt = 'Apple, Banana, Kiwi';
let res = txt.slice(7, 13);
console.log(res); // Banana
let res1 = txt.substring(7);
console.log(res1); // Banana, Kiwi
let part = txt.slice(-5); // Kiwi
console.log(part); 
let part1 = txt.substring(7, 0);
console.log(part1); // Apple

let sub = txt.substr(-4);
console.log(sub); // Kiwi

let text1 = '   Please visit Microsoft!    ';
let trim = text1.trim();
console.log(trim); // Please visit Microsoft!
let trimStart = text1.trimStart();
console.log(trimStart); // Please visit Microsoft!
{
    let text = "Hello world! ";
let result = text.repeat(2);
console.log(result); // Hello world!Hello world!
}

let text2 = 'Please visit Microsoft!';
let replace = text2.replace('Microsoft', 'W3Schools');
console.log(replace); // Please visit W3Schools!

let text3 = 'Please visit Microsoft and Microsoft!';
let index = text3.indexOf('Microsoft');
console.log("index of Microsoft: " + index); // 13

let lastIndex = text3.lastIndexOf('Microsoft');
console.log("last index of Microsoft: " + lastIndex); // 27

let search = text3.search('Microsoft');
console.log("search for Microsoft: " + search); // 13

let index1 = text3.indexOf('Microsoft', 15);
console.log("index of Microsoft: " + index1); // 27

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


//Javasciript string match() method
let str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match("ain"));
// Output: [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
console.log(str.match(/ain/g));
// Output: [ 'ain', 'ain', 'ain' ]
console.log(str.match(/ain/gi));
// Output: [ 'ain', 'AIN', 'ain', 'ain' ]

let str2 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = str2.matchAll("Cats");
for (const match of iterator) {
  console.log(match);
}

let str3 = 'Hello World!, welcome to the universe.';
console.log(str3.includes('world')); // false
console.log(str3.includes('world', 7)); // false
console.log(str3.includes('to', 8)); // true
console.log(str3.startsWith('Hello')); // true
console.log(str3.startsWith('world')); // false

let text4 = "Hello world, welcome to the universe.";
console.log(text4.startsWith("world", 6)); // true