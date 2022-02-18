'use strict'

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

//   1. 
dogs.map((res)=>{
    return res = res.recommendedFood = res.weight * 0.75 *28;
})

// 2. 

dogs.map((res)=>{
    let respuesta = res.owners.includes('Sarah') && res.curFood < res.recommendedFood?'Muy poco':'estabien'; 
    console.log(respuesta)  ;
})


// 3. Dueños de perros que comen muchos

let toMuch = dogs.filter(res=>{
    if(res.curFood>res.recommendedFood){
        return false;
    }else{
        return true; 
    }
})

console.log(toMuch);



let toLittle = dogs.filter(res=>{return res.curFood>res.recommendedFood?true:false}).map(res=>{return res.owners})

console.log(toLittle);

console.log(`${toLittle[0]} and ${toLittle[1][1]}`);