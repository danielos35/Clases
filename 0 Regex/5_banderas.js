/*
BANDERAS...................................................................................................

Las Banderas son propiedades especiales que aumentan dramáticamente las habilidades de tu expresión regular.
y existen solo 3 que son compartidos a lo largo de todas los navegadores hasta el momento.
*/ 



// .................. / /g ....................................
        // que significa global, sin esta bandera se parara la coincidencia a la primera que encuentra, por eso se la colocamos para identificar todas las coincidencias dentro de un String.

        console.log('Hola Mundo'.replace(/o/g, 'O'));



// .................../ /i .....................................
        // que significa case-insensitive, que independiente de si esta la coincidencia en mayúsculas
        // y minúsculas igual se hará la coincidencia, muy efectiva cuando no importa de como se escriba la palabra.
        console.log('HOLA MUNDO'.replace(/o/ig,'o'));



//................... / /m......................................
        // que significa multilínea, que buscara cuando tienes líneas de espacio entre texto,
        // sin esta bandera se para la búsqueda, efectivo cuando tengas \n en un String de JavaScript.
        console.log(`Hola \n
        mundo
        con 
        espacio`.replace(/o/gm,'O'));


// */ 