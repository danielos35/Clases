// Promesas en paralelo

// ALL  

    //1. Retorna un arreglo donde cada uno de los elementos será cada una de las promesas cumplidas.
    //2. Sin una de las promesas es rechazada todas las demas promesas serán rechazadas también. 

const get3Countries = async function (c1, c2, c3) {
    try {
      // const [data1] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c1}`
      // );
      // const [data2] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c2}`
      // );
      // const [data3] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c3}`
      // );
      // console.log([data1.capital, data2.capital, data3.capital]);
      const data = await Promise.all([
        getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
      ]);
      console.log(data.map(d => d[0].capital));
    } catch (err) {
      console.error(err);
    }
  };
  get3Countries('portugal', 'canada', 'tanzania');



// RACE...........................................................................................
    // RACE devuelve la primera complesa que es cumplida, siempre retorna solo una de las promesas 

    (async function () {
        const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
        getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
        ]);
        console.log(res[0]);
    })();
  
// Puede ser muy util para cuando una petición esté tardando mas de lo esperado.

    // a. PAra eso creamos una promesa que tenga un tiempo parametrizado, y en caso tal de pasado el tiempo retorne un error

        const timeout = function (sec) {
            return new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error('Request took too long!'));
            }, sec * 1000);
            });
        };


    // b. Al demorarse mas del tiempo esperado simplemente la promesa será rechazada por la segunda promesa (el temporizador )
        Promise.race([
            getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
            timeout(5),
        ])
            .then(res => console.log(res[0]))
            .catch(err => console.error(err));


// promise.allSettled  (incluida en ES2020)

    // A pesar de que una de las promesas no se cumpla, resivirá un arreglo con la información de cada una de las promesas, incluyendo la que no pudo ser cumplida
        
    // Promise.allSettled
    Promise.allSettled([
        Promise.resolve('Success'),
        Promise.reject('ERROR'),
        Promise.resolve('Another success'),
    ]).then(res => console.log(res));
    Promise.all([
        Promise.resolve('Success'),
        Promise.reject('ERROR'),
        Promise.resolve('Another success'),
    ])
        .then(res => console.log(res))
        .catch(err => console.error(err));
    

// Promise.any incluido ES2021

    // Muy nueva retorna la primera promesa en ser cumplida, rechazando las demas promesas 