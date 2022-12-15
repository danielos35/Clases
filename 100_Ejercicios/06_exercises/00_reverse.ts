const expresion = "-data-s-da-as>sas-sa";
let noLetras = /\W/g;

let arrayExpresion = expresion.split("");
let no_caracteres_e = arrayExpresion.filter((res) => !noLetras.test(res));
console.log(no_caracteres_e);

console.log(noLetras.test(""));
