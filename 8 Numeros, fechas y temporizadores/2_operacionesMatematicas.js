// .................RAIZ CUADRADA.......................
    // 1. con libreria Math
    console.log(Math.sqrt(81));
    // 2. Con expresión
    console.log(81 ** (1/2));
    
    // ...................RAIZ CUBICA............
        // 1. denominador hace referencia al tipo de raiz que queros sacar
        console.log(81 ** (1/3));


//................MÁXIMO VALOR...................
    //1. con libreria math
    console.log(Math.max(1,3,4,5,2,2,9));

    //2. funciona a pesar de ser string || Realiza coherción
    console.log(Math.max(1,3,4,5,2,2,'9'));
    
    //3. En caso de tener mas caracteres NO realiza la coerción
    console.log(Math.max(1,3,4,5,2,2,'9x'));

    // De una arreglo
    let arr = [13,5,6,23,6,1,23,1]
    console.log(Math.max(...arr));
    
// ...............VALOR MINIMO...................
    console.log(Math.min(...arr));
    console.log(Math.min(1,3,4,5,2,2,9));

// ................NUMERO PI....................
    console.log(Math.PI);

    // 1. area del circulo
    console.log(Math.PI*Number.parseInt('10px')**2);

// ................NUMEROS ALEATORIOS......................

    // 1. Genera numeros aleatorios entre 0 y 1
    console.log(Math.random());        
    
    // 2. Con Math.trunc eliminamos los valores decimales
    console.log(Math.trunc(Math.random()*6));
    
    // 3. Generar numeros aleatorios entre 1 y 9
    console.log(Math.trunc(Math.random()*9)+1);          
                                                                                                                              
    // 4. Función para generar intervalos de numeros 
    randomInt = (min, max) => Math.trunc(Math.random()*(max-min)+1)+min; 
    console.log(randomInt(2,5));                 
    console.log(randomInt(-2,12));  
    
    
    // ................REDONDEAR NUMEROS....................
    // 0 Todos los siguientes metodos hacen cohercion de tipos
    
    //1.Math.trunc() elimina toda parte decimal NO redondea.
    console.log(Math.trunc(23.9));
    console.log(Math.trunc("23.9"));
    
    //2.Math.trunc() REDONDEA a la parte decimal mas cercana.
    console.log(Math.round(23.3));
    console.log(Math.round(23.9));
    console.log(Math.round('23.9'));
    
    //3. Math.ceil REDONDEA al numero superior
    console.log(Math.ceil(23.9));
    console.log(Math.ceil(23.1));
    console.log(Math.ceil('23.1'));
    
    //4. Math.floor REDONDEA al numero inferior
    console.log(Math.floor(23.7));
    console.log(Math.floor(23.2));
    console.log(Math.floor('23.2')  );
    
    //5. floor es la mejor opción para redondear numeros, ya que también funciona con negativo
    randomIntFloor = (min, max) => Math.floor(Math.random()*(max-min)+1)+min; 
    console.log(randomIntFloor(12,17));
           
    // 6. To fixed redondea decimales y acepta como argumento cuantos decimales quiere en el numero
    console.log((2.7).toFixed());
    console.log((2.7).toFixed(2));

        // Dejamos los decimales indicados en el argumento
        console.log((2.756).toFixed(3));
        console.log((2.756).toFixed(2));
        console.log((2.756).toFixed(1));
        console.log((2.756).toFixed());
        console.log((2.156).toFixed());
        
        // Siempre devuelve una cadena pero si no queremos un valor numerico agregamos el numero mas
        console.log();
        console.log(typeof 2.156.toFixed());
        console.log(typeof +2.156.toFixed());



































                