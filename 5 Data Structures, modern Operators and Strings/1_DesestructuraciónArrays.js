/* La desestructuración es una manera de descomprimir arreglos o objetos en variables separadas */

//Manera Incorrecta

const number = [2,3,4];
const a = number[0];
const b = number[1]; 
const c = number[2];
console.log(a,b,c);

// Manera Correcta 
const [x,y,z] = number; 
console.log(x,y,z); 


//........EJEMPLO REAL...............

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
    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
    }
}; 


// Objeto dentro de un objeto

let [first, second] = restaurant.categories;
console.log(first, second);


//  Saltar un elemento dentro de la desestructuración
const [one,,three] = restaurant.categories;
console.log(one, three);



// .........INTERCAMBIAR VALORES DE DOS VARIABLES.............. 

// incorrecto 
const temp = first; 
first = second; 
second = temp; 
console.log(first, second);


// Correcto
[first, second] = [second, first]
console.log(first, second);

// ...........DESESTRUCTURAR RETORNO DE UNA FUNCIÓN.. ............

console.log(restaurant.order(1,2))
const [started, mainCourse] = restaurant.order(1,2)
console.log(started, mainCourse);



// INICIALIZAR VARIAS VARIABLES
const [d,g, f] = [1,2,3]; 
console.log(d,f,g);


// ........MATRIX ANIDADA (Desestructuración anidada)...............
const anidada = [2,3,[5,6]]; 
const [t,u,[j,k]] = anidada;
console.log(t,u,j,k);



// .........DESESTRUCTURAR ARREGLOS CON LONGITUD DESCONOCIDA...............
// Podemos inicializar los valores y en caso de que estén en el array estos cambiaran al valor de la matriz, en caso de que no esté inicializado tomará el valor undefined.

const [valueOne = 1, valueTwo = 1, valueThree = 1, valueFour] = [3,5]
console.log(valueOne, valueTwo, valueThree, valueFour);




