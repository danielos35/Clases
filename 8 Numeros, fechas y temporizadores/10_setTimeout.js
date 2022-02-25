'use strict'

// ........................SETTIMEOUT.......................

    // 1.Se usa para ejecutar algún codigo en el futuro
        
        // 1. Argumento, codigo a ejecutar
        // 2. tiempo de ejecución, en minisegundos
        setTimeout(()=> console.log('Hola Mundo'), 2500)  
        console.log('Hola Dos');
        
        // 3. Los argumentos siguientes seran los argumentos que se le pasarán a al callback (primer argumento)
        let pizza = setTimeout((ing1, ing2)=>{
            console.log(`Pizza con ${ing1} y ${ing2}`);
        },1000, 'arroz', 'papa')
        
        // 4. La ejecución del codigo no se detiene
        // 5. en caso de querer cancelar un setTimeout, lo podemos hacer con  la función clearTimeout

        if(2>1) clearTimeout(pizza)

    