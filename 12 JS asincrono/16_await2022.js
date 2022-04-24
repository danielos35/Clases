// Desde ES2022 podemos usar await en funciones dentro de modulos

const consulta = await fetch('https://jsonplaceholder.typicode.com/comments'); 
const respuesta = await consulta.json(); 
console.log(respuesta);