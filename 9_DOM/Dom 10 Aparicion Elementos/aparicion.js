// Section que va ser desplazada

const items = document.querySelectorAll('.item')


// Agregar clase con efecto desde JS (NO asignarla desde el HTML)


items.forEach(function(item){
    item.classList.add('itemDesplazamiento');
})


    // Generar el observador

        const revealSection = function(entries, observer){
            const [entry] = entries;
            console.log('entry:',entry);


            // Solo cuando se esté intersectando;
            if(!entry.isIntersecting)return
            entry.target.classList.remove('itemDesplazamiento');


            // Dejar de observar
            observer.unobserve(entry.target)
        }

        const sectionObserver = new IntersectionObserver(
            revealSection,{
                root:null,
                threshold:1
            }   
        ) 


        


    // Recorremos todas las secciones 

        items.forEach(function(section){
            sectionObserver.observe(section)
        })


