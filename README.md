# Parcial1_desarrolloweb

Este proyecto es una aplicación web simple desarrollada con fines educativos para demostrar varios conceptos de desarrollo web front-end.

## Características

*   **Página de inicio de sesión**: Una página de inicio de sesión con validación de credenciales del lado del cliente.
*   **Página principal modular**: La página principal carga dinámicamente componentes reutilizables como el encabezado, el pie de página y la barra lateral.
*   **Renderizado de productos dinámicos**: Los productos se cargan desde un archivo JSON y se muestran dinámicamente en la página.
*   **Componentes web**: Se utiliza un componente web personalizado (`<product-card>`) para mostrar cada producto, encapsulando su estructura y estilo.

## Explicación de Conceptos

### Fragmentos (HTML dinámico)

Los fragmentos son porciones de HTML (como `header.html`, `footer.html`, y `sidebar.html`) que se cargan dinámicamente en la página principal usando JavaScript. Este enfoque permite reutilizar componentes de la interfaz de usuario en diferentes páginas, manteniendo el código más organizado y fácil de mantener. En este proyecto, la función `loadComponent` en `js/main.js` utiliza la API `fetch` para cargar estos fragmentos en sus respectivos contenedores.

### Plantillas (`<template>`)

La etiqueta `<template>` de HTML se utiliza para contener HTML que no se renderiza inmediatamente cuando se carga una página. Su contenido puede ser clonado y utilizado por JavaScript para generar contenido dinámico. Aunque en la versión final del proyecto se reemplazó por un Web Component, el uso inicial de `<template>` demostró cómo se puede crear una estructura base para los productos que luego se clona y se rellena con datos de un archivo JSON.

### Web Components

Los Web Components son un conjunto de tecnologías web que permiten crear elementos HTML personalizados, reutilizables y encapsulados. En este proyecto, se creó un componente `<product-card>` que recibe los datos del producto (nombre, precio, descripción e imagen) como atributos. Este componente utiliza el **Shadow DOM** para encapsular su propia estructura HTML y estilos CSS, lo que evita conflictos con los estilos globales de la aplicación y hace que el componente sea autónomo y fácil de reutilizar.

## Implementación del Formulario de Inicio de Sesión

El formulario de inicio de sesión (`login.html`) utiliza JavaScript (`js/login.js`) para validar las credenciales del usuario. Las credenciales están "quemadas" en el código (hardcoded) solo con fines educativos.

*   **Usuario**: `user`
*   **Contraseña**: `password`

Si las credenciales son correctas, el usuario es redirigido a la página principal (`index.html`). De lo contrario, se muestra un mensaje de error.

**Nota de seguridad**: Este método de validación no es seguro y no debe utilizarse en aplicaciones reales. En un entorno de producción, la autenticación siempre debe realizarse en el lado del servidor.

## Buenas Prácticas Aplicadas

*   **Separación de responsabilidades**: El código está organizado en diferentes archivos y carpetas según su función (HTML, CSS, JavaScript, componentes, datos).
*   **Nomenclatura consistente**: Se utilizaron convenciones de nomenclatura como `camelCase` para variables y funciones de JavaScript y `kebab-case` para clases de CSS.
*   **Código modular y reutilizable**: El uso de fragmentos y Web Components promueve la reutilización del código y la modularidad.
*   **Comentarios en el código**: Se agregaron comentarios para explicar las partes más importantes del código.

## Evidencia de Colaboración en GitHub

*(Esta sección debe ser completada por el equipo de desarrollo con enlaces a commits, pull requests, etc.)*