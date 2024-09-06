// given an array we need to find average of odd numbers 

function oddAvg(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

function oddAvg1 (numbers) {
    let sum = 0;
    let count = 0;
    for (const num of numbers){
        if(num % 2 !== 0){
            sum += num;
           count++;
        }
    }
    return sum / count;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(oddAvg(arr)); // 5
console.log(oddAvg1(arr)); // 5