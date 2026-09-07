# Mueblería Hermanos Jota

Sitio web responsive para la mueblería artesanal Hermanos Jota. El proyecto
presenta el catálogo de productos, el detalle de cada pieza y la información
de contacto del taller, con una experiencia completamente client-side.

## Descripción

La aplicación simula una experiencia de e-commerce sin backend ni base de
datos externa. Los productos se cargan desde un dataset JavaScript local y las
interacciones se resuelven en el navegador mediante JavaScript vanilla.

Incluye:

- Landing page con hero, pilares de la marca y productos destacados.
- Catálogo responsive con renderizado dinámico de productos.
- Ficha individual de producto mediante el parámetro `?id=` de la URL.
- Formulario de contacto con validación y mensaje de confirmación simulado.
- Header responsive con navegación mobile-first y menú desplegable.
- Footer compartido con ubicación, horarios y canales de contacto.
- Iconos y logo en formato SVG dentro de `assets/icons/`.

## Tecnologías

- HTML5 semántico.
- CSS3 con variables de diseño, Flexbox, Grid y media queries.
- JavaScript ES6+ sin frameworks ni dependencias externas.
- Google Fonts: Inter y Playfair Display.

## Estructura del proyecto

```text
.
├── index.html
├── pages/
│   ├── contacto.html
│   ├── producto.html
│   └── productos.html
├── assets/
│   ├── icons/
│   │   ├── logo.svg
│   │   ├── clock-two-svgrepo-com.svg
│   │   ├── google-maps-platform-svgrepo-com.svg
│   │   ├── instagram-logo-facebook-2-svgrepo-com.svg
│   │   └── whatsapp-svgrepo-com.svg
│   └── img/
├── css/
│   └── styles.css
├── js/
│   ├── catalogo.js
│   ├── contacto.js
│   ├── detalle.js
│   ├── header.js
│   └── data/
│       └── productos.js
├── AGENTS.md
├── DESIGN.md
└── README.md
```

## Ejecución local

El proyecto no requiere instalación de paquetes ni proceso de compilación.

### Opción rápida

Abrir `index.html` directamente en el navegador.

### Servidor local recomendado

Desde la raíz del proyecto, ejecutar:

```bash
python -m http.server 8000
```

Luego visitar [http://localhost:8000](http://localhost:8000).

El servidor local permite probar correctamente las rutas relativas y la
navegación entre las páginas.

## Páginas principales

| Página                     | Descripción                                    |
| -------------------------- | ---------------------------------------------- |
| `index.html`               | Inicio, presentación de la marca y destacados. |
| `pages/productos.html`     | Catálogo completo de productos.                |
| `pages/producto.html?id=1` | Detalle de un producto específico.             |
| `pages/contacto.html`      | Formulario, ubicación y datos del taller.      |

## JavaScript

- `js/data/productos.js`: dataset local expuesto como `globalThis.productos`.
- `js/catalogo.js`: renderiza el catálogo y sus estados de carga/vacío.
- `js/detalle.js`: busca el producto indicado por `?id=` y completa la ficha.
- `js/contacto.js`: valida el formulario y muestra el estado de confirmación.
- `js/header.js`: controla el menú responsive y sus atributos ARIA.

## Diseño y accesibilidad

Los tokens visuales se centralizan en `css/styles.css` y se documentan en
`DESIGN.md`. La interfaz sigue una estrategia mobile-first y utiliza:

- HTML semántico.
- Labels asociados a sus controles mediante `for` e `id`.
- Estados de foco visibles.
- Atributos ARIA para navegación, errores y mensajes de estado.
- Enlaces relativos compatibles con hosting estático.

## Integrantes del Grupo 8

- Martinez Laureano
- Drovandi Enzo
- Cabanne Gonzalo
- Olmedo Joaquín
- Iván Fierros

## Convenciones de colaboración

- Crear ramas con el formato `feature/<descripcion>`, `fix/<descripcion>` o
  `chore/<descripcion>`.
- Usar commits convencionales, por ejemplo:
  `style(contacto): ajusta formulario responsive`.
- Mantener `index.html` en la raíz.
- No incorporar frameworks ni herramientas de build sin una decisión explícita
  del equipo.
