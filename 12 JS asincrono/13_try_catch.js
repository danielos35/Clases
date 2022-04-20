// Try catch, es usado desde JS primeras veersiones.

    // 1. Nos permite envolver todo nuestro codigo en un bloque de codigo llamado try

    try{
        let y = 1; 
        const x = 1; 
        x = y;
    }

    //2.  Con el catch podemos capturar el error

    catch(res){
        console.log(res);
    }


    // USADO EN PROMESAS FUNCIONA DE LA SIGUIENTE MANERA:
    let dondeEstoy = async function(pais){
        try{

            let paisObj =  await fetch(`https://restcountries.com/v2/name/${pais}`);

            // Crear Errores
            if(!pais.ok) throw new Error('Problemas mijo')
    
            
            let [datos] = await paisObj.json();
            console.log(datos);

        }catch(err){
            console.log(err);
        }
    }