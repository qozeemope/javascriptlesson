// falsy values are values that are ot exactly false but will become false whenever we try to convert them into a boolean while reverse is the case for truthy values

// 5 falsy values: 0, " ", undefined, null, NaN
// everything else are truthy values

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// EXAMPLE
const money = 0;
if (money) {
  console.log("Save some 💵 ");
} else {
  console.log("You should et a job! 💪");
}

// money variable is converted into boolean i.e falsy value that mean the else block is executed
