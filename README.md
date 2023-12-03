# App_NodeJs_R
## Estructura de la Aplicación

Este repositorio contiene una aplicación sencilla que utiliza Express para manejar rutas y mostrar contenido estático.

## Estructura de Carpetas

- **src**: Contiene el código fuente de la aplicación.
    - **app.js**: Este archivo es el punto de entrada principal de la aplicación. Configura Express y define las rutas principales.
    - **routes**: Carpeta que contiene archivos de rutas.
        - **index_routes.js**: Define la ruta principal '/' que utiliza un controlador desde '../controllers/index_controller'.
    - **controllers**: Carpeta que contiene archivos de controladores.
        - **index_controller.js**: Contiene la lógica para la ruta principal. Envia una respuesta con un HTML que muestra un mensaje y está diseñado con estilos CSS incrustados.
    - **public**: Carpeta que contiene archivos estáticos públicos accesibles desde el servidor.
        - **index.html**: Archivo HTML principal para la ruta secundaria. Muestra un encabezado, un párrafo y un enlace.
        - **css**: Carpeta que contiene archivos de estilos.
            - **style.css**: Archivo CSS que define estilos para la página HTML.

## Despliegue y Ejecución

Para ejecutar esta aplicación, asegúrate de tener Node.js instalado y luego instala la dependencia de Express ejecutando el siguiente comando:

