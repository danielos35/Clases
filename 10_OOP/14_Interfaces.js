class CuentaBanco {
  constructor(owner, moneda, password) {
    // Inicializamos variables pasadas por el constructor
    this.owner = owner;
    this.moneda = moneda;
    this.password = password;

    // Podemos inicializar valores que no se pasen con el constructor y se consulten de otros lugares

    this.cuentas = [];
    this.idioma = navigator.language;

}

    // Interfaces

    depositar(val) {
        this.cuentas.push(val);
    }


    retirar(val){
        this.depositar(-val)
    }
}
