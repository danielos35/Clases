// ...............................REDUCE...................


/*

Se utiliza para reducir todos los elementos que hay en una matriz
en uno solo

*/

// ................PARAMETROS...........................
/*
    1. Acumulador: va acumulando todos los elementos del arreglo, no se suma automaticamente con el anterior, se le debe indicar que se sume con el elemento acc + ele 
    2. Elemento actual
    3. Index
    4 El arreaglo

*/ 

arr = [12,3,1,2,4,1,1,1,1]; 
arr.reduce((acc, ele, index, array)=>{
    console.log(acc);
    console.log(ele);
    console.log(index);
    console.log(array);
    return acc + ele
});



// Podemos indicar con que numero va iniciar el acumularor
let inicio = 8; 
arr.reduce((acc)=>{console.log(acc)}, inicio); 
console.log(arr.reduce((arr, elemento)=>arr+elemento, 0));


// Las ventajas de estos metodos es que no necesitan de una variabl externa para realizar el recorrido dentro del arreglo, y devuelven de inmediato el valor
// Reduce devuelve por defecto



// Maximo valor de una matrix
arr2 = [12,3,1,2,4,30000,1,1000,1]; 
console.log(arr2.reduce((valorFinal, elemento)=>{return valorFinal = valorFinal<elemento?elemento:valorFinal;}));
