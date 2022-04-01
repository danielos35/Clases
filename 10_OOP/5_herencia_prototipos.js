// Herencia de prototipos

    //Recursos 
        let Persona = function(nombre,edad){
            this.nombre = nombre; 
            this.edad = edad; 
        }

    // asignar metodo 
        Persona.prototype.verEdad = function(){
            return this.edad;
        }

        let daniel = new Persona('Daniel',23); 
        console.log(daniel.verEdad());

    // Ver prototipos, los siguiente funciona gracias a la cadena de prototipos
        // De la clase
        console.log(Persona.prototype);

        // Del objeto
        console.log(daniel.__proto__);
        
        // Del prototypo del objeto
        console.log(daniel.__proto__.__proto__);    

        // Del prototipo del prototipo del objeto (Ultimo escalon de la cadena de prototipos)
        console.log(daniel.__proto__.__proto__.__proto__);    

        // Ver hacia donde apunta el constructor 
        console.dir(Persona.prototype.constructor)


    // PROTOTIPO DE UN ARRAY.................................................................................

        // El protipo de un array tendrá todos los metodos que contiene un array 
            const arr = [3,6,7,6,2,1,5,12]; 
            console.log(arr.__proto__);

        // Prototipo del arreglo es igual al protipo de la clase
        console.log(arr.__proto__ === Array.prototype);

        // El final de la cadena de protipos en un array es también el objeto object
         console.log(arr.__proto__.__proto__);

        // NO ES BUENA PRACTICAS, pero puede crearce metodos de objetos como Array

        // Crear un metodo para todos los Array
            Array.prototype.valorUnico = function(){
                return [...new Set(this)]
            }

        // Y estará ligado a todos los objetos que creemos
        console.log(arr.valorUnico());

        // Lo anterior no es buena practica por: 
            // 1. Una nueva versión de JS prodria agregar un metodo con el mismo nombre, y usará ese en primer lugar
            // 2. Al trabajar en un equipo de desarrolladores es realmente una muy mala idea 


    // PROTOTYPE DE UN ELEMENTO HTML

        // 1.El protype de un elemento html siempre será HTMLHeadingElement y este a su vez de HTMLElement y este a su vez de Element, este de node, este de EventTarget y a l final Object 
        const h1 = document.querySelector('h1'); 
        console.dir(h1);


    // PROTOTYPE DE UNA FUNCIÓN 

        // A su vez la funciones cuentan con un protype 
        console.dir(x=>x+1);  