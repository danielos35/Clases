// HERENCIA CREATE OBJECT 

// 1. Recordemos que se debe de crear primero el prototipo del objeto, con los metodos y un "constructor de los datos"
    const PersonaProto = {

        verEdad(){
            console.log(this.edad);
        },

        init(nombre, edad){
            this.nombre = nombre; 
            this.edad = edad;
        }

    }

    // Crear el objeto 
    const daniel = Object.create(PersonaProto); 


    // Para crear un objeto que herede los protitipos podemos definir un objeto intermedio que en este caso será estudiante 
    const Estudiante  = Object.create(PersonaProto); 
    Estudiante.verNombreEstudante = function(){
        console.log(this.nombre);
    }

        // Función constructora
        Estudiante.init = function(nombre, edad, curso){
            PersonaProto.init.call(this,nombre, edad);
            this.curso = curso; 
        }

    // y en vase a el podemos crear nuestro objeto
    const danielEstudiante = Object.create(Estudiante)

    // Inicializamos los datos dentro del objeto 
    danielEstudiante.init('Daniel',23,'english'); 


    console.log(danielEstudiante);



    // Funcionan también metodos de la clase padre e hija 

        // Clase hija
        danielEstudiante.verNombreEstudante()

        // Clase Padre
        danielEstudiante.verEdad()