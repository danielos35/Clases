// ..............SELECCIONAR..................

    // 1. Seleccionar todo el documento
    console.log(document.documentElement);

    // 2. Seleccionar encabezado
    console.log(document.head);
    console.log(document.querySelector('head'));
    
    // 3. Seleccionar
    console.log(document.body);
    console.log(document.querySelector('body'));

    // 4. Seleccionar multiples elementos
    console.log(document.querySelectorAll('h1'));

    // 5. Seleccionar por ID
    console.log(document.getElementById('id-1'));

    // 6. Seleccionar por el nombre del elemento 
        // Retorna una colección 
    console.log(document.getElementsByTagName('button'));

    // 7. Obtener elemento por clase
    console.log(document.getElementsByClassName('holaMundo'));


// ..................CREAR ELEMENTOS.................................................

    // 1. document.element.insertAdjacentHTML(position, text)..........................................................

        // a. Crear una variable con los datos
        let nombres = 'Daniel';
        let telefono = 3008650319; 
        let datosParaHtml = 
        `<div>
            <h1>${nombres}</h1>
            <h1>${telefono}</h1>
        </div>`


        // b. Obtener el selector del contenedor que se vaya a usar
        let contenedor = document.querySelector('.contenedor'); 
        console.log(contenedor);

        // c. utilizamos el metodo insertAdjacentHTML sobre el selector 
            // Argumentos

            /*
            Parameters
                1. position......................
                A string representing the position relative to the element. Must be one of the following strings:

                    "beforebegin"
                    Before the element. Only valid if the element is in the DOM tree and has a parent element.

                    "afterbegin"
                    Just inside the element, before its first child.

                    "beforeend":
                    Just inside the element, after its last child.

                    "afterend"
                    After the element. Only valid if the element is in the DOM tree and has a parent element.


                        <!-- beforebegin -->
                        <p>
                            <!-- afterbegin -->
                            foo
                            <!-- beforeend -->
                        </p>
                        <!-- afterend -->

                2. text........................................................................
                    The string to be parsed as HTML or XML and inserted into the tree.
            
            
            */ 
                  
            contenedor.insertAdjacentHTML("beforebegin",datosParaHtml)
            contenedor.insertAdjacentHTML("afterbegin",datosParaHtml)
            contenedor.insertAdjacentHTML("beforeend",datosParaHtml)
            contenedor.insertAdjacentHTML("afterend",datosParaHtml)


    // 2 document.createElement(etiqueta)

        // a. Crear una nueva etiqueta
            const elemento = document.createElement('div')

        // b. Agregarle clases
            elemento.classList.add('claseJS')

        // c. Agregar SOLO texto a la etiqueta 1
            // elemento.textContent = "Esta es una nueva etiqueta"

        // d. Agregar contenido y etiquetas 
            elemento.innerHTML = `hola, este es un nuevo botón <button class="ejemplo">Este es un botón</button>`


        // e. Traemos el contenedor que lo va a contener
            const contenedorDos = document.querySelector('.contenedorDos')
        
        // f. Y lo añadimos a ese contenedor con el metodo prepend (Como hijo primer hijo del elemento)
            contenedorDos.prepend(elemento)

        // g Y con append lo añadlimos como último hijo
            contenedorDos.append(elemento)
        
            
        // h. De esta manera (con prepend, append, before y after) solo se puede insertar el elemento una sola vez a no ser de (ver siguiente letra)
            
        // i. En caso de quere insertarlo en varios lugares debemos de generar una variable con una copia del elemento
            contenedorDos.prepend(elemento.cloneNode(true))
            
        // j. Con before lo añadimos antes del encabezado
            contenedorDos.before(elemento.cloneNode(true))


        // j. Con after lo añadimos despues del encabezado
            contenedorDos.after(elemento.cloneNode(true))

// ....................ELIMINAR ELEMENTOS...........................................

    // a. se utiliza el metodo remove
        // document.querySelector('.ejemplo').addEventListener('click', function(){
        //     elemento.remove()
        // })

    // b. La segunda opción es mediante parentElement.removeChild(elementoAEliminar)
        document.querySelector('.ejemplo').addEventListener('click', function(){
            elemento.parentElement.removeChild(elemento)
        })

