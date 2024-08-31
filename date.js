const d = new Date();
console.log(d, typeof d); // 
const d2 = new Date("October 13, 2014 11:13:00");
console.log(d2, typeof d2); //
const d3 = new Date(2024, 15, 13, 11, 13, 0, 0);
console.log(d3, typeof d3); // it will show 2025-04-13T08:13:00.000Z object due to overflow of month

const d4 = new Date();
console.log(d4.toDateString());
console.log(d.toUTCString());

// Short date and time

const date1 = new Date("03/25/2024 11:13:00");
console.log(date1.toLocaleString());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date2 = new Date();

let month = months[date2.getMonth()];
console.log(month); //August

let ms = Date.now();
console.log(ms); // 1628180446820

//calculate the number of years since 1970
const minuts = 1000 * 60;
const hours = minuts * 60;
const days = hours * 24;
const year = days * 365;

let years = Math.round(Date.now() / year);
console.log(years); // 55
