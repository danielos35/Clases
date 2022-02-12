'use strict';

// Global scope
function calcAge(birthYear){
    // Function scope
    const age = 2037 - birthYear;

    // Global scope
    console.log(firstName); 

    function printAge(){

        // function scope
        const outPut = `${firstName}, You are ${age}, born in ${birthYear}`; 
        console.log(outPut);

        
        if(birthYear >= 1981 && birthYear <= 1996){

            // block scope
            const str = `Oh, and you are mollenial, ${firstName}`

            // function scope (solo las declaradas con Var)
            var millenial = true; 


            // block scope (functions) al igual que las variables las funciones declaradas dentro de un bloque solo pueden ser utilizadas dentro del mismo bloque.

            function add(a,b){
                return a+b;
            }

            // con excepción a las que son declaradas con VAR 

            var add2 = function(a,b){
                return a+b; 
            }


        }

        add2()

    }

    printAge()
    return age; 
}

// Global scope
const firstName  = 'Daniel'; 
calcAge(1991); 


// NOTAS

/*

1. Si hay una variable declarada dentro del un contextode ejecución que se llama igual a una variable declarada en un contexto superior, siempre tomara como primerta opción la que se encuentra dentro de su contexto de ejecución.

1.1 Si esa variable se vuelve a inicializar con let const o var, se creara una nueva variable dentro del contexto de ejecución.

1.2 En caso que NO se inicialice se modificara el valor de la variable en el contexto superior. 




*/