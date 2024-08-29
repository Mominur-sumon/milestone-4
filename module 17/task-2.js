/*Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the marks for Mathematics, Biology, Chemistry, Physics, and Bangla separated by commas: ', (input) => {
  // Convert the input string to an array of numbers
  let marks = input.split(",").map(Number);

  // Calculate the average
  let average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

  // Print the result rounded to 2 decimal places
  console.log(average.toFixed(2));

  rl.close();
});
