//* return the sum of all numbers in a range 
//* take two params thses are not order dependant and the logic will interperate the lesser of the two number to be the first and other to be second before running the script

// create areay to hold numbers 
// figure out which number is greatest and which is least of params
// find all the whole numbers between two params 
// add those number to an array
// reduce that array to get the sum 
const x = 6;
const y = 12;

let numbers = [];

const lowNumber = Math.min(x, y);
const highNumber = Math.max(x,y);

for (let i = lowNumber; i <= highNumber; i++) {
  numbers.push(i);
}
console.log(numbers)
 
const sumOfNumbers = array.reduce((a,b) => a + b);

