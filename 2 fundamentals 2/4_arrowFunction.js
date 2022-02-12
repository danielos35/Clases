// Function expression
const calAge = function (year){
    return 2021 - year; 
}

// Function declarations

function calAge2(year){
    return 2021 - year; 
}

// Arrow
    //Return explicity
    
const calAge3 = year => 2021 - year;
console.log(calAge3(1977));


// Example 2
//  When we use keys, need return in the function
//  When we have multiples params, we need the params between the parentesis
const yearUntilRetirement = (birthayYear, name) =>{
    const age = 2037 - birthayYear; 
    const retirement = 65 - age;
    return `your retirement ${name} is in ${retirement}` 
}

console.log(yearUntilRetirement(1998)); 



// Example
const daniel = test => 23 - test
console.log(daniel(12));