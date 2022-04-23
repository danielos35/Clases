// MODULOS

    // Actualmente se suelen desarrollar aplicaciones por modulos, permitiendonos también acceder a todos los modulos creados por la misma comunidad


// NPM 
    
    // Node Package manger
        // Originalmente se desarrolló junto con Node JS 14.
        // Repositorio de referencia para multiples paquetes en JS  

// COMPILACIÓN

    // Al trabajar con modulos necesitamos generar un gran paquete de compilación donde sean incluidos todos esos modulos que han sido utilizados

    // Ese será el archivo enviado a producción 

    // Paso 1. Construcción
        // Para esto se quitará todo el codigo no necesario, eliminando los modulos, pues los navegadores antiguos no suelen tener compatibilidad con modulos

        // El paso anterior también mejorará el rendimiento al no tener que cargar tantos archivos

    // Paso 2. Transpiling / Polyfilling 
        // Convertir todas las caracteristicas nuevas ES6 y posteriores a ES5, para que los navegadores mas antiguos también puedan acceptarlo, para esto utilizamos la erramienta babel


// Herramientas de compilación 
    // webpack 
    // Parcel 