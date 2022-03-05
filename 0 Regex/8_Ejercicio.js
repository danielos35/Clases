let texto =  document.documentElement.querySelector('.texto'); 
let corregido = document.documentElement.querySelector('.corregido'); 

// Quitar Numeros y organizar espacios
corregido.innerHTML = texto.innerHTML.replace(/\d/g, '').replace(/\s/g,' ');

console.log(texto.innerHTML);
console.log(corregido.innerHTML);