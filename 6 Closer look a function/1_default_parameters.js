'use strict'

const bookingArray = []; 
const param = 12;
const year = 1998; 
const actualYear = 2022;

const createBooking = function(
    // ES6 (declarar un valor por defecto en los parametros con = )
        
    fligtNum = 1, 
        // puedo realizar operaciones si así lo deseo 
    numPassengers = 1*12-2,

        // O le puedo indicar una variable
    price = param,

        // O una operacion entre dos variables (una puede ser un parametro ANTERIOR YA DEFINIDO)
    age = actualYear - price
    
    ){

    // ES5 form (NO USAR)
        // Los valores toman por defecto undefined, pero puedeo definir el tipo mediante operadores 
        // fligtNum = fligtNum || 1; 
        // numPassengers = numPassengers || 1; 
        // price = price || 1;


    const booking ={
        fligtNum, 
        numPassengers, 
        price,
        year
    }

    console.log(booking);
    bookingArray.push(booking)
}

createBooking()

// Si queremos dejar un argumento sin utilizar en una función debemos de usar el undefined 
createBooking(123,undefined,12,1)
 