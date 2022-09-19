// TYPE CONVERSION
// This is when we explicitly want to convert from one  data type to another

const inputYear = "1991";

// to convert the string back to number

console.log(Number(inputYear) + 18, typeof inputYear);

// conversion of a data type that's technically not a number will give "NaN" result

const myName = "Qozeem";
console.log(Number(myName));

// conversion of number to string

const myAge = 24;
console.log(String(myAge));

// javascript can only convert to 3 types i.e number, string and boolean

// we rarely have to do type conversions ourselves because javascript automatically does this for us and this is known as type coersion

// TYPE COERSION
// type coersion happens whenever an operator is dealing with two values of different types

console.log("I am " + 23 + " years old");

// also not all operators do type coersion to strings. minus operator converts strings to number instead
console.log("23" - "10" - 3);
console.log("23" + "10" + "3");

// also, strings are converted to numbers with the division operator, inequality operators, and multiplication operator
console.log("23" / "2");
console.log("23" * "2");
console.log("23" > "2");
