// Loops
// for ([preExpression]; [condition]; [postExpression]) statement;

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

const question = ["Helo!", "How's", "your", "day?"];
console.log(question);

let sentence = "";

for (let i = 0; i <= question.length - 1; i++) {
  sentence += question[i];
  if (i != question.length - 1) {
    sentence += " ";
  }

  console.log(sentence);
}

console.log(sentence);

// IN - iterates over and returns a key
const arr = ["one", "two", "three", "four", "five", "six"];

for (let i in arr) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}

// OF - iterates over and returns a key value
for (let i of arr) {
  console.log(i); // "one", "two", "three", "four", "five", "six"
}

// WHILE - first the action, then the condition
let q = 0;
console.log("WHiLE\n");
while (q <= 4) {
  console.log("\t", q);
  q++;
}

// DO WHILE - first the condition, then the action
let w = 0;
console.log("DO WHILE\n");
do {
  console.log("\t", w);
  w++;
} while (w <= 4);

// BREAK

for (let i = 0; i <= question.length - 1; i++) {
  if (question[i] == "your") {
    console.log("Key number\n\t", i);
    break;
  }
}

for (let i = 0; i <= question.length - 1; i++) {
  if (i == "3") {
    console.log("Key value\n\t", question[i]);
    break;
  }
}
