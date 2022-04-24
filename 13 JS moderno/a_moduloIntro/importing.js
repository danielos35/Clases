import './exportingModulo'
import { nombre,apellido,edad, sobrenombre } from './exportingModulo';

// Importar todos los elementos
import * as exportingModulo from './exportingModulo'
// MODULO IMPORTADO

// Para importarlo usamos la siguiente sintaxis
console.log(nombre);

exportingModulo.imprimirNombre()
