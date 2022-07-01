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

// 


