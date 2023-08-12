// if a-b =< 0 return 


function alphabeticalOrder(arr) {
    return arr.sort((a,b) => {
         a === b ? 0 : a < b ? 1 : -1;
    });
}

//make arr letters 
newArr = ['a','f','z','w']


let data = alphabeticalOrder(newArr);

console.log(data);