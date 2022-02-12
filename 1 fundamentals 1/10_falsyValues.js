// Falsy Values

/*
 0 
 ''
 undefined
 null
 NaN

*/ 


console.log(Boolean(0));
console.log(Boolean(1));


let noDefinido;
console.log(Boolean(noDefinido));

let definido = 'Daniel'
console.log(Boolean(definido));

console.log(Boolean({}));
console.log(Boolean(''));

// Condicionales
if(noDefinido){
    console.log('HolaMundo');
}else if (definido){
    console.log('HolaMundo');   
}

