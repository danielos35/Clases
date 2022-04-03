
// Herencia entre 2 clases
    const Persona = function(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

// Metodos del prototipo

    Persona.prototype.verEdad = function(){
        return this.edad;
    }


// Clase que heredará los metodos, pasando los mismos argumentos de la función principal y los nuevos que tendrá de manera autonoma esta función


    const Estudiante = function(nombre,edad,grado){
        // Podemos utilizar la función Persona, definiendo el this de la misma mediante el metodo call, y pasando this. como perimer argumento de la función

        let thisCopy = this;
        Persona.call(thisCopy,nombre,edad)
        this.grado = grado;
    } 

        // Debemos de establecer el prototipo de clase hija, cn esto el objeto Estudiante tendrá también los metodos del prototyope de su padre Persona 

        Estudiante.prototype = Object.create(Persona.prototype);

    Estudiante.prototype.verGrado = function(){
        console.log(this.grado);
    }

    const danielE = new Estudiante('Daniel',12, 'noveno');

    console.log(danielE);
    console.log(danielE.verEdad());
    console.log(danielE.__proto__);
    console.log(danielE.__proto__.__proto__);
    

// Arrelgar la función constructora
    console.log(Estudiante.prototype.constructor);
    Estudiante.prototype.constructor = Estudiante;
    console.log(Estudiante.prototype.constructor);

// Al estar dentro de la cadena de prototipos podemos ver que reconoce ambos prototipos, tanto el de Persona, como el del Estudiante
    console.log(danielE instanceof Estudiante);
    console.log(danielE instanceof Persona);
