/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 10;
let ticketPrice = 800;
if(age < 10){
    console.log("Bus fair is free\n");
}else if(age >= 10 && age < 18){
    ticketPrice = ticketPrice / 2;
    console.log("Bus fair is: ", ticketPrice, "tk\n");
}else if(age >= 60){
    ticketPrice = ticketPrice - (ticketPrice * 0.15);
    console.log("Bus fair is: ", ticketPrice, "tk\n");
}
else{
    console.log("Bus fair is: ", ticketPrice, "tk\n");
}