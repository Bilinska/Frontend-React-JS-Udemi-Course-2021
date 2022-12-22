2, 0.5, NaN, Infinity       // number
"Hello", 'world 1', `!`     // string
true, false                 // boolean
null                        // null
undefined                   // undefined
Symbol()                    // symbol
2n                          // bigint
{}                          // object

console.log(typeof null);

let string = 'string';
console.log(string.length);
console.log(string[0]);

console.log("word"[2]);
console.log(`Amanda`.length);

console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(9007199254740992n + 5n);

console.log(Symbol() === Symbol());

const persone1 = {
  firstName: 'Iryna',
  lastName: 'Bilinska', age: 27
};

console.log(persone1);
