
/*
1. Se crea el contexto de ejecución.........
2. Se ejecuta el codigo superior en la computadora (constantes,variables y declaraciones var)
3. Se ejecutan las funciones

*/

/*

Entorno de variables
1. Let, const and var declarations.
2. Functions.
3. Arguments objects

*/



//

/*
Es el codigo que no se enuentra dentro de ninguna función 

*/

// Global execution
let globalVar = 'Daniel'; 

window.console.log('Hola Mundo');
console.log('Hola mundo');
function testScope(){
    let internaVar = 12; 
    console.log('Hola Mundo dentro de una función');
    console.log(internaVar);
    console.log(this.globalVar);
}

testScope()