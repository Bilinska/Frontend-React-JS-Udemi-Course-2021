5 + 10;

let x = 5,
  y = 10,
  z = 15;

console.log(x + y); // returns 15
console.log(x - y); // returns 5
console.log(x * y); // returns 50
console.log(y / x); // returns 2
console.log(x % 2); // returns 1
console.log(x++);   // returns 6
console.log(x--);   // returns 4

var a = 5,
  b = 10,
  c = "5";
var q = a;

console.log(a == c);  // returns true

console.log(a === c); // returns false

console.log(a == x);  // returns true

console.log(a != b);  // returns true

console.log(a > b);   // returns false

console.log(a < b);   // returns true

console.log(a >= b);  // returns false

console.log(a <= b);  // returns true

console.log(a >= c);  // returns true

console.log(a <= b);  // returns true

var p = 5,
  o = 10;

// NOT
console.log("NOT\n\t", !(p < o)); // returns false

console.log("\t", !(p > o)); // returns true

// AND
console.log("AND\n\t", p != o && p < o);  // returns true

console.log("\t", true && true);          // returns true
console.log("\t", true && false);         // returns false
console.log("\t", false && true);         // returns false
console.log("\t", false && false);        // returns false

// OR
console.log("OR\n\t", p > o || p === o);  // returns false
console.log("\t", p < o || p == o);       // returns true

console.log("\t", true || true);          // returns true
console.log("\t", true || false);         // returns true
console.log("\t", false || true);         // returns true
console.log("\t", false || false);        // returns false

// Assignment operator
var d = 5,
  b = 10,
  g = 15;

console.log("Assignment\n\t", (d = b));   // d === 10

console.log("\t", (d += 1));              // d === 11

console.log("\t", (d -= 1));              // d === 10

console.log("\t", (d *= 5));              // d === 50

console.log("\t", (d /= b));              // d === 5

console.log("\t", (d %= b));              // d === 5

console.log("\t", d + b * g);             // d === 155

console.log("\t", (d + b) * g);           // d === 225


