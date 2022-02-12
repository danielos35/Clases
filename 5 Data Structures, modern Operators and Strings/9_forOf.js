let arr = [8,8,8,8,8,8]; 


// Diferencias

// in perminte recorrer un arreglo mediante un iterador
for(let i in arr){
    console.log(i);
}

// For nos almacena en la variable que normalmente es ocupada por el iterador "iterador" cada elemento del objeto
for(let j of arr){
    console.log(j);
}


// Si queremos conocer el iterador con for podemos usar la funció entries


console.log([...arr.entries()]);

for(let t of arr.entries()){
    console.log(t);
}



// etries almacena en un arreglo cada elemento del arreglo con su respectivo indice

let arr2 = ['daniel', 'Felipe', 'Márquez', 'Alvarez'];
console.log([...arr2.entries()]);



// podemos desesctructurar en un ciclo 
for(let[numero, elemento] of arr2.entries()){
    console.log(`${numero+1}: ${elemento}`);
}

