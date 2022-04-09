// WEB 

// MODELO CLIENTE <---> SERVIDOR 

    // CARGA INICIAL DE LA PAGINA
        // 1. Al entrar a un navegador la URL que ingresamos hace una solicitud a servidor, el cual nos manda como respuesta la pagina solicitadas

    // CONSULTA DE DATOS
        // 1. Al igual que al solicitar una pagina, una consulta, solicita datos de un servidor que son entregados posteriormente por este mismo.


    // 1. ClIENTE

        // URL 
            // Solicitud => https//:dominio.com/recurso
                //1. Protocolo http o https Protocolo de transferencia de hipertexto 
                //2. Dominio 
                //3. recursos


        //DNS
            // Servidor que convierte la url en una dirección IP

        // IP 
            // Es la dirección real del servidor
            //  Protocolo     IP       Puerto
            //      |         |          |
            // https//:104.123.123.542:403; 

        // CONEXIÓN TCP/IP SOCKET

            // TCP es un protocolo de control de transmisión / IP es el protocolo de internet, y juntos son protocolos que definen como viajan los datos a traves de la web, son el sistema de control fundamental internet, pues ellos establecen como se mueven los datos por medio de internet
            // Al hacer la solicitud esta conexión se mantiene activa todo el tiempo que se necesario, para transferir archivos del sitio o datos


            // Su principal tarea es dividir las solicitudes y respuestas en miles de pequeños fragmentos llamados paquetes y enviarlos de ida y vuelta, la IP enruta estos paquetes por medio de internet 


        // HTTP REQUEST

            // Metodos 

                //1. GET para solicitar Datos 
                //2. POST para enviar datos 
                //3. PUT y PATCH para modificar datos

        // HTTPS
            // La principal diferencia es que es un protocolo que está cifrado por medio de TLS o SSL 
