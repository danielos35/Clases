let nombrePais = document.querySelector(".nombrePais");
let idiomaPais = document.querySelector(".idiomaPais");
let capital = document.querySelector(".capital");
let bandera = document.querySelector(".bandera");

let btnConsulta = document.querySelector(".consultarPais");

let obtenerCoordenadas = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (posicion) => resolve(posicion),
      (error) => reject(error)
    );
  });
};

let lugarPorCoordenadas = function (lat,lng) {
  return fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  ).then(
    // Capturar error
    (res) => {
      if (`${res.status}` === "403")
        throw new Error("Calma, solo puedes consultar 3 veces por segundo");
      return res.json();
    }
  );
};

let getCountry = function (url, country) {
  let consulta = `${url}/${country}`;
  return fetch(consulta).then((res) => {
    // Debe ser usado para que la promesa no se cumpla
    if (!res.ok) throw Error("Pais no encontrado");
    return res.json();
  });
};

btnConsulta.addEventListener("click", function () {
  obtenerCoordenadas().
  then((res) => {
    let {latitude:lat, longitude:lng} = res.coords;
    return lugarPorCoordenadas(lat,lng)
  }).
  then(res=>{
    let {country:pais}=res; 
    return getCountry('https://restcountries.com/v2/name',(pais.toLowerCase()))
  }).
  then(res=>{
    let [data] = res
    nombrePais.innerText = `Estas en ${data.name}`
    idiomaPais.innerText = `Idioma Oficial: ${data.languages[0].nativeName}`
    capital.innerText = `Su Capital es: ${data.capital}`
    bandera.src = `${data.flags.png}`
  });
});
