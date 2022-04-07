// ENCAPSULAR

    // Colar privadas ciertas propiedades de la clase, en el caso de JS aún no es posible de utilizar pero se suele usar por convención el guión bajo antes del nombre de la variable que en este caso llamaremos "protegida", mas no privada

    class Persona{

        constructor(nombre,telefono, edad){
            this.nombre = nombre; 
            this.telefono = telefono; 

            // Propiedad protegida
            this._edad = edad;
        }
    }