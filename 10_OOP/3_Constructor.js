'use strict'

// 1 Función constructora.....................................................................

    // a. Siempre debe de iniciar con una letra mayuscula. 
    
    // b. Las funciones flecha no funcionarán dado que no tienen this, por eso se recomienda usar funciones tradicionales
    const Persona = function(nombre, apellido, telefono){
        console.log(this);

        // Propiedades de la instancia
        this.nombre = nombre; 
        this.apellido = apellido;
        this.telefono = telefono;

        // También podemos agregar funciones a nuestros objetos 
        // ESTA PRACTICA NO SE DEBE DE HACER NUNCA
        this.telefonoToString = function(){
            console.log(`${+telefono}`);
        }
    }

    // c. La unica diferencia que tiene una función normal, es que es llamada con la palabra new 
    let Daniel = new Persona('Daniel', 'Marquez', 311815); 
    console.log(Daniel);
        // Al llamarlo ocurren cuatro cosas
            // 1. se crea un objto vacio  {}
            // 2. Se llama la función y se le asigna a el objeto el this, this = {}
            // 3. {} el nuevo objeto esta vinculado a un prototipo 
            // 4. El objeto se devuelve desde la función constructora return {}
    

    // d.  Podemos crear tantos Objetos a partir de este constructor como queramos, que en este caso será una "instancia", de la simulación de "clases" que realiza JS
    let sandra = new Persona('Sandra', 'Alvarez', 101316); 
    console.log(sandra);


    // e. Ver si una clase es instancia de un objeto
    console.log(sandra instanceof Persona); 
    const Test = function(test){}
    console.log(sandra instanceof Test); 