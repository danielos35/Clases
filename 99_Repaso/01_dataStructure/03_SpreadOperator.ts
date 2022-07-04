// Agregar elementos de un arreglo desde otro arreglo
const arr = [5,6,7]; 
const arrDos = [1,2,3,4,...arr]; 
console.log(arrDos);


// Obtener elementos individuales
console.log(...arrDos); 


// Copiar arreglo 
const copiaArray = [...arr]; 
console.log(copiaArray);



// Crear nuevo arreglo desde otros dos
const arreglos  = {arrOne : [1,2,3], arrTwo : [3,2,1]};
const nuevoArregloDesdeOtrosDos = [...arreglos.arrOne, ...arreglos.arrTwo]; 
console.log(nuevoArregloDesdeOtrosDos);

/*
ITERABLES 
-  Arrays
-  Strings
-  Maps
-  Sets
-  (NOT OBJECTS)
*/ 

// String
console.log(...'holaMundo');




// OBJETOS, puede ser utilizado para la compia de objetos 
const empleadoUno = {
    nombre:'Daniel',
    tel:123
}

const empleadoDos = {...empleadoUno};
console.log(empleadoUno);
console.log(empleadoDos);

empleadoDos.nombre = 'Pepito';

console.log(empleadoUno);
console.log(empleadoDos);











// Pasar como argumentos de una función (No funciona en TS)

/*

let verNumeros = function(numOne:number,numTwo:number,numThree:number){
    console.log(numOne, numTwo, numThree);   
}

const valores = [1,2,3];
verNumeros(...valores)



*/ 

export {}