/*
Design a JavaScript function that takes a year as input and determines whether January 1st of that year falls on a Sunday.

The function should return "YES" if January 1st is a Sunday, and "NO" otherwise.

*/
function isFirstJanuarySunday(year){
    let date = new Date(year, 0, 1);
    if(date.getDay() === 0){
        return "YES";
    }else{
        return "NO";
    }
}
console.log(isFirstJanuarySunday(2021)); // NO