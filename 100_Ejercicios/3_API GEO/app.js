
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// Consulta
let coordenadaUno = document.querySelector('.coordenadaUno');
let coordenadaDos = document.querySelector('.coordenadaDos')
let consultarCorrdenada = document.querySelector('.consultar');


// Insertar Datos
let info = document.querySelector('.info')


let verLugar = function(){
   return fetch(`https://geocode.xyz/${coordenadaUno.value},${coordenadaDos.value}?geoit=json`).
    then(
        // Capturar error
        res=>{
            if(`${res.status}`=== '403')throw new Error('Calma, solo puedes consultar 3 veces por segundo');
            return res.json()})
    }


let getCountry = function(url,country){
    let consulta =`${url}/${country}`;
    return  fetch(consulta).
            then(res=>{

            // Debe ser usado para que la promesa no se cumpla
            if(!res.ok) throw Error('Pais no encontrado');
            return res.json()
    })    
}

consultarCorrdenada.addEventListener('click',function(){

    verLugar().then(res=>{
        console.log(res);
        if(!!res.standard){
            return res.standard.countryname.toLowerCase();
        }else{
            return res.country.toLowerCase().replace(' ','');
        }
    }).then(res=>{

        return getCountry('https://restcountries.com/v2/name',res)
        

    }).then(res=>{
        let [dataPais] = res;
        if(!dataPais) throw new Error('segundo Pais no encontrado')
        let html = `<h1>${dataPais.name}</h1>
                    <img src="${dataPais.flags.png}"></img>`;
                    
        info.insertAdjacentHTML("afterbegin",html)
    }).

    catch(res=>console.log(res)).
    finally(res=>console.log('Tarea Cumplida'));


   




    



})