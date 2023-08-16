// iterate through array and check if number is positive 

// if the number is positive keep it ig not on to the next 

// take that new array and create another array with thr left over number to the power of 2 

const squaredList = arr => {
    const positiveIntegers = arr.filter((index) => Number.isInteger(index) && index > 0)
    console.log(positiveIntegers([1.7, 6, -5, -1.2]))