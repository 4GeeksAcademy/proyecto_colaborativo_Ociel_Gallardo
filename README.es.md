# HTML Hello

El boilerplate más básico para cualquier estudiante de 4Geeks Academy, empieza tu primer sitio web desde cero.

> Tienes un video tutorial sobre [cómo usar esta plantilla para crear tu primer sitio web aquí](https://youtu.be/dfbDCMu_p-0).

## ¿Qué hacer a continuación?

Crea o usa los archivos HTML del proyecto y ve el resultado en vivo corriendo un servidor web utilizando el siguiente comando:

```bash
$ pip3 install flask && python3 server.py
```

- Este repositorio ya incluye un prototipo eCommerce con estas vistas:
  - `index.html`
  - `catalogo.html`
  - `producto.html`
  - `carrito.html`
  - `checkout.html`
- Los estilos se organizan en `css/base`, `css/layout`, `css/components` y `css/pages`.
- El JavaScript se organiza en `js/core`, `js/state`, `js/components` y `js/pages`.
- Los productos mock están en `data/products.json`.

Ejemplo de importación de CSS en el `<head>`:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

- Si deseas usar Tailwind CSS, agrégalo de forma opcional mediante el CDN oficial de Tailwind CSS v4 dentro del mismo `<head>`:

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```


## Agradecimientos

Esta y otras plantillas son utilizadas para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp). 

Realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. 

Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero/?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/desarrollador-full-stack/desarrollador-full-stack), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
