---
sidebar_position: 2
---

# Introducción al kit digital USS para desarrolladores


Para comenzar a usar los componentes del kit, se debe cargar la librería de componentes:


## Vía CDN

### CSS
Copia y pega la hoja de estilos ```<link>``` dentro de la etiqueta ```<head>``` antes que cualquier otro estilo.

```html

<link rel="stylesheet" href="https://url-cdn/uss/css/uss-kitdigital.css"/>

```

:::tip Importante

Con este archivo enlazado ya puedes empezar a usar los componentes.

:::


### Javascript

Para activar la funcionalidad de los componentes interactivos debes agregar demás el archivo Javascript antes del final de la etiqueta ```<body>```

```html

<script src="https://uss.s3.amazonaws.com/uss-kitdigital/js/uss-kitdigital.js"></script>


```

## Plantilla base

Agregando ambas etiquetas puedes comenzar la construcción de un sitio usando los componentes. 

El HTML inicial debería lucir como ésto:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://url-cdn/uss/css/uss-kitdigital.css"
    />
    <title>Kit Digital USS</title>
  </head>
  <body>
    <div class="container">
      <h1>Contenido</h1>
    </div>
  </body>
  <script src="https://uss.s3.amazonaws.com/uss-kitdigital/js/uss-kitdigital.js"></script>
</html>

```