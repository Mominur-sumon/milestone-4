//Multilevel conditions

const price = 4000 ;

if(price >= 5000 ){
    //10% discount
    const discount = price * 0.1;
    const discountedPrice = price - discount;
    console.log('10% discount applied and the price is: ', discountedPrice);
}else if(price >= 4000){
    //8% discount
    const discount = price * 0.08;
    const discountedPrice = price - discount;
    console.log('8% discount applied and the price is: ', discountedPrice);
}
 else{
    console.log('No discount applied and the price is: ', price);
}

const age = 18;
if(age < 12){
    console.log('You can eat free');
}
else if(age >= 12 && age < 18){
    console.log('You can eat at half price');
}
else{
    console.log('You have to pay full price');
}

// nested conditions

const money = 500 ;
if(money >300){
    console.log("bro you are rich !!");
}else{
    if(money > 100){
        console.log("you are not poor");
    }
    else{
        console.log("you are poor");
    }
}

// If else ternary operator in javascript
// condition ? true : false

const age1 = 18;
if(age1 >= 18){
    console.log('You can vote');
}
else{
    console.log('You can not vote');
}

// using ternary operator
(age1 >= 18)? console.log('You can vote') : console.log('You can not vote');

// using ternary operator and assign value in a operator
const vote = (age1 >= 18)? 'You can vote' : 'You can not vote';
console.log(vote);

// not operator
const isLeader = true;
if(!isLeader){
    console.log('You are not a leader');
}
else{
    console.log('You are a leader');
}  