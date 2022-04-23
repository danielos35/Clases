// MODULOS

    //1. Definición:  Es una pieza reutilizable de un codigo, que encapsula los detalles de implementación de una determinada parte de nuestro proyecto, tiene la misma filosofiade una clase o una función pero en este caso es un archivo independiente (Puede que no sea el caso siempre). 

    // 2. Partes de un modulo 
        // Imports, importar valores  
        // exports, exportar valores

        // _Todo lo que exportamos desde un modulo se considera una API publica.

            // Los valores son consumidos mediante el importe (import) de valores 
            // Los modulos son un patrón de desarrollo usado durante decadas en varios lenguajes de programación 
            // Son pequeños bloques de construcción que podemos usar en la construcción de nuestras aplicaciones 

        // Los modulos segmentan nuestro codigo en funcionalidades
        // Cada uno de los modulos puede ser desarrollado por aparte 
        // Codigo abstracto, se puede desarrollar codigo de bajo nivel 
        // Ayuda a ordenar nuestro codigo 


// Modulos en JS 

    // En JS cada archivo es un modulo 
    // Los atributos de cada modulo son privados a no ser de que se exporten (se compartan) en ES6 (Esto nos pasaba en ES5)
    // Las variables en los modulos de ES6 se declaran de forma estricta, esto no pasaba en ES5
    // This siempre apunta a undefined, miestras que en ES5 apunta a window
    // En ES5 se pueden exportar e importar caracteristicas del modulo 
    // Las importaciones solo pueden ocurrir en la parte superior del modulo 
    // Para vincular un HTML con un modulo se necesita la etiqueta <script type="module"
    // La descarga de los archivos en un modulo siempre ocurrre de manera asincrona 

