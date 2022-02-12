const restaurant = {
    name: 'Clasico Italiano', 
    location: 'Via Angelo Tavanti 23', 
    categories: [
        'Italian', 
        'Pizeria', 
        'Vegetarian', 
        'Organic'], 
    starterMenu: [
        'Focaccia', 
        'Bruscheta', 
        'Garlic Bread', 
        'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'], 
    openInHour:{
        thu:{
            open:12, 
            close:22,
        }, 
        fri:{
            open:11, 
            close:23
        }, 
        sar:{
            open:0, 
            close:24, 
        }
    }
}; 

// Para desesructurar objetos debemos de usar llaves, pues estas mismas las usamos para crearlos

// Debemos de llamar las variables extactamente como llamamos las llaves dentro del objeto 

// Los objetos a diferencia de los arrays no tienen orden por tal pueden ser llamados en desorden 


const{name, openInHour, categories } = restaurant;
console.log(name);
console.log(openInHour);
console.log(categories);


// Tamnbien  podemos darle un valor diferentes a las variables
const{name: nombre, openInHour:abierto, categories:categorias}= restaurant; 
console.log(nombre);
console.log(openInHour);
console.log(categorias);

// En caso de que un valor no esté dentro de un objeto podemos asignarle un valor por defecto, por ejemplo el siguiente objeto Menu no existe dentro del objeto y como no existe, tomará el valor que se encuentra despues del igual

const {menu = [], starterMenu:starters = [] } = restaurant;  
console.log(menu);
console.log(starters);

// Mutación de objetos
let a = 111; 
let b = 999; 
const obj = {a:1, b:2, c:3};


// Cuando abrimos  llaves, javaScript siempre espera un bloque de codigo, por eso cuando intentamos destructurar un objeto sin encerrarlos en parentesis, este no funciona
// {a, b} = obj (No working)

console.log(a,b);
({a,b} = obj)
console.log(a,b);


// Desestructurar objetos anidados

// objeto nivel 3, variables, objeto nivel 2
const{fri:{open, close}} = openInHour; 
console.log(open, close);


// Otra manera cambiando los nombres 
const {
    fri:{open:abi, close:cerrado}
} = openInHour;

console.log(abi, cerrado);


const persona = {
    name:'Daniel', 
    apellido: 'Márquez', 
    amigos:  ['Jesus', 'Jose', 'Maria'], 
    mesesImportantes:  ['Mayo', 'Noviembre'], 
    diasLaborales: {
        lunes:{
            inicia: 8,
            termina: 5
        },martes:{
            inicia:10, 
            termina:12, 
        }
    }, 
    // elementoQueNoEsta: 'Si estoy'
}


const {diasLaborales:{lunes:primerDia, martes:segundoDia}} = persona;
console.log(primerDia); 

const {inicia:empezar, termina:terminar} =  primerDia; 
console.log(empezar, terminar);

// Desestructurar directamente 
const {lunes:{inicia, termina}} = persona.diasLaborales; 
console.log(inicia, termina);

// Desestrocurar dandole un nombre personalizado a la variable.
const {lunes:{inicia:horaEntrada, termina:horaSalida}} = persona.diasLaborales; 
console.log(horaEntrada, horaSalida);


// Desestructurar en los argumentos de una función, para eso los argumentos se deben de llamar exactamente igual a como se llamán los elementos de la función

// Los argumentos no deben de terner el mismo orden del objeto(Los objeto no tienen orden de elementos), pero por facilidad en el codigo se recomienda.

const dividirDatosSinRenombra = function({name = 'Nombre no está', amigos = 'Amigo no está', apellido = 'Apellido no está',}){
    console.log(name, apellido, amigos);
}

dividirDatosSinRenombra(persona)


// Renombrando el nombre de las variables que almacenará cada elemento, tambien podemos darle un valor por defecto en caso de que uno de los elementos indicados en los argumentos no se encuetre dentro del objeto

const dividirDatos = function({apellido:apellidos, amigos:parceros, name:nombre, elementoQueNoEsta:noEsta = 'Este elemento No está'}){
    console.log(nombre, apellidos, parceros, noEsta);
}

dividirDatos(persona)
console.log(...restaurant.mainMenu);





