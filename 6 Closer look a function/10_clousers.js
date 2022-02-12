// ..................CLOUSERS...............................


// Hace que una funcion tenga dentro de su alcance todas la variables que necesita dentro de su contexto de ejecuci'on desde que estas se encuentre dentro del contexto de

// por ejemplo en la siguiente función la funcion que se retorna seguira teniendo acceso a passengerCount a pesar de que lo unico que se retorna es la función en si misma. 

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger `);
  };
};


const booker = secureBooking(); 

booker(); 
booker(); 
booker(); 


// Con Dir podemos ver todas las variables y el ENTORNO en el que estas se encuentran 

console.dir(booker)
// Una función siempre tiene acceso a las variables que se encuentrarn en  el contexto de ejecución donde esta fue creada. 



// ......CLOUSER.... 
// Es este entorno variable adjunto a la función exactamente, como estaba en el momento en que fue creada la función, a pesar de que este ya se haya ido de la callstack. 



// IMPORTANTE
// A pesar de que haya una varaiable en contexto de ejecución actual de la función que se llame exactamente igual a la que se encuentra en el clouser, esta seguira haciendo referencia primero al clouser 

