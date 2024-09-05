/*
You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.
*/

const numbers = [5, 7, 8, 10, 45, 30];

function secondLargest(numbers) {
   const sorted = numbers.sort((a, b) => b - a);
   let second = sorted[1];
   return second;

}
console.log(secondLargest(numbers)); // 30