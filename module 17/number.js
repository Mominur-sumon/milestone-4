var orangePrice = 20 ;
var choclatePrice = 0.5 ;
var applePrice = '26' ;
var total = orangePrice + choclatePrice + applePrice ; // string + number = string
applePrice = applePrice + 10 ; // string + number = string
console.log(applePrice, typeof applePrice) ; // string 20.526
console.log(total, typeof total) ;

applePrice = parseInt(applePrice) ; // string to number
total = orangePrice + choclatePrice + applePrice ;
console.log(applePrice, typeof applePrice) ; // number 2610 

applePrice1 = "hello" ;
applePrice1 = parseInt(applePrice1) ; // string to number but in this line this is NaN

console.log(applePrice1, typeof applePrice1) ; // NaN number

var applePrice2 = "45.86" ;
applePrice2 = parseFloat(applePrice2) ; // string to float
console.log(applePrice2, typeof applePrice2) ; // 45.86 number

// Float point fixing
var first =0.1 ;
var second =0.5 ;
var result = first + second ;
console.log(result.toFixed(3), typeof(result.toFixed(3))) ; // 0.30000000000000004

// Infinity
var num = 1/0 ;
console.log(num, typeof num) ; // Infinity number
var num1 = -1/0 ;
console.log(num1, typeof num1) ; // -Infinity number

