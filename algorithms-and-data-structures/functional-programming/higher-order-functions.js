// take the array and filter out the negative numbers and the numbers numbers that are not whole

// take that new array and map through the elements using reducs to return the square of every number as a new arr 

const squareList = arr => {
    arr.filter((element) => 
        return element >= 0 && Number.isInteger(element)
    )
}