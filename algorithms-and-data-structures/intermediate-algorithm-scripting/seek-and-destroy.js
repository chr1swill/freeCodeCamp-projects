// create empty array for results 
// create var for index 0
// create var for the rest of the args
// loop through the index0Array 
// check if current index is the restOfArgs 
// if so do nothing 
// else push index to emptyArray


const nonMatches = [];

function destroyer(arr) {
  const arrayToCheck = arguments[0];
  const arrayDoingChecking = Array.from(arguments).slice(1);
  
const result = arrayToCheck.filter((currentItem) => {
  return !arrayDoingChecking.includes(currentItem);
})

nonMatches.push(...result);
return result;
}

let test1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3)
let test2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(test1, test2) 