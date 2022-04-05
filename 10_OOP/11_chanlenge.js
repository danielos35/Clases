
// ......PADRE...........................

    const Car = function(marca, color){
        this.marca = marca;
        this.color = color;
    }


    // Metodos

    Car.prototype.verColor=  function(){
        console.log(this.color);
    }


// ......HIJO...........................

    const ElectricCar = function(marca,color,type){
        Car.call(this,marca,color)
        this.type = type;
    }


    Car.prototype = Object.create(ElectricCar.prototype); 

    ElectricCar.prototype.verTipo = function(){
        console.log(this.type);
    }


    let carro = new ElectricCar('Yamaha', 'blue', 'electric');

    carro.verTipo()







