// .............CUANTIFICADORES...................

    // 1. "*" busca 0 o mas coincidencias del caracter encontrado

        // Letras, la letra 'e' es obligatoria mientras que la s es opcional y con cualquier numero de repeticiones 
        console.log('este es es un test de prueba esssss'.match(/es*/g));
        
        // Numeros
        console.log('0.23 0.323 0.2321 0.222'.match(/0.2*/g));
        
    // 2. "+" busca mas de una coincidencia en el caracter indicado
        
        console.log('este es un test de prueba esssss'.match(/es+/g));
        console.log('0.23 0.323 0.2321 0.251'.match(/0.2+/g));
        
        // 3. "?" El catacter es opcional y solo trae UNA SOLA COINCIDENCIA a diferencia de * que las trae todas 
        console.log('este es un test de prueba esssss'.match(/es?/g));
        console.log('0.23 0.323 0.2321 0.222'.match(/0.2?/g));

    // 3. {x,y}

        // a. usar solo {x} indica el numero de repecitiones
        console.log('holaaaaaa'.match(/hola{2}/g));
        
        // b. al usar {x,} indicamos que puede ser desde el numero x de repeticiones (siempre trae el mayor numero de repeticiones)
        console.log('holaaaaaa'.match(/hola{2,}/g));
        
        // c. al usar {x,y} indicamos desde x numero de repeticiones hasta y numero de repeticiones (siempre trae el mayor numero de repeticiones)
        console.log('holaaaaaa'.match(/hola{2,4}/g));

        // d. usando ? podemos limitar al menor numero de repeticiones
        console.log('holaaaaaa'.match(/hola{2}?/g));
        console.log('holaaaaaa'.match(/hola{2,}?/g));
        console.log('holaaaaaa'.match(/hola{2,4}?/g));