// let paginaUno =  document.querySelector('#paginaUno')
// // API de observación de intersección 
//     // Permite que nuestra API observe cambios en la forma en qu un determinado elemento de destino se cruza, o cuando se cruza con la ventana 


// // 1. Para usarla debemos de crear el siguiente objeto

//     const obsOptions = {
//         // Root es el elemento que cruza sobre el objeto
//         root:null,
//         // % del elemento que se debe de estar vislizando, podemos definir varios umbrales
//         threshold:[0,0.1,0.5]
//     }


//         //2. Argumento: El primer argumento son las opciones antes definidas, con root y threshold 
//     const obsCallBack = function(entries, obsOptions ){

//         console.log('entries',entries);
//         console.log('Opciones',obsOptions);
//         entries.forEach(entry =>{
//             console.log(entry);
//         })

//     }
//     const observador = new IntersectionObserver(obsCallBack, obsOptions); 

// // 2. Ahora con el observador definimos que es lo que vamos a observar
//     observador.observe(paginaUno)





// .......................GENERAR UN STICKY;

    // Ver propiedades del elemento

    const nav = document.querySelector('.nav');
    let paginaUno =  document.querySelector('#paginaUno')
    const propNav = nav.getBoundingClientRect(); 
    console.log('propiedades',propNav);


    const stickyNav = function(entries){
        const [entry] = entries;
        console.log(entry);

        if(!entry.isIntersecting) nav.classList.add('sticky')
        else nav.classList.remove('sticky')

    }
    const navObserver = new IntersectionObserver(stickyNav, {
        // Null ya que estamos interesados en toda la ventana grafica
        root:null, 
        threshold:0,
        // Permite establecer una margen de aparición antes del elemento
        rootMargin:'-30px'

    });
    navObserver.observe(paginaUno)
