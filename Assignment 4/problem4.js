


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input';
    }
    let total = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        total += 20;
    }

    if(total > 80){
        return true;
    } else{
        return false;
    }
}


const obj1 = { 
    name: "Rajib", 
    testScore: 45, 
    schoolGrade: 25, 
    isFFamily: true 
};
const obj2 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
const obj3 = "hello" ;
const obj4 = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }


let result = calculateFinalScore(obj1);
result = calculateFinalScore(obj2);
result = calculateFinalScore(obj3);
result = calculateFinalScore(obj4);
console.log(result); // true

