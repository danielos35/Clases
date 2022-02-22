// ................SEPARADORES NUMERICOS..............
    // 1. Podemos usar _(Guión bajo como separador numerico), y esto no afectara el numero, pero ayudará a su lectura
        const miDinero  = 200_000_000; 
        console.log(miDinero);

    
    // 2. Puede ser usado también con valores decimales 
        const decimal = 10.2_2; 
        console.log(decimal);
    
    // 3. NO funciona al convertir strings 
        console.log(Number('23_00000')); 
        console.log(parseInt('23_00000')); 
    
    // 4. No puede ser usado antes y despues del punto 
        // let decimalDos = 10_.12; 
        // let decimalDos = 10._12; 
        // console.log(decimalDos);

    // 5. Tampoco puede ser colocados dos guiones bajos seguidos
        // let dosNumeros = 10__12; 

