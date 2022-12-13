/*

PRINCIPAL IDEAS 

- JS Runtime: gran caja con todas las cosas que necesitamos para ejecutar JS
- JS Engine: corazon de la ejecución de JS 
- API Web: herramientas que trabajan en conjunto con el runtime y engine de JS para el uso en el navegador | NO forman parte de JS como tal pero si están presentes dentro del RUNTIME
--- DOM
--- TIMERS
--- FETCH API
- NODE JS API: en nodeJS no tenemos API Web (ya que estas las proporciona el navegador) si no enlaces a herramientos en C++ THREAD POOL


JavaScript Engine

- Es un programa de computadora que ejecuta JS
- Cada navegador tiene su motor JS, el mas conocido es el de Chrome, llamado V8 

PARTES DE UN MOTOR JS

- CALL STACK 
-- Es donde nuestro codigo se ejecuta usando 'execution context'

- HEAP
-- Espacio de memoria donde se almacenan los objetos necesarios para la ejecución de JS de manera no estructurada



FUNCIONAMIENTO DEL MOTOR

PARSING 
- Divide el codigo en pequeños fragmentos, y los organiza de una manera estructurada y revisa posibles errores de sintaxis, generando el (AST)

COMPILATION
- Momento donde se genera el codigo maquina por medio de la compilación

EXECUTION
- Ocurre inmediatamente despues de la compilación, dada el just-time-compilation que usa el motor de JS

El motor de JS crea versiones del codigo no tan optimizadas para que el codigo pueda se ejecutado casi de inmediato, en segundo plano el codigo se compila de manera optimizada



NOTAS:

Interpretación: El codigo se lee y se ejecuta al mismo tiempo 
Compilación: Todo el codigo se convierte en codigo maquina


El motor de JavaScript es un Mix entre un lenguaje compilado e interpretado 


*/ 