'use strict';
// MANERA TRADICIONAL

/*...............................

    // 1. Traer todos los elementos de una clase 

        let links = document.querySelectorAll('.link');
        console.log(links);

        // Lo mismo a 
        let link = document.querySelectorAll('.link')
        console.log(link);
        
        // Recorremos el arreglo
        links.forEach(function(res){
            
            //A cada elemento le asignamos una función  
            res.addEventListener('click', function(e){

                // Evitar ir al enlace por defecto del html
                e.preventDefault()

                // Obtenemos el atributo del enlace a donde queremos movernos 
                let id = this.getAttribute('href');


                // Siempre usar las funciones tradicionales, las funciones flecha NO tiene THIS
                let atributoHref = this.getAttribute('href');
                console.log(atributoHref);

                // Seleccionar el elemto a donde nos vamos a desplazar 
                let destino = document.querySelector(atributoHref); 

                // Nos desplazamos con scroll intoView
                destino.scrollIntoView(
                    {behavior:'smooth'}
                )
            })
        })

...........................*/


    // 2. La anterior NO es una buena practica ya que para cada uno de los elementos está creando una nueva función, y en ese caso de ser por ejemplo 10000 elementos crearia 10000 elementos que afectarian el rendimiento
        
// DELEGACIÓN DE EVENTOS (Manera optima)

    //1. Primero debemos de identificar a nuestro elemento padre
    //2. Despues definir que elemento originó el evento.


    //1. Identificar elemento padre

        // Elemento padre
        let padre = document.querySelector('.padre'); 

        //Llamar a la función
        padre.addEventListener('click', function(e){

            // Identificamos que elemento la llamo mediante e.target
            console.log(e.target);

            // Evitar ir al enlace por defecto del html
            e.preventDefault()

            // Validamos que el elemento efectivamente contenga la clase solicitada 
            console.log(e.target.classList.contains('link'));
            if(e.target.classList.contains('link')){


                // Obtenemos el atributo del enlace a donde queremos movernos 
                let id = e.target.getAttribute('href');


                // Siempre usar las funciones tradicionales, las funciones flecha NO tiene THIS
                let atributoHref = e.target.getAttribute('href');
                console.log(atributoHref);

                // Seleccionar el elemto a donde nos vamos a desplazar 
                let destino = document.querySelector(atributoHref); 

                // Nos desplazamos con scroll intoView
                destino.scrollIntoView(
                    {behavior:'smooth'}
                )
                
            }
        })

    
// La delegación de eventos es importando ya que nos permite también agregar eventos a elementos que no se encuentran aun en tiempo de ejecución
    
    
