


const Car = function(marca, velocidad){
    this.marca = marca; 
    this.velocidad = velocidad; 
}


Car.prototype.acelerar = function(){
    console.log(this.velocidad+10);
}


Car.prototype.frenar = function(){
    console.log(this.velocidad-5);
}


let carroUno = new Car('Mazda',40);
let carroDos = new Car('Ford',50);

carroUno.acelerar(); 
carroUno.frenar();

carroDos.acelerar(); 
carroDos.frenar();


class CarroDos {
    constructor(marca, ano){
        this.marca = marca; 
        this.ano = ano; 
    }

    get getMarca(){
        return this.marca
    }

    set setMarca(marca){
        if(marca !== 'Ford')console.log('Debe ser una marca americana');
        else this.marca = marca;

    }
}


const carroNestor = new CarroDos('Audi', 2008)
console.log(carroNestor);


// Modificar marca
carroNestor.setMarca = 'Ford'; 

// Ver marca
console.log(carroNestor.getMarca);

