let dondeEstoy = async function(pais){
    try{

        let paisObj =  await fetch(`https://restcountries.com/v2/name/${pais}`);

        // Crear Errores
        if(!!pais.ok) throw new Error('Problemas mijo')

        
        let [datos] = await paisObj.json();
        console.log(datos.name);
        return `Estas en ${datos.name}`

    }catch(err){
        console.log(err);
        // Y en el caso de obtener un error este también debemos de retornarlo para que pueda ser leido y la promesa incumplida
        throw err;
    }
}


console.log('Inicio');

// 1. El retorno de una función asincronica devolverá una promesa
    let pais = dondeEstoy('Colombisaa'); 

// 2. Por eso se debe de acceder a ella mediante un then 

    pais.then(res=>{console.log(res)})
    
    // Podremos capurar el error retornado
    .catch(error=>console.log('error fuera de la funcion',error))
    
    .finally(()=>{console.log('y ver lo que finalmente ocurre');})
    ;



// RECOMENDADO PARA FUNCIONES ASYNCRONICAS CON RETORNO USAR IIEFI

(async function(){
    try{
        let pais = await dondeEstoy('brazil'); 
        console.log('Pais lamda', pais);
    }catch(err){
        console.log('error lamda', err);
    }

    console.log('Finalizó la ejecución');
})()
console.log(pais);
console.log('Fin');