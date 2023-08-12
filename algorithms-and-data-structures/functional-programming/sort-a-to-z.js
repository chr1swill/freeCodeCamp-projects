// if a-b =< 0 return 


function alphabeticalOrder(arr) {
    return arr.sort((a,b) => {
         a === b ? 0 : a < b ? 1 : -1;
    });
}

newArr = [1,3,14,5]

let data = alphabeticalOrder(newArr);

console.log(data);