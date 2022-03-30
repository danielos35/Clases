//  OOP en JS....................................................................

    // 1. Proptotipos
        // _Todos los objetos en JS estan ligados a un prototipo.

    // 2. Herencia prototipica. 
        // los propotipos contienen atributos y metodos a los que todo objeto que este vinculado a este prototipo puede acceder, siendo una instancia que hereda una clase, 

    // 3. Delegación prototipica
        // En JS los objets credos delegan los metodos y atributos al prototipo


    // 4. En JS hay tres formas de implementar la OOP 

        // a. Función constructora

            // Se crea objetos mediante programación usando una función que también establecerá el prototipo del nuevo objeto y asi es como se implementan los objetos integrados como matrices, mapas o conjuntos, Ademas así es como se ha hecho la POO en JS basicamente desde el principio


        // b. ES6 Classes

            // Es la forma mas moderna de realizar programación orientada a objetos en JS 
            // No son las clases tradicionales de JS 
            // Es una sintaxis mas agradable para la creación de clases en JS pero realmente implementa funciones constructoras, por lo tal también unan la herencia de constructores

        // c. Object.create()

            // Es la forma mas sencilla y directa de vincular un objeto a un objeto de un prototipo, no es tan utilizado como los otros dos 

    // 5. Los principios de OOP siguen siendo validos en JS