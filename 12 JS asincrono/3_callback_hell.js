
// CALLBACK HELL

    // Es llamado callback hell a las funciones anidadas, cuando una función depende de la ejecución de otra de manera anidada

    // Debe ser evitado pues hace el codigo mas dificil de leer y entender y por tal también puede generar mBugs
    setTimeout(res=>{
        console.log('1');    
        setTimeout(res=>{
            console.log('2');                    
            setTimeout(res=>{
                console.log('3');
            },1000)
        },1000)
    },1000)