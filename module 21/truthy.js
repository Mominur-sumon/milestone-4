/*
Create a function which returns the number of true values there are in an array.
*/
function truthyCounter(arr){
    return arr.filter(Boolean).length;
}
console.log(truthyCounter([true, false, false, true, false])); // 2
console.log(truthyCounter([true, true, true, false, false])); // 3
console.log(truthyCounter([false, false, false, false])); // 0