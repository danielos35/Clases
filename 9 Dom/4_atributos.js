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


    // 4. Crear nuevo atributo desde JS 

        // a. selector.setAtrubute('nombreAtributo', 'valor de el atributo') ambos argumentos SIN ESPACIOS
        imagen.setAttribute("DesdeJS", "valor del atributo")
        

