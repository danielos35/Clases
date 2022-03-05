// .........................TEST.......................
// 1. Es utilizado para crear un booleano en caso de que se contenga la expresión

let variable = /hola/gi;
console.log(variable.test("Hola mundo"));
console.log(variable.lastIndex);

// Al volverlo a ejecutar devuelve false pues muta 
console.log(variable.test("Hola mundo"));

// Esto dado a que cada vez que se ejecuta text, se muta el lastindex
console.log(variable.lastIndex);


// La mejor opción es usar ya que se puede modificar las veces que sea necesario
console.log('Hola mundo'.match(variable)!= null);
console.log('Hola mundo'.match(variable)!= null);
console.log('Hola mundo'.match(variable)!= null);