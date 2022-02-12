// .................................MAP.................

/*
El metodo map, nos dará un nuevo arreglo, con los valores que vayamos indicando dentro de la función 
*/ 


arr = [1,2,3,4,5,6]; 

let newArr = arr.map((res)=>res*2)
console.log(newArr);

// nos retornara el valor que le indiquemos en base a lo que retorna la función
let newArr2 = arr.map((res)=>2);
console.log(newArr2);

//La matriz original no tienen ningún cambio.  
console.log(arr);


//.........................Argumentos............

//Este metodo tambien cuanta los tres parametros de forEach 
/*
    1. Dato
    2. Indice del dato 
    3. Arreglo completo
*/

arr.map((dato,index,array)=>{
    console.log(`el elemento ${dato} se encuentra 
    en la posición #${index} y este es el objeto completo ${array}`)})


//.....EJEMPLO PRACTICO................
/*
Traer las iniciales de un nombre
*/  

let name = 'Daniel Felipe Márquez'; 

let iniciales=function(nombre){
    return nombre.split(' ').map((word)=>word[0]).join('');
}

console.log(iniciales(name));