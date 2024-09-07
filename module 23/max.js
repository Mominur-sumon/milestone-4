
function getMaxNumber(array){
    return Math.max(...array);
}

const numbers = [14, 45, 23, 67, 89, 12];
function minNumb(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
console.log(minNumb(numbers));