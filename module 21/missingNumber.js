
/*
Missing Number in Array
Description: Write a function findMissingNumber that takes a sorted array of consecutive positive integers (except for one missing number) and returns the missing number.



Thinking Steps:


1. Identify the pattern: Since the array contains consecutive positive integers with one missing, run a for loop , access the element and check if the next number is there in the array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
function findMissingNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      return numbers[i] + 1;
    }
  }
}
console.log(findMissingNumber(numbers)); // 7