
function  waitingTime(waitingTimes , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let totalWaitingTime = 0;
    for(const time of waitingTimes){
        totalWaitingTime += time;
    }
    let avgWaitingTime = Math.round(totalWaitingTime / waitingTimes.length);
    return avgWaitingTime * (serialNumber - waitingTimes.length -1);

}

let result  = waitingTime([ 3, 5, 7, 11, 6 ], 10);
result = waitingTime([13, 2], 6);
result = waitingTime([13, 2, 6, 7, 10], 6);
result = waitingTime([6], 4);
result = waitingTime(7, 10);
result = waitingTime("[6,2]", 9);
result = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result); 