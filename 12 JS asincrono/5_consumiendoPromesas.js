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

            // El metodo then siempre devuelve una promesa, sin importar si se expecifica o No
            }).then(

                datos=>{
                    
                    // Encadenar Promesas dependiendo de otras
                    let nuevoPais = datos[0].borders[0]; 
                    if(!nuevoPais)return;

                    // No anidar la función,
                        // return fetch(`https://restcountries.com/v2/alpha/${nuevoPais}`).then(.....);


                    // Siempre retornarla
                    return fetch(`https://restcountries.com/v2/alpha/${nuevoPais}`);
                }
            ).then(
                res=>res.json()
            ).then(res=>{
                console.log(res);})


        // c. la respuesta retornara datos obre la consulta en objeto con información importante sobre la consulta

       
        
    }

    getCoutry('brazil')


    let getCoutryRefactor = function(country){

        let peticionFecth = fetch(`https://restcountries.com/v2/name/${country}`);
        peticionFecth.then(res=> res.json()).then(
            datos=>{console.log(datos)}
        )        
    }

// NOTAS then siempre devuelve una promesa, el argumento del callback de then es el argumento cumplido de la promesa
    fetch(`https://restcountries.com/v2/name/${country}`).then(res=>12).then(res=>console.log(res))
