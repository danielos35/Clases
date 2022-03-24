// FORMA #1

// Menu que se quedará estatico 
const nav = document.querySelector('.nav')


// traer sección desde la que se quedara estatico 
const paginaUno = document.querySelector('#paginaUno');
const cordenadaInicial = paginaUno.getBoundingClientRect(); 
console.log('cordenada',cordenadaInicial);



// Este evento se activa cada vez que realicemos algún desplazamiento, NO ES EFICIENTE Y DEBE EVITARSE 
    window.addEventListener('scroll', function(e){
        console.log('holaMundo');
        console.log(nav);
        // ver posición en Y
        // console.log(window.scrollY);

        if(window.scrollY > cordenadaInicial.top){
            nav.classList.add('sticky')
        }else{
            nav.classList.remove('sticky')
            }
        
    })
