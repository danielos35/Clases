const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};


// La podemos almacenar en una variable
const greeterHey = greet('Hey'); 
greeterHey('Daniel'); 
greeterHey('Nestor');


// La podemos llamar directamente 
greet('Hola')('Maria')



//El retorno de las funciones son muy frecuentes dentro de la programación funcional


const saludo = (saludo)=> (nombre) => console.log(`${saludo} ${nombre}`);

const saludoUno = saludo('Hello'); 
saludoUno('Pedro')

saludo('Hola')('Daniel')