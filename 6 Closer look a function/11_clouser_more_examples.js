
// EXAMPLE ONE

// EL CLOUSER VARIA SEGUN DONDE SE CIERRE LA FUNCIÓN 

let f; 

const g =  function(){
    const a = 23; 
    f = function(){
        console.log(a*2);
    }
}

g(); 
f()

const h = function(){
    const b = 777; 
    f = function(){
        console.log(b*2);
    }
}


h(); 
f()


// EXAMPLE TWO

// A pesar de que una función se ejecute despes en el tiempo seguira teniendo el clouser dentro de sus caracteriticas.

const boardPassengers  = function(n,wait){
    

    const perGroup = n/3; 

    // Timer
    setTimeOut(function(){
        console.log(`We are now boarding all ${n} passenger`);
    }, 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

// El clouser tiene prioridad por encima de del contexto de jecución global  o de window
const PerGroup = 1000; 

// Temporizador 
setTimeout(()=>console.log('hola Mundo'),1000)



// 