// ..............EDADES PERRROS.....................
let arr = [5,2,4,1,15,8,3]; 
let arr2 = [16,6,10,5,6,1,4]; 


// EDAD 

let edad1 = arr.map((arr)=>arr = arr<=2?arr*2:(16+arr)*2)
let edad2= arr2.map((arr)=>arr = arr<=2?arr*2:(16+arr)*2)

console.log(edad1);
console.log(edad2);


// SACAR A LOS PERROS CON MENOS DE 18 AÑOS
let edad1_1 = edad1.filter((res)=>res>=18)
let edad2_2 = edad2.filter((res)=>res>=18)
console.log(edad1_1);
console.log(edad2_2);


// CALCULAR PROMEDIO 
let promedio1 = (edad1_1.reduce((res, elemento)=> res+elemento,0))/(edad1_1.length); 
let promedio2 = (edad2_2.reduce((res, elemento)=> res+elemento,0))/(edad2_2.length); 
console.log(promedio1);
console.log(promedio2);


// Otra manera
let promedio3 = (edad2_2.reduce((res, elemento, _, arr)=>res+elemento/arr.length,0));

// Tener cuidado con los parentesis
let promedio4 = (edad2_2.reduce((res, elemento, _, arr)=>(res+elemento)/arr.length,0));
console.log(promedio3); 
console.log(promedio4); 


// Nota calcular promedios 
/*

(5+5/2) = 5; 

y lo anterior es igual a 

(5/2)+(5/2) = 5; 


*/ 


