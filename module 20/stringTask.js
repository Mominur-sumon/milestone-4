// task 1 : count how many a's are in the following text
const str = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";
const len = str.length;
let numberOfA = 0;
for(let i = 0; i < len; i++){
    if(str[i] === 'a'){
        numberOfA++;
    }
}
console.log("Total Number of a is : " ,numberOfA);

// task 2 : count how many times a string has a letter a or A
const str2 = "Amar name Md Mominur Rahman Sumon. I am from Lalmonirhat";
const len2 = str2.length;
let numberOfA2 = 0;
for(let i = 0; i < len2; i++){
    if(str2[i] === 'a' || str2[i] === 'A'){
        numberOfA2++;
    }
}
console.log("Total Number of a or A is : " ,numberOfA2);

numberOfA2 = 0;

// or we can use toLowerCase() method to convert all the letter to lowercase
// and then we can check for only 'a'
for (let i = 0; i < len2; i++) {
    if (str2[i].toLowerCase() === 'a') {
        numberOfA2++;
    }
}
console.log("Total Number of a or A is : ", numberOfA2);

// task 3 : check wheather a string is contains a,e,i,o,u
const str3 = "Hello, my name is John";
const len3 = str3.length;
let isContainVowel = false;
for (let i = 0; i < len3; i++) {
    // if(str3[i].toLowerCase() === 'a' || str3[i].toLowerCase() === 'e' || str3[i].toLowerCase() === 'i' || str3[i].toLowerCase() === 'o' || str3[i].toLowerCase() === 'u') for the case insensitive
    if (str3[i] === 'a' || str3[i] === 'e' || str3[i] === 'i' || str3[i] === 'o' || str3[i] === 'u') {
        isContainVowel = true;
        break;
    }
}
console.log("Is contains vowel : ", isContainVowel);



// task 4 : replace all the x with y and X with Y
let str4 = "hello world I am from Bangladesh. My friend Subo has many ex girlfriends and He is a SEXy boy" ; 
let newStr = str4.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(newStr);  



// task 5 : capitalize the first letter of each word
let str5 = "hello world I am from Bangladesh. My friend Subo has many ex girlfriends and He is";

let words = str5.split(' ');
let newStr5 = '';
for (let word of words) {
    newStr5 += word[0].toUpperCase() + word.slice(1) + ' ';
}
console.log(newStr5);