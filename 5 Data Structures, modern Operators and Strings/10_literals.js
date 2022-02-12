let openingHours ={

    thu:{
        open:12, 
        close:22,
    }, 
    fri:{
        open:11,
        close:23
    }, 
    sat:{
        open:0, 
        close:24
    }

}
// Manera tradicional

let restaurant1 = {

    owner:'Daniel', 

    // Tenemos dos nombres iguales
    openingHours:openingHours, 

}

console.log(restaurant1);
console.log(restaurant1.openingHours);


// Opedos añador un objeto otro objeto, simplemente con el nombre exacto del objeto a añadir:
    //Evitando repetir el nombre del objeto.  
let restaurant2 = {
    owner:'Nestor y sandra', 
    openingHours,
}

console.log(restaurant2);
console.log(restaurant2.openingHours);


// declarar metodos directament (Como en typeScript)

const ejemploFunciones = {
    name:'Daniel', 
    imprimir(){
        return 'Esto se imprime en consola';
    }

}

console.log(ejemploFunciones.imprimir());


// Nombrar elementos con expresiones

const ejemploPropiedades ={

    ['na'+'me']:'daniel Marquez', 
    [2+2+4]:{
        nombre:'Daniel', 
        apellido:'Márquez',
    }
}

console.log(ejemploPropiedades[2+2+2+2]);
console.log(ejemploPropiedades['n'+'ame']);
