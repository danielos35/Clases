// En caso de que ambos valores sean true 

console.log(12 && 'Hola');
console.log('Hola' && 12);

// En caso de que tengamos valores falsos, devolverá el primero de ellos

console.log(12&&null&&undefined&&'');


const imprimir = function(variable){
    console.log(variable);
}

// Ejemplo practico 
let num = 21; 
num && imprimir(num); 

