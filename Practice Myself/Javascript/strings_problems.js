let sentence = " The quick brown fox jumped over the lazy dog"
const word = "fox2";
console.log(sentence.includes(word));
console.log(` The word  ${word}  ${sentence.includes(word) ? "is" : "is not"}  in the sentence`);

console.log(sentence.toLowerCase())

let str2 = " Please give Rs 1000";
let amount = str2.slice(" Please give Rs".length)
console.log(amount)