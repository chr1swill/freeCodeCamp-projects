// if a-b =< 0 return 


function alphabeticalOrder(arr) {
    return arr.sort((a,b) => 
        a < b ? a===b ? 1 : -1;
    );
}

newArr = [1,2,3,4,5]

let data = alphabeticalOrder(newArr);

console.log(data);