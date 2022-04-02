// GETTER y SETTERS

    // Son valores que retornan (getter) o modifican (setter) el valor de un dato del objeto

    // 1. Los getter y setter pueden ser establecidos en JS objetos tradicionales 

        let cuenta = {
            dueno:'Daniel', 
            movimientos: [0,13,12,24,12], 

            // Para definir un get, simplemente usamos la preposición get, 
            get retornarElemento(){
                return this.movimientos.slice(-1).pop()
            },


            // Para definir un set, simplemente usamos la preposición set y pasamos el argumento al metodo
            set modificarElemento(elemento){
                this.movimientos.push(elemento)
            }            
            
        }

        // Podemos llamar al set como si fuera una propiedad (sin los parentesis)
        console.log(cuenta.retornarElemento);


        // Podemos llamar al get como si fuera también una propiedad
        cuenta.modificarElemento = 45;
        console.log(cuenta.retornarElemento);


    // GETTER Y SETTERS EN CLASES 


    class Auto{

        constructor(marca,modelo,anoFrabricacion){
            this.marca = marca; 
            this.modelo = modelo; 
            this.anoFrabricacion = anoFrabricacion;
        }


        get verAnoFabricacion(){
            return this.anoFrabricacion;
        }


        set modificarModelo(modelo){
            this.modelo = modelo;
        }


        // Los setters pueden ser muy utiles para validar condiciones antes de modificar la propiedad de un objeto
        set soloFord(marca){
            if(marca==='Ford')this.marca=marca
            else console.log('Error');
        }


    }


    let carroDaniel = new Auto('Mazda','8',1998); 
    console.log(carroDaniel.modelo);
    
    // Modificar mediante el setter
    carroDaniel.modificarModelo = 7;
    console.log(carroDaniel.modelo);


    carroDaniel.soloFord = 'Ford'
    carroDaniel.soloFord = 'Mazda'




    
    


