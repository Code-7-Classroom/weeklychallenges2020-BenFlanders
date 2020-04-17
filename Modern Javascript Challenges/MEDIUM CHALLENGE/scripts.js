// MEDIUM CHALLENGE SOLUTION

const numArray = [3, 6, 4, 5, 2, 1];

let average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average(numArray));