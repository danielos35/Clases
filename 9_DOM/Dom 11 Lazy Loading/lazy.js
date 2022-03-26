// 1. Seleccionamos las imagenes a las que queremos aplicar lazyLoading
    
    // Con corchetes seleccionamos en este caso todas las imagenes (img) que cuenten con el atributo [data-src]
    const imagenes =  document.querySelectorAll('img[data-src]');
    // console.log(imagenes);



// 2. Crear observador

    const loadImg = function(entries, observer){
        const [entry] =  entries;
        // console.log(entry);

        if(!entry.isIntersecting)return;

        // Remplazar imagen 
        entry.target.src = entry.target.dataset.src;
        
        
        // EL filtro NO se debe de remover mediante la siguiente forma directamente, ya que en redes lentas puede que no cargen en primer momento las imagenes en HD, y se vean por el contrario las imagenes en una mala resolución
        // entry.target.classList.remove('filtro')


        // SE HACE MEDIANTE EL EVENTE LOAD
        entry.target.addEventListener('load', function(){
            entry.target.classList.remove('filtro')
        })


        // Dejar de observar la imagen 
        observer.unobserver(entry.target)   
    }

    const imgObserver = new IntersectionObserver(loadImg,
    {
        root:null,
        threshold:0.5
    })


    imagenes.forEach(img=>imgObserver.observe(img))


// NOTAS 

    //Leer sobre load 
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event 