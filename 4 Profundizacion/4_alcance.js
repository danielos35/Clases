
/*


............CONCEPTOS......................


1.1 ALCANCE DE LAS FUNCIONES

El alcance de las funciones está determinado a donde escribamos el codigo

SCOPE (alcance)

Espacio o entorno donde se declara una variable

SCOPE DE UNA VARIABLE 

Espacio de nuestro codigo en donde podemos acceder a una variable




..........TYPOS DE SCOPE....................


GLOBAL SCOPE 

Codigo que se almacena en el nivel superior, que se declaran fuera de cualquier funcion o bloque


FUNCTION SCOPE (Local scope)

las variables son accesibles solo dentro de la función


BLOCK SCOPE (ES6)

# Todo lo que está entre llaves 
- Condicionales (if )
- Ciclos (while, for)
 Solo aplica a las variables declaradas con let o const



*/



// NOTAS IMPORTANTES 

/*

BUSQUEDAD DE VARIABLES

Cada tipo de alcance tiene acceso a las variables del alcance que lo contiene, por ejemplo si un bloque de codigo se encuentra dentro de una función, dentro del bloque de codigo  se podra acceder a las variables globales y de la función dentro de la que se encuentra (NO FUNCIONA AL REVES)*/


// GLOBAL
let name = 'daniel'; 
console.log(name);

// FUNTION
function functionScope(){
    let nameInFunctionLet =  'Felipe'; 
    var nameInFunctionVar = 'Jesus'; 
    console.log(name);
    console.log(nameInFunctionLet);
    console.log(nameInFunctionVar);
    if(true){
        let nameInBlockLet = 'Jose'; 
        var nameInBlockVar = 'Pedro';
    }

    console.log(nameInBlockVar);

}


functionScope()

let daniel = 'nombre'
console.log(daniel);



// CONCLUSIONES

/*
SCOOPE 
Es el alcance.


CALLSTACK
Es el contexto de ejecución 

SCOPE CHAIN
Busquedad de las variables en sus scoope anteriores

*/