// return an array of all the element that are not in both array 
//* take two arrays arrays as params

// create empty array to hold all the different items 
//starting with array1 loop though it 
//if element includes in both array do nothin
//if element not includes and is not already in different items array push it different items 

const differentItems = [];

const checkMatchedInArray = (arrayToCheck, checkeeArray) => {
  arrayToCheck.map((element) => {
    if (!checkeeArray.includes(element) && !differentItems.includes(element)) {
      differentItems.push(element);
    }
  })
}

const array1 = [1,2,3,4,5];
const array2 = [4,5,6,7,8];

const array1Checked = checkMatchedInArray(array1, array2);

const array2Checked = checkMatchedInArray(array2, array1);

console.log(differentItems);