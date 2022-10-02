class Operaciones {
  valor: number;

  constructor(valor) {
    this.valor = valor;
  }

  sumar(number) {
    this.valor = this.valor + number;
    return this;
  }

  restar(number) {
    this.valor = this.valor - number;
    return this;
  }
}

let bancoUno = new Operaciones(1);
bancoUno.sumar(12).sumar(1).restar(15);
console.log(bancoUno.valor);
