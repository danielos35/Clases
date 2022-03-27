// 1. DOMContentLoaded...............
    // Se ejecuta cuanto ha cargado el HTML y JS, NO espera a que se cargen las imagenes, CSS u otros elementos. 

    document.addEventListener('DOMContentLoaded',function(e){
        console.log('Solo HTML y js', e);
    })


//  2. Load
    // Espera a que se carguen todos los elementes, imagenes y CSS
    window.addEventListener('load', function(e){
        console.log('Todo listo (con CSS y imagenes)',e);
    })


//  3. Despues de hacer click en el botón de cierre 
    // window.addEventListener('beforeunload', function(e){
    //     e.preventDefault();
    //     e.returnValue ='Ya no podemos escribir nada :(';
    //     console.log(e);
    // })
