/*
Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.*/

const input = [2023, 2024, 2025, 2028, 2030];
function findLeapYear(input) {
    let leapYear = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 4 === 0) {
            if (input[i] % 100 === 0) {
                if (input[i] % 400 === 0) {
                    leapYear.push(input[i]);
                }
            } else {
                leapYear.push(input[i]);
            }
        }
    }
    if (leapYear.length > 0) {
        return leapYear;
    }
}