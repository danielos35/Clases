
'use strict'
/*
1. This es una variable que se crea para cada contexto de ejecución. 

2. La variable this, siempre tomara el valor del propietario

3. El valor de this no es un valor estatico

4. This no funciona para las funciones de flecha 
 */


// Hará referencia al objeto del contextode ejecución donde se encuentra en este caso el objeto window
console.log(this);


// En este caso la variable estará undefined debido a que estamos usando el modos estricto, de lo contrario hará referencia al objeto window
const calcAge = function(birthDay){
    console.log(2013-birthDay);
    console.log(this);
};

calcAge(23)


// En este caso haria referencia al objeto window
const calcAgeArrow = birthDay =>  {
    console.log(2013-birthDay);
    console.log(this);
};

calcAgeArrow(23)