// .................CONJUNTO DE CARACTERES...........

    //1. [] las llaves permite buscar todos los caracteres dentro de las llaves
    
        let abc = /[hmn]/gi; 
        console.log('hola Mundo'.replace(abc,'-'));
        console.log();

    // 2. Patrones Pre-establecidos

        let mayusculas = /[A-Z]/g; 
        console.log('HolA mUndo'.replace(mayusculas,'-'));

        let minusculas = /[a-z]/g; 
        console.log('HolAmUndo'.replace(minusculas,'-'));
        
        let todosLosNumeros = /[0-9]/g; 
        console.log('HolAmUndo12398Test121'.replace(todosLosNumeros,'-'));

    // 3. Patrones personalizados

        let a_d = /[a-d]/g; 
        console.log('abcdefg'.replace(a_d, '_'));

        let tres_ocho = /[3-8]/g; 
        console.log('123455678910'.replace(tres_ocho, '_'));


    // Replazar la contrario a lo indicado en la expresión regular

        let test = /[^ab]/g; 
        console.log('abdfer'.replace(test,'_'));