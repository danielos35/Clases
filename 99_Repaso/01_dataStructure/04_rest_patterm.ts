/*
REST
- Permite obtener el resto de los valores de un arreglo en otro arreglo. 
- Siemrpe debe estar en ultimo lugar al desestructurar.
*/ 


// Recursos
const arr:Array<number> = [1,2,3,4,5]; 
const obj = {
    lunes:{mañana:'test', tarde:'testDos'}, 
    martes:{mañana:'test', tarde:'testDos'}, 
    miercoles:{mañana:'test', tarde:'testDos'}, 
    jueves:{mañana:'test', tarde:'testDos'}, 
}


// Arrays
const [a,b, ...demasValores] = arr;
console.log(a,b,demasValores);


// Objetos
const {lunes, ...otrosDias} = obj; 
console.log(lunes);
console.log(otrosDias);


// Funciones (pasar multiples argumentos como función)
const add = function(...numeros){
    console.log(numeros);
    
}

add(1,2,3,4)
add(5,6)
add(5,6)



const agruparIngredientes = function(ingredientePrincipal, ...demas){
    console.log(ingredientePrincipal);    
    console.log(demas);    
}; 

agruparIngredientes('Arroz', 'Pan', 'Aguapanela', 'test' )

export {}