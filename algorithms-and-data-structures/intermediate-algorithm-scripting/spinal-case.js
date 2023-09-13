// split string by capital letters or "-" or "_"
//loop through array 
// set that that the item to lowercase
// if it is the last element of the array do nothing
// else current index + "-"
// join the array back together

const test1 = "This Is Spinal Tap"
const test2 = "thisIsSpinalTap"
const test3 = "The_Andy_Griffith_Show"
const test4 = "Teletubbies say Eh-oh"
const test5 = "AllThe-small Things"

const splitWords = (string) => string.split(/(?=[A-Z])|[-_]/);

const trimSpace = (array) => array.map((element) => element.trim())


