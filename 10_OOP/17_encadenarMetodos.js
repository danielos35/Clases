class Cuenta{
    constructor(num, interes, correo, user){
        this.num = num; 
        this.interes = interes; 
        this.correo = correo;
        this.user = user;
        this.cuenta = [] 
    }

    // Para poder encadenar debemos de retornar el objeto, el this
    entrada(value){
        this.cuenta.push(value);
        return this;
    }

    retiro(value){
        this.cuenta.push(value)
        return this;
    }
}

let cuentaDaniel = new Cuenta(12,2,'dmarquez@a.com',12); 
console.log(cuentaDaniel);


// Encadenar metodos

cuentaDaniel.entrada(6).retiro(154).entrada(32)
console.log(cuentaDaniel.cuenta);
