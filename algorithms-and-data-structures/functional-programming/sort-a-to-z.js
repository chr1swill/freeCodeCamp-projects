// if a-b =< 0 return 


function alphabeticalOrder(arr) {
    return arr.sort((a,b) => {
        a =< b ? 1 : -1
    })
}