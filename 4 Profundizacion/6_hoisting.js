/*
Las variables declaradas con var se inicializan siempre al inicio del contexto de ejecución es por eso que podemos acceder a ellas dentro del contexto de ejecución global

*/


// Hoisting == levantamiento

// CON VARIABLES

function test(){
    /*.......VAR.................. */

    // Primero se inicializa a pesar de estar declarada
    console.log(variableVar);
    // Luego se declara
    var variableVar = 12;
    console.log(variableVar);


    /*......LET...................... */
    // console.log(variableLet);
    // Se inicializa y se declara cuando 
    let variableLet = 12; 
    console.log(variableLet);


    // Ejemplo

    // Inicialización
    let variable; 
    console.log(variable);

    // Declaración 
    variable = 12; 
    console.log(variable);
    


}

test()



// CON FUNCIONES
function testFunciones(){


    //Las funciones de declaradas de esta manera se elevan completamente (declaración e inicialización)

        // Sintax 1
            console.log(inicial());
            function inicial(){
                return 12; 
            }
            console.log(inicial());


    // Con estas sintaxis se inicializan al inicio del contexto de ejecución

        //Sintax 1
            // Se inicializa primero con undefine
            console.log(inicial2);
            var inicial2 = function(){
                return 14; 
            }
            console.log(inicial2());

    
    
    //Con esta sintaxis e el momento de llegar a su incialización dentro del codigo
        
        // Sintax 1

            // console.log(sin());
            let sin = function(){
                return 16;
            }
            console.log(sin());
            
        
        //Sintax 2 
            // console.log(arrow());
            let arrow = () => 12; 
            console.log(arrow());
}

testFunciones()



//..... LET , CONST ....
    // Las variables declaradas con let o const se elevan a la Temporal Dead Zone, en donde se sabe que han sido inicializadas, pero no pueden ser usadas hasta que estén declaradaS y allí no podremos acceder a esa variable

    function testLetConst(){
        // console.log(name);
        let name = 'Daniel'; 


    }
testLetConst()

// NOTAS

/*
1. Las clases siempre deben de ser declaradas antes de ser llamadas (NO SUFREN DE HOISTING
2. Los imports de librerias si sufren de hoisting pero no se recomienda declararlos al final 
3. la temporal dead zone fue creada con la inteción de que fuera mucho mas sencillo encontrar errores. 


*/



var daniel = daniel; 
console.log(daniel);

let felipe = felipe; 
console.log(felipe);
