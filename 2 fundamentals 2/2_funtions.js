'use strict'

// Statement

function imprimir(){
    console.log('Hello Word');
}

// Calling / running / invoking
imprimir();


// Parameters
function fruits(apples, oranges){


    console.log(apples + ' ' + oranges);
    return apples;

}

let frutaDaniel = fruits('manzana', 'naranja')
console.log(frutaDaniel);


// Save function with param 
let frutas = fruits('manzana', 'naranja'); 
console.log(frutas);
console.log(fruits('manzana', 'naranja'))

let frutasDos = fruits('naranja','manzana');
console.log(frutasDos); 






