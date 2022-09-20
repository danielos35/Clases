let factorial = function (n) {
  let arreglo = Array.from({ length: n }, (_, index) => index + 1);
  let vector = arreglo.reduce((vector, elemento) => {
    return vector * elemento;
  });

  return vector;
};

factorial(5);
