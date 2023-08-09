// take are arg of cities are array

// check if the length is longer than 3 

// if length less than or equal to 3 do nothing 

// else remove all item except for the first three array items 

function nonMutatingSplice(cities) {
    if ( 3 >=  cities.length) {
        return cities;
    } else {
        return cities.slice(0,3);
    }
}

console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]))