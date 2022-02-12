// Estructura de datos que podemos usar para asignar valores a llaves

// CREAR UN MAP
const restaurante = new Map();


// AGREGAR DATOS A UN MAPA 
restaurante.set('name', 'Clasico Italiano'); 
restaurante.set(1, 'Medellín'); 
restaurante.set(2, 'Bogotá'); 

console.log(restaurante);

    // Agregar mediante concatenación
restaurante
    .set('menúPrincipal', ['arroz', 'carne'])
    .set('Menu secundario', ['arroz', 'huevo'])
    .set('Tercer Menú', ['arroz', 'pollo'])
    .set('open', 8)
    .set('close',6 )
    .set(false, 'Restaurante cerrado')
    .set(true, 'Restaurante abierto')
    .set(8, 'Hora de apertura');

console.log(restaurante);


// ACCEDER A LOS ELEMENTOS DE UN MAP
let verdad = true;  
console.log(restaurante.get(verdad));
console.log(restaurante.get(true));
console.log(restaurante.get('Tercer Menú'));
console.log(restaurante.get(8));

// En caso de que consultemos un valor que no existe nos devolverá un undefined
console.log(restaurante.get('objeto inexistent'));



// Podemos llamar otro metodo get dentro de un get, y adicionalmente hacer expresiones dentro

now = 5; 
restaurante.get(now<restaurante.get('close')&&now<restaurante.get('open')); 
console.log(restaurante.get(now<restaurante.get('close')&&now<restaurante.get('open')));
console.log();
console.log();


// Ver si un elemento está dentro de un objeto: 
console.log(restaurante.has('open'));

// Borrar un elemento de un mapa 
console.log(restaurante.delete('Tercer Menú'));


// Ver el tamaño de un map
console.log(restaurante.size);


// Podemos usar un arreglo como llave 
// Si no creamos el arreglo en una variable esterna no se apuntará al mismo espacio de memoria

// NO WORK
restaurante.set([15,31], 'Dias de pago'); 
// console.log(restaruante.get([15,31])); 

// WORK 
let llave = [15,31]; 
restaurante.set(llave, 'Dias de pago'); 

// No accede pues esta expresión se guarda a un espacio de memoria diferente al de la variable llave
console.log(restaurante.get([15,31]));
console.log(restaurante.get(llave));




// Creacion de mapas (Segunda manera)
let segundoMapa = new Map([
    [1,'Holamundo'],
    [2,'Holamundo'],
    [3,'Holamundo'],
    [4,'Holamundo'],
]); 


console.log(segundoMapa);

// Convertir Objetos a mapas 
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

console.log(Object.entries(openingHours));

let openingMap = new Map(Object.entries(openingHours));

for(let [dia, datos] of openingMap ){
    console.log(`el dia ${dia}, el restaurante abre a las ${datos.open} y cierra a las ${datos.close}`);
}

// Convertir mapas a arreglos 

let openingArray = [...openingMap]
console.log(openingArray);


// Otros metodos 
let nuevoMapa = new Map([
    [1,'Hola mundo'],
    [2,'Hola mundo'],
    [3,'Hola mundo'],
    [4,'Hola mundo']
])

console.log(nuevoMapa);
// Cumplen con la misma función tanto entries como keys
console.log(nuevoMapa.entries());
console.log(nuevoMapa.keys());

console.log(nuevoMapa.values);
// Notas
let daniel = {
    12:'Daniel', 
    true:'Hola Mundo'
}

console.log(daniel[12]);
console.log(daniel[true]);


// convertir string a numero
let numero = 12; 
console.log(typeof +numero);

// convertir numero a string 
let texto = 12; 
console.log(`${texto}`);