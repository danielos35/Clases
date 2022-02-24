// ....................................INTERNACIONALIZACIÓN.........................................

    // Recursos
        let fecha = new Date()

    // 1. Para internacionaliar un dato, primero debemos de crear un formateador, con la información del pais y el lenguaje
        
        // Fecha formateada EEUU
        let fechaFormateada1 = new Intl.DateTimeFormat('en-US').format(fecha);
        // Fecha formateada Colombia
        let fechaFormateada2 = new Intl.DateTimeFormat('es-CO').format(fecha);
        // Fecha formateada Españá   
        let fechaFormateada3 = new Intl.DateTimeFormat('es-ES').format(fecha);
        // Fecha Siria
        let fechaFormateada4 = new Intl.DateTimeFormat('ar-SY').format(fecha);
        
        console.log(fechaFormateada1);
        console.log(fechaFormateada2);
        console.log(fechaFormateada3);
        console.log(fechaFormateada4);
        
        // Tabla con todos los idiomas
        // http://www.lingoes.net/en/translator/langcode.html
        
        
    // 2. Podemos agregar nueva propiedades a la fecha con un segundo argumento.....................................
        
        // Propiedades
        let prop = {
            hour:'numeric',
            minute:'numeric'
        };
        let fechaFormateada5 = new Intl.DateTimeFormat('es-ES',prop).format(fecha);
        console.log(fechaFormateada5);
        
        // Fechas con mas propiedades (el segundo argumento resivirá como argumento un objeto con las propiedades que se quiere mostrar; fechas, dias, horas minutos etc)
        let fechaFormateada6 = new Intl.DateTimeFormat('es-ES',{
            day:'numeric', 
            year:'numeric', 
            month:'numeric',   
            minute:'numeric', 
            second:'numeric', 
        }).format(fecha);
        console.log(fechaFormateada6);

        let fechaFormateada7 = new Intl.DateTimeFormat('es-ES',{
            day:'numeric', 
            year:'numeric', 
            month:'long',   
            minute:'numeric', 
            second:'numeric', 
        }).format(fecha);

        console.log(fechaFormateada7);

        let fechaFormateada8 = new Intl.DateTimeFormat('es-ES',{
            day:'numeric', 
            year:'numeric', 
            month:'2-digit',   
            minute:'numeric', 
            second:'numeric',
            weekday:'long' 
        }).format(fecha);

        console.log(fechaFormateada8);

        let fechaFormateada9 = new Intl.DateTimeFormat('es-ES',{
            day:'numeric', 
            year:'numeric', 
            month:'short',   
            minute:'numeric', 
            second:'numeric',
            weekday:'short' 
        }).format(fecha);

        console.log(fechaFormateada9);
    
    // 3. OBTENER LA CONFIGURACIÓN DESDE EL NAVEGADOR

        let idiomaDedeNavegador = navigator.language;
        console.log(idiomaDedeNavegador);

        // Aplicando a una fecha
        let desdeNavegador = new Intl.DateTimeFormat(idiomaDedeNavegador).format(fecha);
        console.log(desdeNavegador);
        

// NOTAS................................................

        // 1. Los meses se escribirán siempre en el idioma que le pasemas en la configuración del Intl.DateTimeFormat
        // 2. Documentación de formato de intl https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl