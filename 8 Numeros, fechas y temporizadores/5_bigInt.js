// ..............................CONTEXTO.............................
// NO USAR EN BACKEND JS PARA OPERACIONES PRECISAS
    /*
    Los numeros en JavaScrip se representa con 64 bits, 
        - 53 bits de esas posiciones son para almacenar el valor del numero 
        - 11 bits son utilizados para guardar el punto decimal y los sigos
        
    */

    // 1. - Por lo anterior los numeros en javaScript tienen un limite numerico para representar de forma segura
        console.log(2**53-1);
        console.log(Number.MAX_SAFE_INTEGER);
        // Cualquier numero mayor no va a ser representado con presición 
        console.log(2**53+1);
        console.log(2**53+0);
        // En ciertas ocasiones JS tiende a representar los numeros de manera correcta, pero en ciertas ocacsiones NO

// ..............................BIGINT...........................

    // 1. Para solucionar el anterior problema se introdujo un nuevo tipo de datos que puede almacenar cualquier tipo de dato , por mas grande que sea el valor
    // 2. Este dato lo representamos agregando una 'n' al final del numero 
    console.log(1212121222222223141651667563314131n);
    // 3. También lo podemos crear usando la función BigInt 
    console.log(BigInt(1212121222222223141651667563314131));
        // Esta función debe de usarse con numeros mas pequeños
    console.log(BigInt(1212121222222223141651667563314131));
    console.log(BigInt(12121212222222));
    

    // ....................OPERADORES.......................................
        // 1. Pueden ser usados todos los operadores normales
            console.log(10000000000000n+20000000000000000000000000000000n);
        // 2. ambos valores deben de ser BigInt
            // console.log(10000000000000+20000000000000000000000000000000n);
        // 3. NO funciona con operadores === ya que son datos diferentes
            console.log(20n === 20);

        // 4. Si funciona con el operador doble 
            console.log(20n == 20);

        // 5. Puede ser convertido a string 
        console.log(200000000000000000000000000000n+'Hola Mundo');

        // 6. No funciona con la libreria Math
            // console.log(Math.sqrt(81n));
        
        // 7. En el caso de hacer divisiones que den como resultado un numero decima, hará la aproximación 
            console.log(10n / 3n);
            console.log(11n / 3n);
            console.log(9n / 3n);
            console.log(10 / 3);
