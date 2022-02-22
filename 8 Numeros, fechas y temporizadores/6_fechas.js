// ...................................FECHAS...........................

    // Crear una fecha.................................................
        // 1. Crear fecha con el cosntructor
            
            // a. Fecha actual
                const fechaUno = new Date()
                console.log(fechaUno);

            // b. Analizando una cadena 
                const fechaDos = new Date('Aug 02 2020 18:05:41')
                console.log(typeof fechaDos);
                console.log(fechaDos);

                // Forma 1
                const navidad = new Date('December 24, 2022')
                console.log(navidad);

                // Forma 2
                const sanValentin = new Date (2020, 14, 02); 
                console.log(sanValentin);

                // Forma 3 - Los meses en JavaScript inician desde el numero 0  (enero = 0)
                const myBirthay = new Date(1998,10,13, 15, 03, 11)
                console.log(myBirthay);

                // Forma 4 - en caso de dar un dia que sobrepasa el numero del mes por ejemplo abril 38, esos dias restantes serán sumados al mes siguiente (Mayo)
                const diaMujer = new Date(1998,03,38, 15, 03, 11)
                console.log(diaMujer);

                // Forma 5 - Podemos obtener el tiempo inicial (UNIX)
                console.log(new Date(0)); 

                // Forma 6 -  Convertimos a tres dias depues del UNIX
                console.log(new Date(3 * 24 * 60 * 60 * 1000));


    // Trabajando con fechas .....................................................
        const futuro = new Date(2030,10,13, 15, 03, 11);
        console.log(futuro);

        // 1. Obtener año
            console.log(futuro.getFullYear());
            // NO USAR getYear
            console.log(futuro.getYear());

        // 2. Obtener mes 
            // El mes es en base 0
            console.log(futuro.getMonth());
            // Para obtener el mes en base uno, simplemente sumamos 1 
            console.log(futuro.getMonth()+1);

        // 3. Obtener el dia del mes 
            console.log(futuro.getDate());

        //  4.Obtener el dia de la semana 
            console.log(futuro.getDay());

        // 5. Obtener la hora
            console.log(futuro.getHours());

        // 6. Obtener minutos 
            console.log(futuro.getMinutes());

        // 7. Obtener segundos  
            console.log(futuro.getSeconds());

        // 8. OBTENER CADENA BIEN FORMATEADA con estandares internacionales
            console.log(futuro.toISOString());

        // 9. Obtener marca de tiempo desde el unix
            console.log((new Date(0)));
            let marcaDeTiempo = futuro.getTime();
            console.log(marcaDeTiempo);       
        // 10. Con la marca de tiempo también podemos crear una fehcha
            console.log(new Date(marcaDeTiempo));

        // 11. Obtener la maca de tiempo actual 
            console.log(Date.now());

        // 12. Cambiar fecha 
            console.log(futuro.getFullYear());
            futuro.setFullYear(2050)
            futuro.setDate(12);
            futuro.setHours(8);    
            futuro.setMinutes(10);
            futuro.setSeconds(10);
            console.log(futuro);

        
// ...................CONVERTIR FECHAS.................................................

    //1. Creamos la fecha 
    let fechaActual = new Date(); 
    console.log(fechaActual);

    // 2. Obtenemos cada uno de los datos que nos interesa 
    let year = fechaActual.getFullYear();
    let mes = fechaActual.getMonth()+1;//Ya que los meses están en base 1
    let dia =  fechaActual.getDate(); 
    let hora = fechaActual.getHours();
    let minuto = fechaActual.getMinutes();
    let segundo = fechaActual.getSeconds();
    console.log(`Nuestra fecha actual es:${dia}/${mes}/${year} con hora ${hora} minuto ${minuto} con ${segundo}`);

    
    