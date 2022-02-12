const numeroVuelo = 'jumbo2000'; 
const daniel = {
    name:'Jonas Schmedtmann', 
    passport: 123435 
}

const checkIn = function(numeroVuelo, pasajero){
    numeroVuelo = 'H12233'; 
    pasajero.name = 'Daniel Márquez'; 
    if(pasajero.passport === 123435){
        console.log('alert');
    }else{
        'No alert'
    }

}

// Cuando cambiamos las propiedades de un objeto, al ser estas una referencia al objeto estos cambiam, 

// En el caso de ser las propiedades de un primitivo, estas no se modifican, pues se crea un nuevo espacio en memoria y y una nueva referencia a este espacio.

checkIn(numeroVuelo,daniel);
// NO CAMBIA 
console.log(numeroVuelo);

// CAMBIA AL SER UN OBJETO
console.log(daniel);

// ..................................................................
// En la funcion anterior en el primitivo es como si hiceieramos esto 

const copyNumero = numeroVuelo; 
const copyObject = daniel; 

console.log();



// CCNCLUSIONES...........................................

/*
Pasar un tipo primitivo a una función es como crear una copia de de la variable


Pasar un objeto es pasar la misma referencia de memoria y por tanto las modificaciones se veran reflejadas en el objeto original 

*/


// ..............EJEMPLO DE LA VIDA REAL....................
const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000); 
}
// Al tener dos funciones manipulando el mismo objeto, los valores de este objeto se puden modificar
newPassport(daniel)
checkIn(numeroVuelo, daniel); 
console.log(numeroVuelo);
console.log(daniel);


// NOTA
/* Javascript NO tiene paso por referencia, tiene paso por valor, cuando se le asigna a una variable un dato, ese dato hace referencia a un valor que hace referencia al espacio de memorio donde se va a almacenar */ 
