//............HERENCIA ES6.......................

class Persona {
    constructor(nombre,apellido,edad){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.edad = edad;   
    }

    verEdad(){
        console.log(this.edad);
    }
}


// Para heredar la clase necesitamos 
    //1. La palabra clave extensión 
    //2. Una superfunción
    
class Estudiante extends Persona{

    // El constructor aceptará los mismos argumentos de la clase padre, mas los nuevos argumentos de la clase hija

    constructor(nombre, apellido,edad, curso, idioma){
        
        // Llamamos a la función (super) para inicializar los datos de la clase padre, siempre debe ser llamada primer ya que esta es la responsable de crear el this tentro de esta clase  
        super(nombre,apellido,edad)

        // Clase hija
        this.curso = curso;
        this.idioma = idioma;

    }


    introduce(){
            console.log(`My name is ${this.nombre} and  I am ${this.edad} years old`);
    };


    // IMPORTANTE...................................
    // En caso de que un metodo este tanto en la clase padre como en la hija (y ambos metodos tengan el mismo nombre), se utilizará el primer metodo encontrado de la cadena de prototipos, de arriba hacia abajo (de manera ascendente).

    verEdad(){
        console.log(`Esta es mi edad de estudiante ${this.edad}`);
    }
}

// NO SON obligatorios el resto de los argumentos
const daniel =  new Estudiante('Daniel', 'Felipe', 12); 
daniel.introduce();
daniel.verEdad()