// .......MATCH........................  
    // devuelve las coincidencia en un arreglo 
    let palabra = '4 de los 10 perros han sido recastados esta semana'; 
    console.log(palabra.match(/\d/g));
    console.log(palabra.match(/\D/g));
    console.log(palabra.match(/\w/g));
    console.log(palabra.match(/\W/g));
    console.log(palabra.match(/\s/g));