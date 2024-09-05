/*
Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

Sample Input:

[5, 7, 8, 10, 45, 30]

Sample Output:

57
*/
const numbers = [5, 7, 8, 10, 45, 30];
function findOddSum(arrOfNumbers) {
    let sum = 0 ;
    for(let i = 0 ; i < arrOfNumbers.length ; i++){
        if(arrOfNumbers[i] % 2 !== 0){
            sum += arrOfNumbers[i];
        }
    }
    return sum;

}
console.log(findOddSum(numbers)); // 57