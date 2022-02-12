'use strict'

const lufthansa = {

    airline: 'lufthansa', 
    iataCode:'LH', 
    bookings:[], 
    book(fligthNum, name){
        console.log(`${name} and ${fligthNum} and airline ${this.airline}`);
        this.bookings.push({flight:`${this.iataCode} ${fligthNum}`})
    }, 

}

lufthansa.book('123','Daniel Márquez'); 
lufthansa.book('321','Dioran'); 


const eurowings = {

    airline: 'EuroWings', 
    iataCode: 'EW', 
    bookings:[] 
}


// .........CALL........................

// Podemos guardar los metodos de una función en una variables y usarla como metodo de otro objeto. 


const book = lufthansa.book; 

//Para usar este metodo en otro objeto debemos de hacerlo con el metodo de función call indicando primero el pbjeto y despues los argumentos. 

book.call(eurowings, '12D' , 'Sandra'); 
console.log(eurowings);


// .....APPLY.................................

const withApply = {

    airline: 'EuroWings', 
    iataCode: 'EW', 
    bookings:[] 
}


// Tambien podemos usar apply pero los argumentos que recibirá será un arreglo
const datos = ['13D', 'Nestor']; 
book.apply(withApply, datos);
console.log(withApply);


// La manera recomendada es con call y ...
book.call(withApply, ...datos); 
