// lesson 8
// flow control operator

// if (<Condition>) { <Statements> };
// <Conditions> - always are logical, comparison operators

let l = 0;
if (l) {
  console.log("Condition\n\t", l);
}

if (l === 0) {
  console.log("Condition\n\t", l);
}

if (l) {
  console.log(a);
} else {
  console.log("var 'a' is not a truthy");
}

const hour = 19;

if (hour < 11) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

switch (new Date().getDay()) {
  case 0:
    console.log("Swithch\n\t", "It's Sunday!");
    break;
  case 1:
    console.log("Switch\n\t", "It's Monday!");
    break;
  case 2:
    console.log("Switch\n\t", "It's Tuesday!");
    break;
  case 3:
    console.log("Switch\n\t", "It's Wednesday!");
    break;
  case 4:
    console.log("Switch\n\t", "It's Thursday!");
    break;
  case 5:
    console.log("Switch\n\t", "It's Friday!");
    break;
  case 6:
    console.log("Switch\n\t", "It's Sanday!");
    break;
  default:
    "Switch\n\t", "It's not aday!";
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log("It's the weekend!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's not the weekend!");
    break;
  default:
    console.log("It's not a day!");
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's not the weekend!");
}

let j = 10, t = 5;

const v = j > t ? j : t;
console.log(v);
