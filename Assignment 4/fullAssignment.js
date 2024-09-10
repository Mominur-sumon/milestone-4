

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || isNaN(income) || isNaN(expenses) || income < expenses) {
        return  "Invalid Input";
    }
    return (income - expenses) *0.2;
}


function sendNotification(email) {
    if(email.indexOf('@')===-1){
        return  "Invalid Email";
    }
    
    const emailParts = email.split('@');
    const username = emailParts[0];
    const domain = emailParts[1];
    return `${username} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
    if(typeof name !== 'string') {
        return "Invalid Input";
    }
    for(const char of name){
        if(char >= '0' && char <= '9'){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input';
    }
    let total = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        total += 20;
    }

    if(total > 80){
        return true;
    } else{
        return false;
    }
}


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