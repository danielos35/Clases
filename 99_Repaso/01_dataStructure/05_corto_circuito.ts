/*

Operadores logicos 
- Compuertas logicas

*/ 

// El primer elemento que exista; 
let numero =  null || 12 || null; 
console.log(numero);

// Retorna primer valor que sea falso (0, undefind, '', null) o ultimo valor en existir; 
console.log(0 && '' && null);
console.log(12 && 'HolaMundo' && null);


// Si un valor existel, asigna el siguiente valor;
let esFalso = true && 'HolaMundo'; 
console.log(esFalso);

let data; 

