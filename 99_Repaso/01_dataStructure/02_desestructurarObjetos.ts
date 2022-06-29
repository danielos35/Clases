let restaurant:any = {
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

// Desestructurar un objeto anidado
let {openInHour:{thu:{open,close}}} = restaurant; 
console.log(open, close);


const {name, location, categories, starterMenu, openInHour} = restaurant;

// Renombrar 
const {name:nombreRestaurante, location:ubicacion} = restaurant;
console.log(nombreRestaurante);


// Valores por defecto
const {menu = [], mainMenu = []} = restaurant; 
console.log(menu, mainMenu);


// Renombrar valores 
let a = 12; 
let b = 5; 
const obj = {a:23, b:45};
console.log(a,b);

// Para renombrarlos usamos la misma expresión dentro de parentesis
({a,b} = obj ); 
console.log(a,b);

let desesTructurarArgumentos = ({name = "por Defecto", lastName = "por Defecto"})=>{
    console.log(name,lastName);
}

let objetoTest:any = {
    name:'Daniel', 
    lastName:'Marquez A',
    tel:123
}

desesTructurarArgumentos(objetoTest)
desesTructurarArgumentos({})

export {}