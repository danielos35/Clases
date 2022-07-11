/*
OBJETOS LITERALES
- A partir de ES6 podemos nombrar los objetos de manera literal, utilizando solo el nombre dentro del elemento
- Aplica también para los metodos.

*/ 

let nombre = 'Daniel'; 
let apellido = 'Marquez'; 
let tel = 1234; 
let sumar = function(){
    return 2+2
}

let objLiteral = {
    nombre,
    apellido,
    tel,
    sumar
};

console.log(objLiteral);


/*
PROPIEDADES CUADRADAS
- los nombres de los elementos pueden ser creados dentro de corchetes
*/ 


let nombres  = ['varOne', 'varTwo', 'varThre']; 

let conNombresDinamicos = {
    [nombres[0]]:'nombre',
    [nombres[1]]:'test',
    [nombres[2]]:'test',
}; 


console.log(conNombresDinamicos);
