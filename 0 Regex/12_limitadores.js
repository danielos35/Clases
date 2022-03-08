// ....................LIMITADORES..........
    
    // Limitan la busquedad de tooken según su posición en el string

        // 1. Solo al inicio del string con el signo ^
            let inicio = /^hola/g;
            console.log('hola hola hola'.replace(inicio,'_'));
            
        // 2. Al final del string con el signo $
            let final = /hola$/g
            console.log('hola hola hola'.replace(final,'_'));
        
        // 3. Palabra QUE NO TENGAN UN TOKEN al incio
            let palabrasConBa = /\bba/g; 
            console.log('balon  abalado'.replace(palabrasConBa,'_'));
            
        // 4. Palabras con coincidencia al final de la palabra QUE NO TENGA UN SUCESOR o un token anterior
            let palabrasFinaldo = /do\b/g;
            console.log('balondos abalado'.replace(palabrasFinaldo,'_'));
            
        // 5. Palabras que tengan un TOKEN anterior
            let palabrasA = /\Bba/g; 
            console.log('abalon  abalado'.replace(palabrasA,'_'));
             console.log('balon  balado'.replace(palabrasA,'_'));
             
        // 5. Palabras que tengan un TOKEN posterior 
             
            let palabrasB = /ba\B/g; 
            console.log('abalon  abalado'.replace(palabrasB,'_'));
            console.log('ba lon  ba lado'.replace(palabrasB,'_'));

