// Palabra que comience en:

let exp = new RegExp(/^hola/g);
let texto = "hola hola hola, test y hola";
console.log(
  texto.replace(exp, "e", (valorRemplazado) => {
    console.log("rempla", valorRemplazado);
  })
);
