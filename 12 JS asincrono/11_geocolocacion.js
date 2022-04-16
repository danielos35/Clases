'use strict'
// Averiguar Geocolocación


    // Al ser una función asincrona se cargará despues de que cargue el resto del codigo no asincrono

        // navigator.geolocation.getCurrentPosition(
        //     posicion=>console.log(posicion),
        //     error=>console.error(error)
        //     )

    // Codigo 

        console.log('Star');

    // Obtener como promesa para consumir como tal 

    let obtenerCoordenadas = function(){
       return new Promise(function(resolve, reject){
         navigator.geolocation.getCurrentPosition(
            posicion => resolve(posicion), 
            error => reject(error)
        )

        // Función mas corta, pero menos entendible
            // navigator.geolocation.getCurrentPosition(resolve,reject)
    })}

    obtenerCoordenadas().then(res=>{
        // Desestructurar y asignarle nuevo nombre

        const {latitude:lat, longitude:lng} = res.coords;
        console.log(lat,lng);
        
        console.log(res.coords)})