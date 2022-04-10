// PROMESAS

    // Recursos

        // Manera antigua de hacer consultas
            const peticionAntigua = new XMLHttpRequest()
            peticionAntigua.open('GET',`https://restcountries.com/v2/name/brazil`)
            peticionAntigua.send();
            peticionAntigua.addEventListener('load', function(){
                let [data] = JSON.parse(this.responseText); 
                console.log(data);
            })

    // Manera actual desde ES6.......................................................................
        // realizamos la petición mediante fetch, el cual recibe como argumente la URL y (consultar demas argumentos)
            const peticionFecth = fetch(`https://restcountries.com/v2/name/brazil`)

        // Este retorna una promesa (pendiente)
            console.log(peticionFecth);


    //  ¿Que es una promesa?....................................................................................................
            // def1: Es un objeto que se usa como un marcador para la posición del resultado futuro de una operación asincronica
            // def2: Es un contenedor para un valor entregado de forma asincronica
            // def3: Es un contenedor de un valor futuro

    //  Ventajas de usar promesas...................................................................................................
            //1.  Ya no necesitamos depender de eventos futuros y/o callback hell para manejar resultados asincronicos
            //2. Podemos encadenar promesas para una secuencia de operaciones asincrónas en lugar de anidar

    //  Ciclo de vida de una promesa............................................................................................
            // 1. Pending (pendiente), antes de que esté disponible cualquier valor resultante de la tarea asincronica, la tarea sigue haciendo su trabajo en segundo plano

            // 2. Settled (cuando la tarea finaliza), dando como resultado 2 tipos de promesas 
                // 1. promesa cumplida: hemos obtenido el valor esperado, como cuando lo usamos para obtener datos y    los        tenemos disponibles para su uso

                // 2. promesa rechazada: ha habido un error durante la tarea asincronica, como cuando no se pudo obtener datos del API 


    // NOTAS IMPORTANTES
            // Las promesas solo se establecen una vez de ahí en adelante no podrán ser modificadas 
            // Para que exista una promesa primero debe construirse 
