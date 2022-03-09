// ........................CLASES..................


    //Recursos 

        const clase = document.querySelector('.estoEsUnaClase') 
        console.log(clase);

    // 1. Agregar una nueva clase
    
    clase.classList.add('claseA', 'claseB')
    
    // 2. Remover una clase

    clase.classList.remove('claseB')

    // 3. Mira si está la propiedad y en caso de no, la crea, en caso que Si, simplemente lo ignora

    clase.classList.toggle('claseZ')
    console.log( clase.classList.toggle('claseB'));
    
    // 4. Ver si la clase esta presente
    
    clase.classList.contains('claseZ')
    console.log( clase.classList.contains('claseZ'));


// Dont use 

    // a. NO USAR pues remplaza todas las clases existenetes en ese selector
    clase.className = 'HolaMundo'


