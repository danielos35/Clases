// .......................OPERACIONES ENTRE FECHAS............................

    // 1. RestarFechas (Para conocer cuantos dias han pasado ente esa fecha); 
        let cumple = new Date("1998/11/13"); 
        let hoy = new Date(); 

        //a. El resultado siempre se dará en minisegundos
        let diferencia = hoy-cumple;

        // b. Para convertirlos a seundos, minutos, horas o dias utilizamos lo siguiente
        console.log(diferencia/(1000*60*60*24)); //1000ms,60s,60min, 24hour





// NOTAS
    // 1. Para obtener el valor absoluto podemos usar Math.abs()
        console.log(Math.abs(-12));

    // 2. Libreria para fechas muy util es momentjs
        // https://momentjs.com/
