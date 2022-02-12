function iva(num){
    return num + (num*0.19); 
}

function compraDescount(num){
    const descuento = num - (num*0.30); 
    return iva(descuento); 
}

console.log(compraDescount(1000));





let daniel = 12; 
