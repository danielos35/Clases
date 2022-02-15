// ..........................SOME.............................
/*
- A Diferencia de includes que compara directamente el valor con los que están dentro del arreglo con SOME podemos evaluar una condición, por tanto hacepta una callback
-  El metodo some devueve un valor booleano  


includes---> igualdad. 
some-------> Condición.

*/


let arr = [1, 2, 3, 4, 4, 4, 65, 7, 5, 4];
console.log(arr.includes(4));




/*
Al igual que map, filter, reduce y demas some lanza como argumentos del callback. 
- Elemento.
- Indice.
- Arreglo
*/ 
console.log(arr.some((elemento,indice,arreglo, tes)=>{
    console.log(elemento);
    console.log(indice);
    console.log(arreglo);
}));



// SOME con una condición
    //Hay numeros mayores que 10? 
let someRespuesta  = arr.some((res)=>res>10)

console.log(someRespuesta);