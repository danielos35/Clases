// import prompt from 'prompt';
// each value is call propiety

// Literal sintaxis

const daniel = {

    firstName: 'Daniel', 
    lastName: 'Marquez', 
    age: 2021 - 1998, 
    marrie: false, 
    friends: ['Jose', 'Jesus', 'Maria'], 
    23: 'Age'

}

console.log(daniel);

// Access

console.log(daniel.lastName);

// Access with a expresion
console.log(daniel['lastName']);
console.log(daniel[20+3]);

const name = 'Name'
console.log(daniel['last'+name]);
console.log(daniel['first'+name])
;


// Show a emerge window
// const interestedIn = prompt('Hola, cual es tu nomnbre?');

// if(daniel[interestedIn]){
//     console.log(daniel[interestedIn]);
// }else{
//     console.log('Error');
// }

// Add values 
daniel.country = 'Colombia'; 
daniel['Social'] = 'No aplica'; 

console.log(daniel['country']);
console.log(daniel.Social);
let testNombre = 12
console.log(daniel['lastName'].length);