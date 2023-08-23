// set string to lower cases
//split string by " "
// loop through array
// if you on thr last element of the array just add the element
// if not on the last one add the index + "-" to array
// take that new array and run join.("")

const title = "A Mind Needs Books Like A Sword Needs A Whetstone";

const setToLowerCase = (string) => {
  return string.toLowerCase();
};

const setToArrayOfWords = (string) => {
    return string.split(" ");
}

const titleToLowerCase = setToLowerCase(title);

const splitTitle = setToArrayOfWords(titleToLowerCase);

console.log(splitTitle)

