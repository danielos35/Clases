
// ...........SORT...................
    // sort MUTA el array original

// .........Ordenar En caso de ser un arreglos de strin...........   
const owners = ['Jonas', 'Zach', 'Adam','Martha'];       
console.log(owners.sort());
console.log(owners);


// ...........Ordenar arreglo de numeros..............................
    // El metodo está basado en strings, por tanto NO ordena los numneros negativos, pues lo que hace es converitr todo a string y despues operarlos
arr = [1,5,8,4,7,3,7,-5,2,5,3,-6,-8]; 
arrDos = [...arr];
arrTres = [...arr];
arrCuatro = [...arr]
console.log(arr.sort());


// ............Sort acepta un callback para solucionar el anterior problema, y al devolver uno se ordena de manera accendente
arrDos.sort((a,b)=>{
   if(a>b){
       return 1
   }else{
       return -1
   }
}); 

console.log(arrDos);

arrTres.sort((a,b)=>{
    if(a<b){
        return 1
    }else{
        return -1
    }
}); 

console.log(arrTres);

// Forma rapida 
console.log(arrCuatro.sort((a,b)=>a-b));
console.log(arrCuatro.sort((a,b)=>b-a   ));


    // .........................................IMPORTANTE.......................................................

// Nota podemos usar un metodo que muta el arreglo, simplemente haciendo una copia antes con el metodo slice
console.log(arr);
console.log(arr.slice().sort((a,b)=>b-a));
console.log(arr);
