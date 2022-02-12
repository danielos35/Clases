'use strict'


let daniel = {

    name:'Daniel',
    lastName:'Márquez', 

    // En una funcion normal SI puedo acceder a un elemento de un objeto pues el this dirige directamente al scope de función
    normalFunction: function(){
        console.log(this.name);
    }, 

    // En clas funciones fechas NO puedo dirigirme con this directamenta a un elemento del objeto, pues this apunta al contexto de ejecución mas cercano.
    arrowFunction: ()=>{
        console.log(this.name);
    }, 


    // Funcion dentro de un metodo no puede ser llamada dentro de un metodo.

    /* 
    normalFunction: function(){
       const tesFunction = function(){
           console.log(this.name,  "HolaMundo");
       }

       tesFunction()
    },

    */

    // Perdo podemos hacer uso de una variable self declarada fuera de la función mas profunda, y así ampliamos el scope de this
    normalFunction2: function(){

        const self = this; 
        const tesFunction = function(){
            console.log(self.name,  "HolaMundo");
        }
 
        tesFunction()
     }, 

    //La mejor solución es utilizar  de manera correcta las funciones flecha, ya que el this de una función flecha siempre vendrá de su ambito principal    

     normalFunction3: () => {

        const self = this; 
        const tesFunction = function(){
            console.log(self.name,  "HolaMundo desde una función flecha");
        }
 
        tesFunction()
     }



    
    


}


daniel.normalFunction()
daniel.normalFunction2()
daniel.normalFunction3()