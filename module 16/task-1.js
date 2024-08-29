/*Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the amount of taka you have: ', (takaYouHave) => {
  rl.question('Enter the cost of 1 kg of oranges and 1 kg of apples: ', (costOfFruits) => {
    // Convert input strings to integers
    takaYouHave = parseInt(takaYouHave);
    costOfFruits = parseInt(costOfFruits);

    // Calculate how much money the shopkeeper will return
    let moneyReturned = takaYouHave - costOfFruits;

    // Print the result
    console.log(moneyReturned);

    rl.close();
  });
});


