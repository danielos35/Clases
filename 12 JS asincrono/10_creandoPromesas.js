// CREAR PROMESAS EN JS 

    //1. Podemos crear una promesa haciendo uso del constructor Promise(), lo que significa que las promesas son un tipo de objeto en JS 

        //a.  Argumentos del cnstructor: una función que a su vez recibe dos argumentos
            // -  resolve (Promeza cumplida) este a su vez recibe como argumento el valor que retornará en caso de cumplirse la promesa que se capturará con el then
            // - reject (Promesa no cumplida) este a su vez recibe como argumento el mensaje de error de la promesa que se capturará con el catch

    // let promesa = new Promise( function(resolve, reject){

    //     if(Math.random()>= 0.5){
    //         resolve('Ganaste')
    //     }else{
    //         reject('Perdiste')
    //     }

    // })


    // Consumir promesa

    // promesa.then(res=>{console.log('cumplida ',res)}).catch(res=>console.log('No cumplida',res))


    // temporizador anidado

    let temporizador = function(segundos){
             
        return new Promise(function(resolve){
            
                setTimeout(()=>{
                    resolve('Hola')
                }, segundos*1000)
            
        }); 
            
    } 

    temporizador(1)
    .then(
        res=> {console.log('Temporizador 1')
            return temporizador(2);    
        })
    .then(
        res=> {console.log('Temporizador 2')
            return temporizador(2);    
        })
    .then(
        res=> {console.log('Temporizador 3')
            return temporizador(2);    
        })
    .then(
        res=> {console.log('Temporizador 4')
            return temporizador(2);    
        })


// Manera corta de crear una promesa de manera inmedita

       let promesaInmediata =  Promise.resolve('Hola Mundo Inmediato'); 
       promesaInmediata.then(res=>{console.log(res);})