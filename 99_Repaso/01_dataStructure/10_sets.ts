/*
SETS

- Es una coleccion de valores unicos, por tal no se pude tener ningún duplicado. 
- El orden de los elementos es irrelevante 
- No se pude acceder directamente a los datos de un set
*/ 


let setData:Set<any> = new Set([4,5,5,5,6,7,8,8,9,1]);
console.log(setData);
 

let setString:Set<string> = new Set('Hola Mundo'); 
console.log(setString);


// PROPIEDADES
// Longitud
console.log(setString.size);

// ver si tiene un elemento 
console.log(setData.has(4));

// Agregar elemento
console.log(setData.add(12));

// Eliminar elementos 
console.log(setData.delete(4));

// Eliminar todos los elementos 
console.log(setData.clear());

// Pueden ser iterados
for(let item of setString){
    console.log(item);
    
}




