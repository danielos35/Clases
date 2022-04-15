
let boton =  document.querySelector('.btn_pais');
let input =  document.querySelector('.entrada')
boton.addEventListener('click',function(){
    const peticionAntigua = new XMLHttpRequest()
    peticionAntigua.open('GET',`https://restcountries.com/v2/name/${input.value}`)
    peticionAntigua.send()

    peticionAntigua.addEventListener('load', function(){

        console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        
        const html = `
        <div class="contenedor">
            <img src="${data.flag}" alt="">
            <h1>${data.name}</h1>
            <h1>${data.capital}</h1> 
            <h1>${data.languages[0].nativeName}</h1>
        </div>`


        const pais = document.querySelector('.pais'); 

        pais.insertAdjacentHTML("afterbegin",html)


    })



})



// 1. Forma antigua Antigua de consultar API...............................

        // a. Creación de la petición.
        const peticionAntigua = new XMLHttpRequest()

        // b. Abrir la petición. argumento 1: tipo de solicitud, argumento 2: URL a la que se va a realizar la llamda
        peticionAntigua.open('GET','https://restcountries.com/v2/name/colombia' )

        // c. Enviar la petición 
        peticionAntigua.send()

        // d. recibir los datos
        peticionAntigua.addEventListener('load', function(){

            // This, en este caso hace referencia al objeto peticionAntigua
            console.log(this.responseText);

        // e. Convertir JSON (cadena de texto) a Objeto manipulabre

            const [data] = JSON.parse(this.responseText);
            console.log(data);


            // Crear html a insertar
                const html = `
                <div class="contenedor">
                    <img src="${data.flag}" alt="">
                    <h1>${data.name}</h1>
                    <h1>${data.capital}</h1> 
                    <h1>${data.languages[0].nativeName}</h1>
                </div>`

            // Contenedor donde se va a insertar 
            const pais = document.querySelector('.colombia'); 

            // Insertar en base al contenedor seleccionado
            colombia.insertAdjacentHTML("afterbegin",html)



        })
