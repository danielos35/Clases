'use strict'

// Primitives : los numero primitivos no cambian su valor original al cambiar el valor de una variable que ha tomado uno de los valores anteriores
let age = 30; 
let oldAge = age; 
age = 31; 

console.log(age);
console.log(oldAge);


// Objects  si modificamos un objeto copiado de un objeto afectamos al objeto original

const me ={
    name:'Daniel',
    age:23,
    likes:{
        deporte:'Futbol', 
        musica: 'allMusic'
    }
}; 
console.log(me);

const friend = me; 
friend.age = 27; 

console.log(me);
console.log(friend);

// Copiar un objeto en alto nivel

// Esta tecnica solo funciona a alto nivel, si dentro del objeto copiado, tenemos otro objeto, este hara referencia a la misma deirección de memoria

const newMe = Object.assign({},me); 
newMe.name = 'Felipe'
console.log(newMe);