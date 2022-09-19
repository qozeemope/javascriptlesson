// coding challenge 1

// data 1

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// data 2

const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

// bmis

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// OUTPUT

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's by ${markBMI - johnBMI}`);
} else {
  console.log(`John's BMI is higher than Mark's by ${johnBMI - markBMI}`);
}
