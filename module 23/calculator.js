
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;    
        default:
            return 'Invalid operator';
    }
  // Code here
}

console.log(calculator(2, 3, '+')); // Output: 5
console.log(calculator(2, 3, '-')); // Output: -1
console.log(calculator(2, 3, '*')); // Output: 6
console.log(calculator(2, 3, '/')); // Output: 0.6666666666666666
console.log(calculator(2, 3, '%')); // Output: 2