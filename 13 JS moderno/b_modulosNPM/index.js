import { cloneDeep } from "lodash-es";

// Copiar un objeto anidado

const Persona = {
    trabajos:{
        joven:'Vendedor',
        adulto:'Musico', 
        viejo:'Desarrollador' 
    }, 
    familia:{
        materna:{
            nombre:'Sandra'
        },
        paterna:{
            nombre:'Nestor'
        }
    }
}


// Copiar con JS
const cloneJS =  Object.assign({},Persona); 


// Clonar con lodash
const clonelodash = cloneDeep(Persona);


