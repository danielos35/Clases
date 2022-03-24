const botones = document.querySelectorAll('.boton'); 

// Solo seleccionar el elemento
const nav = document.querySelector('.nav')

const contenido = document.querySelectorAll('.item'); 

console.log(contenido);

// Recorrer los botones mediante un forEach 

    // Mala practica
        // botones.forEach( res => res.addEventListener('click', ()=>{
        //     console.log('helloWord');
        // }))

    // Practica recomendada
    nav.addEventListener('click', function(e){
            // Ver el elemento padre 
             // console.log(clickEn.parentElement);


            // Averiguar donde se hizo click
            const clickEntest = e.target; 
            // console.log(clickEn);
            

            // Limitar el click a un solo elemento dentro del contenedor, NO FUNCIONAN LOS ELEMENTOS PADRES, y CUANDO SE DA CLICK EN UN ELEMENTO HIJO SIGUE TOMANDO EL ELEMENTO QUE ES INDICADO EN EL ARGUMENTO de closest
            const clickEn = e.target.closest('.boton'); 


            // Ignorar elementos padres, que en este caso son tomados como null 
                // Para esto usamos una clausula de protección (Guard Clause)
                // En caso de clickEn ser nulo no se ejecutará nada del codigo siguiente
                if(!clickEn)return;

                // Manera antigua (No usar)
                    // if(clickEn){
                    //     console.log('evento');
                    // }



            // Eliminar color de fondo (en caso de haberlo aplicado)
            
                botones.forEach(res=>{
                    res.classList.remove('active')
                })
            // Agregar color

                clickEn.classList.add('active')

                console.log('test',clickEn.dataset.tab);


            //Eliminar el resto de los elementos 
            
                contenido.forEach(res=>{
                    res.classList.remove('enable')
                })

                console.log('contenido', contenido);

            
            // Ver elemento

                document.querySelector(`.contenido${clickEn.dataset.tab}`).classList.add('enable');

            // NO PASAR a los elementos inferiores
            console.log(clickEn);
        })
    
    