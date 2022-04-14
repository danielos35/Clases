
// PROMESA RECHAZADA

    // La unica forma en la que se rechaza una promesa, es cuando se pierde la conexión a internet, eso se puede simular directamente desde el navegador (network)




    let getCoutryRefactor = function(country){

        // Petición
        let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);

        // Para manejar errores podemos pasar un segundo callBack, el cual se enviará cuando la consulta sea rechazada
        peticionFecth.then(

            // Argumento 1
            res=> res.json()
            
            // Argumento 2 (se llama cuando la petición es rechazada, y el argumento es el error)
            // err=> alert(err)

            )
        
        // Then se 
        .then(

            datos=>{
                let [data] = datos
                console.log([data])}


        )
        
        // PERO LA MEJOR MANERA DE ADMINISTRAR LOS ERRORES ES MEDIANTE CACTH 
                // Los errores capturados mediante catch tienen la propiedad message, mostrando solo el mensaje de error
        .catch(err=>console.log('este es el error',err.message))

        // Finally es un metodo que se lanzará pase lo que pase despues de la promesa
            // Puede ser usado par ocultar el spinner de carga
        .finally(res=>{console.log(res);})
    }

    let btn_error = document.querySelector('.error');
    btn_error.addEventListener('click',function(){
        getCoutryRefactor('brazil'); 
    })


// NOTAS
    // Orden de ejecución despues del fetch
        // Then se llama cuando se cumple la promesa.
        // catch cuando se rechaza la promesa.
        // finally se llama pase lo que pase 

    // El error 404 no es atrapado por el catch, pues a pesar de que no se pueda hacer una colsuta, la promesa se cumplirá
    