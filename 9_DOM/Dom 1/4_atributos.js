// ............................ATRIBUTOS...........

    //Recursos
    let imagen  = document.querySelector('.imagen')
    console.log(imagen);

    // 1. Obtener atributos 

        // a. Para acceder podemos usar simplemente nombreSelector.atributo
            console.log(imagen.alt);
            console.log(imagen.src);
        
        // b. Puede ser usada para cambiar imagnes
        // c. Solo se puede acceder a los atributos propios del selector 
        // d. Clase debe de ser accedido como className 
          console.log(imagen.className);

    
    // 2. Obtener atributos personalizados
        
        // a. Para leer atributos personalizados se utiliza getAtribute()

            console.log(imagen.getAttribute('atributoPersonalizado'));


    // 3. Asignar valor al atributo 

        imagen.alt = "Hola Mundo";
        imagen.src = "Hola SRC"
        imagen.className = "Hola SRC"

        console.log(imagen.alt);
        console.log(imagen.src);
        console.log(imagen.className);
        
        
        // 5. Crear nuevo atributo desde JS 
        
            // a. selector.setAtrubute('nombreAtributo', 'valor de el atributo') ambos argumentos SIN ESPACIOS
                imagen.setAttribute("DesdeJS", "valor del atributo")
            
        
        
        // 6. Traer el atributo relativo 
            console.log(imagen.getAttribute('src'));
            console.log(imagen.src);

            const link = document.querySelector('.enlace')
            
            // a. Trae toda la URL 
            console.log(link.href);

            // b. Trae solo lo escrito en el HTML
            console.log(link.getAttribute('href'));


        // 7 Data atributes

            // a. Son atributos personalizados que inician con data 
            
                const atributoPersonalizado = document.querySelector('.dataAtributes');
            
            // b se accede mediante camelCase a pesar de que en el HTML esté con guión

                console.log(atributoPersonalizado.dataset.versionPagina);