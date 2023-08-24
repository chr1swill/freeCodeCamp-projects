// set string to lower cases
//split string by " "
// loop through array
// if you on thr last element of the array just add the element
// if not on the last one add the index + "-" to array
// take that new array and run join.("")

const title = " Winter Is  Coming";

const setToLowerCase = (string) => {
  return string.toLowerCase();
};

const setToArrayOfWords = (string) => {
  return string.split(" ");
};

const addDashToEnd = (array) => {
  return array.map((word, index) => {
    if (index === array.length - 1 || word === "") {
      return word;
    } else {
      return word + "-";
    }
  });
};

const joinedArray = (array) => {
  return array.join("");
};

const titleToLowerCase = setToLowerCase(title);

const splitTitle = setToArrayOfWords(titleToLowerCase);

const withDashAtEnd = addDashToEnd(splitTitle);

const urlSlug = joinedArray(withDashAtEnd);

console.log(splitTitle);
console.log(withDashAtEnd);
console.log(urlSlug);
