// Cambiar String a minusculas
console.log("HOLAMUNDO".toLowerCase());
let variable = 'HOLAMUNDO'  
console.log(variable[0].toLowerCase()+variable.slice(1));//Convertir solo una letra  


// Cambiar a mayusculas
console.log("holamundo".toUpperCase());  


// Quitar los espacios al inicio y al final de un string, ideal para checkear entradas de usuario
console.log('   Hola mundo desde javaScript \n');
console.log('   Hola mundo desde javaScript \n'.trim());

// Remplazar caracteres
console.log("100,0$".replace('$','COP').replace(',','.'));//Se pueden remplazar varios caracteres, pues el retorno de este metodo es un string
console.log('Hola mundo'.replace('Hola', 'Hello'));//Pueden ser remplazadas palabras completas

// Remplazar todos las palabras repetidas mediate una expresión regular
console.log('puerta, puerta, puerta'.replace('puerta', 'door'));//Solo remplaza la primera palabra
console.log('puerta, puerta, puerta'.replace(/puerta/g, 'door')); //La expresión regular remplaza todas 


// Ver si tiene un string 
let avion = 'aero750'; 
console.log(avion.includes('aero'));
console.log(avion.includes('z'));

// Ver si inicia con cierto string
console.log('holaMundo'.startsWith('h'));

// Si termina con cierto string
console.log('holaMundo'.endsWith('o'));

