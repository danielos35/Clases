/*
Las matrices son en si mismas objetos, es por eso que tienen metodos, y estos metodos, se adjuntan a todas las matrices que creamos en JavaScript 
*/ 

let arr = ['a','b','c','d','e']; 
let arreglo = arr.slice(); 


// ................SLICE..........(No muta)
    // DEVUELVE (NO MODIFICA LA MATRIZ ORIGINAL) UN ARREGLO DESDE EL INDICE INDICADO HASTA EL INDICE FINAL INDICADO.
    console.log(arr.slice(2));
    console.log(arr.slice(2,4));

    // con un parametro negativo trameos definimos los datos de atras hacia adelante

    console.log(arr.slice(-2));
    console.log(arr.slice(1,-1));
    

    // Tambien puede ser usado para hacer una copia del arreglo. 
    let newArr = arr.slice(); 

    // Similar a 
    let newArrTwo =  [...arr]; 


// .................SPLICE.................(Muta)

    // Muta (modifica) la matriz original, tienen un funcionamiento similar al que tiene SLICE, con la unica diferencia que este no devuelve sino que modifica la matriz original, lo que se indica dentro del metodo quita los elementos dentro de la matriz

    console.log(newArr.splice(2));
    console.log(newArr);

    // Es comunmente utilizado para eliminar datos de una matriz. 

    // También pueden ser usados numeros negativos para eliminar las ultimas posiciones.
    console.log(newArr.splice(-1));
    

    // Cuando indico parametro inicial y final indico el rango de elementos que deseo eliminar, el ultimo parametro indica cuantos ellementos quiero eliminar a partir del indice.

    console.log(newArrTwo.splice(1,3));



// .................REVERSE.....................(Muta )

    // Retorna el arreglo de atras hacia adelante, mutando (modificando) el arreglo original
    console.log(arreglo.reverse());
    console.log(arreglo);


// .................CONCAT........................ (No muta)
    // Es utilizado para concatenar dos matrices

        // la matriz con la que es llamada el metos es la matriz inicial y la que se pasa en el argumento es la segunda matriz 

        // Puedo pasar las matrices que desee en los argumentos para concatenar 
    let letras = arr.concat(newArr, newArrTwo); 
    console.log(arr);
    console.log(newArr);
    console.log(letras);
    console.log(arr);

        // Similar a

    console.log([...arr, ...newArr]);


// ....................JOIN........................(No muta)
    // retorna un string uniendo los elementos del arreglo por el caracter indicado como argumento
    console.log(letras.join('--'));
    console.log(letras);