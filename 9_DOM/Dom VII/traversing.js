// ................RECORRIENDO EL DOM..................

    // Seleccionar elemento principal
    let div = document.querySelector('div'); 
    console.log('DIV', div);
    
    // Podemos acceder a los elementos hijos de ese div
    let hijoDeDiv = div.querySelector('.item')
    console.log('HijoDIV', hijoDeDiv);
    
    
    // Y a su vez podemos acceder al nieto de div
    let nietoDiv = hijoDeDiv.querySelector('.subItem')
    console.log('nietoDIV', nietoDiv);

// .......OBTENER LOS HIJOS DIRECTOS.............

    //.......... Hijos directos.....
        // ...Child node devuelve todos los elementos en forma de arreglo
        console.log(div.childNodes);

        // ....Children retorna los hijos en una coleccion HTML
        console.log(div.children);

        // Modificar el primer hijo directo 
        let h1 = document.querySelector('h1'); 
        h1.firstElementChild.style.color = 'pink'
        h1.lastElementChild.style.color = 'purple'



// ....OBTENER ELEMENTOS PADRE........................

    // Obtener padre
        // Childparent 
        console.log('padre',h1.parentNode);

        // parentElement trae lo mismo que Childparent 
        console.log('padre 2', h1.parentElement);

    // Acceder a padres lejanos

        // closest('elemento') nos permite accedes a elementos padres lejanos 
            // El argumento buscara la clase mas cercana de hijo a padre que cumpla con la  clases o elemento indicado 
        h1.closest('.container').style.background = 'purple';

// OBTENER ELEMENTOS HERMANOS

    // En JS solo podemos acceder a los elementos hermanos DIRECTOS

        //Elemento anterior 
        console.log('anterior', h1.previousElementSibling);
        console.log('anterior', h1.nextSibling);

        // elemento Inferior
        console.log('Posterior', h1.nextElementSibling);


    // LEER TODOS LOS HERMANOS
        // PERO podemos acceder a todos al elemento Padre y leer todos sus elementos hijos

        console.log('Todos los hermanos', h1.parentElement.children);


    // CONVERTIR UNA COLECCIÓNHTML EN UN ARRAY PARA OBTENER LOS HERMANOS

        let arrHermanos = [...h1.parentElement.children]; 
        console.log(arrHermanos);

        // Recorrer esa matriz
        arrHermanos.forEach(function(el){
            console.log('test',el);

            if(el!==h1)el.style.transform = 'scale(0.5)'

        })

