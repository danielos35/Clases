
// Recursos Funciones
const activarPuntos = function(foto){
    document.querySelectorAll('.punto').forEach((punto)=>{
        punto.classList.remove('puntoActivo');
    })
    document.querySelector(`.punto[data-slide="${foto}"]`).classList.add('puntoActivo')
    console.log(document.querySelector(`.punto[data-slide="${foto}"]`));
    // Seleccionar atributo


}





//1.  Traemos las fotos del slider

    let fotos =  document.querySelectorAll('.photo'); 

//2. Recorremos y asignamos cada una de las fotos
    fotos.forEach((photo, i)=>{
        photo.style.transform = `translateX(${100 * i}%)`
    })


// Seleccionamos botones

    const btnL = document.querySelector('.btnL'); 
    const btnR = document.querySelector('.btnR');


// Eventos con los botones 

    // Boton derecho

        // foto actual
        let fotoActual = 0; 


        // Cantidad de fotos 
        let maxPhotos = fotos.length-1; 

        // Adelantar 

        let siguiente = function(){
            if(fotoActual === maxPhotos){
                fotoActual = 0;
            }else{
                fotoActual++
            }

            fotos.forEach((photo, i)=>{
                photo.style.transform = `translateX(${100 * (i-fotoActual)}%)`
            })

            activarPuntos(fotoActual)
        }

        // Siguiente foto
        btnR.addEventListener('click', function(){
           siguiente()
        })

    // Boton izquierdo


        // Anterior

        let anterior = function(){
            if(fotoActual == 0){
                fotoActual = maxPhotos
            }else{
                fotoActual--
            }

            // Anterior foto
            fotos.forEach((photo, i)=>{
                photo.style.transform = `translateX(${100 * (i-fotoActual)}%)`
            })

            activarPuntos(fotoActual)
        }

        btnL.addEventListener('click',function(){
            anterior()
        })



// CONFIGURAR TECLAS

        // Capturar tecla

        document.addEventListener('keydown', function(e){
            console.log(e);
            if(e.key === "ArrowRight") siguiente(); 
            if(e.key === "ArrowLeft") anterior();
        })


// PUNTOS


        // Seleccionar el elemento dots
        const puntos = document.querySelector('.puntos'); 
        console.log(puntos);

        // Crear elementos
        const crearPuntos = function(){
            fotos.forEach(
                function(_,i){
                    puntos.insertAdjacentHTML('beforeend',
                    `<img class="punto" src="./Recursos/2x/outline_adjust_black_24dp.png" data-slide="${i}">`
                    )
                }
            )
        }

        crearPuntos();


        puntos.addEventListener('click', function(e){
            if(e.target.classList.contains('punto')){
                const queFoto = e.target.dataset.slide;
                activarPuntos(queFoto)


                fotos.forEach((photo, i)=>{
                    photo.style.transform = `translateX(${100 * (i-queFoto  )}%)`
                })
            }

        })


        activarPuntos(0)
        // Función de puntos al inicio



