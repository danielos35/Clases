// ................LITERALES............................

    // 1. /\n/ busca todos los saltos de linea
        let texto = `Hola
        este 
        es
        un
        mensaje
        `
        console.log(texto.match(/\n/g));

    // 2. /\t/g busca los lugares en donde se tenga tab

        let textoTab = `    Hola este    es  un  tabulador`
        console.log(`    Hola    este    es  un  tabulador`.match(/\t/g));

        console.log(`\t \t`.match(/\t/g));

    // 3. \u permite buscar la letra por su unicode

        console.log('ñ'.match(/\u00f1/g));

    // 4. Para buscar caracteres especiales en particular

        console.log('$asdas#$'.match(/\$/g));
        console.log('$as#as^^#$'.match(/\#/g));
        console.log('$as#as^^#$'.match(/\^/g));

        