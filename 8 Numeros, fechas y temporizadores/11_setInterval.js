// .....................SET INTERVAL.............................
    // 1. Es usado ejecutarse cada cierta cantidad de tiempo    
    // setInterval(()=> console.log('Hola Mundo'), 1000)
    let i = 0;

    let contador = () => setInterval(()=> {
        console.log(new Date());
        i++; 
    }, 1000)

    contador()
    
    if(i<5)clearInterval(contador)