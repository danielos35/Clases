

// ........................................FILTER............................................

let arr = [1,2,3,4,5,6]; 

// Retorna los elementos que cumplan con una determinada condición, NO MUTA la matriz principal, sino que devuelve un arreglo


/*

Tiene los mismos argumentos que las funciones forEach y map
- Elemento
- Indice del elemento
- Arreglo

*/ 

arr.filter((res, index, array)=>{
    console.log(res);
    console.log(index);
    console.log(array);
})


/*
Filter devolvera aquellos valores verdaderos 
*/ 

let arreglo = [4,2,3,4,5]; 
console.log(arreglo.filter((res)=> res<3));



// Solo devolver valores positivos
let valores = [-100, -20, 50, -400, 34, 12, -6]; 
console.log(valores.filter((res)=> res>0));

// Solo devolver valores negativos
console.log(valores.filter((res)=> res<0));


// ...............Diferencia con un ciclo for.............
let valoresMenores = []

for(let i of valores) if (i>0) valoresMenores.push(i);


console.log(valoresMenores);