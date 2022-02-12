

//.........................BIND........................

//.......Bind no llama a la función, por el contrario retorna una nueva función 

const lufthansa = {

    airline: 'lufthansa', 
    iataCode:'LH', 
    bookings:[], 
    book(fligthNum, name){
        console.log(`${name} and ${fligthNum} and airline ${this.airline}`);
        this.bookings.push({flight:`${this.iataCode} ${fligthNum}`})
    }, 

}



const book = lufthansa.book; 


const eurowings = {

    airline: 'EuroWings', 
    iataCode: 'EW', 
    bookings:[] 
}


const withBind = book.bind(eurowings)
console.log(withBind);
withBind('12', 'Felipe')
console.log(eurowings);

// Podemos definir uno de los argumentos directamente en la asignación del metodo

const withBindTwo = book.bind(lufthansa, 16); 
withBindTwo('Pepito Peres');
withBindTwo('Andres Petro');
console.log(lufthansa);


// Marcar argumentos como ya definidos en la asignación del metodo es llamado aplicación parcial


//..............................................WITH EVENT LISTENNER...............................................
lufthansa.planes = 300; 
lufthansa.buyPlanes = function(){
    console.log(this);
    this.planes++; 
    console.log(this.planes);
}


// Hara referencia al elemento llamado
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa))



//......APLICACIÓN PARCIAL DE ARGUMENTOS..................
const valorTotal = (impuesto, precio) => impuesto + precio; 
console.log(valorTotal(12,13));


// definir un argumento parcialment
const impuestoDefinido = valorTotal.bind(valorTotal, 15);
console.log(impuestoDefinido(16)); 

