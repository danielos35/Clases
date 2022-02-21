// .............NUMEROS..........................

    /* 
    1. todos los numeros en JS se representan como numeros float (de coma flotante)
    */ 

    console.log(23 === 23.0);


    /*
    2. los numero se almacenan en formato 64 base 2 (binario)
        Algunos numeros son dificiles de representar en sistema binario como el 0.1
        a. En base 10 (nuestros numeros actuales) 0.1 es 1/10 = 0.1 y también se puede tener problemas para representar 3/10 = 3.33333333
        b. En el sistema binario para representar 0.1 obtenemos una fracción infinita.
        c. JS hace algunas aproximaciones para ocultar estos errores pero en ciertas ocasiones no es tan eficiente, como en 0.1 
        d. PHP y Ruby utilizan el mismo sistema
    */ 

    console.log(0.1+0.2);


    /*
    NO SE RECOMIENDA JS para calculos cientificos o financieros, pues se pueden encontrar problemas como estos:
    */ 


    console.log(0.1+0.2 === 0.3);

// ............CONVERTIR STRINGS A ENTEROS............

    /*
    1. La manera mas sencilla de convertir un string a numeros es usar el operador + adelante del string, ya que po inferencia, convertira este valor a numero.
    */ 
   console.log(typeof'23');
   console.log( typeof Number('23'));
   console.log( typeof +'23');


// ...............ANALSIS..........................

    // Number.parseint()...........................
        /*
        1. Con Number.parseINT Podemsos analisar si un numero hace parte de un string, siempre y cuando este comience con el numero
            NO FUNCIONA cuando el dato inicia con otros caracteres
        */ 

        console.log(Number.parseInt('12HolaMundo'));
        console.log(Number.parseInt('HolaMUndo12'));
        
        /*
        2. Argumentos
        a. El dato a analisar
        b. Una expresión regular
        */ 
       console.log(Number.parseInt('12px',10)); //Indica base 10
       console.log(Number.parseInt('12px',2)); //Indica base 2 (Binario)

    // Parse Float................................ 

        /*
        1. Misma función de numeros enteros pero con numeros flotantes 
        */ 
        console.log(Number.parseFloat('12.9HolaMundo'));
        console.log(Number.parseFloat('HolaMUndo12'));
        
        /*
        2. Si usamos nNumber.parseInt() solo obtenemos el numero entero, y se otirá el numeor flotante
        */ 

        /*
        3. Los espacios en blanco no afectan (desde que esten al inicio o al final del string)
        */ 

        console.log(Number.parseFloat('     12.9HolaMundo    '));
        
        
    // PLUS.....................................
        /*
        1. Ambas funciones puden ser llamadas sin usar Number, son globales, pero se recomienda siempre usar NUMBER
        2. Es usado normalmente para leer valores de CSS, una propiedad por ejemplo
        */ 
       console.log(parseFloat('     12.9HolaMundo    '));
       console.log(parseInt('     12.9HolaMundo    '));


    // IsNAN....................................................
        /*
        1. Verifica si NO es un numero NOT A NUMBER
        */ 

        console.log(Number.isNaN(12));
        console.log(Number.isNaN('12'));
        console.log(Number.isNaN(+'12Hola'));
        console.log(Number.isNaN(23/0));

    // isFinite.................................................
        /*
        1. Ver si el numero es infinito
        2. Es la mejor manera de verificar si es un numero 
        */ 

        console.log(Number.isFinite(23/0));
        console.log(Number.isFinite(2));
        console.log(Number.isFinite(0.1+0.2));
        console.log(Number.isFinite('HolaMundo'));
        console.log(Number.isFinite('3'));
    
    // isInteger............................................

        /*
        1. Verificar si es un numero enteri
        */ 
        console.log(Number.isInteger('12'));
        console.log(Number.isInteger(12));
        console.log(Number.isInteger(23/9));

    