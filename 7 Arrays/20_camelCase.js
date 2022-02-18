"use strict";
let convetirFrase = function (frase) {
  return frase.split(" ").map((elemento) => {return elemento[0].toUpperCase() + elemento.slice(1)}).join(' ');
};


console.log(
    convetirFrase("hola mundo como esta")
);
console.log(
    convetirFrase("este es un ejemplo de lo que podemos hacer")
);

