const weight = 65;
const height = 1.8;
const bmi = weight / (height * height);
console.log("weight: ", weight , "kg", "\nheight: ", height, "m", "\nBMI: ", bmi);
if(bmi < 18.5){
    console.log('Underweight');
}else if(bmi < 24.9){
    console.log('Normal weight');
}
else if(bmi < 29.9){
    console.log('Overweight');
}
else{
    console.log("You are obese");
}