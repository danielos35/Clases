
// ERROR 404

    // Cuando la busquedad NO se encuentra.

    let getCoutryRefactor = function(country){

        let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);
        peticionFecth.then(res=> 

            {            
                // Para capturar un error 404 debemos hacerlo dentro del bloque de codigo, accediendo a la propiedad .ok
                if(!res.ok){
                    console.log('tienes un error ',res.status);

                    // Crear un nuevo error
                        // La palabra reservada throw termina automaticamente la función, al igual que lo hace el return, pero en este caso la promesa será rechazada inmediatemente y podrá ser capturado en el catch

                        // New Error ('el error'), creará un nuevo error
                    throw new Error(`${res.status}`)
                }
                return res.json()
            }).then(
                datos=>{console.log(datos)}

            ).catch(
                res=>{
                    console.log(res);
                }
            )      
    }

    getCoutryRefactor('holaMUndo')


// Ver todos los errores
console.log(window.Error.prototype);


// NOTAS
    // 1. Es una MUY MALA PRACTICA dejar promesas sin cumplir
        // Terminarlas con catch o en su defetcto con finally


// DETENCIÓN DE ERRORES REFACTORIZADO
    
    