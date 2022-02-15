// ............................EVERY......................................
/*Devuelve true en caso de que todos los elementos de el arreglo cumplan con la condición*/
let arr = [1, 2, 3, 4, 4, 4, 65, 7, 5, 4];
console.log(arr.every(res=>res>0));
console.log(arr.every(res=>res<0))


/*ARGUMENTOS
- Elemento. 
- Indice. 
- Arreglo
*/


console.log(
    
    arr.every(
        (elemento, indice, arreglo)=>{
            console.log(elemento);
            console.log(indice);
            console.log(arreglo);
        }
    )
    );



    // ................NOTA......................
    /*Podemos escribir antes una función y despues llamarla*/ 


// Condicion 
let funcionCondicion = function(res){
    return res<0; 
}


// Y se pasa como callback del metodo 

console.log(

    arr.some(funcionCondicion), 
    arr.filter(funcionCondicion), 
    arr.every(funcionCondicion), 
    
);



// NOTA.....

/*
Cuando una función se pasa como callback y esta función ya ha sido declarada, como en el ejemplo anterior, debe sin pasar sin parentesis, 
Ejemplo function holaMundo(res){return res}, debe ser pasada como arreglo.map(holaMundo)

*/ 