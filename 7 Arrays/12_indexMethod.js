// ......FIND INDEX,...........

/*
retorna el index del elemento encontrado
*/ 


/*
ARGUMENTOS
- Elemento. 
- Indice.
- Arreglo
*/ 





let arr = [1, 2, 3, 4, 4, 4, 65, 7, 5, 4];

arr.findIndex((elemento, indice, arreglo, test)=>{
    console.log(elemento);
    console.log(indice);
    console.log(arreglo);    
})


let indexArr = arr.findIndex((res)=> res==65) 
console.log(indexArr);



// Eliminar un numero si está en esa función

let arregloDos = [2,3,4,5,6,7,3,5]; 
console.log(arregloDos);
let eliminarNumero = function(array){
    return array.splice(array.findIndex((elemento)=>elemento==7),1);
}

eliminarNumero(arregloDos)

console.log(arregloDos);




// Diferencia a indexMethod
/*

indexOf a diferencia de findIndex no acepta un callback y no se le pude indicar una condición como argumento, solamente un valor a buscar en el arreglo
-  A pesar de lo anterior ambos devuelven  un numero simple 
*/ 

console.log(  
    arr.indexOf(2)
); 
