const goodVision = true; 
const goodVoices = true; 
const goodEar = false;

console.log(goodVision && goodVoices);
console.log(goodVision && goodEar);
console.log(goodVision || goodVoices);
console.log(goodVision || goodEar);


// other operator is !variable
// No tiene la condición
console.log(!goodVision);
console.log(!goodEar);


const shouldDrive = goodVision && goodEar; 
// const shouldDrive = goodVision && goodVoices; 
if(shouldDrive){

    console.log('Shoul Drive');

}else{

    console.log('cant drive');
}


// Guardar la condición en una variable
