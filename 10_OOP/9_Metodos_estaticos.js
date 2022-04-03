// Metodo estatico
    // 1 Ejemplo 1
        const Persona = function(nombre,apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }

        // Crear metodo estatico

        Persona.metodoEstatico = function(){
            console.log('Hola Mundo');
        }


        // Este metodo etara ligdo a la clase, pero no a los objetos que se crean a partir de esta, ya que no está  ligado al prototype del mismo

        Persona.metodoEstatico()


        const felipe = new Persona('Daniel','Márquez')
        // felipe.metodoEstatico()

    // Ejemeplo ES6

    class PersonaDos{

        constructor(nombre, apellido){
            this.nombre = nombre; 
            this.apellido = apellido; 
        }



        static metodoEstatico(){
            console.log('Hola Mundo ES6');
        }
    }


    const Daniel = new PersonaDos('Daniel', 'Márquez')

    PersonaDos.metodoEstatico()
    // Daniel.metodoEstatico()

