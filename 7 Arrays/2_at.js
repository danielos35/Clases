
// METODOS


// ..............at...............
    //Permite acceder un elemento de un arreglo 
    let arr = [23,11,64,]
    console.log(arr[0]);
    // console.log(arr.at(0));


    // Util para traer el ultimo elemento
        console.log(arr[arr.length-1]);
        console.log(...arr.slice(-1));
        console.log(arr.slice(-1)[0]);
        console.log(arr.at(-1));

    // También funciona con strings
        console.log('Hola Mundo'.at(-1));