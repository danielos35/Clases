// Split, Dividir un string por la cadena indicada en un nuevo array  
console.log('a+very+nice+String'.split('+'));
console.log('Daniel Márquez'.split(' '));
console.log('Daniel Márquez'.split(''));//En caso de no indicarle caracteres lo dividira por cada letra


// Podemos usar la desestructuracion para almacenar los datos 
let[letraA,letraB] = 'A B'.split(' '); 
console.log(letraA, letraB);


// Unir los datos de un array por el caracter indicado 
let array = [1,2,3,4,5];
console.log(array.join('->'));


// Capitalizar nombres 
let capitalizarNombre = function(nombre){
    let nombres = nombre.split(''); 
    for(i in nombres ){
        if(nombres[i-1]===' ' || nombres[i-1] === undefined){
            nombres[i] = nombres[i].toUpperCase();
        }else{
            continue
        }
    }
   
    console.log(nombres.join(''));
}

capitalizarNombre('test de mayusculas');


// Version mejorada

let capitalizacionOptimizada = function(name){
    const nombres = name.split(' '); 
    const nameUpper = []; 

    for(const n of nombres){
       nameUpper.push(n[0].toUpperCase() + n.slice(1)); 
    }

    console.log(nameUpper.join(' '));
}

capitalizacionOptimizada('daniel felipe a')

// Version mejorada Dos 

let capitalizacionOptimizadaDos = function(name){
    const nombres = name.split(' '); 
    const nombresMayusculas = []; 

    for(const n of nombres){
        nombresMayusculas.push(n.replace(n[0], n[0].toUpperCase()))
    }

    console.log(nombresMayusculas.join(' '));
}

capitalizacionOptimizadaDos('daniel felipe')


// Agregar caracteres al inicio de un string
let variable = 'hola'
console.log(variable.padStart(10, '++s'));//Numero de caracteres total, caracteres a reyenar

// Agregar caracteres al final 
console.log(variable.padEnd(10, 's'));


// Enmascarar el numero de una tarjeta    
let enmascararTarjeta = function(numeroTarjeta){
    numeroTarjeta = numeroTarjeta + '';//Convertir a string
   return console.log(numeroTarjeta.slice(-4).padStart(10,'*'));
} 

enmascararTarjeta('1234567890');
enmascararTarjeta(167784);



// Repetir string
const message2 = 'hola mundo'; 
const numero = 12;
console.log(message2.repeat(3));
 