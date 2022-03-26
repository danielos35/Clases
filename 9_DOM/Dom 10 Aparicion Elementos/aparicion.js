// Section que va ser desplazada
const pages = document.querySelectorAll('.page'); 
const items = document.querySelectorAll('.item')


// Agregar clase con efecto desde JS (NO asignarla desde el HTML)


items.forEach(function(item){
    item.classList.add('itemDesplazamiento');
})


    // Generar el observador

        const revealSection = function(entries, observer){
            const [entry] = entries;
            console.log(entry      );

        }

        const sectionObserver = new IntersectionObserver(
            revealSection,{
                root:null,
                threshold:0.15
            }   
        ) 


    // Recorremos todas las secciones 

        pages.forEach(function(section){
            sectionObserver.observe(section)
        })


