
// ERROR 404

    // Cuando la busquedad NO se encuentra.

    let getCoutryRefactor = function(country){

        let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);
        peticionFecth.then(res=> 

            {            
                // Para capturar un error 404 debemos hacerlo dentro del bloque de codigo, accediendo a la propiedad .ok
                if(!res.ok){
                    console.log('tienes un error ',res.status);    
                }
                return res.json()
            }).then(
                datos=>{console.log(datos)}
            )        
    }

    getCoutryRefactor('holaMUndo')

