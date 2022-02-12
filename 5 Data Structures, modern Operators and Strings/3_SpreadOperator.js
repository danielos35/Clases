// Generar un arreglo de nuevos datos (Manera incorrecta)
const arr = [3,5,6]; 
const barArr = [1,2,arr[0], arr[1], arr[2]]; 
console.log(barArr);

// Manera correcta
const goodArr = [1,2, ...arr]; 
console.log(goodArr);


// Cada vez que necesitemos los valores individuales de una matix podemos usar el Spread Operator
console.log(...goodArr);
console.log(1,2,3,4,5,6);


// Crear nuevo string en un array 
 const alimentos = {
    bebidas:[
        'agua', 
        'CocaCola', 
        'Té'
    ]
 }
 console.log(alimentos.bebidas);

//  INCORRECTO

// let bebidasIncorrecto = [alimentos.bebidas[0], alimentos.bebidas[1], alimentos.bebidas[2],'Café', 'Milo']
// console.log(bebidasIncorrecto);
// bebidasIncorrecto.shift('agua'); 
// console.log(bebidasIncorrecto);
// console.log(alimentos.bebidas);

let masBebidas = [...alimentos.bebidas,'Café', 'Milo']
console.log(masBebidas);

masBebidas.shift('agua'); 
console.log(masBebidas);



// COPIA DE ARREGLOS
let arr1 = [1,2,3]; 

// Utilizando el operador spread puedo generar una copia de los valores de un arreglo y no de su referencia en memoria (se genera un nuevo espacio en memoria)
let arrCopy = [...arr1]; 

console.log(arr1, arrCopy);
arrCopy.shift(1); 
console.log(arr1, arrCopy);


// Fucionar dos matrices 
let arrOne = [1,2,3,4]; 
let arrTwo = [5,6,7]; 
let join = [...arrOne, ...arrTwo]; 
console.log(join);


// NOTAS

// Este operador solo podemos utilizarlo en lugares donde los elementos estén se parados por comas, ya que el expande los valores, mas NO los asigna a ninguna variable

// El operador spread solo funciona con iterables (arrays, strings, maps, sets, NOT in objects)
let nombreCompleto = 'Daniel Felipe'; 
let separado = [...nombreCompleto];
console.log(separado);

let unidoNuevamente = ''; 
for(i in separado){
    unidoNuevamente+=separado[i];  
}
console.log(unidoNuevamente);



// EN UNA FUNCIÓN 
let ingredientes = ['arroz', 'Maiz', 'Pasta']
const imprimir = function(ingrediente1, ingrediente2, ingrediente3){
    console.log(`Estos son mis igredientes:  ${ingrediente1}, ${ingrediente2}, ${ingrediente3}`);
};

imprimir(...ingredientes)


// Este operador lo podemos usar para la copia de objetos

const persona = {
    name:'Daniel', 

}; 


const newPerson = { carro:[1,2,3],...persona};
console.log(newPerson);



