// Operadores logicos:
/*
1. Pueden usar cualquier tiepo de dato
2. Pueden devolver cuelquier tipo de datos 
3. 

*/




console.log('Jonas'||3);
console.log(''|| 'Daniel');
console.log(true || 0);
console.log(undefined || null);


// se dejara una expresion || inmediatamente encuetre un valor true, el resto de valores no los valuará
console.log(''||undefined||0||'Hola' );

// Ver si una variable está definida

let nombre= 'Daniel'; 
let persona = nombre?'definido':'Sin definir';
console.log(persona);

let nombre2; 
let persona2 = nombre2 || 'Sin Definir'; 
console.log(persona2);
