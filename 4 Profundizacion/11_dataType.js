/*
PRIMITIVOS
 

Number IEEE 754 (cada numero oscucha 64 bits)
String UTF-16
Boolean
Undefined
Null
Symbol
BigInt

los valores primitivos se almacenan en el contexto de ejecución.

Para guardar un tipo primitiva se crean tres componentes en memoria

identificador edad
Direccion 0001
Valor '30 años'


- los primitivos apuntan a la dirección de memoria de javaScript NO directamente al valor

- Por lo anterior cuando creamos una nueva variable desde otra, esta nueva variable apuntara a la dirección de memoria de la variable original.


Cuando se cambia el valor de la variable original y se ha creado otras variables desde ellas, lo que hace el motor de javaScript es crear otra dirección en memoria para este nuevo dato asignado, y le dejara la dirección de memoria"antiguo" a las demas variables que se hayan declarado a partir de la original



*/

/*

OBJECTS (valores por referencias)

Object literal
Arrays
Functions
Many more


-Los objetos se almacenan en el heap dado dado a que pueden ser demasiado grandes y el heap es un espacio de memoria mas grande que el de call stack

- Cuando se crea un objeto, este se almacena en el heap, y cuando creamos un objeto desde otro objeto ambos objetos apuntarán  a la misma dirección de memoria 


NOTAS

- Solo los tipos de datos primitivos declarados con const son inmutables, los vaqlores de referencia al estar almacenados en el heap pueden ser modificados .

- cuando creamos un objeto con const, lo que será constante será la referencia de memoria NO el valor, pues este estará almacenado en el heap.

JavaScript cuenta con un bug, que cuando se pregunta por el tipode de dato de null, aparece como un objeto.

con bigIn podemos crear valores con numero ilimitado de decimales, se crean de la siguiente manera
*/

let bigNumber = 121231433333333333312321323123n
let bigNumber = BigInt('12232131241248214314212142')

// Solo se pude hacer operaciones entre ellos   




