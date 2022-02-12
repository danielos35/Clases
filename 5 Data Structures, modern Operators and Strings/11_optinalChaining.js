const restaurant = {
  openingHours: {
    mon: {
      open: 12,
      close: 1,
    },
    tu: {
      open: 12,
      close: 1,
    },
    we: {
      open: 12,
      close: 1,
    },
  },
};

// Option 1
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri);
} else {
  console.log("Hola desde condicional");
}

// Option 2
console.log(restaurant.openingHours.fri || "Hola Mundo");
console.log(restaurant.openingHours.fr && "Hola Mundo");
console.log(restaurant.openingHours.fri ?? "Hola Mundo");

// Option 2 with optional Chaining

//Si existe 'restaurant.openingHours.fri', entonces buscar 'restaurant.openingHours.fri?.open', en caso de que no exista devuelve undefined

console.log(restaurant?.openingHours?.mon?.open);

// Si el elemento que esta antes del signo de pregunta no existe, entonces no buscará mas y nos evitara el error de que no se puede encontrar un elemento del objeto undefined.

console.log(restaurant?.openingHours?.fri?.open);

// Si no lo hicieramos de esta manera nos marcaria error ya que no se puede encontrar el objeto anidado de un undefined

// EJEMPLO PRACTICO

let days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const horarios = {
  Lunes: {
    abre: 8,
    cierra: 5,
  },
  Martes: {
    abre: 8,
    cierra: 5,
  },
  Viernes: {
    abre: 8,
    cierra: 5,
  },
};

for (let dias of days) console.log(horarios[dias]?.abre);


// Tambien podemos usarlo para el llamado de metodos: 
let metodos = {
  metodoOne(texto){
    console.log(texto);
    return texto;
  }, 
  metodoTwo(numero){
    console.log(numero);
    return numero;
  }
}


// Podemos consultar si el metodo existe, en caso de que no devuelve un undefine
console.log(metodos.metodotres?.(12)); 
// Esto tambien lo podemos validar con el operador ??
console.log(metodos.metodotres?.(12)??'Este metodo no exite'); 


// En caso de que si exista ejecuta el metodo
console.log(metodos.metodoTwo?.(2));
console.log(metodos.metodoOne?.('Hola Mundo'));


// Podemos usarlo en arreglos
let arr = [1,2,3,4]; 
console.log(arr?.[10]??'No exite');

// Puede ser usado también anidado 
let arr2 = [{nombre:'Daniel Márquez',cargo:'Desarrollador'}]; 
console.log(arr2?.[1]?.nombre??'No existe');
console.log(arr2?.[1]?.nombre??'Existe');





