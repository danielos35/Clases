// ............................EVENTOS..................
    // 1. Es una señal generada por cierta acción importante
    
        // a. mouseenter

            // Se acciona cuando el mouse pasa por encima del elemento
            const h1 = document.querySelector('h1'); 
            h1.addEventListener('mouseenter', function(){
                alert('Hola Mundo ')
            })

            //Podemos llamarla directamente desde el elemento, NO SUELE SER MUY USADA.

            const h2 = document.querySelector('h2');
            h2.onmouseenter = function(e){
                alert('Hola Mundo 2');
            } 


    // 2. Eliminar eventos
    
        // a.  Llamamos al selector
            let h3 = document.querySelector('h3'); 

        // b. se recomienda crear la función fuera del addEventListenner y dentro de ella llamar al removeEventListener para removerlo
            let alerta = function(e){
                alert('Hola mundo 3')
                h3.removeEventListener('mouseenter',alerta)    
            } 



        //c. Lo pasamos al evento (SIN LOS PARENTESIS)
            h3.addEventListener('mouseenter',alerta);







    // NOTA.

    // 1. Cuando se activa un evento este se genera en la raiz (ver archivo adjunto), que en este caso seria el document

    /*
    
    
         Enlaces con todos los eventos: https://developer.mozilla.org/en-US/docs/Web/Events
    */