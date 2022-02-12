// .....NOTAS......

// Cambiar el valor de this nos permite reutilizar metodos de un objeto a otro objeto utilizando las misma logica. 

//  CONTEXTO != CONTEXTO DE EJECUCION 
/*
Contexto: tiene que ver con el valor que tiene this
Contexto de ejecución: tiene que ver con la pila de ejecución 
*/


// ..............ERRORES COMUNES........................
/*
1. Cuando se llama un metodo fuera de su objeto
2. Cuando se llama a un evento
*/ 


// ............TIPOS DE BINDING.........................
/*

Aplica el primero que se encuentra

1. Lexical Binding (Arrow Functions) 
2. New Binding (Instanciar objetos)
3. Explicit bindig (el que generamos nosotros directamente).
4. implicit binding (Invocación del metodo).    
5. Default Binding, el valor que toma this por defecto. (Invocación directa)


¿Cómo se sabe que enlazamiento aplicara?

- Mira como fue escrita. 
- Modificaciones que tenga desde su creación.
- El lugar de invocación (CALL SITE).



*/ 





// ..........Enlazamiento implícito.....
 
// Se produce cuando invocamos al metodo de un objeto
// Llama al primer objeto que conicida a la izquierda

const daniel = {

    nombre:'Daniel',
    saludar(){
        console.log(this.nombre);
    }


}


// ..........Default binding..............

// sin modo estrico this tendrá el valor de windows y Node del objeto global; 
// En modo estricto tendrá el valor de undefined
// Si se está usando los modulos de ES 2015 el modo estricto viene habilitado por defecto.
function quienSoy(){
    console.log(`hola, yo soy: `, this);
}


// ...............ENLAZAMIENTO EXPLICITO .......................................
//  Sirve para que nosotros elijamos exactamente que objeto queremos que se a this cuando se ejecuta la función  

// CALL
/*Se da cuando realizamos una invocación indirecta*/ 

// APPLY
/*HAce lo mismo que call pero este recibe un arreay*/ 

// BIND (Enlazamiento fuerte)
/*

Un metodo de las funciones que nos retorna una nueva función con el contexto enlazado al objeto que le digamos. 

Una función que fue creada con bind, no puede ser enlazada a otro objeto (No hay forma de cambiarle el conexto)

*/ 
// Solo cuando se llame la función (por ejemplo en un evento, le dará el contexto de ejecución)




// ..........ENLAZAMIENTO NEW BINDING.................

// Lo detecta JavaScript cuando instanciamos un objeto con new

/* Podemos crear funcion constructora de dos maneras*/


        /*
        FUNCION CONSTRUCTORA
        */


        function Persona(nombre){
            this.nombre = nombre; 
        }


        /*
        ES2015 ClASSES
        */ 

        class Persona{
            constructor(nombre){
                this.nombre = nombre; 
            }
        }


// NOTA:

/* Buscar CURRYNG */ 