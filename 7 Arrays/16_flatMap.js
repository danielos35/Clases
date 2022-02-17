

// ......................FLAT MAP...................

// .......Recorre todos los elementos de un arreglo y su primera anidación
let arr = [1,2,3,4,5,[6,7,8],9,10]; 

arr.flatMap((res,i,arr)=>{
    console.log(res);
    console.log(i);
    console.log(arr);
})

let arrDos = [[1,2,3,4,[5,6,7],8,9,[10,[11,12,[13,14,[15]]]]]]; 


// .........Test..................
let resultado = arr.flatMap(
(res)=>{
    console.log(res);
    return  res
}
)

console.log(resultado);