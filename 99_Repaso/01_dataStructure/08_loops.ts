/*
LOOPS 
- Los arreglos pueden ser recorridos mediante of o in 
*/ 


let arr = ['a', 'b', 'c']; 

// of retorna el elemento, y junto al metodo entries retorna el indice y la propiedad
for (let i of arr.entries()){
    console.log(i);
}

// Lo mismo que...
console.log(...arr.entries());

// in retorna el indice
for (let j in arr){
    console.log(j);
}


