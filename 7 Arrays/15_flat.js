// ......................FLAT................

// ..... Fue  incluido en EMS2019................
const arr = [[1,2,3],[4,5,6],7,8]; 

    // Coloca todos los datos de los array dentro de los arrays en uno solo
    // NO muta el array principal

console.log(arr.flat());
console.log(arr);

    // Tiene como argumentos niveles de profundidad

let arrDos = [[1,2,3,4,[5,6,7],8,9,[10,[11,12,[13,14,[15]]]]]]; 
console.log(arrDos.flat(1));
console.log(arrDos.flat(2));
console.log(arrDos.flat(3));
console.log(arrDos.flat(4));
console.log(arrDos.flat(5));

