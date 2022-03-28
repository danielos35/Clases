// OPP..........................................................................

// 1. ¿Que es?
    // Es un paradigma (estilo o forma en la que escribimos y ordenamos el codigo) de programación basada en el concepto de pbjetos 

// 2. Objetos
    // Los usamos para describir aspecto de el mundo real (usuarios, elementos de una lista o una estructura de datos), son piezas de codigo autonomas, como si fueran pequeñas aplicaciones, y luego estas son usadas como bloques de construccion para nuestra aplicacion principal y hacemos que estos bloques interactuen entre si 

// 3. Interfaces
    // Permite realizar las interacciones entre objetos, tambien es llamada API, siendo esta un grupo de metodos a los que puede acceder un codigo externo a los objetos y que usamos para comunicarnos con el objeto. (Suele hacer parte de ;a interface publica los metodos y propiedades a las que tenemos accesos fuera de la clase)
    
// 4. Propiedades
    // Datos que contienen los objetos

//  5. Metodos
    // Funciones que contienen los objetos 

//  6. Porque se crea OOP
    // Con la intencion de ordenar el codigo para hacerlo mas fleible y facil de mantener, funciona tan bien que es el paradigma de programación mas usado para desarrollo en este momento

// 7. Clases 
    // Plano que se utiliza para crear nuevos objetos basados en las reglas especificadas en la clase

//  8 Instancia de una clase
    // _Todos los objetos creados por medio de una clase (objeto creado a partir de una clase) (Las clases en si mismas NO son un objeto)
 

    

// PRINCIPIOS PARA LA CREACION DE UNA CLASE 

    // 1. ABSTRACCION
        // Ignorar u ocultar detalles que no importan, esto nos permite obtener una perspectiva general de lo que estamos implementando, en lugar de preocuparnos por detalles que realmente no importan para nuestra implementacion 

        
    // 2. ENCAPSULACION
        // Mantener algunas propiedades y metodos privados dentro de la clase para que nos sean accesibles fuera de la clase por codigo externo, por supuesto algunos metodos puededen exponerse como una interfaz publica a la que llamamos API 

    // 3. HERENCIA
        // Cuando hay dos clases estrechamente relacionadas con propiedades y metodos compartidos, se puede heredar los componentes de una de las clases (clase padre) a otra (clase hija)
    
    // 4. POLIFORMISMO      
        // Proviene del griego que significa "muchas formas", en la programación oriendtada o objetos significa que podemos sobreescribir un metodo que se heredó de una clase principal, por tanto se sobreescribirá un nuevo codigo por encima de ese metodo heredado, podiendo modificar argumentes y la logica del metodo  