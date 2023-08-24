// function checkPositive(arr) {

////// didn't work because of the return
//   arr.every(function (index) {
//     return index >= 0;
//   });
// }

// console.log(data);

const checkPositive = (arr) => {
  return arr.every((index) => index >= 0);
};

console.log(checkPositive([1, 2, 3, -4, 5]));
