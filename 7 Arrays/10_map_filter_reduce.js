// Podemos usar los metodos de forma conbinad, al encadenar uno tras otro
movimientos = [100,200,-150,-250,200,750,270]; 
console.log(movimientos);


// Solo los giros mayores -> giros mas impuestos -> suma de todos los giros
console.log(movimientos.filter( giro => giro>0).map(giro => giro+(giro*0.17)).reduce((acumulador,elemento)=>acumulador+elemento,0)); 

// NO SE MUTA EL ARREGLO ORIGINAL



// ...............NOTAS............................
/*
1. Los resultados son mucho mas dificiles de depurar cuando se usan metodos encadenados. 
2. NO SE DEBE abusar del encadenamiento
3. Usar los menos metodos posibles, con el fi de optimizar el programa 
4. ES MALA practica encadenar metodos que mutan la matriz original subyacente 


*/ 


// CALCULAR PORCENTAJES


/*
 sacar el 10% de un numero 

 numero * 0.10 0 numero * 10/100

*/

console.log(25*0.10);
console.log(25*10/100);
