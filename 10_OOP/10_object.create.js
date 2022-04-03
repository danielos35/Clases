// OBJECT CREATE

    // Esta es una tercera forma de crear objetos en JS despues de la clases ES6 y las funciones tradicionales

    // 1. De esta manera nosotros podemos crear el prototype de la clase, y en este insertar los metodos que haran parte de este prototype
        const PersonaProto = {
            verEdad(){
                console.log(this.verEdad);
            }, 


            // Tambien podemos generar una especie de constructor para inicializar nuestras variables

            init(nombre, edad){
                this.nombre = nombre; 
                this.edad = edad;

            }
        }

    // 2. Depues podemos crear El objeto directamente desde el prottype sin pasar por la clase, pero pasando como argumento del create el prototypo antes creado

        const daniel =  Object.create(PersonaProto)
        console.log(daniel);


    // 3. Las propiedades las podemos asignar de manera literal (NO RECOMENDADO)
        
        daniel.nombre = 'Daniel'; 
        daniel.edad = 23; 


        daniel.verEdad()


    //4. El prototypo del objeto es exactamente el mismo que el prototypo creado por nosotros 

        console.log(daniel.__proto__ === PersonaProto);


    // 5. Para crear un nuevo objeto con el metodo init se realizaria lo siguiente
        // a. crear el objet

            const sandra = Object.create(PersonaProto); 

        // b. Incializar las variables 

            sandra.init('Sandra','Alvarez'); 

        console.log(sandra);
        console.log(sandra.verEdad());

