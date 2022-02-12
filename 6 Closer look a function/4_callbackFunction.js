const oneWord = function(str){
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};


const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
    // las funciones pueden tener metodo y propiedades propiedades
    console.log(fn.name);
}

transformer('JavaScript is the best', upperFirstWord); 
transformer('JavaScript is the best', oneWord); 


// ...............RAZONES.............................

/* 
- Facilitan el codigo y el reciclaje de codigo. 
- Nos permite crear abstracción 
    Ocultamos el codigo de alguna parte del programa 






*/ 