const transferencias = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forma tradicional para recorrer un arreglo
for (const [index, elemento] of transferencias.entries()) {
  if (elemento > 0) {
    console.log(`En el movimiento ${index} Tu despositaste  ${elemento}`);
  } else {
    console.log(`En el movimiento ${index} Tu retiraste ${Math.abs(elemento)}`);
  }
}

// ...............................FOREACH........................
// Recorrerá como función de orden mayor, recorrerá el arreglo y devolverrá lo que le indiquemos en la función callBack que se le pasa como argumento, y esta a su ves recibirá como argumento cada elemento de la iteracion

// ARGUMENTOS (en orden)
/*
        1. Elemento
        2. Index del elemento
        3. Arreglo completo 
    
    
    */

transferencias.forEach(function (res, index, array) {
  if (res > 0) {
    console.log(`En el movimiento ${index} Tu despositaste  ${res}`);
  } else {
    console.log(`En el movimiento ${index} Tu retiraste ${Math.abs(res)}`);
  }
  console.log(array);
});

// También puede ser usado

// ...............................FOREACH MAPS AND SETS............

    // ...ARGUMENTOS EN MAPS ...
    /*
        1. valor actual
        2. Dirección actual (clave)
        3. Mapa completo
    
    */ 

    const moneda = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
    ]);
    console.log(moneda);

    moneda.forEach(function(valor, key, map){
        console.log(valor);
        console.log(key);
        console.log(map);

    })


    // ...ARGUMENTOS SETS....

    const monedaDos = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']); 
    console.log(monedaDos);

    /*
        1. Valo actual
        2. Clave (Es el valor actual al no tener inidice ni clave)
        3. Mapa
    
    */ 

    monedaDos.forEach(function(val,key,map){
        console.log(`${val} ${key} and ${map}`);
    })
// ...................
// ..........NOTAS.........................................

// Notas Math.abs(movement) retorna el valor absoluto del elemento que se pasa como argumento.

// Las declaraciones, beak y continue no funcionan en el metodo forEach, este siempre recorrera toda el arreglo, por tanto si necesita salir de un arreglo desde un elemento en especifico debe de utilizar for

// Cuando no se incluye un argumento suele remplazarse por el _  (Guión bajo   )