'use strict'

// ...............EVENT PROPAGATION.........

    //1. El evento va pasando por todos los contenedores PADRES (NO HERMANOS) que tenga el contendor 

        // Recursos, generar color aleatorio

            //a. Funcion para generar numeros aleatorios
                
                const randomInt = (min, max)=>Math.floor(Math.random() * (max-min+1)+min);
                
            //b. funcion que genera colores

                const randomColor = ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
                let color = randomColor()

            //c. Color aleatorio 

                console.log(color);


        // 1. Traer contenedores

            // NOTAS.
                // e.target es el donde se toma el evento
                // e.currentTarget es donde se adjunta el controlador de eventos y es igual a this

            //a. Contenedor
                let alto = 10;
            

                document.querySelector('.contenedor').addEventListener('click', function(e){
                    this.style.backgroundColor = randomColor()
                    this.style.height = `${alto}px`
                    alto++
                    console.log('Contendor: ', e.target, e.currentTarget);
                }); 
                
                document.querySelector('.item').addEventListener('click', function(e){
                    this.style.backgroundColor = randomColor()
                    this.style.height = `${alto-10}px`
                    console.log('Item: ', e.target, e.currentTarget);
                }); 
                
                
                // La propagación se puede detener con stoPropagation, pero evitarlo lo mas posible
                document.querySelector('.link').addEventListener('click', function(e){
                    this.style.color = randomColor()
                    this.style.width = '30px'
                    this.style.height = `${alto-5}px`
                    console.log('link: ', e.target, e.currentTarget);

                    // Ela rgumento del callBack es igual a la función
                    console.log(e.currentTarget === this);
                    e.stopPropagation()

                }); 


// CONCLUSIONES

    //Si hay eventos similares en los contenedores padres como un click se debe de detener la propagación  par que no modifique todos todos los contenedores
    
