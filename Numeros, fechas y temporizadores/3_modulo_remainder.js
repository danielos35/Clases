// .......................MODULO___REMAINDER.......................
        /*
        Devuelve el residuo de una división
        */ 

    // 1. Puede ser usado para saber si un numero es par 
    console.log(2%2); 
    console.log(3%2); //3 = 2+1
    console.log(4%2); //4 = 2*2
    console.log(5%2); //4 = 2*2 + 1

//3. Función numero Par

let esPar = n => n = n%2===0?true:false;
console.log(esPar(5));

//4. Puede ser usador para cada vez que queramos hacer una acción cada intervalo de tiempo
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//5.Que pasa algo cada 2 veces
// arr = arr.map((res,indice)=>{
//     if(indice%2===0){
//         return res +=200;
//     }
    
// })

// 6. Acción cada 3 veces
arr = arr.map((res,indice)=>{
    if(indice%3===0){
        res = 'Par'
    }else{
        res
    }
    
})

console.log(arr);