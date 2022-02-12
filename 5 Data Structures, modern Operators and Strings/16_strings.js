// .................STRINGS..................
const airplane = 'TAP Air portugal'; 
const plane =  'A320'; 

// Obtener letra en determinada posición
console.log(airplane[0]);
console.log('HolaMundo'[0]);

// Longitud de un string
console.log(airplane.length);
console.log('HolaMundo'.length);


// ........METODOS.................

// Obtener posición la primera letra encontrada
console.log(airplane.indexOf('r'));
console.log('HolaMundo'.indexOf('o'));
console.log('HolaMundo'.indexOf('t'));//En caso de no estar devuelve un -1

// Obtener posición la letra letra encontrada
console.log(airplane.lastIndexOf('r'));
console.log('HolaMundo'.lastIndexOf('o'));
console.log('HolaMundo'.lastIndexOf('t'));//En caso de no estar devuelve un -1

// Buscar palabras completas 
console.log(airplane.indexOf('portugal'));
console.log('Hola Hola'.indexOf('Hola'));//Primera palabra
console.log('Hola Hola'.lastIndexOf('Hola'));//Ultima palabra
console.log('Hola Hola'.lastIndexOf('hola')); //Es sensible a las mayusculas

// Traer teto desde una posición
console.log('Hola mundo en javascript'.slice(5));
console.log('Hola mundo en javascript'.slice(5,10));//Indicar posicion final
let texto = 'Hola mundo en javascript'; 
console.log(texto.slice(texto.indexOf('m'), (texto.lastIndexOf('o'))+1));
console.log(texto.slice(-10));//Contara de atras a adelante
console.log(texto.slice(-10,-1));//Contara de atras a adelante

// Traer ultimo caracter
console.log(texto[(texto.length)-3]);









