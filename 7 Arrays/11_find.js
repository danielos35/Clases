// .........FIND......................

/*
Lo usmos para recuperar un elemento de un array en función de una condición
Solo devuelve un elemento
*/

/*
ARGUMENTOS
1. elemento
2. Indice
3. Arrelgo
*/

let arr = [1, 2, 3, 4, 4, 4, 65, 7, 5, 4];
let busqueda = arr.find((res, indice, array) => {
  console.log(res);
  console.log(indice);
  console.log(array);
  return res < 4;
});

let busquedaFilter = arr.filter((res, indice, array) => {
  console.log(res);
  console.log(indice);
  console.log(array);
  return res < 4;
});


// Fin devuelve la primera coincidencia
console.log(busqueda);

// Filter todas las coincidencia
console.log(busquedaFilter);


// EJEMPLO EN UN OBJETO 

let usuarios =[
    {name:"Daniel", game:"LOL"},
    {name:"Sandra", game:"Jesus"},
    {name:"Pedro", game:"COD"}
]


// Buscar a Sandra
let usuario = usuarios.find((user)=>user.name === "Sandra"); 
console.log(usuario);

// Buscar a Daniel
let usuario2 = usuarios.find((user)=>user.name === "Daniel"); 
console.log(usuario2);



// Ejemplo for 
let usuarioDesdeFor; 
for(let[index, user] of usuarios.entries()){
    usuarioDesdeFor = user.name === "Sandra"?user:usuarioDesdeFor=usuarioDesdeFor; 
}

console.log(usuarioDesdeFor);