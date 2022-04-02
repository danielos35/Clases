


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


