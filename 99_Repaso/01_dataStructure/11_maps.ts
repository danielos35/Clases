/*
MAPS
- Estructura de datos que usamos para asignar valores a claves
- En los maps los keys pueden tener cualquier tipo de dato


TIPADO
- tipo de dato del Key
- tipo de dato del valor
*/ 


let restaurante:Map<any,any> = new Map();


/* 
AGREGAR ELEMENTOS MEDIANTE SET
- Argumento #1: key
- Argumento #2: Valor
- Set también retorna el map por tanto se puede encadenar
*/

restaurante.set(false,'testFalse'); 
restaurante.set(true,'testTrue'); 
console.log(restaurante.set(12,'Daniel'));


/*
OBTENER LOS ELEMENTOS MEDIANTE GET
- Argumento #1: key
*/ 

console.log(
    restaurante.get(false)
);
