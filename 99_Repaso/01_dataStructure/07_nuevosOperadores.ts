
interface rest {
    name:string,
    pedido:number,
    owner:string,
}

let restOne:rest = {
    name:'DanielRest',
    pedido:12, 
    owner:null
}

let restTwo:rest = {
    name:'FamiliaRest',
    owner: 'Mis padres', 
    pedido:0
}


/*

||= (O igual)
- Este operador mira si la propiedad tiene un valor asignado, y en caso de no tenerla le asigna el que le indiquemos
- No funciona para typeScript.
- Asignará un valor diferente a false.
*/ 


restOne.owner ||= 'Daniel Márquez'; 
console.log(restOne);

// Tambien aplica con el valor null
restTwo.pedido ??= 12; 
console.log(restTwo);



// Remplazar el valor en caso que exista
let restaurante = {
    nombre:'Si el valor existe lo remplaza'
}

restaurante.nombre &&= 'Nombre test';
console.log(restaurante);

