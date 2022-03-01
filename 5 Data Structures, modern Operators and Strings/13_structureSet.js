// Creacion de set // Conjuntos
// No muy usado
const ejemploSet = new Set([
    'Daniel', 
    'Felipe',
    'Daniel', 
    'Marquez',
    'Alvarez', 
    'Daniel',  
    'Alvarez',
    'Alvarez'
]); 

console.log(ejemploSet);

// Es diferente a un arreglo ya que el orden no importa y estos no tienen indices ni llaves
// Podemos ver la longitud de un set 
console.log(ejemploSet.size);

// Podemos ver si un elemento se encuentra en el arreglo
console.log(ejemploSet.has('Daniel'));
console.log(ejemploSet.has('Jose'));


// Agregar nuevos elementos a un set
console.log(ejemploSet.has('HolaMundo'));
ejemploSet.add('HolaMundo')
console.log(ejemploSet.has('HolaMundo'));

// Eliminar elementos de un set 
console.log(ejemploSet.has('HolaMundo'));
ejemploSet.delete('HolaMundo')
console.log(ejemploSet.has('HolaMundo'));

// Podemos recorrer los set/conjuntos con la palabra reservadad of 
for(let i of ejemploSet){
    console.log(i);
}


// Limpiar todo el conjunto
console.log(ejemploSet);
ejemploSet.clear(); 
console.log(ejemploSet);

//Podemos crear un set a partir de una cadena
console.log(new Set('Daniel'));

// USO REAL
// Se usa frecuentemente cuando queremos saber los elementos unicos de un arreglo o base de datos

let cargos = ['Mesero', 'Cocinero', 'Camarero','Camarero','Camarero', 'Mesero', 'Chef', 'Chef']; 

// Creando un conjunto de ellos podemos saber los elementos unicos del arreglo
let cargosConjunto = new Set(cargos)
console.log(cargosConjunto);



// Convertir conjuntos a arreglos: 
let arregloCargos = [...cargosConjunto]; 
console.log(arregloCargos);


// Si queremos conocer cuantos caracteres tiene una cadena podemos usar conjuntos
console.log(new Set('Daniel').size);
console.log(('Daniel').length);



// Dato curioso, en caso de tener llaves repetidas, el objeto traera al ultimo valor con esa llave
nombre = {
    nombre:'Daniel', 
    nombre:'Jose', 
    nombre:'Lucas'
}; 


console.log(nombre.nombre);

