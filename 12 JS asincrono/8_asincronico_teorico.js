//1 MODELO DE CONCURRENCIA SIN BLOQUEO

    // Es la manera en que un lenguaje mono hilo puede gestionar varias tareas al tiempo

    // LAas funciones asincronicas no se ejecutan en la pila de ejecución pues esto demoraria el proceso de carga de los demas elementos del codigo, un ejemplo de ello es la carga de imagenes, las cuales se cargan de manera asincronica

    // los elementos del DOM son cargados por la API web mas no por el motor de JS 


// EVENTO LOOP

    // Las tareas asincronicas se ejecutan entonces en la API web

// CALLBACK QUEUE

    // Es una lista de funciones asincronicas listas para ejecutarse de manera ordenada, es una especie de lista de tareas pendientes 

    // Dada a esta lista no es garantia que un temporizador se ejecute exactamente en el tiempo indicado, pues este debe esperar a que se ejecuten las funciones anteriores en la lista de ejecución para funciones asincronicas

    // Los clicks y demas funciones funciones del addeventlistenner también se ejecutan directamente en esta lista, justo despues de venir de la API WEB


// CALL STACK 

    // Despues de pasar por la lista para funciones asincronicas, y viendo quye la función ya está realizada esta pasará directamente a callStack para su ejecución 


// PROMESAS MICROTASK QUEUE (Cola de micro_tareas)

    // Las promesas tienen una cola de ejecución para ellas mismas

    // Esta cola tienen prioridad sobre las CALLBACK QUEUE (demas tareas asincronicas)

    // Al igual que con las demas tareas asincronicas estas seran enviadas a la CALL STACK, con prioridad 


    // SI LA COLA DE MICROTAREAS NO SE TERMINA POR UN BUCLE DE LLAMADAS entonces no se llamará al CALLBACK QUEUE
