"use strict";

//................ Expresiones de función invocadas inmediatamente.

/*
En javaScript en ciertos momentos necesitamos funciones que se ejecuten una unica vez 
*/

//................. OPTCION UNO.............................
// En este caso tendriamos la posibilidad de ejecutarla mas de una vez
const runOnce = function () {
  console.log("la llamamos una unica vez");
};

runOnce(); 
runOnce();


// ..................OPCION RECOMENDADA (Similar a Lamda en python)

(function(){
    console.log('solo funciona una vez');
})()


// ....................Tambien funciona en FUNCIONES FLECHA....
// (() => console.log('This will ALSO never run again'))();
// (()=>{console.log('Hola Mundo')})();


// Los datos dentro de un función son datos encapsulados y son muy importantes dentro de la programación. 


// Las variables dentro de un bloque de codigo son privadas del scope genral
{
   const privada = 12
   console.log(privada);


   var noPrivada = 13; 
   console.log(noPrivada);
}

console.log(privada);
console.log(noPrivada);