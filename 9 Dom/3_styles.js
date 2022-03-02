// ..................................STYLES.......................

    // rescursos
    let estilos = document.querySelector('div'); 
    console.log(estilos);

    //1. Asignar un estilo directamente.................................................................................
        
        //a.  Siempre tenemos que incluir la unidad (px rem etc); 

            estilos.style.backgroundColor = "#37383d"
            estilos.style.width = "200px";
            estilos.style.height = "200px";

        // b. Este estilo CSS se ejecuta directamente en el DOM (en el documento HTML) (Son estilos en linea); 


    // 2. Obtener estilos declarados en el JS.........................................................................

        // a.Los estilos que nosotros mismos asignemos dentro de JS (como por ejemplo el anterior COLOR, ANCHO y ALTO), los podremos tambien obtener
            console.log(estilos.style.backgroundColor);
            console.log(estilos.style.width);
            console.log(estilos.style.height);

        // b. NO SE PUEDE trar estilos definidos en el CSS de esta manera

    // 3. Obtener TODOS los estilos desde el CSS................................................................................

        //a.  se utiliza getComputedStyle('selector').propiedad
            console.log(getComputedStyle(estilos).background);
            console.log(getComputedStyle(estilos).display);
            console.log(getComputedStyle(estilos).justifyContent);

        // b. al usar solo getComputedStyle(selector) traerá todas las propiedades 
         console.log(getComputedStyle(estilos));

        // c getComputedStyle(selector) retorna un estring 

    // 4. Acceder a variables de CSS............................................................................................

        // a. Las variables en el CSS se acceden mediante el document

        // b. se accede mediante  document.documentElement.style.setProperty('--nombre-variable', 'propiedadDeLavariable')

            document.documentElement.style.setProperty('--color-primario', '#FFFFFF');
            document.documentElement.style.setProperty('--color-primario', 'red');