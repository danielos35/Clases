// ............................EVENTOS..................
    // 1. Es una señal generada por cierta acción importante
    
        // a. mouseenter
            // Se acciona cuando el mouse pasa por encima del elemento
            const h1 = document.querySelector('h1'); 
            h1.addEventListener('mouseenter', function(){
                alert('Hola Mundo ')
            })

            //Podemos llamarla directamente desde el elemento
            let h2 = document.querySelector('div');
            h2.onclick = function(e){
                alert('Hola Mundo 2');
            } 





    /*
    
    
         Enlaces con todos los eventos: https://developer.mozilla.org/en-US/docs/Web/Events
    */