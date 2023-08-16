// iterate through array and check if number is positive 

// if the number is positive keep it ig not on to the next 

// take that new array and create another array with thr left over number to the power of 2 

const arr = [2,2.3,-4,-5.6]
    
 //const positiveIntegers = arr.filter((index) => Number.isInteger(index) && index > 0);
    
//const toPowerTwo = positiveIntegers.map((index) => Math.pow(index, 2))
    
const positiveIntegers = array => array.filter((index) => Number.isInteger(index) && index > 0);
const toPowerTwo = array => array.map((index) => Math.pow(index, 2);

const getPositiveIntegers = positiveIntegers(arr);
const getPostivesToPowerTwo = toPowerTwo(getPositiveIntegers)

    
console.log(arr)
console.log(getPostivesToPowerTwo)
