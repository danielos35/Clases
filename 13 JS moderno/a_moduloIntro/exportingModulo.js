// MODULO EXPORTADO

console.log('Modulo exportado');
export let nombre = 'Daniel Márquez' 
let apellido = 'Márquez'; 
let edad = 23; 

export {apellido, edad}

// Exportar con un nombre diferente 
let apodo = 'Dani'; 
let verNombre = function(){
    console.log(nombre);
}
export {apodo as sobrenombre, verNombre as imprimirNombre}