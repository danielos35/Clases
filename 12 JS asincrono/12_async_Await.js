// ASINCRONICA 

// 1. Para construir una función asyncrona simplemente podemos declarandola usando la palabra reservada Async
// 2. Tras bastidores seguimos usando promesas, a pesar de utilizar otra sintaxis, azucar sintetica


let dondeEstoy = async function(pais){

    // El await detendrá la ejecución de la linea de codigo hasta que esta sea ejecutada en su totalidad
    let paisObj =  await fetch(`https://restcountries.com/v2/name/${pais}`);

    // Es lo mismo hacer 
    // fecth(`https://restcountries.com/v2/name/${pais}`).then(res=>console.log(res);)
    
    let [datos] = await paisObj.json();
    console.log(datos);
}


let dondeEstoyConCoordenadas = async function(){
    
}


dondeEstoy('portugal')
