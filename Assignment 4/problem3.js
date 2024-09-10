

function checkDigitsInName(name) {
    if(typeof name !== 'string') {
        return "Invalid Input";
    }
    for(const char of name){
        if(char >= '0' && char <= '9'){
            return true;
        }
    }
    return false;
}


let name = "Raj123";
name = "Suman";
name = "Name2024";
name = "!@#";
name = ["Raj"];
let result = checkDigitsInName(name);
console.log(result); // true