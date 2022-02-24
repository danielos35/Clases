// ..................................FORMATEAR NUMEROS A REGIONES...............................


    // Recursos..............................................................................

        // tabla con todos los idiomas
    
    // 1. Internacionalización básica........................................................

        let num = 1020202022.1213; 
        
        // Formato colombiano
          console.log(new Intl.NumberFormat('es-Co').format(num));
        
        // Formarto estadunidense
            console.log(new Intl.NumberFormat('en-US').format(num));

        // Formato Aleman
            console.log(new Intl.NumberFormat('de-DE').format(num));
            
            // Desde el navegaot 
            // let idiomaNavegador = navigator.language;
            // console.log(new Intl.NumberFormat(idiomaNavegador).format(num));
            
            
            // 2. Podemos pasar propiedades como un objeto............................................
                
                // 1. Construir propiedades (unidades de velocidad)
                let propiedades = {
                    style:"unit",
                    unit:"mile-per-hour"
                }
                
                console.log(new Intl.NumberFormat('de-DE', propiedades).format(num));
                console.log(new Intl.NumberFormat('en-US', propiedades).format(num));
                console.log(new Intl.NumberFormat('es-CO', propiedades).format(num));
            
            
                // 2. Construir propiedades (Porcentaje)
                let propiedades2 = {
                    style:"percent",
                    // unit:"mile-per-hour"   Se ignora esta propiedad
                }
                
                console.log(new Intl.NumberFormat('de-DE', propiedades2).format(num));
                console.log(new Intl.NumberFormat('en-US', propiedades2).format(num));
                console.log(new Intl.NumberFormat('es-CO', propiedades2).format(num));

                // 3. Construir propiedades (Moneda)
                let propiedades3 = {
                    style:"currency",
                    // unit:"mile-per-hour" - se ignonra esta propiadad
                    currency:'EUR' //Pero se debe de agregar el tipo de moneda ya que no está definida por ubicación y la moneda debe ser elegida manualmente
                }
                
                console.log(new Intl.NumberFormat('de-DE', propiedades3).format(num));
                console.log(new Intl.NumberFormat('en-US', propiedades3).format(num));
                console.log(new Intl.NumberFormat('es-CO', propiedades3).format(num));
                
                
                // 4. Construir propiedades (Moneda Colombiana)
                let propiedades4 = {
                    style:"currency",
                    // unit:"mile-per-hour" - se ignonra esta propiadad
                    currency:'COP' //Pero se debe de agregar el tipo de moneda ya que no está definida por ubicación y la moneda debe ser elegida manualmente
                }
                
                console.log(new Intl.NumberFormat('de-DE', propiedades4).format(num));
                console.log(new Intl.NumberFormat('en-US', propiedades4).format(num));
                console.log(new Intl.NumberFormat('es-CO', propiedades4).format(num));
                
                
                // 5. Construir propiedades (Moneda Colombiana) omitiendo separadores
                let propiedades5 = {
                    style:"currency",
                    // unit:"mile-per-hour" - se ignonra esta propiadad
                    currency:'COP', //Pero se debe de agregar el tipo de moneda ya que no está definida por ubicación y la moneda debe ser elegida manualmente
                    useGrouping: false //Podemod omitir los separadores
                }
                
                console.log(new Intl.NumberFormat('de-DE', propiedades5).format(num));
                console.log(new Intl.NumberFormat('en-US', propiedades5).format(num));
                console.log(new Intl.NumberFormat('es-CO', propiedades5).format(num));


                let numero = '';
console.log(!numero);