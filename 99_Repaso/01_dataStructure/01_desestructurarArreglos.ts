let arreglo:Array<number> = [1,2,3,4]; 
const [a,b,c] = arreglo; 
console.log(a,b,c);

//Los elementos se desestructurarán en el orden del arreglo
const [y,x] = arreglo;
console.log(y,x);

// En caso de querer desestructurar un elemento en especial podemos serar ese valor por una coma 
const [m,,n] = arreglo; 
console.log(m,n);


// Intercambiar valores de variables
let valorPrincipal:number = 12; 
let valorSecundario:number = 10; 
console.log(valorPrincipal,valorSecundario);

[valorPrincipal,valorSecundario] = [valorSecundario,valorPrincipal]; 
console.log(valorPrincipal,valorSecundario);

// Desestructurar arrays anidados 
const arrayAnidado:Array<any> = [1,2,3,[3,4,5]]; 
const [valueA,,valueC,[valueD,valueE]] = arrayAnidado; 
console.log(valueA, valueC, valueD, valueE);


// Valores por defecto 

let [porDefectoA = 12, porDefectoB = 5 ] = [3]
console.log(porDefectoA,porDefectoB);
export {}