const sentence = "Hello, my name is John";
let reversed = "";

for (const letter of sentence) {
  reversed = letter + reversed;

}
console.log(reversed);


let reversed2 = "";
for (let i = sentence.length - 1; i >= 0; i--) {
  reversed2 += sentence[i];
}
console.log(reversed2);

// using split, reverse and join
const reversed3 = sentence.split("").reverse().join("");
console.log(reversed3);

