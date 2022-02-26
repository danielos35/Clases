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

// .......CREAR Y SELECCIONAR ELEMENTOS

    // 1. document.element.insertAdjacentHTML(position, text)
    document.element