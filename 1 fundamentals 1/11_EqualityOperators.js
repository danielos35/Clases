const age = 12; 
const ageTwo = '12';

// Equal
console.log(age == ageTwo); 
// Equal type
console.log(age === ageTwo);

const favouriteName = Number(prompt("What's you favorite number?"))
console.log(favouriteName);
console.log(typeof(favouriteName)); 

if (favouriteName === 23) { 
    console.log('The number is exactly 23 (number)');
}

// Always use === and before convert the variable to the data need


// Diferent 
if (age !== '12'){

    console.log('Is Diferent');
}