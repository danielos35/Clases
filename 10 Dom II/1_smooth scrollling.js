// recursos

    const contenedorUno = document.querySelector('#contenedorUno')
    const contenedorDos = document.querySelector('#contenedorDos')

    console.log(contenedorUno);
    console.log(contenedorDos);

//1. Bajar a contenedor 2 FORMA TRADICIONAL

    // a. Seleccionamos el boton
        const btnBajar = document.querySelector('.btn-bajar');
        console.log(btnBajar);

    // b. Obtenemos las cordenada mediante addEventListener 
        btnBajar.addEventListener('click', evento =>{

            // Obtenemos las coordenadas mediante getBoundingClientRect()
            let coordenadas = contenedorDos.getBoundingClientRect(); 
            console.log(coordenadas);

            // DATOS IMPORTANTES

                // Podemos obtener las cordenadas del elemento mediante evento.target
                console.log(evento.target.getBoundingClientRect());

                // Obtener desplazamientos 
                console.log('Actual posición', window.pageXOffset, pageYOffset);

                // Tamaño de la vista 
                console.log('Tamaño: ', document.documentElement.clientHeight, document.documentElement.clientWidth);

            // SCROLLING 

                // Sin animación 
                    // window.scrollTo(coordenadas.left + window.pageXOffset, coordenadas.top+window.pageYOffset)

                // Con animación
                    window.scrollTo({
                        left:coordenadas.left + window.pageXOffset,
                        top: coordenadas.top+window.pageYOffset,
                        behavior:'smooth'
                    })


        })




// 2. SUBIR CONTENEDOR FORMA NUEVA

    const btnSubir = document.querySelector('.btn-subir');
    btnSubir.addEventListener('click', evento =>{
        contenedorUno.scrollIntoView({
            behavior:'smooth'
        })
    })
    console.log(btnSubir);

