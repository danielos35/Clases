// Operador Patten permite esperar mas elementos, y se coloca al lado izquierdo del iguqal en la declaración. 

let arr = [1,2,3,4,5]; 

// Lo utilizamos para usar el resto de elemtos que no estamos utilizando

let [a,b, ...others] = arr; 
console.log(a); 
console.log(b);
console.log(others);

let obj  = {
    name:'Daniel', 
    lastName: 'Márquez', 
    number: 12345
}


//También funciona en objetos
let {name:nombre, ...demasDatos}  = obj;
console.log(nombre);
console.log(demasDatos); 


// no tenemos que seguir un orden en especifico
// El operador rest, siempre debemos de tenerlo al final dado que recopila todos los datos que no han sido asignados

// Solo puede existir un operador rest en cada expresión 

let{ lastName:apellidos, ...otrosDatos} = obj; 

console.log(otrosDatos);
console.log(apellidos);

// .....................................Funciones............................
let year = {
    enero:31, 
    febrero:28,
    Marzo: 31, 
    Abril:30 
}

let mesesImportantes = function({enero:cumpleMama, febrero:cumplePapa,...otrosMeses}){
    console.log(`El primer y segundo mes importante sin ${cumpleMama} ${cumplePapa}  los restantes son:`, otrosMeses  );
    console.log(otrosMeses);
}

mesesImportantes({...year})


// Suma todos los argumentos que se den 

// Operador rest Pattern
let suma = function(...todo){
    resultado = null; 
    for(i in todo){
        resultado+=todo[i]
    }
    console.log(resultado);
}

suma(1,2,3,4,5,6,7,8,9,0,12,12,31,31,3,13,13,1,31,3);
let arreglo =  [1,2,3,4]; 

// Operador Spread
suma(...arreglo)
