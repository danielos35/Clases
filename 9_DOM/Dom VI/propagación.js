'use strict'

// ...............EVENT PROPAGATION.........

    // Recursos, generar color aleatorio

        //a. Funcion para generar numeros aleatorios
            
            const randomInt = (min, max)=>Math.floor(Math.random() * (max-min+1)+min);
            
        //b. funcion que genera colores

            const randomColor = ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
            let color = randomColor()

        //c. Color aleatorio 

            console.log(color);


    // 1. Traer contenedores

        //a. Contenedor
            let alto = 10;
            document.querySelector('.contenedor').addEventListener('click', function(e){
                this.style.backgroundColor = randomColor()
                alto+=10
                this.style.height = `${alto}px`
                console.log('contenedor: '+ e.target);
            }); 


            document.querySelector('.item').addEventListener('click'), function(e){
                this.style.backgroundColor = randomColor()
                this.style.height = `${alto-10}px`
                console.log('Item: ', e.target);
            }; 
            
            
            document.querySelector('.link').addEventListener('click'), function(e){
                this.style.color = randomColor()
                this.style.width = '30px'
                this.style.height = '30px'
                console.log('link: ', e.target);

            }; 
