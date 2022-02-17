// .....Formas tradicionales
    //....1......
    let arreglo = [1,2,3,4,5]; 
    
    //....2 creandolo como un objeto......
    let array = new Array(1,2,3,4,5)

    console.log(arreglo);
    console.log(array);


// .........Mediante el constructor 
    // Se generará un arreglo con el numero de elementos que indiquemos dentro del constructor
    let arregloConstructor = new Array(7); 
    console.log(arregloConstructor);

    // NO PODEMOS USAR LOS METODOS TRADICIONALES EN UN ARREGLO VACIO

    // ....................FILL...........................MUTA  
        // ARGUMENTO 1 -  VALOR A PASAR
        // Pero podemos usar el meotodo fill, el argumento que pasamos será usado para llenar todos los campos de la matrix
        console.log(arregloConstructor.fill(1+2));


        // ARGUMENTO 2 - POSICIÓN DESDE LA QUE SE VA A RELLENAR
        // Podemos también expecificar desde que posición empezar a rellenar esa matrix
        console.log(arregloConstructor.fill(2,3));
        
        
        // ARGUMENTO 3 -  POSICIÓN HASTA LA QUE SE VA A RELLENAR CON EL VALOR INDICADO
        console.log(arregloConstructor.fill(0,2,5));


        // FILL NO SOLO FUNCIONA EN ARREGLOS VACIOS SI NO TAMBIÉN EN ARREGLOS CON VALORE YA ASIGNADOS



// ......CREAR ARREGLOS DESDE EL OBJETO ARRAY......................
    // ......................FROM..........................
    // Usamos from para crear un nuevo arreglo con diferentes valores desde 
    // ARGUMENTOS
    /*
    - longitud de la matrix {length:N}
    - callaback con el retorno a rellenar (como si fuera map)
        ARGUMENTOS
        - Elemento
        - Indice
    */ 


    let desdeArray = Array.from({length:5},(element    , index,array)=> index+1); 
    console.log(desdeArray);