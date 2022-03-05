//................. CLASES.................
    
    //1. El punto (.); 

        // Se encarga de encontrar todas las coincidencias con caracteres alfanumericos 

        let punto = new RegExp(/./,'g');
        console.log(punto.test('12ABab%.'));

    // /\w/g Se encarga de coincidir con letras, guiones bajos y numeros\

        let palabra = '(@34a_S%DSsDZA35$#*' 
        let soloLetrasYGuiones = /\w/g; 
        console.log(palabra.replace(soloLetrasYGuiones, '_'));
        console.log(soloLetrasYGuiones.test('%'));
        console.log(soloLetrasYGuiones.test('_asdeA'));

    // /\w/g Coincide con todo lo que no sea una letra o un guion bajo
    
        let noLetras = /\W/g; 
        console.log(palabra.replace(noLetras, '_'));
        console.log(noLetras.test('%$%^&@'));
        console.log(noLetras.test('abABCD'));

    // /\s/g Coincide con los espacios entre las palabras

        let espacios = /\s/g; 
        let palabraDos = ' Asds Asda   _   Asded      Srerasd  Asrwe'
        console.log(palabraDos.replace(espacios,''));

    // /\S/ La S mayuscula coincide con todo lo que no sea un espacio

        let noEspacioMayuscula =  new RegExp(/\S/,'g'); 
        console.log(palabraDos.replace(noEspacioMayuscula,'-'));

    // Solo numeros /\d/g

        let soloNumeros = /\d/g; 
        console.log('12345_67_346'.replace(soloNumeros,'='));

    // d todo lo que no sea un numero /\D/g
        let noNumeros = /\D/g; 
        console.log('12345_67_346'.replace(noNumeros,'+')); 
