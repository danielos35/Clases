// ES6 Permite crear objetos con una sintaxis mucho mas moderna 

    // 1. Diferencia entre class expresion y class declaration

        // a. Class expression
        const Persona = class{
    
        }

        // b. Class declaration
        class PersonaDos {

            // Creamos un constructor que es herencia del objeto/funcion class
            constructor(nombre,apellido,edad){
                this.nombre = nombre; 
                this.apellido = apellido;
                this.edad = edad; 
            }
            

            // _Todos los metodos que son declarados dentro de la clase quedan ligados al prototipo de la clase y no al objeto como tal
            verEdad(){

            }


        }


    // 2. Para crear el objeto se sigue usando la palabra reservada new

    const Daniel = new PersonaDos('Daniel','Marquez',12); 
    console.log(Daniel);

    console.log(Daniel.__proto__ === PersonaDos.prototype);
        


// NOTAS 

        // a. Las clases son un tipo especial de función y aunque se use la palabra clave class sigue siendo una función 

        // b. Se pueden seguir agregando metodos de manera tradicional
            PersonaDos.prototype.saludar = function(){
               console.log('Hola Mundo '+ this.nombre);
            }

            Daniel.saludar()

        // c. Las clases no sufren de hoisted, no se pueden llamar antes de ser declaradas
        
        // d. Las clases son de primer-orden, podemos pasarlas a funciones y también devolverlas
        
        // e. El codigo de una clases siempre se ejecuta en strict mode 'use strict'