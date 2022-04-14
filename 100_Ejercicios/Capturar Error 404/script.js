// DATA
let pais = document.querySelector('.inputPais'); 
console.log(pais.value);
let consultarPais =  document.querySelector('.consultarPais'); 
let paisUNo,paisDos;

// Consultar Pais 

let getCountry = function(url,country){
    let consulta =`${url}/${country}`;
    return fetch(consulta).
    then(res=>{

        // Debe ser usado para que la promesa no se cumpla
        if(!res.ok) throw Error('Pais no encontrado');
        return res.json()
    })    
}

consultarPais.addEventListener('click', function(){
    getCountry('https://restcountries.com/v2/name',pais.value).then(res=>{
        let [dataPais] = res;
        console.log(dataPais);
        // Ver que el pais exista
        if(!dataPais.borders) throw new Error('segundo Pais no encontrado')
        return dataPais.borders[0]
    }).then(res=>{
         return getCountry('https://restcountries.com/v2/alpha',res)
    }
    ).then(

        res=>console.log(res)

    ).catch(
        res=>{
            console.log(`El pais no ha sido encontrado debido a un error de tipo ${res}`);
        }
    )
})