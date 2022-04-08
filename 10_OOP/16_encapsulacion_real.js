// Modificadores de acceso

    //A fecha actual estos modificadores se encuentran en fase 3 de JS y siguen aún sin funcionar en muchos navegadores

        // Public fields
        // Private fields
        // plublic methods
        // Private methods

    // Ejemplo

        class Persona {

            // Public field (estan ligados a la instancia, no a prototype)
            locale =  navigator.language;
            
            // Private fields (al colocar el # antes del nombre del field este se volvera privado)
            #movimientos = []; 
            #pin;
            constructor(nombre, apellido, pin){
                this.nombre = nombre; 
                this.apellido = apellido;

                // Si debemos incializar una variable dentro del constructor, esta debera  de declarse primero fuera de este 
                this.#pin = pin;
            }


            // Metodo publico
            verNombre(){
                console.log(this.nombre);
            }

            // Metodo privado
            #verApellido(){
                console.log(this.apellido);
            }


            // Metodo estatico, solo funciona en la clase 
            static verPin(){
                console.log(this.#pin);
            }
        }


    const daniel = new Persona('Daniel', 'Marquez',12)
    daniel.#verApellido();
        
    // NO podemos acceder a la variable dado que esta se encuentra como privadad en este momento

    console.log(daniel.#movimientos);