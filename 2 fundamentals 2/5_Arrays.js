// Sintaxis 1

const friends = ["Daniel", "Jose" , "Pepito"]
console.log(friends);

// Sintaxis 2

const amigos = new Array('Daniel', 'Jose', 'Pepito')
console.log(amigos);

// Diferences
console.log(typeof(amigos));
console.log(typeof(friends));

// Access 
console.log(amigos[1]);
console.log(friends[1]);

// Length

console.log(friends.length);
console.log(amigos.length);


// Access last
console.log(friends[friends.length-1]);
console.log(friends[friends.length-2]);

// acces 
console.log(amigos[2]);
amigos[2] = "Luis Andres"
console.log(amigos[2]);

// the arrays can change 


// Solamente los valores primitivos son inmutables por tanto podemos remplazar los valores, lo que no podemos remplazar son los arreglos complestos

// amigos = ["Luis", "Pedro", "Mario"]
const apellido = "Márquez"
const daniel = ["Daniel", "Felipe", apellido, 12 -2 , "Noviembre", true, friends]
console.log(daniel);