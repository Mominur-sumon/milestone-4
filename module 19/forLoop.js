/*
for (initialization; condition; final-expression) {
    // code block
}
*/

// 10 random number and check if it is even or odd
for (let num = 1; num <= 10; num++) {
    const random = Math.floor(Math.random() * 100) + 1;
    if(random % 2 === 0){
        console.log(random, 'is even');
    } else {
        console.log(random, 'is odd');
    }
}