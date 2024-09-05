/*
Develop a JavaScript program that calculates the difference between a given number and 10.

If the absolute difference is greater than 20, the program should return triple (3 times) the absolute difference.

Otherwise, it should return the absolute difference itself.

Example:

For input 5, the absolute difference between 5 and 10 is 5, which is less than 20, so the output is 5.

For input 35, the absolute difference between 35 and 10 is 25, which is greater than 20, so the output is 25 * 3 = 75.
*/

function numberDifferenceTripleChecker(number){
    if(Math.abs(number - 10) > 20){
        return Math.abs(number - 10) * 3;
    }else{
        return Math.abs(number - 10);
    }
}
console.log(numberDifferenceTripleChecker(33)); // 5