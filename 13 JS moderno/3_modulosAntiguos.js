
// Para la ejecución de un modulo en JS antiguo se utilizaban las funciones Lambda

const moduloPersona = (function(){

    const nombre  = 'Daniel';
    const apellido  = 'Márquez';

    const verNombre  = function(){
        console.log(this.nombre);
    }

    const verApellido =  function(){
        console.log(this.apellido);
    }


    // _Todo el contenido del 'modulo' es incluido en un objeto
    return {
        nombre,
        apellido,
        verNombre,
        verApellido,
    }

})()