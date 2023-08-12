// if a-b =< 0 return 


function alphabeticalOrder(arr) {
    return arr.sort((a, b) => 
         a.localeCompare(b));
}

//make arr letters 
newArr = ['a','f','z','w']


let data = alphabeticalOrder(newArr);

console.log(data);