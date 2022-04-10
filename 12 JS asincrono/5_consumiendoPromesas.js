// CONSUMIR PROMESAS

    // 1. Consumir promesa

    let getCoutry = function(country){

        // a. Hacer petición
            let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);

        // b. Para ver el resultado de la promesa, usamos el metodo then la cual tendra como argumento el valor resultante
            peticionFecth.then(function(res){
                console.log(res);

                // c. Para poder acceder a los datos de la respuesta accedemos al body del objeto que entrega la consultar
                // d Este objeto debemos de retornarlo y encadenarlo a la función, ya que .json() también es una promesa 

                return res.json()

            }).then(

                datos=>{console.log(datos);}
            )


        // c. la respuesta retornara datos obre la consulta en objeto con información importante sobre la consulta

       
        
    }

    getCoutry('brazil')


    let getCoutryRefactor = function(country){

        let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);
        peticionFecth.then(res=> res.json()).then(
            datos=>{console.log(datos);}
        )        
    }

