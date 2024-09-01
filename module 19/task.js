// display the text I will invest at least 6 hours every day for the next 60 days 60 times
// using for loop
for (let i = 0; i < 60; i++) {
    console.log('I will invest at least 6 hours every day for the next 60 days');
}
console.log("=======================================");
// using while loop
let i = 0;
while (i < 60) {
    console.log('I will invest at least 6 hours every day for the next 60 days');
    i++;
}
console.log("=======================================");
// All odd numbers between 61 to 100

// using for loop
for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("=======================================");
// using while loop
let num = 61;
while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}
console.log("=======================================");


// All even numbers between 78 to 100
//usding for loop
for (let i = 78; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Using while loop
let num1 = 78;
while (num1 <= 100) {
    if (num1 % 2 === 0) {
        console.log(num1);
    }
    num1++;
}
console.log("=======================================");


// display sum all odd numbers between 91 to 129
//using for loop
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log("Sum of all odd numbers between 91 to 129 is ", sum);

console.log("=======================================");
// using while loop
let num2 = 91;
let sum1 = 0;
while (num2 <= 129) {
    if (num2 % 2 !== 0) {
        sum1 += num2;
    }
    num2++;
}
console.log("Sum of all odd numbers between 91 to 129 is ", sum1);


console.log("=======================================");

// display sum all even numbers between 51 to 85
//using for loop
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of all even numbers between 51 to 85 is ", sum);
// using while loop
let num3 = 51;
let sum2 = 0;
while (num3 <= 85) {
    if (num3 % 2 === 0) {
        sum2 += num3;
    }
    num3++;
}

console.log("=======================================");

// multiplication table of 9
//using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`9 * ${i} = ${9 * i}`);
}
//using while loop
let num4 = 1;
while (num4 <= 10) {
    console.log(`9 * ${num4} = ${9 * num4}`);
    num4++;
}


console.log("=======================================");
//multiplication table of 1-10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("==================");
}

// using while loop
let num5 = 1;
while (num5 <= 10) {
    let num6 = 1;
    while (num6 <= 10) {
        console.log(`${num5} * ${num6} = ${num5 * num6}`);
        num6++;
    }
    console.log("==================");
    num5++;
}

// Implement a count donw timer that counts down from 81 to 65
for (let i = 81; i >= 65; i--) {
    console.log(i);
}

console.log("=======================================");

// Write a loop to print even numbers between 1 to 100. use continue statement
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

console.log("=======================================");
// display odd number from 55 to 85 and skip the number divisible by 5

for (let i = 55; i <= 85; i++) {
    if (i % 5 === 0) {
        continue;
    }
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Write a loop 1 to 200 . use break once you get 100 
for (let i = 1; i <= 200; i++) {
    if (i === 100) {
        break;
    }
    else {
        console.log(i);
    }
}

console.log("============");
// write a while loop that adds numbers starting from 1 but stop as soon as sum is 100
let sum5 = 0;
for (let j = 1; j <= 100; j++) {
   if(sum5 > 100){
    sum5 -= j ;
    break
   } else {
    sum5 += j ;
   }

}
console.log(sum5);
