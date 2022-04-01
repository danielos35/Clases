// PROTOTIPOS 
    // 1. Todas las funciones en JS tienen automaticamente una propiedad llamada prototype incluyendo los constructores
    
        //Mala practica.................................................NO HACER  
            const Persona = function(nombre,telefono){
                this.nombre = nombre; 
                
                // Es errado ya que esta función se ejecutaria cada vez que se crea una nueva instancia u objeto
                this.verTelefono = function(){
                    console.log(telefono);
                }
            }; 


        //Buena Practica.................................................
            // la función se guarda en la propiedad prototipo y solo se llamará cuando sea llamada y NO cuando sea creado el objeto 
            const PersonaDos =  function(nombre, telefono){
                this.nombre = nombre;
                this.telefono = telefono;
            } 

            // El metodo debe de ser creado mediante prototype, conviertiendose el metodo del objeto en herencia del objeto.prototyope

            PersonaDos.prototype.verTelefono = function(){
                return this.telefono;
            }

            let daniel = new PersonaDos('daniel',123); 
            console.log(daniel.verTelefono());


    // 2. También podemos establecer propiedades en el prototipo

            PersonaDos.prototype.especie = 'Homo Sapiens';

    // 3. Podemos ver si una propiedad es del objeto o del objeto.prototype

            console.log(daniel.hasOwnProperty('telefono'));
            console.log(daniel.hasOwnProperty('especie'));
    
        // DATOS
            //a. Todos los objetos SIEMPRE TIENEN ACCESO a su prototype 

            //b. Ver prototipo del objeto 
                console.log(daniel.__proto__);
                
            //c Ver prottipo de la clase
                console.log(PersonaDos.prototype);

            //d  el prototipo del objeto y de la clase son el mismo
                console.log(daniel.__proto__ === PersonaDos.prototype);

            //e Ver si un un objeto es protipo de una clase 
                console.log(PersonaDos.prototype.isPrototypeOf(daniel));

            //f El Persona.prototype, es el prototype del objeto, mas no de la clase
                console.log(PersonaDos.prototype.isPrototypeOf(PersonaDos));


            //g Cadena de prototipos, es la cadena que se da etre el objeto y el prototipo del objeto

            // h El prototipo de un objeto también es un objeto, por tal también debe de tener un prototipo, y el prototipo del prototipo del objeto siempre es Object.prototype y el prototipo de este es null, y esta es la función que se llama cada vez que creamos un literal
