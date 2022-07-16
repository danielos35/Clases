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



let restaurant:Map<any,any> =  new Map();

restaurant.set( true, 'Abierto'); 
restaurant.set( false, 'Cerrado'); 
restaurant.set( 'Open', 8) 
restaurant.set( 'Close', 10 ); 
restaurant.set( 2, 10 ); 

let horaApertura =  8;

console.log(restaurant.get(horaApertura >= restaurant.get('Open') && horaApertura <= restaurant.get('Close')));



console.log(
    restaurant.has('Open')
);

console.log(restaurant.delete(2));
console.log(restaurant.size);
console.log(restaurant.clear());
console.log(restaurant.size);

let arr =  [1,2,3]
restaurant.set(arr, 'HolaMundo'); 

console.log(
    restaurant.get(arr)
);
