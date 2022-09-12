---
sidebar_position: 2
---

import HtmlRenderer from '@site/src/components/HtmlRenderer';

I can write **Markdown** alongside my _JSX_!

# Introducción al kit digital USS para desarrolladores

Para comenzar a usar los componentes del kit, se debe cargar la librería de componentes:

## Vía CDN

### CSS

Copia y pega la hoja de estilos `<link>` dentro de la etiqueta `<head>` antes que cualquier otro estilo.

<HtmlRenderer  category="buttons" name="primary" />
<HtmlRenderer  category="navigation" name="pagination" />
<HtmlRenderer  category="navigation" name="breadcrumb" />
<HtmlRenderer  category="content" name="accordion" />

Con el archivo enlazado ya puedes empezar a usar los componentes

### Javascript

Para activar la funcionalidad de los componentes interactivos (Collapses, modal, accordion, dropdown) debes agregar demás el archivo Javascript antes del final de la etiqueta
