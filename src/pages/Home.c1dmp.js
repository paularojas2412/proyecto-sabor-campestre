// Referencia de la API de Velo: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comida Campesina Software</title>
    
    <!-- Enlaces a archivos CSS, fuentes, u otros recursos -->

    <script>
        // Función para mostrar un mensaje de bienvenida
        function mostrarMensajeBienvenida() {
            alert("¡Bienvenido a nuestro Software de Comida Campesina!");
        }

        // Función para cambiar el tema de la página
        function cambiarTema(tema) {
            // Lógica para cambiar el tema (puede requerir manipulación del DOM o cambios en clases CSS)
            // Ejemplo: document.body.classList.add('tema-oscuro') o document.body.style.backgroundColor = '#333';
        }

        // Función para redirigir a la página de productos
        function irAPaginaProductos() {
            window.location.href = 'productos.html';
        }
    </script>

    <!-- Enlaces a archivos JavaScript adicionales, si es necesario -->
</head>
<body>

<!-- Contenido HTML de la página -->

<script>
    // Llamada a la función de bienvenida al cargar la página
    window.onload = mostrarMensajeBienvenida;
</script>

</body>
</html>

});