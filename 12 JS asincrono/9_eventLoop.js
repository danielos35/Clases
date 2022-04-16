
// Codigo tradicional - orden 1
    console.log('Codigo inicio');

// Tarea asincronica - orden 4
    setTimeout(()=>{console.log('Tarea asincronica')},0);

// Microservicio - orden 3
    Promise.resolve('Micro servicio').then(res=>{console.log(res)})


// Codigo tradicional final - orden 2
    console.log('codigo final');



// PRUEBA #2

// Codigo tradicional - orden 1
console.log('Codigo inicio');

// Tarea asincronica - orden 4
    setTimeout(()=>{console.log('Tarea asincronica')},0);

// Microservicio - orden 3
    Promise.resolve('Micro servicio 2').then(res=>{
        for(let i = 0; i<100000000; i++){
        }
        console.log(res)})


// Codigo tradicional final - orden 2
    console.log('codigo final');





