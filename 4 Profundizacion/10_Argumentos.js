'use strict'

// Para acceder a los argumentos de una función podemos usar la palabra reservada arguments 

const ejemplo = function(a,b){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}


// A pesar de tengamos los argumentos ya definidos podemos agregar aún mas y acceder a ellos directamente desde al objeto que se crea
ejemplo(12,3,12,3,1,3)

// ESTO NO ESTA DISPONIBLE EN LA FUNCIÓN FLECHA 