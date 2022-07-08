/*
OPERADOR DE VALOR NULO 

- A diferencia de ||  este operador no trabaja basado en valores falsos (false), sino por el contrario en base a valores nulos e indefinidos, no incluye el 0 o strings vacios

*/ 

let valor = 0 ?? 12; 
console.log(valor);

let valorDos =  '' ?? 'Hola Mundo'; 
console.log(valorDos);
