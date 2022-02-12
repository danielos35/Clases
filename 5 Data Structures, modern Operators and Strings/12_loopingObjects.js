'use strict'

// podemos hacer un ciclo sobre un objeto:

let persona = {
  name: "Daniel",
  lastName: "Márquez",
  cel: 1234,
  family: {
    modther: "Sandra",
    father: "Nestor",
  },
};

// Podemos calcular la longitud de un objeto conlength
console.log(Object.keys(persona).length);

// Object keys
// Coloca las llavez del ese objeto en un arreglo
console.log(Object.keys(persona));

for (const datos of Object.keys(persona)) {
  console.log(datos);
}

// Object values
// Obtenemos los valorez de cada una de las llaves de los objetos
console.log(Object.values(persona).length);
console.log(Object.values(persona));


// Poedmos usar Object.entries() para conocer las llaves y los valores
console.log(Object.entries(persona));


// Podemos desestructurar la llave y el valor en arreglos
for(let [llaves, valores] of Object.entries(persona)){
    console.log(`la llave de del valor ${valores} es ${llaves}`);
}



// Desestructurar un objeto anidado

let horarios2 = {
  lunes:{
    open:8,
    close:5
  }, 
  martes:{
    open:8,
    close:5
  },
  Miercoles:{
    open:8,
    close:5
  },
  jueves:{
    open:8,
    close:5
  },
  Viernes:{
    open:8,
    close:5
  }
}; 


for(let[dias,{open,close}] of Object.entries(horarios2)){
  console.log(`Los ${dias} el restaurate abre a las ${open} y cierra a las ${close}`);
}