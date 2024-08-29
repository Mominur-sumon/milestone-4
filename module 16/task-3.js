/*
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ', (number) => {
   
      // Convert input strings to integers
      number = parseInt(number);
  
var result = number % 5 ;
  
console.log("result: " + result) ;
  
      rl.close();

});      
  