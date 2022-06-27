let arreglo:Array<number> = [1,2,3,4]; 
const [a,b,c] = arreglo; 
console.log(a,b,c);

//Los elementos se desestructurarán en el orden del arreglo
const [y,x] = arreglo;
console.log(y,x);

// En caso de querer desestructurar un elemento en especial podemos serar ese valor por una coma 
const [m,,n] = arreglo; 
console.log(m,n);

 